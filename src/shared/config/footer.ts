export interface FooterLink {
	label: string;
	href: string;
	external?: boolean;
	disabled?: boolean;
	action?: string;
}

export interface FooterColumn {
	title: string;
	links: FooterLink[];
}

export interface FooterConfig {
	logo: string;
	companyName: string;
	companyTagline: string;
	columns: FooterColumn[];
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
	columns: [
		{
			title: "Product",
			links: [
				{ label: "Pricing", href: "/pricing" },
				{ label: "Getting Started", href: "/docs/getting-started" },
				{ label: "Usage Guide", href: "/docs/usage-guide" },
				{ label: "Changelog", href: "#", disabled: true },
			],
		},
		{
			title: "Modules",
			links: [
				{ label: "forge-core", href: "/modules/core" },
				{ label: "forge-product", href: "/modules/product" },
				{ label: "forge-qa", href: "/modules/qa" },
				{ label: "forge-tracker", href: "/modules" },
				{ label: "forge-autopilot", href: "/modules/autopilot" },
				{ label: "forge-worktree", href: "/modules" },
			],
		},
		{
			title: "Compare",
			links: [
				{ label: "vs Cursor Rules", href: "/vs/cursor-rules" },
				{ label: "vs Devin", href: "/vs/devin" },
				{ label: "vs CLAUDE.md", href: "/vs/claude-md" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Privacy", href: "/privacy" },
				{ label: "Terms", href: "/terms" },
				{ label: "Cookie Settings", href: "#", action: "zaraz-consent" },
			],
		},
	],
	copyright: "\u00a9 2026 Reumbra O\u00dc",
	finalCta: {
		headline: "Your AI should respect your architecture.",
		subheadline: "50+ guardrails. 7-gate audit. Tests from requirements. One setup.",
		buttonLabel: "Get Forge \u2014 from \u20ac29 \u2192",
		buttonHref: "/pricing",
		trustLine: "One-time purchase. 14-day money-back guarantee.",
	},
} as const satisfies FooterConfig;
