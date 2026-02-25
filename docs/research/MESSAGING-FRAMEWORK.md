# Messaging Framework — Forge DevKit

> **Context:** Complete messaging strategy synthesized from all research documents. Defines positioning, value propositions, emotional hooks, copy direction per section, and voice rules. Source: AUDIENCE-RESEARCH, PAIN-SOLUTION-MAP, COMPETITOR-LANDSCAPE, 005-product-hypotheses, 002-brand-guidelines, FEATURE-MATRIX, PRINCIPLES.

---

## 1. Positioning Statement

### One-Liner (internal)
Forge DevKit — architecture-aware AI pipeline that auto-generates project-specific guardrails, quality patterns, and development workflows for AI coding agents across any platform.

### Positioning Formula

**For** developers and technical entrepreneurs
**who** use AI coding agents (Claude Code, Cursor, Claude Cowork)
**Forge DevKit is** an architecture-aware AI pipeline
**that** auto-generates project-specific guardrails from codebase audit
**unlike** manual rules (Cursor Rules, CLAUDE.md), generic AI assistants, and no-code builders
**Forge** provides a full development pipeline (architecture → product design → quality gates → testing) that works across platforms and survives plugin removal.

### Positioning Anchors

| Anchor | We ARE | We are NOT |
|--------|--------|------------|
| Product type | Quality layer / AI pipeline | Builder / Code generator |
| Approach | Prevention (guardrails before code) | Detection (review after code) |
| Platform | Platform-agnostic (.claude/) | Locked to one IDE/tool |
| Lifecycle | Disposable meta-tool (artifacts survive) | Runtime dependency |
| Scope | Full pipeline (architecture → QA) | Just rules / just tests |
| Audience | Developers + technical entrepreneurs | Enterprise / non-technical PMs |

---

## 2. Value Proposition Hierarchy

### Level 1: Core Promise (shared)
**"AI that respects your architecture."**

Works for both segments:
- Developers hear: "My AI agent follows MY project rules, not generic best practices"
- Entrepreneurs hear: "AI builds structured, maintainable code — not chaotic spaghetti"

### Level 2: Segment-Specific Value Props

**Developers:**

| Priority | Value Prop | Pain Addressed | Copy Direction |
|----------|-----------|----------------|----------------|
| 1 | Your project's rules, not textbook defaults | P3 (architecture violations) + P5 (best practices soup) | "50 guardrails your AI doesn't know it needs" |
| 2 | Encode your expertise once, never repeat yourself | P6 (prompt fatigue) + P1 (context loss) | "One setup → architecture audit → project-aware AI forever" |
| 3 | Structured workflows, predictable costs | P2 (token burn) | "Pipeline phases prevent runaway sessions" |
| 4 | Tests that trace back to requirements | P4 (confidently wrong) | "Every test proves a requirement. Not AI guesswork" |

**Entrepreneurs:**

| Priority | Value Prop | Pain Addressed | Copy Direction |
|----------|-----------|----------------|----------------|
| 1 | MVP your future dev team won't hate | EP5 (handoff fear) + EP3 (chaotic code) | "Production-grade code from day one. No rewrite when you hire" |
| 2 | Design features in your language, AI builds to spec | EP1 (idea-to-MVP) | "Describe in business terms → structured implementation" |
| 3 | See exactly what was built and why | EP2 (black box) | "Transparent phases: design → build → verify. Green/red, no guessing" |
| 4 | Your code, your rules, your tests — they stay | Disposable meta-tool | "Forge artifacts survive removal. Ready for a real team" |

### Level 3: Technical Proof Points

| Claim | Proof |
|-------|-------|
| "Architecture-aware" | 7-gate wizard, 3 template families, 8+ framework detection |
| "50 guardrails" | Auth guards, RLS, decimal precision, N+1, type coverage — per stack |
| "15 rationalization detectors" | AI cutting corners detected: scope creep, missing validation, silent failures |
| "Tests from requirements" | AC → unit tests, UC → E2E, UX criteria → UI assertions. Traceability tags in code |
| "Full pipeline" | architecture audit → dev-skills → quality patterns → product design → tests → task sync |
| "Platform-agnostic" | .claude/ directory works in Claude Code CLI, Desktop, Cursor, Claude Cowork |
| "Disposable" | Generated artifacts (dev-skills, tests, docs) work independently after plugin removal |

