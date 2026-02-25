export interface HeroCta {
	label: string;
	href: string;
	variant: "primary" | "ghost";
}

export interface TerminalLine {
	text: string;
	type: "command" | "blank" | "success" | "info" | "highlight";
}

export interface HeroConfig {
	sectionLabel: string;
	headline: string;
	subheadline: string;
	ctas: HeroCta[];
	terminal: {
		lines: TerminalLine[];
	};
}

export const hero = {
	sectionLabel: "FORGE DEVKIT",
	headline: "AI agents that respect your codebase",
	subheadline:
		"Architecture-aware pipeline. Project-specific guardrails, quality patterns, and dev workflows — across any platform.",
	ctas: [
		{
			label: "Audit your architecture",
			href: "#pricing",
			variant: "primary",
		},
		{
			label: "How it works",
			href: "#how-it-works",
			variant: "ghost",
		},
	],
	terminal: {
		lines: [
			{ text: "$ forge setup", type: "command" },
			{ text: "", type: "blank" },
			{ text: "\u2713 Gate 1: Stack detected \u2014 NestJS 10", type: "success" },
			{ text: "\u2713 Gate 2: Architecture \u2014 Clean Arch", type: "success" },
			{ text: "\u2713 Gate 3: 3 layers detected", type: "success" },
			{ text: "\u2713 Gate 4: PostgreSQL + TypeORM", type: "success" },
			{ text: "\u2713 Gate 5: Naming conventions \u2014 consistent", type: "success" },
			{ text: "\u2713 Gate 6: CI/CD \u2014 GitHub Actions", type: "success" },
			{ text: "\u2713 Gate 7: Task tracker \u2014 GitHub Issues", type: "success" },
			{ text: "\u2713 Gate 8: 12 dev-skills generated", type: "success" },
			{ text: "", type: "blank" },
			{ text: "\u2728 Project ready. AI is now", type: "highlight" },
			{ text: "   architecture-aware.", type: "highlight" },
		],
	},
} as const satisfies HeroConfig;
