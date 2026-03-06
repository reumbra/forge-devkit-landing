import type { ComparisonPageConfig } from "./types";

export const devinComparison: ComparisonPageConfig = {
	slug: "devin",
	competitor: "Devin",
	searchIntent: [
		"devin vs forge",
		"devin alternative",
		"devin ai pricing",
		"devin autonomous agent",
	],
	headline: "Forge DevKit vs Devin",
	subheadline:
		"Devin is an autonomous AI developer. Forge is infrastructure for YOUR AI agent.",
	rows: [
		{
			dimension: "What it is",
			them: "Autonomous AI developer in its own environment",
			forge: "Architecture-aware pipeline for your existing AI agent",
		},
		{
			dimension: "Pricing",
			them: "$20/mo + ACU charges (\u2265$240/yr)",
			forge: "\u20AC29\u2013\u20AC149 one-time, renewal optional",
		},
		{
			dimension: "Architecture awareness",
			them: "General purpose \u2014 learns from docs",
			forge: "Project-specific from 7-gate audit (50+ patterns)",
		},
		{
			dimension: "Multi-agent",
			them: "Single agent",
			forge: "Conflict-free parallel waves via forge-autopilot",
		},
		{
			dimension: "Code ownership",
			them: "Devin's sandboxed environment",
			forge: "Your repo, your tools, your CI/CD",
		},
	],
	verdict:
		"Devin replaces your developer. Forge augments your development workflow. If you want to keep control of your codebase and use your preferred AI agent, Forge is the right choice.",
	ctaText: "Try Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs Devin \u2014 AI Infrastructure vs Autonomous Agent",
		description:
			"Compare Forge DevKit to Devin. One-time \u20AC29-149 vs $20/mo subscription. Your repo and tools vs sandboxed environment.",
	},
};