---

## 3. Emotional Architecture

### Developer Emotional Journey (on landing page)

```
Recognition ("that's MY problem")
  → "AI loses your architecture as your project grows"
  → "You re-explain your stack in every prompt"
  → "AI writes textbook code that doesn't fit YOUR project"

Relief ("someone understands")
  → "We built this because we had the same problem"
  → "Senior engineer experience encoded into AI workflows"

Trust ("these people are real")
  → Real CLI output, real terminal, real file structures
  → Author with real engineering background
  → Transparent flat pricing

Desire ("I want this")
  → "One setup, project-aware AI forever"
  → "50 guardrails your AI doesn't know it needs"
  → Side-by-side: generic AI vs Forge-guided AI

Action ("let me try")
  → "Audit your architecture" (CTA)
  → Clear pricing, clear install path
```

### Entrepreneur Emotional Journey

```
Recognition ("that's MY fear")
  → "Will your future dev team rewrite everything from scratch?"
  → "AI changes files but you don't know what it did"
  → "Working prototype ≠ production-ready code"

Hope ("there's a way")
  → "Design features in business language"
  → "AI builds with senior-level guardrails"
  → "No team yet — but code that's ready for one"

Confidence ("I can trust this")
  → Pipeline phases: design → build → verify
  → Green/red test results without reading code
  → "Forge artifacts survive removal — your code stays yours"

Action ("let me start")
  → "Design your first feature" (CTA)
  → Clear pricing, clear value per tier
```

---

## 4. Messaging Per Landing Section

### Hero Section

