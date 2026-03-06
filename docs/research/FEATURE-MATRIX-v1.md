# Feature Matrix — Forge DevKit (Marketing Categorization)

> **Context:** All Forge DevKit features reorganized from technical plugin boundaries into marketing-friendly categories. Each feature mapped to user-facing value. Source: [003-plugin-features-raw.md](./003-plugin-features-raw.md)

## Category 1: Project Setup & Architecture

_"Your AI understands your project before writing a single line."_

| Feature | Source | User Value |
|---------|--------|------------|
| 7-gate project setup wizard | forge-core | One command sets up entire development workflow |
| Architecture auto-detection | forge-core (architecture-auditor) | Detects framework, layers, patterns, CI/CD without manual config |
| Stack-specific dev-skill generation | forge-core (skill-generator) | AI gets project-specific coding instructions, not generic best practices |
| 3 template families | forge-core | Tailored for NestJS/Clean Arch, generic backend, frontend (React/Vue/Angular) |
| Parallel development orchestration | forge-core (conductor) | Safe parallel work across architecture layers with contract negotiation |
| Cross-repo scope detection | forge-core | Multi-repository projects handled as one ecosystem |
| Product type detection (8 archetypes) | forge-product (product-auditor) | AI adapts to B2C, B2B SaaS, e-commerce, marketplace, dashboard, etc. |

## Category 2: Code Quality & Guardrails

_"Senior engineer discipline, enforced automatically."_

| Feature | Source | User Value |
|---------|--------|------------|
| 50+ quality patterns | forge-core | Auth guards, RLS, decimal precision, N+1 queries, type coverage — detected and enforced per stack |
| Naming convention audit | forge-core (Gate 5) | Consistency across repos, services, DTOs, events, controllers |
| 15 LLM rationalization detectors | forge-core (red-flags.md) | Catches AI cutting corners: scope creep, missing error handling, silent failures |
| Scope decomposition thresholds | forge-core | Auto-splits large tasks into manageable subtasks |
| Agent self-review standards | forge-core | AI checks its own work before presenting results |
| Generated file version tracking | forge-core | Safe upgrades without losing your customizations |
| Pipeline continuity (Resume Protocol) | forge-core | Context compaction doesn't break multi-step workflows |

## Category 3: Product Design Pipeline

_"Design features before building them."_

| Feature | Source | User Value |
|---------|--------|------------|
| User flow generation (Mermaid) | forge-product | Visual flow diagrams with flow-to-API mapping |
| User stories with verifiable AC | forge-product | Each acceptance criterion becomes a test case |
| Use cases with alt/error flows | forge-product | Edge cases documented before code is written |
| 50 UX criteria (10 categories) | forge-product | Accessibility, performance, errors, loading, responsive, forms — all checked |
| Complexity scoring | forge-product | Risk/structural/flow factors determine artifact depth |
| 3 storage strategies | forge-product | Lightweight backlog, feature docs, or external tool integration |
| Roadmap with prioritization | forge-product | RICE, MoSCoW, WSJF frameworks for epic ordering |
| Post-dev UX verification | forge-product (ux-reviewer) | AI verifies implementation matches product design |

## Category 4: Testing & QA

_"Tests that trace back to requirements."_

| Feature | Source | User Value |
|---------|--------|------------|
| Test landscape auto-detection | forge-qa (test-auditor) | 8+ frameworks detected: Vitest, Jest, Mocha, pytest, Go, ExUnit, Rust |
| Requirement-based unit test generation | forge-qa | AC → unit tests with traceability tags |
| E2E test generation from use cases | forge-qa | UC flows → E2E scenarios with Page Objects |
| UX criteria → UI assertions | forge-qa | Loading states, error messages, accessibility verified automatically |
| Risk-based test prioritization | forge-qa | Module criticality + git churn + dependency fan-out = test order |
| Coverage gap analysis | forge-qa | Cross-reference coverage with requirements, identify what's missing |
| Traceability matrix | forge-qa | Every test linked to its requirement (AC/UC/UX) |
| Plan gates before generation | forge-qa | Review test plan before code is generated |

## Category 5: Task Management

_"Bridge product backlog and development."_

| Feature | Source | User Value |
|---------|--------|------------|
| 5 integration targets | forge-tracker | GitHub Issues, ClickUp, Linear, Notion, Jira |
| Bidirectional sync with conflict resolution | forge-tracker | Keep tracker and local state in sync automatically |
| 10 task operations | forge-tracker | pick, sync, status, comment, close, create, blocker, unblock, review, escalate |
| Status state machine | forge-tracker | Invalid transitions prevented (can't go from done to blocked) |
| Team features | forge-tracker | Roles, review workflow, escalation, @mention conventions |
| Custom field mapping | forge-tracker | Priority, effort, sprint, component synced with tracker |

## Category 6: Ecosystem & Integration

_"Modules that work together — and work without each other."_

| Feature | Source | User Value |
|---------|--------|------------|
| Smart Orchestrator | forge-core | One `/forge:setup` detects and configures everything |
| Pipeline integration | core + product + qa + tracker | Product context → dev-skill → quality gates → task updates |
| Disposable meta-tools | All | Generated artifacts work after plugin removal |
| Adapter protocol | forge-core | Ecosystem extensible without core changes |
| Detection over configuration | All | Auto-detect everything, configure nothing manually |
| Self-improvement hook | forge-core | AI reminds you to upgrade when project changes |

## Summary Stats

| Metric | Count |
|--------|-------|
| Total commands | 17 |
| Total agents | 8 |
| Total skills | 4 (orchestrator-level) |
| Supported frameworks | 8+ (backend + frontend) |
| Product type archetypes | 8 |
| UX quality criteria | 50 |
| Quality patterns | 50+ |
| Test frameworks detected | 8+ |
| Task tracker integrations | 5 |
| Generated artifact types | 24+ |
