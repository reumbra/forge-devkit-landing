// ── Simulator data model (non-i18n: IDs, weights, terminal lines) ────────────

export interface SimulatorModule {
	id: string;
	name: string;
	tier: "starter" | "pro" | "complete";
	slug: string;
	required?: boolean;
}

export const SIMULATOR_MODULES: SimulatorModule[] = [
	{ id: "core", name: "forge-core", tier: "starter", slug: "core", required: true },
	{ id: "worktree", name: "forge-worktree", tier: "starter", slug: "worktree" },
	{ id: "product", name: "forge-product", tier: "pro", slug: "product" },
	{ id: "qa", name: "forge-qa", tier: "pro", slug: "qa" },
	{ id: "tracker", name: "forge-tracker", tier: "pro", slug: "tracker" },
	{ id: "prompts", name: "forge-prompts", tier: "pro", slug: "prompts" },
	{ id: "autopilot", name: "forge-autopilot", tier: "complete", slug: "autopilot" },
	{ id: "discovery", name: "forge-discovery", tier: "complete", slug: "discovery" },
	{ id: "marketing", name: "forge-marketing", tier: "complete", slug: "marketing" },
	{ id: "analytics", name: "forge-analytics", tier: "complete", slug: "analytics" },
	{ id: "onboarding", name: "forge-onboarding", tier: "complete", slug: "onboarding" },
	{ id: "copy", name: "forge-copy", tier: "complete", slug: "copy" },
	{ id: "seo", name: "forge-seo", tier: "complete", slug: "seo" },
	{ id: "growth", name: "forge-growth", tier: "complete", slug: "growth" },
	{ id: "ab", name: "forge-ab", tier: "complete", slug: "ab" },
];

// ── Capability Calculator ─────────────────────────────────────────────────────

export interface Capability {
	id: string;
	moduleIds: string[];
	tier: "pro" | "complete"; // minimum tier to get this capability
}

/** Base modules always included (Starter tier minimum) */
export const BASE_MODULES = ["core", "worktree"];

/** Toggleable capabilities - each maps to 1+ modules */
export const CAPABILITIES: Capability[] = [
	{ id: "productDesign", moduleIds: ["product"], tier: "pro" },
	{ id: "testing", moduleIds: ["qa"], tier: "pro" },
	{ id: "taskSync", moduleIds: ["tracker"], tier: "pro" },
	{ id: "prompts", moduleIds: ["prompts"], tier: "pro" },
	{ id: "agentTeams", moduleIds: ["autopilot"], tier: "complete" },
	{ id: "marketValidation", moduleIds: ["discovery", "marketing"], tier: "complete" },
	{ id: "seoContent", moduleIds: ["seo", "copy"], tier: "complete" },
	{ id: "growthRetention", moduleIds: ["growth", "ab", "analytics", "onboarding"], tier: "complete" },
];

/** Quick-select presets: which capabilities to enable per tier */
export const TIER_PRESETS: Record<string, string[]> = {
	starter: [],
	pro: ["productDesign", "testing", "taskSync", "prompts"],
	complete: CAPABILITIES.map((c) => c.id),
};

// ── Metric contributions ──────────────────────────────────────────────────────

export const METRIC_CONTRIBUTIONS: Record<string, Record<string, number>> = {
	architecture: { core: 100 },
	testQuality: { core: 30, qa: 70 },
	taskTracking: { tracker: 100 },
	promptQuality: { prompts: 100 },
	parallelDev: { worktree: 30, autopilot: 70 },
	marketValidation: { product: 40, discovery: 35, marketing: 25 },
	seoContent: { seo: 55, copy: 45 },
	growthRetention: { analytics: 25, onboarding: 25, growth: 30, ab: 20 },
};

export const METRIC_WEIGHTS: Record<string, number> = {
	architecture: 20,
	testQuality: 15,
	taskTracking: 10,
	promptQuality: 10,
	parallelDev: 15,
	marketValidation: 10,
	seoContent: 10,
	growthRetention: 10,
};

// ── Terminal stages ───────────────────────────────────────────────────────────

export interface TerminalLine {
	text: string;
	check?: boolean;
	type?: "command" | "output" | "success" | "skip" | "progress";
}

export interface TerminalStage {
	label: string;
	modules: { moduleId: string; lines: TerminalLine[] }[];
}

