export interface PricingFeature {
	text: string;
}

export interface PricingTier {
	id: string;
	name: string;
	price: number;
	period: string;
	description: string;
	features: string[];
	cta: string;
	checkoutUrl: string;
	isPopular: boolean;
	badge?: string;
}

export interface PricingConfig {
	sectionLabel: string;
	headline: string;
	tiers: PricingTier[];
	trustSignals: string[];
}

export const pricing = {
	sectionLabel: "PRICING",
	headline: "Transparent pricing. No token billing.",
	tiers: [
		{
			id: "core",
			name: "CORE",
			price: 29,
			period: "/mo",
			description: "forge-core",
			features: [
				"Architecture audit",
				"Quality patterns",
				"Dev-skills generation",
				"Pipeline phases",
			],
			cta: "Get Core",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-core",
			isPopular: false,
		},
		{
			id: "pro",
			name: "PRO",
			price: 79,
			period: "/mo",
			description: "forge-core + forge-product + forge-qa",
			features: [
				"Everything in Core",
				"Feature design in business language",
				"Test generation from requirements",
				"Full pipeline: from feature design to tested code",
			],
			cta: "Get Pro \u2192",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-pro",
			isPopular: true,
			badge: "Popular",
		},
		{
			id: "team",
			name: "TEAM",
			price: 149,
			period: "/mo",
			description: "All 4 modules + team features",
			features: [
				"Everything in Pro",
				"forge-tracker integration",
				"Roles and permissions",
				"Review workflow",
				"Escalation rules",
				"Multi-dev coordination",
			],
			cta: "Get Team",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-team",
			isPopular: false,
		},
	],
	trustSignals: [
		"Flat monthly. No per-token charges.",
		"Cancel anytime. Your generated artifacts stay forever.",
	],
} as const satisfies PricingConfig;
