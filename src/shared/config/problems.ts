export interface PainCard {
	quote: string;
	painRef: string;
}

export interface ProblemsConfig {
	sectionLabel: string;
	headline: string;
	transitionLine: string;
	cards: PainCard[];
}

export const problems = {
	sectionLabel: "THE PROBLEM",
	headline: "AI writes code fast. You fix it faster.",
	transitionLine:
		"The real problem isn\u2019t AI coding speed \u2014 it\u2019s unstructured AI creating technical debt at scale.",
	cards: [
		{
			quote:
				"Your AI forgets your architecture every session. You spend 20 minutes re-explaining what NestJS guards do.",
			painRef: "P1: Context Rot",
		},
		{
			quote:
				"Claude patches over bugs with quick fixes until the entire module is unmaintainable spaghetti.",
			painRef: "P3: CC Spirals",
		},
		{
			quote:
				"I ran 3 agents in parallel. Spent 4 hours resolving merge conflicts. Net productivity: negative.",
			painRef: "P4: Merge Conflicts in Multi-Agent",
		},
		{
			quote:
				"Unit tests pass with 100% coverage. Every assertion uses mock data. Zero real behavior tested.",
			painRef: "P5: Fake Tests",
		},
	],
} as const satisfies ProblemsConfig;
