/**
 * Forge DevKit Analytics - Zaraz + GA4
 * See docs/tracking-plan.md for full event catalog
 *
 * Events implemented:
 * - section_view (IntersectionObserver, homepage only)
 * - cta_click (event delegation on links to pricing/anchors)
 * - faq_toggle (toggle event on .accordion-item)
 * - view_item (IntersectionObserver on [data-tier-id])
 * - select_item (click on LemonSqueezy links inside [data-tier-id])
 * - begin_checkout (checkout-link click, once per checkout attempt)
 * - lang_switch (click on [data-lang-switch])
 * - comparison_view (pageload on /vs/*)
 * - docs_view (pageload on /docs/*)
 * - pricing_feature_table_view (IntersectionObserver)
 * - module_click (click on links to /modules/*)
 * - persona_select (click on simulator persona card)
 * - assembly_complete (custom event from simulator)
 * - customize_toggle (click on customize panel toggle)
 * - capability_toggle (checkbox change on capability)
 * - rebuild_click (click on rebuild button)
 */

declare const zaraz:
	| { track: (event: string, props?: Record<string, unknown>) => void }
	| undefined;

interface CheckoutTierData {
	item_id: string;
	item_name: string;
	price: number;
	currency: string;
	item_category: string;
	source_page: string;
	page_language: string;
}

interface CheckoutAttemptData {
	checkout_attempt_id: string;
	attribution: Attribution;
	measurement_run_id?: string;
}

const ATTRIBUTION_STORAGE_KEY = "forge_attribution_v1";
const MEASUREMENT_RUN_STORAGE_KEY = "forge_measurement_run_v1";
const ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const MEASUREMENT_RUN_TTL_MS = 2 * 60 * 60 * 1000;
const MAX_ATTRIBUTION_VALUE_LENGTH = 200;

const ATTRIBUTION_FIELDS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
	"gclid",
	"gbraid",
	"wbraid",
] as const;

type AttributionField = (typeof ATTRIBUTION_FIELDS)[number];
type Attribution = Partial<Record<AttributionField, string>>;

interface StoredAttribution {
	values: Attribution;
	expires_at: number;
}

interface StoredMeasurementRun {
	value: string;
	expires_at: number;
}

function queryValue(name: string): string | undefined {
	const value = new URLSearchParams(location.search).get(name)?.trim();
	return value ? value.substring(0, MAX_ATTRIBUTION_VALUE_LENGTH) : undefined;
}

function readStoredAttribution(now = Date.now()): StoredAttribution | undefined {
	try {
		const raw = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
		if (!raw) return undefined;
		const stored = JSON.parse(raw) as StoredAttribution;
		if (!stored.values || !Number.isFinite(stored.expires_at) || stored.expires_at <= now) {
			localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
			return undefined;
		}
		return stored;
	} catch {
		return undefined;
	}
}

function captureAttribution(now = Date.now()): Attribution {
	const stored = readStoredAttribution(now);
	const values: Attribution = { ...(stored?.values || {}) };
	let changed = false;

	for (const field of ATTRIBUTION_FIELDS) {
		const value = queryValue(field);
		if (value && !values[field]) {
			values[field] = value;
			changed = true;
		}
	}

	if (Object.keys(values).length === 0) return values;
	if (stored && !changed) return values;

	try {
		localStorage.setItem(
			ATTRIBUTION_STORAGE_KEY,
			JSON.stringify({ values, expires_at: stored?.expires_at || now + ATTRIBUTION_TTL_MS }),
		);
	} catch {
		// Storage is optional. The current checkout still receives query attribution below.
	}
	return values;
}

function readMeasurementRunId(now = Date.now()): string | undefined {
	try {
		const raw = sessionStorage.getItem(MEASUREMENT_RUN_STORAGE_KEY);
		if (!raw) return undefined;
		const stored = JSON.parse(raw) as StoredMeasurementRun;
		if (!stored.value || !Number.isFinite(stored.expires_at) || stored.expires_at <= now) {
			sessionStorage.removeItem(MEASUREMENT_RUN_STORAGE_KEY);
			return undefined;
		}
		return stored.value;
	} catch {
		return undefined;
	}
}

