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
		buttonLabel: string;
		buttonHref: string;
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
		headline: "Ready to make your AI architecture-aware?",
		buttonLabel: "Get Forge \u2192",
		buttonHref: "#pricing",
	},
} as const satisfies FooterConfig;
