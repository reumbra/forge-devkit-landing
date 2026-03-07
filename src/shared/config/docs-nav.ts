export interface DocsNavItem {
	label: string;
	href: string;
	/** If true, this is an anchor on the current page (not a page link) */
	anchor?: boolean;
}

export interface DocsNavGroup {
	title: string;
	items: DocsNavItem[];
}

export interface DocsNavConfig {
	groups: DocsNavGroup[];
}

export const docsNav = {
	groups: [
		{
			title: "Guides",
			items: [
				{ label: "Getting Started", href: "/docs/getting-started" },
				{ label: "Usage Guide", href: "/docs/usage-guide" },
			],
		},
		{
			title: "Modules",
			items: [
				{ label: "forge-core", href: "/docs/usage-guide#core" },
				{ label: "forge-product", href: "/docs/usage-guide#product" },
				{ label: "forge-qa", href: "/docs/usage-guide#qa" },
				{ label: "forge-tracker", href: "/docs/usage-guide#tracker" },
				{ label: "forge-autopilot", href: "/docs/usage-guide#autopilot" },
				{ label: "forge-worktree", href: "/docs/usage-guide#worktree" },
			],
		},
		{
			title: "More",
			items: [
				{ label: "Feedback & Bug Reports", href: "/docs/usage-guide#feedback" },
			],
		},
	],
} as const satisfies DocsNavConfig;

const docsNavRu: DocsNavConfig = {
	groups: [
		{
			title: "Руководства",
			items: [
				{ label: "Начало работы", href: "/docs/getting-started" },
				{ label: "Руководство по использованию", href: "/docs/usage-guide" },
			],
		},
		{
			title: "Модули",
			items: [
				{ label: "forge-core", href: "/docs/usage-guide#core" },
				{ label: "forge-product", href: "/docs/usage-guide#product" },
				{ label: "forge-qa", href: "/docs/usage-guide#qa" },
				{ label: "forge-tracker", href: "/docs/usage-guide#tracker" },
				{ label: "forge-autopilot", href: "/docs/usage-guide#autopilot" },
				{ label: "forge-worktree", href: "/docs/usage-guide#worktree" },
			],
		},
		{
			title: "Дополнительно",
			items: [
				{ label: "Обратная связь и баг-репорты", href: "/docs/usage-guide#feedback" },
			],
		},
	],
};

export const docsNavI18n: Record<string, DocsNavConfig> = { en: docsNav, ru: docsNavRu };
