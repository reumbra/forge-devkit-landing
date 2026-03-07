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
		"The real problem isn\u2019t AI coding speed - it\u2019s unstructured AI creating technical debt at scale.",
	cards: [
		{
			quote:
				"Your AI forgets your architecture every session. You spend 20 minutes re-explaining what NestJS guards do.",
			painRef: "P1: Context Rot",
		},
		{
			quote:
				"Your AI patches over bugs with quick fixes until the entire module is unmaintainable spaghetti.",
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
		{
			quote:
				"A simple rename task burned 50K tokens because the AI re-read the entire codebase. Every. Single. Time.",
			painRef: "P2: Token Burn",
		},
	],
} as const satisfies ProblemsConfig;

const problemsRu: ProblemsConfig = {
	sectionLabel: "THE PROBLEM",
	headline: "AI пишет код быстро. Вы чините его еще быстрее.",
	transitionLine:
		"Настоящая проблема не в скорости AI-кодинга - неструктурированный AI создает технический долг в промышленных масштабах.",
	cards: [
		{
			quote:
				"Ваш AI забывает архитектуру каждую сессию. Вы тратите 20 минут, заново объясняя, что делают NestJS guards.",
			painRef: "P1: Context Rot",
		},
		{
			quote:
				"Ваш AI накладывает патчи поверх багов, пока весь модуль не превращается в неподдерживаемое спагетти.",
			painRef: "P3: CC Spirals",
		},
		{
			quote:
				"Я запустил 3 агента параллельно. Потратил 4 часа на разрешение merge-конфликтов. Итоговая продуктивность: отрицательная.",
			painRef: "P4: Merge Conflicts in Multi-Agent",
		},
		{
			quote:
				"Unit-тесты проходят со 100% покрытием. Все ассерты используют моки. Ноль реального поведения протестировано.",
			painRef: "P5: Fake Tests",
		},
		{
			quote:
				"Простой rename сжег 50K токенов - AI перечитывал всю кодовую базу. Каждый. Раз.",
			painRef: "P2: Token Burn",
		},
	],
};

export const problemsI18n: Record<string, ProblemsConfig> = { en: problems, ru: problemsRu };