export const TERMINAL_STAGES: TerminalStage[] = [
	{
		label: "VALIDATE",
		modules: [
			{ moduleId: "discovery", lines: [{ text: "forge-discovery    Researching market... 7 competitors analyzed", check: true }] },
			{ moduleId: "marketing", lines: [{ text: "forge-marketing    Positioning strategy... 3 channels identified", check: true }] },
			{ moduleId: "product", lines: [{ text: "forge-product      User flows -> 12 stories with AC", check: true }] },
		],
	},
	{
		label: "ARCHITECTURE",
		modules: [
			{
				moduleId: "core",
				lines: [
					{ text: "forge-core         Scanning architecture..." },
					{ text: "  7-gate audit: \u2713\u2713\u2713\u2713\u2713\u2713\u2713" },
					{ text: "  50+ quality patterns applied", check: true },
				],
			},
		],
	},
	{
		label: "DEVELOP",
		modules: [
			{ moduleId: "qa", lines: [{ text: "forge-qa           AC -> 8 unit tests, UC -> 2 E2E", check: true }] },
			{ moduleId: "tracker", lines: [{ text: "forge-tracker      Synced 5 tasks from Linear", check: true }] },
			{ moduleId: "prompts", lines: [{ text: "forge-prompts      Auditing 12 prompts... 3 frameworks", check: true }] },
			{ moduleId: "worktree", lines: [{ text: "forge-worktree     3 isolated branches configured", check: true }] },
		],
	},
	{
		label: "SCALE",
		modules: [
			{
				moduleId: "autopilot",
				lines: [
					{ text: "forge-autopilot    Spawning 3 teammates..." },
					{ text: "  feat/auth \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 done" },
					{ text: "  feat/api  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 done" },
					{ text: "  feat/ui   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 done", check: true },
				],
			},
		],
	},
	{
		label: "GROW",
		modules: [
			{ moduleId: "analytics", lines: [{ text: "forge-analytics    Tracking plan: 24 events mapped", check: true }] },
			{ moduleId: "onboarding", lines: [{ text: "forge-onboarding   Activation flow: 5 steps designed", check: true }] },
			{ moduleId: "copy", lines: [{ text: "forge-copy         Brand voice: 3 surfaces covered", check: true }] },
			{ moduleId: "seo", lines: [{ text: "forge-seo          Technical audit: schema + gaps", check: true }] },
			{ moduleId: "growth", lines: [{ text: "forge-growth       3 retention loops mapped", check: true }] },
			{ moduleId: "ab", lines: [{ text: "forge-ab           Hypothesis ready, n=2,400", check: true }] },
		],
	},
];

export const DIAMOND_LAYERS: Record<string, string[]> = {
	validate: ["discovery", "marketing", "product"],
	build: ["core"],
	test: ["qa", "tracker", "prompts"],
	scale: ["autopilot", "worktree"],
	grow: ["analytics", "onboarding", "copy", "seo", "growth", "ab"],
};

// ── I18n config ───────────────────────────────────────────────────────────────

export interface CapabilityI18n {
	id: string;
	label: string;
	description: string;
}

export interface PersonaI18n {
	id: string;
	title: string;
	description: string;
	benefit: string;
}

export interface MetricI18n {
	id: string;
	label: string;
	zeroImpact: string;
	fullImpact: string;
}

export interface SimulatorI18n {
	sectionLabel: string;
	headline: string;
	subheadline: string;
	ui: {
		buildButton: string;
		rebuildButton: string;
		metricsHeadline: string;
		overallLabel: string;
		coverageLabel: string;
		recommendedLabel: string;
		baseLabel: string;
		modulesIncluded: string;
		alwaysIncluded: string;
		skippedLabel: string;
		assembling: string;
		pipelineComplete: string;
		modulesConfigured: string;
		learnMore: string;
		customizeLabel: string;
		customizeHint: string;
	};
	personas: PersonaI18n[];
	capabilities: CapabilityI18n[];
	metrics: MetricI18n[];
	tiers: { id: string; label: string; price: string }[];
	recommendations: {
		low: string;
		medium: string;
		high: string;
		full: string;
	};
	cta: {
		toStarter: string;
		toPro: string;
		toComplete: string;
		alreadyFull: string;
	};
	crossCutting: {
		module: string;
		slug: string;
		description: string;
	};
}

