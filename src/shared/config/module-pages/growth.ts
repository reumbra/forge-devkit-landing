import type { ModulePageConfig } from "./types";

export const growthPageConfig: ModulePageConfig = {
	slug: "growth",
	name: "forge-growth",
	tagline: "Retention loops before acquisition tactics",
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
			description: "Measure retention lift, referral conversion, and expansion revenue. Refine what works, cut what doesn't.",
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
			description: "Two-sided incentives (giver + receiver both benefit), invite flows with tracking, and viral loops - each with concrete implementation specs.",
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

	outputExample: {
		title: "forge:growth - Retention Loop Spec",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Retention Loop - taskflow-app</span>

<span class="t-white t-bold">Loop:</span> <span class="t-cyan">Weekly Invoice Digest</span>
<span class="t-muted">Trigger:</span>     <span class="t-white">Monday 9am, user has >= 1 unpaid invoice</span>
<span class="t-muted">Channel:</span>     <span class="t-white">Email + in-app badge</span>
<span class="t-muted">Content:</span>     <span class="t-white">Outstanding amount + 1-click reminder to client</span>
<span class="t-muted">Success:</span>     <span class="t-green">User sends at least 1 reminder per week</span>

<span class="t-white t-bold">Compound Effect:</span>
  <span class="t-muted">Week 1:</span> <span class="t-white">User discovers reminder feature</span>
  <span class="t-muted">Week 4:</span> <span class="t-white">Habit formed, checks dashboard weekly</span>
  <span class="t-muted">Week 8:</span> <span class="t-green">70% of users with loop active still retained</span>

<span class="t-yellow t-bold">Bias alert:</span> <span class="t-yellow">Don't optimize for email opens - measure actual reminder sends</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Product Lead", benefit: "Design retention loops and referral mechanics as systems, not afterthought hacks." },
			{ role: "Founder", benefit: "Fix churn at the source before spending on acquisition - retention-first growth." },
			{ role: "Growth Marketer", benefit: "Get concrete referral mechanics and upgrade trigger specs with psychology-informed design." },
		],
	},

	seo: {
		title: "forge-growth - AI Growth Strategy Plugin | Forge DevKit",
		description: "Design retention loops, referral mechanics, and upgrade triggers with AI. Retention-first approach with 6 bias detectors. Claude Code plugin for sustainable growth.",
	},
};

const growthPageConfigRu: ModulePageConfig = {
	slug: "growth",
	name: "forge-growth",
	tagline: "Петли удержания важнее тактик привлечения",
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
			description: "Измерение роста retention, конверсии реферралов и expansion-дохода. Масштабируйте то, что работает, отсекайте то, что нет.",
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
			description: "Двусторонние incentives (дающий + получающий оба выигрывают), invite-flow с трекингом и вирусные петли - каждый с конкретными спеками реализации.",
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

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Продакт-лид", benefit: "Проектируйте петли retention и реферральные механики как системы, не как запоздалые хаки." },
			{ role: "Основатель", benefit: "Чините отток в корне до трат на привлечение - рост через retention-first." },
			{ role: "Growth-маркетолог", benefit: "Получите конкретные реферральные механики и триггеры апгрейда с психологическим обоснованием." },
		],
	},

	seo: {
		title: "forge-growth - AI-стратегия роста продукта | Forge DevKit",
		description: "Проектируйте retention-петли, реферральные механики и триггеры апгрейда с AI. Retention-first подход, 6 детекторов искажений. Плагин Claude Code для роста.",
	},
};

export const growthPageConfigI18n: Record<string, ModulePageConfig> = {
	en: growthPageConfig,
	ru: growthPageConfigRu,
};
