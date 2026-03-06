export interface PricingFeatureRow {
	feature: string;
	module: string;
	core: boolean | string;
	pro: boolean | string;
	bundle: boolean | string;
}

export interface PricingPageConfig {
	headline: string;
	subheadline: string;
	competitorAnchor: string;
	featureTable: PricingFeatureRow[];
	trustBadges: { icon: string; title: string; description: string }[];
	faq: { question: string; answer: string }[];
}

export const pricingPage: PricingPageConfig = {
	headline: "One-time purchase. Your artifacts stay forever.",
	subheadline:
		"No subscription. No per-token charges. Pay once, use your generated artifacts indefinitely.",
	competitorAnchor:
		"Devin: \u20AC240/yr mandatory. Cursor Pro: \u20AC240/yr. Forge: from \u20AC29 once.",

	featureTable: [
		{ feature: "Architecture audit (7-gate wizard)", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "50+ quality patterns", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "15 rationalization detectors", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "3 execution modes", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Cross-repo support", module: "forge-core", core: true, pro: true, bundle: true },
		{ feature: "Product design (9 archetypes)", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "User stories with AC", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "UX criteria library", module: "forge-product", core: false, pro: true, bundle: true },
		{ feature: "Test generation (8+ frameworks)", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "4-level traceability", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "LLM-as-Judge", module: "forge-qa", core: false, pro: true, bundle: true },
		{ feature: "Task tracker sync (5 integrations)", module: "forge-tracker", core: false, pro: true, bundle: true },
		{ feature: "Parallel agent orchestration", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Conflict-free wave planning", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "3 autonomy modes", module: "forge-autopilot", core: false, pro: false, bundle: true },
		{ feature: "Git worktree lifecycle", module: "forge-worktree", core: false, pro: false, bundle: true },
		{ feature: "Docker port isolation", module: "forge-worktree", core: false, pro: false, bundle: true },
		{ feature: "Every future module", module: "\u2014", core: false, pro: false, bundle: true },
	],

	trustBadges: [
		{
			icon: "\u2714",
			title: "No subscription",
			description: "One-time purchase. Not \u20AC20/month. Not \u20AC240/year.",
		},
		{
			icon: "\u221E",
			title: "Artifacts yours forever",
			description: "Generated files stay in your project even without renewal.",
		},
		{
			icon: "\u21BB",
			title: "Renewal optional",
			description: "1 year of updates included. Renew at ~60% for continued updates.",
		},
		{
			icon: "\u2694",
			title: "No usage limits",
			description: "No per-token charges. No seat limits. No surprise bills.",
		},
	],

	faq: [
		{
			question: "What happens after the first year?",
			answer:
				"Your generated artifacts continue working indefinitely. The 1-year update period gives you access to new patterns, templates, and module improvements. After it expires, everything you have keeps working \u2014 you just don't get new updates.",
		},
		{
			question: "Do I have to renew?",
			answer:
				"No. Renewal is completely optional. If you renew, you get another year of updates at a reduced price (~60% of original). If you don't, your existing artifacts keep working forever.",
		},
		{
			question: "What if I don't renew and want to later?",
			answer:
				"You can renew anytime. You'll get access to all updates released since your last update period ended.",
		},
		{
			question: "Is there a refund policy?",
			answer:
				"Yes. 14-day no-questions-asked refund policy. If Forge doesn't work for your project, email us for a full refund.",
		},
		{
			question: "Can I use it on multiple projects?",
			answer:
				"Yes. Your license works on up to 3 devices. You can use Forge on as many projects as you want on those devices.",
		},
		{
			question: "Is there team licensing?",
			answer:
				"Not yet. Each developer needs their own license. Team pricing is planned for later this year.",
		},
	],
};
