export interface EcosystemStage {
	id: string;
	title: string;
	description: string;
	modules: string[];
	accent?: string;
}

export interface EcosystemConfig {
	sectionLabel: string;
	headline: string;
	subheadline: string;
	stages: EcosystemStage[];
	foundation: {
		title: string;
		description: string;
	};
	crossCutting: {
		title: string;
		module: string;
		description: string;
	};
}

export const ecosystem = {
	sectionLabel: "ECOSYSTEM",
	headline: "Modules that talk to each other",
	subheadline:
		"Every module shares context with the rest. Discovery feeds marketing, marketing feeds product, product feeds everything downstream. No copy-pasting between tools.",
	stages: [
		{
			id: "before-code",
			title: "Before code",
			description: "Validate the idea, define positioning, build the product spec",
			modules: ["forge-discovery", "forge-marketing", "forge-product"],
			accent: "hub",
		},
		{
			id: "dev-pipeline",
			title: "Dev pipeline",
			description: "Turn specs into code with tests, tracking, and autonomous agents",
			modules: [
				"forge-product",
				"forge-qa",
				"forge-tracker",
				"forge-autopilot",
				"forge-worktree",
			],
		},
		{
			id: "after-code",
			title: "After code",
			description:
				"Advisory modules read product context to generate copy, SEO, analytics, onboarding, growth experiments, and A/B tests",
			modules: [
				"forge-copy",
				"forge-seo",
				"forge-analytics",
				"forge-onboarding",
				"forge-growth",
				"forge-ab",
			],
		},
	],
	foundation: {
		title: "forge-core",
		description: "Foundation for every module - architecture audit, quality patterns, dev-skill generation",
	},
	crossCutting: {
		title: "Cross-cutting",
		module: "forge-prompts",
		description: "Prompt architecture across the entire pipeline",
	},
} as const satisfies EcosystemConfig;

const ecosystemRu: EcosystemConfig = {
	sectionLabel: "\u042D\u041A\u041E\u0421\u0418\u0421\u0422\u0415\u041C\u0410",
	headline: "\u041C\u043E\u0434\u0443\u043B\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0431\u0449\u0430\u044E\u0442\u0441\u044F \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043E\u043C",
	subheadline:
		"\u041A\u0430\u0436\u0434\u044B\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043E\u043C \u0441 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C\u0438. Discovery \u043F\u0438\u0442\u0430\u0435\u0442 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043F\u0438\u0442\u0430\u0435\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u043F\u0438\u0442\u0430\u0435\u0442 \u0432\u0441\u0451 \u043D\u0438\u0436\u0435 \u043F\u043E \u043F\u043E\u0442\u043E\u043A\u0443. \u041D\u0438\u043A\u0430\u043A\u043E\u0433\u043E copy-paste \u043C\u0435\u0436\u0434\u0443 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438.",
	stages: [
		{
			id: "before-code",
			title: "\u0414\u043E \u043A\u043E\u0434\u0430",
			description: "\u0412\u0430\u043B\u0438\u0434\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0434\u0435\u044E, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0441\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0441\u043F\u0435\u043A",
			modules: ["forge-discovery", "forge-marketing", "forge-product"],
			accent: "hub",
		},
		{
			id: "dev-pipeline",
			title: "Dev pipeline",
			description: "\u041F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u0435 \u0441\u043F\u0435\u043A\u0438 \u0432 \u043A\u043E\u0434 \u0441 \u0442\u0435\u0441\u0442\u0430\u043C\u0438, \u0442\u0440\u0435\u043A\u0438\u043D\u0433\u043E\u043C \u0438 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u043C\u0438 \u0430\u0433\u0435\u043D\u0442\u0430\u043C\u0438",
			modules: [
				"forge-product",
				"forge-qa",
				"forge-tracker",
				"forge-autopilot",
				"forge-worktree",
			],
		},
		{
			id: "after-code",
			title: "\u041F\u043E\u0441\u043B\u0435 \u043A\u043E\u0434\u0430",
			description:
				"Advisory-\u043C\u043E\u0434\u0443\u043B\u0438 \u0447\u0438\u0442\u0430\u044E\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u043A\u043E\u043F\u0438, SEO, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u043E\u043D\u0431\u043E\u0440\u0434\u0438\u043D\u0433\u0430, \u0433\u0440\u043E\u0443\u0442\u0445 \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 A/B-\u0442\u0435\u0441\u0442\u043E\u0432",
			modules: [
				"forge-copy",
				"forge-seo",
				"forge-analytics",
				"forge-onboarding",
				"forge-growth",
				"forge-ab",
			],
		},
	],
	foundation: {
		title: "forge-core",
		description: "\u0424\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F - \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442, \u043F\u0430\u0442\u0442\u0435\u0440\u043D\u044B \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F dev-\u0441\u043A\u0438\u043B\u043B\u043E\u0432",
	},
	crossCutting: {
		title: "Cross-cutting",
		module: "forge-prompts",
		description: "\u041F\u0440\u043E\u043C\u043F\u0442-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0433\u043E \u043F\u0430\u0439\u043F\u043B\u0430\u0439\u043D\u0430",
	},
};

export const ecosystemI18n: Record<string, EcosystemConfig> = { en: ecosystem, ru: ecosystemRu };
