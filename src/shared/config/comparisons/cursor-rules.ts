import type { ComparisonPageConfig } from "./types";

export const cursorRulesComparison: ComparisonPageConfig = {
	slug: "cursor-rules",
	competitor: "Cursor Rules",
	searchIntent: [
		"cursor rules vs forge",
		"better than .cursorrules",
		"cursor rules alternative",
		"cursor rules generator",
	],
	headline: "Forge DevKit vs Cursor Rules",
	subheadline:
		"Cursor Rules give your AI a static cheat sheet. Forge gives it a full architecture audit.",
	rows: [
		{
			dimension: "Rule creation",
			them: "Manual or template generator",
			forge: "Auto-generated from 7-gate architecture audit",
		},
		{
			dimension: "Architecture awareness",
			them: "None \u2014 you specify stack manually",
			forge: "Detects stack, layers, patterns (DDD, CQRS, Clean Architecture)",
		},
		{
			dimension: "Scope",
			them: "Single rules file",
			forge: "Full pipeline: rules + product specs + tests + task management",
		},
		{
			dimension: "Updates",
			them: "Manual maintenance when codebase changes",
			forge: "Upgrade command regenerates from current architecture",
		},
		{
			dimension: "Platform",
			them: "Cursor only",
			forge: "Claude Code, Cursor, Windsurf, any AI agent",
		},
	],
	verdict:
		"Cursor Rules are a good start for simple projects. Forge DevKit is for teams that need architecture awareness, test traceability, and a full development pipeline \u2014 across any AI platform.",
	ctaText: "Try Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs Cursor Rules \u2014 Architecture-Aware AI Pipeline",
		description:
			"Compare Forge DevKit to Cursor Rules. Auto-generated from architecture audit vs manual templates. Full pipeline vs single rules file.",
	},
};
