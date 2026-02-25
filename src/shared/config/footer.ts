export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterConfig {
	logo: string;
	companyName: string;
	companyTagline: string;
	navLinks: FooterLink[];
	legalLinks: FooterLink[];
	copyright: string;
	finalCta: {
		headline: string;
		subheadline: string;
		buttonLabel: string;
		buttonHref: string;
		trustLine: string;
	};
}

export const footer = {
	logo: "Forge DevKit",
	companyName: "Reumbra",
	companyTagline: "by Reumbra",
	navLinks: [
		{ label: "Docs", href: "/docs" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "FAQ", href: "#faq" },
	],
	legalLinks: [
		{ label: "Privacy Policy", href: "/privacy" },
		{ label: "Terms of Service", href: "/terms" },
		{ label: "Refund Policy", href: "/refund" },
	],
	copyright: "\u00a9 2026 Reumbra O\u00dc",
	finalCta: {
		headline: "Your AI should respect your architecture.",
		subheadline: "50+ guardrails. 7-gate audit. Tests from requirements. One setup.",
		buttonLabel: "Start with Core \u2014 $29/mo \u2192",
		buttonHref: "#pricing",
		trustLine: "Cancel anytime. 14-day money-back guarantee.",
	},
} as const satisfies FooterConfig;
