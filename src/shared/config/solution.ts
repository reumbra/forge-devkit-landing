export interface SolutionPillar {
	label: string;
	headline: string;
	description: string;
}

export interface ClosingLine {
	prefix: string;
	highlight: string;
	suffix: string;
}

export interface SolutionConfig {
	sectionLabel: string;
	headline: string;
	closingLine: ClosingLine;
	pillars: SolutionPillar[];
}

export const solution = {
	sectionLabel: "THE SOLUTION",
	headline: "Architecture-aware pipeline for AI agents",
	closingLine: {
		prefix: "One ",
		highlight: "forge setup",
		suffix: " \u2192 your AI codes like a senior engineer who\u2019s read every file in the repo.",
	},
	pillars: [
		{
			label: "AUDIT",
			headline: "Understands your project",
			description:
				"7-gate wizard auto-detects stack, layers, architecture patterns, and conventions. No manual config.",
		},
		{
			label: "GUARD",
			headline: "Enforces your standards",
			description:
				"50+ quality patterns, naming conventions, 15 LLM rationalization detectors. Prevention, not detection.",
		},
		{
			label: "PIPELINE",
			headline: "Structures the workflow",
			description:
				"Design \u2192 Build \u2192 Verify. Scoped phases with quality gates. Requirement traceability end to end.",
		},
	],
} as const satisfies SolutionConfig;
