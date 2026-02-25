export interface PricingFeature {
	text: string;
}

export interface PricingTier {
	id: string;
	name: string;
	price: number;
	period: string;
	monthlyEquivalent: string;
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
			period: "/yr",
			monthlyEquivalent: "~$2.42/mo",
			description: "Foundation for architecture-aware AI development",
			features: [
				"Auto-detects your stack, layers, conventions",
				"24 quality guardrails for AI-generated code",
				"Project-aware dev-skills \u2014 one setup, forever",
				"Scoped phases prevent runaway sessions",
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
			period: "/yr",
			monthlyEquivalent: "~$6.58/mo",
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
			badge: "Popular",
		},
		{
			id: "full",
			name: "FULL",
			price: 149,
			period: "/yr",
			monthlyEquivalent: "~$12.42/mo",
			description: "All modules today. Every new module tomorrow. One subscription.",
			features: [
				"Everything in Pro",
				"Task tracker sync \u2014 GitHub, Linear, ClickUp, Jira, Notion",
				"Review workflow with team roles",
				"Blocker detection and escalation",
				"Every future module included at no extra cost",
			],
			cta: "Get Full",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-full",
			isPopular: false,
		},
	],
	trustSignals: [
		"14-day money-back guarantee. No questions asked.",
		"Annual billing. No per-token charges.",
		"Cancel anytime. Your generated artifacts stay forever.",
	],
} as const satisfies PricingConfig;
