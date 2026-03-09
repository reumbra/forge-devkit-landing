import type { ModulePageConfig } from "./types";

export const discoveryPageConfig: ModulePageConfig = {
	slug: "discovery",
	name: "forge-discovery",
	tagline: "Validate before you build",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Building features nobody asked for",
			evidence: "Pendo/ProductPlan data shows the average SaaS app has 45% of features never clicked. Discovery prevents building what nobody asked for.",
		},
		{
			pain: "Assumptions disguised as requirements",
			evidence: "Teams ship based on gut feelings. No evidence, no interviews, no validation.",
		},
		{
			pain: "Discovery artifacts disconnect from development",
			evidence: "Research lives in Google Docs. Development starts from scratch. Insights never reach the codebase.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-discovery to your environment.",
			visual: [{ text: "forge install forge-discovery", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard detects your product type and recommends discovery methods.",
		},
		{
			title: "Discover",
			description: "Guided ideation, competitive research, problem validation, and interview synthesis.",
			visual: [
				{ prefix: "Mode:", text: " ideate / research / validate / interview", color: "text" },
			],
		},
		{
			title: "Feed downstream",
			description: "Discovery artifacts flow into forge-marketing and forge-product automatically.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 discovery modes",
			description: "Ideate (diverge), research (competitive landscape), validate (evidence-test assumptions), interview (extract user patterns). Each output feeds the next.",
		},
		{
			icon: "\u25C7",
			title: "7 psychology biases",
			description: "Contextual warnings at decision points. Prevents confirmation bias, survivorship bias, and more.",
		},
		{
			icon: "\u25C7",
			title: "Competitive landscape mapping",
			description: "Structured competitor analysis with positioning gaps and opportunity identification - so you build differentiators, not clones.",
		},
		{
			icon: "\u25C7",
			title: "Interview synthesis",
			description: "Extract patterns from user interviews. Evidence-based insights, not cherry-picked quotes.",
		},
	],

	comparison: [
		{
			dimension: "Structure",
			them: "Freeform notes in Google Docs",
			forge: "Structured artifacts with downstream connections",
		},
		{
			dimension: "Bias protection",
			them: "None - you bring your own biases",
			forge: "7 cognitive bias detectors at decision points",
		},
		{
			dimension: "Development connection",
			them: "Manual translation to specs",
			forge: "Artifacts feed forge-marketing and forge-product directly",
		},
	],
	comparisonTarget: "Manual product discovery",

	integrations: [
		{
			module: "forge-marketing",
			description: "Discovery insights feed positioning and go-to-market strategy",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Validated problems become product specs and user flows",
			href: "/modules/product",
		},
	],

	outputExample: {
		title: "forge:discovery validate - Hypothesis",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Validation Hypothesis #3</span>

<span class="t-white t-bold">Belief:</span>  <span class="t-white">Freelancers will pay for automated invoice reminders</span>
<span class="t-white t-bold">Signal:</span>  <span class="t-cyan">70% of survey respondents chase payments manually</span>

<span class="t-white t-bold">Test Design:</span>
  <span class="t-muted">Method:</span>    <span class="t-white">Fake-door test on taskflow-app pricing page</span>
  <span class="t-muted">Audience:</span>  <span class="t-white">200 existing free-tier users</span>
  <span class="t-muted">Duration:</span>  <span class="t-white">7 days</span>
  <span class="t-muted">Pass if:</span>   <span class="t-green">>= 15% click "Upgrade for reminders"</span>
  <span class="t-muted">Fail if:</span>   <span class="t-red">< 5% click rate</span>

<span class="t-yellow t-bold">Bias check:</span> <span class="t-yellow">Confirmation bias - also track "not interested" reasons</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Founder", benefit: "Validate product ideas with structured research before committing development resources." },
			{ role: "Product Manager", benefit: "Run evidence-based discovery with bias protection instead of gut-feel prioritization." },
			{ role: "UX Researcher", benefit: "Synthesize interview patterns and competitive insights into actionable product specs." },
		],
	},

	seo: {
		title: "forge-discovery - AI Product Validation | Forge DevKit",
		description: "Validate product ideas before writing code. AI-guided ideation, competitive research, and interview synthesis. Claude Code plugin with 7 cognitive bias detectors.",
	},
};

