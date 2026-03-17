export interface Step {
	number: number;
	label: string;
	command: string;
	description: string;
	hint?: string;
	hintHref?: string;
}

export interface PlatformBadge {
	label: string;
}

export interface HowItWorksConfig {
	sectionLabel: string;
	headline: string;
	steps: Step[];
	platformBadges: PlatformBadge[];
	disposableCallout: string;
}

export const howItWorks = {
	sectionLabel: "HOW IT WORKS",
	headline: "One setup. Project-aware AI forever.",
	steps: [
		{
			number: 1,
			label: "INSTALL",
			command: "npm i -g @reumbra/forge",
			description: "Global CLI install",
			hint: "Or use Forge Manager - desktop app for Windows and macOS",
			hintHref: "/docs/getting-started#option-b",
		},
		{
			number: 2,
			label: "ACTIVATE",
			command: "forge activate <license>",
			description: "License key from purchase",
		},
		{
			number: 3,
			label: "SETUP",
			command: "forge setup",
			description: "7-gate wizard analyzes project, generates dev-skills",
		},
		{
			number: 4,
			label: "BUILD",
			command: "/forge:hub \"add payments\"",
			description: "Describe what you want - Hub resolves prerequisites and runs the right pipeline",
		},
	],
	platformBadges: [
		{ label: "Claude Code CLI" },
		{ label: "Claude Desktop" },
		{ label: "Cursor" },
		{ label: "Claude Cowork" },
	],
	disposableCallout:
		"Generated artifacts work independently. Remove the plugin - your rules stay.",
} as const satisfies HowItWorksConfig;

const howItWorksRu: HowItWorksConfig = {
	sectionLabel: "HOW IT WORKS",
	headline: "Один setup. AI знает ваш проект навсегда.",
	steps: [
		{
			number: 1,
			label: "INSTALL",
			command: "npm i -g @reumbra/forge",
			description: "Глобальная установка CLI",
			hint: "Или используйте Forge Manager - десктоп-приложение для Windows и macOS",
			hintHref: "/ru/docs/getting-started#option-b",
		},
		{
			number: 2,
			label: "ACTIVATE",
			command: "forge activate <license>",
			description: "Лицензионный ключ из покупки",
		},
		{
			number: 3,
			label: "SETUP",
			command: "forge setup",
			description: "7-этапный визард анализирует проект, генерирует dev-skills",
		},
		{
			number: 4,
			label: "BUILD",
			command: "/forge:hub \"добавь платежи\"",
			description: "Опишите что хотите - Hub проверит пререквизиты и запустит нужный пайплайн",
		},
	],
	platformBadges: [
		{ label: "Claude Code CLI" },
		{ label: "Claude Desktop" },
		{ label: "Cursor" },
		{ label: "Claude Cowork" },
	],
	disposableCallout:
		"Сгенерированные артефакты работают автономно. Удалите плагин - ваши правила останутся.",
};

export const howItWorksI18n: Record<string, HowItWorksConfig> = { en: howItWorks, ru: howItWorksRu };
