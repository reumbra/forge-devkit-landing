export interface FooterLink {
	label: string;
	href: string;
	external?: boolean;
	disabled?: boolean;
	action?: string;
}

export interface FooterColumn {
	title: string;
	links: FooterLink[];
}

export interface FooterConfig {
	logo: string;
	companyName: string;
	companyTagline: string;
	columns: FooterColumn[];
	copyright: string;
	finalCta: {
		headline: string;
		subheadline: string;
		buttonLabel: string;
		buttonHref: string;
		trustLine: string;
	};
}

export const footer = {
	logo: "Forge DevKit",
	companyName: "Reumbra",
	companyTagline: "by Reumbra",
	columns: [
		{
			title: "Product",
			links: [
				{ label: "Pricing", href: "/pricing" },
				{ label: "Getting Started", href: "/docs/getting-started" },
				{ label: "Usage Guide", href: "/docs/usage-guide" },
				{ label: "Changelog", href: "#", disabled: true },
			],
		},
		{
			title: "Modules",
			links: [
				{ label: "forge-core", href: "/modules/core" },
				{ label: "forge-product", href: "/modules/product" },
				{ label: "forge-qa", href: "/modules/qa" },
				{ label: "forge-tracker", href: "/modules/tracker" },
				{ label: "forge-autopilot", href: "/modules/autopilot" },
				{ label: "forge-worktree", href: "/modules/worktree" },
				{ label: "All 15 modules", href: "/modules" },
			],
		},
		{
			title: "Compare",
			links: [
				{ label: "vs Cursor Rules", href: "/vs/cursor-rules" },
				{ label: "vs Devin", href: "/vs/devin" },
				{ label: "vs CLAUDE.md", href: "/vs/claude-md" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Privacy", href: "/privacy" },
				{ label: "Terms", href: "/terms" },
				{ label: "Refund", href: "/refund" },
				{ label: "Cookie Settings", href: "#", action: "zaraz-consent" },
			],
		},
	],
	copyright: "\u00a9 2026 Reumbra O\u00dc",
	finalCta: {
		headline: "Your AI should respect your architecture.",
		subheadline: "50+ guardrails. 7-gate audit. Tests from requirements. One setup.",
		buttonLabel: "Get Forge - from \u20ac29 \u2192",
		buttonHref: "/pricing",
		trustLine: "One-time purchase. 14-day money-back guarantee.",
	},
} as const satisfies FooterConfig;

const footerRu: FooterConfig = {
	logo: "Forge DevKit",
	companyName: "Reumbra",
	companyTagline: "by Reumbra",
	columns: [
		{
			title: "Продукт",
			links: [
				{ label: "Цены", href: "/pricing" },
				{ label: "Начало работы", href: "/docs/getting-started" },
				{ label: "Руководство", href: "/docs/usage-guide" },
				{ label: "Changelog", href: "#", disabled: true },
			],
		},
		{
			title: "Модули",
			links: [
				{ label: "forge-core", href: "/modules/core" },
				{ label: "forge-product", href: "/modules/product" },
				{ label: "forge-qa", href: "/modules/qa" },
				{ label: "forge-tracker", href: "/modules/tracker" },
				{ label: "forge-autopilot", href: "/modules/autopilot" },
				{ label: "forge-worktree", href: "/modules/worktree" },
				{ label: "Все 15 модулей", href: "/modules" },
			],
		},
		{
			title: "Сравнение",
			links: [
				{ label: "vs Cursor Rules", href: "/vs/cursor-rules" },
				{ label: "vs Devin", href: "/vs/devin" },
				{ label: "vs CLAUDE.md", href: "/vs/claude-md" },
			],
		},
		{
			title: "Правовая информация",
			links: [
				{ label: "Конфиденциальность", href: "/privacy" },
				{ label: "Условия", href: "/terms" },
				{ label: "Возврат", href: "/refund" },
				{ label: "Настройки cookie", href: "#", action: "zaraz-consent" },
			],
		},
	],
	copyright: "\u00a9 2026 Reumbra O\u00dc",
	finalCta: {
		headline: "Ваш AI должен уважать вашу архитектуру.",
		subheadline: "50+ паттернов качества. 7-этапный аудит. Тесты из требований. Одна настройка.",
		buttonLabel: "Получить Forge - от \u20ac29 \u2192",
		buttonHref: "/pricing",
		trustLine: "Разовая покупка. 14-дневная гарантия возврата.",
	},
};

export const footerI18n: Record<string, FooterConfig> = { en: footer, ru: footerRu };

type FinalCtaConfig = FooterConfig["finalCta"];
export const finalCtaI18n: Record<string, FinalCtaConfig> = { en: footer.finalCta, ru: footerRu.finalCta };
