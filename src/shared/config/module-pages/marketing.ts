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
			description: "Position, price, launch, content. When forge-discovery data exists, strategies are evidence-based. Without it, guided frameworks fill the gap.",
		},
		{
			icon: "\u25C7",
			title: "8 psychology biases",
			description: "Anchoring, loss aversion, social proof - surfaced as contextual advice at pricing and positioning decisions.",
		},
		{
			icon: "\u25C7",
			title: "Competitive positioning",
			description: "Maps your differentiation against up to 5 alternatives. Produces a positioning matrix with gaps you can own and messages competitors can't copy.",
		},
		{
			icon: "\u25C7",
			title: "Pricing strategy framework",
			description: "Outputs a tier structure with specific prices, anchor points, and free-vs-paid feature splits - not just 'consider value-based pricing'.",
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

	outputExample: {
		title: "forge:marketing - Positioning Matrix",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Positioning Matrix - taskflow-app</span>

<span class="t-white t-bold">Dimension</span>          <span class="t-white t-bold">Your Position</span>              <span class="t-white t-bold">Competitor Avg</span>
<span class="t-white">Target segment</span>     <span class="t-cyan">Solo freelancers, 1-5 ppl</span>   <span class="t-muted">SMB teams 10-50</span>
<span class="t-white">Core promise</span>       <span class="t-cyan">Invoice in 30 seconds</span>       <span class="t-muted">Full project management</span>
<span class="t-white">Price anchor</span>       <span class="t-cyan">$9/mo (vs $29 avg)</span>         <span class="t-muted">$29-49/mo</span>
<span class="t-white">Key differentiator</span> <span class="t-green">AI auto-categorization</span>      <span class="t-muted">Manual tagging</span>

<span class="t-yellow t-bold">Bias alert:</span> <span class="t-yellow">Feature parity trap - don't add features just because competitors have them</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Founder", benefit: "Build evidence-based positioning and pricing instead of guessing what resonates." },
			{ role: "Marketing Lead", benefit: "Get a competitive positioning matrix and launch plan grounded in product data." },
			{ role: "Solo SaaS Builder", benefit: "Cover positioning, pricing, and GTM strategy without hiring a marketing team." },
		],
	},

	seo: {
		title: "forge-marketing - AI Go-to-Market Strategy | Forge DevKit",
		description: "Build positioning, pricing, and launch plans with AI guidance. Evidence-based decisions with 8 bias detectors. Claude Code plugin that feeds copy, SEO, and growth.",
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
			description: "Position, price, launch, content. Когда есть данные forge-discovery, стратегии строятся на доказательствах. Без них - управляемые фреймворки заполняют пробел.",
		},
		{
			icon: "\u25C7",
			title: "8 психологических предупреждений",
			description: "Anchoring, loss aversion, social proof - контекстные советы при решениях о ценах и позиционировании.",
		},
		{
			icon: "\u25C7",
			title: "Конкурентное позиционирование",
			description: "Маппит вашу дифференциацию против до 5 альтернатив. Создаёт матрицу позиционирования с нишами, которые можно занять, и месседжами, которые конкуренты не скопируют.",
		},
		{
			icon: "\u25C7",
			title: "Фреймворк ценовой стратегии",
			description: "На выходе - тирная структура с конкретными ценами, якорными точками и разделением free/paid фич - а не просто 'рассмотрите value-based ценообразование'.",
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

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Основатель", benefit: "Стройте позиционирование и ценообразование на доказательствах, а не на догадках." },
			{ role: "Маркетинг-лид", benefit: "Получите матрицу конкурентного позиционирования и план запуска на основе данных продукта." },
			{ role: "Соло SaaS-разработчик", benefit: "Покройте позиционирование, ценообразование и GTM без найма маркетинговой команды." },
		],
	},

	seo: {
		title: "forge-marketing - AI-стратегия выхода на рынок | Forge DevKit",
		description: "Позиционирование, ценообразование и план запуска с AI-помощью. 8 детекторов когнитивных искажений. Плагин Claude Code, питающий модули copy, SEO и growth.",
	},
};

export const marketingPageConfigI18n: Record<string, ModulePageConfig> = {
	en: marketingPageConfig,
	ru: marketingPageConfigRu,
};