function captureMeasurementRunId(now = Date.now()): string | undefined {
	const explicitRunId = queryValue("measurement_run_id");
	if (!explicitRunId) return readMeasurementRunId(now);

	try {
		sessionStorage.setItem(
			MEASUREMENT_RUN_STORAGE_KEY,
			JSON.stringify({ value: explicitRunId, expires_at: now + MEASUREMENT_RUN_TTL_MS }),
		);
	} catch {
		// The explicit value still applies to the current page when storage is unavailable.
	}
	return explicitRunId;
}

captureAttribution();
captureMeasurementRunId();

function track(event: string, props: Record<string, unknown> = {}) {
	if (typeof zaraz !== "undefined") {
		zaraz.track(event, props);
	}
}

function getLang(): string {
	return document.documentElement.lang || "en";
}

function getPageType(): string {
	const path = location.pathname.replace(/^\/ru/, "") || "/";
	if (path === "/") return "homepage";
	if (path === "/pricing/") return "pricing";
	// The index must be tested before the prefix branch: "/modules/" satisfies
	// both, so the prefix would otherwise swallow the index page.
	if (path === "/modules/") return "modules";
	if (path.startsWith("/modules/")) return "module";
	if (path.startsWith("/vs/")) return "comparison";
	if (path.startsWith("/docs/")) return "docs";
	return "other";
}

function getCheckoutPlan(itemId: string): string {
	return itemId === "core" ? "starter" : itemId;
}

function createCheckoutAttempt(): CheckoutAttemptData {
	return {
		checkout_attempt_id: crypto.randomUUID(),
		attribution: captureAttribution(),
		measurement_run_id: captureMeasurementRunId(),
	};
}

function enrichCheckoutUrl(
	href: string,
	tier: CheckoutTierData,
	attempt: CheckoutAttemptData,
): string {
	const url = new URL(href, location.href);
	const customData: Record<string, string> = {
		plan: getCheckoutPlan(tier.item_id),
		checkout_attempt_id: attempt.checkout_attempt_id,
		...attempt.attribution,
		source_page: tier.source_page,
		page_language: tier.page_language,
	};
	if (attempt.measurement_run_id) customData.measurement_run_id = attempt.measurement_run_id;

	for (const [key, value] of Object.entries(customData)) {
		url.searchParams.set(`checkout[custom][${key}]`, value);
	}
	return url.toString();
}

// --- Section View (homepage only) ---

const SECTION_INDEX: Record<string, number> = {
	hero: 1,
	problems: 2,
	solution: 3,
	journey: 4,
	"architecture-audit": 5,
	"autopilot-orchestration": 6,
	"requirement-traceability": 7,
	"how-it-works": 8,
	modules: 9,
	dashboard: 10,
	pricing: 11,
	author: 12,
	faq: 13,
	"final-cta": 14,
};

function initSectionTracking() {
	if (getPageType() !== "homepage") return;

	const seen = new Set<string>();
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const id = (entry.target as HTMLElement).id;
				if (entry.isIntersecting && id && !seen.has(id)) {
					seen.add(id);
					track("section_view", {
						section_id: id,
						section_index: SECTION_INDEX[id] || 0,
						page_language: getLang(),
					});
				}
			}
		},
		{ threshold: 0.3 },
	);

	for (const el of document.querySelectorAll("section[id]")) {
		if (SECTION_INDEX[(el as HTMLElement).id]) {
			observer.observe(el);
		}
	}
}

// --- CTA Click (event delegation) ---

