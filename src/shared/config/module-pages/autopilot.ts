import type { ModulePageConfig } from "./types";

export const autopilotPageConfig: ModulePageConfig = {
	slug: "autopilot",
	name: "forge-autopilot",
	tagline: "Parallel agents without merge hell",
	tier: "Bundle",
	tierPrice: "€149",

	problems: [
		{
			pain: "Agent Teams = merge conflict chaos",
			evidence:
				"\"I literally can't merge their branches.\" Multiple agents editing the same files without coordination.",
		},
		{
			pain: "No conflict detection before execution",
			evidence:
				"You discover file conflicts AFTER agents finish. Hours of work wasted on irreconcilable changes.",
		},
		{
			pain: "Autonomous agents with no strategy",
			evidence:
				"Agent Teams is infrastructure. Without a strategy layer, agents work fast but break things faster.",
		},
	],

	steps: [
		{
			title: "Triage",
			description:
				"Backlog analyst classifies features by complexity, risk, and design needs. File dependency mapping.",
		},
		{
			title: "Detect conflicts",
			description:
				"Conflict detector identifies shared files between features. Classifies as SAFE, RISKY, or BLOCKING.",
		},
		{
			title: "Plan waves",
			description:
				"Groups conflict-free features into parallel waves. BLOCKING conflicts force sequential execution.",
			visual: [
				{ prefix: "Wave 1:", text: " auth + payments (no overlap)", color: "text" },
				{ prefix: "Wave 2:", text: " profile (depends on auth)", color: "text" },
			],
		},
		{
			title: "Execute",
			description:
				"Teammates execute in isolated worktrees. Tech lead reviews. Auto-merge with conflict prevention.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Conflict-free wave planning",
			description:
				"Backlog\u2192conflict detection\u2192wave grouping\u2192parallel execution. No merge conflicts by design.",
		},
		{
			icon: "\u25C7",
			title: "3 autonomy modes",
			description:
				"Supervised (review each), semi-auto (review at checkpoints), full-auto (review at end).",
		},
		{
			icon: "\u25C7",
			title: "Isolated worktrees",
			description:
				"Each teammate works in a separate git worktree. No file interference. Clean merges.",
		},
		{
			icon: "\u25C7",
			title: "Cross-repo triage",
			description:
				"Features spanning multiple repos are detected and handled in triage phase.",
		},
		{
			icon: "\u25C7",
			title: "Batch reporting",
			description:
				"Summary report after each wave: decisions, conflicts resolved, files touched, test results.",
		},
	],

	comparison: [
		{
			dimension: "What it is",
			them: "Infrastructure for spawning agents",
			forge: "Strategy layer: triage \u2192 conflict detection \u2192 wave planning",
		},
		{
			dimension: "Conflict handling",
			them: "None - discover conflicts after",
			forge: "Pre-execution conflict detection and wave grouping",
		},
		{
			dimension: "Autonomy control",
			them: "All or nothing",
			forge: "3 modes: supervised, semi-auto, full-auto",
		},
	],
	comparisonTarget: "Raw Claude Agent Teams",

	diagram: {
		src: "/images/subagents-vs-agent-teams.avif",
		alt: "Subagents vs Agent Teams architecture comparison",
		caption: "forge-autopilot adds a strategy layer on top of Agent Teams: triage, conflict detection, and wave planning.",
		sourceUrl: "https://code.claude.com/docs/en/agent-teams",
		sourceLabel: "Claude Code docs",
	},

	integrations: [
		{
			module: "forge-core",
			description: "Architecture map powers conflict detection",
			href: "/modules/core",
		},
		{
			module: "forge-worktree",
			description: "Provisions isolated worktrees for each teammate",
			href: "/modules",
		},
		{
			module: "forge-tracker",
			description: "Syncs task status during batch execution",
			href: "/modules",
		},
	],

	seo: {
		title: "forge-autopilot - Parallel Agents Without Merge Hell | Forge DevKit",
		description:
			"Orchestrate Claude Agent Teams with conflict-free wave planning. Backlog triage, file conflict detection, isolated worktrees, 3 autonomy modes.",
	},
};

