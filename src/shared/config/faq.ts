export interface FaqItem {
	id: string;
	question: string;
	answer: string;
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
		},
		{
			id: "stack-support",
			question: "Does it work with my stack?",
			answer:
				"8+ frameworks supported. 3 template families (NestJS/Clean Arch, generic backend, frontend). Stack-specific quality patterns auto-detected.",
		},
		{
			id: "removal",
			question: "What if I remove Forge?",
			answer:
				"Disposable meta-tool: generated artifacts (dev-skills, tests, docs) work independently. Your code doesn't depend on Forge.",
		},
		{
			id: "platform-support",
			question: "Does it work outside Claude Code?",
			answer:
				".claude/ directory auto-detected by Cursor, Claude Desktop, Claude Cowork. Forge installs there \u2014 all platforms pick it up.",
		},
		{
			id: "guarantee",
			question: "Is there a money-back guarantee?",
			answer:
				"Yes. 14-day money-back guarantee, no questions asked. If Forge doesn't improve your workflow, email us and we'll refund immediately.",
		},
		{
			id: "roi",
			question: "What's the ROI of using Forge?",
			answer:
				"One prevented production bug pays for the entire year. At €29\u201379, Forge costs less than a single hour of debugging AI-generated regressions.",
		},
		{
			id: "vs-devin",
			question: "How does Forge compare to Devin?",
			answer:
				"Devin is an autonomous AI developer \u2014 it writes code for you. Forge is infrastructure for YOUR AI agent \u2014 it makes your existing tools (Claude Code, Cursor, Windsurf) architecture-aware. Devin costs €240/yr mandatory. Forge starts at €29 one-time.",
		},
		{
			id: "agent-teams",
			question: "Does Forge work with Claude Agent Teams?",
			answer:
				"Yes. forge-autopilot is specifically designed to orchestrate Agent Teams \u2014 it handles backlog triage, conflict detection, wave planning, and auto-merge. Think of it as Kubernetes for AI agents.",
		},
		{
			id: "ai-tools",
			question: "What AI coding tools does Forge support?",
			answer:
				"Any tool that reads CLAUDE.md, .cursorrules, or similar config files. This includes Claude Code, Cursor, Windsurf, Cline, and any future AI agent. Forge generates platform-agnostic artifacts.",
		},
		{
			id: "update-period",
			question: "What happens after the 1-year update period?",
			answer:
				"Your generated artifacts continue working forever \u2014 they're files in your project, not a service. You just won't get new quality patterns or module updates. Optionally renew at a reduced price to stay current.",
		},
	],
} as const satisfies FaqConfig;
