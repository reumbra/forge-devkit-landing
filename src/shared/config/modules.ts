export interface ModuleStat {
	label: string;
	value: string;
}

export interface Module {
	id: string;
	name: string;
	tagline: string;
	isHero: boolean;
	badge?: string;
	stats: string[];
	features: string[];
}

export interface ModulesConfig {
	sectionLabel: string;
	headline: string;
	closingLine: string;
	modules: Module[];
}

export const modules = {
	sectionLabel: "MODULES",
	headline: "6 dev pipeline modules. 8 advisory. One ecosystem.",
	closingLine:
		"The dev pipeline handles code from spec to deploy. Advisory modules cover product strategy, discovery, marketing, and growth. Every module works standalone.",
	modules: [
		{
			id: "forge-core",
			name: "forge-core",
			tagline: "Architecture audit & AI guardrails",
			isHero: true,
			badge: "Start here",
			stats: [
				"7-gate wizard",
				"50+ quality patterns",
				"15 rationalization detectors",
				"3 template families",
			],
			features: [
				"Architecture audit",
				"Quality patterns",
				"Dev-skills generation",
				"Pipeline phases",
			],
		},
		{
			id: "forge-product",
			name: "forge-product",
			tagline: "Feature design in business language",
			isHero: false,
			stats: [
				"8 product archetypes",
				"User flows",
				"Stories with AC",
				"50 UX criteria",
			],
			features: [
				"Product archetypes",
				"User flow generation",
				"User stories with acceptance criteria",
				"UX criteria library",
			],
		},
		{
			id: "forge-qa",
			name: "forge-qa",
			tagline: "Tests from requirements",
			isHero: false,
			stats: [
				"8+ test frameworks",
				"AC to unit tests",
				"UC to E2E",
				"Traceability matrix",
			],
			features: [
				"Multi-framework test generation",
				"Acceptance criteria to unit tests",
				"Use cases to E2E tests",
				"Requirement traceability matrix",
			],
		},
		{
			id: "forge-tracker",
			name: "forge-tracker",
			tagline: "Bridge backlog and development",
			isHero: false,
			stats: [
				"5 integrations",
			],
			features: [
				"GitHub integration",
				"ClickUp integration",
				"Linear integration",
				"Notion integration",
				"Jira integration",
			],
		},
		{
			id: "forge-autopilot",
			name: "forge-autopilot",
			tagline: "Parallel agents without merge hell",
			isHero: false,
			stats: ["3 autonomy modes", "0 merge conflicts"],
			features: [
				"Backlog → conflict detection → wave execution",
				"Autonomous teammates in isolated worktrees",
				"Auto-merge with conflict prevention",
				"3 autonomy modes: supervised, semi-auto, full-auto",
			],
		},
		{
			id: "forge-worktree",
			name: "forge-worktree",
			tagline: "Git worktree lifecycle manager",
			isHero: false,
			stats: ["3 templates", "0 port conflicts"],
			features: [
				"3 templates: Docker backend, Frontend, Generic",
				"Docker port isolation per worktree",
				"Auto-cleanup on branch merge",
			],
		},
	],
} as const satisfies ModulesConfig;

const modulesRu: ModulesConfig = {
	sectionLabel: "MODULES",
	headline: "6 модулей разработки. 8 advisory. Одна экосистема.",
	closingLine:
		"Dev pipeline ведет код от спецификации до деплоя. Advisory-модули покрывают продуктовую стратегию, discovery, маркетинг и рост. Каждый модуль работает автономно.",
	modules: [
		{
			id: "forge-core",
			name: "forge-core",
			tagline: "Архитектурный аудит и AI-гайдрейлы",
			isHero: true,
			badge: "Начните здесь",
			stats: [
				"7-gate wizard",
				"50+ паттернов качества",
				"15 детекторов рационализации",
				"3 семейства шаблонов",
			],
			features: [
				"Архитектурный аудит",
				"Паттерны качества",
				"Генерация dev-скиллов",
				"Pipeline-фазы",
			],
		},
		{
			id: "forge-product",
			name: "forge-product",
			tagline: "Дизайн фич на бизнес-языке",
			isHero: false,
			stats: [
				"8 продуктовых архетипов",
				"User flows",
				"Stories с AC",
				"50 UX-критериев",
			],
			features: [
				"Продуктовые архетипы",
				"Генерация user flow",
				"User stories с acceptance criteria",
				"Библиотека UX-критериев",
			],
		},
		{
			id: "forge-qa",
			name: "forge-qa",
			tagline: "Тесты из требований",
			isHero: false,
			stats: [
				"8+ тест-фреймворков",
				"AC в unit-тесты",
				"UC в E2E",
				"Матрица трассировки",
			],
			features: [
				"Мульти-фреймворковая генерация тестов",
				"Acceptance criteria в unit-тесты",
				"Use cases в E2E-тесты",
				"Матрица трассировки требований",
			],
		},
		{
			id: "forge-tracker",
			name: "forge-tracker",
			tagline: "Мост между бэклогом и разработкой",
			isHero: false,
			stats: [
				"5 интеграций",
			],
			features: [
				"Интеграция с GitHub",
				"Интеграция с ClickUp",
				"Интеграция с Linear",
				"Интеграция с Notion",
				"Интеграция с Jira",
			],
		},
		{
			id: "forge-autopilot",
			name: "forge-autopilot",
			tagline: "Параллельные агенты без merge-хаоса",
			isHero: false,
			stats: ["3 режима автономности", "0 merge-конфликтов"],
			features: [
				"Бэклог \u2192 детекция конфликтов \u2192 wave-исполнение",
				"Автономные участники в изолированных worktree",
				"Auto-merge с предотвращением конфликтов",
				"3 режима: supervised, semi-auto, full-auto",
			],
		},
		{
			id: "forge-worktree",
			name: "forge-worktree",
			tagline: "Lifecycle-менеджер git worktree",
			isHero: false,
			stats: ["3 шаблона", "0 конфликтов портов"],
			features: [
				"3 шаблона: Docker backend, Frontend, Generic",
				"Изоляция Docker-портов по worktree",
				"Авто-очистка при merge ветки",
			],
		},
	],
};

export const modulesI18n: Record<string, ModulesConfig> = { en: modules, ru: modulesRu };