function initCtaTracking() {
	document.addEventListener("click", (e) => {
		const link = (e.target as HTMLElement).closest("a") as HTMLAnchorElement | null;
		if (!link) return;

		const href = link.getAttribute("href") || "";

		// Skip LemonSqueezy links (handled by select_item)
		if (href.includes("lemonsqueezy")) return;

		// Only track CTA-like links (to pricing, anchors, or explicit data-track-cta)
		const isExplicitCta = link.hasAttribute("data-track-cta");
		const isPricingLink = href.includes("pricing") || href === "#pricing";
		const isAnchorCta = href.startsWith("#") && href !== "#";
		if (!isExplicitCta && !isPricingLink && !isAnchorCta) return;

		// Skip footer/nav informational links
		if (link.closest("footer") && !isExplicitCta) return;

		// Determine location
		let ctaLocation = link.dataset.ctaLocation || "";

		if (!ctaLocation) {
			if (link.id === "floating-cta") {
				ctaLocation = "floating_mobile";
			} else if (link.closest("nav")) {
				ctaLocation = "nav";
			} else {
				// Ghost CTA or section CTA
				const ghost = link.closest("[data-cta-location]") as HTMLElement | null;
				if (ghost) {
					ctaLocation = ghost.dataset.ctaLocation || "ghost";
				} else {
					const section = link.closest("section[id]") as HTMLElement | null;
					ctaLocation = section?.id || "unknown";
				}
			}
		}

		track("cta_click", {
			cta_location: ctaLocation,
			cta_text: (link.textContent || "").trim().substring(0, 80),
			cta_destination: href,
			page_language: getLang(),
			page_type: getPageType(),
		});
	});
}

// --- FAQ Toggle ---

function initFaqTracking() {
	for (const el of document.querySelectorAll(".accordion-item")) {
		el.addEventListener("toggle", () => {
			const details = el as HTMLDetailsElement;
			track("faq_toggle", {
				faq_id: details.dataset.faqId || "",
				faq_question: (details.querySelector("summary")?.textContent || "").trim().substring(0, 80),
				faq_action: details.open ? "open" : "close",
				faq_index: Number(details.dataset.faqIndex) || 0,
				page_type: getPageType(),
				page_language: getLang(),
			});
		});
	}
}

// --- Pricing: view_item + select_item ---

function initPricingTracking() {
	// view_item via IntersectionObserver
	const seen = new Set<string>();
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const card = entry.target as HTMLElement;
				const tierId = card.dataset.tierId;
				if (entry.isIntersecting && tierId && !seen.has(tierId)) {
					seen.add(tierId);
					track("view_item", {
						item_id: tierId,
						item_name: card.dataset.tierName || "",
						price: Number(card.dataset.tierPrice) || 0,
						currency: "EUR",
						item_category: "license",
					});
				}
			}
		},
		{ threshold: 0.5 },
	);

	for (const el of document.querySelectorAll("[data-tier-id]")) {
		observer.observe(el);
	}

	// Capture phase enriches href before Lemon.js handles the click on the link itself.
	document.addEventListener(
		"click",
		(e) => {
			const link = (e.target as HTMLElement).closest(
				"a[href*='lemonsqueezy']",
			) as HTMLAnchorElement | null;
			if (!link) return;

			const card = link.closest("[data-tier-id]") as HTMLElement | null;
			if (!card) return;

			const tierData = {
				item_id: card.dataset.tierId || "",
				item_name: card.dataset.tierName || "",
				price: Number(card.dataset.tierPrice) || 0,
				currency: "EUR",
				item_category: "license",
				source_page: getPageType(),
				page_language: getLang(),
			};
			const attempt = createCheckoutAttempt();

			link.setAttribute(
				"href",
				enrichCheckoutUrl(link.getAttribute("href") || "", tierData, attempt),
			);
			track("select_item", tierData);
			track("begin_checkout", {
				item_id: tierData.item_id,
				item_name: tierData.item_name,
				price: tierData.price,
				currency: tierData.currency,
				source_page: tierData.source_page,
				page_language: tierData.page_language,
				checkout_attempt_id: attempt.checkout_attempt_id,
				...attempt.attribution,
				...(attempt.measurement_run_id ? { measurement_run_id: attempt.measurement_run_id } : {}),
			});
		},
		true,
	);
}

// --- Language Switch ---

function initLangSwitchTracking() {
	for (const el of document.querySelectorAll("[data-lang-switch]")) {
		el.addEventListener("click", () => {
			const href = el.getAttribute("href") || "";
			track("lang_switch", {
				lang_from: getLang(),
				lang_to: href.startsWith("/ru") ? "ru" : "en",
				source_page: location.pathname,
			});
		});
	}
}

