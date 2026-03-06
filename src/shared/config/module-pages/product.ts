import type { ModulePageConfig } from "./types";

export const productPageConfig: ModulePageConfig = {
	slug: "product",
	name: "forge-product",
	tagline: "Business language \u2192 AI-consumable specs",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "PRDs that AI can't parse",
			evidence:
				"Product docs in Notion/Figma/Miro are designed for humans. AI agents can't extract actionable requirements.",
		},
		{
			pain: "Features built without acceptance criteria",
			evidence:
				"AI jumps straight to code. No user flows, no edge cases, no definition of done.",
		},
		{
			pain: "Specs that don't match architecture",
			evidence:
				"Product specs reference components that don't exist or ignore architectural boundaries.",
		},
	],

	steps: [
		{
			title: "Setup",
			description:
				"Product auditor detects your product type: B2C, B2B, marketplace, internal tool.",
		},
		{
			title: "Design",
			description:
				"Describe a feature in business language. forge-product generates user flows, stories, and UX criteria.",
			visual: [
				{ text: "/forge:product design 'Add Stripe payments'", color: "secondary" },
			],
		},
		{
			title: "Generate",
			description:
				"Produces AI-consumable artifacts: user stories with AC, use cases, UX criteria matrix.",
		},
		{
			title: "Integrate",
			description:
				"forge-qa uses these artifacts to generate requirement-traced tests. forge-core references them in guardrails.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "9 product archetypes",
			description:
				"B2C app, B2B SaaS, marketplace, internal tool, API service, and more. Auto-detected.",
		},
		{
			icon: "\u25C7",
			title: "9 methodology frameworks",
			description:
				"Jobs to Be Done, Impact Mapping, Story Mapping, Event Storming, and more.",
		},
		{
			icon: "\u25C7",
			title: "User flows with edge cases",
			description:
				"Happy paths, error states, and boundary conditions — all generated from feature description.",
		},
		{
			icon: "\u25C7",
			title: "AI Enhancement Mixin",
			description:
				"Augments any product archetype with AI-specific considerations: prompt design, model selection, fallbacks.",
		},
	],

	comparison: [
		{
			dimension: "Input",
			them: "Visual boards, manual PRDs",
			forge: "Plain text feature description",
		},
		{
			dimension: "Output",
			them: "Human-readable docs",
			forge: "AI-consumable artifacts with AC",
		},
		{
			dimension: "Test connection",
			them: "Manual handoff",
			forge: "Direct pipeline to forge-qa",
		},
	],
	comparisonTarget: "Figma/Miro PRD tools",

	integrations: [
		{
			module: "forge-core",
			description: "Architecture data informs product constraints",
			href: "/modules/core",
		},
		{
			module: "forge-qa",
			description: "Test generation traces directly to product artifacts",
			href: "/modules/qa",
		},
	],

	seo: {
		title: "forge-product \u2014 Business Specs AI Can Actually Consume | Forge DevKit",
		description:
			"Turn feature descriptions into AI-consumable artifacts: user stories with AC, use cases, UX criteria. 9 product archetypes, 9 methodology frameworks.",
	},
};
