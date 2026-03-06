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
	headline: "Six modules. One pipeline.",
	closingLine:
		"Use all six for a full pipeline. Use separately — each module works standalone.",
	modules: [
		{
			id: "forge-core",
			name: "forge-core",
			tagline: "Architecture audit & AI guardrails",
			isHero: true,
			badge: "Start here",
			stats: [
				"7-gate wizard",
				"50+ quality patterns",
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
		{
			id: "forge-autopilot",
			name: "forge-autopilot",
			tagline: "Parallel agents without merge hell",
			isHero: false,
			stats: ["3 autonomy modes", "0 merge conflicts"],
			features: [
				"Backlog → conflict detection → wave execution",
				"Autonomous teammates in isolated worktrees",
				"Auto-merge with conflict prevention",
				"3 autonomy modes: supervised, semi-auto, full-auto",
			],
		},
		{
			id: "forge-worktree",
			name: "forge-worktree",
			tagline: "Git worktree lifecycle manager",
			isHero: false,
			stats: ["3 templates", "0 port conflicts"],
			features: [
				"3 templates: Docker backend, Frontend, Generic",
				"Docker port isolation per worktree",
				"Auto-cleanup on branch merge",
			],
		},
	],
} as const satisfies ModulesConfig;
