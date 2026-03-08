import type { ModulePageConfig } from "./types";

export const seoPageConfig: ModulePageConfig = {
	slug: "seo",
	name: "forge-seo",
	tagline: "Search visibility without gaming",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "SEO is a separate discipline nobody does",
			evidence: "Small teams don't have SEO specialists. Technical SEO issues pile up silently until ranking drops.",
		},
		{
			pain: "Keyword strategy disconnected from product",
			evidence: "Keywords chosen by search volume, not by relevance to what you actually sell.",
		},
		{
			pain: "Schema markup is complex and forgotten",
			evidence: "JSON-LD, Open Graph, Twitter Cards - each with its own spec. Most sites miss structured data entirely.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-seo to your environment.",
			visual: [{ text: "forge install forge-seo", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard reads product and marketing context for informed SEO strategy.",
		},
		{
			title: "Optimize",
			description: "Technical audit, keyword research grounded in your positioning, and schema markup generation.",
			visual: [
				{ prefix: "Mode:", text: " audit / keywords / schema", color: "text" },
			],
		},
		{
			title: "Maintain",
			description: "Re-audit after changes. Content gaps detected and filled based on evolving strategy.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 operational modes",
			description: "Audit, keywords, schema. Technical health, intent-based keywords, and structured data in one flow.",
		},
		{
			icon: "\u25C7",
			title: "4 psychology biases",
			description: "Anchoring to vanity keywords, recency bias in trends - surfaced as warnings during keyword research.",
		},
		{
			icon: "\u25C7",
			title: "Product-grounded keywords",
			description: "Keywords tied to what you sell, not what has the highest volume. Intent over traffic.",
		},
		{
			icon: "\u25C7",
			title: "Schema markup generation",
			description: "JSON-LD, Open Graph, Twitter Cards - generated from your product context. Copy-paste ready.",
		},
	],

	comparison: [
		{
			dimension: "Keyword strategy",
			them: "Volume-first, generic tools",
			forge: "Intent-first, grounded in your product positioning",
		},
		{
			dimension: "Technical audit",
			them: "External tools with generic checklists",
			forge: "Project-aware audit that knows your stack",
		},
		{
			dimension: "Schema markup",
			them: "Manual JSON-LD writing or skipped entirely",
			forge: "Auto-generated from product context",
		},
	],
	comparisonTarget: "Generic SEO tools",

	integrations: [
		{
			module: "forge-marketing",
			description: "Positioning and brand voice inform keyword selection and content strategy",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Product features map to keyword opportunities and landing pages",
			href: "/modules/product",
		},
		{
			module: "forge-analytics",
			description: "Search performance metrics feed into measurement plan",
			href: "/modules/analytics",
		},
	],

	seo: {
		title: "forge-seo - Search Visibility Without Gaming | Forge DevKit",
		description: "Technical audit, intent-based keywords, schema markup generation. Grounded in your product positioning. 4 psychology biases at keyword decisions.",
	},
};

const seoPageConfigRu: ModulePageConfig = {
	slug: "seo",
	name: "forge-seo",
	tagline: "Видимость в поиске без накрутки",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "SEO - отдельная дисциплина, которую никто не ведёт",
			evidence: "У небольших команд нет SEO-специалистов. Технические проблемы копятся тихо, пока не падают позиции.",
		},
		{
			pain: "Стратегия ключевых слов оторвана от продукта",
			evidence: "Ключевые слова выбираются по объёму, а не по релевантности тому, что вы продаёте.",
		},
		{
			pain: "Schema markup сложный и забытый",
			evidence: "JSON-LD, Open Graph, Twitter Cards - у каждого своя спека. Большинство сайтов пропускают structured data полностью.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-seo в ваше окружение.",
			visual: seoPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард читает продуктовый и маркетинговый контекст для информированной SEO-стратегии.",
		},
		{
			title: "Оптимизация",
			description: "Технический аудит, исследование ключевых слов на основе позиционирования и генерация schema markup.",
			visual: seoPageConfig.steps[2].visual,
		},
		{
			title: "Поддержка",
			description: "Переаудит после изменений. Контентные пробелы обнаруживаются и заполняются по эволюционирующей стратегии.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 операционных режима",
			description: "Audit, keywords, schema. Техническое здоровье, intent-based ключи и structured data в одном потоке.",
		},
		{
			icon: "\u25C7",
			title: "4 психологических предупреждения",
			description: "Привязка к vanity-ключам, recency bias в трендах - предупреждения при исследовании ключевых слов.",
		},
		{
			icon: "\u25C7",
			title: "Продуктово-обоснованные ключевые слова",
			description: "Ключи привязаны к тому, что вы продаёте, а не к тому, что имеет максимальный объём. Intent важнее трафика.",
		},
		{
			icon: "\u25C7",
			title: "Генерация schema markup",
			description: "JSON-LD, Open Graph, Twitter Cards - сгенерированы из продуктового контекста. Готовы к copy-paste.",
		},
	],

	comparison: [
		{
			dimension: "Стратегия ключевых слов",
			them: "Volume-first, генерические инструменты",
			forge: "Intent-first, основана на позиционировании продукта",
		},
		{
			dimension: "Технический аудит",
			them: "Внешние инструменты с генерическими чеклистами",
			forge: "Проектно-осведомлённый аудит, знающий ваш стек",
		},
		{
			dimension: "Schema markup",
			them: "Ручное написание JSON-LD или полный пропуск",
			forge: "Автогенерация из продуктового контекста",
		},
	],
	comparisonTarget: "Генерические SEO-инструменты",

	integrations: [
		{
			module: "forge-marketing",
			description: "Позиционирование и голос бренда информируют выбор ключевых слов и контент-стратегию",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Фичи продукта маппятся на возможности ключевых слов и лендинги",
			href: "/modules/product",
		},
		{
			module: "forge-analytics",
			description: "Метрики поисковой эффективности попадают в план измерений",
			href: "/modules/analytics",
		},
	],

	seo: {
		title: "forge-seo - Видимость в поиске без накрутки | Forge DevKit",
		description: "Технический аудит, intent-based ключевые слова, генерация schema markup. Основана на позиционировании продукта.",
	},
};

export const seoPageConfigI18n: Record<string, ModulePageConfig> = {
	en: seoPageConfig,
	ru: seoPageConfigRu,
};
