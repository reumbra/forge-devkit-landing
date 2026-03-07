# Messaging Framework — Forge DevKit

> **Version:** v2 (2026-03-06). Developer-only focus, 6 modules, one-time pricing fix, updated with 2026 research. v1 archived as MESSAGING-FRAMEWORK-v1.md

> **Context:** Complete messaging strategy synthesized from all research documents. Defines positioning, value propositions, emotional hooks, copy direction per section, and voice rules. Source: AUDIENCE-RESEARCH, PAIN-SOLUTION-MAP, COMPETITOR-LANDSCAPE, 005-product-hypotheses, 002-brand-guidelines, FEATURE-MATRIX, PRINCIPLES.

---

## 1. Positioning Statement

### One-Liner (internal)
Forge DevKit — architecture-aware AI pipeline that auto-generates project-specific guardrails, quality patterns, and development workflows for AI coding agents across any platform.

### Positioning Formula

**For** developers (senior devs, tech leads, AI agent users)
**who** use AI coding agents (Claude Code, Cursor, Claude Cowork)
**Forge DevKit is** an architecture-aware AI pipeline
**that** auto-generates project-specific guardrails from codebase audit
**unlike** manual rules (Cursor Rules, CLAUDE.md), generic AI assistants, and autonomous agents (Devin) that don't understand your project
**Forge** provides a full development pipeline (architecture → product design → quality gates → testing → agent orchestration) that works across platforms and survives plugin removal.

### Positioning Anchors

| Anchor | We ARE | We are NOT |
|--------|--------|------------|
| Product type | Quality layer / AI pipeline | Builder / Code generator |
| Approach | Prevention (guardrails before code) | Detection (review after code) |
| Platform | Platform-agnostic (.claude/) | Locked to one IDE/tool |
| Lifecycle | Disposable meta-tool (artifacts survive) | Runtime dependency |
| Scope | Full pipeline (architecture → QA → agent teams) | Just rules / just tests |
| Audience | Developers (senior devs, tech leads, AI agent users) | Enterprise / non-technical PMs |

---

## 2. Value Proposition Hierarchy

### Level 1: Core Promise
**"AI that respects your architecture."**

Developers hear: "My AI agent follows MY project rules, not generic best practices."

### Level 2: Value Props

| Priority | Value Prop | Pain Addressed | Copy Direction |
|----------|-----------|----------------|----------------|
| 1 | Your project's rules, not textbook defaults | P3 (architecture violations) + P5 (best practices soup) | "50 guardrails your AI doesn't know it needs" |
| 2 | Encode your expertise once, never repeat yourself | P6 (prompt fatigue) + P1 (context loss) | "One setup → architecture audit → project-aware AI forever" |
| 3 | Surgical precision, predictable costs | P2 (token burn) | "Your AI reads what it needs, not everything you have. Economy mode for bug fixes, quality mode for features — you control the budget." |
| 4 | Tests that trace back to requirements | P4 (confidently wrong) | "Every test proves a requirement. Not AI guesswork" |
| 5 | Parallel agents without merge hell | P7 (agent team conflicts) | "Run Agent Teams safely. Conflicts detected before code is written." |

### Level 3: Technical Proof Points

| Claim | Proof |
|-------|-------|
| "Architecture-aware" | 7-gate wizard, 3 template families, 15+ framework detectors |
| "50 guardrails" | Auth guards, RLS, decimal precision, N+1, type coverage — per stack |
| "15 rationalization detectors" | AI cutting corners detected: scope creep, missing validation, silent failures |
| "Tests from requirements" | AC → unit tests, UC → E2E, UX criteria → UI assertions. Traceability tags in code |
| "Full pipeline" | architecture audit → dev-skills → quality patterns → product design → tests → task sync → agent orchestration |
| "Platform-agnostic" | .claude/ directory works in Claude Code CLI, Desktop, Cursor, Claude Cowork |
| "Disposable" | Generated artifacts (dev-skills, tests, docs) work independently after plugin removal |
| "6 modules" | forge-core, forge-product, forge-qa, forge-tracker, forge-autopilot, forge-worktree |
| "Agent Teams" | backlog → conflict detection → wave execution, 3 autonomy modes (supervised, semi-auto, full-auto) |
| "Pipeline economy" | 4 execution modes (economy→quality), adaptive auto-detection, tag-based step filtering, context isolation per phase, artifact protocol (~500 tok resume vs ~49K reload) |

