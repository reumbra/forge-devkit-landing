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
				{ label: "Interactive Guide", href: "/docs/interactive-guide" },
				{ label: "Getting Started", href: "/docs/getting-started" },
				{ label: "Usage Guide", href: "/docs/usage-guide" },
				{ label: "Concepts", href: "/docs/concepts" },
				{ label: "Customizing Pipeline", href: "/docs/concepts#customizing" },
			],
		},
		{
			title: "Core Pipeline",
			items: [
				{ label: "forge-core + hub", href: "/docs/usage-guide#core" },
				{ label: "forge-product", href: "/docs/usage-guide#product" },
				{ label: "forge-qa", href: "/docs/usage-guide#qa" },
				{ label: "forge-tracker", href: "/docs/usage-guide#tracker" },
				{ label: "forge-prompts", href: "/docs/usage-guide#prompts" },
				{ label: "forge-autopilot", href: "/docs/usage-guide#autopilot" },
				{ label: "forge-worktree", href: "/docs/usage-guide#worktree" },
			],
		},
		{
			title: "Advisory Modules",
			items: [
				{ label: "forge-discovery", href: "/docs/usage-guide#discovery" },
				{ label: "forge-marketing", href: "/docs/usage-guide#marketing" },
				{ label: "forge-copy", href: "/docs/usage-guide#copy" },
				{ label: "forge-seo", href: "/docs/usage-guide#seo" },
				{ label: "forge-analytics", href: "/docs/usage-guide#analytics" },
				{ label: "forge-onboarding", href: "/docs/usage-guide#onboarding" },
				{ label: "forge-growth", href: "/docs/usage-guide#growth" },
				{ label: "forge-ab", href: "/docs/usage-guide#ab" },
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
				{ label: "Интерактивный гайд", href: "/docs/interactive-guide" },
				{ label: "Начало работы", href: "/docs/getting-started" },
				{ label: "Руководство по использованию", href: "/docs/usage-guide" },
				{ label: "Концепция", href: "/docs/concepts" },
				{ label: "Кастомизация пайплайна", href: "/docs/concepts#customizing" },
			],
		},
		{
			title: "Базовый пайплайн",
			items: [
				{ label: "forge-core + hub", href: "/docs/usage-guide#core" },
				{ label: "forge-product", href: "/docs/usage-guide#product" },
				{ label: "forge-qa", href: "/docs/usage-guide#qa" },
				{ label: "forge-tracker", href: "/docs/usage-guide#tracker" },
				{ label: "forge-prompts", href: "/docs/usage-guide#prompts" },
				{ label: "forge-autopilot", href: "/docs/usage-guide#autopilot" },
				{ label: "forge-worktree", href: "/docs/usage-guide#worktree" },
			],
		},
		{
			title: "Модули-советники",
			items: [
				{ label: "forge-discovery", href: "/docs/usage-guide#discovery" },
				{ label: "forge-marketing", href: "/docs/usage-guide#marketing" },
				{ label: "forge-copy", href: "/docs/usage-guide#copy" },
				{ label: "forge-seo", href: "/docs/usage-guide#seo" },
				{ label: "forge-analytics", href: "/docs/usage-guide#analytics" },
				{ label: "forge-onboarding", href: "/docs/usage-guide#onboarding" },
				{ label: "forge-growth", href: "/docs/usage-guide#growth" },
				{ label: "forge-ab", href: "/docs/usage-guide#ab" },
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
