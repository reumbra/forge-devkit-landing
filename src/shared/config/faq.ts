export type FaqAudience = "dev" | "entrepreneur" | "both";

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
	audience: FaqAudience;
}

export interface FaqConfig {
	sectionLabel: string;
	headline: string;
	items: FaqItem[];
}

export const faq = {
	sectionLabel: "FAQ",
	headline: "Frequently asked questions",
	items: [
		{
			id: "cursorrules",
			question:
				"How is this different from writing .cursorrules myself?",
			answer:
				"Auto-generated from architecture audit. Full pipeline, not just rules. Platform-agnostic \u2014 works in Cursor AND Claude Code AND Cowork.",
			audience: "dev",
		},
		{
			id: "stack-support",
			question: "Does it work with my stack?",
			answer:
				"8+ frameworks supported. 3 template families (NestJS/Clean Arch, generic backend, frontend). Stack-specific quality patterns auto-detected.",
			audience: "dev",
		},
		{
			id: "removal",
			question: "What if I remove Forge?",
			answer:
				"Disposable meta-tool: generated artifacts (dev-skills, tests, docs) work independently. Your code doesn't depend on Forge.",
			audience: "both",
		},
		{
			id: "platform-support",
			question: "Does it work outside Claude Code?",
			answer:
				".claude/ directory auto-detected by Cursor, Claude Desktop, Claude Cowork. Forge installs there \u2014 all platforms pick it up.",
			audience: "both",
		},
		{
			id: "no-code",
			question: "Do I need coding skills to use this?",
			answer:
				"Feature design phase (forge-product) uses business language \u2014 no code. For implementation, use Claude Cowork or Cursor with Forge installed. AI does the coding.",
			audience: "entrepreneur",
		},
		{
			id: "vs-bolt-lovable",
			question:
				"How is this different from Bolt or Lovable?",
			answer:
				"They generate code. Forge ensures generated code is maintainable. Quality layer on top of any AI builder \u2014 not a replacement.",
			audience: "entrepreneur",
		},
		{
			id: "code-quality",
			question:
				"Will a real developer be able to work with this code?",
			answer:
				"That's the entire point. Production-grade architecture, naming conventions, quality patterns, generated tests. Code a senior dev would write.",
			audience: "entrepreneur",
		},
		{
			id: "guarantee",
			question: "Is there a money-back guarantee?",
			answer:
				"Yes. 14-day money-back guarantee, no questions asked. If Forge doesn't improve your workflow, email us and we'll refund immediately.",
			audience: "both",
		},
		{
			id: "roi",
			question: "What's the ROI of using Forge?",
			answer:
				"One prevented production bug pays for the entire year. At $29\u201379/yr, the subscription costs less than a single hour of debugging AI-generated regressions.",
			audience: "both",
		},
	],
} as const satisfies FaqConfig;
