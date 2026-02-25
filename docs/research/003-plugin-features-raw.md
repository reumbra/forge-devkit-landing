# 003 — Plugin Features Raw Dump

> **Context:** Complete feature inventory of all 4 commercial Forge DevKit plugins, extracted 2026-02-24 by parallel agents. Source data for FEATURE-MATRIX.md.

## forge-core v3.1.0 — Project Management Meta-Tool

### Commands (4)
| Command | Purpose |
|---------|---------|
| `/forge:setup` | 7-gate project setup wizard. Detects stack, architecture, integrations. Generates dev-skills, agents, commands, references |
| `/forge:upgrade` | Safe upgrade of generated artifacts. Drift detection, backup, smart merge |
| `/forge:import` | Import existing .claude/ structure into forge-core tracking |
| `/forge:integrations` | Post-setup integration management (add/remove/modify/list) |

### Agents (3)
| Agent | Purpose |
|-------|---------|
| `architecture-auditor` | Detects stack, framework, layers, architecture pattern, CI/CD, parallel readiness (score 0-10) |
| `skill-generator` | Generates project-specific dev-skill ecosystem from templates (NestJS/generic backend/frontend) |
| `script-tester` | Validates shell scripts: syntax, permissions, line endings, integration smoke tests |

### Key Features
- **7-Gate Wizard:** Ecosystem discovery → Architecture audit → Pipeline mode → Integrations → Script verification → Quality gates → Naming conventions → Knowledge export → Generation
- **State Machine Orchestrator:** 8 modes (FRESH_INSTALL, ADAPTER_ONBOARD, ADAPTER_UPGRADE, CORE_UPGRADE, DASHBOARD, CHECK, IMPORT, RECONFIGURE)
- **Template System:** 3 templates (backend-nestjs, backend-generic, frontend) with conditional blocks for product/QA/tracker modules
- **Parallel Orchestration:** Conductor pattern for safe parallel layer development with contract negotiation
- **Generated File Tracking:** Header-based versioning enables safe upgrades without losing user modifications
- **50+ Quality Patterns:** Dynamic checklist (auth guards, RLS, decimal precision, N+1, type coverage, etc.)
- **Pipeline Continuity:** Resume Protocol + Insight Collection + 9 Checkpoints survive context compaction
- **Adapter Protocol:** Declarative contracts for ecosystem extensibility
- **Cross-Repo Scope:** Multi-repository quality checks
- **Naming Convention Audit:** Consistency detection across 6+ categories with migration strategies
- **Self-Improvement Hook:** Stop event handler for upgrade reminders

### Generated Artifacts
- Dev-skill with pipeline phases (SKILL.md + 24+ reference docs)
- Layer-specific agents (infra-worker, app-worker, interface-worker, feature-worker)
- Slash commands (/dev, /forge:sync, /forge:close)
- Shell scripts (forge-sync.sh, forge-close.sh, test-setup.sh)
- Conductor for parallel mode (schema-phase.md, {layer}-stream.md)
- .gitattributes with LF line endings
- Optional self-improvement hook

---

## forge-product v3.0.0 — Product Design Pipeline

### Commands (3)
| Command | Purpose |
|---------|---------|
| `/forge:design` | Design feature from product perspective: user flows, stories, use cases, UX criteria |
| `/forge:epic` | Manage product epics: create, view, list, update |
| `/forge:roadmap` | View product roadmap with priorities and progress. RICE/MoSCoW/WSJF prioritization |

### Agents (2)
| Agent | Purpose |
|-------|---------|
| `product-auditor` | Detects product type (8 archetypes) and feature complexity scoring |
| `ux-reviewer` | Post-dev UX verification against product criteria. Pass/warn/fail report |

