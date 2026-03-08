import type { ModulePageConfig } from "./types";

export const growthPageConfig: ModulePageConfig = {
	slug: "growth",
	name: "forge-growth",
	tagline: "Grow smarter, not just faster",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Churn eats your growth",
			evidence: "Acquiring a new user costs 5-7x more than retaining one. But retention strategy is always 'later'.",
		},
		{
			pain: "Referrals happen by accident",
			evidence: "Happy users exist but no mechanism to turn satisfaction into referrals. Growth is linear, not compounding.",
		},
		{
			pain: "Upsell timing is guesswork",
			evidence: "Users hit limits, see the paywall, and leave. No signal detection, no proactive upgrade nudges.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-growth to your environment.",
			visual: [{ text: "forge install forge-growth", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard reads product and analytics context for data-informed growth strategy.",
		},
		{
			title: "Strategize",
			description: "Retention loops, referral mechanics, and upgrade triggers - designed as interconnected systems.",
			visual: [
				{ prefix: "Mode:", text: " retain / refer / expand", color: "text" },
			],
		},
		{
			title: "Iterate",
			description: "Measure impact, refine strategy, compound growth over time.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 growth modes",
			description: "Retain, refer, expand. Each addresses a different growth lever with concrete action items.",
		},
		{
			icon: "\u25C7",
			title: "6 psychology biases",
			description: "Loss aversion for churn prevention, social proof for referrals, endowment for upgrades.",
		},
		{
			icon: "\u25C7",
			title: "Retention-first approach",
			description: "Fix churn at the source before adding acquisition tactics. Value delivery first, growth second.",
		},
		{
			icon: "\u25C7",
			title: "Referral mechanics design",
			description: "Two-sided incentive structures, viral loops, and invite flows - designed to compound.",
		},
	],

	comparison: [
		{
			dimension: "Approach",
			them: "Acquisition-first, hope for retention",
			forge: "Retention-first, then compound with referrals",
		},
		{
			dimension: "Referrals",
			them: "No mechanism or generic 'share' button",
			forge: "Designed mechanics with two-sided incentives",
		},
		{
			dimension: "Upsell strategy",
			them: "Hard paywall when limits hit",
			forge: "Signal-based upgrade nudges at the right moment",
		},
	],
	comparisonTarget: "Growth hacking playbooks",

	integrations: [
		{
			module: "forge-product",
			description: "Product context identifies natural expansion and upsell triggers",
			href: "/modules/product",
		},
		{
			module: "forge-analytics",
			description: "Churn signals and funnel metrics feed retention strategy",
			href: "/modules/analytics",
		},
		{
			module: "forge-marketing",
			description: "Positioning informs referral messaging and upgrade value props",
			href: "/modules/marketing",
		},
	],

	seo: {
		title: "forge-growth - Grow Smarter, Not Just Faster | Forge DevKit",
		description: "Retention loops, referral mechanics, upgrade triggers. 6 psychology biases at growth decisions. Retention-first approach, then compound with referrals.",
	},
};

const growthPageConfigRu: ModulePageConfig = {
	slug: "growth",
	name: "forge-growth",
	tagline: "Расти умнее, а не просто быстрее",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Отток съедает ваш рост",
			evidence: "Привлечение нового пользователя стоит в 5-7 раз дороже удержания. Но стратегия retention - всегда 'потом'.",
		},
		{
			pain: "Реферралы случаются случайно",
			evidence: "Довольные пользователи есть, но нет механизма превратить удовлетворённость в реферралы. Рост линейный, не компаундный.",
		},
		{
			pain: "Тайминг апсейла - угадывание",
			evidence: "Пользователи упираются в лимиты, видят paywall и уходят. Нет детекции сигналов, нет проактивных апгрейд-подсказок.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-growth в ваше окружение.",
			visual: growthPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард читает продуктовый и аналитический контекст для data-informed стратегии роста.",
		},
		{
			title: "Стратегия",
			description: "Петли retention, реферральные механики и триггеры апгрейда - спроектированные как связанные системы.",
			visual: growthPageConfig.steps[2].visual,
		},
		{
			title: "Итерация",
			description: "Измерение импакта, уточнение стратегии, компаундный рост со временем.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 режима роста",
			description: "Retain, refer, expand. Каждый адресует свой рычаг роста с конкретными action items.",
		},
		{
			icon: "\u25C7",
			title: "6 психологических предупреждений",
			description: "Loss aversion для предотвращения оттока, social proof для реферралов, endowment для апгрейдов.",
		},
		{
			icon: "\u25C7",
			title: "Retention-first подход",
			description: "Чини отток в корне перед добавлением acquisition-тактик. Сначала ценность, потом рост.",
		},
		{
			icon: "\u25C7",
			title: "Дизайн реферральных механик",
			description: "Двусторонние incentive-структуры, вирусные петли и invite-flow - спроектированные для компаунда.",
		},
	],

	comparison: [
		{
			dimension: "Подход",
			them: "Acquisition-first, надежда на retention",
			forge: "Retention-first, потом компаунд через реферралы",
		},
		{
			dimension: "Реферралы",
			them: "Нет механизма или генерическая кнопка 'поделиться'",
			forge: "Спроектированные механики с двусторонними incentives",
		},
		{
			dimension: "Стратегия апсейла",
			them: "Жёсткий paywall при достижении лимитов",
			forge: "Signal-based апгрейд-подсказки в нужный момент",
		},
	],
	comparisonTarget: "Growth hacking плейбуки",

	integrations: [
		{
			module: "forge-product",
			description: "Продуктовый контекст определяет естественные триггеры расширения и апсейла",
			href: "/modules/product",
		},
		{
			module: "forge-analytics",
			description: "Сигналы оттока и funnel-метрики питают стратегию retention",
			href: "/modules/analytics",
		},
		{
			module: "forge-marketing",
			description: "Позиционирование информирует реферральный месседжинг и value props апгрейда",
			href: "/modules/marketing",
		},
	],

	seo: {
		title: "forge-growth - Расти умнее, а не быстрее | Forge DevKit",
		description: "Петли retention, реферральные механики, триггеры апгрейда. 6 психологических предупреждений. Retention-first подход.",
	},
};

export const growthPageConfigI18n: Record<string, ModulePageConfig> = {
	en: growthPageConfig,
	ru: growthPageConfigRu,
};
