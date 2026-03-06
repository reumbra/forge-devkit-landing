export type { ModulePageConfig, VisualLine } from "./types";
export { corePageConfig } from "./core";
export { productPageConfig } from "./product";
export { qaPageConfig } from "./qa";
export { autopilotPageConfig } from "./autopilot";

export const modulePages = {
	core: (await import("./core")).corePageConfig,
	product: (await import("./product")).productPageConfig,
	qa: (await import("./qa")).qaPageConfig,
	autopilot: (await import("./autopilot")).autopilotPageConfig,
} as const;

export const moduleSlugs = ["core", "product", "qa", "autopilot"] as const;
export type ModuleSlug = (typeof moduleSlugs)[number];
