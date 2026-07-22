#!/usr/bin/env node
/**
 * Privacy policy deploy gate (BL-101).
 *
 * The privacy policy describes feedback data that only exists once the API carries the
 * BL-099 columns and the plugin collects them. Publishing the policy first produces a
 * legal document that overstates the product, and nothing about that failure is visible:
 * the page renders, the build passes, and the text reads as compliant.
 *
 * The previous control was a paragraph in a design document. This replaces "did someone
 * remember to read it" with "does the deployed API actually expose the capability".
 *
 * Behaviour:
 *   - No marker strings in the policy   -> pass, nothing to gate.
 *   - Markers present, capability live  -> pass.
 *   - Markers present, capability absent-> fail in a deploy environment, warn locally.
 *
 * Escape hatch: PRIVACY_GATE_SKIP=1. It prints loudly, because a silent bypass would
 * recreate the failure this gate exists to catch.
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const POLICY_FILES = ["src/pages/privacy.astro", "src/pages/ru/privacy.astro"];

/** Strings that only appear once the policy documents BL-099 collection. */
const MARKERS = [
	"technical project context",
	"reported severity",
	"consent records",
	"--forget",
];

// The app is served under the /velvet stage prefix in production: /health is a 404 there,
// /velvet/health is the real endpoint. Pointing at the wrong one would make this gate fail
// permanently and report the cause as "capability missing" rather than "wrong URL".
const API_URL = process.env.FORGE_API_URL ?? "https://api.reumbra.com/velvet";
const REQUIRED_FEATURE = "feedbackContext";

/** Cloudflare Pages sets CF_PAGES; generic CI sets CI. Either means this build ships. */
const IS_DEPLOY = Boolean(process.env.CF_PAGES || process.env.CI);

function fail(message) {
	console.error(`\n  privacy-gate FAILED\n\n  ${message}\n`);
	process.exit(1);
}

function warn(message) {
	console.warn(`\n  privacy-gate WARNING (not a deploy build, continuing)\n\n  ${message}\n`);
}

async function findMarkers() {
	const found = [];
	for (const rel of POLICY_FILES) {
		let text;
		try {
			text = (await readFile(join(ROOT, rel), "utf8")).toLowerCase();
		} catch {
			// A missing policy file is a different problem and not this gate's business.
			continue;
		}
		for (const marker of MARKERS) {
			if (text.includes(marker.toLowerCase()) && !found.includes(marker)) {
				found.push(marker);
			}
		}
	}
	return found;
}

/**
 * The API runs on Lambda behind a connection pooler, so a cold start can take tens of
 * seconds while a warm call takes about one. A single short-timeout probe therefore fails
 * intermittently on a healthy deployment - and a gate that cries wolf gets routed around
 * with PRIVACY_GATE_SKIP until it protects nothing. Retry before believing a negative;
 * only a definitive answer (the endpoint replied, and the feature is absent) fails fast.
 */
const ATTEMPTS = 3;
const TIMEOUT_MS = 45_000;

async function probeOnce(url) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
	try {
		const res = await fetch(url, { signal: controller.signal });
		if (!res.ok) return { definitive: false, reason: `${url} returned HTTP ${res.status}` };
		const body = await res.json();
		const value = body?.features?.[REQUIRED_FEATURE] ?? null;
		if (!value) {
			return {
				definitive: true,
				ok: false,
				reason: `${url} answered but does not report features.${REQUIRED_FEATURE}. The API is either an older build or its migration has not run.`,
			};
		}
		return { definitive: true, ok: true, value };
	} catch (err) {
		return { definitive: false, reason: `could not reach ${url}: ${err.message}` };
	} finally {
		clearTimeout(timer);
	}
}

async function readFeature() {
	const url = `${API_URL.replace(/\/$/, "")}/health`;
	let last = { ok: false, reason: "no attempt was made" };
	for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
		const result = await probeOnce(url);
		if (result.definitive) return result;
		last = result;
		if (attempt < ATTEMPTS) {
			console.log(`  privacy-gate: attempt ${attempt} inconclusive (${result.reason}), retrying`);
			await new Promise((r) => setTimeout(r, 2_000 * attempt));
		}
	}
	return { ok: false, reason: `${last.reason} (after ${ATTEMPTS} attempts)` };
}

const markers = await findMarkers();

if (markers.length === 0) {
	console.log("  privacy-gate: policy describes no gated collection, nothing to check");
	process.exit(0);
}

if (process.env.PRIVACY_GATE_SKIP === "1") {
	console.warn(
		`\n  privacy-gate BYPASSED via PRIVACY_GATE_SKIP=1\n` +
			`  The policy describes: ${markers.join(", ")}\n` +
			`  Nothing verified that the API can serve it. If this build is deployed, the\n` +
			`  published policy may describe collection that does not happen.\n`,
	);
	process.exit(0);
}

const feature = await readFeature();

if (feature.ok) {
	console.log(
		`  privacy-gate: API reports features.${REQUIRED_FEATURE}=${feature.value}, policy may ship`,
	);
	process.exit(0);
}

const message =
	`The privacy policy describes feedback collection that the deployed API does not\n` +
	`  confirm it supports.\n\n` +
	`  Policy markers found: ${markers.join(", ")}\n` +
	`  Reason: ${feature.reason}\n\n` +
	`  Required order: deploy the API (BL-099 columns + purge), publish the plugin, then\n` +
	`  deploy this site. See docs/plans/2026-07-22-feedback-context-extension-design.md\n` +
	`  in the ai-marketplace repository, section "Release ordering".\n\n` +
	`  To build anyway without deploying: PRIVACY_GATE_SKIP=1 npm run build`;

if (IS_DEPLOY) fail(message);
warn(message);
