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

const solutionRu: SolutionConfig = {
	sectionLabel: "THE SOLUTION",
	headline: "Architecture-aware pipeline для AI-агентов",
	closingLine: {
		prefix: "Одна ",
		highlight: "forge setup",
		suffix: " \u2192 ваш AI кодит как senior-инженер, который прочитал каждый файл в репо.",
	},
	pillars: [
		{
			label: "AUDIT",
			headline: "Понимает ваш проект",
			description:
				"7-этапный визард автоматически определяет стек, слои, архитектурные паттерны и конвенции. Без ручной настройки.",
		},
		{
			label: "GUARD",
			headline: "Соблюдает ваши стандарты",
			description:
				"50+ паттернов качества, соглашения об именовании, 15 детекторов LLM-рационализации. Предотвращение, а не обнаружение.",
		},
		{
			label: "PIPELINE",
			headline: "Структурирует рабочий процесс",
			description:
				"Design \u2192 Build \u2192 Verify. Фазы с контролем качества. Сквозная прослеживаемость требований.",
		},
	],
};

export const solutionI18n: Record<string, SolutionConfig> = { en: solution, ru: solutionRu };
