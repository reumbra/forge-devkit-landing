import type { ModulePageConfig } from "./types";

export const worktreePageConfig: ModulePageConfig = {
	slug: "worktree",
	name: "forge-worktree",
	tagline: "Git worktree lifecycle manager",
	tier: "Core",
	tierPrice: "€29",

	problems: [
		{
			pain: "Feature branches collide on localhost",
			evidence: "Two branches, same port 3000. You kill one server to run another. Context lost.",
		},
		{
			pain: "Docker containers fight for ports",
			evidence: "Backend on 5432, Redis on 6379 - but your second worktree wants the same ports.",
		},
		{
			pain: "Manual worktree setup is error-prone",
			evidence: "Copy .env, remap ports, adjust Docker Compose, remember to clean up. Every time.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-worktree to your environment.",
			visual: [{ text: "forge install forge-worktree", color: "secondary" }],
		},
		{
			title: "Audit",
			description: "Detects your project type: Docker backend, frontend, or generic. Scans ports, env files, compose configs.",
			visual: [
				{ prefix: "Type:", text: " Docker backend", color: "text" },
				{ prefix: "Ports:", text: " 3000, 5432, 6379", color: "text" },
			],
		},
		{
			title: "Generate",
			description: "Produces a worktree management skill with port offsets, env remapping, and cleanup scripts.",
		},
		{
			title: "Use",
			description: "Create worktrees with one command. Each gets isolated ports, its own Docker stack, safe teardown.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 project templates",
			description: "Docker backend, Frontend, Generic. Each with template-specific port isolation and env handling.",
		},
		{
			icon: "\u25C7",
			title: "Zero port conflicts",
			description: "Automatic port offset per worktree. Main on 3000, worktree-1 on 3100, worktree-2 on 3200.",
		},
		{
			icon: "\u25C7",
			title: "Docker isolation",
			description: "Each worktree gets its own Docker Compose project name, volumes, and network namespace.",
		},
		{
			icon: "\u25C7",
			title: "Safe teardown",
			description: "One command stops containers, removes volumes, and cleans the worktree. No orphaned resources.",
		},
		{
			icon: "\u25C7",
			title: "Auto-cleanup on merge",
			description: "When a branch is merged, the worktree and its resources are cleaned up automatically.",
		},
	],

	comparison: [
		{
			dimension: "Port management",
			them: "Manual port remapping per branch",
			forge: "Automatic offset (3000 -> 3100 -> 3200)",
		},
		{
			dimension: "Docker handling",
			them: "Shared containers, manual compose overrides",
			forge: "Isolated project names, volumes, networks",
		},
		{
			dimension: "Cleanup",
			them: "Manual: stop containers, remove worktree, hope nothing's left",
			forge: "One command: containers, volumes, worktree - all clean",
		},
		{
			dimension: "Setup time",
			them: "15-30 min per worktree (copy env, remap, test)",
			forge: "One command, auto-configured",
		},
	],
	comparisonTarget: "Manual git worktrees",

	integrations: [
		{
			module: "forge-core",
			description: "Generated dev-skills work in each worktree independently",
			href: "/modules/core",
		},
		{
			module: "forge-autopilot",
			description: "Agent Teams use worktrees for isolated parallel development",
			href: "/modules/autopilot",
		},
	],

	seo: {
		title: "forge-worktree - Git Worktree Lifecycle Manager | Forge DevKit",
		description: "Zero port conflicts, Docker isolation per worktree, safe teardown. 3 templates: Docker backend, Frontend, Generic. Works with forge-autopilot for parallel development.",
	},
};

const worktreePageConfigRu: ModulePageConfig = {
	slug: "worktree",
	name: "forge-worktree",
	tagline: "Lifecycle-менеджер git worktree",
	tier: "Core",
	tierPrice: "€29",

	problems: [
		{
			pain: "Feature-ветки конфликтуют на localhost",
			evidence: "Две ветки, один порт 3000. Убиваете один сервер, чтобы запустить другой. Контекст потерян.",
		},
		{
			pain: "Docker-контейнеры борются за порты",
			evidence: "Backend на 5432, Redis на 6379 - но второй worktree хочет те же порты.",
		},
		{
			pain: "Ручная настройка worktree чревата ошибками",
			evidence: "Копировать .env, перемаппить порты, поправить Docker Compose, не забыть почистить. Каждый раз.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-worktree в ваше окружение.",
			visual: worktreePageConfig.steps[0].visual,
		},
		{
			title: "Аудит",
			description: "Определяет тип проекта: Docker backend, frontend или generic. Сканирует порты, env-файлы, compose-конфиги.",
			visual: worktreePageConfig.steps[1].visual,
		},
		{
			title: "Генерация",
			description: "Создаёт скилл управления worktree с офсетами портов, ремаппингом env и скриптами очистки.",
		},
		{
			title: "Использование",
			description: "Создавайте worktree одной командой. Каждый получает изолированные порты, свой Docker-стек, безопасную очистку.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "3 шаблона проектов",
			description: "Docker backend, Frontend, Generic. Каждый с изоляцией портов и обработкой env под тип проекта.",
		},
		{
			icon: "\u25C7",
			title: "Ноль конфликтов портов",
			description: "Автоматический офсет портов по worktree. Main на 3000, worktree-1 на 3100, worktree-2 на 3200.",
		},
		{
			icon: "\u25C7",
			title: "Изоляция Docker",
			description: "Каждый worktree получает своё имя Docker Compose проекта, тома и пространство сетей.",
		},
		{
			icon: "\u25C7",
			title: "Безопасная очистка",
			description: "Одна команда останавливает контейнеры, удаляет тома и чистит worktree. Никаких orphaned-ресурсов.",
		},
		{
			icon: "\u25C7",
			title: "Авто-очистка при merge",
			description: "Когда ветка смерджена, worktree и его ресурсы очищаются автоматически.",
		},
	],

	comparison: [
		{
			dimension: "Управление портами",
			them: "Ручной ремаппинг портов для каждой ветки",
			forge: "Автоматический офсет (3000 -> 3100 -> 3200)",
		},
		{
			dimension: "Работа с Docker",
			them: "Общие контейнеры, ручные compose-переопределения",
			forge: "Изолированные имена проектов, тома, сети",
		},
		{
			dimension: "Очистка",
			them: "Вручную: стоп контейнеров, удаление worktree, надежда что ничего не осталось",
			forge: "Одна команда: контейнеры, тома, worktree - всё чисто",
		},
		{
			dimension: "Время настройки",
			them: "15-30 мин на worktree (копировать env, ремаппить, тестить)",
			forge: "Одна команда, автонастройка",
		},
	],
	comparisonTarget: "Ручные git worktree",

	integrations: [
		{
			module: "forge-core",
			description: "Сгенерированные dev-скиллы работают в каждом worktree независимо",
			href: "/modules/core",
		},
		{
			module: "forge-autopilot",
			description: "Agent Teams используют worktree для изолированной параллельной разработки",
			href: "/modules/autopilot",
		},
	],

	seo: {
		title: "forge-worktree - Lifecycle-менеджер git worktree | Forge DevKit",
		description: "Ноль конфликтов портов, Docker-изоляция по worktree, безопасная очистка. 3 шаблона: Docker backend, Frontend, Generic.",
	},
};

export const worktreePageConfigI18n: Record<string, ModulePageConfig> = {
	en: worktreePageConfig,
	ru: worktreePageConfigRu,
};