### Key Features
- **8 Product Type Archetypes:** B2C, B2B SaaS, E-commerce, Marketplace, Dashboard, Internal Tool, Content Platform, API/Dev Tool
- **4 Artifact Types:** User Flows (Mermaid), User Stories (with verifiable AC), Use Cases (alt/error flows), UX Checklist (50 criteria, 10 categories)
- **Complexity Scoring:** Risk factors (+3 money, +2 PII, +2 auth), structural (+2 multi-layer, +2 external API), flow (+2 multi-step). Simple/Medium/Complex
- **3 Storage Strategies:** A (PRODUCT-BACKLOG.md), B (docs/features/*/spec.md), C (integration-first with cache)
- **Pipeline Integration:** Phase 0 (load context) → Phase 1 (contract cross-check) → Phase 3 (product verify + insight collection)
- **UX Criteria Catalog:** 50 criteria across 10 categories (accessibility, performance, errors, loading, responsive, data, forms, nav, feedback, edge cases)
- **Product-Type Specific:** Flow patterns, error catalogs, actor types, UX focus areas per archetype
- **Roadmap Prioritization:** RICE, MoSCoW, WSJF frameworks

---

## forge-qa v3.0.0 — QA Meta-Tool

### Commands (6)
| Command | Purpose |
|---------|---------|
| `/qa:setup` | 3-gate test setup wizard: detect stack, check product integration, configure strategy |
| `/qa:generate` | Generate test-skills (unit, e2e, coverage) based on config |
| `/qa:test <feature>` | Generate unit tests from acceptance criteria or code analysis |
| `/qa:e2e <feature>` | Generate E2E tests from use cases + UX criteria |
| `/qa:coverage` | Coverage gap analysis with prioritized action plan |
| `/qa:upgrade` | Detect test landscape drift, update config |

### Agents (2)
| Agent | Purpose |
|-------|---------|
| `test-auditor` | Read-only analysis: detect test framework, E2E tools, coverage tools, patterns, maturity |
| `test-generator` | Generate test code (unit + E2E + Page Objects) matching project style |

### Key Features
- **Requirement-Based Testing:** Maps AC → unit tests, UC → E2E scenarios, UX criteria → UI assertions
- **Framework Auto-Detection:** 8+ frameworks (Vitest, Jest, Mocha, pytest, Go test, ExUnit, Rust test)
- **Traceability Matrix:** Requirement-to-test matrix with confidence levels and gap detection
- **Page Object Generation:** Semantic E2E Page Objects with framework-specific patterns
- **Risk-Based Prioritization:** Module criticality + git churn + dependency fan-out + product priority
- **Code-Only Fallback:** Full test generation from code analysis when forge-product unavailable
- **Plan Gates:** Mandatory review before generation with --plan-only preview
- **AC-to-Test Mapping:** 8 mapping rules for acceptance criteria → test assertions
- **Coverage Gap Analysis:** Cross-reference coverage with traceability, risk modules, product priority

---

## forge-tracker v3.0.0 — Task Management Hub

### Commands (4)
| Command | Purpose |
|---------|---------|
| `/forge:tracker-setup` | 6-gate setup wizard: discover integrations, configure workflow, generate artifacts |
| `/forge:tracker-upgrade` | Upgrade config and artifacts with drift detection |
| `/forge:tracker integrations` | Post-setup: add/remove/modify/list integrations |
| `/forge:tracker <operation>` | Day-to-day: pick, sync, status, comment, close, create, blocker, unblock, review, escalate |

### Agents (1)
| Agent | Purpose |
|-------|---------|
| `integration-auditor` | Probe available integrations: CLI tools, MCP servers, collision detection |

### Key Features
- **5 Integrations:** GitHub Issues (CLI), ClickUp (MCP), Linear (MCP), Notion (MCP), Jira (MCP)
- **Bidirectional Sync:** Pull/diff/resolve/push with conflict resolution and dry-run
- **Source-of-Truth:** Configurable strategy (integration-first, local-first, ask)
- **Status State Machine:** Mandatory transition validation (backlog → in_progress → review/done/blocked)
- **10 Task Operations:** pick, sync, status, comment, close, create, blocker, unblock, review, escalate
- **Team Features:** Roles, review workflow, escalation modes, @mention conventions
- **Custom Fields:** Optional mapping (priority, effort, sprint, component) per integration
- **Collision Detection:** Reads file headers, handles ownership conflicts during setup
- **Legacy Migration:** Auto-migrate from forge-core integration config
- **Generated Artifacts:** CLI scripts (GitHub), MCP skills (ClickUp/Linear/Notion/Jira), slash commands, backlog template

---

## Ecosystem-Wide Features

| Feature | Modules Involved |
|---------|-----------------|
| Smart Orchestrator | forge-core detects and delegates to all adapters |
| Pipeline Integration | core → product (Phase 0/1/3) → qa (Phase 3) → tracker (Phase 0/1/3) |
| Disposable Meta-Tools | All plugins generate artifacts that work after plugin removal |
| Adapter Protocol | Declarative contracts enable ecosystem extensibility |
| Version-Tracked Generation | All generated files have headers for safe upgrades |
| Detection Over Configuration | Auto-detect stack, architecture, integrations, product type |
| Human Pipeline → AI Pipeline | Human development practices adapted for AI agent cognition |
