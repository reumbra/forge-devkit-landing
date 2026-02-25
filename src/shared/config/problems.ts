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
	headline: "Your AI doesn\u2019t know your project",
	transitionLine: "The problem isn\u2019t AI. It\u2019s unstructured AI.",
	cards: [
		{
			quote: "AI breaks DDD modules and shortcuts validations",
			painRef: "P3: architecture violations",
		},
		{
			quote: "Millions of tokens for 100 lines. $50/day in bills.",
			painRef: "P2: token burn",
		},
		{
			quote: "I re-explain my architecture in every single prompt",
			painRef: "P6: prompt fatigue",
		},
		{
			quote: "Code looks clean but logic is completely wrong",
			painRef: "P4: confidently wrong",
		},
	],
} as const satisfies ProblemsConfig;
