const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CLIENT_ID_PATTERN = /^[0-9]+\.[0-9]+$/;
const SESSION_ID_PATTERN = /^[0-9]+$/;
const SAFE_ATTRIBUTION_PATTERN = /^[A-Za-z0-9._~-]+$/;
const API_TIMEOUT_MS = 1500;

function purposeGranted(system, purposeId) {
	if (!purposeId) return false;
	return system?.consent?.[purposeId] === true;
}

function safeValue(value, maxLength) {
	return typeof value === "string" &&
		value.length > 0 &&
		value.length <= maxLength &&
		SAFE_ATTRIBUTION_PATTERN.test(value)
		? value
		: undefined;
}

function checkoutContext(context, env) {
	const system = context?.system;
	const client = context?.client;
	if (client?.__zarazTrack !== "begin_checkout") return undefined;

	const checkoutAttemptId = client.checkout_attempt_id;
	if (typeof checkoutAttemptId !== "string" || !UUID_PATTERN.test(checkoutAttemptId)) {
		return undefined;
	}

	const consent = {
		analytics_storage: purposeGranted(system, env.ANALYTICS_PURPOSE_ID) ? "granted" : "denied",
		ad_storage: purposeGranted(system, env.AD_STORAGE_PURPOSE_ID) ? "granted" : "denied",
		ad_user_data: purposeGranted(system, env.AD_USER_DATA_PURPOSE_ID) ? "granted" : "denied",
		ad_personalization: purposeGranted(system, env.AD_PERSONALIZATION_PURPOSE_ID)
			? "granted"
			: "denied",
	};

	// The API requires real GA identity. A denied or identity-less event is intentionally skipped.
	if (consent.analytics_storage !== "granted") return undefined;

	const clientKv = system?.clientKV;
	const gaClientId = clientKv?.[`${env.GA_TOOL_ID}_ga4`];
	const gaSessionId = clientKv?.[`${env.GA_TOOL_ID}_ga4sid`];
	if (
		typeof gaClientId !== "string" ||
		!CLIENT_ID_PATTERN.test(gaClientId) ||
		typeof gaSessionId !== "string" ||
		!SESSION_ID_PATTERN.test(gaSessionId)
	) {
		return undefined;
	}

	const payload = {
		checkout_attempt_id: checkoutAttemptId,
		ga_client_id: gaClientId,
		ga_session_id: gaSessionId,
		consent,
		observed_at: new Date().toISOString(),
	};
	const measurementRunId = safeValue(client.measurement_run_id, 100);
	if (measurementRunId) payload.measurement_run_id = measurementRunId;

	const advertisingConsentGranted =
		consent.ad_storage === "granted" &&
		consent.ad_user_data === "granted" &&
		consent.ad_personalization === "granted";
	if (advertisingConsentGranted) {
		for (const field of ["gclid", "gbraid", "wbraid"]) {
			const value = safeValue(client[field], 256);
			if (value) payload[field] = value;
		}
	}

	return payload;
}

async function sendCheckoutContext(payload, env) {
	const response = await fetch(env.CHECKOUT_CONTEXT_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${env.CHECKOUT_CONTEXT_SECRET}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
		signal: AbortSignal.timeout(API_TIMEOUT_MS),
	});
	if (!response.ok) throw new Error(`checkout context API returned ${response.status}`);

	if (payload.measurement_run_id) {
		const identityBytes = new TextEncoder().encode(
			`${payload.ga_client_id}|${payload.ga_session_id}`,
		);
		const identityDigest = await crypto.subtle.digest("SHA-256", identityBytes);
		const identityFingerprint = Array.from(new Uint8Array(identityDigest))
			.map((byte) => byte.toString(16).padStart(2, "0"))
			.join("");
		console.info("Checkout context proof stored", {
			checkout_attempt_id: payload.checkout_attempt_id,
			measurement_run_id: payload.measurement_run_id,
			identity_fingerprint: identityFingerprint,
		});
	}
}

export default {
	async fetch(request, env, executionContext) {
		let context;
		try {
			context = await request.json();
		} catch {
			return new Response("Invalid Zaraz context", { status: 400 });
		}

		const payload = checkoutContext(context, env);
		if (payload) {
			executionContext.waitUntil(
				sendCheckoutContext(payload, env).catch((error) => {
					console.warn("Checkout context handoff failed", {
						checkout_attempt_id: payload.checkout_attempt_id,
						reason: error instanceof Error ? error.message : "unknown error",
					});
				}),
			);
		}

		return Response.json(context);
	},
};
