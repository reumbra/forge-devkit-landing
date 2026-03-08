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
			evidence: "Average SaaS activation rate is 36%. Most users never reach the moment they understand your product's value.",
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
			description: "Maps the shortest path from signup to value. Removes friction at every step.",
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
			description: "Review existing activation flow against specs. Identify and fix drop-off points.",
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

	seo: {
		title: "forge-onboarding - From Signup to Aha Moment | Forge DevKit",
		description: "Design activation flows, empty states, and first-run experiences. 5 psychology biases at design decisions. Audit existing onboarding for drop-off points.",
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
			evidence: "Средний показатель активации SaaS - 36%. Большинство пользователей не доходят до момента, когда понимают ценность продукта.",
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
			description: "Маппит кратчайший путь от регистрации до ценности. Убирает трение на каждом шаге.",
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
			description: "Ревью существующего activation flow по спекам. Выявление и исправление точек отвала.",
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

	seo: {
		title: "forge-onboarding - От регистрации до aha-момента | Forge DevKit",
		description: "Дизайн activation flow, пустых экранов и first-run experience. 5 психологических предупреждений. Аудит существующего онбординга.",
	},
};

export const onboardingPageConfigI18n: Record<string, ModulePageConfig> = {
	en: onboardingPageConfig,
	ru: onboardingPageConfigRu,
};
