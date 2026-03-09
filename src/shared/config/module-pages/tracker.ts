import type { ModulePageConfig } from "./types";

export const trackerPageConfig: ModulePageConfig = {
	slug: "tracker",
	name: "forge-tracker",
	tagline: "Your tracker talks to your AI agent",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "Tasks live in one tool, code in another",
			evidence: "Developers context-switch between tracker and IDE. Status updates lag behind reality by hours.",
		},
		{
			pain: "AI agents don't know what to work on",
			evidence: "You copy-paste task descriptions into prompts. Acceptance criteria get lost in translation.",
		},
		{
			pain: "Five integrations, five different APIs",
			evidence: "GitHub Issues, ClickUp, Linear, Notion, Jira - each has its own conventions and field mappings.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-tracker to your environment.",
			visual: [{ text: "forge install forge-tracker", color: "secondary" }],
		},
		{
			title: "Detect",
			description: "Auto-discovers your integrations: GitHub CLI, ClickUp MCP, Linear, Notion MCP, Jira.",
			visual: [
				{ prefix: "Found:", text: " GitHub CLI (gh)", color: "text" },
				{ prefix: "Found:", text: " ClickUp MCP server", color: "text" },
			],
		},
		{
			title: "Configure",
			description: "Maps your workflow conventions, custom fields, and status transitions.",
		},
		{
			title: "Sync",
			description: "AI reads tasks directly from your tracker. Status updates flow back automatically.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "5 integrations",
			description: "GitHub Issues, ClickUp, Linear, Notion, Jira - all at feature parity.",
		},
		{
			icon: "\u25C7",
			title: "Bidirectional sync",
			description: "AI reads tasks, updates status, adds comments. Changes flow back to your tracker in real time.",
		},
		{
			icon: "\u25C7",
			title: "AC validation",
			description: "Acceptance criteria extracted from tasks and validated against implementation before closing.",
		},
		{
			icon: "\u25C7",
			title: "Custom field mapping",
			description: "Your fields, your conventions. Sprint, priority, story points - all mapped to your workflow.",
		},
		{
			icon: "\u25C7",
			title: "Autonomous scripts",
			description: "Remove the plugin after setup - sync scripts keep running. Zero vendor lock-in.",
		},
	],

	comparison: [
		{
			dimension: "Integration breadth",
			them: "1-2 platforms, manual setup",
			forge: "5 platforms, auto-detected",
		},
		{
			dimension: "AI connection",
			them: "Copy-paste task descriptions",
			forge: "AI reads tasks directly, syncs status back",
		},
		{
			dimension: "Workflow conventions",
			them: "Generic defaults",
			forge: "Your custom fields, statuses, transitions",
		},
		{
			dimension: "After setup",
			them: "Requires ongoing tool access",
			forge: "Autonomous scripts - plugin removable",
		},
	],
	comparisonTarget: "IDE task management plugins",

	integrations: [
		{
			module: "forge-core",
			description: "Dev-skills reference tracked tasks for context-aware development",
			href: "/modules/core",
		},
		{
			module: "forge-autopilot",
			description: "Agent Teams pull tasks from tracker for batch execution",
			href: "/modules/autopilot",
		},
		{
			module: "forge-qa",
			description: "Test generation traces back to tracked acceptance criteria",
			href: "/modules/qa",
		},
	],

	outputExample: {
		title: "forge:tracker sync",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Syncing tasks from ClickUp...</span>

<span class="t-green">synced</span>  <span class="t-white">TF-142</span>  <span class="t-muted">Add SSO login flow</span>        <span class="t-cyan">In Progress</span> <span class="t-muted">-></span> <span class="t-cyan">In Progress</span>
<span class="t-green">synced</span>  <span class="t-white">TF-143</span>  <span class="t-muted">Fix cart total rounding</span>   <span class="t-yellow">To Do</span>       <span class="t-muted">-></span> <span class="t-cyan">In Progress</span>
<span class="t-green">synced</span>  <span class="t-white">TF-144</span>  <span class="t-muted">Update email templates</span>   <span class="t-cyan">In Progress</span> <span class="t-muted">-></span> <span class="t-green">Done</span>
<span class="t-green">synced</span>  <span class="t-white">TF-145</span>  <span class="t-muted">API rate limiting</span>        <span class="t-yellow">To Do</span>       <span class="t-muted">-></span> <span class="t-yellow">To Do</span>

<span class="t-muted">Total:</span> <span class="t-white">4 tasks synced</span> <span class="t-muted">|</span> <span class="t-green">1 completed</span> <span class="t-muted">|</span> <span class="t-yellow">1 status changed</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Any Developer", benefit: "Stop context-switching between tracker and IDE - tasks sync directly to your AI agent." },
			{ role: "Tech Lead", benefit: "Keep task statuses in sync across the team without chasing updates manually." },
			{ role: "Product Manager", benefit: "Get automatic status updates as AI agents complete work - no standups needed." },
		],
	},

	seo: {
		title: "forge-tracker - AI Reads Your Backlog | Forge DevKit",
		description: "Connect Claude Code to GitHub, ClickUp, Linear, Notion, or Jira. AI reads tasks, updates status, syncs progress. Autonomous scripts survive plugin removal.",
	},
};

