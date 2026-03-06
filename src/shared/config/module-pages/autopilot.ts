import type { ModulePageConfig } from "./types";

export const autopilotPageConfig: ModulePageConfig = {
	slug: "autopilot",
	name: "forge-autopilot",
	tagline: "Parallel agents without merge hell",
	tier: "Bundle",
	tierPrice: "€149",

	problems: [
		{
			pain: "Agent Teams = merge conflict chaos",
			evidence:
				"\"I literally can't merge their branches.\" Multiple agents editing the same files without coordination.",
		},
		{
			pain: "No conflict detection before execution",
			evidence:
				"You discover file conflicts AFTER agents finish. Hours of work wasted on irreconcilable changes.",
		},
		{
			pain: "Autonomous agents with no strategy",
			evidence:
				"Agent Teams is infrastructure. Without a strategy layer, agents work fast but break things faster.",
		},
	],

	steps: [
		{
			title: "Triage",
			description:
				"Backlog analyst classifies features by complexity, risk, and design needs. File dependency mapping.",
		},
		{
			title: "Detect conflicts",
			description:
				"Conflict detector identifies shared files between features. Classifies as SAFE, RISKY, or BLOCKING.",
		},
		{
			title: "Plan waves",
			description:
				"Groups conflict-free features into parallel waves. BLOCKING conflicts force sequential execution.",
			visual: [
				{ prefix: "Wave 1:", text: " auth + payments (no overlap)", color: "text" },
				{ prefix: "Wave 2:", text: " profile (depends on auth)", color: "text" },
			],
		},
		{
			title: "Execute",
			description:
				"Teammates execute in isolated worktrees. Tech lead reviews. Auto-merge with conflict prevention.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Conflict-free wave planning",
			description:
				"Backlog\u2192conflict detection\u2192wave grouping\u2192parallel execution. No merge conflicts by design.",
		},
		{
			icon: "\u25C7",
			title: "3 autonomy modes",
			description:
				"Supervised (review each), semi-auto (review at checkpoints), full-auto (review at end).",
		},
		{
			icon: "\u25C7",
			title: "Isolated worktrees",
			description:
				"Each teammate works in a separate git worktree. No file interference. Clean merges.",
		},
		{
			icon: "\u25C7",
			title: "Cross-repo triage",
			description:
				"Features spanning multiple repos are detected and handled in triage phase.",
		},
		{
			icon: "\u25C7",
			title: "Batch reporting",
			description:
				"Summary report after each wave: decisions, conflicts resolved, files touched, test results.",
		},
	],

	comparison: [
		{
			dimension: "What it is",
			them: "Infrastructure for spawning agents",
			forge: "Strategy layer: triage \u2192 conflict detection \u2192 wave planning",
		},
		{
			dimension: "Conflict handling",
			them: "None \u2014 discover conflicts after",
			forge: "Pre-execution conflict detection and wave grouping",
		},
		{
			dimension: "Autonomy control",
			them: "All or nothing",
			forge: "3 modes: supervised, semi-auto, full-auto",
		},
	],
	comparisonTarget: "Raw Claude Agent Teams",

	diagram: {
		src: "/images/subagents-vs-agent-teams.avif",
		alt: "Subagents vs Agent Teams architecture comparison",
		caption: "forge-autopilot adds a strategy layer on top of Agent Teams: triage, conflict detection, and wave planning.",
		sourceUrl: "https://code.claude.com/docs/en/agent-teams",
		sourceLabel: "Claude Code docs",
	},

	integrations: [
		{
			module: "forge-core",
			description: "Architecture map powers conflict detection",
			href: "/modules/core",
		},
		{
			module: "forge-worktree",
			description: "Provisions isolated worktrees for each teammate",
			href: "/modules",
		},
		{
			module: "forge-tracker",
			description: "Syncs task status during batch execution",
			href: "/modules",
		},
	],

	seo: {
		title: "forge-autopilot \u2014 Parallel Agents Without Merge Hell | Forge DevKit",
		description:
			"Orchestrate Claude Agent Teams with conflict-free wave planning. Backlog triage, file conflict detection, isolated worktrees, 3 autonomy modes.",
	},
};
