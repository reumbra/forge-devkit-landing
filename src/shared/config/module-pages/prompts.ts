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
			description: "CO-STAR (context-structured), RISEN (role-based), TIDD-EC (task-decomposed) - or define your own. Each enforces a different prompt architecture.",
		},
		{
			icon: "\u25C7",
			title: "Regression testing",
			description: "LLM-as-judge tests ensure prompt changes don't break existing behavior. Integrated with forge-qa.",
		},
		{
			icon: "\u25C7",
			title: "5 psychology biases",
			description: "Anchoring to first drafts, confirmation bias in test evaluation, sunk cost on failing prompts, authority bias toward vendor examples, and framing effects in A/B prompt comparison.",
		},
		{
			icon: "\u25C7",
			title: "Learning loop",
			description: "Audit findings become new principles automatically. After 3 cycles, your prompt guidelines reflect real project patterns, not generic best practices.",
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

	outputExample: {
		title: "forge:prompts audit",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Prompt Audit - acme-web</span>

<span class="t-white t-bold">File</span>                              <span class="t-white t-bold">Framework</span>  <span class="t-white t-bold">Score</span>  <span class="t-white t-bold">Issues</span>
<span class="t-white">prompts/generate-summary.md</span>       <span class="t-cyan">CO-STAR</span>    <span class="t-green">9/10</span>   <span class="t-muted">-</span>
<span class="t-white">prompts/classify-ticket.md</span>        <span class="t-cyan">RISEN</span>      <span class="t-yellow">6/10</span>   <span class="t-yellow">missing negative examples</span>
<span class="t-white">prompts/draft-email.md</span>            <span class="t-muted">none</span>       <span class="t-red">3/10</span>   <span class="t-red">no role, no output format</span>

<span class="t-muted">Total:</span> <span class="t-white">3 prompts</span> <span class="t-muted">|</span> <span class="t-green">1 passing</span> <span class="t-muted">|</span> <span class="t-yellow">1 warning</span> <span class="t-muted">|</span> <span class="t-red">1 failing</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "AI Engineer", benefit: "Manage and version-control prompts with frameworks, audit trails, and regression tests." },
			{ role: "Developer Using LLM APIs", benefit: "Stop ad-hoc prompt writing - get structured frameworks and automated quality checks." },
			{ role: "Team Lead", benefit: "Standardize prompt engineering across the team with shared principles and learning loops." },
		],
	},

	seo: {
		title: "forge-prompts - Prompt Engineering at Scale | Forge DevKit",
		description: "Inventory, audit, and regression-test your LLM prompts. CO-STAR, RISEN, TIDD-EC frameworks. Claude Code plugin for prompt lifecycle management and evolution.",
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
			description: "CO-STAR (контекстно-структурированный), RISEN (ролевой), TIDD-EC (декомпозиция задач) - или создайте свой. Каждый задаёт свою архитектуру промптов.",
		},
		{
			icon: "\u25C7",
			title: "Регрессионное тестирование",
			description: "LLM-as-judge тесты гарантируют, что изменения промптов не ломают существующее поведение. Интегрировано с forge-qa.",
		},
		{
			icon: "\u25C7",
			title: "5 психологических предупреждений",
			description: "Привязка к первым черновикам, confirmation bias при оценке тестов, sunk cost на неработающих промптах, авторитетный bias к примерам вендоров и эффекты фрейминга при A/B-сравнении промптов.",
		},
		{
			icon: "\u25C7",
			title: "Learning loop",
			description: "Находки аудитов автоматически становятся новыми принципами. После 3 циклов ваши гайдлайны промптов отражают реальные паттерны проекта, а не генерические best practices.",
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

	personas: {
		title: "Для кого это",
		items: [
			{ role: "AI-инженер", benefit: "Управляйте промптами с фреймворками, аудит-трейлами и регрессионными тестами." },
			{ role: "Разработчик с LLM API", benefit: "Перестаньте писать промпты ad-hoc - получите структурированные фреймворки и автоматические проверки качества." },
			{ role: "Тимлид", benefit: "Стандартизируйте промпт-инжиниринг по команде с общими принципами и learning loop." },
		],
	},

	seo: {
		title: "forge-prompts - Промпт-инжиниринг в масштабе | Forge DevKit",
		description: "Инвентаризация, аудит и регрессионное тестирование LLM-промптов. Фреймворки CO-STAR, RISEN, TIDD-EC. Плагин Claude Code для управления жизненным циклом промптов.",
	},
};

export const promptsPageConfigI18n: Record<string, ModulePageConfig> = {
	en: promptsPageConfig,
	ru: promptsPageConfigRu,
};
