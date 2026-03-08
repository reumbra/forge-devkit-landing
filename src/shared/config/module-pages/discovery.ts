import type { ModulePageConfig } from "./types";

export const discoveryPageConfig: ModulePageConfig = {
	slug: "discovery",
	name: "forge-discovery",
	tagline: "Validate before you build",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Building features nobody asked for",
			evidence: "80% of product features are rarely or never used. Discovery prevents building the wrong thing.",
		},
		{
			pain: "Assumptions disguised as requirements",
			evidence: "Teams ship based on gut feelings. No evidence, no interviews, no validation.",
		},
		{
			pain: "Discovery artifacts disconnect from development",
			evidence: "Research lives in Google Docs. Development starts from scratch. Insights never reach the codebase.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-discovery to your environment.",
			visual: [{ text: "forge install forge-discovery", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard detects your product type and recommends discovery methods.",
		},
		{
			title: "Discover",
			description: "Guided ideation, competitive research, problem validation, and interview synthesis.",
			visual: [
				{ prefix: "Mode:", text: " ideate / research / validate / interview", color: "text" },
			],
		},
		{
			title: "Feed downstream",
			description: "Discovery artifacts flow into forge-marketing and forge-product automatically.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 discovery modes",
			description: "Ideate, research, validate, interview. Each produces structured artifacts for the next step.",
		},
		{
			icon: "\u25C7",
			title: "7 psychology biases",
			description: "Contextual warnings at decision points. Prevents confirmation bias, survivorship bias, and more.",
		},
		{
			icon: "\u25C7",
			title: "Competitive landscape mapping",
			description: "Structured competitor analysis with positioning gaps and opportunity identification.",
		},
		{
			icon: "\u25C7",
			title: "Interview synthesis",
			description: "Extract patterns from user interviews. Evidence-based insights, not cherry-picked quotes.",
		},
	],

	comparison: [
		{
			dimension: "Structure",
			them: "Freeform notes in Google Docs",
			forge: "Structured artifacts with downstream connections",
		},
		{
			dimension: "Bias protection",
			them: "None - you bring your own biases",
			forge: "7 cognitive bias detectors at decision points",
		},
		{
			dimension: "Development connection",
			them: "Manual translation to specs",
			forge: "Artifacts feed forge-marketing and forge-product directly",
		},
	],
	comparisonTarget: "Manual product discovery",

	integrations: [
		{
			module: "forge-marketing",
			description: "Discovery insights feed positioning and go-to-market strategy",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Validated problems become product specs and user flows",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-discovery - Validate Before You Build | Forge DevKit",
		description: "Structured product discovery: ideation, competitive research, validation, interview synthesis. 7 cognitive bias detectors. Artifacts feed marketing and product modules.",
	},
};

const discoveryPageConfigRu: ModulePageConfig = {
	slug: "discovery",
	name: "forge-discovery",
	tagline: "Валидируй прежде чем строить",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Строите фичи, которые никто не просил",
			evidence: "80% продуктовых фич используются редко или никогда. Discovery предотвращает строительство не того.",
		},
		{
			pain: "Предположения маскируются под требования",
			evidence: "Команды запускают на основе интуиции. Без доказательств, без интервью, без валидации.",
		},
		{
			pain: "Артефакты discovery не связаны с разработкой",
			evidence: "Исследования живут в Google Docs. Разработка начинается с нуля. Инсайты не доходят до кодовой базы.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-discovery в ваше окружение.",
			visual: discoveryPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард определяет тип продукта и рекомендует методы discovery.",
		},
		{
			title: "Исследование",
			description: "Управляемая идеация, конкурентный анализ, валидация проблем и синтез интервью.",
			visual: discoveryPageConfig.steps[2].visual,
		},
		{
			title: "Передача вниз по цепочке",
			description: "Артефакты discovery автоматически передаются в forge-marketing и forge-product.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 режима discovery",
			description: "Идеация, исследование, валидация, интервью. Каждый создаёт структурированные артефакты.",
		},
		{
			icon: "\u25C7",
			title: "7 когнитивных предупреждений",
			description: "Контекстные предупреждения в точках принятия решений. Защита от confirmation bias, survivorship bias и других.",
		},
		{
			icon: "\u25C7",
			title: "Карта конкурентного ландшафта",
			description: "Структурированный анализ конкурентов с выявлением позиционных пробелов и возможностей.",
		},
		{
			icon: "\u25C7",
			title: "Синтез интервью",
			description: "Извлечение паттернов из пользовательских интервью. Доказательные инсайты, не cherry-picked цитаты.",
		},
	],

	comparison: [
		{
			dimension: "Структура",
			them: "Свободные заметки в Google Docs",
			forge: "Структурированные артефакты с downstream-связями",
		},
		{
			dimension: "Защита от bias",
			them: "Нет - вы приносите свои предубеждения",
			forge: "7 детекторов когнитивных искажений в точках решений",
		},
		{
			dimension: "Связь с разработкой",
			them: "Ручная трансляция в спеки",
			forge: "Артефакты передаются в forge-marketing и forge-product напрямую",
		},
	],
	comparisonTarget: "Ручной product discovery",

	integrations: [
		{
			module: "forge-marketing",
			description: "Инсайты discovery питают позиционирование и GTM-стратегию",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Валидированные проблемы становятся продуктовыми спеками и user flow",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-discovery - Валидируй прежде чем строить | Forge DevKit",
		description: "Структурированный product discovery: идеация, конкурентный анализ, валидация, синтез интервью. 7 детекторов когнитивных искажений.",
	},
};

export const discoveryPageConfigI18n: Record<string, ModulePageConfig> = {
	en: discoveryPageConfig,
	ru: discoveryPageConfigRu,
};
