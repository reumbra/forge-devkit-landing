export interface DefinitionConfig {
	headline: string;
	definition: string;
}

export const definition: DefinitionConfig = {
	headline: "What is Forge DevKit?",
	definition:
		"Forge DevKit is a commercial plugin ecosystem for AI coding agents (Claude Code, Cursor, Windsurf). One command scans your repository - stack, layers, patterns - and generates architecture-aware guardrails, quality patterns, and dev-skills your AI follows in every session. 6 modules cover the full pipeline from architecture audit to test generation to parallel agent orchestration. One-time purchase from EUR 29. No subscription. No per-token charges.",
};

const definitionRu: DefinitionConfig = {
	headline: "Что такое Forge DevKit?",
	definition:
		"Forge DevKit - коммерческая экосистема плагинов для AI-агентов кодинга (Claude Code, Cursor, Windsurf). Одна команда сканирует ваш репозиторий - стек, слои, паттерны - и генерирует гайдрейлы, паттерны качества и dev-скиллы, которым ваш AI следует в каждой сессии. 6 модулей покрывают полный pipeline от аудита архитектуры до генерации тестов и параллельной оркестрации агентов. Разовая покупка от 29 евро. Без подписки. Без оплаты за токены.",
};

export const definitionI18n: Record<string, DefinitionConfig> = { en: definition, ru: definitionRu };
