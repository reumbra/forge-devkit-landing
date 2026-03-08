import type { ModulePageConfig } from "./types";

export const abPageConfig: ModulePageConfig = {
	slug: "ab",
	name: "forge-ab",
	tagline: "Test with rigor, not hunches",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Tests launched without statistical rigor",
			evidence: "Team runs A/B test for 3 days, declares a winner. Sample size: 47 visitors. That's noise, not signal.",
		},
		{
			pain: "No pre-committed hypothesis",
			evidence: "Change button color, measure everything, find something significant. Classic p-hacking disguised as experimentation.",
		},
		{
			pain: "Test results don't get documented",
			evidence: "Nobody remembers what you tested last quarter. Same experiments get repeated. Learnings evaporate.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-ab to your environment.",
			visual: [{ text: "forge install forge-ab", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard reads analytics context and establishes experimentation principles.",
		},
		{
			title: "Experiment",
			description: "Structured hypothesis, pre-committed sample sizes, isolated variables, documented results.",
			visual: [
				{ prefix: "Mode:", text: " hypothesis / design / analyze", color: "text" },
			],
		},
		{
			title: "Learn",
			description: "Every test produces a documented learning - win or lose. Knowledge compounds across experiments.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 experiment modes",
			description: "Hypothesis, design, analyze. Full lifecycle from idea to statistically valid conclusion.",
		},
		{
			icon: "\u25C7",
			title: "Sample size pre-commitment",
			description: "Calculate required sample size before launch. No early stopping, no p-hacking.",
		},
		{
			icon: "\u25C7",
			title: "4 psychology biases",
			description: "Anchoring to first results, confirmation bias in analysis, novelty effect - surfaced as experiment warnings.",
		},
		{
			icon: "\u25C7",
			title: "Documented learnings",
			description: "Every experiment produces structured documentation. Win or lose, knowledge compounds.",
		},
	],

	comparison: [
		{
			dimension: "Statistical rigor",
			them: "Run for a week, pick the winner",
			forge: "Pre-committed sample size, significance threshold",
		},
		{
			dimension: "Hypothesis",
			them: "Change stuff, see what happens",
			forge: "Structured: If [change] then [metric] because [reason]",
		},
		{
			dimension: "Knowledge retention",
			them: "Results in a Slack thread, then forgotten",
			forge: "Documented learnings that compound across experiments",
		},
	],
	comparisonTarget: "Ad-hoc A/B testing",

	integrations: [
		{
			module: "forge-analytics",
			description: "Experiment events integrate with the analytics schema and measurement plan",
			href: "/modules/analytics",
		},
		{
			module: "forge-product",
			description: "Product context helps prioritize high-impact pages for testing",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-ab - Test With Rigor, Not Hunches | Forge DevKit",
		description: "Structured A/B testing: pre-committed hypotheses, sample sizes, and documented learnings. 4 psychology biases at experiment decisions. Knowledge compounds.",
	},
};

const abPageConfigRu: ModulePageConfig = {
	slug: "ab",
	name: "forge-ab",
	tagline: "Тестируй с точностью, а не по наитию",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Тесты запускаются без статистической строгости",
			evidence: "Команда запускает A/B-тест на 3 дня, объявляет победителя. Размер выборки: 47 посетителей. Это шум, не сигнал.",
		},
		{
			pain: "Нет предварительно зафиксированной гипотезы",
			evidence: "Меняют цвет кнопки, измеряют всё, находят что-то значимое. Классический p-hacking под видом эксперимента.",
		},
		{
			pain: "Результаты тестов не документируются",
			evidence: "Никто не помнит, что тестировали в прошлом квартале. Одни и те же эксперименты повторяются. Знания испаряются.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-ab в ваше окружение.",
			visual: abPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард читает аналитический контекст и устанавливает принципы экспериментирования.",
		},
		{
			title: "Эксперимент",
			description: "Структурированная гипотеза, предварительно зафиксированные выборки, изолированные переменные, документированные результаты.",
			visual: abPageConfig.steps[2].visual,
		},
		{
			title: "Обучение",
			description: "Каждый тест создаёт документированное знание - победа или поражение. Знания компаундятся между экспериментами.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 режима экспериментов",
			description: "Hypothesis, design, analyze. Полный lifecycle от идеи до статистически валидного заключения.",
		},
		{
			icon: "\u25C7",
			title: "Предфиксация размера выборки",
			description: "Расчёт необходимого размера выборки до запуска. Без ранней остановки, без p-hacking.",
		},
		{
			icon: "\u25C7",
			title: "4 психологических предупреждения",
			description: "Привязка к первым результатам, confirmation bias в анализе, novelty effect - предупреждения при экспериментах.",
		},
		{
			icon: "\u25C7",
			title: "Документированные знания",
			description: "Каждый эксперимент создаёт структурированную документацию. Победа или поражение - знания компаундятся.",
		},
	],

	comparison: [
		{
			dimension: "Статистическая строгость",
			them: "Запустить на неделю, выбрать победителя",
			forge: "Предфиксированный размер выборки, порог значимости",
		},
		{
			dimension: "Гипотеза",
			them: "Менять что-то, смотреть что будет",
			forge: "Структурированная: Если [изменение] то [метрика] потому что [причина]",
		},
		{
			dimension: "Сохранение знаний",
			them: "Результаты в Slack-треде, потом забыты",
			forge: "Документированные знания, компаундящиеся между экспериментами",
		},
	],
	comparisonTarget: "Ad-hoc A/B тестирование",

	integrations: [
		{
			module: "forge-analytics",
			description: "События экспериментов интегрируются с аналитической схемой и планом измерений",
			href: "/modules/analytics",
		},
		{
			module: "forge-product",
			description: "Продуктовый контекст помогает приоритизировать high-impact страницы для тестирования",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-ab - Тестируй с точностью, а не по наитию | Forge DevKit",
		description: "Структурированное A/B тестирование: предфиксированные гипотезы, выборки и документированные знания. 4 психологических предупреждения.",
	},
};

export const abPageConfigI18n: Record<string, ModulePageConfig> = {
	en: abPageConfig,
	ru: abPageConfigRu,
};
