import type { ModulePageConfig } from "./types";

export const copyPageConfig: ModulePageConfig = {
	slug: "copy",
	name: "forge-copy",
	tagline: "Consistent voice across every surface",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "UI copy is an afterthought",
			evidence: "Developers write microcopy in the IDE. No style guide, no brand voice. Button says 'Submit' because nobody thought about it.",
		},
		{
			pain: "Inconsistent tone across surfaces",
			evidence: "Landing page is friendly, app is robotic, emails are formal. Three voices, one brand.",
		},
		{
			pain: "Error messages that confuse users",
			evidence: "'An unexpected error occurred' - the most common and least helpful message in software.",
		},
	],

	steps: [
		{
			title: "Install",
			description: "One command adds forge-copy to your environment.",
			visual: [{ text: "forge install forge-copy", color: "secondary" }],
		},
		{
			title: "Configure",
			description: "3-gate wizard establishes brand voice, tone rules, and copy principles from your product context.",
		},
		{
			title: "Generate",
			description: "UI microcopy, email templates, error messages, notifications - all in your brand voice.",
			visual: [
				{ prefix: "Mode:", text: " generate / review", color: "text" },
			],
		},
		{
			title: "Review",
			description: "Audit existing copy against principles. Flag inconsistencies and suggest improvements.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Multi-surface copy",
			description: "UI microcopy, transactional emails, push notifications, error messages - all from one source of truth. Change the tone once, every surface updates.",
		},
		{
			icon: "\u25C7",
			title: "Brand voice enforcement",
			description: "Every piece of copy gets checked against your tone, style, and terminology rules. Deviations are flagged with specific fix suggestions.",
		},
		{
			icon: "\u25C7",
			title: "5 psychology biases",
			description: "Framing effects, loss aversion in CTAs, social proof placement - applied to copy decisions.",
		},
		{
			icon: "\u25C7",
			title: "Copy review mode",
			description: "Scans existing copy for tone inconsistencies and brand drift. Flags generic microcopy ('Submit', 'Error') that could reinforce your brand instead.",
		},
	],

	comparison: [
		{
			dimension: "Source of truth",
			them: "Scattered across code, no guide",
			forge: "Centralized principles from brand voice config",
		},
		{
			dimension: "Consistency",
			them: "Depends on which developer wrote it",
			forge: "Same voice across all surfaces",
		},
		{
			dimension: "Quality assurance",
			them: "Nobody reviews copy",
			forge: "Review mode catches drift and inconsistencies",
		},
	],
	comparisonTarget: "Ad-hoc copywriting",

	integrations: [
		{
			module: "forge-marketing",
			description: "Brand voice and positioning guide all generated copy",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Product context informs user-facing terminology and flows",
			href: "/modules/product",
		},
	],

	outputExample: {
		title: "forge:copy audit - Microcopy Review",
		language: "bash",
		code: `<span class="t-purple t-bold">◆</span> <span class="t-white t-bold">Microcopy Audit - acme-web</span>

<span class="t-white t-bold">Surface</span>            <span class="t-white t-bold">Current</span>                    <span class="t-white t-bold">Issue</span>
<span class="t-white">404 page</span>            <span class="t-muted">"Page not found"</span>            <span class="t-yellow">Generic - no brand voice</span>
<span class="t-white">Empty cart</span>          <span class="t-muted">"Your cart is empty"</span>        <span class="t-yellow">No CTA, missed upsell</span>
<span class="t-white">Success toast</span>       <span class="t-muted">"Done!"</span>                     <span class="t-red">Unclear what completed</span>
<span class="t-white">Error modal</span>         <span class="t-muted">"Something went wrong"</span>      <span class="t-red">No recovery action</span>

<span class="t-white t-bold">Suggested:</span>
  <span class="t-green">404:</span> <span class="t-white">"Looks like this page took a wrong turn. Let's get you back."</span>
  <span class="t-green">Cart:</span> <span class="t-white">"Nothing here yet - check out what's trending."</span>

<span class="t-muted">Total:</span> <span class="t-white">4 issues</span> <span class="t-muted">|</span> <span class="t-yellow">2 warnings</span> <span class="t-muted">|</span> <span class="t-red">2 errors</span>`,
	},

	personas: {
		title: "Who is this for",
		items: [
			{ role: "Content Writer", benefit: "Enforce brand voice across all surfaces with automated drift detection." },
			{ role: "Product Manager", benefit: "Get consistent microcopy for UI, emails, and errors without writing it yourself." },
			{ role: "Solo Founder", benefit: "Sound professional across every surface without hiring a copywriter." },
		],
	},

	seo: {
		title: "forge-copy - AI Brand Voice for Your App | Forge DevKit",
		description: "Generate UI microcopy, emails, and error messages in your brand voice. AI catches tone drift across surfaces. Claude Code plugin for consistent product copywriting.",
	},
};

