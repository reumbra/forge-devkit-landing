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
	headline: "6 dev pipeline modules. 9 advisory. One ecosystem.",
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
			tagline: "Agent Teams without merge hell",
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
		{
			id: "forge-prompts",
			name: "forge-prompts",
			tagline: "Manage prompts like code",
			isHero: false,
			badge: "Pro",
			stats: ["3 frameworks", "5 modes", "Learning loop"],
			features: [
				"Prompt inventory and audit",
				"CO-STAR, RISEN, TIDD-EC frameworks",
				"LLM-as-judge regression tests",
				"Learning loop evolution",
			],
		},
		{
			id: "forge-discovery",
			name: "forge-discovery",
			tagline: "Validate before you build",
			isHero: false,
			badge: "Complete",
			stats: ["4 modes", "7 bias detectors"],
			features: [
				"Ideation and competitive research",
				"Problem validation",
				"Interview synthesis",
				"Cognitive bias protection",
			],
		},
		{
			id: "forge-marketing",
			name: "forge-marketing",
			tagline: "From problem to go-to-market",
			isHero: false,
			badge: "Complete",
			stats: ["4 modes", "8 bias detectors"],
			features: [
				"Positioning strategy",
				"Pricing framework",
				"Launch planning",
				"Content strategy",
			],
		},
		{
			id: "forge-analytics",
			name: "forge-analytics",
			tagline: "Measure what matters",
			isHero: false,
			badge: "Complete",
			stats: ["3 modes", "Decision-mapped events"],
			features: [
				"Tracking plans",
				"Event schema generation",
				"Dashboard specs",
				"Naming conventions",
			],
		},
		{
			id: "forge-onboarding",
			name: "forge-onboarding",
			tagline: "From signup to aha moment",
			isHero: false,
			badge: "Complete",
			stats: ["2 modes", "5 bias detectors"],
			features: [
				"Activation flow design",
				"Empty states strategy",
				"First-run experience",
				"Onboarding audit",
			],
		},
		{
			id: "forge-copy",
			name: "forge-copy",
			tagline: "Consistent voice across every surface",
			isHero: false,
			badge: "Complete",
			stats: ["2 modes", "5 bias detectors"],
			features: [
				"UI microcopy generation",
				"Email and notification templates",
				"Error message design",
				"Brand voice enforcement",
			],
		},
		{
			id: "forge-seo",
			name: "forge-seo",
			tagline: "Search visibility without gaming",
			isHero: false,
			badge: "Complete",
			stats: ["3 modes", "4 bias detectors"],
			features: [
				"Technical SEO audit",
				"Intent-based keyword research",
				"Schema markup generation",
				"Content gap analysis",
			],
		},
		{
			id: "forge-growth",
			name: "forge-growth",
			tagline: "Grow smarter, not just faster",
			isHero: false,
			badge: "Complete",
			stats: ["3 modes", "6 bias detectors"],
			features: [
				"Retention loops",
				"Referral mechanics",
				"Upgrade triggers",
				"Churn prevention",
			],
		},
		{
			id: "forge-ab",
			name: "forge-ab",
			tagline: "Test with rigor, not hunches",
			isHero: false,
			badge: "Complete",
			stats: ["3 modes", "4 bias detectors"],
			features: [
				"Structured hypothesis design",
				"Sample size pre-commitment",
				"Statistical analysis",
				"Documented learnings",
			],
		},
	],
} as const satisfies ModulesConfig;

const modulesRu: ModulesConfig = {
	sectionLabel: "MODULES",
	headline: "6 модулей разработки. 9 advisory. Одна экосистема.",
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
			tagline: "Agent Teams без merge-хаоса",
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
		{
			id: "forge-prompts",
			name: "forge-prompts",
			tagline: "Управляй промптами как кодом",
			isHero: false,
			badge: "Pro",
			stats: ["3 фреймворка", "5 режимов", "Learning loop"],
			features: [
				"Инвентаризация и аудит промптов",
				"Фреймворки CO-STAR, RISEN, TIDD-EC",
				"LLM-as-judge регрессионные тесты",
				"Learning loop эволюция",
			],
		},
		{
			id: "forge-discovery",
			name: "forge-discovery",
			tagline: "Валидируй прежде чем строить",
			isHero: false,
			badge: "Complete",
			stats: ["4 режима", "7 детекторов bias"],
			features: [
				"Идеация и конкурентный анализ",
				"Валидация проблем",
				"Синтез интервью",
				"Защита от когнитивных искажений",
			],
		},
		{
			id: "forge-marketing",
			name: "forge-marketing",
			tagline: "От проблемы к выходу на рынок",
			isHero: false,
			badge: "Complete",
			stats: ["4 режима", "8 детекторов bias"],
			features: [
				"Стратегия позиционирования",
				"Фреймворк ценообразования",
				"Планирование запуска",
				"Контент-стратегия",
			],
		},
		{
			id: "forge-analytics",
			name: "forge-analytics",
			tagline: "Измеряй важное",
			isHero: false,
			badge: "Complete",
			stats: ["3 режима", "Decision-mapped события"],
			features: [
				"Tracking-планы",
				"Генерация event-схем",
				"Спеки дашбордов",
				"Конвенции именования",
			],
		},
		{
			id: "forge-onboarding",
			name: "forge-onboarding",
			tagline: "От регистрации до aha-момента",
			isHero: false,
			badge: "Complete",
			stats: ["2 режима", "5 детекторов bias"],
			features: [
				"Дизайн activation flow",
				"Стратегия пустых экранов",
				"First-run experience",
				"Аудит онбординга",
			],
		},
		{
			id: "forge-copy",
			name: "forge-copy",
			tagline: "Единый голос на каждой поверхности",
			isHero: false,
			badge: "Complete",
			stats: ["2 режима", "5 детекторов bias"],
			features: [
				"Генерация UI-микрокопи",
				"Шаблоны писем и уведомлений",
				"Дизайн сообщений об ошибках",
				"Контроль голоса бренда",
			],
		},
		{
			id: "forge-seo",
			name: "forge-seo",
			tagline: "Видимость в поиске без накрутки",
			isHero: false,
			badge: "Complete",
			stats: ["3 режима", "4 детектора bias"],
			features: [
				"Технический SEO-аудит",
				"Intent-based исследование ключевых слов",
				"Генерация schema markup",
				"Анализ контентных пробелов",
			],
		},
		{
			id: "forge-growth",
			name: "forge-growth",
			tagline: "Расти умнее, а не быстрее",
			isHero: false,
			badge: "Complete",
			stats: ["3 режима", "6 детекторов bias"],
			features: [
				"Петли retention",
				"Реферральные механики",
				"Триггеры апгрейда",
				"Предотвращение оттока",
			],
		},
		{
			id: "forge-ab",
			name: "forge-ab",
			tagline: "Тестируй с точностью, а не по наитию",
			isHero: false,
			badge: "Complete",
			stats: ["3 режима", "4 детектора bias"],
			features: [
				"Структурированный дизайн гипотез",
				"Предфиксация размера выборки",
				"Статистический анализ",
				"Документированные знания",
			],
		},
	],
};

export const modulesI18n: Record<string, ModulesConfig> = { en: modules, ru: modulesRu };