// --- Module Click ---

function initModuleClickTracking() {
	document.addEventListener("click", (e) => {
		const link = (e.target as HTMLElement).closest(
			"a[href*='/modules/']",
		) as HTMLAnchorElement | null;
		if (!link) return;

		const href = link.getAttribute("href") || "";
		const slug = href.replace(/.*\/modules\//, "").replace(/\/$/, "");
		if (!slug) return;

		let clickSource = "unknown";
		if (link.closest("nav")) clickSource = "nav_dropdown";
		else if (link.closest("#pipeline")) clickSource = "pipeline_diagram";
		else if (link.closest("#modules")) clickSource = "modules_grid";
		else if (link.closest("footer")) clickSource = "footer";
		else {
			const section = link.closest("section[id]") as HTMLElement | null;
			if (section) clickSource = section.id;
		}

		track("module_click", {
			module_slug: slug,
			click_source: clickSource,
			page_language: getLang(),
		});
	});
}

// --- Page Context Events (fire on load) ---

function initPageContextTracking() {
	const pageType = getPageType();
	const lang = getLang();
	const path = location.pathname.replace(/^\/ru/, "") || "/";

	if (pageType === "comparison") {
		track("comparison_view", {
			comparison_slug: path.replace("/vs/", "").replace(/\/$/, ""),
			page_language: lang,
		});
	}

	if (pageType === "docs") {
		track("docs_view", {
			docs_page: path.replace("/docs/", "").replace(/\/$/, ""),
			page_language: lang,
		});
	}

	// pricing_feature_table_view
	if (pageType === "pricing") {
		const table = document.querySelector("[data-track-feature-table]");
		if (table) {
			const obs = new IntersectionObserver(
				(entries) => {
					if (entries[0]?.isIntersecting) {
						track("pricing_feature_table_view", { page_language: lang });
						obs.disconnect();
					}
				},
				{ threshold: 0.3 },
			);
			obs.observe(table);
		}
	}
}

// --- Simulator (Ecosystem Section) ---

function initSimulatorTracking() {
	if (getPageType() !== "homepage") return;

	const lang = getLang();

	// persona_select: click on persona card
	document.addEventListener("click", (e) => {
		const card = (e.target as HTMLElement).closest(
			".sim-persona[data-persona]",
		) as HTMLElement | null;
		if (!card) return;

		track("persona_select", {
			persona_id: card.dataset.persona || "",
			page_language: lang,
		});
	});

	// assembly_complete: custom event dispatched from EcosystemSection.astro
	document.addEventListener("forge:assembly-complete", ((
		e: CustomEvent<{ persona: string; moduleCount: number }>,
	) => {
		track("assembly_complete", {
			persona_id: e.detail.persona,
			module_count: e.detail.moduleCount,
			page_language: lang,
		});
	}) as EventListener);

	// customize_toggle: expand/collapse customize panel
	const toggleBtn = document.getElementById("customize-toggle");
	if (toggleBtn) {
		toggleBtn.addEventListener("click", () => {
			const body = document.getElementById("customize-body");
			const isOpening = body?.classList.contains("hidden");
			track("customize_toggle", {
				action: isOpening ? "open" : "close",
				page_language: lang,
			});
		});
	}

	// capability_toggle: individual capability checkbox
	for (const cb of document.querySelectorAll(".sim-cap-cb[data-cap]")) {
		cb.addEventListener("change", () => {
			const input = cb as HTMLInputElement;
			track("capability_toggle", {
				capability_id: input.dataset.cap || "",
				enabled: input.checked,
				page_language: lang,
			});
		});
	}

	// rebuild_click: re-run assembly after customization
	const rebuildBtn = document.getElementById("rebuild-btn");
	if (rebuildBtn) {
		rebuildBtn.addEventListener("click", () => {
			track("rebuild_click", {
				page_language: lang,
			});
		});
	}
}

// --- Init all trackers ---

initSectionTracking();
initCtaTracking();
initFaqTracking();
initPricingTracking();
initLangSwitchTracking();
initModuleClickTracking();
initPageContextTracking();
initSimulatorTracking();
