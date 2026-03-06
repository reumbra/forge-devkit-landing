export type { ComparisonPageConfig, ComparisonRow } from "./types";
export { cursorRulesComparison } from "./cursor-rules";
export { devinComparison } from "./devin";
export { claudeMdComparison } from "./claude-md";

export const comparisons = {
	"cursor-rules": (await import("./cursor-rules")).cursorRulesComparison,
	devin: (await import("./devin")).devinComparison,
	"claude-md": (await import("./claude-md")).claudeMdComparison,
} as const;

export const comparisonSlugs = ["cursor-rules", "devin", "claude-md"] as const;
export type ComparisonSlug = (typeof comparisonSlugs)[number];
