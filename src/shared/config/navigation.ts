export interface NavLink {
	label: string;
	href: string;
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
		{ label: "Features", href: "#solution" },
		{ label: "How It Works", href: "#how-it-works" },
		{ label: "Modules", href: "#modules" },
		{ label: "Pricing", href: "#pricing" },
		{ label: "FAQ", href: "#faq" },
	],
	cta: {
		label: "Get Forge",
		href: "#pricing",
	},
} as const satisfies NavigationConfig;
