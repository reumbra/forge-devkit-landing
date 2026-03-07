export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

export interface FaqConfig {
	sectionLabel: string;
	headline: string;
	items: FaqItem[];
}

export const faq = {
	sectionLabel: "FAQ",
	headline: "Frequently asked questions",
	items: [
		{
			id: "cursorrules",
			question:
				"How is this different from writing .cursorrules myself?",
			answer:
				"Auto-generated from architecture audit. Full pipeline, not just rules. Platform-agnostic - works in Cursor AND Claude Code AND Cowork.",
		},
		{
			id: "stack-support",
			question: "Does it work with my stack?",
			answer:
				"8+ frameworks supported. 3 template families (NestJS/Clean Arch, generic backend, frontend). Stack-specific quality patterns auto-detected.",
		},
		{
			id: "removal",
			question: "What if I remove Forge?",
			answer:
				"Disposable meta-tool: generated artifacts (dev-skills, tests, docs) work independently. Your code doesn't depend on Forge.",
		},
		{
			id: "platform-support",
			question: "Does it work outside Claude Code?",
			answer:
				".claude/ directory auto-detected by Cursor, Claude Desktop, Claude Cowork. Forge installs there - all platforms pick it up.",
		},
		{
			id: "guarantee",
			question: "Is there a money-back guarantee?",
			answer:
				"Yes. 14-day money-back guarantee, no questions asked. If Forge doesn't improve your workflow, email us and we'll refund immediately.",
		},
		{
			id: "roi",
			question: "What's the ROI of using Forge?",
			answer:
				"One prevented production bug pays for the entire year. At €29-79, Forge costs less than a single hour of debugging AI-generated regressions.",
		},
		{
			id: "vs-devin",
			question: "How does Forge compare to Devin?",
			answer:
				"Devin is an autonomous AI developer - it writes code for you. Forge is infrastructure for YOUR AI agent - it makes your existing tools (Claude Code, Cursor, Windsurf) architecture-aware. Devin costs €240/yr mandatory. Forge starts at €29 one-time.",
		},
		{
			id: "agent-teams",
			question: "Does Forge work with Claude Agent Teams?",
			answer:
				"Yes. forge-autopilot is specifically designed to orchestrate Agent Teams - it handles backlog triage, conflict detection, wave planning, and auto-merge. Think of it as Kubernetes for AI agents.",
		},
		{
			id: "ai-tools",
			question: "What AI coding tools does Forge support?",
			answer:
				"Any tool that reads CLAUDE.md, .cursorrules, or similar config files. This includes Claude Code, Cursor, Windsurf, Cline, and any future AI agent. Forge generates platform-agnostic artifacts.",
		},
		{
			id: "update-period",
			question: "What happens after the 1-year update period?",
			answer:
				"Your generated artifacts continue working forever - they're files in your project, not a service. You just won't get new quality patterns or module updates. Optionally renew at a reduced price to stay current.",
		},
		{
			id: "token-costs",
			question: "How does Forge reduce AI token costs?",
			answer:
				"Three ways. First: execution modes - economy mode skips optional quality steps, cutting ~60% of tokens on routine tasks. Second: pipeline phases communicate through 500-token summaries instead of passing full context (~49K) between phases. Third: subagents receive only their scope, not the entire codebase. Simple bug fix? 5-step economy mode. Complex feature? Full quality pipeline. You choose per task.",
		},
	],
} as const satisfies FaqConfig;

const faqRu: FaqConfig = {
	sectionLabel: "FAQ",
	headline: "Частые вопросы",
	items: [
		{
			id: "cursorrules",
			question:
				"Чем это отличается от ручного написания .cursorrules?",
			answer:
				"Автоматическая генерация из архитектурного аудита. Полный pipeline, а не просто правила. Работает в Cursor, Claude Code и Cowork.",
		},
		{
			id: "stack-support",
			question: "Работает ли с моим стеком?",
			answer:
				"8+ поддерживаемых фреймворков. 3 семейства шаблонов (NestJS/Clean Arch, generic backend, frontend). Stack-специфичные паттерны качества определяются автоматически.",
		},
		{
			id: "removal",
			question: "Что если я удалю Forge?",
			answer:
				"Автономный мета-инструмент: сгенерированные артефакты (dev-скиллы, тесты, документация) работают независимо. Ваш код не зависит от Forge.",
		},
		{
			id: "platform-support",
			question: "Работает ли вне Claude Code?",
			answer:
				"Директория .claude/ автоматически распознается Cursor, Claude Desktop, Claude Cowork. Forge устанавливается туда - все платформы подхватывают.",
		},
		{
			id: "guarantee",
			question: "Есть ли гарантия возврата?",
			answer:
				"Да. 14-дневная гарантия возврата без вопросов. Если Forge не улучшает ваш workflow, напишите нам - вернем деньги сразу.",
		},
		{
			id: "roi",
			question: "Какой ROI от использования Forge?",
			answer:
				"Один предотвращенный production-баг окупает целый год. За \u20AC29-79 Forge стоит дешевле одного часа отладки AI-сгенерированных регрессий.",
		},
		{
			id: "vs-devin",
			question: "Чем Forge отличается от Devin?",
			answer:
				"Devin - автономный AI-разработчик, он пишет код за вас. Forge - инфраструктура для ВАШЕГО AI-агента, делает ваши инструменты (Claude Code, Cursor, Windsurf) architecture-aware. Devin стоит \u20AC240/год обязательно. Forge - от \u20AC29 однократно.",
		},
		{
			id: "agent-teams",
			question: "Работает ли Forge с Claude Agent Teams?",
			answer:
				"Да. forge-autopilot специально разработан для оркестрации Agent Teams - он управляет триажем бэклога, детекцией конфликтов, wave-планированием и auto-merge. Считайте его Kubernetes для AI-агентов.",
		},
		{
			id: "ai-tools",
			question: "Какие AI-инструменты поддерживает Forge?",
			answer:
				"Любой инструмент, читающий CLAUDE.md, .cursorrules или аналогичные конфиги. Это Claude Code, Cursor, Windsurf, Cline и любой будущий AI-агент. Forge генерирует платформо-независимые артефакты.",
		},
		{
			id: "update-period",
			question: "Что происходит после года обновлений?",
			answer:
				"Ваши сгенерированные артефакты продолжают работать навсегда - это файлы в вашем проекте, а не сервис. Вы просто не получаете новые паттерны качества и обновления модулей. По желанию можно продлить по сниженной цене.",
		},
		{
			id: "token-costs",
			question: "Как Forge снижает расход токенов AI?",
			answer:
				"Тремя способами. Первый: режимы выполнения - economy mode пропускает необязательные шаги качества, экономя ~60% токенов на рутинных задачах. Второй: фазы pipeline общаются через 500-токенные summary вместо передачи полного контекста (~49K) между фазами. Третий: субагенты получают только свой scope, а не всю кодовую базу. Простой баг-фикс? 5-шаговый economy mode. Сложная фича? Полный quality pipeline. Вы выбираете под задачу.",
		},
	],
};

export const faqI18n: Record<string, FaqConfig> = { en: faq, ru: faqRu };
