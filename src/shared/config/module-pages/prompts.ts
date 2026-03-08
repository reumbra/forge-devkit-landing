import type { ModulePageConfig } from "./types";

export const promptsPageConfig: ModulePageConfig = {
	slug: "prompts",
	name: "forge-prompts",
	tagline: "Manage prompts like code",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "Prompts drift across sessions",
			evidence: "Same question, different answers. No consistent framework. Each session reinvents the prompt wheel.",
		},
		{
			pain: "No way to test prompt quality",
			evidence: "You change a system prompt and hope it still works. No regression tests, no quality metrics.",
		},
		{
			pain: "Prompt knowledge stays in one person's head",
			evidence: "The developer who wrote the prompt leaves. Nobody knows why it's structured that way.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-prompts to your environment.",
			visual: [{ text: "forge install forge-prompts", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard detects your LLM stack, establishes prompt principles, and selects frameworks (CO-STAR, RISEN, TIDD-EC).",
		},
		{
			title: "Manage",
			description: "Inventory all prompts, audit against principles, review for quality, test for regressions.",
			visual: [
				{ prefix: "Mode:", text: " inventory / audit / review / test / evolve", color: "text" },
			],
		},
		{
			title: "Evolve",
			description: "Learning loop captures findings from audits and tests. Principles improve automatically over time.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "5 operational modes",
			description: "Inventory, audit, review, test, evolve. Full lifecycle management for every prompt in your project.",
		},
		{
			icon: "\u25C7",
			title: "3 prompt frameworks",
			description: "CO-STAR, RISEN, TIDD-EC - or custom. Pick the framework that fits your use case.",
		},
		{
			icon: "\u25C7",
			title: "Regression testing",
			description: "LLM-as-judge tests ensure prompt changes don't break existing behavior. Integrated with forge-qa.",
		},
		{
			icon: "\u25C7",
			title: "5 psychology biases",
			description: "Contextual warnings against anchoring to first drafts, confirmation bias in testing, and more.",
		},
		{
			icon: "\u25C7",
			title: "Learning loop",
			description: "Real findings from audits and tests feed back into principles. Your prompt craft improves with every cycle.",
		},
	],

	comparison: [
		{
			dimension: "Prompt management",
			them: "Scattered across files, no inventory",
			forge: "Full catalog with principles and frameworks",
		},
		{
			dimension: "Quality assurance",
			them: "Manual spot-checking",
			forge: "Automated audit + LLM-as-judge regression tests",
		},
		{
			dimension: "Knowledge retention",
			them: "In developer's head",
			forge: "Documented principles with learning loop evolution",
		},
		{
			dimension: "Consistency",
			them: "Each prompt written ad-hoc",
			forge: "Framework-guided with team-wide principles",
		},
	],
	comparisonTarget: "Manual prompt engineering",

	integrations: [
		{
			module: "forge-core",
			description: "Prompt principles integrate with architecture-aware guardrails",
			href: "/modules/core",
		},
		{
			module: "forge-qa",
			description: "LLM-as-judge regression tests for prompt quality",
			href: "/modules/qa",
		},
		{
			module: "forge-product",
			description: "Product context informs prompt design decisions",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-prompts - Manage Prompts Like Code | Forge DevKit",
		description: "Prompt inventory, audit, regression testing, and learning loop evolution. 3 frameworks: CO-STAR, RISEN, TIDD-EC. Integrated with forge-qa for LLM-as-judge tests.",
	},
};

const promptsPageConfigRu: ModulePageConfig = {
	slug: "prompts",
	name: "forge-prompts",
	tagline: "Управляй промптами как кодом",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "Промпты дрейфуют от сессии к сессии",
			evidence: "Одинаковый вопрос - разные ответы. Никакого единого фреймворка. Каждая сессия изобретает промпт-велосипед.",
		},
		{
			pain: "Нет способа тестировать качество промптов",
			evidence: "Меняете системный промпт и надеетесь, что он работает. Нет регрессионных тестов, нет метрик качества.",
		},
		{
			pain: "Знания о промптах остаются в голове одного разработчика",
			evidence: "Разработчик, написавший промпт, уходит. Никто не знает, почему он структурирован именно так.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-prompts в ваше окружение.",
			visual: promptsPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард определяет ваш LLM-стек, устанавливает принципы промптов и выбирает фреймворки (CO-STAR, RISEN, TIDD-EC).",
		},
		{
			title: "Управление",
			description: "Инвентаризация промптов, аудит по принципам, ревью качества, тестирование на регрессии.",
			visual: promptsPageConfig.steps[2].visual,
		},
		{
			title: "Эволюция",
			description: "Learning loop захватывает находки из аудитов и тестов. Принципы улучшаются автоматически со временем.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "5 операционных режимов",
			description: "Inventory, audit, review, test, evolve. Полный lifecycle-менеджмент для каждого промпта в проекте.",
		},
		{
			icon: "\u25C7",
			title: "3 фреймворка промптов",
			description: "CO-STAR, RISEN, TIDD-EC - или кастомный. Выберите фреймворк под ваш use case.",
		},
		{
			icon: "\u25C7",
			title: "Регрессионное тестирование",
			description: "LLM-as-judge тесты гарантируют, что изменения промптов не ломают существующее поведение. Интегрировано с forge-qa.",
		},
		{
			icon: "\u25C7",
			title: "5 психологических предупреждений",
			description: "Контекстные предупреждения против привязки к первым черновикам, confirmation bias в тестировании и других.",
		},
		{
			icon: "\u25C7",
			title: "Learning loop",
			description: "Реальные находки из аудитов и тестов возвращаются в принципы. Ваше мастерство промптов растёт с каждым циклом.",
		},
	],

	comparison: [
		{
			dimension: "Управление промптами",
			them: "Разбросаны по файлам, нет инвентаризации",
			forge: "Полный каталог с принципами и фреймворками",
		},
		{
			dimension: "Контроль качества",
			them: "Ручная проверка на глаз",
			forge: "Автоматический аудит + LLM-as-judge регрессионные тесты",
		},
		{
			dimension: "Сохранение знаний",
			them: "В голове разработчика",
			forge: "Документированные принципы с learning loop эволюцией",
		},
		{
			dimension: "Консистентность",
			them: "Каждый промпт пишется ad-hoc",
			forge: "Фреймворк-guided с командными принципами",
		},
	],
	comparisonTarget: "Ручной prompt engineering",

	integrations: [
		{
			module: "forge-core",
			description: "Принципы промптов интегрируются с архитектурными гайдрейлами",
			href: "/modules/core",
		},
		{
			module: "forge-qa",
			description: "LLM-as-judge регрессионные тесты для качества промптов",
			href: "/modules/qa",
		},
		{
			module: "forge-product",
			description: "Продуктовый контекст информирует решения по дизайну промптов",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-prompts - Управляй промптами как кодом | Forge DevKit",
		description: "Инвентаризация промптов, аудит, регрессионное тестирование и learning loop эволюция. 3 фреймворка: CO-STAR, RISEN, TIDD-EC.",
	},
};

export const promptsPageConfigI18n: Record<string, ModulePageConfig> = {
	en: promptsPageConfig,
	ru: promptsPageConfigRu,
};