const discoveryPageConfigRu: ModulePageConfig = {
	slug: "discovery",
	name: "forge-discovery",
	tagline: "Валидируй прежде чем строить",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "Строите фичи, которые никто не просил",
			evidence: "По данным Pendo/ProductPlan, в среднем SaaS-приложении 45% фич ни разу не кликают. Discovery предотвращает разработку того, что никто не просил.",
		},
		{
			pain: "Предположения маскируются под требования",
			evidence: "Команды запускают на основе интуиции. Без доказательств, без интервью, без валидации.",
		},
		{
			pain: "Артефакты discovery не связаны с разработкой",
			evidence: "Исследования живут в Google Docs. Разработка начинается с нуля. Инсайты не доходят до кодовой базы.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-discovery в ваше окружение.",
			visual: discoveryPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард определяет тип продукта и рекомендует методы discovery.",
		},
		{
			title: "Исследование",
			description: "Управляемая идеация, конкурентный анализ, валидация проблем и синтез интервью.",
			visual: discoveryPageConfig.steps[2].visual,
		},
		{
			title: "Передача вниз по цепочке",
			description: "Артефакты discovery автоматически передаются в forge-marketing и forge-product.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "4 режима discovery",
			description: "Идеация (дивергенция), исследование (конкурентный ландшафт), валидация (проверка гипотез доказательствами), интервью (извлечение паттернов). Выход каждого режима питает следующий.",
		},
		{
			icon: "\u25C7",
			title: "7 когнитивных предупреждений",
			description: "Контекстные предупреждения в точках принятия решений. Защита от confirmation bias, survivorship bias и других.",
		},
		{
			icon: "\u25C7",
			title: "Карта конкурентного ландшафта",
			description: "Структурированный анализ конкурентов с выявлением позиционных пробелов и возможностей - чтобы вы создавали отличия, а не клоны.",
		},
		{
			icon: "\u25C7",
			title: "Синтез интервью",
			description: "Извлечение паттернов из пользовательских интервью. Доказательные инсайты, не cherry-picked цитаты.",
		},
	],

	comparison: [
		{
			dimension: "Структура",
			them: "Свободные заметки в Google Docs",
			forge: "Структурированные артефакты с downstream-связями",
		},
		{
			dimension: "Защита от bias",
			them: "Нет - вы приносите свои предубеждения",
			forge: "7 детекторов когнитивных искажений в точках решений",
		},
		{
			dimension: "Связь с разработкой",
			them: "Ручная трансляция в спеки",
			forge: "Артефакты передаются в forge-marketing и forge-product напрямую",
		},
	],
	comparisonTarget: "Ручной product discovery",

	integrations: [
		{
			module: "forge-marketing",
			description: "Инсайты discovery питают позиционирование и GTM-стратегию",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Валидированные проблемы становятся продуктовыми спеками и user flow",
			href: "/modules/product",
		},
	],

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Основатель", benefit: "Валидируйте идеи продукта структурированным исследованием до вложения ресурсов в разработку." },
			{ role: "Продакт-менеджер", benefit: "Проводите evidence-based discovery с защитой от bias вместо приоритизации по интуиции." },
			{ role: "UX-ресерчер", benefit: "Синтезируйте паттерны из интервью и конкурентные инсайты в actionable продуктовые спеки." },
		],
	},

	seo: {
		title: "forge-discovery - AI-валидация продуктовых идей | Forge DevKit",
		description: "Валидируйте идеи до написания кода. AI-идеация, конкурентный анализ и синтез интервью. Плагин Claude Code с 7 детекторами когнитивных искажений.",
	},
};

export const discoveryPageConfigI18n: Record<string, ModulePageConfig> = {
	en: discoveryPageConfig,
	ru: discoveryPageConfigRu,
};
