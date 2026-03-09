export interface JourneyModule {
	name: string;
	slug: string;
	badge?: string; // e.g. "hub", "foundation"
}

export interface JourneyZone {
	id: string;
	title: string;
	persona: string;
	description: string;
	color: string; // hex for border/bg tints
	modules: JourneyModule[];
}

export interface JourneyConfig {
	sectionLabel: string;
	headline: string;
	subheadline: string;
	zones: JourneyZone[];
	crossCutting: {
		module: string;
		slug: string;
		description: string;
	};
}

export const journey: JourneyConfig = {
	sectionLabel: "THE JOURNEY",
	headline: "From idea validation to growth loops",
	subheadline:
		"15 modules. 4 stages. Each maps to who uses it and when.",
	zones: [
		{
			id: "validate",
			title: "VALIDATE",
			persona: "Founder / PM",
			description: "Validate before you build",
			color: "#9A75EA",
			modules: [
				{ name: "forge-discovery", slug: "discovery" },
				{ name: "forge-marketing", slug: "marketing" },
				{ name: "forge-product", slug: "product", badge: "hub" },
			],
		},
		{
			id: "build",
			title: "BUILD",
			persona: "Developer",
			description: "Build with guardrails",
			color: "#3B82F6",
			modules: [
				{ name: "forge-core", slug: "core", badge: "foundation" },
				{ name: "forge-qa", slug: "qa" },
				{ name: "forge-tracker", slug: "tracker" },
			],
		},
		{
			id: "scale",
			title: "SCALE",
			persona: "Team Lead",
			description: "Parallel agents, zero conflicts",
			color: "#10B981",
			modules: [
				{ name: "forge-autopilot", slug: "autopilot" },
				{ name: "forge-worktree", slug: "worktree" },
			],
		},
		{
			id: "grow",
			title: "GROW",
			persona: "Growth / Product",
			description: "Measure and iterate",
			color: "#F59E0B",
			modules: [
				{ name: "forge-analytics", slug: "analytics" },
				{ name: "forge-onboarding", slug: "onboarding" },
				{ name: "forge-copy", slug: "copy" },
				{ name: "forge-seo", slug: "seo" },
				{ name: "forge-growth", slug: "growth" },
				{ name: "forge-ab", slug: "ab" },
			],
		},
	],
	crossCutting: {
		module: "forge-prompts",
		slug: "prompts",
		description: "Prompt architecture across the entire pipeline",
	},
};

const journeyRu: JourneyConfig = {
	sectionLabel: "\u041F\u0423\u0422\u042C",
	headline: "\u041E\u0442 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0438\u0434\u0435\u0438 \u0434\u043E \u043F\u0435\u0442\u0435\u043B\u044C \u0440\u043E\u0441\u0442\u0430",
	subheadline:
		"15 \u043C\u043E\u0434\u0443\u043B\u0435\u0439. 4 \u044D\u0442\u0430\u043F\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u043A \u0440\u043E\u043B\u0438 \u0438 \u043C\u043E\u043C\u0435\u043D\u0442\u0443.",
	zones: [
		{
			id: "validate",
			title: "VALIDATE",
			persona: "Founder / PM",
			description: "\u0412\u0430\u043B\u0438\u0434\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u044C",
			color: "#9A75EA",
			modules: [
				{ name: "forge-discovery", slug: "discovery" },
				{ name: "forge-marketing", slug: "marketing" },
				{ name: "forge-product", slug: "product", badge: "hub" },
			],
		},
		{
			id: "build",
			title: "BUILD",
			persona: "Developer",
			description: "\u0421\u0442\u0440\u043E\u0439\u0442\u0435 \u0441 \u0433\u0430\u0439\u0434\u0440\u0435\u0439\u043B\u0430\u043C\u0438",
			color: "#3B82F6",
			modules: [
				{ name: "forge-core", slug: "core", badge: "foundation" },
				{ name: "forge-qa", slug: "qa" },
				{ name: "forge-tracker", slug: "tracker" },
			],
		},
		{
			id: "scale",
			title: "SCALE",
			persona: "Team Lead",
			description: "\u041F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0433\u0435\u043D\u0442\u044B, \u043D\u043E\u043B\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432",
			color: "#10B981",
			modules: [
				{ name: "forge-autopilot", slug: "autopilot" },
				{ name: "forge-worktree", slug: "worktree" },
			],
		},
		{
			id: "grow",
			title: "GROW",
			persona: "Growth / Product",
			description: "\u0418\u0437\u043C\u0435\u0440\u044F\u0439\u0442\u0435 \u0438 \u0438\u0442\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435",
			color: "#F59E0B",
			modules: [
				{ name: "forge-analytics", slug: "analytics" },
				{ name: "forge-onboarding", slug: "onboarding" },
				{ name: "forge-copy", slug: "copy" },
				{ name: "forge-seo", slug: "seo" },
				{ name: "forge-growth", slug: "growth" },
				{ name: "forge-ab", slug: "ab" },
			],
		},
	],
	crossCutting: {
		module: "forge-prompts",
		slug: "prompts",
		description: "\u041F\u0440\u043E\u043C\u043F\u0442-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D\u0430",
	},
};

export const journeyI18n: Record<string, JourneyConfig> = { en: journey, ru: journeyRu };
