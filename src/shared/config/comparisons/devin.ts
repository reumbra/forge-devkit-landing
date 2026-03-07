import type { ComparisonPageConfig } from "./types";

export const devinComparison: ComparisonPageConfig = {
	slug: "devin",
	competitor: "Devin",
	searchIntent: [
		"devin vs forge",
		"devin alternative",
		"devin ai pricing",
		"devin autonomous agent",
	],
	headline: "Forge DevKit vs Devin",
	subheadline:
		"Devin is an autonomous AI developer. Forge is infrastructure for YOUR AI agent.",
	rows: [
		{
			dimension: "What it is",
			them: "Autonomous AI developer in its own environment",
			forge: "Architecture-aware pipeline for your existing AI agent",
		},
		{
			dimension: "Pricing",
			them: "$20/mo + ACU charges (\u2265$240/yr)",
			forge: "\u20AC29-\u20AC149 one-time, renewal optional",
		},
		{
			dimension: "Architecture awareness",
			them: "General purpose - learns from docs",
			forge: "Project-specific from 7-gate audit (50+ patterns)",
		},
		{
			dimension: "Multi-agent",
			them: "Single agent",
			forge: "Conflict-free parallel waves via forge-autopilot",
		},
		{
			dimension: "Code ownership",
			them: "Devin's sandboxed environment",
			forge: "Your repo, your tools, your CI/CD",
		},
	],
	verdict:
		"Devin replaces your developer. Forge augments your development workflow. If you want to keep control of your codebase and use your preferred AI agent, Forge is the right choice.",
	ctaText: "Try Forge DevKit \u2192",
	relatedModules: [
		{
			module: "forge-core",
			description: "Architecture-aware pipeline for your existing AI agent",
			href: "/modules/core",
		},
		{
			module: "forge-autopilot",
			description: "Multi-agent parallel execution - Forge's answer to Devin",
			href: "/modules/autopilot",
		},
	],
	relatedModulesHeading: "Modules behind this comparison",
	seo: {
		title: "Forge DevKit vs Devin - AI Infrastructure vs Autonomous Agent",
		description:
			"Compare Forge DevKit to Devin. One-time \u20AC29-149 vs $20/mo subscription. Your repo and tools vs sandboxed environment.",
	},
};

const devinComparisonRu: ComparisonPageConfig = {
	slug: "devin",
	competitor: "Devin",
	searchIntent: [
		"devin vs forge",
		"devin alternative",
		"devin ai pricing",
		"devin autonomous agent",
	],
	headline: "Forge DevKit vs Devin",
	subheadline:
		"Devin - автономный AI-разработчик. Forge - инфраструктура для ВАШЕГО AI-агента.",
	rows: [
		{
			dimension: "Что это",
			them: "Автономный AI-разработчик в собственной среде",
			forge: "Пайплайн с пониманием архитектуры для вашего AI-агента",
		},
		{
			dimension: "Стоимость",
			them: "$20/мес + ACU (\u2265$240/год)",
			forge: "\u20AC29-\u20AC149 разово, продление по желанию",
		},
		{
			dimension: "Знание архитектуры",
			them: "Общего назначения - учится из документации",
			forge: "Специфичное для проекта из 7-этапного аудита (50+ паттернов)",
		},
		{
			dimension: "Мультиагентность",
			them: "Один агент",
			forge: "Параллельные волны без конфликтов через forge-autopilot",
		},
		{
			dimension: "Владение кодом",
			them: "Изолированная среда Devin",
			forge: "Ваш репозиторий, ваши инструменты, ваш CI/CD",
		},
	],
	verdict:
		"Devin заменяет разработчика. Forge усиливает процесс разработки. Если вы хотите сохранить контроль над кодовой базой и использовать предпочитаемый AI-агент, Forge - правильный выбор.",
	ctaText: "Попробовать Forge DevKit \u2192",
	relatedModules: [
		{
			module: "forge-core",
			description: "Пайплайн с пониманием архитектуры для вашего AI-агента",
			href: "/modules/core",
		},
		{
			module: "forge-autopilot",
			description: "Мультиагентное параллельное выполнение - ответ Forge на Devin",
			href: "/modules/autopilot",
		},
	],
	relatedModulesHeading: "Модули в этом сравнении",
	seo: {
		title: "Forge DevKit vs Devin - AI-инфраструктура vs автономный агент",
		description:
			"Сравнение Forge DevKit и Devin. Разовая покупка \u20AC29-149 vs подписка $20/мес. Ваш репозиторий и инструменты vs изолированная среда.",
	},
};

export const devinComparisonI18n: Record<string, ComparisonPageConfig> = {
	en: devinComparison,
	ru: devinComparisonRu,
};
