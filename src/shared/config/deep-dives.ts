export type DeepDiveLayout = "text-left" | "text-right";
export type VisualLineType = "command" | "blank" | "info" | "success" | "warning" | "highlight" | "code" | "indent" | "comment" | "decorator" | "phase-header" | "phase-item" | "phase-done";

export interface VisualLine {
	text: string;
	type: VisualLineType;
}

export interface DeepDiveBadge {
	label: string;
}

export interface DeepDiveSection {
	id: string;
	sectionLabel: string;
	headline: string;
	description: string;
	layout: DeepDiveLayout;
	visual: {
		lines: VisualLine[];
	};
	badges: DeepDiveBadge[];
}

export type DeepDivesConfig = DeepDiveSection[];

export const deepDives = [
	{
		id: "architecture-audit",
		sectionLabel: "ARCHITECTURE AUDIT",
		headline: "Your AI forgets your architecture. Forge doesn\u2019t.",
		description:
			"7-gate wizard auto-detects your stack, layers, architecture patterns, and conventions. Generates project-specific dev-skills. No manual config. No prompt engineering.",
		layout: "text-left",
		visual: {
			lines: [
				{ text: "$ forge setup", type: "command" },
				{ text: "", type: "blank" },
				{ text: "Analyzing project structure...", type: "info" },
				{ text: "", type: "blank" },
				{ text: "Stack:      NestJS 10.x", type: "info" },
				{ text: "Architecture: Clean Architecture", type: "info" },
				{ text: "Layers:", type: "info" },
				{ text: "  \u251C\u2500 domain/       (entities, value objects)", type: "indent" },
				{ text: "  \u251C\u2500 application/  (use cases, ports)", type: "indent" },
				{ text: "  \u2514\u2500 infrastructure/ (adapters, repos)", type: "indent" },
				{ text: "Database:   PostgreSQL 15 + TypeORM", type: "info" },
				{ text: "CI/CD:      GitHub Actions (3 workflows)", type: "info" },
				{ text: "Testing:    Jest + Supertest", type: "info" },
				{ text: "", type: "blank" },
				{ text: "\u2192 12 dev-skills generated", type: "success" },
				{ text: "\u2192 47 quality patterns applied", type: "success" },
				{ text: "\u2192 Naming conventions: camelCase (code),", type: "success" },
				{ text: "  kebab-case (files), PascalCase (classes)", type: "success" },
				{ text: "", type: "blank" },
				{ text: "\u2728 Project ready.", type: "highlight" },
			],
		},
		badges: [
			{ label: "NestJS" },
			{ label: "Django" },
			{ label: "FastAPI" },
			{ label: "React" },
			{ label: "Vue" },
			{ label: "Angular" },
			{ label: "Go" },
			{ label: "Rails" },
		],
	},
	{
		id: "quality-patterns",
		sectionLabel: "QUALITY PATTERNS",
		headline: "50 guardrails your AI doesn\u2019t know it needs.",
		description:
			"Auth guards, RLS policies, decimal precision, N+1 detection, type coverage \u2014 enforced per stack. 15 LLM rationalization detectors catch AI cutting corners before it reaches your codebase.",
		layout: "text-right",
		visual: {
			lines: [
				{ text: "\u26A0 HALT: AI is skipping input validation", type: "warning" },
				{ text: "  on UserCreateDTO.", type: "warning" },
				{ text: "", type: "blank" },
				{ text: "  Rule: All DTOs require class-validator", type: "info" },
				{ text: "  decorators per quality-gates.md", type: "info" },
				{ text: "", type: "blank" },
				{ text: "  Detected: No validation on 'email',", type: "info" },
				{ text: "  'name', 'password' fields.", type: "info" },
				{ text: "", type: "blank" },
				{ text: "  Action: Adding validators...", type: "info" },
				{ text: "", type: "blank" },
				{ text: "  \u2713 Fixed:", type: "success" },
				{ text: "    @IsEmail()     email: string", type: "code" },
				{ text: "    @MinLength(2)  name: string", type: "code" },
				{ text: "    @IsStrongPassword() password: string", type: "code" },
				{ text: "", type: "blank" },
				{ text: "  \u2713 Validation gate passed.", type: "success" },
			],
		},
		badges: [],
	},
	{
		id: "structured-pipeline",
		sectionLabel: "STRUCTURED PIPELINE",
		headline: "Structured AI workflows. No runaway sessions.",
		description:
			"Each task flows through scoped phases with quality gates. AI can\u2019t spiral into million-token rewrites. Predictable scope, predictable costs.",
		layout: "text-left",
		visual: {
			lines: [
				{ text: "Phase 0: Context", type: "phase-header" },
				{ text: "  \u251C\u2500 Read specifications", type: "phase-item" },
				{ text: "  \u251C\u2500 Load dev-skills", type: "phase-item" },
				{ text: "  \u2514\u2500 \u2705 Context ready", type: "phase-done" },
				{ text: "", type: "blank" },
				{ text: "Phase 1: Contracts", type: "phase-header" },
				{ text: "  \u251C\u2500 Define types and interfaces", type: "phase-item" },
				{ text: "  \u251C\u2500 Plan module boundaries", type: "phase-item" },
				{ text: "  \u2514\u2500 \u2705 Contracts approved", type: "phase-done" },
				{ text: "", type: "blank" },
				{ text: "Phase 2: Implement", type: "phase-header" },
				{ text: "  \u251C\u2500 Build within contracts", type: "phase-item" },
				{ text: "  \u251C\u2500 Agent self-review", type: "phase-item" },
				{ text: "  \u2514\u2500 \u2705 Implementation clean", type: "phase-done" },
				{ text: "", type: "blank" },
				{ text: "Phase 3: Verify", type: "phase-header" },
				{ text: "  \u251C\u2500 Run generated tests", type: "phase-item" },
				{ text: "  \u251C\u2500 12/12 passing \u2705", type: "phase-item" },
				{ text: "  \u2514\u2500 \u2705 Task complete", type: "phase-done" },
			],
		},
		badges: [],
	},
	{
		id: "requirement-traceability",
		sectionLabel: "REQUIREMENT TRACEABILITY",
		headline: "Tests that trace back to requirements. Not AI guesswork.",
		description:
			"forge-product creates verifiable acceptance criteria BEFORE code. forge-qa generates tests FROM those criteria. Every test proves a requirement.",
		layout: "text-right",
		visual: {
			lines: [
				{ text: "// checkout.spec.ts", type: "comment" },
				{ text: "", type: "blank" },
				{ text: "describe('US-3: Order Confirmation', () => {", type: "code" },
				{ text: "", type: "blank" },
				{ text: "  // AC: US-3.AC-1", type: "comment" },
				{ text: "  it('creates order with valid items", type: "code" },
				{ text: "      and shipping address', async () => {", type: "code" },
				{ text: "    const order = await checkout(validCart);", type: "code" },
				{ text: "    expect(order.status).toBe('confirmed');", type: "code" },
				{ text: "    expect(order.items).toHaveLength(3);", type: "code" },
				{ text: "  });", type: "code" },
				{ text: "", type: "blank" },
				{ text: "  // AC: US-3.AC-2", type: "comment" },
				{ text: "  it('sends confirmation email within", type: "code" },
				{ text: "      5 minutes', async () => {", type: "code" },
				{ text: "    await checkout(validCart);", type: "code" },
				{ text: "    const email = await getLastEmail(user);", type: "code" },
				{ text: "    expect(email.subject).toContain('Order');", type: "code" },
				{ text: "    expect(email.sentWithin).toBeLessThan(300);", type: "code" },
				{ text: "  });", type: "code" },
				{ text: "", type: "blank" },
				{ text: "  // UX: loading-2", type: "comment" },
				{ text: "  it('shows spinner during payment", type: "code" },
				{ text: "      processing', async () => {", type: "code" },
				{ text: "    const { getByRole } = render(<Checkout />);", type: "code" },
				{ text: "    fireEvent.click(getByRole('button'));", type: "code" },
				{ text: "    expect(getByRole('progressbar')).toBeVisible();", type: "code" },
				{ text: "  });", type: "code" },
				{ text: "});", type: "code" },
			],
		},
		badges: [],
	},
] as const satisfies DeepDivesConfig;
