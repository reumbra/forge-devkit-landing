export interface Step {
	number: number;
	label: string;
	command: string;
	description: string;
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
			label: "CODE",
			command: "Use your AI normally",
			description: "Claude Code / Cursor / Cowork detect .claude/ automatically",
		},
	],
	platformBadges: [
		{ label: "Claude Code CLI" },
		{ label: "Claude Desktop" },
		{ label: "Cursor" },
		{ label: "Claude Cowork" },
	],
	disposableCallout:
		"Generated artifacts work independently. Remove the plugin \u2014 your rules stay.",
} as const satisfies HowItWorksConfig;
