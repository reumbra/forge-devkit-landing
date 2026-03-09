import type { ModulePageConfig } from "./types";

export const productPageConfig: ModulePageConfig = {
	slug: "product",
	name: "forge-product",
	tagline: "Business language \u2192 AI-consumable specs",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "PRDs that AI can't parse",
			evidence:
				"Product docs in Notion/Figma/Miro are designed for humans. AI agents can't extract actionable requirements.",
		},
		{
			pain: "Features built without acceptance criteria",
			evidence:
				"AI jumps straight to code. No user flows, no edge cases, no definition of done.",
		},
		{
			pain: "Specs that don't match architecture",
			evidence:
				"Product specs reference components that don't exist or ignore architectural boundaries.",
		},
	],

	steps: [
		{
			title: "Setup",
			description:
				"Product auditor detects your product type: B2C, B2B, marketplace, internal tool.",
		},
		{
			title: "Design",
			description:
				"Describe a feature in business language. forge-product generates user flows, stories, and UX criteria.",
			visual: [
				{ text: "/forge:product design 'Add Stripe payments'", color: "secondary" },
			],
		},
		{
			title: "Generate",
			description:
				"Produces AI-consumable artifacts: user stories with AC, use cases, UX criteria matrix.",
		},
		{
			title: "Integrate",
			description:
				"forge-qa uses these artifacts to generate requirement-traced tests. forge-core references them in guardrails.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "9 product archetypes",
			description:
				"B2C app, B2B SaaS, marketplace, internal tool, API service, and more. Auto-detected.",
		},
		{
			icon: "\u25C7",
			title: "9 methodology frameworks",
			description:
				"Jobs to Be Done, Impact Mapping, Story Mapping, Event Storming, and more.",
		},
		{
			icon: "\u25C7",
			title: "User flows with edge cases",
			description:
				"Happy paths, error states, and boundary conditions - all generated from feature description.",
		},
		{
			icon: "\u25C7",
			title: "AI Enhancement Mixin",
			description:
				"Augments any product archetype with AI-specific considerations: prompt design, model selection, fallbacks.",
		},
	],

	comparison: [
		{
			dimension: "Input",
			them: "Visual boards, manual PRDs",
			forge: "Plain text feature description",
		},
		{
			dimension: "Output",
			them: "Human-readable docs",
			forge: "AI-consumable artifacts with AC",
		},
		{
			dimension: "Test connection",
			them: "Manual handoff",
			forge: "Direct pipeline to forge-qa",
		},
	],
	comparisonTarget: "Figma/Miro PRD tools",

	integrations: [
		{
			module: "forge-core",
			description: "Architecture data informs product constraints",
			href: "/modules/core",
		},
		{
			module: "forge-qa",
			description: "Test generation traces directly to product artifacts",
			href: "/modules/qa",
		},
	],
	relatedComparisons: [
		{ label: "Forge vs Manual CLAUDE.md", href: "/vs/claude-md" },
	],
	relatedComparisonsHeading: "See how Forge compares",

	outputExample: {
		title: "forge:product design - User Story",
		language: "markdown",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">User Story: Shopping Cart Checkout</span>

<span class="t-muted">As a</span> <span class="t-white">registered customer on shoply-api</span>
<span class="t-muted">I want to</span> <span class="t-white">complete checkout with saved payment methods</span>
<span class="t-muted">So that</span> <span class="t-white">I can purchase items without re-entering card details</span>

<span class="t-white t-bold">Acceptance Criteria:</span>
  <span class="t-green">AC-1:</span> <span class="t-white">Saved cards displayed with last 4 digits + expiry</span>
  <span class="t-green">AC-2:</span> <span class="t-white">New card option with Stripe Elements integration</span>
  <span class="t-green">AC-3:</span> <span class="t-white">Order confirmation email within 30s of payment</span>
  <span class="t-green">AC-4:</span> <span class="t-white">Cart cleared and inventory decremented atomically</span>

<span class="t-muted">Complexity:</span> <span class="t-yellow">M (3-5 files)</span> <span class="t-muted">|</span> <span class="t-muted">Priority:</span> <span class="t-cyan">P1</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Product Manager", benefit: "Turn business requirements into structured specs that AI agents can actually execute." },
			{ role: "Tech Lead", benefit: "Translate product requirements into architecture-aware artifacts without manual spec writing." },
			{ role: "Founder", benefit: "Validate feature ideas with structured user flows before committing engineering time." },
		],
	},

	seo: {
		title: "forge-product - AI-Ready Product Specs | Forge DevKit",
		description:
			"Turn feature ideas into specs Claude Code can execute - user stories, acceptance criteria, UX flows. 9 product archetypes. AI coding starts with clear requirements.",
	},
};

