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
				"From product artifacts or code analysis — unit, integration, component, E2E, and acceptance tests.",
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
			them: "None \u2014 tests just need to pass",
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
		title: "forge-qa \u2014 Tests That Trace to Requirements | Forge DevKit",
		description:
			"Generate requirement-traced tests with 4-level traceability. LLM-as-Judge catches fake tests. 8+ frameworks, 10 execution modes.",
	},
};
