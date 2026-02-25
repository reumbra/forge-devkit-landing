export interface ModuleStat {
	label: string;
	value: string;
}

export interface Module {
	id: string;
	name: string;
	tagline: string;
	isHero: boolean;
	badge?: string;
	stats: string[];
	features: string[];
}

export interface ModulesConfig {
	sectionLabel: string;
	headline: string;
	closingLine: string;
	modules: Module[];
}

export const modules = {
	sectionLabel: "MODULES",
	headline: "Four modules. One pipeline.",
	closingLine:
		"Use together for a full pipeline. Use separately — each module works standalone.",
	modules: [
		{
			id: "forge-core",
			name: "forge-core",
			tagline: "Architecture audit & AI guardrails",
			isHero: true,
			badge: "Start here",
			stats: [
				"8-gate wizard",
				"24 quality patterns",
				"15 rationalization detectors",
				"3 template families",
			],
			features: [
				"Architecture audit",
				"Quality patterns",
				"Dev-skills generation",
				"Pipeline phases",
			],
		},
		{
			id: "forge-product",
			name: "forge-product",
			tagline: "Feature design in business language",
			isHero: false,
			stats: [
				"8 product archetypes",
				"User flows",
				"Stories with AC",
				"50 UX criteria",
			],
			features: [
				"Product archetypes",
				"User flow generation",
				"User stories with acceptance criteria",
				"UX criteria library",
			],
		},
		{
			id: "forge-qa",
			name: "forge-qa",
			tagline: "Tests from requirements",
			isHero: false,
			stats: [
				"8+ test frameworks",
				"AC to unit tests",
				"UC to E2E",
				"Traceability matrix",
			],
			features: [
				"Multi-framework test generation",
				"Acceptance criteria to unit tests",
				"Use cases to E2E tests",
				"Requirement traceability matrix",
			],
		},
		{
			id: "forge-tracker",
			name: "forge-tracker",
			tagline: "Bridge backlog and development",
			isHero: false,
			stats: [
				"5 integrations",
			],
			features: [
				"GitHub integration",
				"ClickUp integration",
				"Linear integration",
				"Notion integration",
				"Jira integration",
			],
		},
	],
} as const satisfies ModulesConfig;
