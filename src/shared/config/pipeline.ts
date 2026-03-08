export interface PipelineNode {
	id: string;
	name: string;
	tagline: string;
	href: string;
}

export interface PipelineConnection {
	from: string;
	to: string;
}

export interface PipelineConfig {
	sectionLabel: string;
	headline: string;
	subheadline: string;
	nodes: PipelineNode[];
	connections: PipelineConnection[];
}

export const pipeline = {
	sectionLabel: "THE PIPELINE",
	headline: "15 modules. One ecosystem.",
	subheadline:
		"6 dev pipeline modules handle code from spec to deploy. 8 advisory modules cover product strategy - from discovery to growth. Pick what you need - every module works standalone.",
	nodes: [
		{
			id: "core",
			name: "forge-core",
			tagline: "Architecture audit & guardrails",
			href: "/modules/core",
		},
		{
			id: "product",
			name: "forge-product",
			tagline: "Business \u2192 AI specs",
			href: "/modules/product",
		},
		{
			id: "qa",
			name: "forge-qa",
			tagline: "Test traceability",
			href: "/modules/qa",
		},
		{
			id: "tracker",
			name: "forge-tracker",
			tagline: "Task management",
			href: "/modules",
		},
		{
			id: "autopilot",
			name: "forge-autopilot",
			tagline: "Parallel agent orchestration",
			href: "/modules/autopilot",
		},
		{
			id: "worktree",
			name: "forge-worktree",
			tagline: "Worktree lifecycle",
			href: "/modules",
		},
	],
	connections: [
		{ from: "core", to: "product" },
		{ from: "product", to: "qa" },
		{ from: "core", to: "tracker" },
		{ from: "core", to: "autopilot" },
		{ from: "autopilot", to: "worktree" },
	],
} as const satisfies PipelineConfig;

const pipelineRu: PipelineConfig = {
	sectionLabel: "THE PIPELINE",
	headline: "15 модулей. Одна экосистема.",
	subheadline:
		"6 модулей dev pipeline ведут код от спецификации до деплоя. 8 advisory-модулей покрывают продуктовую стратегию - от discovery до growth. Выбирайте нужные - каждый модуль работает автономно.",
	nodes: [
		{
			id: "core",
			name: "forge-core",
			tagline: "Архитектурный аудит и гайдрейлы",
			href: "/modules/core",
		},
		{
			id: "product",
			name: "forge-product",
			tagline: "Бизнес \u2192 AI-спецификации",
			href: "/modules/product",
		},
		{
			id: "qa",
			name: "forge-qa",
			tagline: "Прослеживаемость тестов",
			href: "/modules/qa",
		},
		{
			id: "tracker",
			name: "forge-tracker",
			tagline: "Управление задачами",
			href: "/modules",
		},
		{
			id: "autopilot",
			name: "forge-autopilot",
			tagline: "Оркестрация параллельных агентов",
			href: "/modules/autopilot",
		},
		{
			id: "worktree",
			name: "forge-worktree",
			tagline: "Жизненный цикл worktree",
			href: "/modules",
		},
	],
	connections: [
		{ from: "core", to: "product" },
		{ from: "product", to: "qa" },
		{ from: "core", to: "tracker" },
		{ from: "core", to: "autopilot" },
		{ from: "autopilot", to: "worktree" },
	],
};

export const pipelineI18n: Record<string, PipelineConfig> = { en: pipeline, ru: pipelineRu };
