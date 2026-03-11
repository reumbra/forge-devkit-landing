import type { ModulePageConfig } from "./types";

export const corePageConfig: ModulePageConfig = {
	slug: "core",
	name: "forge-core",
	tagline: "Architecture-aware guardrails from your codebase",
	tier: "Starter",
	tierPrice: "€29",

	problems: [
		{
			pain: "AI forgets your architecture every session",
			evidence:
				"#1 developer complaint - lack of context is the real problem, not lack of capability.",
		},
		{
			pain: "Generic rules miss your patterns",
			evidence:
				"Cursor Rules generators produce textbook defaults. They don't know your DDD layers or CQRS boundaries.",
		},
		{
			pain: "Context rot compounds across sessions",
			evidence:
				"Each new chat starts from zero. Yesterday's guardrails are gone. AI rewrites what it wrote before.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-core to your Claude Code environment.",
			visual: [{ text: "npx @reumbra/forge install forge-core", color: "secondary" }],
		},
		{
			title: "Audit",
			description:
				"7-gate wizard scans your repo: stack, layers, patterns, conflict zones, parallel readiness.",
			visual: [
				{ prefix: "Gate 1:", text: " Architecture analysis", color: "text" },
				{ prefix: "Gate 2:", text: " Quality pattern detection", color: "text" },
				{ prefix: "...", text: "", color: "muted" },
				{ prefix: "Gate 7:", text: " Finalize & generate", color: "text" },
			],
		},
		{
			title: "Generate",
			description:
				"Produces project-specific CLAUDE.md, dev-skills, quality patterns, and pipeline phases.",
		},
		{
			title: "Develop",
			description:
				"AI agents use generated guardrails automatically. Upgrade command syncs when your architecture evolves.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "50+ quality patterns",
			description:
				"Architecture-specific rules for DDD, CQRS, Clean Architecture, microservices, and more.",
		},
		{
			icon: "\u25C7",
			title: "15 rationalization detectors",
			description:
				"Catches when AI tries to skip tests, bypass types, or take shortcuts.",
		},
		{
			icon: "\u25C7",
			title: "4 execution modes",
			description:
				"Economy (~60% fewer tokens), balanced, quality (full pipeline), manual. Plus 3 strategies: sequential, parallel, patch. You decide how thorough each task needs to be.",
		},
		{
			icon: "\u25C7",
			title: "7-gate progressive wizard",
			description:
				"Each gate saves state. Resume anytime. No information overload.",
		},
		{
			icon: "\u25C7",
			title: "Upgrade command",
			description:
				"Architecture changed? One command regenerates all artifacts. Version headers track what's yours vs generated.",
		},
		{
			icon: "\u25C7",
			title: "Cross-repo support",
			description:
				"Monorepos, multi-repo setups, shared architectures - all detected and handled.",
		},
	],

	comparison: [
		{
			dimension: "Rule creation",
			them: "Manual or template generator",
			forge: "Auto-generated from architecture audit",
		},
		{
			dimension: "Architecture awareness",
			them: "None - you specify stack manually",
			forge: "Detects stack, layers, patterns (DDD, CQRS)",
		},
		{
			dimension: "Scope",
			them: "Single rules file",
			forge: "Full pipeline: rules + product + tests + tasks",
		},
		{
			dimension: "Updates",
			them: "Manual maintenance",
			forge: "Upgrade command regenerates",
		},
		{
			dimension: "Platform",
			them: "Cursor only",
			forge: "Claude Code, Cursor, Windsurf, any AI agent",
		},
	],
	comparisonTarget: "Cursor Rules",

	integrations: [
		{
			module: "forge-product",
			description: "Product specs reference architecture guardrails",
			href: "/modules/product",
		},
		{
			module: "forge-qa",
			description: "Test generation uses architecture data for smart coverage",
			href: "/modules/qa",
		},
		{
			module: "forge-autopilot",
			description: "Conflict detection uses architecture map for wave planning",
			href: "/modules/autopilot",
		},
	],
	relatedComparisons: [
		{ label: "Forge vs Cursor Rules", href: "/vs/cursor-rules" },
		{ label: "Forge vs Manual CLAUDE.md", href: "/vs/claude-md" },
		{ label: "Forge vs Devin", href: "/vs/devin" },
	],
	relatedComparisonsHeading: "See how Forge compares",

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Solo Developer", benefit: "Stop re-explaining your stack every session - guardrails persist automatically." },
			{ role: "Tech Lead", benefit: "Enforce architecture patterns across the team without manual reviews." },
			{ role: "Agency Developer", benefit: "Spin up guardrails for each client project in minutes, not hours." },
		],
	},

	outputExample: {
		title: "forge:setup - Gate 1: Architecture Audit",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Gate 1: Architecture Audit - Results</span>

<span class="t-muted">Stack:</span>  <span class="t-white">NestJS 11.0 + TypeScript 5.8 + Prisma 6.4</span>
<span class="t-muted">Build:</span>  <span class="t-white">SWC</span> <span class="t-muted">|</span> <span class="t-muted">Linter:</span> <span class="t-white">ESLint + Prettier</span>
<span class="t-muted">Arch:</span>   <span class="t-cyan">DDD (3 bounded contexts)</span>

<span class="t-white t-bold">Layers:</span>
  <span class="t-muted">modules:</span>  <span class="t-white">src/modules/</span>   <span class="t-muted">(24 files) - domain logic, CQRS handlers</span>
  <span class="t-muted">infra:</span>    <span class="t-white">src/infra/</span>     <span class="t-muted">(12 files) - Prisma repos, external APIs</span>
  <span class="t-muted">shared:</span>   <span class="t-white">src/shared/</span>    <span class="t-muted">(8 files) - guards, pipes, decorators</span>

<span class="t-muted">Conflict zones:</span>   <span class="t-green">none (0 files)</span>
<span class="t-muted">Parallel readiness:</span> <span class="t-green t-bold">9/10 - highly parallel</span>`,
	},

	seo: {
		title: "forge-core - AI Guardrails for Your Stack | Forge DevKit",
		description:
			"Generate CLAUDE.md, quality patterns, and dev-skills tuned to your architecture. 7-gate audit, 50+ patterns. The Claude Code plugin that stops AI drift.",
	},
};

const corePageConfigRu: ModulePageConfig = {
	slug: "core",
	name: "forge-core",
	tagline: "Гайдрейлы из вашей кодовой базы с пониманием архитектуры",
	tier: "Starter",
	tierPrice: "€29",

	problems: [
		{
			pain: "AI забывает вашу архитектуру каждую сессию",
			evidence:
				"Жалоба #1 у разработчиков - проблема не в возможностях AI, а в отсутствии контекста.",
		},
		{
			pain: "Генерические правила не учитывают ваши паттерны",
			evidence:
				"Генераторы Cursor Rules дают учебниковые дефолты. Они не знают ваши DDD-слои и границы CQRS.",
		},
		{
			pain: "Контекст деградирует от сессии к сессии",
			evidence:
				"Каждый новый чат начинается с нуля. Вчерашние гайдрейлы исчезли. AI переписывает то, что писал раньше.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-core в ваше окружение Claude Code.",
			visual: corePageConfig.steps[0].visual,
		},
		{
			title: "Аудит",
			description:
				"7-гейтовый визард сканирует репозиторий: стек, слои, паттерны, зоны конфликтов, готовность к параллелизму.",
			visual: corePageConfig.steps[1].visual,
		},
		{
			title: "Генерация",
			description:
				"Создаёт проектный CLAUDE.md, dev-скиллы, паттерны качества и фазы pipeline.",
		},
		{
			title: "Разработка",
			description:
				"AI-агенты автоматически используют сгенерированные гайдрейлы. Команда upgrade синхронизирует при изменении архитектуры.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "50+ паттернов качества",
			description:
				"Правила под архитектуру: DDD, CQRS, Clean Architecture, микросервисы и другие.",
		},
		{
			icon: "\u25C7",
			title: "15 детекторов рационализации",
			description:
				"Ловит моменты, когда AI пытается пропустить тесты, обойти типы или срезать углы.",
		},
		{
			icon: "\u25C7",
			title: "4 режима выполнения",
			description:
				"Economy (~60% меньше токенов), balanced, quality (полный pipeline), manual. Плюс 3 стратегии: sequential, parallel, patch. Вы решаете, насколько тщательно обрабатывать каждую задачу.",
		},
		{
			icon: "\u25C7",
			title: "7-гейтовый визард",
			description:
				"Каждый гейт сохраняет состояние. Можно продолжить в любой момент. Без информационной перегрузки.",
		},
		{
			icon: "\u25C7",
			title: "Команда upgrade",
			description:
				"Архитектура изменилась? Одна команда перегенерирует все артефакты. Заголовки версий отличают ваше от сгенерированного.",
		},
		{
			icon: "\u25C7",
			title: "Поддержка cross-repo",
			description:
				"Монорепо, мульти-репо, общие архитектуры - всё детектится и обрабатывается.",
		},
	],

	comparison: [
		{
			dimension: "Создание правил",
			them: "Вручную или через генератор шаблонов",
			forge: "Автогенерация из аудита архитектуры",
		},
		{
			dimension: "Понимание архитектуры",
			them: "Нет - стек указываете вручную",
			forge: "Детектит стек, слои, паттерны (DDD, CQRS)",
		},
		{
			dimension: "Охват",
			them: "Один файл правил",
			forge: "Полный pipeline: правила + продукт + тесты + задачи",
		},
		{
			dimension: "Обновления",
			them: "Ручное обслуживание",
			forge: "Команда upgrade перегенерирует",
		},
		{
			dimension: "Платформа",
			them: "Только Cursor",
			forge: "Claude Code, Cursor, Windsurf, любой AI-агент",
		},
	],
	comparisonTarget: "Cursor Rules",

	integrations: [
		{
			module: "forge-product",
			description: "Продуктовые спеки используют архитектурные гайдрейлы",
			href: "/modules/product",
		},
		{
			module: "forge-qa",
			description: "Генерация тестов использует данные архитектуры для умного покрытия",
			href: "/modules/qa",
		},
		{
			module: "forge-autopilot",
			description: "Детекция конфликтов использует карту архитектуры для планирования волн",
			href: "/modules/autopilot",
		},
	],
	relatedComparisons: [
		{ label: "Forge vs Cursor Rules", href: "/vs/cursor-rules" },
		{ label: "Forge vs ручной CLAUDE.md", href: "/vs/claude-md" },
		{ label: "Forge vs Devin", href: "/vs/devin" },
	],
	relatedComparisonsHeading: "Сравнения",

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Соло-разработчик", benefit: "Перестаньте объяснять свой стек каждую сессию - гайдрейлы сохраняются автоматически." },
			{ role: "Тех-лид", benefit: "Обеспечьте архитектурные паттерны по всей команде без ручных ревью." },
			{ role: "Агентство", benefit: "Поднимайте гайдрейлы для каждого клиентского проекта за минуты, а не часы." },
		],
	},

	seo: {
		title: "forge-core - AI-гайдрейлы под ваш стек | Forge DevKit",
		description:
			"Генерация CLAUDE.md, паттернов качества и dev-скиллов под вашу архитектуру. 7-гейтовый аудит, 50+ паттернов. Плагин Claude Code против дрейфа AI.",
	},
};

export const corePageConfigI18n: Record<string, ModulePageConfig> = {
	en: corePageConfig,
	ru: corePageConfigRu,
};
