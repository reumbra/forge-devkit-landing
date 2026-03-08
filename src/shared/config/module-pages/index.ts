import type { ModulePageConfig } from "./types";

export type { ModulePageConfig, VisualLine } from "./types";
export { corePageConfig, corePageConfigI18n } from "./core";
export { productPageConfig, productPageConfigI18n } from "./product";
export { qaPageConfig, qaPageConfigI18n } from "./qa";
export { autopilotPageConfig, autopilotPageConfigI18n } from "./autopilot";
export { trackerPageConfig, trackerPageConfigI18n } from "./tracker";
export { worktreePageConfig, worktreePageConfigI18n } from "./worktree";
export { discoveryPageConfig, discoveryPageConfigI18n } from "./discovery";
export { marketingPageConfig, marketingPageConfigI18n } from "./marketing";
export { promptsPageConfig, promptsPageConfigI18n } from "./prompts";
export { analyticsPageConfig, analyticsPageConfigI18n } from "./analytics";
export { onboardingPageConfig, onboardingPageConfigI18n } from "./onboarding";
export { copyPageConfig, copyPageConfigI18n } from "./copy";
export { seoPageConfig, seoPageConfigI18n } from "./seo";
export { growthPageConfig, growthPageConfigI18n } from "./growth";
export { abPageConfig, abPageConfigI18n } from "./ab";

export const modulePages = {
	core: (await import("./core")).corePageConfig,
	product: (await import("./product")).productPageConfig,
	qa: (await import("./qa")).qaPageConfig,
	autopilot: (await import("./autopilot")).autopilotPageConfig,
	tracker: (await import("./tracker")).trackerPageConfig,
	worktree: (await import("./worktree")).worktreePageConfig,
	discovery: (await import("./discovery")).discoveryPageConfig,
	marketing: (await import("./marketing")).marketingPageConfig,
	prompts: (await import("./prompts")).promptsPageConfig,
	analytics: (await import("./analytics")).analyticsPageConfig,
	onboarding: (await import("./onboarding")).onboardingPageConfig,
	copy: (await import("./copy")).copyPageConfig,
	seo: (await import("./seo")).seoPageConfig,
	growth: (await import("./growth")).growthPageConfig,
	ab: (await import("./ab")).abPageConfig,
} as const;

export const modulePagesI18n: Record<string, Record<string, ModulePageConfig>> = {
	en: modulePages,
	ru: {
		core: (await import("./core")).corePageConfigI18n.ru,
		product: (await import("./product")).productPageConfigI18n.ru,
		qa: (await import("./qa")).qaPageConfigI18n.ru,
		autopilot: (await import("./autopilot")).autopilotPageConfigI18n.ru,
		tracker: (await import("./tracker")).trackerPageConfigI18n.ru,
		worktree: (await import("./worktree")).worktreePageConfigI18n.ru,
		discovery: (await import("./discovery")).discoveryPageConfigI18n.ru,
		marketing: (await import("./marketing")).marketingPageConfigI18n.ru,
		prompts: (await import("./prompts")).promptsPageConfigI18n.ru,
		analytics: (await import("./analytics")).analyticsPageConfigI18n.ru,
		onboarding: (await import("./onboarding")).onboardingPageConfigI18n.ru,
		copy: (await import("./copy")).copyPageConfigI18n.ru,
		seo: (await import("./seo")).seoPageConfigI18n.ru,
		growth: (await import("./growth")).growthPageConfigI18n.ru,
		ab: (await import("./ab")).abPageConfigI18n.ru,
	},
};

export const moduleSlugs = [
	"core",
	"product",
	"qa",
	"autopilot",
	"tracker",
	"worktree",
	"discovery",
	"marketing",
	"prompts",
	"analytics",
	"onboarding",
	"copy",
	"seo",
	"growth",
	"ab",
] as const;
export type ModuleSlug = (typeof moduleSlugs)[number];
