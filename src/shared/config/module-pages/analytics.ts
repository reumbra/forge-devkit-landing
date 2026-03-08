import type { ModulePageConfig } from "./types";

export const analyticsPageConfig: ModulePageConfig = {
	slug: "analytics",
	name: "forge-analytics",
	tagline: "Measure what matters, before you code",
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
			title: "Naming conventions",
			description: "Consistent event taxonomy generated from product context. One naming scheme for the entire project.",
		},
		{
			icon: "\u25C7",
			title: "Dashboard specs",
			description: "Layout, dimensions, filters - specified before implementation. Developers build what product needs.",
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

	seo: {
		title: "forge-analytics - Measure What Matters | Forge DevKit",
		description: "Measurement-first analytics: tracking plans, event schemas, dashboard specs. Every event maps to a business decision. Reads product context for relevant metrics.",
	},
};

const analyticsPageConfigRu: ModulePageConfig = {
	slug: "analytics",
	name: "forge-analytics",
	tagline: "Измеряй важное - до написания кода",
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
			title: "Конвенции именования",
			description: "Консистентная таксономия событий из продуктового контекста. Одна схема именования на весь проект.",
		},
		{
			icon: "\u25C7",
			title: "Спецификации дашбордов",
			description: "Layout, измерения, фильтры - специфицированы до реализации. Разработчики строят то, что нужно продукту.",
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

	seo: {
		title: "forge-analytics - Измеряй важное | Forge DevKit",
		description: "Measurement-first аналитика: tracking-планы, event-схемы, спецификации дашбордов. Каждое событие привязано к бизнес-решению.",
	},
};

export const analyticsPageConfigI18n: Record<string, ModulePageConfig> = {
	en: analyticsPageConfig,
	ru: analyticsPageConfigRu,
};
