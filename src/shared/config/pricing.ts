export interface PricingFeature {
	text: string;
}

// Updated 2026-03-08: device limits per tier (Starter 2, Pro 3, Complete 5). Bundle renamed to Complete.
export interface PricingTier {
	id: string;
	name: string;
	price: number;
	description: string;
	features: string[];
	cta: string;
	checkoutUrl: string;
	isPopular: boolean;
	badge?: string;
	renewalPrice?: string;
	updatesNote?: string;
	persona?: string;
	devices?: number;
}

export interface PricingConfig {
	sectionLabel: string;
	headline: string;
	guaranteeBadge: string;
	tiers: PricingTier[];
	trustSignals: string[];
	competitorAnchor?: string;
}

export const pricing = {
	sectionLabel: "PRICING",
	headline: "Transparent pricing. No token billing.",
	guaranteeBadge: "14-day money-back guarantee",
	tiers: [
		{
			id: "core",
			name: "STARTER",
			price: 29,
			persona: "For solo developers",
			description: "Stop re-explaining your stack. One setup, forever.",
			features: [
				"7-gate audit detects your stack, layers, conventions",
				"50+ quality patterns for AI-generated code",
				"Project-aware dev-skills - one setup, forever",
				"Scoped phases prevent runaway sessions",
			],
			cta: "Get Starter",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/checkout/buy/6cf4f607-1a5c-4aca-9e10-c20c01b7741c",
			isPopular: false,
			devices: 2,
			renewalPrice: "€19/yr",
			updatesNote: "Includes 1 year of updates",
		},
		{
			id: "pro",
			name: "PRO",
			price: 79,
			persona: "For professional developers",
			description: "Full pipeline: Design \u2192 Code \u2192 Test \u2192 Track",
			features: [
				"Everything in Starter",
				"Describe features in business language - AI builds from spec",
				"Tests traced to requirements, not AI guesswork",
				"Prompt engineering frameworks - consistent AI output across sessions",
				"6 modules: core, product, qa, tracker, prompts, worktree",
			],
			cta: "Get Pro \u2192",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/checkout/buy/635f37e6-0a4b-4a3a-b373-b8d8875d4c77",
			isPopular: true,
			badge: "Recommended",
			devices: 3,
			renewalPrice: "€49/yr",
			updatesNote: "Includes 1 year of updates",
		},
		{
			id: "bundle",
			name: "COMPLETE",
			price: 149,
			persona: "For developer-founders",
			description: "Agent Teams. Zero conflicts. Full automation from discovery to growth.",
			features: [
				"Everything in Pro",
				"forge-autopilot - Agent Teams on your backlog, zero merge conflicts",
				"8 product advisory modules - from discovery to growth",
				"Every future module included",
			],
			cta: "Get Complete",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/checkout/buy/80805d65-8b20-431b-bdff-ec32e2731bdb",
			isPopular: false,
			devices: 5,
			renewalPrice: "€89/yr",
			updatesNote: "Includes 1 year of updates",
		},
	],
	trustSignals: [
		"One-time purchase. Your artifacts stay forever.",
		"Includes 1 year of updates. Renewal optional at reduced price.",
		"No per-token charges. No usage limits. No surprise bills.",
	],
	competitorAnchor: "Devin: €240/yr mandatory. Cursor Pro: €240/yr. Forge: from €29 once.",
} as const satisfies PricingConfig;

const pricingRu: PricingConfig = {
	sectionLabel: "PRICING",
	headline: "Прозрачные цены. Без оплаты за токены.",
	guaranteeBadge: "14-дневная гарантия возврата",
	tiers: [
		{
			id: "core",
			name: "STARTER",
			price: 29,
			persona: "Для инди-разработчиков",
			description: "Хватит объяснять стек заново. Одна настройка - навсегда.",
			features: [
				"7-gate аудит определяет стек, слои, конвенции",
				"50+ паттернов качества для AI-генерированного кода",
				"Dev-скиллы с пониманием проекта - один раз настроил, работают всегда",
				"Контролируемые фазы предотвращают бесконтрольные сессии",
			],
			cta: "Получить Starter",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/checkout/buy/6cf4f607-1a5c-4aca-9e10-c20c01b7741c",
			isPopular: false,
			devices: 2,
			renewalPrice: "\u20AC19/yr",
			updatesNote: "Включает 1 год обновлений",
		},
		{
			id: "pro",
			name: "PRO",
			price: 79,
			persona: "Для профессиональных разработчиков",
			description: "Полный pipeline: Дизайн \u2192 Код \u2192 Тесты \u2192 Трекинг",
			features: [
				"Все из Starter",
				"Описывайте фичи бизнес-языком - AI строит по спецификации",
				"Тесты, привязанные к требованиям, а не угадывание AI",
				"Фреймворки промпт-инжиниринга - стабильный AI-вывод между сессиями",
				"6 модулей: core, product, qa, tracker, prompts, worktree",
			],
			cta: "Получить Pro \u2192",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/checkout/buy/635f37e6-0a4b-4a3a-b373-b8d8875d4c77",
			isPopular: true,
			badge: "Рекомендуем",
			devices: 3,
			renewalPrice: "\u20AC49/yr",
			updatesNote: "Включает 1 год обновлений",
		},
		{
			id: "bundle",
			name: "COMPLETE",
			price: 149,
			persona: "Для разработчиков-фаундеров",
			description: "Agent Teams. Ноль конфликтов. Полная автоматизация от discovery до growth.",
			features: [
				"Все из Pro",
				"forge-autopilot - Agent Teams на вашем бэклоге, ноль merge-конфликтов",
				"8 продуктовых advisory-модулей - от discovery до growth",
				"Каждый будущий модуль включен",
			],
			cta: "Получить Complete",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/checkout/buy/80805d65-8b20-431b-bdff-ec32e2731bdb",
			isPopular: false,
			devices: 5,
			renewalPrice: "\u20AC89/yr",
			updatesNote: "Включает 1 год обновлений",
		},
	],
	trustSignals: [
		"Разовая покупка. Ваши артефакты остаются навсегда.",
		"Включает 1 год обновлений. Продление по желанию, по сниженной цене.",
		"Без оплаты за токены. Без лимитов. Без неожиданных счетов.",
	],
	competitorAnchor: "Devin: \u20AC240/год обязательно. Cursor Pro: \u20AC240/год. Forge: от \u20AC29 однократно.",
};

export const pricingI18n: Record<string, PricingConfig> = { en: pricing, ru: pricingRu };
