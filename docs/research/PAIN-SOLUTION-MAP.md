# Pain → Solution Map — Forge DevKit

> **Version:** v2 (2026-03-06). Updated with 2026 market research, added forge-autopilot/forge-worktree, developer-only focus. v1 archived as PAIN-SOLUTION-MAP-v1.md

> **Context:** Maps real developer pains (from research) to specific Forge features. Each mapping becomes a potential landing page section or copy block. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md) + [FEATURE-MATRIX.md](./FEATURE-MATRIX.md)

## Developer Pain Points

### P1: Context Loss at Scale → forge-core Architecture Audit
| | |
|---|---|
| **Pain** | "AI loses context as project grows. Picks wrong files. Doesn't understand architecture." |
| **Emotion** | Frustration, distrust, feeling of regression |
| **Forge Solution** | 7-gate setup wizard auto-detects stack, layers, architecture pattern, CI/CD. Generates project-specific dev-skills that encode full context. AI always knows the rules. |
| **Proof Point** | Real CLI output: `forge setup` → detected NestJS + Clean Architecture + 3 layers + PostgreSQL |
| **Copy Direction** | "Your AI forgets your architecture. Forge doesn't." |

### P2: Token Burn & Runaway Sessions → forge-core Pipeline Economy
| | |
|---|---|
| **Pain** | "Millions of tokens for 100 lines. Agent generates garbage. Chaotic changes. Huge bills." |
| **Emotion** | Financial anxiety, wasted time, loss of control |
| **Forge Solution** | Multi-layered token economy: (1) **Execution modes** — economy/balanced/quality let user match budget to task complexity; adaptive mode auto-detects. (2) **Surgical step filtering** — economy mode skips memory, brainstorm, red flags, detailed tests via tag system. (3) **Context isolation** — each pipeline phase and subagent gets only its scope, not the full project. (4) **Artifact protocol** — phases communicate via document summaries (~500 tokens), not by accumulating full context (~49K). (5) **Scope decomposition** — large tasks split into layer-waves, each with isolated context. |
| **Proof Point** | "Simple bug fix? Economy mode: 5 steps, focused context. Complex feature? Quality mode: full pipeline with tests and quality gates. You choose." |
| **Copy Direction** | "Your AI reads what it needs, not everything you have. Predictable costs — no surprise $50 sessions." |

### P3: Architecture Violations → forge-core Quality Patterns + Naming Audit
| | |
|---|---|
| **Pain** | "AI breaks DDD modules, shortcuts validations, ignores security checks. Changes one thing, breaks another." |
| **Emotion** | Fear (production bugs), anger (trust betrayed), anxiety (review burden) |
| **Forge Solution** | 50+ quality patterns enforced per stack (auth guards, RLS, decimal precision, N+1). Naming convention audit across repos. 15 LLM rationalization detectors halt AI cutting corners. |
| **Proof Point** | Red flag detector catches: "AI skipping input validation — halting. Validation is required per quality-gates.md" |
| **Copy Direction** | "50 guardrails your AI doesn't know it needs." |

### P4: Confidently Wrong Code → forge-product + forge-qa
| | |
|---|---|
| **Pain** | "Code looks clean but logic is wrong. Hallucinated APIs. Repeats same mistakes." |
| **Emotion** | Paranoia, double-checking everything, slowed velocity |
| **Forge Solution** | forge-product creates verifiable acceptance criteria BEFORE code. forge-qa generates tests FROM those criteria with traceability. Every test traces back to a requirement. |
| **Proof Point** | `// AC: US-3.AC-2 — User receives email within 5 minutes of order confirmation` in test file |
| **Copy Direction** | "Tests that trace back to requirements. Not AI guesswork." |

### P5: Best Practices Soup → forge-core Opinionated Templates
| | |
|---|---|
| **Pain** | "AI writes textbook code but it doesn't fit MY project. Generic patterns everywhere." |
| **Emotion** | Disconnection, "this isn't how we do things here" |
| **Forge Solution** | Templates detect and adapt to YOUR stack (NestJS/Django/React/Vue). Generated dev-skills encode YOUR patterns, YOUR naming, YOUR architecture — not generic best practices. |
| **Proof Point** | Side-by-side: generic AI output vs. Forge-guided output following project conventions |
| **Copy Direction** | "Your project's rules. Not textbook defaults." |

### P6: Prompt Engineering Fatigue → forge-core Auto-Generation
| | |
|---|---|
| **Pain** | "I have to explain my architecture in every prompt. Years of experience compressed into a paragraph." |
| **Emotion** | Tedium, "I shouldn't have to do this", mental overhead |
| **Forge Solution** | One `/forge:setup` → architecture audit → generated dev-skills with all conventions encoded. Never explain your stack again. |
| **Proof Point** | Before: 500-word prompt per task. After: `forge install core && forge setup` once. |
| **Copy Direction** | "Encode your expertise once. Never repeat yourself." |

### P7: CC Spirals (Cascading Code Generation) → forge-core Quality Gates
| | |
|---|---|
| **Pain** | "Claude introduces bugs by patching over with quick fixes, leading to growing technical debt. If quick fix doesn't solve the bug, cascading code generation and CC spirals occur." |
| **Emotion** | Dread, sunk cost ("it's already 500 tokens deep"), loss of control over codebase trajectory |
| **Forge Solution** | forge-core quality gates + agent self-review catch patch-over-patch patterns before they spiral. 15 rationalization detectors recognize "let me just fix this quickly" reasoning and halt execution. Pipeline phases force proper root cause analysis instead of band-aid stacking. |
| **Proof Point** | Rationalization detector: "Agent attempting iterative fix on same function (3rd pass) — halting. Root cause analysis required per quality-gates.md" |
| **Copy Direction** | "Your AI stops patching and starts thinking. Before the spiral." |

