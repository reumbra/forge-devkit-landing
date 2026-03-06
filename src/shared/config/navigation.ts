export interface NavDropdownItem {
	name: string;
	description: string;
	href: string;
}

export interface NavDropdownColumn {
	title: string;
	items: NavDropdownItem[];
}

export interface NavLink {
	label: string;
	href: string;
	external?: boolean;
	children?: NavDropdownColumn[];
}

export interface NavCta {
	label: string;
	href: string;
}

export interface NavigationConfig {
	logo: string;
	links: NavLink[];
	cta: NavCta;
}

export const navigation = {
	logo: "Forge DevKit",
	links: [
		{
			label: "Modules",
			href: "/modules",
			children: [
				{
					title: "Core Pipeline",
					items: [
						{ name: "forge-core", description: "Architecture audit & guardrails", href: "/modules/core" },
						{ name: "forge-product", description: "Business \u2192 AI specs", href: "/modules/product" },
						{ name: "forge-qa", description: "Test traceability", href: "/modules/qa" },
						{ name: "forge-tracker", description: "Task management", href: "/modules" },
					],
				},
				{
					title: "Automation",
					items: [
						{ name: "forge-autopilot", description: "Parallel agent orchestration", href: "/modules/autopilot" },
						{ name: "forge-worktree", description: "Worktree lifecycle", href: "/modules" },
					],
				},
			],
		},
		{ label: "Pricing", href: "/pricing" },
		{ label: "Docs", href: "https://docs.reumbra.com/forge", external: true },
		{ label: "GitHub", href: "https://github.com/reumbra", external: true },
	],
	cta: {
		label: "Get Forge",
		href: "/pricing",
	},
} as const satisfies NavigationConfig;
