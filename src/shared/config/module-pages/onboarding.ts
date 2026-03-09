import type { ModulePageConfig } from "./types";

export const onboardingPageConfig: ModulePageConfig = {
	slug: "onboarding",
	name: "forge-onboarding",
	tagline: "From signup to aha moment",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Users sign up and never come back",
			evidence: "Average SaaS activation rate is 36% - top products hit 65%+. The gap is almost always onboarding design, not product quality.",
		},
		{
			pain: "Empty states that kill momentum",
			evidence: "User sees a blank dashboard. No guidance, no sample data, no clear first action. They close the tab.",
		},
		{
			pain: "Onboarding designed after launch",
			evidence: "Activation flow is an afterthought. Engineers build features first, onboarding never catches up.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-onboarding to your environment.",
			visual: [{ text: "forge install forge-onboarding", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard reads product context and identifies your activation metrics.",
		},
		{
			title: "Design",
			description: "Generate activation flows, empty states strategy, and first-run experience specs.",
			visual: [
				{ prefix: "Mode:", text: " design / audit", color: "text" },
			],
		},
		{
			title: "Verify",
			description: "Audit existing onboarding against generated specs. Identify drop-off points.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Activation flow design",
			description: "Maps the shortest path from signup to value. For each step: required fields, skip conditions, progress indicators, and fallback paths.",
		},
		{
			icon: "\u25C7",
			title: "Empty states strategy",
			description: "Every blank screen gets a purpose: sample data, guided actions, or contextual education.",
		},
		{
			icon: "\u25C7",
			title: "5 psychology biases",
			description: "Endowment effect, commitment escalation, and more - applied to onboarding design decisions.",
		},
		{
			icon: "\u25C7",
			title: "Onboarding audit",
			description: "Compares your live onboarding against generated specs step by step. Produces a gap report: what's missing, what's confusing, what's unnecessary.",
		},
	],

	comparison: [
		{
			dimension: "Design timing",
			them: "After launch, as a patch",
			forge: "Before coding, as part of product spec",
		},
		{
			dimension: "Empty states",
			them: "Blank screens or generic placeholders",
			forge: "Purposeful: sample data, guided actions, education",
		},
		{
			dimension: "Verification",
			them: "No way to check if it works",
			forge: "Audit mode identifies drop-off points",
		},
	],
	comparisonTarget: "Trial-and-error onboarding",

	integrations: [
		{
			module: "forge-product",
			description: "Reads user flows to identify the aha moment and activation path",
			href: "/modules/product",
		},
		{
			module: "forge-analytics",
			description: "Activation events feed into the measurement plan",
			href: "/modules/analytics",
		},
	],

	outputExample: {
		title: "forge:onboarding - Activation Flow",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Activation Flow - taskflow-app</span>

<span class="t-white t-bold">Step</span>  <span class="t-white t-bold">Screen</span>              <span class="t-white t-bold">Goal</span>                      <span class="t-white t-bold">Drop-off Risk</span>
<span class="t-cyan">1</span>     <span class="t-white">Welcome</span>              <span class="t-muted">Set role (freelancer/team)</span>  <span class="t-green">Low</span>
<span class="t-cyan">2</span>     <span class="t-white">Connect bank</span>         <span class="t-muted">Link Stripe for payouts</span>    <span class="t-red t-bold">High</span>
<span class="t-cyan">3</span>     <span class="t-white">First invoice</span>        <span class="t-muted">Create + send in < 60s</span>     <span class="t-yellow">Medium</span>
<span class="t-cyan">4</span>     <span class="t-white">Aha moment</span>           <span class="t-muted">Client pays the invoice</span>    <span class="t-green">Low</span>

<span class="t-muted">Time to value:</span> <span class="t-white">~3 min</span> <span class="t-muted">|</span> <span class="t-muted">Aha moment:</span> <span class="t-green">First paid invoice received</span>
<span class="t-yellow t-bold">Risk:</span> <span class="t-yellow">Step 2 requires bank details - offer skip + manual payout option</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Product Manager", benefit: "Design activation flows before launch - not as a post-launch patch." },
			{ role: "UX Designer", benefit: "Get structured empty states strategy and first-run experience specs with drop-off analysis." },
			{ role: "Growth Lead", benefit: "Map the shortest path to your aha moment with psychology-informed design decisions." },
		],
	},

	seo: {
		title: "forge-onboarding - Design Activation Flows | Forge DevKit",
		description: "Design user onboarding with AI - activation flows, empty states, first-run UX. Audit drop-off points with 5 bias detectors. Claude Code plugin for user activation.",
	},
};