const autopilotPageConfigRu: ModulePageConfig = {
	slug: "autopilot",
	name: "forge-autopilot",
	tagline: "Параллельные агенты без merge-хаоса",
	tier: "Bundle",
	tierPrice: "€149",

	problems: [
		{
			pain: "Agent Teams = хаос merge-конфликтов",
			evidence:
				"\"Я буквально не могу смержить их ветки.\" Несколько агентов редактируют одни файлы без координации.",
		},
		{
			pain: "Нет детекции конфликтов до выполнения",
			evidence:
				"Файловые конфликты обнаруживаются ПОСЛЕ завершения работы агентов. Часы работы потеряны на несовместимых изменениях.",
		},
		{
			pain: "Автономные агенты без стратегии",
			evidence:
				"Agent Teams - это инфраструктура. Без стратегического слоя агенты работают быстро, но ломают ещё быстрее.",
		},
	],

	steps: [
		{
			title: "Триаж",
			description:
				"Аналитик бэклога классифицирует фичи по сложности, рискам и потребностям в дизайне. Маппинг файловых зависимостей.",
		},
		{
			title: "Детекция конфликтов",
			description:
				"Детектор конфликтов находит общие файлы между фичами. Классифицирует как SAFE, RISKY или BLOCKING.",
		},
		{
			title: "Планирование волн",
			description:
				"Группирует бесконфликтные фичи в параллельные волны. BLOCKING-конфликты требуют последовательного выполнения.",
			visual: autopilotPageConfig.steps[2].visual,
		},
		{
			title: "Выполнение",
			description:
				"Участники работают в изолированных worktree. Tech lead ревьюит. Авто-мерж с предотвращением конфликтов.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Бесконфликтное планирование волн",
			description:
				"Бэклог\u2192детекция конфликтов\u2192группировка волн\u2192параллельное выполнение. Без merge-конфликтов by design.",
		},
		{
			icon: "\u25C7",
			title: "3 режима автономности",
			description:
				"Supervised (ревью каждого), semi-auto (ревью на чекпоинтах), full-auto (ревью в конце).",
		},
		{
			icon: "\u25C7",
			title: "Изолированные worktree",
			description:
				"Каждый участник работает в отдельном git worktree. Без файловых пересечений. Чистые мержи.",
		},
		{
			icon: "\u25C7",
			title: "Cross-repo триаж",
			description:
				"Фичи, затрагивающие несколько репозиториев, детектятся и обрабатываются на этапе триажа.",
		},
		{
			icon: "\u25C7",
			title: "Batch-отчёты",
			description:
				"Сводный отчёт после каждой волны: решения, разрешённые конфликты, затронутые файлы, результаты тестов.",
		},
	],

	comparison: [
		{
			dimension: "Что это",
			them: "Инфраструктура для запуска агентов",
			forge: "Стратегический слой: триаж \u2192 детекция конфликтов \u2192 планирование волн",
		},
		{
			dimension: "Обработка конфликтов",
			them: "Нет - конфликты обнаруживаются после",
			forge: "Детекция конфликтов и группировка волн до выполнения",
		},
		{
			dimension: "Контроль автономности",
			them: "Всё или ничего",
			forge: "3 режима: supervised, semi-auto, full-auto",
		},
	],
	comparisonTarget: "Raw Claude Agent Teams",

	diagram: {
		...autopilotPageConfig.diagram!,
		caption: "forge-autopilot добавляет стратегический слой поверх Agent Teams: триаж, детекция конфликтов и планирование волн.",
	},

	integrations: [
		{
			module: "forge-core",
			description: "Карта архитектуры обеспечивает детекцию конфликтов",
			href: "/modules/core",
		},
		{
			module: "forge-worktree",
			description: "Создаёт изолированные worktree для каждого участника",
			href: "/modules",
		},
		{
			module: "forge-tracker",
			description: "Синхронизирует статусы задач во время batch-выполнения",
			href: "/modules",
		},
	],

	seo: {
		title: "forge-autopilot - Параллельные агенты без merge-хаоса | Forge DevKit",
		description:
			"Оркестрация Claude Agent Teams с бесконфликтным планированием волн. Триаж бэклога, детекция файловых конфликтов, изолированные worktree, 3 режима автономности.",
	},
};

export const autopilotPageConfigI18n: Record<string, ModulePageConfig> = {
	en: autopilotPageConfig,
	ru: autopilotPageConfigRu,
};