**Section label:** `FORGE DEVKIT` (JetBrains Mono, uppercase, #9A75EA)

**Primary headline (developers):**
> AI agents that respect your codebase

**Primary headline (entrepreneurs):**
> MVP your future team won't hate

**Implementation:** Either A/B test both, or use developer headline as primary (larger audience, stronger product-market fit) with entrepreneur subtext.

**Subheadline:**
> Architecture-aware AI pipeline. Auto-generates project-specific guardrails, quality patterns, and development workflows — across any platform.

**CTA pair:**
- Primary: "Audit your architecture →" (devs) / "Design your first feature →" (entrepreneurs)
- Ghost: "See how it works"

**Hero proof element:** Real terminal output showing `forge setup` detecting architecture (animated typing effect or static screenshot).

---

### Problem Section

**Section label:** `THE PROBLEM`

**Headline:**
> Your AI doesn't know your project

**Two-column pain display:**

| Developer pain | Entrepreneur pain |
|---|---|
| AI breaks DDD modules, shortcuts validations | Files everywhere, data behaves strangely |
| Re-explain your architecture in every prompt | Can't interpret what AI changed or if it's safe |
| Millions of tokens for 100 lines. Surprise bills | "When I hire devs, will they say rewrite everything?" |
| Code looks clean but logic doesn't match requirements | Working prototype but no one can maintain it |

**Transition line:**
> The problem isn't AI. It's unstructured AI.

---

### Solution Overview

**Section label:** `THE SOLUTION`

**Headline:**
> Architecture-aware pipeline for AI agents

**Key message (3 pillars):**

| Pillar | Headline | Description | Icon direction |
|--------|----------|-------------|----------------|
| **Audit** | Understands your project | 7-gate wizard detects stack, layers, patterns, conventions. No manual config. | Architecture diagram / grid |
| **Guard** | Enforces your standards | 50+ quality patterns, naming conventions, 15 rationalization detectors. Prevention, not detection. | Shield / guardrail |
| **Pipeline** | Structures the workflow | Design → implement → verify. Scoped phases, quality gates, requirement traceability. | Pipeline / flow arrows |

**Proof line:**
> One `forge setup` → your AI codes like a senior engineer who's read every file in the repo.

---

### For Developers Block

**Section label:** `FOR DEVELOPERS`

**Headline:**
> Your project's rules. Not textbook defaults.

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

**Card 4: Wrong Code**
- Label: `REQUIREMENT TRACEABILITY`
- Pain: "Code looks clean but logic is wrong. Hallucinated APIs."
- Solution: "forge-product creates verifiable acceptance criteria BEFORE code. forge-qa generates tests FROM those criteria. Every test traces back to a requirement."
- Proof: Test comment `// AC: US-3.AC-2 — User receives email within 5 minutes`

---

### For Entrepreneurs Block

**Section label:** `FOR ENTREPRENEURS`

**Headline:**
> From idea to code your team can inherit

**3 pain→solution cards:**

**Card 1: Idea-to-MVP**
- Label: `FEATURE DESIGN`
- Pain: "Have an idea but no team. Don't want to become a developer."
- Solution: "Describe features in business language. Forge creates user flows, stories, acceptance criteria. AI builds from that spec with architecture guardrails."
- Proof: `/forge:design "subscription checkout"` → structured output

**Card 2: Black Box**
- Label: `TRANSPARENT PIPELINE`
- Pain: "AI changes files but I don't know what it did or if it's safe"
- Solution: "Structured phases: design → build → verify. See green/red test results without reading code. Every piece traces back to a requirement."
- Proof: Pipeline output: "Phase 1: contracts ✅ → Phase 2: implement ✅ → Phase 3: verify (12/12 tests pass) ✅"

**Card 3: Handoff**
- Label: `HANDOFF-READY`
- Pain: "When I hire devs, will they say 'throw it away and rewrite'?"
- Solution: "Production-grade code from day one. Clean architecture, naming conventions, quality patterns. Forge artifacts survive removal — your code, rules, tests stay."
- Proof: Clean project structure tree with consistent naming

**Closing line:**
> No team yet needed. But when you hire — the codebase is ready.

---

### How It Works

**Section label:** `HOW IT WORKS`

**Headline:**
> One setup. Project-aware AI forever.

**4-step flow:**

| Step | Label | Action | Output |
|------|-------|--------|--------|
| 1 | **Install** | `npm i -g @reumbra/forge` | CLI ready |
| 2 | **Activate** | `forge activate <license>` | Plugins downloaded |
| 3 | **Setup** | `forge setup` | 7-gate wizard → dev-skills, quality patterns, pipeline |
| 4 | **Code** | Use Claude Code / Cursor / Cowork normally | AI follows your project's rules |

**Key message:** "Forge installs to `.claude/` — your AI tools detect it automatically. Works everywhere: Claude Code CLI, Claude Desktop, Cursor, Claude Cowork."

**Closing:** "Generated artifacts work independently. Remove the plugin — your rules, tests, and docs stay."

---

### Modules Section

**Section label:** `MODULES`

**Headline:**
> Four modules. One pipeline.

**Module cards (in priority order per principle #29):**

| Module | Tagline | Key number | Position |
|--------|---------|------------|----------|
| **forge-core** | Architecture audit & AI guardrails | 50+ quality patterns | Hero module — largest card |
| **forge-product** | Feature design in business language | 8 product archetypes | Second |
| **forge-qa** | Tests that trace back to requirements | 8+ test frameworks | Third |
| **forge-tracker** | Bridge backlog and development | 5 tracker integrations | Fourth |

**Module relationship line:**
> Use them together for a full pipeline. Use them separately — each module works standalone.

---

### Pricing Section

**Section label:** `PRICING`

**Headline:**
> Transparent pricing. No token billing.

**Pricing principle:** Show early, show clearly. Transparent pricing is a trust signal (principle #31). Developer backlash against hidden/token-based pricing is documented.

**Tiers:**

| Tier | Price | Includes | Audience |
|------|-------|----------|----------|
| **Core** | $29/mo | forge-core | Developers — entry point |
| **Pro** | $79/mo | forge-core + forge-product + forge-qa | Developers & entrepreneurs — full pipeline |
| **Team** | $149/mo | All modules + team features | Teams |

**Trust signals below pricing:**
- "Flat monthly. No per-token charges."
- "Cancel anytime. Your generated artifacts stay forever."
- "14-day money-back guarantee." (if applicable)

---

### Author / Trust Section

**Section label:** `BUILT BY`

**Headline:**
> By a developer, for developers

**Key message:** Not an empty stamp. Real face, real engineering background, real opinions encoded in the tools. Martin Sikora — senior engineer, founder of Reumbra.

**Elements:**
- Photo (real, not stock)
- Short bio (2-3 sentences, focused on engineering credibility)
- Technical philosophy quote (specific opinion, not generic)
- Link to Reumbra

**Principle #27:** "Authority must be real. 'By developers for developers' works only when backed by real face, real experience, real opinions."

---

### FAQ Section

**Section label:** `FAQ`

**Developer questions:**

| Question | Answer direction |
|----------|-----------------|
| "How is this different from writing .cursorrules myself?" | Auto-generated from architecture audit, not manual. Full pipeline, not just rules. Platform-agnostic. |
| "Does it work with my stack?" | 8+ frameworks. 3 template families. Stack-specific quality patterns. |
| "What if I remove Forge?" | Disposable: generated artifacts (dev-skills, tests, docs) work independently. |
| "Does it work outside Claude Code?" | .claude/ directory detected by Cursor, Claude Desktop, Claude Cowork automatically. |
| "Will it conflict with my existing rules?" | Collision detection built into setup wizard. Merges, not overwrites. |

**Entrepreneur questions:**

| Question | Answer direction |
|----------|-----------------|
| "Do I need to know how to code?" | Feature design phase (forge-product) uses business language. For implementation, use Claude Cowork or Cursor with Forge installed. |
| "Will a real developer be able to work with this code?" | That's the entire point. Production-grade architecture, naming conventions, quality patterns. |
| "How is this different from Bolt/Lovable?" | They generate code. Forge ensures the generated code is maintainable. Quality layer on top, not a replacement. |
| "What if I outgrow the MVP?" | Forge artifacts are real engineering artifacts. They scale with your project. |

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

| Rule | Example ✅ | Anti-example ❌ |
|------|-----------|----------------|
| Lead with pain, not features | "AI forgets your architecture" | "Forge has 50+ quality patterns" |
| Specific > generic | "CQRS, DDD, Event Sourcing" | "Modern architecture" |
| Outcomes > features | "Fewer production bugs" | "Quality pattern enforcement" |
| Short headlines | "Your project's rules" (3 words) | "A comprehensive solution for project-specific AI configuration" |
| Real content | `forge setup` terminal output | Abstract diagram |
| Honest scope | "No team yet needed" | "Never hire a developer again" |

### Word Lists (from brand guidelines)

**Use:** Precision, engineering, architecture, scale, depth, reliable, thoughtful, production-grade, solid, clean, guardrails, pipeline, structured, project-aware, opinionated

**Never:** Innovative, revolutionary, best-in-class, cutting-edge, passionate, world-class, leverage, synergy, disruptive, robust, magic, autonomous, 10x, AI-powered (as differentiator)

### Headline Formula

**Developer headlines:** `[Your/AI's problem] + [our specific solution]`
- "Your AI forgets your architecture. Forge doesn't."
- "50 guardrails your AI doesn't know it needs."
- "Your project's rules. Not textbook defaults."

**Entrepreneur headlines:** `[Desired outcome] + [fear addressed]`
- "MVP your future team won't hate."
- "From idea to code your team can inherit."
- "No team yet needed. But the codebase is ready."

### Paragraph Limits
- Headlines: 2-6 words
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
| CLAUDE.md | "CLAUDE.md is a single file. Forge generates a full development pipeline: architecture audit → quality patterns → dev-skills → tests → task management." | Additive, not competitive |
| Copilot / Cursor (the tools) | "Forge makes your existing AI assistant project-aware. We enhance, not replace." | Complementary |
| Bolt / Lovable | "They generate code. We ensure the generated code is maintainable. Quality layer on top, not a replacement." | Different category |
| Code review tools | "They check code after it's written. Forge guides code while it's written. Prevention, not detection." | Different approach |
| Consulting | "Same expertise, product form. $29/mo vs thousands. Self-service, scalable, always up to date." | Value comparison |

### The GAP Statement (for internal use)
> No product that auto-generates a full dev pipeline (architecture → product → QA → tasks) for AI agents, platform-agnostically, serving both developers and entrepreneurs. Cursor rules are manual. CLAUDE.md is manual. Consulting is expensive. AI builders have no guardrails.

---

## 7. CTA Strategy

### Primary CTAs

| Location | Dev CTA | Entrepreneur CTA | Type |
|----------|---------|-------------------|------|
| Hero | "Audit your architecture →" | "Design your first feature →" | Primary button |
| After problem section | "See how it works" | "See how it works" | Ghost button (scroll) |
| After use case blocks | "Start with forge-core →" | "Start with Pro →" | Primary button |
| After pricing | "Get started →" | "Get started →" | Primary button |
| Sticky/floating | "Get Forge →" | "Get Forge →" | Compact primary |

### CTA Rules
- Max 1 primary button per viewport (brand guideline)
- Arrow suffix: " →" on all CTAs
- Sentence case: "Audit your architecture", not "AUDIT YOUR ARCHITECTURE"
- Every CTA links to pricing section or checkout (LemonSqueezy overlay)
- Ghost buttons for secondary actions (scroll, learn more)

---

## 8. Social Proof Strategy (Future)

### What we need (don't have yet):
- Beta user testimonials (2-3 developers, 1-2 entrepreneurs)
- GitHub stars / npm downloads count
- "Used by X developers" counter
- Before/after comparison (real project)

### What we can show now:
- Real CLI output (authentic, not mockup)
- Real generated file structures
- Author credibility (Martin Sikora bio)
- Technical specifics (50+ patterns, 8+ frameworks, 15 detectors) — numbers that are precise, not inflated

### Testimonial direction (for future collection):
- Developer: "I stopped re-explaining my architecture in every prompt."
- Developer: "Forge caught 3 security shortcuts my AI made in one session."
- Entrepreneur: "I showed the codebase to a freelancer. He said he could work with it."

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
- Entrepreneur copy may need more adaptation — RU entrepreneur audience may be smaller
- Key translations to validate: hero headline, CTA labels, pain descriptions

---

## 10. Section Flow (Narrative Arc)

```
1. HERO
   Hook: "AI agents that respect your codebase"
   Emotion: Recognition + curiosity

2. PROBLEM
   "Your AI doesn't know your project"
   Emotion: Pain recognition ("that's me")

3. SOLUTION OVERVIEW
   "Architecture-aware pipeline"
   Emotion: Relief ("someone understands")

4. FOR DEVELOPERS / FOR ENTREPRENEURS
   Segment-specific pain→solution
   Emotion: "This solves MY specific problem"

5. HOW IT WORKS
   4-step install flow
   Emotion: "That's simpler than I expected"

6. MODULES
   Four modules, one pipeline
   Emotion: "This is comprehensive but modular"

7. PRICING
   Transparent flat pricing
   Emotion: Trust ("no surprises")

8. AUTHOR
   Real face, real story
   Emotion: Authority ("these people are real")

9. FAQ
   Objection handling
   Emotion: "My last concern is answered"

10. FINAL CTA
    "Get Forge →"
    Emotion: Ready to act
```

**Narrative arc:** Pain → Understanding → Solution → Proof → Trust → Action

This follows the classic problem-agitate-solve (PAS) structure adapted for dual audience with a trust-building middle section (How it Works + Modules + Pricing + Author) before the final conversion push.