const onboardingPageConfigRu: ModulePageConfig = {
	slug: "onboarding",
	name: "forge-onboarding",
	tagline: "От регистрации до aha-момента",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Пользователи регистрируются и не возвращаются",
			evidence: "Средний показатель активации SaaS - 36%, топовые продукты достигают 65%+. Разрыв почти всегда в дизайне онбординга, а не в качестве продукта.",
		},
		{
			pain: "Пустые экраны убивают импульс",
			evidence: "Пользователь видит пустой дашборд. Нет подсказок, нет примеров, нет ясного первого действия. Он закрывает вкладку.",
		},
		{
			pain: "Онбординг проектируется после запуска",
			evidence: "Активационный flow - запоздалая мысль. Инженеры строят фичи, онбординг никогда не догоняет.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-onboarding в ваше окружение.",
			visual: onboardingPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард читает продуктовый контекст и определяет метрики активации.",
		},
		{
			title: "Дизайн",
			description: "Генерация activation flow, стратегии пустых экранов и спецификаций first-run experience.",
			visual: onboardingPageConfig.steps[2].visual,
		},
		{
			title: "Проверка",
			description: "Аудит существующего онбординга по сгенерированным спекам. Выявление точек отвала.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Дизайн activation flow",
			description: "Маппит кратчайший путь от регистрации до ценности. Для каждого шага: обязательные поля, условия пропуска, индикаторы прогресса и запасные пути.",
		},
		{
			icon: "\u25C7",
			title: "Стратегия пустых экранов",
			description: "Каждый пустой экран получает цель: примеры данных, направляющие действия или контекстное обучение.",
		},
		{
			icon: "\u25C7",
			title: "5 психологических предупреждений",
			description: "Endowment effect, commitment escalation и другие - применены к решениям дизайна онбординга.",
		},
		{
			icon: "\u25C7",
			title: "Аудит онбординга",
			description: "Сравнивает ваш живой онбординг со сгенерированными спеками пошагово. Создаёт gap-отчёт: что отсутствует, что запутывает, что лишнее.",
		},
	],

	comparison: [
		{
			dimension: "Тайминг дизайна",
			them: "После запуска, как заплатка",
			forge: "До кодирования, как часть продуктовой спеки",
		},
		{
			dimension: "Пустые экраны",
			them: "Пустые экраны или генерические заглушки",
			forge: "Целевые: примеры данных, направляющие действия, обучение",
		},
		{
			dimension: "Проверка",
			them: "Нет способа проверить, работает ли",
			forge: "Режим аудита выявляет точки отвала",
		},
	],
	comparisonTarget: "Онбординг методом проб и ошибок",

	integrations: [
		{
			module: "forge-product",
			description: "Читает user flow для определения aha-момента и пути активации",
			href: "/modules/product",
		},
		{
			module: "forge-analytics",
			description: "События активации попадают в план измерений",
			href: "/modules/analytics",
		},
	],

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Продакт-менеджер", benefit: "Проектируйте activation flow до запуска - не как заплатку после." },
			{ role: "UX-дизайнер", benefit: "Получите стратегию пустых экранов и спеки first-run experience с анализом отвала." },
			{ role: "Growth-лид", benefit: "Проложите кратчайший путь к aha-моменту с психологически обоснованным дизайном." },
		],
	},

	seo: {
		title: "forge-onboarding - Дизайн активации пользователей | Forge DevKit",
		description: "Проектируйте онбординг с AI - activation flow, пустые экраны, first-run UX. Аудит точек оттока с 5 детекторами искажений. Плагин Claude Code для активации.",
	},
};

export const onboardingPageConfigI18n: Record<string, ModulePageConfig> = {
	en: onboardingPageConfig,
	ru: onboardingPageConfigRu,
};
