import type { ModulePageConfig } from "./types";

export const worktreePageConfig: ModulePageConfig = {
	slug: "worktree",
	name: "forge-worktree",
	tagline: "Parallel branches, zero port conflicts",
	tier: "Starter",
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
			description: "Docker backend, Frontend, Non-Docker (Node, Python, Go). Each with template-specific port isolation and env handling.",
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
			description: "When a branch is merged, the worktree and its resources are cleaned up automatically. No orphaned Docker resources accumulating on your machine.",
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

	outputExample: {
		title: "forge:worktree-setup - Create Worktree",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Creating worktree: feat-sso</span>

<span class="t-green">created</span>  <span class="t-white">Branch:</span>    <span class="t-cyan">feat/sso-login</span>
<span class="t-green">created</span>  <span class="t-white">Worktree:</span>  <span class="t-muted">../taskflow-app-wt/feat-sso/</span>
<span class="t-green">created</span>  <span class="t-white">Port:</span>      <span class="t-cyan">3001</span> <span class="t-muted">(main: 3000, isolated)</span>
<span class="t-green">created</span>  <span class="t-white">Docker:</span>    <span class="t-cyan">taskflow-feat-sso-db</span> <span class="t-muted">(port 5433)</span>
<span class="t-green">copied</span>   <span class="t-white">.env</span>       <span class="t-muted">with port overrides applied</span>

<span class="t-muted">Ready. Run from:</span> <span class="t-white">cd ../taskflow-app-wt/feat-sso</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Docker Backend Dev", benefit: "Each worktree gets isolated ports and its own Docker stack - no conflicts." },
			{ role: "Team with Parallel PRs", benefit: "Run multiple feature branches simultaneously without killing servers." },
			{ role: "CI/CD Engineer", benefit: "Automated worktree lifecycle with safe teardown - no orphaned resources." },
		],
	},

	seo: {
		title: "forge-worktree - Branch Isolation for AI Dev | Forge DevKit",
		description: "Manage git worktrees with zero port conflicts and Docker isolation. 3 templates for backend and frontend. Essential for parallel AI coding with Claude Code agents.",
	},
};

const worktreePageConfigRu: ModulePageConfig = {
	slug: "worktree",
	name: "forge-worktree",
	tagline: "Параллельные ветки, ноль конфликтов портов",
	tier: "Starter",
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
			description: "Docker backend, Frontend, Non-Docker (Node, Python, Go). Каждый с изоляцией портов и обработкой env под тип проекта.",
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
			description: "Когда ветка смерджена, worktree и его ресурсы очищаются автоматически. Никаких осиротевших Docker-ресурсов на вашей машине.",
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

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Docker Backend Dev", benefit: "Каждый worktree получает изолированные порты и свой Docker-стек - без конфликтов." },
			{ role: "Команда с параллельными PR", benefit: "Запускайте несколько feature-веток одновременно без убийства серверов." },
			{ role: "CI/CD-инженер", benefit: "Автоматический lifecycle worktree с безопасной очисткой - без orphaned-ресурсов." },
		],
	},

	seo: {
		title: "forge-worktree - Изоляция веток для AI-разработки | Forge DevKit",
		description: "Управление git worktree без конфликтов портов и с Docker-изоляцией. 3 шаблона для backend и frontend. Основа параллельной AI-разработки с агентами Claude Code.",
	},
};

export const worktreePageConfigI18n: Record<string, ModulePageConfig> = {
	en: worktreePageConfig,
	ru: worktreePageConfigRu,
};
