export interface PricingFeature {
	text: string;
}

export interface PricingTier {
	id: string;
	name: string;
	price: number;
	description: string;
	features: string[];
	cta: string;
	checkoutUrl: string;
	isPopular: boolean;
	badge?: string;
	renewalPrice?: string;
	updatesNote?: string;
}

export interface PricingConfig {
	sectionLabel: string;
	headline: string;
	tiers: PricingTier[];
	trustSignals: string[];
	competitorAnchor?: string;
}

export const pricing = {
	sectionLabel: "PRICING",
	headline: "Transparent pricing. No token billing.",
	tiers: [
		{
			id: "core",
			name: "CORE",
			price: 29,
			description: "Foundation for architecture-aware AI development",
			features: [
				"Auto-detects your stack, layers, conventions",
				"50+ quality patterns for AI-generated code",
				"Project-aware dev-skills \u2014 one setup, forever",
				"Scoped phases prevent runaway sessions",
			],
			cta: "Get Core",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-core",
			isPopular: false,
			renewalPrice: "$19/yr",
			updatesNote: "Includes 1 year of updates",
		},
		{
			id: "pro",
			name: "PRO",
			price: 79,
			description: "Complete pipeline from design to tested code",
			features: [
				"Everything in Core",
				"Describe features in business language \u2014 AI builds from spec",
				"Tests that trace back to requirements, not AI guesswork",
				"Full pipeline: design \u2192 code \u2192 test",
			],
			cta: "Get Pro \u2192",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-pro",
			isPopular: true,
			badge: "Recommended",
			renewalPrice: "$49/yr",
			updatesNote: "Includes 1 year of updates",
		},
		{
			id: "bundle",
			name: "BUNDLE",
			price: 149,
			description: "All 6 modules today. Every new module tomorrow. One purchase.",
			features: [
				"Everything in Pro",
				"Task tracker sync \u2014 GitHub, Linear, ClickUp, Jira, Notion",
				"forge-autopilot \u2014 parallel agent orchestration",
				"forge-worktree \u2014 git worktree lifecycle",
				"Every future module included",
			],
			cta: "Get Bundle",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-bundle",
			isPopular: false,
			renewalPrice: "$89/yr",
			updatesNote: "Includes 1 year of updates",
		},
	],
	trustSignals: [
		"One-time purchase. Your artifacts stay forever.",
		"Includes 1 year of updates. Renewal optional at reduced price.",
		"No per-token charges. No usage limits. No surprise bills.",
	],
	competitorAnchor: "Devin: $240/yr mandatory. Cursor Pro: $240/yr. Forge: from $29 once.",
} as const satisfies PricingConfig;