const copyPageConfigRu: ModulePageConfig = {
	slug: "copy",
	name: "forge-copy",
	tagline: "Единый голос на каждой поверхности",
	tier: "Complete",
	tierPrice: "€149",

	problems: [
		{
			pain: "UI-копирайтинг как запоздалая мысль",
			evidence: "Разработчики пишут микрокопи в IDE. Нет стайлгайда, нет голоса бренда. На кнопке 'Submit', потому что никто не подумал.",
		},
		{
			pain: "Неконсистентный тон на разных поверхностях",
			evidence: "Лендинг дружелюбный, приложение роботизированное, имейлы формальные. Три голоса, один бренд.",
		},
		{
			pain: "Сообщения об ошибках, которые путают пользователей",
			evidence: "'Произошла непредвиденная ошибка' - самое частое и наименее полезное сообщение в софте.",
		},
	],

	steps: [
		{
			title: "Установка",
			description: "Одна команда добавляет forge-copy в ваше окружение.",
			visual: copyPageConfig.steps[0].visual,
		},
		{
			title: "Настройка",
			description: "3-гейтовый визард устанавливает голос бренда, правила тона и принципы копирайтинга из продуктового контекста.",
		},
		{
			title: "Генерация",
			description: "UI-микрокопи, шаблоны писем, сообщения об ошибках, уведомления - всё в голосе вашего бренда.",
			visual: copyPageConfig.steps[2].visual,
		},
		{
			title: "Ревью",
			description: "Аудит существующего копирайтинга по принципам. Флаг неконсистентностей и рекомендации улучшений.",
		},
	],

	capabilities: [
		{
			icon: "\u25C7",
			title: "Мульти-поверхностный копирайтинг",
			description: "UI-микрокопи, транзакционные имейлы, push-уведомления, сообщения об ошибках - из одного источника правды. Измените тон один раз - все поверхности обновятся.",
		},
		{
			icon: "\u25C7",
			title: "Контроль голоса бренда",
			description: "Каждый элемент копирайтинга проверяется по правилам тона, стиля и терминологии. Отклонения помечаются с конкретными рекомендациями по исправлению.",
		},
		{
			icon: "\u25C7",
			title: "5 психологических предупреждений",
			description: "Framing effects, loss aversion в CTA, social proof placement - применены к решениям копирайтинга.",
		},
		{
			icon: "\u25C7",
			title: "Режим ревью копирайтинга",
			description: "Сканирует существующий копирайтинг на неконсистентность тона и дрейф бренда. Помечает генерическое микрокопи ('Submit', 'Error'), которое могло бы усиливать ваш бренд.",
		},
	],

	comparison: [
		{
			dimension: "Источник правды",
			them: "Разбросан по коду, нет гайда",
			forge: "Централизованные принципы из конфигурации голоса бренда",
		},
		{
			dimension: "Консистентность",
			them: "Зависит от того, какой разработчик написал",
			forge: "Один голос на всех поверхностях",
		},
		{
			dimension: "Контроль качества",
			them: "Никто не ревьюит копирайтинг",
			forge: "Режим ревью ловит дрейф и неконсистентности",
		},
	],
	comparisonTarget: "Ad-hoc копирайтинг",

	integrations: [
		{
			module: "forge-marketing",
			description: "Голос бренда и позиционирование направляют весь сгенерированный копирайтинг",
			href: "/modules/marketing",
		},
		{
			module: "forge-product",
			description: "Продуктовый контекст информирует пользовательскую терминологию и flow",
			href: "/modules/product",
		},
	],

	personas: {
		title: "Для кого это",
		items: [
			{ role: "Контент-райтер", benefit: "Обеспечьте голос бренда на всех поверхностях с автоматической детекцией дрейфа." },
			{ role: "Продакт-менеджер", benefit: "Получите единое микрокопи для UI, писем и ошибок без собственного написания." },
			{ role: "Соло-основатель", benefit: "Звучите профессионально на каждой поверхности без найма копирайтера." },
		],
	},

	seo: {
		title: "forge-copy - AI-голос бренда в вашем приложении | Forge DevKit",
		description: "Генерация UI-микрокопи, писем и сообщений об ошибках в голосе бренда. AI ловит дрейф тона. Плагин Claude Code для единого копирайтинга продукта.",
	},
};

export const copyPageConfigI18n: Record<string, ModulePageConfig> = {
	en: copyPageConfig,
	ru: copyPageConfigRu,
};
