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
				{ text: "\u2192 50+ quality patterns applied", type: "success" },
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
		id: "autopilot-orchestration",
		sectionLabel: "FORGE-AUTOPILOT",
		headline: "Parallel agents without merge hell",
		description:
			"Agent Teams are powerful - until 3 agents edit the same file. forge-autopilot orchestrates autonomous teammates like Kubernetes orchestrates containers: backlog triage, conflict detection, wave execution, auto-merge.",
		layout: "text-right",
		visual: {
			lines: [
				{ text: "$ forge autopilot \"auth, payments, notifications\"", type: "command" },
				{ text: "", type: "blank" },
				{ text: "\u2713 Triage: 3 features classified", type: "success" },
				{ text: "\u2713 Conflicts: auth \u2194 payments (shared User model)", type: "success" },
				{ text: "\u2713 Wave 1: [auth] [notifications] - parallel", type: "success" },
				{ text: "\u2713 Wave 2: [payments] - after auth merges", type: "success" },
				{ text: "", type: "blank" },
				{ text: "\u26A1 Deploying 2 teammates to worktrees...", type: "highlight" },
			],
		},
		badges: [
			{ label: "Agent Teams" },
			{ label: "Parallel Dev" },
			{ label: "Auto-Merge" },
		],
	},
	{
		id: "requirement-traceability",
		sectionLabel: "REQUIREMENT TRACEABILITY",
		headline: "Tests that trace back to requirements. Not AI guesswork.",
		description:
			"forge-product creates verifiable acceptance criteria BEFORE code. forge-qa generates tests FROM those criteria. Every test proves a requirement.",
		layout: "text-left",
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

const deepDivesRu: DeepDivesConfig = [
	{
		id: "architecture-audit",
		sectionLabel: "ARCHITECTURE AUDIT",
		headline: "Ваш AI забывает архитектуру. Forge - нет.",
		description:
			"7-этапный визард автоматически определяет стек, слои, архитектурные паттерны и конвенции. Генерирует проектно-специфичные dev-skills. Без ручной настройки. Без prompt engineering.",
		layout: "text-left",
		visual: deepDives[0].visual,
		badges: deepDives[0].badges,
	},
	{
		id: "autopilot-orchestration",
		sectionLabel: "FORGE-AUTOPILOT",
		headline: "Параллельные агенты без merge-ада",
		description:
			"Agent Teams мощны - пока 3 агента не начнут редактировать один файл. forge-autopilot управляет автономными участниками команды как Kubernetes управляет контейнерами: триаж бэклога, детекция конфликтов, волновое выполнение, auto-merge.",
		layout: "text-right",
		visual: deepDives[1].visual,
		badges: deepDives[1].badges,
	},
	{
		id: "requirement-traceability",
		sectionLabel: "REQUIREMENT TRACEABILITY",
		headline: "Тесты, привязанные к требованиям. Не AI-угадывание.",
		description:
			"forge-product создает верифицируемые acceptance criteria ДО кода. forge-qa генерирует тесты ИЗ этих критериев. Каждый тест доказывает требование.",
		layout: "text-left",
		visual: deepDives[2].visual,
		badges: deepDives[2].badges,
	},
];

export const deepDivesI18n: Record<string, DeepDivesConfig> = { en: [...deepDives], ru: deepDivesRu };
