import type { ComparisonPageConfig } from "./types";

export const claudeMdComparison: ComparisonPageConfig = {
	slug: "claude-md",
	competitor: "Manual CLAUDE.md",
	searchIntent: [
		"claude.md best practices",
		"how to write claude.md",
		"claude md template",
		"claude.md generator",
	],
	headline: "Forge DevKit vs Manual CLAUDE.md",
	subheadline:
		"Writing CLAUDE.md by hand is a start. Forge generates it from your actual architecture.",
	rows: [
		{
			dimension: "Creation",
			them: "Manual writing \u2014 whatever you remember",
			forge: "Auto-generated from 7-gate architecture audit",
		},
		{
			dimension: "Coverage",
			them: "What you think to include",
			forge: "50+ quality patterns, 15 rationalization detectors",
		},
		{
			dimension: "Test connection",
			them: "Not connected to tests",
			forge: "forge-qa generates tests from same requirements",
		},
		{
			dimension: "Maintenance",
			them: "Manual updates when codebase changes",
			forge: "Upgrade command regenerates from current state",
		},
		{
			dimension: "Pipeline",
			them: "Just rules in one file",
			forge: "Full ecosystem: rules + product + tests + tasks + parallel execution",
		},
	],
	verdict:
		"A hand-written CLAUDE.md is better than nothing. Forge DevKit generates a comprehensive one from your architecture \u2014 and connects it to product specs, tests, and task management.",
	ctaText: "Try Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs Manual CLAUDE.md \u2014 Auto-Generated AI Guardrails",
		description:
			"Stop writing CLAUDE.md by hand. Forge generates it from a 7-gate architecture audit with 50+ quality patterns and connects to test generation.",
	},
};
