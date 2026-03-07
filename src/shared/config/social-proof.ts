export interface ProofStat {
	value: string;
	label: string;
}

export interface SocialProofConfig {
	stats: ProofStat[];
}

export const socialProof = {
	stats: [
		{ value: "50+", label: "quality patterns" },
		{ value: "7-gate", label: "architecture audit" },
		{ value: "8+", label: "frameworks supported" },
	],
} as const satisfies SocialProofConfig;

const socialProofRu: SocialProofConfig = {
	stats: [
		{ value: "50+", label: "паттернов качества" },
		{ value: "7-gate", label: "архитектурный аудит" },
		{ value: "8+", label: "поддерживаемых фреймворков" },
	],
};

export const socialProofI18n: Record<string, SocialProofConfig> = { en: socialProof, ru: socialProofRu };
