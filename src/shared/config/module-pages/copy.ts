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
			description: "UI microcopy, transactional emails, push notifications, error messages - all from one source of truth.",
		},
		{
			icon: "\u25C7",
			title: "Brand voice enforcement",
			description: "Every piece of copy checked against your established tone, style, and terminology rules.",
		},
		{
			icon: "\u25C7",
			title: "5 psychology biases",
			description: "Framing effects, loss aversion in CTAs, social proof placement - applied to copy decisions.",
		},
		{
			icon: "\u25C7",
			title: "Copy review mode",
			description: "Audit existing copy for inconsistencies, brand drift, and missed opportunities.",
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

	seo: {
		title: "forge-copy - Consistent Voice Across Every Surface | Forge DevKit",
		description: "UI microcopy, emails, error messages - all in your brand voice. Copy review catches drift. Reads marketing positioning for consistent messaging.",
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
			description: "UI-микрокопи, транзакционные имейлы, push-уведомления, сообщения об ошибках - из одного источника правды.",
		},
		{
			icon: "\u25C7",
			title: "Контроль голоса бренда",
			description: "Каждый элемент копирайтинга проверяется по установленным правилам тона, стиля и терминологии.",
		},
		{
			icon: "\u25C7",
			title: "5 психологических предупреждений",
			description: "Framing effects, loss aversion в CTA, social proof placement - применены к решениям копирайтинга.",
		},
		{
			icon: "\u25C7",
			title: "Режим ревью копирайтинга",
			description: "Аудит существующего копирайтинга на неконсистентности, дрейф бренда и упущенные возможности.",
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

	seo: {
		title: "forge-copy - Единый голос на каждой поверхности | Forge DevKit",
		description: "UI-микрокопи, имейлы, сообщения об ошибках - в голосе вашего бренда. Ревью ловит дрейф. Читает маркетинговое позиционирование.",
	},
};

export const copyPageConfigI18n: Record<string, ModulePageConfig> = {
	en: copyPageConfig,
	ru: copyPageConfigRu,
};
