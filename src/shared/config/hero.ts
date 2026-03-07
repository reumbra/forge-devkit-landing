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
	headline: "Your AI writes code. Forge makes it production-ready.",
	subheadline:
		"One command scans your repo - stack, layers, patterns - and generates guardrails your AI actually follows. 50+ quality rules. Works with Claude Code, Cursor, and any AI agent.",
	ctas: [
		{
			label: "Get Forge - from €29",
			href: "/pricing",
			variant: "primary",
		},
		{
			label: "See how it works",
			href: "#how-it-works",
			variant: "ghost",
		},
	],
	terminal: {
		lines: [
			{ text: "$ forge setup", type: "command" },
			{ text: "", type: "blank" },
			{ text: "\u2713 Gate 1: Stack detected - NestJS 10", type: "success" },
			{ text: "\u2713 Gate 2: Architecture - Clean Arch", type: "success" },
			{ text: "\u2713 Gate 3: 3 layers detected", type: "success" },
			{ text: "\u2713 Gate 4: PostgreSQL + TypeORM", type: "success" },
			{ text: "\u2713 Gate 5: Naming conventions - consistent", type: "success" },
			{ text: "\u2713 Gate 6: CI/CD - GitHub Actions", type: "success" },
			{ text: "\u2713 Gate 7: Task tracker - GitHub Issues", type: "success" },
			{ text: "", type: "blank" },
			{ text: "\u2728 Project ready. AI is now architecture-aware.", type: "highlight" },
		],
	},
} as const satisfies HeroConfig;

const heroRu: HeroConfig = {
	sectionLabel: "FORGE DEVKIT",
	headline: "Ваш AI пишет код. Forge делает его production-ready.",
	subheadline:
		"Одна команда сканирует ваш репозиторий - стек, слои, паттерны - и генерирует гайдрейлы, которым ваш AI реально следует. 50+ правил качества. Работает с Claude Code, Cursor и любым AI-агентом.",
	ctas: [
		{
			label: "Получить Forge - от \u20ac29",
			href: "/pricing",
			variant: "primary",
		},
		{
			label: "Как это работает",
			href: "#how-it-works",
			variant: "ghost",
		},
	],
	terminal: hero.terminal,
};

export const heroI18n: Record<string, HeroConfig> = { en: hero, ru: heroRu };
