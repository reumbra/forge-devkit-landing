import type { ComparisonPageConfig } from "./types";

export const claudeMdComparison: ComparisonPageConfig = {
	slug: "claude-md",
	competitor: "Manual CLAUDE.md",
	searchIntent: [
		"claude.md best practices",
		"how to write claude.md",
		"claude md template",
		"claude.md generator",
	],
	headline: "Forge DevKit vs Manual CLAUDE.md",
	subheadline:
		"Writing CLAUDE.md by hand is a start. Forge generates it from your actual architecture.",
	rows: [
		{
			dimension: "Creation",
			them: "Manual writing - whatever you remember",
			forge: "Auto-generated from 7-gate architecture audit",
		},
		{
			dimension: "Coverage",
			them: "What you think to include",
			forge: "50+ quality patterns, 15 rationalization detectors",
		},
		{
			dimension: "Test connection",
			them: "Not connected to tests",
			forge: "forge-qa generates tests from same requirements",
		},
		{
			dimension: "Maintenance",
			them: "Manual updates when codebase changes",
			forge: "Upgrade command regenerates from current state",
		},
		{
			dimension: "Pipeline",
			them: "Just rules in one file",
			forge: "Full ecosystem: rules + product + tests + tasks + parallel execution",
		},
	],
	verdict:
		"A hand-written CLAUDE.md is better than nothing. Forge DevKit generates a comprehensive one from your architecture - and connects it to product specs, tests, and task management.",
	ctaText: "Try Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs Manual CLAUDE.md - Auto-Generated AI Guardrails",
		description:
			"Stop writing CLAUDE.md by hand. Forge generates it from a 7-gate architecture audit with 50+ quality patterns and connects to test generation.",
	},
};

const claudeMdComparisonRu: ComparisonPageConfig = {
	slug: "claude-md",
	competitor: "Manual CLAUDE.md",
	searchIntent: [
		"claude.md best practices",
		"how to write claude.md",
		"claude md template",
		"claude.md generator",
	],
	headline: "Forge DevKit vs ручной CLAUDE.md",
	subheadline:
		"Писать CLAUDE.md вручную - это начало. Forge генерирует его из реальной архитектуры.",
	rows: [
		{
			dimension: "Создание",
			them: "Ручное написание - что вспомнили",
			forge: "Автогенерация из 7-этапного аудита архитектуры",
		},
		{
			dimension: "Покрытие",
			them: "То, что вы не забыли указать",
			forge: "50+ паттернов качества, 15 детекторов рационализации",
		},
		{
			dimension: "Связь с тестами",
			them: "Не связан с тестами",
			forge: "forge-qa генерирует тесты из тех же требований",
		},
		{
			dimension: "Поддержка",
			them: "Ручное обновление при изменении кодовой базы",
			forge: "Команда upgrade регенерирует из текущего состояния",
		},
		{
			dimension: "Пайплайн",
			them: "Просто правила в одном файле",
			forge: "Полная экосистема: правила + продукт + тесты + задачи + параллельное выполнение",
		},
	],
	verdict:
		"Ручной CLAUDE.md лучше, чем ничего. Forge DevKit генерирует комплексный CLAUDE.md из вашей архитектуры и связывает его со спецификациями, тестами и управлением задачами.",
	ctaText: "Попробовать Forge DevKit \u2192",
	seo: {
		title: "Forge DevKit vs ручной CLAUDE.md - автоматические AI-гайдрейлы",
		description:
			"Перестаньте писать CLAUDE.md вручную. Forge генерирует его из 7-этапного аудита архитектуры с 50+ паттернами качества и связывает с генерацией тестов.",
	},
};

export const claudeMdComparisonI18n: Record<string, ComparisonPageConfig> = {
	en: claudeMdComparison,
	ru: claudeMdComparisonRu,
};
