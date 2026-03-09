import type { ModulePageConfig } from "./types";

export const analyticsPageConfig: ModulePageConfig = {
	slug: "analytics",
	name: "forge-analytics",
	tagline: "Plan measurement before you code",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Tracking added as an afterthought",
			evidence: "Feature ships Monday. Someone asks 'how do we measure success?' on Friday. Retroactive tracking misses key events.",
		},
		{
			pain: "Vanity metrics everywhere",
			evidence: "Dashboards full of page views and signups. Nobody tracks the events that actually drive business decisions.",
		},
		{
			pain: "Inconsistent event naming",
			evidence: "user_clicked_button, buttonClick, click-cta - same event, three names. Analytics becomes unreliable.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-analytics to your environment.",
			visual: [{ text: "forge install forge-analytics", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard reads product context and establishes measurement principles.",
		},
		{
			title: "Plan",
			description: "Generate tracking plans, event schemas, and dashboard specs - all mapped to business decisions.",
			visual: [
				{ prefix: "Mode:", text: " plan / schema / dashboard", color: "text" },
			],
		},
		{
			title: "Implement",
			description: "Developers get concrete event names, properties, and trigger conditions. No guessing.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 operational modes",
			description: "Plan, schema, dashboard. Each produces artifacts developers can implement directly.",
		},
		{
			icon: "\u25C7",
			title: "Decision-mapped events",
			description: "Every tracked event maps to a business decision. No vanity metrics make it to the spec.",
		},
		{
			icon: "\u25C7",
			title: "Enforced event taxonomy",
			description: "Consistent event taxonomy generated from product context. One naming scheme for the entire project.",
		},
		{
			icon: "\u25C7",
			title: "Dashboard specs",
			description: "Layout, dimensions, filters - specified before implementation. Developers build the dashboard once instead of iterating through 5 versions of 'can you add a filter?'",
		},
	],

	comparison: [
		{
			dimension: "Timing",
			them: "After launch, retroactive",
			forge: "Before coding, measurement-first",
		},
		{
			dimension: "Event quality",
			them: "Whatever developer thinks to track",
			forge: "Decision-mapped events from product context",
		},
		{
			dimension: "Consistency",
			them: "Ad-hoc naming across features",
			forge: "Generated taxonomy with enforced conventions",
		},
	],
	comparisonTarget: "Ad-hoc analytics tracking",

	integrations: [
		{
			module: "forge-product",
			description: "Reads user flows and goals to generate relevant tracking plans",
			href: "/modules/product",
		},
		{
			module: "forge-ab",
			description: "Experiment events integrate with the analytics schema",
			href: "/modules/ab",
		},
		{
			module: "forge-growth",
			description: "Retention metrics and funnel events feed growth analysis",
			href: "/modules/growth",
		},
	],

	outputExample: {
		title: "forge:analytics - Event Schema",
		language: "yaml",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Event Schema - taskflow-app</span>

<span class="t-cyan">event:</span>     <span class="t-white">checkout_completed</span>
<span class="t-cyan">trigger:</span>   <span class="t-muted">User completes payment on /checkout</span>
<span class="t-cyan">decision:</span>  <span class="t-green">Measures conversion rate for pricing page changes</span>

<span class="t-cyan">properties:</span>
  <span class="t-white">plan_tier:</span>       <span class="t-muted">string</span>   <span class="t-muted"># starter | pro | team</span>
  <span class="t-white">payment_method:</span>  <span class="t-muted">string</span>   <span class="t-muted"># card | paypal</span>
  <span class="t-white">trial_converted:</span> <span class="t-muted">boolean</span>  <span class="t-muted"># was user on free trial?</span>
  <span class="t-white">cart_value:</span>      <span class="t-muted">number</span>   <span class="t-muted"># in cents, USD</span>

<span class="t-muted">Dashboard:</span> <span class="t-white">Revenue Overview</span> <span class="t-muted">|</span> <span class="t-muted">Source:</span> <span class="t-white">Stripe webhook + client</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Product Manager", benefit: "Define what to measure before features ship - no more retroactive tracking scrambles." },
			{ role: "Data-Informed Developer", benefit: "Get concrete event names, properties, and triggers instead of guessing what to track." },
			{ role: "Growth Lead", benefit: "Ensure every tracked event maps to a business decision - zero vanity metrics." },
		],
	},

	seo: {
		title: "forge-analytics - Plan Tracking Before Code | Forge DevKit",
		description: "Design tracking plans, event schemas, and dashboards before you build. Every event tied to a business decision. AI development plugin for measurement-first analytics.",
	},
};

