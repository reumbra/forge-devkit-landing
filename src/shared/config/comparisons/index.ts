export type { ComparisonPageConfig, ComparisonRow, RelatedModule } from "./types";
export { cursorRulesComparison, cursorRulesComparisonI18n } from "./cursor-rules";
export { devinComparison, devinComparisonI18n } from "./devin";
export { claudeMdComparison, claudeMdComparisonI18n } from "./claude-md";

export const comparisons = {
	"cursor-rules": (await import("./cursor-rules")).cursorRulesComparison,
	devin: (await import("./devin")).devinComparison,
	"claude-md": (await import("./claude-md")).claudeMdComparison,
} as const;

export const comparisonsI18n = {
	"cursor-rules": (await import("./cursor-rules")).cursorRulesComparisonI18n,
	devin: (await import("./devin")).devinComparisonI18n,
	"claude-md": (await import("./claude-md")).claudeMdComparisonI18n,
} as const;

export const comparisonSlugs = ["cursor-rules", "devin", "claude-md"] as const;
export type ComparisonSlug = (typeof comparisonSlugs)[number];
