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
			description: "Every test produces a structured doc: hypothesis, result, confidence level, and next action. Win or lose, it's searchable.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 experiment modes",
			description: "Hypothesis (structured if/then/because), design (sample size + duration calc), analyze (significance test + documented learning).",
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
			them: "Change it, measure everything, find something significant",
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

	outputExample: {
		title: "forge:ab design - Experiment Spec",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Experiment: Pricing Page CTA Color</span>

<span class="t-white t-bold">Hypothesis:</span> <span class="t-white">Changing CTA from blue to green increases clicks by 10%</span>
<span class="t-white t-bold">Metric:</span>     <span class="t-cyan">CTA click-through rate on /pricing</span>
<span class="t-white t-bold">Guardrail:</span>  <span class="t-muted">Bounce rate must not increase by > 5%</span>

<span class="t-white t-bold">Design:</span>
  <span class="t-muted">Control:</span>  <span class="t-white">Blue CTA (#2563EB)</span>    <span class="t-muted">50% traffic</span>
  <span class="t-muted">Variant:</span>  <span class="t-white">Green CTA (#16A34A)</span>   <span class="t-muted">50% traffic</span>
  <span class="t-muted">Sample:</span>   <span class="t-white">3,200 visitors</span>        <span class="t-muted">(MDE 10%, power 80%)</span>
  <span class="t-muted">Duration:</span> <span class="t-white">~14 days</span>              <span class="t-muted">at current traffic</span>

<span class="t-yellow t-bold">Pre-commit:</span> <span class="t-yellow">Decision logged before results - no peeking</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Product Manager", benefit: "Run statistically rigorous experiments with pre-committed hypotheses and sample sizes." },
			{ role: "Growth Lead", benefit: "Document every experiment result - wins and losses compound into organizational knowledge." },
			{ role: "Data-Driven Developer", benefit: "Get concrete experiment specs with sample size calculations instead of gut-feel testing." },
		],
	},

	seo: {
		title: "forge-ab - AI A/B Test Design Plugin | Forge DevKit",
		description: "Design rigorous A/B tests with pre-committed hypotheses, sample size calculations, and structured learnings. Claude Code plugin with 4 experiment bias detectors.",
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
			description: "Каждый тест создаёт структурированный документ: гипотеза, результат, уровень уверенности и следующее действие. Победа или поражение - всё доступно для поиска.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 режима экспериментов",
			description: "Hypothesis (структурированное если/тогда/потому что), design (расчёт выборки + длительности), analyze (тест значимости + документированное знание).",
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
			them: "Менять, измерять всё подряд, найти что-то значимое",
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

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Продакт-менеджер", benefit: "Запускайте статистически строгие эксперименты с предфиксированными гипотезами и выборками." },
			{ role: "Growth-лид", benefit: "Документируйте каждый результат эксперимента - победы и поражения компаундятся в организационные знания." },
			{ role: "Data-driven разработчик", benefit: "Получите конкретные спеки экспериментов с расчетом выборки вместо тестирования по наитию." },
		],
	},

	seo: {
		title: "forge-ab - AI-дизайн A/B тестов | Forge DevKit",
		description: "Проектируйте A/B тесты с предфиксированными гипотезами, расчетом выборки и структурированными выводами. Плагин Claude Code с 4 детекторами искажений в экспериментах.",
	},
};

export const abPageConfigI18n: Record<string, ModulePageConfig> = {
	en: abPageConfig,
	ru: abPageConfigRu,
};
