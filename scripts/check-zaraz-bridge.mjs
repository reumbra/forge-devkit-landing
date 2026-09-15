import assert from "node:assert/strict";

import bridge from "../workers/zaraz-checkout-context/index.mjs";

const ATTEMPT_ID = "018f4f4e-a771-4b4a-9f2e-6fcbb923f5ef";
const ENV = {
	ANALYTICS_PURPOSE_ID: "CdgR",
	CHECKOUT_CONTEXT_SECRET: "unit-test-placeholder",
	CHECKOUT_CONTEXT_URL: "https://api.example.test/checkout-context",
	GA_TOOL_ID: "UYgN",
};

function zarazContext(overrides = {}) {
	return {
		system: {
			clientKV: {
				UYgN_ga4: "123456789.987654321",
				UYgN_ga4sid: "1789500000",
			},
			consent: { CdgR: true },
			...overrides.system,
		},
		client: {
			__zarazTrack: "begin_checkout",
			checkout_attempt_id: ATTEMPT_ID,
			gclid: "gclid-not-permitted-without-ad-consent",
			measurement_run_id: "bridge-proof-1",
			...overrides.client,
		},
	};
}

async function invoke(context, fetchImpl) {
	const scheduled = [];
	const originalFetch = globalThis.fetch;
	globalThis.fetch = fetchImpl;
	try {
		const response = await bridge.fetch(
			new Request("https://zaraz-context.invalid/", {
				method: "POST",
				body: JSON.stringify(context),
			}),
			ENV,
			{ waitUntil: (promise) => scheduled.push(promise) },
		);
		return { response, scheduled };
	} finally {
		globalThis.fetch = originalFetch;
	}
}

const calls = [];
const context = zarazContext();
const proofLogs = [];
const originalInfo = console.info;
console.info = (...values) => proofLogs.push(values);
const success = await invoke(context, async (url, init) => {
	calls.push({ url, init });
	return new Response(null, { status: 201 });
});
assert.equal(success.response.status, 200);
assert.deepEqual(
	await success.response.json(),
	context,
	"the enricher must preserve Zaraz context",
);
await Promise.all(success.scheduled);
assert.equal(calls.length, 1, "one begin_checkout request must schedule one context write");
const payload = JSON.parse(calls[0].init.body);
assert.equal(payload.checkout_attempt_id, ATTEMPT_ID);
assert.equal(payload.ga_client_id, "123456789.987654321");
assert.equal(payload.ga_session_id, "1789500000");
assert.equal(payload.measurement_run_id, "bridge-proof-1");
assert.deepEqual(payload.consent, {
	analytics_storage: "granted",
	ad_storage: "denied",
	ad_user_data: "denied",
	ad_personalization: "denied",
});
assert.equal(payload.gclid, undefined, "click IDs require all advertising consent states");
assert.equal(calls[0].init.headers.Authorization, "Bearer unit-test-placeholder");
console.info = originalInfo;
assert.equal(proofLogs.length, 1);
const proofLog = JSON.stringify(proofLogs[0]);
assert.match(proofLog, /identity_fingerprint/);
assert.doesNotMatch(proofLog, /123456789\.987654321|1789500000/);

let deniedCalls = 0;
const denied = await invoke(zarazContext({ system: { consent: { CdgR: false } } }), async () => {
	deniedCalls += 1;
	return new Response(null, { status: 201 });
});
assert.equal(denied.response.status, 200);
assert.equal(deniedCalls, 0, "denied analytics consent must not send identity");

for (const clientKV of [{ UYgN_ga4sid: "1789500000" }, { UYgN_ga4: "123.456" }]) {
	let identitylessCalls = 0;
	const identityless = await invoke(zarazContext({ system: { clientKV } }), async () => {
		identitylessCalls += 1;
		return new Response(null, { status: 201 });
	});
	assert.equal(identityless.response.status, 200);
	assert.equal(identitylessCalls, 0, "missing cid or sid must not fabricate identity");
}

const originalWarn = console.warn;
console.warn = () => {};
try {
	const failed = await invoke(zarazContext(), async () => {
		throw new Error("simulated API timeout");
	});
	assert.equal(failed.response.status, 200, "API failure must not block checkout processing");
	await Promise.all(failed.scheduled);
} finally {
	console.warn = originalWarn;
}

const pending = await invoke(zarazContext(), () => new Promise(() => {}));
assert.equal(
	pending.response.status,
	200,
	"a pending API request must not delay the Context Enricher response",
);
assert.equal(pending.scheduled.length, 1);

let unrelatedCalls = 0;
const unrelated = await invoke(
	zarazContext({ client: { __zarazTrack: "select_item" } }),
	async () => {
		unrelatedCalls += 1;
		return new Response(null, { status: 201 });
	},
);
assert.equal(unrelated.response.status, 200);
assert.equal(unrelatedCalls, 0, "non-checkout events must not write checkout context");

console.log(
	"Zaraz bridge contract passed: exact KV identity, consent gate, once-per-event and fail-open",
);
