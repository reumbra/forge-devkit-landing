export interface ProofStat {
	value: string;
	label: string;
}

export interface SocialProofConfig {
	stats: ProofStat[];
}

export const socialProof = {
	stats: [
		{ value: "24", label: "quality guardrails" },
		{ value: "8-gate", label: "architecture audit" },
		{ value: "8+", label: "frameworks supported" },
	],
} as const satisfies SocialProofConfig;