### P8: Merge Conflicts in Multi-Agent → forge-autopilot Conflict-Free Waves
| | |
|---|---|
| **Pain** | "I literally can't merge their branches at the end of the day. The unit tests are fake. The displays use mock data." When Agent Teams (Claude Code) work in parallel, conflicts kill productivity. |
| **Emotion** | Rage, wasted full day of work, distrust in multi-agent promises |
| **Forge Solution** | forge-autopilot analyzes backlog, detects file conflicts BEFORE execution, groups features into conflict-free waves. Tech lead agent triages tasks, conflict-detector agent maps file ownership, batch-reporter tracks progress. Parallel work that actually merges. |
| **Proof Point** | Conflict detector output: "Wave 1: auth + payments (0 shared files). Wave 2: dashboard + notifications (0 shared files). Blocked: settings + profile (12 shared files — sequential)." |
| **Copy Direction** | "Multi-agent that actually merges. No more branch graveyard." |

### P9: Fake Tests / Mock Data → forge-qa Traceable Test Generation
| | |
|---|---|
| **Pain** | "Unit tests are fake. Displays use mock data." AI generates tests that test nothing real — assertions against hardcoded values, mocks that never break, component renders with placeholder data. |
| **Emotion** | False confidence shattered, "green suite means nothing", betrayal |
| **Forge Solution** | forge-qa generates tests FROM product artifacts (AC→unit tests, UC→E2E tests, UX→component tests) with 4-level traceability. LLM-as-Judge evaluates test quality — catches tautological assertions, over-mocking, missing edge cases. Every test traces to a real requirement. |
| **Proof Point** | LLM-as-Judge verdict: "Test `should display user balance` — FAIL: asserts against hardcoded `$100.00` instead of dynamic fixture. No real API call. Rewrite required." |
| **Copy Direction** | "Tests that catch bugs. Not tests that collect dust." |

## Severity Ranking

| Rank | Pain | Severity | Rationale |
|------|------|----------|-----------|
| 1 | P3: Architecture violations | CRITICAL | Production bugs, security holes, compounding damage |
| 2 | P1: Context loss | HIGH | Root cause of most other pains — wrong context = wrong everything |
| 3 | P8: Merge conflicts (multi-agent) | HIGH | Wastes entire days of parallel work, blocks Agent Teams adoption |
| 4 | P7: CC spirals | HIGH | Cascading debt turns fixable bugs into rewrites |
| 5 | P9: Fake tests | HIGH | False confidence leads to production failures |
| 6 | P4: Confidently wrong | MEDIUM-HIGH | Subtle logic errors require deep review |
| 7 | P2: Token burn | MEDIUM | Financial cost + wasted time, but recoverable |
| 8 | P5: Best practices soup | MEDIUM | Friction, not failure — code works but doesn't fit |
| 9 | P6: Prompt fatigue | MEDIUM | Tedium, not risk — annoying but manageable |

## Pain → Feature Density

| Pain | forge-core | forge-product | forge-qa | forge-tracker | forge-autopilot | forge-worktree |
|------|-----------|---------------|----------|---------------|-----------------|----------------|
| P1: Context loss | ●●● | ● | | | | |
| P2: Token burn | ●●● | | ● | | ● | |
| P3: Architecture violations | ●●● | | ● | | | |
| P4: Confidently wrong | ●● | ●●● | ●●● | | | |
| P5: Best practices soup | ●●● | ●● | | | | |
| P6: Prompt fatigue | ●●● | | | | | |
| P7: CC spirals | ●●● | | ● | | | |
| P8: Merge conflicts | ● | | | ● | ●●● | ●●● |
| P9: Fake tests | | ●● | ●●● | | | |

**Insight:** forge-core solves 7 of 9 pains — it's the hero product. forge-autopilot + forge-worktree are the multi-agent story. forge-product + forge-qa are the quality force multipliers. forge-tracker enables the autopilot workflow but isn't a direct pain solver.

## Landing Page Section Mapping (Developer-Only)

| Section | Pain Points | Key Message | Position |
|---------|------------|-------------|----------|
| **Hero** | All (overview) | "AI-powered dev tools that actually understand your project" | Top |
| **Problem Statement** | P1 + P3 + P7 | AI without context breaks things. Quick fixes spiral. | After hero |
| **Core Value Prop** | P1 + P5 + P6 | One setup, permanent context. Never re-explain your stack. | After problem |
| **Pipeline Demo** | P2 + P7 | Surgical precision: execution modes, context isolation, no runaway sessions | Mid-page |
| **Quality Story** | P3 + P4 + P9 | Architecture guardrails + traceable tests = real confidence | Mid-page |
| **Multi-Agent Story** | P8 | forge-autopilot + forge-worktree: parallel work that merges | Mid-page |
| **Module Breakdown** | All | 6 modules, what each solves | After stories |
| **How It Works** | P6 | `forge setup` → detect → generate → done | Mid-lower |
| **Pricing** | — | Starter / Pro / Bundle tiers | Lower |
| **Author/Trust** | — | Built by developers, for developers | After pricing |
| **FAQ** | Developer-specific questions | Technical depth, integration, compatibility | Bottom |