const analyticsPageConfigRu: ModulePageConfig = {
	slug: "analytics",
	name: "forge-analytics",
	tagline: "Спланируй измерения до первого коммита",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Трекинг добавляется постфактум",
			evidence: "Фича запускается в понедельник. В пятницу спрашивают 'как мы измеряем успех?'. Ретроактивный трекинг упускает ключевые события.",
		},
		{
			pain: "Vanity-метрики повсюду",
			evidence: "Дашборды полны page views и signups. Никто не трекает события, которые реально влияют на бизнес-решения.",
		},
		{
			pain: "Неконсистентные имена событий",
			evidence: "user_clicked_button, buttonClick, click-cta - одно событие, три имени. Аналитика становится ненадёжной.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-analytics в ваше окружение.",
			visual: analyticsPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард читает продуктовый контекст и устанавливает принципы измерения.",
		},
		{
			title: "Планирование",
			description: "Генерация tracking-планов, event-схем и спецификаций дашбордов - всё привязано к бизнес-решениям.",
			visual: analyticsPageConfig.steps[2].visual,
		},
		{
			title: "Реализация",
			description: "Разработчики получают конкретные имена событий, свойства и условия триггеров. Без угадывания.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 операционных режима",
			description: "Plan, schema, dashboard. Каждый создаёт артефакты, которые разработчики могут реализовать напрямую.",
		},
		{
			icon: "\u25C7",
			title: "События, привязанные к решениям",
			description: "Каждое трекаемое событие привязано к бизнес-решению. Vanity-метрики не попадают в спеку.",
		},
		{
			icon: "\u25C7",
			title: "Обязательная таксономия событий",
			description: "Консистентная таксономия событий из продуктового контекста. Одна схема именования на весь проект.",
		},
		{
			icon: "\u25C7",
			title: "Спецификации дашбордов",
			description: "Layout, измерения, фильтры - специфицированы до реализации. Разработчики собирают дашборд один раз, а не итерируют через 5 версий 'а добавьте фильтр'.",
		},
	],

	comparison: [
		{
			dimension: "Тайминг",
			them: "После запуска, ретроактивно",
			forge: "До кодирования, measurement-first",
		},
		{
			dimension: "Качество событий",
			them: "Что разработчик решит затрекать",
			forge: "Decision-mapped события из продуктового контекста",
		},
		{
			dimension: "Консистентность",
			them: "Ad-hoc именование по фичам",
			forge: "Сгенерированная таксономия с enforced-конвенциями",
		},
	],
	comparisonTarget: "Ad-hoc аналитический трекинг",

	integrations: [
		{
			module: "forge-product",
			description: "Читает user flow и цели для генерации релевантных tracking-планов",
			href: "/modules/product",
		},
		{
			module: "forge-ab",
			description: "События экспериментов интегрируются с аналитической схемой",
			href: "/modules/ab",
		},
		{
			module: "forge-growth",
			description: "Метрики retention и funnel-события питают анализ роста",
			href: "/modules/growth",
		},
	],

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Продакт-менеджер", benefit: "Определите что измерять до запуска фич - без ретроактивных авралов с трекингом." },
			{ role: "Data-informed разработчик", benefit: "Получите конкретные имена событий, свойства и триггеры вместо угадывания что трекать." },
			{ role: "Growth-лид", benefit: "Каждое трекаемое событие привязано к бизнес-решению - ноль vanity-метрик." },
		],
	},

	seo: {
		title: "forge-analytics - Аналитика до первой строки кода | Forge DevKit",
		description: "Проектируйте tracking-планы, event-схемы и дашборды до начала разработки. Каждое событие привязано к бизнес-решению. AI-плагин для measurement-first подхода.",
	},
};

export const analyticsPageConfigI18n: Record<string, ModulePageConfig> = {
	en: analyticsPageConfig,
	ru: analyticsPageConfigRu,
};
