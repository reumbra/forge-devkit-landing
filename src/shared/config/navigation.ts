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
		{
			label: "Docs",
			href: "/docs/getting-started",
			children: [
				{
					title: "Guides",
					items: [
						{ name: "Getting Started", description: "Install in 5 minutes", href: "/docs/getting-started" },
						{ name: "Usage Guide", description: "Commands & workflows", href: "/docs/usage-guide" },
					],
				},
			],
		},
	],
	cta: {
		label: "Get Forge",
		href: "/pricing",
	},
} as const satisfies NavigationConfig;

const navigationRu: NavigationConfig = {
	logo: "Forge DevKit",
	links: [
		{
			label: "Модули",
			href: "/modules",
			children: [
				{
					title: "Основной пайплайн",
					items: [
						{ name: "forge-core", description: "Аудит архитектуры", href: "/modules/core" },
						{ name: "forge-product", description: "Бизнес-спецификации", href: "/modules/product" },
						{ name: "forge-qa", description: "Трассировка тестов", href: "/modules/qa" },
						{ name: "forge-tracker", description: "Управление задачами", href: "/modules" },
					],
				},
				{
					title: "Автоматизация",
					items: [
						{ name: "forge-autopilot", description: "Параллельные агенты", href: "/modules/autopilot" },
						{ name: "forge-worktree", description: "Жизненный цикл worktree", href: "/modules" },
					],
				},
			],
		},
		{ label: "Цены", href: "/pricing" },
		{
			label: "Документация",
			href: "/docs/getting-started",
			children: [
				{
					title: "Руководства",
					items: [
						{ name: "Начало работы", description: "Установка за 5 минут", href: "/docs/getting-started" },
						{ name: "Руководство", description: "Команды и процессы", href: "/docs/usage-guide" },
					],
				},
			],
		},
	],
	cta: {
		label: "Получить Forge",
		href: "/pricing",
	},
};

export const navigationI18n: Record<string, NavigationConfig> = { en: navigation, ru: navigationRu };
