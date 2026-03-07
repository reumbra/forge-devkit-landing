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
 * - begin_checkout (MutationObserver for LS overlay)
 * - lang_switch (click on [data-lang-switch])
 * - comparison_view (pageload on /vs/*)
 * - docs_view (pageload on /docs/*)
 * - pricing_feature_table_view (IntersectionObserver)
 * - module_click (click on links to /modules/*)
 */

declare const zaraz:
	| { track: (event: string, props?: Record<string, unknown>) => void }
	| undefined;

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
	if (path === "/pricing") return "pricing";
	if (path.startsWith("/modules/")) return "module";
	if (path === "/modules") return "modules";
	if (path.startsWith("/vs/")) return "comparison";
	if (path.startsWith("/docs/")) return "docs";
	return "other";
}

// --- Section View (homepage only) ---

const SECTION_INDEX: Record<string, number> = {
	hero: 1,
	problems: 2,
	solution: 3,
	pipeline: 4,
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

	// select_item via click delegation
	document.addEventListener("click", (e) => {
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

		// Store for begin_checkout
		(window as any).__forgeLastTier = tierData;
		track("select_item", tierData);
	});
}

// --- LemonSqueezy Checkout Detection ---

function initCheckoutTracking() {
	let overlayOpen = false;
	const observer = new MutationObserver(() => {
		const hasOverlay = document.querySelector(".lemonsqueezy-overlay") !== null;
		if (hasOverlay && !overlayOpen) {
			overlayOpen = true;
			const tier = (window as any).__forgeLastTier || {};
			track("begin_checkout", {
				item_id: tier.item_id || "unknown",
				item_name: tier.item_name || "unknown",
				price: tier.price || 0,
				currency: "EUR",
				source_page: getPageType(),
				page_language: getLang(),
			});
		} else if (!hasOverlay) {
			overlayOpen = false;
		}
	});
	observer.observe(document.body, { childList: true, subtree: true });
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

// --- Init all trackers ---

initSectionTracking();
initCtaTracking();
initFaqTracking();
initPricingTracking();
initCheckoutTracking();
initLangSwitchTracking();
initModuleClickTracking();
initPageContextTracking();