export const simulator: SimulatorI18n = {
	sectionLabel: "BUILD YOUR PIPELINE",
	headline: "What should Forge build for your project?",
	subheadline: "Choose your setup. Watch the pipeline assemble.",
	ui: {
		buildButton: "Build Product",
		rebuildButton: "Rebuild",
		metricsHeadline: "Product Health",
		overallLabel: "Pipeline Readiness",
		coverageLabel: "Product Coverage",
		recommendedLabel: "Recommended",
		baseLabel: "Always included",
		modulesIncluded: "modules",
		alwaysIncluded: "Included in every tier",
		skippedLabel: "SKIPPED",
		assembling: "Assembling...",
		pipelineComplete: "Assembly complete.",
		modulesConfigured: "modules configured.",
		learnMore: "Learn more",
		customizeLabel: "Want more coverage?",
		customizeHint: "Turn on capabilities to see how your coverage changes.",
	},
	personas: [
		{
			id: "starter",
			title: "Solo Builder",
			description: "AI that respects your architecture. 2 modules, zero overhead.",
			benefit: "One setup - AI follows your conventions forever.",
		},
		{
			id: "pro",
			title: "Team Lead",
			description: "Tests, tracking, dev pipeline. 6 modules.",
			benefit: "Full dev pipeline: design, test, track, ship.",
		},
		{
			id: "complete",
			title: "Founder",
			description: "Full pipeline, idea to growth. All 15 modules.",
			benefit: "From market validation to growth experiments - nothing manual.",
		},
	],
	capabilities: [
		{ id: "productDesign", label: "Product Design", description: "User flows, stories with acceptance criteria, UX library" },
		{ id: "testing", label: "Automated Testing", description: "Tests generated from specs - unit, E2E, component" },
		{ id: "taskSync", label: "Task Tracker Sync", description: "AI reads your backlog, updates status, verifies acceptance criteria - no manual sync" },
		{ id: "prompts", label: "Prompt Engineering", description: "Manage, test, and version prompts like code" },
		{ id: "agentTeams", label: "AI Agent Teams", description: "3+ agents work in parallel with zero merge conflicts" },
		{ id: "marketValidation", label: "Market Validation", description: "Competitor research, positioning strategy, and launch plan - before first commit" },
		{ id: "seoContent", label: "SEO & Brand Voice", description: "Technical SEO audit, schema markup, and brand voice - enforced automatically" },
		{ id: "growthRetention", label: "Growth & Retention", description: "Retention loops, A/B experiments, onboarding flows, and tracking - structured, not guessed" },
	],
	metrics: [
		{
			id: "architecture",
			label: "Architecture",
			zeroImpact: "No guardrails - AI generates code without following your conventions.",
			fullImpact: "50+ patterns enforce consistency across every AI-generated commit.",
		},
		{
			id: "testQuality",
			label: "Test Quality",
			zeroImpact: "No test generation from specs - coverage depends entirely on manual effort.",
			fullImpact: "Tests auto-generated from acceptance criteria. Every test traces to a requirement.",
		},
		{
			id: "taskTracking",
			label: "Task Tracking",
			zeroImpact: "AI and task tracker disconnected - status updates remain manual.",
			fullImpact: "AI reads tasks, syncs status, validates acceptance criteria on close.",
		},
		{
			id: "promptQuality",
			label: "Prompt Quality",
			zeroImpact: "No regression testing for prompts - changes go unverified.",
			fullImpact: "Every prompt change tested against baseline before deploy.",
		},
		{
			id: "parallelDev",
			label: "Parallel Dev",
			zeroImpact: "No parallel orchestration - features queue up sequentially.",
			fullImpact: "Agent teams work in parallel - isolated worktrees, zero merge conflicts.",
		},
		{
			id: "marketValidation",
			label: "Market Validation",
			zeroImpact: "No structured validation process - product decisions built on assumptions.",
			fullImpact: "Discovery, interviews, and bias checks completed before first commit.",
		},
		{
			id: "seoContent",
			label: "SEO & Content",
			zeroImpact: "No SEO audit process - technical gaps and content strategy unaddressed.",
			fullImpact: "Technical audit, schema markup, and brand voice enforcement built in.",
		},
		{
			id: "growthRetention",
			label: "Growth & Retention",
			zeroImpact: "No retention framework - churn causes and growth levers unexamined.",
			fullImpact: "Retention loops, experiment design, and onboarding flows structured.",
		},
	],
	tiers: [
		{ id: "starter", label: "Starter", price: "\u20ac29" },
		{ id: "pro", label: "Pro", price: "\u20ac79" },
		{ id: "complete", label: "Complete", price: "\u20ac149" },
	],
	recommendations: {
		low: "Architecture covered. But no test generation, no task sync, no market validation process. Manual effort fills the gaps.",
		medium: "Dev pipeline automated - code tested, tracked, structured. Business-side processes (SEO, growth, validation) remain manual.",
		high: "Strong coverage. Most processes automated. A few growth dimensions left unaddressed.",
		full: "Every process covered. From market validation to growth experiments. Zero manual gaps.",
	},
	cta: {
		toStarter: "Start with Starter - \u20ac29 \u2192",
		toPro: "Upgrade to Pro for the full dev pipeline \u2192",
		toComplete: "Get Complete for full coverage \u2192",
		alreadyFull: "Full coverage! Get Complete - \u20ac149 \u2192",
	},
	crossCutting: {
		module: "forge-prompts",
		slug: "prompts",
		description: "Consistent prompt quality across every module in your pipeline",
	},
};

