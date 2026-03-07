export interface PricingFeature {
	text: string;
}

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
}

export interface PricingConfig {
	sectionLabel: string;
	headline: string;
	tiers: PricingTier[];
	trustSignals: string[];
	competitorAnchor?: string;
}

export const pricing = {
	sectionLabel: "PRICING",
	headline: "Transparent pricing. No token billing.",
	tiers: [
		{
			id: "core",
			name: "CORE",
			price: 29,
			description: "Foundation for architecture-aware AI development",
			features: [
				"Auto-detects your stack, layers, conventions",
				"50+ quality patterns for AI-generated code",
				"Project-aware dev-skills - one setup, forever",
				"Scoped phases prevent runaway sessions",
			],
			cta: "Get Core",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-core",
			isPopular: false,
			renewalPrice: "€19/yr",
			updatesNote: "Includes 1 year of updates",
		},
		{
			id: "pro",
			name: "PRO",
			price: 79,
			description: "Complete pipeline from design to tested code",
			features: [
				"Everything in Core",
				"Describe features in business language - AI builds from spec",
				"Tests that trace back to requirements, not AI guesswork",
				"Full pipeline: design \u2192 code \u2192 test",
			],
			cta: "Get Pro \u2192",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-pro",
			isPopular: true,
			badge: "Recommended",
			renewalPrice: "€49/yr",
			updatesNote: "Includes 1 year of updates",
		},
		{
			id: "bundle",
			name: "BUNDLE",
			price: 149,
			description: "All 6 modules today. Every new module tomorrow. One purchase.",
			features: [
				"Everything in Pro",
				"Task tracker sync - GitHub, Linear, ClickUp, Jira, Notion",
				"forge-autopilot - parallel agent orchestration",
				"forge-worktree - git worktree lifecycle",
				"Every future module included",
			],
			cta: "Get Bundle",
			// TODO: Replace with real LemonSqueezy product URL
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-bundle",
			isPopular: false,
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
	tiers: [
		{
			id: "core",
			name: "CORE",
			price: 29,
			description: "Основа для AI-разработки с пониманием архитектуры",
			features: [
				"Автоматически определяет стек, слои, конвенции",
				"50+ паттернов качества для AI-генерированного кода",
				"Dev-скиллы с пониманием проекта - один раз настроил, работают всегда",
				"Контролируемые фазы предотвращают бесконтрольные сессии",
			],
			cta: "Получить Core",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-core",
			isPopular: false,
			renewalPrice: "\u20AC19/yr",
			updatesNote: "Включает 1 год обновлений",
		},
		{
			id: "pro",
			name: "PRO",
			price: 79,
			description: "Полный pipeline от дизайна до протестированного кода",
			features: [
				"Все из Core",
				"Описывайте фичи бизнес-языком - AI строит по спецификации",
				"Тесты, привязанные к требованиям, а не угадывание AI",
				"Полный pipeline: дизайн \u2192 код \u2192 тесты",
			],
			cta: "Получить Pro \u2192",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-pro",
			isPopular: true,
			badge: "Рекомендуем",
			renewalPrice: "\u20AC49/yr",
			updatesNote: "Включает 1 год обновлений",
		},
		{
			id: "bundle",
			name: "BUNDLE",
			price: 149,
			description: "Все 6 модулей сейчас. Каждый новый модуль потом. Одна покупка.",
			features: [
				"Все из Pro",
				"Синхронизация с трекерами - GitHub, Linear, ClickUp, Jira, Notion",
				"forge-autopilot - параллельная оркестрация агентов",
				"forge-worktree - lifecycle git worktree",
				"Каждый будущий модуль включен",
			],
			cta: "Получить Bundle",
			checkoutUrl: "https://reumbra.lemonsqueezy.com/buy/forge-bundle",
			isPopular: false,
			renewalPrice: "\u20AC89/yr",
			updatesNote: "Включает 1 год обновлений",
		},
	],
	trustSignals: [
		"Однократная покупка. Ваши артефакты остаются навсегда.",
		"Включает 1 год обновлений. Продление по желанию, по сниженной цене.",
		"Без оплаты за токены. Без лимитов. Без неожиданных счетов.",
	],
	competitorAnchor: "Devin: \u20AC240/год обязательно. Cursor Pro: \u20AC240/год. Forge: от \u20AC29 однократно.",
};

export const pricingI18n: Record<string, PricingConfig> = { en: pricing, ru: pricingRu };
