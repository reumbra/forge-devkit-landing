import type { ModulePageConfig } from "./types";

export type { ModulePageConfig, VisualLine } from "./types";
export { corePageConfig, corePageConfigI18n } from "./core";
export { productPageConfig, productPageConfigI18n } from "./product";
export { qaPageConfig, qaPageConfigI18n } from "./qa";
export { autopilotPageConfig, autopilotPageConfigI18n } from "./autopilot";

export const modulePages = {
	core: (await import("./core")).corePageConfig,
	product: (await import("./product")).productPageConfig,
	qa: (await import("./qa")).qaPageConfig,
	autopilot: (await import("./autopilot")).autopilotPageConfig,
} as const;

export const modulePagesI18n: Record<string, Record<string, ModulePageConfig>> = {
	en: modulePages,
	ru: {
		core: (await import("./core")).corePageConfigI18n.ru,
		product: (await import("./product")).productPageConfigI18n.ru,
		qa: (await import("./qa")).qaPageConfigI18n.ru,
		autopilot: (await import("./autopilot")).autopilotPageConfigI18n.ru,
	},
};

export const moduleSlugs = ["core", "product", "qa", "autopilot"] as const;
export type ModuleSlug = (typeof moduleSlugs)[number];
