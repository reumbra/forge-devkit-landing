export interface EntrepreneurCard {
	id: string;
	label: string;
	painQuote: string;
	solutionHeadline: string;
	solutionDescription: string;
	miniProof?: string;
}

export interface EntrepreneursConfig {
	sectionLabel: string;
	headline: string;
	description: string;
	cards: EntrepreneurCard[];
	cta: {
		label: string;
		href: string;
	};
}

export const entrepreneurs = {
	sectionLabel: "NOT A DEVELOPER?",
	headline: "MVP your future team won't hate",
	description:
		"Forge guides AI to build production-grade code from your business idea. No dev skills required for the design phase.",
	cards: [
		{
			id: "feature-design",
			label: "FEATURE DESIGN",
			painQuote: "Have an idea but no team.",
			solutionHeadline: "Describe features in business language.",
			solutionDescription:
				"Forge creates user flows, stories, acceptance criteria. AI builds from that spec with architecture guardrails.",
			miniProof:
				'$ forge design "subscription checkout"\n\n\u2192 User flow generated (5 steps)\n\u2192 4 user stories with AC\n\u2192 12 UX criteria applied\n\u2192 Ready for implementation',
		},
		{
			id: "transparent-pipeline",
			label: "TRANSPARENT PIPELINE",
			painQuote: "AI changes files but I don't know what it did.",
			solutionHeadline:
				"See every phase: design \u2192 build \u2192 verify.",
			solutionDescription:
				"Green/red test results without reading code. Every piece traces back to a requirement you wrote.",
			miniProof:
				"Phase 1: contracts \u2705\nPhase 2: implement \u2705\nPhase 3: verify (12/12 tests pass) \u2705",
		},
		{
			id: "handoff-ready",
			label: "HANDOFF-READY",
			painQuote:
				"When I hire devs, will they say throw it away and rewrite?",
			solutionHeadline: "Production-grade code from day one.",
			solutionDescription:
				"Clean architecture, naming conventions, quality patterns, generated tests. Forge artifacts survive removal \u2014 your code, rules, and tests stay yours.",
			miniProof:
				"No team yet. But the codebase is ready for one.",
		},
	],
	cta: {
		label: "Design your first feature \u2192",
		href: "#pricing",
	},
} as const satisfies EntrepreneursConfig;