---

## 3. Emotional Architecture

### Developer Emotional Journey (on landing page)

```
Recognition ("that's MY problem")
  → "AI loses your architecture as your project grows"
  → "You re-explain your stack in every prompt"
  → "AI writes textbook code that doesn't fit YOUR project"
  → "Your Agent Teams create merge conflicts you can't resolve"
  → "AI generates tests that test nothing"

Relief ("someone understands")
  → "We built this because we had the same problem"
  → "Senior engineer experience encoded into AI workflows"

Trust ("these people are real")
  → Real CLI output, real terminal, real file structures
  → Author with real engineering background
  → Transparent one-time pricing
  → "Kubernetes for Agent Teams" — infrastructure you understand

Desire ("I want this")
  → "One setup, project-aware AI forever"
  → "50 guardrails your AI doesn't know it needs"
  → "Agent Teams that don't create merge hell" — peak moment
  → Side-by-side: generic AI vs Forge-guided AI

Action ("let me try")
  → "Audit your architecture" (CTA)
  → Clear pricing, clear install path
```

---

## 4. Messaging Per Landing Section

### Section 1: Hero

**Section label:** `FORGE DEVKIT` (JetBrains Mono, uppercase, #9A75EA)

**Headline:**
> Your AI writes code. Forge makes it production-ready.

Single headline. No dual-audience split.

**Subheadline:**
> Architecture-aware AI pipeline. Auto-generates project-specific guardrails, quality patterns, and development workflows — across any platform.

**CTA pair:**
- Primary: "Audit your architecture →"
- Ghost: "See how it works"

**Hero proof element:** Real terminal output showing `forge setup` detecting architecture (animated typing effect or static screenshot).

---

### Section 2: Problem

**Section label:** `THE PROBLEM`

**Headline:**
> Your AI doesn't know your project

**2x2 pain grid (developer-only):**

| Pain | Description |
|------|-------------|
| **Context Loss** | AI forgets your architecture as the project grows. Every session starts from zero. |
| **Architecture Violations** | AI breaks DDD modules, shortcuts validations, ignores your security patterns. |
| **Copy-Change Spirals** | Millions of tokens for 100 lines. AI rewrites files in circles. Surprise bills. |
| **Fake Tests** | Tests pass but test nothing. AI generates assertions that match its own output, not requirements. |

**Transition line:**
> The problem isn't AI. It's unstructured AI.

---

### Section 3: Solution Overview

**Section label:** `THE SOLUTION`

**Headline:**
> Architecture-aware pipeline for AI agents

**3 pillars:**

| Pillar | Headline | Description | Icon direction |
|--------|----------|-------------|----------------|
| **Audit** | Understands your project | 7-gate wizard detects stack, layers, patterns, conventions. No manual config. | Architecture diagram / grid |
| **Structure** | Enforces your standards | 50+ quality patterns, naming conventions, 15 rationalization detectors. Prevention, not detection. | Shield / guardrail |
| **Execute** | Structures the workflow | Design → implement → verify. Scoped phases, quality gates, agent orchestration. | Pipeline / flow arrows |

**Proof line:**
> One `forge setup` → your AI codes like a senior engineer who's read every file in the repo.

---

### Section 4: Pipeline Visualization (NEW)

**Section label:** `THE PIPELINE`

**Headline:**
> Six modules. One pipeline.

**Visual:** Horizontal flow diagram showing the 6-module pipeline:

```
forge-core → forge-product → forge-qa → forge-tracker → forge-autopilot → forge-worktree
  Audit        Design         Test        Track           Orchestrate      Isolate
```

**Key message:** Each module feeds the next. Use them together for a full pipeline, or pick individual modules — each works standalone.

**Module flow description:**
1. **forge-core** — Audit architecture, generate guardrails and dev-skills
2. **forge-product** — Design features with acceptance criteria before code
3. **forge-qa** — Generate tests traced to requirements (AC → unit, UC → E2E, UX → component)
4. **forge-tracker** — Sync tasks with GitHub, ClickUp, Linear, Notion, Jira
5. **forge-autopilot** — Orchestrate Agent Teams with conflict detection and wave execution
6. **forge-worktree** — Isolate parallel work in git worktrees with environment templates

---

### Section 5: Deep Dive — forge-core

**Section label:** `FORGE-CORE`

**Headline:**
> Your project's rules. Not textbook defaults.

**Key numbers:** 50+ quality patterns. 15 rationalization detectors. 3 execution modes.

**4 pain→solution cards:**

**Card 1: Context Loss**
- Label: `ARCHITECTURE AUDIT`
- Pain: "AI forgets your architecture as the project grows"
- Solution: "7-gate wizard auto-detects stack, layers, patterns. Generates dev-skills with full project context. AI always knows the rules."
- Proof: Real CLI output of architecture detection

**Card 2: Architecture Violations**
- Label: `QUALITY PATTERNS`
- Pain: "AI breaks invariants, shortcuts validations, ignores security"
- Solution: "50+ quality patterns enforced per stack. Auth guards, RLS, decimal precision, N+1. 15 LLM rationalization detectors halt AI cutting corners."
- Proof: Red flag example: "AI skipping input validation — halting"

**Card 3: Prompt Fatigue**
- Label: `ONE-TIME SETUP`
- Pain: "I re-explain my architecture in every prompt"
- Solution: "One `forge setup` → architecture audit → generated dev-skills with all conventions. Never repeat yourself."
- Proof: Before (500-word prompt) vs After (`forge setup` once)

**Card 4: Execution Modes**
- Label: `3 MODES`
- Pain: "Small fix gets the same heavy pipeline as a full feature"
- Solution: "Sequential for features, parallel for independent tasks, patch for targeted fixes. Right-sized pipeline per task."
- Proof: Mode selector output showing scope detection

---

### Section 6: Deep Dive — forge-autopilot (NEW)

**Section label:** `FORGE-AUTOPILOT`

**Headline:**
> Agent Teams without merge hell.

**Peak moment section.** This is the emotional climax of the page — the "I didn't know I needed this" reveal.

**Key message:** Run multiple AI agents in parallel on the same codebase. forge-autopilot detects conflicts before code is written, orchestrates wave execution, and merges results cleanly.

**3 capability cards:**

**Card 1: Conflict Detection**
- Label: `BEFORE CODE`
- "Backlog analysis detects file-level conflicts between tasks. Agents never work on the same files simultaneously."

**Card 2: Wave Execution**
- Label: `ORCHESTRATED PARALLELISM`
- "Tasks grouped into conflict-free waves. Each wave runs in isolated worktrees. Tech lead agent supervises."

**Card 3: Autonomy Modes**
- Label: `YOUR LEVEL OF CONTROL`
- "Supervised: approve every merge. Semi-auto: approve waves. Full-auto: tech lead handles everything. You choose."

**Analogy line:**
> Agent Teams are Docker containers. forge-autopilot is Kubernetes.

---

### Section 7: Deep Dive — forge-qa

**Section label:** `FORGE-QA`

**Headline:**
> Tests that prove requirements. Not AI guesswork.

**Key message:** Every test traces back to a requirement. No more tests that pass but verify nothing.

**3-level traceability:**

| Source | Test type | Example |
|--------|-----------|---------|
| Acceptance Criteria | Unit tests | `// AC: US-3.AC-2 — User receives email within 5 minutes` |
| Use Cases | E2E tests | Full user flow from login to checkout |
| UX Criteria | Component tests | Visual regression, interaction patterns |

**Proof:** Test comment showing traceability tag linking test to specific acceptance criterion.

---

### Section 8: How It Works

**Section label:** `HOW IT WORKS`

**Headline:**
> One setup. Project-aware AI forever.

**3-step flow:**

| Step | Label | Action | Output |
|------|-------|--------|--------|
| 1 | **Install** | `npm i -g @reumbra/forge && forge activate <license>` | CLI ready, plugins downloaded |
| 2 | **Setup** | `forge setup` | 7-gate wizard → dev-skills, quality patterns, pipeline |
| 3 | **Develop** | Use Claude Code / Cursor / Cowork normally | AI follows your project's rules |

**Key message:** "Forge installs to `.claude/` — your AI tools detect it automatically. Works everywhere: Claude Code CLI, Claude Desktop, Cursor, Claude Cowork."

**Closing:** "Generated artifacts work independently. Remove the plugin — your rules, tests, and docs stay."

---

### Section 9: Module Grid

**Section label:** `MODULES`

**Headline:**
> Six modules. One pipeline.

**Module cards (6 cards, in priority order):**

| Module | Tagline | Key number | Position |
|--------|---------|------------|----------|
| **forge-core** | Architecture audit & AI guardrails | 50+ quality patterns | Hero module — largest card |
| **forge-product** | Feature design with acceptance criteria | 9 product archetypes | Second |
| **forge-qa** | Tests that trace back to requirements | 10 test modes | Third |
| **forge-tracker** | Bridge backlog and development | 5 tracker integrations | Fourth |
| **forge-autopilot** | Agent Teams with conflict detection | 3 autonomy modes | Fifth |
| **forge-worktree** | Git worktree lifecycle management | 3 environment templates | Sixth |

**Module relationship line:**
> Use them together for a full pipeline. Use them separately — each module works standalone.

---

### Section 10: Pricing Teaser

**Section label:** `PRICING`

**Headline:**
> One-time purchase. No subscription. Your artifacts stay forever.

**Pricing principle:** Show early, show clearly. Transparent pricing is a trust signal. Developer backlash against subscription/token-based pricing is documented. Door-in-the-Face: compare against Devin's $500/mo before showing one-time pricing.

**Tiers:**

| Tier | Price | Includes | Audience |
|------|-------|----------|----------|
| **Starter** | $29 (one-time) | forge-core | Entry point — architecture audit & guardrails |
| **Pro** | $79 (one-time) | forge-core + forge-product + forge-qa + forge-tracker | Full development pipeline |
| **Bundle** | $149 (one-time) | All 6 modules + all future modules | Complete ecosystem |

**Licensing model:** JetBrains model — one-time purchase, 1 year of updates included, 3 device activations.

**Trust signals below pricing:**
- "One-time purchase. Not $20/month. Not per-token."
- "1 year of updates included. Renew only if you want new features."
- "Remove Forge anytime — your generated artifacts stay forever."

**Contrast line:**
> Devin: $500/mo subscription to replace your developer. Forge: $29-149 once to enhance YOUR AI agent.

---

### Section 11: Author / Trust Section

**Section label:** `BUILT BY`

**Headline:**
> By a developer, for developers

**Key message:** Not an empty stamp. Real face, real engineering background, real opinions encoded in the tools. Martin Sikora — senior engineer, founder of Reumbra.

**Elements:**
- Photo (real, not stock)
- Short bio (2-3 sentences, focused on engineering credibility)
- Technical philosophy quote (specific opinion, not generic)
- Link to Reumbra

**Principle:** "Authority must be real. 'By developers for developers' works only when backed by real face, real experience, real opinions."

---

### Section 12: FAQ

**Section label:** `FAQ`

**7 developer-focused questions:**

| Question | Answer direction |
|----------|-----------------|
| "How is this different from writing .cursorrules myself?" | Auto-generated from architecture audit, not manual. Full pipeline, not just rules. Platform-agnostic. |
| "Does it work with my stack?" | 15+ framework detectors. 3 template families. Stack-specific quality patterns. |
| "What if I remove Forge?" | Disposable: generated artifacts (dev-skills, tests, docs) work independently. Your code, rules, tests stay. |
| "Does it work outside Claude Code?" | .claude/ directory detected by Cursor, Claude Desktop, Claude Cowork automatically. |
| "Will it conflict with my existing rules?" | Collision detection built into setup wizard. Merges, not overwrites. |
| "How is this different from Devin?" | Devin replaces your developer. Forge enhances your AI agent with project-specific guardrails. You stay in control. |
| "Is this a subscription?" | No. One-time purchase. JetBrains model: buy once, 1 year of updates, renew only for new features. Artifacts stay forever. |

---

### Section 13: Final CTA

**Headline:**
> Your AI writes code. Make it production-ready.

**CTA:** "Get Forge →" (links to /pricing)

**Subtext:** "One-time purchase. Works in 60 seconds."

---

## 5. Voice & Tone Rules

### Tone Spectrum

```
MORE ←───────────────────────────────────→ LESS
Direct          ·····█····                  Indirect
Confident       ·····█····                  Tentative
Technical       ····█·····                  Simplified
Specific        ······█···                  Abstract
Concise         ·····█····                  Verbose
```

### Copy Rules

| Rule | Example | Anti-example |
|------|---------|--------------|
| Lead with pain, not features | "AI forgets your architecture" | "Forge has 50+ quality patterns" |
| Specific > generic | "CQRS, DDD, Event Sourcing" | "Modern architecture" |
| Outcomes > features | "Fewer production bugs" | "Quality pattern enforcement" |
| Short headlines | "Your project's rules" (3 words) | "A comprehensive solution for project-specific AI configuration" |
| Real content | `forge setup` terminal output | Abstract diagram |
| Honest scope | "Enhance your AI agent" | "Never write code again" |

### Word Lists (from brand guidelines)

**Use:** Precision, engineering, architecture, scale, depth, reliable, thoughtful, production-grade, solid, clean, guardrails, pipeline, structured, project-aware, opinionated

**Never:** Innovative, revolutionary, best-in-class, cutting-edge, passionate, world-class, leverage, synergy, disruptive, robust, magic, autonomous (as positive), 10x, AI-powered (as differentiator)

### Headline Formula

`[Your/AI's problem] + [our specific solution]`
- "Your AI writes code. Forge makes it production-ready."
- "50 guardrails your AI doesn't know it needs."
- "Your project's rules. Not textbook defaults."
- "Agent Teams without merge hell."
- "Tests that prove requirements. Not AI guesswork."

### Paragraph Limits
- Headlines: 2-8 words
- Subheadlines: 1 sentence, max 20 words
- Card descriptions: 2-3 sentences, max 50 words
- Body paragraphs: 2-3 sentences, max 60 words
- Section transitions: 1 sentence

---

## 6. Competitive Differentiation Messaging

### When users compare us to:

| Competitor | Our response | Tone |
|-----------|-------------|------|
| Cursor Rules | "Forge generates rules from architecture audit. Not manual writing. Full pipeline, not just rules. Works in Cursor AND everywhere else." | Factual, not dismissive |
| CLAUDE.md | "CLAUDE.md is a single file. Forge generates a full development pipeline: architecture audit → quality patterns → dev-skills → tests → task management → agent orchestration." | Additive, not competitive |
| Copilot / Cursor (the tools) | "Forge makes your existing AI assistant project-aware. We enhance, not replace." | Complementary |
| Devin | "They replace your developer. We enhance YOUR AI agent. $500/mo subscription vs $29-149 once. You stay in control of your codebase." | Direct value comparison |
| Agent Teams (raw) | "Agent Teams = Docker containers. forge-autopilot = Kubernetes. Raw parallelism vs orchestrated infrastructure with conflict detection." | Analogy-driven |
| Code review tools | "They check code after it's written. Forge guides code while it's written. Prevention, not detection." | Different approach |
| Consulting | "Same expertise, product form. $29-149 once vs thousands. Self-service, scalable, always up to date." | Value comparison |

### The GAP Statement (for internal use)
> No product that auto-generates a full dev pipeline (architecture → product → QA → tasks → agent orchestration → worktree isolation) for AI agents, platform-agnostically. Cursor rules are manual. CLAUDE.md is manual. Consulting is expensive. AI builders have no guardrails. Devin replaces you instead of enhancing your tools.

---

## 7. CTA Strategy

### Primary CTAs (single-audience)

| Location | CTA | Type | Target |
|----------|-----|------|--------|
| Hero | "Audit your architecture →" | Primary button | /pricing |
| After problem section | "See how it works" | Ghost button (scroll) | #how-it-works |
| Deep dives (core, autopilot, qa) | "Start with forge-core →" | Primary button | /pricing |
| Module grid | "Get Starter →" / "Get Pro →" / "Get Bundle →" | Primary button | /pricing |
| After pricing | "Get Forge →" | Primary button | /pricing |
| Sticky/floating | "Get Forge →" | Compact primary | /pricing |
| Final CTA | "Get Forge →" | Primary button | /pricing |

### CTA Rules
- Max 1 primary button per viewport (brand guideline)
- Arrow suffix: " →" on all CTAs
- Sentence case: "Audit your architecture", not "AUDIT YOUR ARCHITECTURE"
- Every CTA links to /pricing
- Ghost buttons for secondary actions (scroll, learn more)

---

## 8. Social Proof Strategy (Future)

### What we need (don't have yet):
- Beta user testimonials (3-5 developers)
- GitHub stars / npm downloads count
- "Used by X developers" counter
- Before/after comparison (real project)

### What we can show now:
- Real CLI output (authentic, not mockup)
- Real generated file structures
- Author credibility (Martin Sikora bio)
- Technical specifics (50+ patterns, 15+ framework detectors, 15 detectors, 6 modules) — numbers that are precise, not inflated

### Testimonial direction (for future collection):
- "I stopped re-explaining my architecture in every prompt."
- "Forge caught 3 security shortcuts my AI made in one session."
- "forge-autopilot ran 4 agents on my monorepo without a single merge conflict."
- "One-time purchase. I own my workflow. No subscription anxiety."

---

## 9. i18n Messaging Notes

### English (primary)
- Direct, confident, technical
- Default voice throughout this document

### Russian (secondary)
- Same directness, adapted idioms
- Technical terms stay in English: AI, CLI, DDD, CQRS, etc.
- "Гайдрейлы для ваших AI-агентов" — mix is natural for RU dev audience
- Avoid over-translating: "Форк" not "ответвление", "деплой" not "развёртывание"
- Key translations to validate: hero headline, CTA labels, pain descriptions

---

## 10. Section Flow (Narrative Arc)

```
1. HERO
   "Your AI writes code. Forge makes it production-ready."
   Emotion: Recognition + curiosity

2. PROBLEM
   2x2 pain grid: context loss, violations, spirals, fake tests
   Emotion: Pain recognition ("that's me")

3. SOLUTION OVERVIEW
   3 pillars: Audit → Structure → Execute
   Emotion: Relief ("someone understands")

4. PIPELINE VISUALIZATION
   6-module flow diagram
   Emotion: "This is a real system, not a toy"

5. DEEP DIVE: forge-core
   50+ patterns, 15 detectors, 3 modes
   Emotion: "This solves MY specific problem"

6. DEEP DIVE: forge-autopilot
   Agent Teams without merge hell — peak moment
   Emotion: "I didn't know I needed this"

7. DEEP DIVE: forge-qa
   AC→unit, UC→E2E, UX→component
   Emotion: "Finally, tests that mean something"

8. HOW IT WORKS
   3 steps: install → setup → develop
   Emotion: "That's simpler than I expected"

9. MODULE GRID
   6 cards — comprehensive but modular
   Emotion: "I can start small and grow"

10. PRICING
    One-time $29/$79/$149 vs Devin $500/mo
    Emotion: Trust ("no surprises, no subscription")

11. AUTHOR
    Real face, real story
    Emotion: Authority ("this person is real")

12. FAQ
    7 developer questions — objection handling
    Emotion: "My last concern is answered"

13. FINAL CTA
    "Get Forge →"
    Emotion: Ready to act
```

**Narrative arc:** Pain → Understanding → Solution → Proof → Peak Moment → Trust → Action

This follows the problem-agitate-solve (PAS) structure for a single developer audience, with a trust-building middle section (How it Works + Modules + Pricing + Author) and an emotional peak at forge-autopilot before the final conversion push.
