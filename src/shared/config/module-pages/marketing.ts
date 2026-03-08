import type { ModulePageConfig } from "./types";

export const marketingPageConfig: ModulePageConfig = {
	slug: "marketing",
	name: "forge-marketing",
	tagline: "From validated problem to go-to-market",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Positioning by guesswork",
			evidence: "Teams pick messaging based on internal opinions. No grounding in competitive analysis or user language.",
		},
		{
			pain: "Pricing disconnected from value",
			evidence: "Pricing decisions happen in spreadsheets with no connection to product capabilities or user willingness to pay.",
		},
		{
			pain: "Launch plans that don't connect to code",
			evidence: "Marketing and development run in parallel universes. Feature readiness and launch timing never align.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-marketing to your environment.",
			visual: [{ text: "forge install forge-marketing", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard detects product type and reads upstream discovery artifacts if available.",
		},
		{
			title: "Strategize",
			description: "Positioning, pricing, launch planning, and content strategy - grounded in evidence.",
			visual: [
				{ prefix: "Mode:", text: " position / price / launch / content", color: "text" },
			],
		},
		{
			title: "Feed downstream",
			description: "Brand voice and positioning flow into copy, SEO, and growth modules automatically.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 strategy modes",
			description: "Position, price, launch, content. Each grounded in discovery insights when available.",
		},
		{
			icon: "\u25C7",
			title: "8 psychology biases",
			description: "Anchoring, loss aversion, social proof - surfaced as contextual advice at pricing and positioning decisions.",
		},
		{
			icon: "\u25C7",
			title: "Competitive positioning",
			description: "Maps your differentiation against alternatives. Identifies messaging gaps and opportunities.",
		},
		{
			icon: "\u25C7",
			title: "Pricing strategy framework",
			description: "Value-based pricing with tier structure, anchor points, and willingness-to-pay analysis.",
		},
	],

	comparison: [
		{
			dimension: "Positioning",
			them: "Internal brainstorming, no validation",
			forge: "Evidence-based, grounded in discovery + competitive analysis",
		},
		{
			dimension: "Pricing",
			them: "Spreadsheet guesses",
			forge: "Value-based framework with psychology-informed tier design",
		},
		{
			dimension: "Development connection",
			them: "Marketing team works separately",
			forge: "Outputs feed copy, SEO, growth modules directly",
		},
	],
	comparisonTarget: "Generic marketing frameworks",

	integrations: [
		{
			module: "forge-discovery",
			description: "Reads validated insights for evidence-based positioning",
			href: "/modules/discovery",
		},
		{
			module: "forge-copy",
			description: "Brand voice and positioning guide all generated copy",
			href: "/modules/copy",
		},
		{
			module: "forge-seo",
			description: "Keyword strategy aligned with positioning and market gaps",
			href: "/modules/seo",
		},
	],

	seo: {
		title: "forge-marketing - From Problem to Go-to-Market | Forge DevKit",
		description: "Evidence-based positioning, value-based pricing, launch planning. 8 psychology biases at decision points. Feeds copy, SEO, and growth modules.",
	},
};

const marketingPageConfigRu: ModulePageConfig = {
	slug: "marketing",
	name: "forge-marketing",
	tagline: "От валидированной проблемы к выходу на рынок",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Позиционирование наугад",
			evidence: "Команды выбирают месседжинг на основе внутренних мнений. Без конкурентного анализа или языка пользователей.",
		},
		{
			pain: "Ценообразование оторвано от ценности",
			evidence: "Решения о ценах принимаются в таблицах без связи с возможностями продукта или готовностью платить.",
		},
		{
			pain: "Планы запуска не связаны с кодом",
			evidence: "Маркетинг и разработка живут в параллельных вселенных. Готовность фич и тайминг запуска не совпадают.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-marketing в ваше окружение.",
			visual: marketingPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард определяет тип продукта и читает upstream-артефакты discovery.",
		},
		{
			title: "Стратегия",
			description: "Позиционирование, ценообразование, планирование запуска и контент-стратегия - на основе доказательств.",
			visual: marketingPageConfig.steps[2].visual,
		},
		{
			title: "Передача вниз",
			description: "Голос бренда и позиционирование автоматически передаются в модули copy, SEO и growth.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 режима стратегии",
			description: "Position, price, launch, content. Каждый опирается на инсайты discovery когда доступны.",
		},
		{
			icon: "\u25C7",
			title: "8 психологических предупреждений",
			description: "Anchoring, loss aversion, social proof - контекстные советы при решениях о ценах и позиционировании.",
		},
		{
			icon: "\u25C7",
			title: "Конкурентное позиционирование",
			description: "Маппит вашу дифференциацию против альтернатив. Выявляет пробелы и возможности в месседжинге.",
		},
		{
			icon: "\u25C7",
			title: "Фреймворк ценовой стратегии",
			description: "Ценообразование от ценности с тирной структурой, якорными точками и анализом готовности платить.",
		},
	],

	comparison: [
		{
			dimension: "Позиционирование",
			them: "Внутренний брейнсторм, без валидации",
			forge: "На основе доказательств: discovery + конкурентный анализ",
		},
		{
			dimension: "Ценообразование",
			them: "Угадывание в таблицах",
			forge: "Value-based фреймворк с психологически обоснованным дизайном тиров",
		},
		{
			dimension: "Связь с разработкой",
			them: "Маркетинг работает отдельно",
			forge: "Результаты передаются в модули copy, SEO, growth напрямую",
		},
	],
	comparisonTarget: "Генерические маркетинговые фреймворки",

	integrations: [
		{
			module: "forge-discovery",
			description: "Читает валидированные инсайты для доказательного позиционирования",
			href: "/modules/discovery",
		},
		{
			module: "forge-copy",
			description: "Голос бренда и позиционирование направляют весь сгенерированный копирайтинг",
			href: "/modules/copy",
		},
		{
			module: "forge-seo",
			description: "Стратегия ключевых слов выровнена с позиционированием и рыночными пробелами",
			href: "/modules/seo",
		},
	],

	seo: {
		title: "forge-marketing - От проблемы к выходу на рынок | Forge DevKit",
		description: "Доказательное позиционирование, ценообразование от ценности, планирование запуска. 8 психологических предупреждений. Питает модули copy, SEO, growth.",
	},
};

export const marketingPageConfigI18n: Record<string, ModulePageConfig> = {
	en: marketingPageConfig,
	ru: marketingPageConfigRu,
};