const trackerPageConfigRu: ModulePageConfig = {
	slug: "tracker",
	name: "forge-tracker",
	tagline: "Ваш трекер разговаривает с AI-агентом",
	tier: "Pro",
	tierPrice: "€79",

	problems: [
		{
			pain: "Задачи в одном инструменте, код - в другом",
			evidence: "Разработчики переключаются между трекером и IDE. Статусы отстают от реальности на часы.",
		},
		{
			pain: "AI-агенты не знают, над чем работать",
			evidence: "Вы копируете описания задач в промпты. Acceptance criteria теряются при переводе.",
		},
		{
			pain: "Пять интеграций, пять разных API",
			evidence: "GitHub Issues, ClickUp, Linear, Notion, Jira - у каждого свои конвенции и маппинг полей.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-tracker в ваше окружение.",
			visual: trackerPageConfig.steps[0].visual,
		},
		{
			title: "Обнаружение",
			description: "Автоматически находит интеграции: GitHub CLI, ClickUp MCP, Linear, Notion MCP, Jira.",
			visual: trackerPageConfig.steps[1].visual,
		},
		{
			title: "Настройка",
			description: "Маппит ваши воркфлоу-конвенции, кастомные поля и переходы статусов.",
		},
		{
			title: "Синхронизация",
			description: "AI читает задачи напрямую из трекера. Обновления статусов текут обратно автоматически.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "5 интеграций",
			description: "GitHub Issues, ClickUp, Linear, Notion, Jira - все на паритете функций.",
		},
		{
			icon: "\u25C7",
			title: "Двусторонняя синхронизация",
			description: "AI читает задачи, обновляет статус, добавляет комментарии. Изменения текут обратно в трекер.",
		},
		{
			icon: "\u25C7",
			title: "Валидация AC",
			description: "Acceptance criteria извлекаются из задач и проверяются по реализации перед закрытием.",
		},
		{
			icon: "\u25C7",
			title: "Маппинг кастомных полей",
			description: "Ваши поля, ваши конвенции. Спринт, приоритет, story points - всё маппится под ваш воркфлоу.",
		},
		{
			icon: "\u25C7",
			title: "Автономные скрипты",
			description: "Удалите плагин после настройки - скрипты синхронизации продолжат работать. Нулевая привязка к вендору.",
		},
	],

	comparison: [
		{
			dimension: "Широта интеграций",
			them: "1-2 платформы, ручная настройка",
			forge: "5 платформ, автообнаружение",
		},
		{
			dimension: "Связь с AI",
			them: "Копирование описаний задач",
			forge: "AI читает задачи напрямую, синхронизирует статус",
		},
		{
			dimension: "Конвенции воркфлоу",
			them: "Генерические дефолты",
			forge: "Ваши кастомные поля, статусы, переходы",
		},
		{
			dimension: "После настройки",
			them: "Требует постоянного доступа к инструменту",
			forge: "Автономные скрипты - плагин можно удалить",
		},
	],
	comparisonTarget: "IDE-плагины управления задачами",

	integrations: [
		{
			module: "forge-core",
			description: "Dev-скиллы используют отслеживаемые задачи для контекстной разработки",
			href: "/modules/core",
		},
		{
			module: "forge-autopilot",
			description: "Agent Teams берут задачи из трекера для пакетного выполнения",
			href: "/modules/autopilot",
		},
		{
			module: "forge-qa",
			description: "Генерация тестов трассируется к acceptance criteria из задач",
			href: "/modules/qa",
		},
	],

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Любой разработчик", benefit: "Перестаньте переключаться между трекером и IDE - задачи синхронизируются напрямую с AI-агентом." },
			{ role: "Тех-лид", benefit: "Статусы задач в синхроне по всей команде без ручного сбора апдейтов." },
			{ role: "Продакт-менеджер", benefit: "Автоматические обновления статусов по мере работы AI-агентов - без стендапов." },
		],
	},

	seo: {
		title: "forge-tracker - AI читает ваш бэклог | Forge DevKit",
		description: "Подключите Claude Code к GitHub, ClickUp, Linear, Notion или Jira. AI читает задачи, обновляет статус, синхронизирует прогресс. Скрипты работают автономно.",
	},
};

export const trackerPageConfigI18n: Record<string, ModulePageConfig> = {
	en: trackerPageConfig,
	ru: trackerPageConfigRu,
};