const simulatorRu: SimulatorI18n = {
	sectionLabel: "СОБЕРИТЕ PIPELINE",
	headline: "Что Forge соберёт для вашего проекта?",
	subheadline: "Выберите конфигурацию. Смотрите, как собирается pipeline.",
	ui: {
		buildButton: "\u0421\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442",
		rebuildButton: "\u041f\u0435\u0440\u0435\u0441\u043e\u0431\u0440\u0430\u0442\u044c",
		metricsHeadline: "\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",
		overallLabel: "\u0413\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u044c pipeline",
		coverageLabel: "\u041f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",
		recommendedLabel: "\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c",
		baseLabel: "\u0412\u0441\u0435\u0433\u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e",
		modulesIncluded: "\u043c\u043e\u0434\u0443\u043b\u0435\u0439",
		alwaysIncluded: "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0442\u0430\u0440\u0438\u0444",
		skippedLabel: "\u041f\u0420\u041e\u041f\u0423\u0429\u0415\u041d",
		assembling: "\u0421\u0431\u043e\u0440\u043a\u0430...",
		pipelineComplete: "\u0421\u0431\u043e\u0440\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430.",
		modulesConfigured: "\u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e.",
		learnMore: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
		customizeLabel: "\u0425\u043e\u0442\u0438\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f?",
		customizeHint: "\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c, \u043a\u0430\u043a \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435.",
	},
	personas: [
		{
			id: "starter",
			title: "\u0418\u043d\u0434\u0438-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",
			description: "AI \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u0432\u0430\u0448\u0443 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443. 2 \u043c\u043e\u0434\u0443\u043b\u044f, \u043d\u043e\u043b\u044c \u043e\u0432\u0435\u0440\u0445\u0435\u0434\u0430.",
			benefit: "\u041e\u0434\u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 - AI \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u0430\u0448\u0438\u043c \u043a\u043e\u043d\u0432\u0435\u043d\u0446\u0438\u044f\u043c \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430.",
		},
		{
			id: "pro",
			title: "\u0422\u0438\u043c\u043b\u0438\u0434",
			description: "\u0422\u0435\u0441\u0442\u044b, \u0442\u0440\u0435\u043a\u0438\u043d\u0433, dev pipeline. 6 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.",
			benefit: "\u041f\u043e\u043b\u043d\u044b\u0439 dev pipeline: \u0434\u0438\u0437\u0430\u0439\u043d, \u0442\u0435\u0441\u0442\u044b, \u0442\u0440\u0435\u043a\u0438\u043d\u0433, \u0434\u0435\u043f\u043b\u043e\u0439.",
		},
		{
			id: "complete",
			title: "\u0424\u0430\u0443\u043d\u0434\u0435\u0440",
			description: "\u041f\u043e\u043b\u043d\u044b\u0439 pipeline, \u043e\u0442 \u0438\u0434\u0435\u0438 \u0434\u043e \u0440\u043e\u0441\u0442\u0430. \u0412\u0441\u0435 15 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.",
			benefit: "\u041e\u0442 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0440\u044b\u043d\u043a\u0430 \u0434\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u043e\u0441\u0442\u0430 - \u043d\u0438\u0447\u0435\u0433\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e.",
		},
	],
	capabilities: [
		{ id: "productDesign", label: "\u0414\u0438\u0437\u0430\u0439\u043d \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430", description: "User flows, stories \u0441 acceptance criteria, UX-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0438" },
		{ id: "testing", label: "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435", description: "\u0422\u0435\u0441\u0442\u044b \u0438\u0437 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0439 - unit, E2E, \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u044b\u0435" },
		{ id: "taskSync", label: "\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0441 \u0442\u0440\u0435\u043a\u0435\u0440\u043e\u043c", description: "AI \u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u044d\u043a\u043b\u043e\u0433, \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 AC - \u0431\u0435\u0437 \u0440\u0443\u0447\u043d\u043e\u0439 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438" },
		{ id: "prompts", label: "\u041f\u0440\u043e\u043c\u043f\u0442-\u0438\u043d\u0436\u0435\u043d\u0435\u0440\u0438\u044f", description: "\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0439, \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439 \u0438 \u0432\u0435\u0440\u0441\u0438\u043e\u043d\u0438\u0440\u0443\u0439 \u043f\u0440\u043e\u043c\u043f\u0442\u044b \u043a\u0430\u043a \u043a\u043e\u0434" },
		{ id: "agentTeams", label: "\u041a\u043e\u043c\u0430\u043d\u0434\u044b AI-\u0430\u0433\u0435\u043d\u0442\u043e\u0432", description: "3+ \u0430\u0433\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e, \u043d\u043e\u043b\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432 \u0441\u043b\u0438\u044f\u043d\u0438\u044f" },
		{ id: "marketValidation", label: "\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0440\u044b\u043d\u043a\u0430", description: "\u0410\u043d\u0430\u043b\u0438\u0437 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043f\u043b\u0430\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430 - \u0434\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430" },
		{ id: "seoContent", label: "SEO \u0438 \u0433\u043e\u043b\u043e\u0441 \u0431\u0440\u0435\u043d\u0434\u0430", description: "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 SEO-\u0430\u0443\u0434\u0438\u0442, schema markup \u0438 \u0433\u043e\u043b\u043e\u0441 \u0431\u0440\u0435\u043d\u0434\u0430 - \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438" },
		{ id: "growthRetention", label: "\u0420\u043e\u0441\u0442 \u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435", description: "\u041f\u0435\u0442\u043b\u0438 retention, A/B-\u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u044b, \u043e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433 \u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 - \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e, \u043d\u0435 \u043d\u0430\u0443\u0433\u0430\u0434" },
	],
	metrics: [
		{
			id: "architecture",
			label: "\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",
			zeroImpact: "\u041d\u0435\u0442 \u0433\u0430\u0439\u0434\u0440\u0435\u0439\u043b\u043e\u0432 - AI \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u043e\u0434 \u0431\u0435\u0437 \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0432\u0435\u043d\u0446\u0438\u0439.",
			fullImpact: "50+ \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u043e\u0432 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u043a\u043e\u043d\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u0433\u043e AI-\u043a\u043e\u043c\u043c\u0438\u0442\u0430.",
		},
		{
			id: "testQuality",
			label: "\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u0435\u0441\u0442\u043e\u0432",
			zeroImpact: "\u041d\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0435\u0441\u0442\u043e\u0432 \u0438\u0437 \u0441\u043f\u0435\u043a\u043e\u0432 - \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0440\u0443\u0447\u043d\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u0439.",
			fullImpact: "\u0422\u0435\u0441\u0442\u044b \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438\u0437 acceptance criteria. \u041a\u0430\u0436\u0434\u044b\u0439 \u0442\u0435\u0441\u0442 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d \u043a \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044e.",
		},
		{
			id: "taskTracking",
			label: "\u0422\u0440\u0435\u043a\u0438\u043d\u0433 \u0437\u0430\u0434\u0430\u0447",
			zeroImpact: "AI \u0438 \u0442\u0440\u0435\u043a\u0435\u0440 \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u044b - \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u0432 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u044b\u043c.",
			fullImpact: "AI \u0447\u0438\u0442\u0430\u0435\u0442 \u0437\u0430\u0434\u0430\u0447\u0438, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441, \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 AC \u043f\u0440\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0438.",
		},
		{
			id: "promptQuality",
			label: "\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u043c\u043f\u0442\u043e\u0432",
			zeroImpact: "\u041d\u0435\u0442 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u043f\u0442\u043e\u0432 - \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u044e\u0442\u0441\u044f.",
			fullImpact: "\u041a\u0430\u0436\u0434\u043e\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043c\u043f\u0442\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0442\u0438\u0432 \u0431\u0435\u0439\u0437\u043b\u0430\u0439\u043d\u0430 \u043f\u0435\u0440\u0435\u0434 \u0434\u0435\u043f\u043b\u043e\u0435\u043c.",
		},
		{
			id: "parallelDev",
			label: "\u041f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430",
			zeroImpact: "\u041d\u0435\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0440\u043a\u0435\u0441\u0442\u0440\u0430\u0446\u0438\u0438 - \u0444\u0438\u0447\u0438 \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c.",
			fullImpact: "\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u0430\u0433\u0435\u043d\u0442\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e - \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 worktree, \u043d\u043e\u043b\u044c \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432 \u0441\u043b\u0438\u044f\u043d\u0438\u044f.",
		},
		{
			id: "marketValidation",
			label: "\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0440\u044b\u043d\u043a\u0430",
			zeroImpact: "\u041d\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 - \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u044f\u0442\u0441\u044f \u043d\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445.",
			fullImpact: "Discovery, \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0441\u043a\u0430\u0436\u0435\u043d\u0438\u044f - \u0434\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0438\u0442\u0430.",
		},
		{
			id: "seoContent",
			label: "SEO \u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442",
			zeroImpact: "\u041d\u0435\u0442 SEO-\u0430\u0443\u0434\u0438\u0442\u0430 - \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442-\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u043d\u0435 \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b.",
			fullImpact: "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0443\u0434\u0438\u0442, schema markup \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0433\u043e\u043b\u043e\u0441\u0430 \u0431\u0440\u0435\u043d\u0434\u0430 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u044b.",
		},
		{
			id: "growthRetention",
			label: "\u0420\u043e\u0441\u0442 \u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435",
			zeroImpact: "\u041d\u0435\u0442 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430 \u0443\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f - \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043e\u0442\u0442\u043e\u043a\u0430 \u0438 \u0440\u044b\u0447\u0430\u0433\u0438 \u0440\u043e\u0441\u0442\u0430 \u043d\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u044b.",
			fullImpact: "\u041f\u0435\u0442\u043b\u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f, \u0434\u0438\u0437\u0430\u0439\u043d \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u043e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433-\u043f\u043e\u0442\u043e\u043a\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b.",
		},
	],
	tiers: [
		{ id: "starter", label: "Starter", price: "\u20ac29" },
		{ id: "pro", label: "Pro", price: "\u20ac79" },
		{ id: "complete", label: "Complete", price: "\u20ac149" },
	],
	recommendations: {
		low: "\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u043f\u043e\u043a\u0440\u044b\u0442\u0430. \u041d\u043e \u043d\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0435\u0441\u0442\u043e\u0432, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u0434\u0430\u0447, \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0440\u044b\u043d\u043a\u0430. \u0420\u0443\u0447\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0431\u0435\u043b\u044b.",
		medium: "Dev pipeline \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d - \u043a\u043e\u0434 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d, \u043e\u0442\u0441\u043b\u0435\u0436\u0435\u043d, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0411\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b (SEO, \u0440\u043e\u0441\u0442, \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f) \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u044b\u043c\u0438.",
		high: "\u0421\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435. \u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043e. \u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u0440\u043e\u0441\u0442\u0430 \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0431\u0435\u0437 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f.",
		full: "\u0412\u0441\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u043f\u043e\u043a\u0440\u044b\u0442\u044b. \u041e\u0442 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0440\u044b\u043d\u043a\u0430 \u0434\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u043e\u0441\u0442\u0430. \u041d\u043e\u043b\u044c \u0440\u0443\u0447\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.",
	},
	cta: {
		toStarter: "\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u043e Starter - \u20ac29 \u2192",
		toPro: "\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 Pro \u0434\u043b\u044f \u043f\u043e\u043b\u043d\u043e\u0433\u043e dev pipeline \u2192",
		toComplete: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 Complete \u0434\u043b\u044f \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f \u2192",
		alreadyFull: "\u041f\u043e\u043b\u043d\u043e\u0435 \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435! \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 Complete - \u20ac149 \u2192",
	},
	crossCutting: {
		module: "forge-prompts",
		slug: "prompts",
		description: "\u0421\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u043c\u043f\u0442\u043e\u0432 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435 \u0432\u0430\u0448\u0435\u0433\u043e pipeline",
	},
};

export const simulatorI18n: Record<string, SimulatorI18n> = { en: simulator, ru: simulatorRu };