const productPageConfigRu: ModulePageConfig = {
	slug: "product",
	name: "forge-product",
	tagline: "Бизнес-язык \u2192 спеки, понятные AI",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "PRD, которые AI не может распарсить",
			evidence:
				"Продуктовые доки в Notion/Figma/Miro рассчитаны на людей. AI-агенты не могут извлечь из них требования.",
		},
		{
			pain: "Фичи без критериев приемки",
			evidence:
				"AI сразу пишет код. Без пользовательских флоу, без крайних случаев, без definition of done.",
		},
		{
			pain: "Спеки не соответствуют архитектуре",
			evidence:
				"Продуктовые спеки ссылаются на компоненты, которых нет, или игнорируют архитектурные границы.",
		},
	],

	steps: [
		{
			title: "Настройка",
			description:
				"Продуктовый аудитор определяет тип продукта: B2C, B2B, маркетплейс, внутренний инструмент.",
		},
		{
			title: "Дизайн",
			description:
				"Опишите фичу на бизнес-языке. forge-product генерирует user flows, stories и UX-критерии.",
			visual: productPageConfig.steps[1].visual,
		},
		{
			title: "Генерация",
			description:
				"Создаёт артефакты для AI: user stories с AC, use cases, матрицу UX-критериев.",
		},
		{
			title: "Интеграция",
			description:
				"forge-qa использует артефакты для генерации тестов с прослеживаемостью. forge-core ссылается на них в гайдрейлах.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "9 продуктовых архетипов",
			description:
				"B2C-приложение, B2B SaaS, маркетплейс, внутренний инструмент, API-сервис и другие. Автодетекция.",
		},
		{
			icon: "\u25C7",
			title: "9 фреймворков методологий",
			description:
				"Jobs to Be Done, Impact Mapping, Story Mapping, Event Storming и другие.",
		},
		{
			icon: "\u25C7",
			title: "User flows с крайними случаями",
			description:
				"Happy path, ошибки, граничные условия - всё генерируется из описания фичи.",
		},
		{
			icon: "\u25C7",
			title: "AI Enhancement Mixin",
			description:
				"Дополняет любой архетип AI-специфичными аспектами: промпт-дизайн, выбор модели, fallback-стратегии.",
		},
	],

	comparison: [
		{
			dimension: "Вход",
			them: "Визуальные доски, ручные PRD",
			forge: "Текстовое описание фичи",
		},
		{
			dimension: "Выход",
			them: "Документы для людей",
			forge: "Артефакты для AI с критериями приемки",
		},
		{
			dimension: "Связь с тестами",
			them: "Ручная передача",
			forge: "Прямой pipeline в forge-qa",
		},
	],
	comparisonTarget: "Figma/Miro PRD tools",

	integrations: [
		{
			module: "forge-core",
			description: "Данные архитектуры определяют продуктовые ограничения",
			href: "/modules/core",
		},
		{
			module: "forge-qa",
			description: "Генерация тестов напрямую связана с продуктовыми артефактами",
			href: "/modules/qa",
		},
	],
	relatedComparisons: [
		{ label: "Forge vs ручной CLAUDE.md", href: "/vs/claude-md" },
	],
	relatedComparisonsHeading: "Сравнения",

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Продакт-менеджер", benefit: "Превращайте бизнес-требования в структурированные спеки, которые AI-агенты могут выполнить." },
			{ role: "Тех-лид", benefit: "Переводите продуктовые требования в артефакты с учетом архитектуры без ручного написания спек." },
			{ role: "Основатель", benefit: "Валидируйте идеи фич через структурированные user flow до начала разработки." },
		],
	},

	seo: {
		title: "forge-product - Спеки, понятные AI | Forge DevKit",
		description:
			"Превращайте идеи фич в спеки для Claude Code - user stories, критерии приемки, UX-потоки. 9 продуктовых архетипов. AI-разработка начинается с ясных требований.",
	},
};

export const productPageConfigI18n: Record<string, ModulePageConfig> = {
	en: productPageConfig,
	ru: productPageConfigRu,
};
