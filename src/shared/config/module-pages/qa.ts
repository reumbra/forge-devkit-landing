import type { ModulePageConfig } from "./types";

export const qaPageConfig: ModulePageConfig = {
	slug: "qa",
	name: "forge-qa",
	tagline: "Tests that trace to requirements",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "AI writes tests that test nothing",
			evidence:
				"Unit tests are fake. Displays use mock data. Tests pass but don't verify actual behavior.",
		},
		{
			pain: "No traceability to requirements",
			evidence:
				"You can't tell which test covers which acceptance criterion. Gaps are invisible.",
		},
		{
			pain: "Test strategy is an afterthought",
			evidence:
				"AI generates random tests. No coverage plan, no prioritization, no framework consistency.",
		},
	],

	steps: [
		{
			title: "Setup",
			description:
				"Test auditor scans your project: framework, patterns, coverage tooling, maturity level.",
		},
		{
			title: "Generate",
			description:
				"From product artifacts or code analysis - unit, integration, component, E2E, and acceptance tests.",
			visual: [
				{ text: "/forge:qa test authentication", color: "secondary" },
			],
		},
		{
			title: "Trace",
			description:
				"4-level traceability: AC\u2192unit, UC\u2192E2E, UX\u2192component. Every test maps to a requirement.",
		},
		{
			title: "Judge",
			description:
				"LLM-as-Judge evaluates test quality against rubrics. Catches fake mocks and meaningless assertions.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4-level traceability",
			description:
				"AC\u2192unit tests, UC\u2192E2E tests, UX\u2192component tests, LLM-as-Judge for quality.",
		},
		{
			icon: "\u25C7",
			title: "8+ test frameworks",
			description:
				"Vitest, Jest, Playwright, Cypress, Testing Library, Supertest, and more. Auto-detected.",
		},
		{
			icon: "\u25C7",
			title: "LLM-as-Judge",
			description:
				"Rubric-based evaluation catches fake tests, meaningless mocks, and missing edge cases.",
		},
		{
			icon: "\u25C7",
			title: "Product artifact integration",
			description:
				"When forge-product artifacts exist, tests generate from requirements. Without them, code analysis.",
		},
		{
			icon: "\u25C7",
			title: "10 execution modes",
			description:
				"Unit, integration, component, E2E, acceptance, coverage, plan, generate, quality, upgrade.",
		},
	],

	comparison: [
		{
			dimension: "Test source",
			them: "AI guesses from code",
			forge: "Traces to acceptance criteria and use cases",
		},
		{
			dimension: "Quality check",
			them: "None - tests just need to pass",
			forge: "LLM-as-Judge evaluates against rubrics",
		},
		{
			dimension: "Coverage map",
			them: "Line coverage only",
			forge: "Requirement-level traceability matrix",
		},
	],
	comparisonTarget: "Virtuoso / TestSprite",

	integrations: [
		{
			module: "forge-core",
			description: "Architecture data for smart test coverage decisions",
			href: "/modules/core",
		},
		{
			module: "forge-product",
			description: "Product artifacts provide requirements for test generation",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-qa - Tests That Trace to Requirements | Forge DevKit",
		description:
			"Generate requirement-traced tests with 4-level traceability. LLM-as-Judge catches fake tests. 8+ frameworks, 10 execution modes.",
	},
};

const qaPageConfigRu: ModulePageConfig = {
	slug: "qa",
	name: "forge-qa",
	tagline: "Тесты с прослеживаемостью к требованиям",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "AI пишет тесты, которые ничего не тестируют",
			evidence:
				"Unit-тесты фейковые. Используют моковые данные. Тесты проходят, но не проверяют реальное поведение.",
		},
		{
			pain: "Нет связи с требованиями",
			evidence:
				"Невозможно определить, какой тест покрывает какой критерий приемки. Пробелы невидимы.",
		},
		{
			pain: "Тестовая стратегия - последняя мысль",
			evidence:
				"AI генерирует случайные тесты. Нет плана покрытия, нет приоритизации, нет консистентности фреймворка.",
		},
	],

	steps: [
		{
			title: "Настройка",
			description:
				"Тестовый аудитор сканирует проект: фреймворк, паттерны, инструменты покрытия, уровень зрелости.",
		},
		{
			title: "Генерация",
			description:
				"Из продуктовых артефактов или анализа кода - unit, integration, component, E2E и acceptance тесты.",
			visual: qaPageConfig.steps[1].visual,
		},
		{
			title: "Прослеживаемость",
			description:
				"4 уровня: AC\u2192unit, UC\u2192E2E, UX\u2192component. Каждый тест привязан к требованию.",
		},
		{
			title: "Оценка",
			description:
				"LLM-as-Judge оценивает качество тестов по рубрикам. Ловит фейковые моки и бессмысленные ассерты.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 уровня прослеживаемости",
			description:
				"AC\u2192unit-тесты, UC\u2192E2E-тесты, UX\u2192компонентные тесты, LLM-as-Judge для качества.",
		},
		{
			icon: "\u25C7",
			title: "8+ тестовых фреймворков",
			description:
				"Vitest, Jest, Playwright, Cypress, Testing Library, Supertest и другие. Автодетекция.",
		},
		{
			icon: "\u25C7",
			title: "LLM-as-Judge",
			description:
				"Оценка по рубрикам ловит фейковые тесты, бессмысленные моки и пропущенные крайние случаи.",
		},
		{
			icon: "\u25C7",
			title: "Интеграция с продуктовыми артефактами",
			description:
				"Если артефакты forge-product есть - тесты генерируются из требований. Без них - из анализа кода.",
		},
		{
			icon: "\u25C7",
			title: "10 режимов выполнения",
			description:
				"Unit, integration, component, E2E, acceptance, coverage, plan, generate, quality, upgrade.",
		},
	],

	comparison: [
		{
			dimension: "Источник тестов",
			them: "AI угадывает по коду",
			forge: "Прослеживаемость к критериям приемки и use cases",
		},
		{
			dimension: "Проверка качества",
			them: "Нет - тесты просто должны пройти",
			forge: "LLM-as-Judge оценивает по рубрикам",
		},
		{
			dimension: "Карта покрытия",
			them: "Только покрытие строк",
			forge: "Матрица прослеживаемости требований",
		},
	],
	comparisonTarget: "Virtuoso / TestSprite",

	integrations: [
		{
			module: "forge-core",
			description: "Данные архитектуры для умных решений по тестовому покрытию",
			href: "/modules/core",
		},
		{
			module: "forge-product",
			description: "Продуктовые артефакты дают требования для генерации тестов",
			href: "/modules/product",
		},
	],

	seo: {
		title: "forge-qa - Тесты с прослеживаемостью к требованиям | Forge DevKit",
		description:
			"Генерация тестов с 4-уровневой прослеживаемостью. LLM-as-Judge ловит фейковые тесты. 8+ фреймворков, 10 режимов выполнения.",
	},
};

export const qaPageConfigI18n: Record<string, ModulePageConfig> = {
	en: qaPageConfig,
	ru: qaPageConfigRu,
};
