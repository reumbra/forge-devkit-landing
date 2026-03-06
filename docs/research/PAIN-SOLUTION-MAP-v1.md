# Pain → Solution Map — Forge DevKit

> **Context:** Maps real developer pains (from research) to specific Forge features. Each mapping becomes a potential landing page section or copy block. Source: [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md) + [FEATURE-MATRIX.md](./FEATURE-MATRIX.md)

## Segment A: Developers

### P1: Context Loss at Scale → forge-core Architecture Audit
| | |
|---|---|
| **Pain** | "AI loses context as project grows. Picks wrong files. Doesn't understand architecture." |
| **Emotion** | Frustration, distrust, feeling of regression |
| **Forge Solution** | 7-gate setup wizard auto-detects stack, layers, architecture pattern, CI/CD. Generates project-specific dev-skills that encode full context. AI always knows the rules. |
| **Proof Point** | Real CLI output: `forge setup` → detected NestJS + Clean Architecture + 3 layers + PostgreSQL |
| **Copy Direction** | "Your AI forgets your architecture. Forge doesn't." |

### P2: Token Burn & Runaway Sessions → forge-core Pipeline Phases
| | |
|---|---|
| **Pain** | "Millions of tokens for 100 lines. Agent generates garbage. Chaotic changes. Huge bills." |
| **Emotion** | Financial anxiety, wasted time, loss of control |
| **Forge Solution** | Structured pipeline phases scope AI work. Quality gates stop runaway. Scope decomposition splits large tasks. Agent self-review before presenting results. |
| **Proof Point** | Pipeline: Phase 0 (context) → Phase 1 (contracts) → Phase 2 (implement) → Phase 3 (verify). Each scoped, each gated. |
| **Copy Direction** | "Structured AI workflows. No runaway sessions, no surprise bills." |

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

## Pain → Feature Density

| Pain | forge-core | forge-product | forge-qa | forge-tracker |
|------|-----------|---------------|----------|---------------|
| P1: Context loss | ●●● | ● | | |
| P2: Token burn | ●●● | | | |
| P3: Architecture violations | ●●● | | ● | |
| P4: Confidently wrong | ●● | ●●● | ●●● | |
| P5: Best practices soup | ●●● | ●● | | |
| P6: Prompt fatigue | ●●● | | | |

**Insight:** forge-core solves 5 of 6 pains. It's the hero product. forge-product and forge-qa are force multipliers.

## Segment B: Entrepreneurs / Vibe Coders

### EP1: Idea-to-MVP Gap → forge-product + forge-core
| | |
|---|---|
| **Pain** | "Have an idea but no money for a developer. Stuck between notebook and real product." |
| **Emotion** | Frustration, helplessness, desire to act |
| **Forge Solution** | forge-product: design features in business language (flows, stories, UX). forge-core: AI builds from that design with architecture guardrails. No dev skills required for the design phase. |
| **Proof Point** | `/forge:design "subscription checkout"` → generates user flow + 5 user stories + acceptance criteria → AI implements with quality gates |
| **Copy Direction** | "From idea to structured MVP. No dev team required — yet." |

### EP2: Black Box Anxiety → forge-core Pipeline + forge-qa
| | |
|---|---|
| **Pain** | "AI changes files but I don't know what it did. When it breaks, I can't debug." |
| **Emotion** | Fear, loss of control, dependency anxiety |
| **Forge Solution** | Structured pipeline: clear phases you can follow. forge-qa auto-generates tests — you see green/red without reading code. Traceability shows which requirement each piece serves. |
| **Proof Point** | Pipeline output: "Phase 1: contracts ✅ → Phase 2: implement ✅ → Phase 3: verify (12/12 tests pass) ✅" |
| **Copy Direction** | "Transparent AI development. See exactly what was built and why." |

### EP3: Chaotic Codebase → forge-core Architecture
| | |
|---|---|
| **Pain** | "Files everywhere. Data behaves strangely. Impossible to hand off to a real developer." |
| **Emotion** | Embarrassment, sunk cost anxiety |
| **Forge Solution** | Architecture audit enforces clean structure from day one. Templates, naming conventions, quality patterns. The code looks like a senior engineer wrote it. |
| **Proof Point** | Project structure tree: clean layers, consistent naming, documented conventions |
| **Copy Direction** | "Code your future team can actually work with." |

### EP5: Handoff Fear → forge-core Quality + Disposable Meta-Tool
| | |
|---|---|
| **Pain** | "When I hire a developer, will they say 'throw everything away and rewrite'?" |
| **Emotion** | Deep anxiety about wasted time and money |
| **Forge Solution** | Production-grade code from day one. Generated artifacts follow real engineering practices. When you hire devs, they inherit a clean codebase. Forge itself can be removed — artifacts stay. |
| **Proof Point** | "I showed the codebase to a senior dev. He said 'this is well-structured, I can work with this.'" (future testimonial direction) |
| **Copy Direction** | "MVP your future dev team won't hate." |

### Entrepreneur Pain → Feature Density

| Pain | forge-core | forge-product | forge-qa | forge-tracker |
|------|-----------|---------------|----------|---------------|
| EP1: Idea-to-MVP | ●● | ●●● | | |
| EP2: Black box | ●●● | | ●●● | |
| EP3: Chaotic code | ●●● | | | |
| EP4: Deploy terror | ● | | | |
| EP5: Handoff fear | ●●● | | ●● | |
| EP6: Security | ●● | | ●● | |

**Insight:** For entrepreneurs, forge-core + forge-product are the hero combo. forge-qa is the confidence builder. forge-tracker is less relevant initially.

## Combined Landing Page Section Mapping

| Section | Developer Pain | Entrepreneur Pain | Position |
|---------|--------------|-------------------|----------|
| **Hero** | All (overview) | All (overview) | Top |
| **Problem → Solution** | P1+P3+P5: AI without context | EP1+EP3: idea without structure | After hero |
| **Use Cases** | "For Developers" block | "For Entrepreneurs" block | Mid-page |
| **Modules** | P2 (pipeline), P4 (wrong code) | EP2 (black box), EP5 (handoff) | After use cases |
| **How It Works** | P6 (one setup) | EP1 (idea → product path) | Mid-page |
| **Pricing** | Shared | Shared | Lower |
| **Author/Trust** | Authority (by devs for devs) | EP5 (real engineering behind it) | After modules |
| **FAQ** | Dev-specific questions | Entrepreneur-specific questions | Bottom |
