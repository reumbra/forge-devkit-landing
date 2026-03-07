import type { ComparisonPageConfig } from "./types";

export const cursorRulesComparison: ComparisonPageConfig = {
	slug: "cursor-rules",
	competitor: "Cursor Rules",
	searchIntent: [
		"cursor rules vs forge",
		"better than .cursorrules",
		"cursor rules alternative",
		"cursor rules generator",
	],
	headline: "Forge DevKit vs Cursor Rules",
	subheadline:
		"Cursor Rules give your AI a static cheat sheet. Forge gives it a full architecture audit.",
	rows: [
		{
			dimension: "Rule creation",
			them: "Manual or template generator",
			forge: "Auto-generated from 7-gate architecture audit",
		},
		{
			dimension: "Architecture awareness",
			them: "None - you specify stack manually",
			forge: "Detects stack, layers, patterns (DDD, CQRS, Clean Architecture)",
		},
		{
			dimension: "Scope",
			them: "Single rules file",
			forge: "Full pipeline: rules + product specs + tests + task management",
		},
		{
			dimension: "Updates",
			them: "Manual maintenance when codebase changes",
			forge: "Upgrade command regenerates from current architecture",
		},
		{
			dimension: "Platform",
			them: "Cursor only",
			forge: "Claude Code, Cursor, Windsurf, any AI agent",
		},
	],
	verdict:
		"Cursor Rules are a good start for simple projects. Forge DevKit is for teams that need architecture awareness, test traceability, and a full development pipeline - across any AI platform.",
	ctaText: "Try Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs Cursor Rules - Architecture-Aware AI Pipeline",
		description:
			"Compare Forge DevKit to Cursor Rules. Auto-generated from architecture audit vs manual templates. Full pipeline vs single rules file.",
	},
};

const cursorRulesComparisonRu: ComparisonPageConfig = {
	slug: "cursor-rules",
	competitor: "Cursor Rules",
	searchIntent: [
		"cursor rules vs forge",
		"better than .cursorrules",
		"cursor rules alternative",
		"cursor rules generator",
	],
	headline: "Forge DevKit vs Cursor Rules - полное сравнение",
	subheadline:
		"Cursor Rules дают AI статичную шпаргалку. Forge дает полный аудит архитектуры.",
	rows: [
		{
			dimension: "Создание правил",
			them: "Вручную или через генератор шаблонов",
			forge: "Автоматически из 7-этапного аудита архитектуры",
		},
		{
			dimension: "Знание архитектуры",
			them: "Отсутствует - стек указывается вручную",
			forge: "Определяет стек, слои, паттерны (DDD, CQRS, Clean Architecture)",
		},
		{
			dimension: "Охват",
			them: "Один файл с правилами",
			forge: "Полный пайплайн: правила + спецификации + тесты + управление задачами",
		},
		{
			dimension: "Обновление",
			them: "Ручная правка при изменении кодовой базы",
			forge: "Команда upgrade регенерирует из текущей архитектуры",
		},
		{
			dimension: "Платформа",
			them: "Только Cursor",
			forge: "Claude Code, Cursor, Windsurf, любой AI-агент",
		},
	],
	verdict:
		"Cursor Rules - хорошее начало для простых проектов. Forge DevKit - для команд, которым нужно понимание архитектуры, трассировка тестов и полный пайплайн разработки на любой AI-платформе.",
	ctaText: "Попробовать Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs Cursor Rules - AI-пайплайн с пониманием архитектуры",
		description:
			"Сравнение Forge DevKit и Cursor Rules. Автогенерация из аудита архитектуры vs ручные шаблоны. Полный пайплайн vs один файл правил.",
	},
};

export const cursorRulesComparisonI18n: Record<string, ComparisonPageConfig> = {
	en: cursorRulesComparison,
	ru: cursorRulesComparisonRu,
};
