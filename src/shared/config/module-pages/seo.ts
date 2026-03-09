import type { ModulePageConfig } from "./types";

export const seoPageConfig: ModulePageConfig = {
	slug: "seo",
	name: "forge-seo",
	tagline: "SEO grounded in your product, not tricks",
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
			description: "Warns when you anchor to high-volume vanity keywords, chase trend spikes, or copy competitor keywords without product fit.",
		},
		{
			icon: "\u25C7",
			title: "Product-grounded keywords",
			description: "Keywords tied to what you sell, not what has the highest volume. A keyword with 200 searches/month from buyers beats 10,000 from browsers.",
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

	outputExample: {
		title: "forge:seo research - Keyword Analysis",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Keyword Research - taskflow-app</span>

<span class="t-white t-bold">Keyword</span>                      <span class="t-white t-bold">Intent</span>       <span class="t-white t-bold">Volume</span>  <span class="t-white t-bold">Difficulty</span>  <span class="t-white t-bold">Fit</span>
<span class="t-white">freelance invoice tool</span>       <span class="t-cyan">transactional</span> <span class="t-white">2.4K</span>   <span class="t-green">Low</span>         <span class="t-green t-bold">95%</span>
<span class="t-white">send invoice online free</span>     <span class="t-cyan">transactional</span> <span class="t-white">8.1K</span>   <span class="t-yellow">Medium</span>      <span class="t-yellow">70%</span>
<span class="t-white">invoice generator</span>            <span class="t-muted">navigational</span>  <span class="t-white">14K</span>    <span class="t-red">High</span>        <span class="t-red">40%</span>
<span class="t-white">how to invoice as freelancer</span>  <span class="t-cyan">informational</span> <span class="t-white">1.8K</span>   <span class="t-green">Low</span>         <span class="t-green t-bold">90%</span>

<span class="t-muted">Recommended:</span> <span class="t-white">Target long-tail transactional keywords first</span>
<span class="t-yellow t-bold">Bias alert:</span> <span class="t-yellow">High-volume keywords look attractive but competition makes ROI low</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Marketing Lead", benefit: "Get product-grounded keyword strategy and technical audit without an SEO agency." },
			{ role: "Content Writer", benefit: "Write for intent-matched keywords with ready-to-use schema markup." },
			{ role: "Founder", benefit: "Cover technical SEO, keywords, and structured data without learning the discipline." },
		],
	},

	seo: {
		title: "forge-seo - AI-Powered SEO Strategy | Forge DevKit",
		description: "Technical SEO audit, intent-based keywords, and schema markup - grounded in your product positioning. Claude Code plugin for search visibility without black-hat tricks.",
	},
};

const seoPageConfigRu: ModulePageConfig = {
	slug: "seo",
	name: "forge-seo",
	tagline: "SEO из контекста продукта, а не трюков",
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
			description: "Предупреждает, когда вы цепляетесь за высокочастотные vanity-ключи, гонитесь за всплесками трендов или копируете ключевые слова конкурентов без продуктового fit.",
		},
		{
			icon: "\u25C7",
			title: "Продуктово-обоснованные ключевые слова",
			description: "Ключи привязаны к тому, что вы продаёте, а не к тому, что имеет максимальный объём. Ключ с 200 поисками/мес от покупателей бьёт 10 000 от зевак.",
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

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Маркетинг-лид", benefit: "Стратегия ключевых слов и технический аудит на основе продукта без SEO-агентства." },
			{ role: "Контент-райтер", benefit: "Пишите под intent-matched ключевые слова с готовым schema markup." },
			{ role: "Основатель", benefit: "Покройте технический SEO, ключевые слова и structured data без изучения дисциплины." },
		],
	},

	seo: {
		title: "forge-seo - AI-стратегия поисковой оптимизации | Forge DevKit",
		description: "Технический SEO-аудит, intent-based ключевые слова и schema markup на основе позиционирования продукта. Плагин Claude Code для видимости без накрутки.",
	},
};

export const seoPageConfigI18n: Record<string, ModulePageConfig> = {
	en: seoPageConfig,
	ru: seoPageConfigRu,
};
