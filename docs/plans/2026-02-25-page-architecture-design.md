# Page Architecture Design — Forge DevKit Landing

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Define the complete information architecture, section flow, content blocks, and visual strategy for the Forge DevKit landing page.

**Architecture:** Long-form landing page (14 sections, ~14 screens), developer-first with entrepreneur mini-landing embedded. Monaspace-style progressive value reveal for deep dive sections. Problem-first narrative arc (A+C approach).

**Tech Stack:** Astro 5.x SSG, Tailwind CSS v4 with @theme, adapted FSD (pages → widgets → shared), vanilla JS for interactivity.

**Source Documents:**
- [MESSAGING-FRAMEWORK.md](../research/MESSAGING-FRAMEWORK.md) — copy direction, emotional arcs, CTAs
- [PAIN-SOLUTION-MAP.md](../research/PAIN-SOLUTION-MAP.md) — pain→solution mappings
- [005-product-hypotheses.md](../research/005-product-hypotheses.md) — validated hypotheses
- [002-brand-guidelines-summary.md](../research/002-brand-guidelines-summary.md) — visual specs
- [FEATURE-MATRIX.md](../research/FEATURE-MATRIX.md) — proof points
- [PRINCIPLES.md](../research/PRINCIPLES.md) — 44 guardrails

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Audience strategy | Dev-first hero, entrepreneur mini-landing below (B+C) | forge-core is hero product (principle #29). Entrepreneur separate landing later based on analytics |
| Content density | Long-form, 14 sections (A) | Dual audience + 4 modules + complex product needs space. Developers skim fast anyway |
| Visual approach | Monaspace-style progressive value reveal (C) | Each block = one facet + visual proof. Real content, not marketing (principles #14, #32) |
| Proof points | Styled code blocks from real output | Real data in crafted presentation. Screenshots from user later |
| Entrepreneur block | Full story, 3-4 cards (A) | Only touchpoint until separate landing exists. Must address EP1, EP2, EP5 |
| Deep dive layout | Alternating text/visual (zigzag) | Left-right-left-right. Visual interest + natural reading flow |

---

## Section Map

| # | Section | ~Viewport | Emotion | Primary Element |
|---|---------|-----------|---------|-----------------|
| 1 | Hero | 100vh | Curiosity | Terminal: forge setup |
| 2 | Problem | 0.7vh | Recognition | Pain quote cards |
| 3 | Solution Overview | 1vh | Relief | 3 pillar cards |
| 4 | Deep: Architecture Audit | 1.2vh | "Show me" | Terminal: architecture detection |
| 5 | Deep: Quality Patterns | 1.2vh | "That's smart" | Code: red flag detector |
| 6 | Deep: Structured Pipeline | 1.2vh | "I need this" | Phase flow visualization |
| 7 | Deep: Tests from Requirements | 1.2vh | "Finally" | Test file with traceability tags |
| 8 | How It Works | 1vh | "That's simple" | 4-step horizontal flow |
| 9 | Modules | 1vh | "Comprehensive" | 4 module cards (core = hero) |
| 10 | Entrepreneur Mini-Landing | 2vh | Hope → confidence | 3 pain→solution cards + CTA |
| 11 | Pricing | 1vh | Trust | 3 tier cards, Pro highlighted |
| 12 | Author / Trust | 0.7vh | Authority | Real photo + personal quote |
| 13 | FAQ | 1.2vh | Objections resolved | Accordion (7 questions) |
| 14 | Final CTA + Footer | 0.5vh | Action | Last conversion + legal links |

**Narrative arc:** Hook → Pain → Solution (overview) → Proof (4 deep dives) → Simplicity → Completeness → Entrepreneurs → Trust → Action

---

## Section 1: Hero

**Widget:** `HeroSection`
**Viewport:** 100vh, content centered vertically

### Layout
```
┌─────────────────────────────────────────────────┐
│  [Nav: logo | Features  Pricing  FAQ | CTA btn] │
│                                                 │
│            FORGE DEVKIT (section label)          │
│                                                 │
│        AI agents that respect                   │
│           your codebase                         │
│                                                 │
│  Architecture-aware pipeline. Project-specific  │
│  guardrails, quality patterns, and dev          │
│  workflows — across any platform.               │
│                                                 │
│  [Audit your architecture →]   [How it works]   │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ $ forge setup                             │  │
│  │                                           │  │
│  │ ✓ Gate 1: Stack detected — NestJS 10      │  │
│  │ ✓ Gate 2: Architecture — Clean Arch       │  │
│  │ ✓ Gate 3: 3 layers detected               │  │
│  │ ✓ Gate 4: PostgreSQL + TypeORM            │  │
│  │ ✓ Gate 5: Naming conventions — consistent │  │
│  │ ✓ Gate 6: CI/CD — GitHub Actions          │  │
│  │ ✓ Gate 7: 12 dev-skills generated         │  │
│  │                                           │  │
│  │ ✨ Project ready. AI is now               │  │
│  │    architecture-aware.                    │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| Section label | `FORGE DEVKIT` — JetBrains Mono 11-12px Medium, #9A75EA, letter-spacing 0.15em, uppercase |
| Headline | "AI agents that respect your codebase" — Satoshi Black 48-72px, #FFFFFF, letter-spacing -0.02em |
| Subheadline | "Architecture-aware pipeline..." — Satoshi Regular 18px, #CCCCCC, max-width 640px |
| CTA primary | "Audit your architecture →" — bg #7649C4, text #FFF, radius 10px, padding 14px 36px |
| CTA ghost | "How it works" — transparent bg, #A5A5A5 text, border 1px rgba(165,165,165,0.15). Scrolls to Section 8 |
| Terminal proof | Styled code block — bg #160B2D, border rgba(118,73,196,0.06), radius 14px. Ambient purple glow (radial gradient #7649C4 at 6% opacity, 200px blur) behind terminal |
| Nav | Fixed top, backdrop-filter blur(16px), bg rgba(0,0,0,0.6), border-bottom rgba(118,73,196,0.06), height 64-72px |

### Content

**Headline:** "AI agents that respect your codebase"

**Subheadline:** "Architecture-aware pipeline. Project-specific guardrails, quality patterns, and dev workflows — across any platform."

**Terminal content:** Styled `forge setup` output showing 7-gate wizard detecting a real NestJS project.

### Behavior
- Nav: sticky on scroll, compact on scroll-down (optional: hide on scroll-down, show on scroll-up)
- Terminal: static on load. Optional future enhancement: typing animation
- CTA "How it works": smooth scroll to Section 8
- Mobile: headline 36px, terminal below fold or hidden, single CTA

---

## Section 2: Problem

**Widget:** `ProblemSection`
**Viewport:** ~0.7 screens

### Layout
```
┌─────────────────────────────────────────────────┐
│            THE PROBLEM (section label)           │
│                                                 │
│          Your AI doesn't know                   │
│             your project                        │
│                                                 │
│  ┌────────────────────┐  ┌────────────────────┐ │
│  │ "AI breaks DDD     │  │ "Millions of       │ │
│  │  modules and       │  │  tokens for 100    │ │
│  │  shortcuts         │  │  lines. $50/day    │ │
│  │  validations"      │  │  in bills."        │ │
│  └────────────────────┘  └────────────────────┘ │
│  ┌────────────────────┐  ┌────────────────────┐ │
│  │ "I re-explain my   │  │ "Code looks clean  │ │
│  │  architecture in   │  │  but logic is      │ │
│  │  every single      │  │  completely wrong"  │ │
│  │  prompt"           │  │                    │ │
│  └────────────────────┘  └────────────────────┘ │
│                                                 │
│       The problem isn't AI.                     │
│       It's unstructured AI.                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| Section label | `THE PROBLEM` — JetBrains Mono, #9A75EA, uppercase |
| Headline | "Your AI doesn't know your project" — Satoshi Bold 36-48px |
| Pain cards | 2x2 grid. bg #191919, border rgba(118,73,196,0.06), radius 14px, padding 24px. Quote text in Satoshi Regular 16px italic, #CCCCCC |
| Transition line | "The problem isn't AI. It's unstructured AI." — Satoshi Medium 20px, #FFFFFF |

### Content — Pain Quotes

| Card | Quote | Pain ref |
|------|-------|----------|
| Top-left | "AI breaks DDD modules and shortcuts validations" | P3: architecture violations |
| Top-right | "Millions of tokens for 100 lines. $50/day in bills." | P2: token burn |
| Bottom-left | "I re-explain my architecture in every single prompt" | P6: prompt fatigue |
| Bottom-right | "Code looks clean but logic is completely wrong" | P4: confidently wrong |

### Behavior
- Cards: fade-up on scroll (0.7s ease-out, staggered 100ms between cards)
- No hover effects — these are context, not interactive
- Mobile: 1-column stack
- Transition line: slightly delayed fade-up after cards

---

## Section 3: Solution Overview

**Widget:** `SolutionOverviewSection`
**Viewport:** ~1 screen

### Layout
```
┌─────────────────────────────────────────────────┐
│           THE SOLUTION (section label)           │
│                                                 │
│      Architecture-aware pipeline                │
│         for AI agents                           │
│                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────┐│
│  │   ◇ AUDIT    │ │  ◇ GUARD     │ │◇PIPELINE ││
│  │              │ │              │ │          ││
│  │ Understands  │ │ Enforces     │ │Structures││
│  │ your project │ │ your         │ │the       ││
│  │              │ │ standards    │ │workflow  ││
│  │ 7-gate wizard│ │ 50+ quality  │ │Design →  ││
│  │ auto-detects │ │ patterns, 15 │ │Build →   ││
│  │ stack, layers│ │ LLM rational-│ │Verify    ││
│  │ patterns,    │ │ ization      │ │          ││
│  │ conventions  │ │ detectors    │ │Scoped    ││
│  │              │ │              │ │phases,   ││
│  │              │ │              │ │quality   ││
│  │              │ │              │ │gates     ││
│  └──────────────┘ └──────────────┘ └──────────┘│
│                                                 │
│  One `forge setup` → your AI codes like a       │
│  senior engineer who's read every file.         │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| 3 pillar cards | Equal width, bg #191919, border rgba(118,73,196,0.06), radius 14px, padding 36px 28px |
| Card icon | ◇ diamond — geometric, not rounded (principle #10) |
| Card label | JetBrains Mono 11px uppercase, #9A75EA |
| Card headline | Satoshi SemiBold 24px, #FFFFFF |
| Card description | Satoshi Regular 16px, #CCCCCC, 2-3 sentences |
| Proof line | Satoshi Medium 18px, #FFFFFF. Inline code in JetBrains Mono, bg rgba(118,73,196,0.08) |

### Content — 3 Pillars

| Pillar | Label | Headline | Description |
|--------|-------|----------|-------------|
| 1 | AUDIT | Understands your project | 7-gate wizard auto-detects stack, layers, architecture patterns, and conventions. No manual config. |
| 2 | GUARD | Enforces your standards | 50+ quality patterns, naming conventions, 15 LLM rationalization detectors. Prevention, not detection. |
| 3 | PIPELINE | Structures the workflow | Design → Build → Verify. Scoped phases with quality gates. Requirement traceability end to end. |

**Closing line:** One `forge setup` → your AI codes like a senior engineer who's read every file in the repo.

### Behavior
- Cards: fade-up on scroll, staggered
- Hover: subtle lift (translateY -3px) + border brighten
- Mobile: 1-column stack

---

## Sections 4-7: Deep Dive Blocks (Monaspace-style)

**Pattern:** Each block is ~1.2 screens. Alternating layout: text-left/visual-right → visual-left/text-right (zigzag). Each block is self-contained — one facet of the product with a visual proof.

### Shared specs

| Element | Spec |
|---------|------|
| Section label | JetBrains Mono 11-12px, #9A75EA, uppercase, letter-spacing 0.15em |
| Pain headline | Satoshi Bold 30-36px, #FFFFFF |
| Description | Satoshi Regular 16-18px, #CCCCCC, max 3-4 sentences |
| Code block | bg #160B2D, border rgba(118,73,196,0.06), radius 14px, padding 24px. Font: JetBrains Mono 14px |
| Layout | Two-column (55/45 or 50/50). Zigzag alternation. |
| Animation | Fade-up on scroll, 0.7s ease-out. Code block slightly delayed (0.2s) |
| Mobile | Single column, visual below text |

---

### Section 4: Architecture Audit

**Widget:** `DeepDiveArchitectureSection`
**Layout:** Text LEFT, Terminal RIGHT

### Content

| Element | Content |
|---------|---------|
| Label | `ARCHITECTURE AUDIT` |
| Headline | Your AI forgets your architecture. Forge doesn't. |
| Description | 7-gate wizard auto-detects your stack, layers, architecture patterns, and conventions. Generates project-specific dev-skills. No manual config. No prompt engineering. |
| Visual | Styled terminal — `forge setup` output with architecture detection details |
| Bottom badges | Framework support: NestJS · Django · FastAPI · React · Vue · Angular · Go · Rails |

### Terminal Content (styled code block)
```
$ forge setup

Analyzing project structure...

Stack:      NestJS 10.x
Architecture: Clean Architecture
Layers:
  ├─ domain/       (entities, value objects)
  ├─ application/  (use cases, ports)
  └─ infrastructure/ (adapters, repos)
Database:   PostgreSQL 15 + TypeORM
CI/CD:      GitHub Actions (3 workflows)
Testing:    Jest + Supertest

→ 12 dev-skills generated
→ 47 quality patterns applied
→ Naming conventions: camelCase (code),
  kebab-case (files), PascalCase (classes)

✨ Project ready.
```

### Pain addressed: P1 (context loss) + P6 (prompt fatigue)

---

### Section 5: Quality Patterns

**Widget:** `DeepDiveQualitySection`
**Layout:** Code LEFT, Text RIGHT (zigzag)

### Content

| Element | Content |
|---------|---------|
| Label | `QUALITY PATTERNS` |
| Headline | 50 guardrails your AI doesn't know it needs. |
| Description | Auth guards, RLS policies, decimal precision, N+1 detection, type coverage — enforced per stack. 15 LLM rationalization detectors catch AI cutting corners before it reaches your codebase. |
| Visual | Styled code block — red flag detector catching skipped validation, then fixing it |

### Code Block Content
```
⚠ HALT: AI is skipping input validation
  on UserCreateDTO.

  Rule: All DTOs require class-validator
  decorators per quality-gates.md

  Detected: No validation on 'email',
  'name', 'password' fields.

  Action: Adding validators...

  ✓ Fixed:
    @IsEmail()     email: string
    @MinLength(2)  name: string
    @IsStrongPassword() password: string

  ✓ Validation gate passed.
```

### Pain addressed: P3 (architecture violations) + P4 (confidently wrong)

---

### Section 6: Structured Pipeline

**Widget:** `DeepDivePipelineSection`
**Layout:** Text LEFT, Visual RIGHT (zigzag)

### Content

| Element | Content |
|---------|---------|
| Label | `STRUCTURED PIPELINE` |
| Headline | Structured AI workflows. No runaway sessions. |
| Description | Each task flows through scoped phases with quality gates. AI can't spiral into million-token rewrites. Predictable scope, predictable costs. |
| Visual | Pipeline phase visualization — vertical flow with status indicators |

### Phase Visualization Content
```
Phase 0: Context
  ├─ Read specifications
  ├─ Load dev-skills
  └─ ✅ Context ready

Phase 1: Contracts
  ├─ Define types and interfaces
  ├─ Plan module boundaries
  └─ ✅ Contracts approved

Phase 2: Implement
  ├─ Build within contracts
  ├─ Agent self-review
  └─ ✅ Implementation clean

Phase 3: Verify
  ├─ Run generated tests
  ├─ 12/12 passing ✅
  └─ ✅ Task complete
```

### Pain addressed: P2 (token burn / runaway sessions)

---

### Section 7: Tests from Requirements

**Widget:** `DeepDiveTestsSection`
**Layout:** Code LEFT, Text RIGHT (zigzag)

### Content

| Element | Content |
|---------|---------|
| Label | `REQUIREMENT TRACEABILITY` |
| Headline | Tests that trace back to requirements. Not AI guesswork. |
| Description | forge-product creates verifiable acceptance criteria BEFORE code. forge-qa generates tests FROM those criteria. Every test proves a requirement. |
| Visual | Styled test file with traceability comment tags |

### Code Block Content
```typescript
// checkout.spec.ts

describe('US-3: Order Confirmation', () => {

  // AC: US-3.AC-1
  it('creates order with valid items
      and shipping address', async () => {
    const order = await checkout(validCart);
    expect(order.status).toBe('confirmed');
    expect(order.items).toHaveLength(3);
  });

  // AC: US-3.AC-2
  it('sends confirmation email within
      5 minutes', async () => {
    await checkout(validCart);
    const email = await getLastEmail(user);
    expect(email.subject).toContain('Order');
    expect(email.sentWithin).toBeLessThan(300);
  });

  // UX: loading-2
  it('shows spinner during payment
      processing', async () => {
    const { getByRole } = render(<Checkout />);
    fireEvent.click(getByRole('button'));
    expect(getByRole('progressbar')).toBeVisible();
  });
});
```

### Pain addressed: P4 (confidently wrong code)

---

## Section 8: How It Works

**Widget:** `HowItWorksSection`
**Viewport:** ~1 screen

### Layout
```
┌─────────────────────────────────────────────────┐
│          HOW IT WORKS (section label)            │
│                                                 │
│     One setup. Project-aware AI forever.         │
│                                                 │
│    ①─────────②─────────③─────────④              │
│                                                 │
│  ┌─────────┐ ┌─────────┐ ┌────────┐ ┌────────┐ │
│  │ INSTALL │ │ ACTIVATE│ │ SETUP  │ │ CODE   │ │
│  │         │ │         │ │        │ │        │ │
│  │ npm i -g│ │ forge   │ │ forge  │ │ Use    │ │
│  │ @reumbra│ │ activate│ │ setup  │ │ Claude │ │
│  │ /forge  │ │ <key>   │ │        │ │ Code / │ │
│  │         │ │         │ │ 7-gate │ │ Cursor │ │
│  │         │ │         │ │ wizard │ │ / Cowork│ │
│  │         │ │         │ │ runs   │ │ normally│ │
│  └─────────┘ └─────────┘ └────────┘ └────────┘ │
│                                                 │
│  Works everywhere: Claude Code CLI ·            │
│  Claude Desktop · Cursor · Claude Cowork        │
│                                                 │
│  Generated artifacts work independently.        │
│  Remove the plugin — your rules stay.           │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| 4 steps | Connected by horizontal line with numbered circles (①②③④) |
| Step card | No bg (text only) or very subtle surface. Label: JetBrains Mono uppercase #9A75EA. Command: JetBrains Mono 14px. Description: Satoshi 14px #CCCCCC |
| Platform badges | JetBrains Mono 11px, bg rgba(118,73,196,0.05), radius 4px |
| Disposable callout | Satoshi Regular 16px, #A5A5A5 — important trust signal |

### Content — 4 Steps

| Step | Label | Command | Description |
|------|-------|---------|-------------|
| 1 | INSTALL | `npm i -g @reumbra/forge` | Global CLI install |
| 2 | ACTIVATE | `forge activate <license>` | License key from purchase |
| 3 | SETUP | `forge setup` | 7-gate wizard analyzes project, generates dev-skills |
| 4 | CODE | Use your AI normally | Claude Code / Cursor / Cowork detect .claude/ automatically |

### Behavior
- Steps appear sequentially on scroll (staggered fade-up)
- Connected line animates left-to-right (subtle)
- Mobile: vertical flow, steps stacked

---

## Section 9: Modules

**Widget:** `ModulesSection`
**Viewport:** ~1 screen

### Layout
```
┌─────────────────────────────────────────────────┐
│            MODULES (section label)               │
│                                                 │
│       Four modules. One pipeline.               │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │  ◇ forge-core                        ★    │  │
│  │  Architecture audit & AI guardrails       │  │
│  │                                           │  │
│  │  7-gate wizard · 50+ quality patterns ·   │  │
│  │  15 rationalization detectors ·           │  │
│  │  3 template families                      │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌───────────┐ │
│  │ ◇ forge-    │ │ ◇ forge-qa  │ │ ◇ forge-  │ │
│  │   product   │ │             │ │   tracker │ │
│  │             │ │ Tests from  │ │           │ │
│  │ Feature     │ │ requirements│ │ Bridge    │ │
│  │ design in   │ │             │ │ backlog   │ │
│  │ business    │ │ 8+ test     │ │ and dev   │ │
│  │ language    │ │ frameworks  │ │           │ │
│  │             │ │             │ │ 5 tracker │ │
│  │ 8 product   │ │ Traceability│ │ integra-  │ │
│  │ archetypes  │ │ matrix      │ │ tions     │ │
│  └─────────────┘ └─────────────┘ └───────────┘ │
│                                                 │
│  Use together for a full pipeline.              │
│  Use separately — each module works standalone. │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| forge-core card | Full width, larger padding (40px 32px), ★ "Start here" badge top-right |
| Three module cards | Equal width in row below. Standard card styling |
| All cards | bg #191919, border rgba(118,73,196,0.06), radius 14px. Hover: lift + border glow |
| Module name | JetBrains Mono 16px, #FFFFFF |
| Tagline | Satoshi Regular 16px, #CCCCCC |
| Key stats | JetBrains Mono 12px, #9A75EA — specific numbers |
| Closing line | Satoshi Regular 16px, #A5A5A5 |

### Module Content

| Module | Tagline | Key Stats |
|--------|---------|-----------|
| **forge-core** ★ | Architecture audit & AI guardrails | 7-gate wizard · 50+ quality patterns · 15 rationalization detectors · 3 template families |
| forge-product | Feature design in business language | 8 product archetypes · User flows · Stories with AC · 50 UX criteria |
| forge-qa | Tests from requirements | 8+ test frameworks · AC → unit tests · UC → E2E · Traceability matrix |
| forge-tracker | Bridge backlog and development | 5 integrations: GitHub · ClickUp · Linear · Notion · Jira |

---

## Section 10: Entrepreneur Mini-Landing

**Widget:** `EntrepreneurSection`
**Viewport:** ~2 screens

### Layout
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ──────── ◇ ──────── ◇ ──────── ◇ ────────     │
│                                                 │
│        NOT A DEVELOPER? (section label)         │
│                                                 │
│     MVP your future team                        │
│        won't hate                               │
│                                                 │
│  Forge guides AI to build production-grade      │
│  code from your business idea. No dev skills    │
│  required for the design phase.                 │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ FEATURE DESIGN                            │  │
│  │                                           │  │
│  │ "Have an idea but no team."               │  │
│  │                                           │  │
│  │ Describe features in business language.   │  │
│  │ Forge creates user flows, stories,        │  │
│  │ acceptance criteria. AI builds from       │  │
│  │ that spec with architecture guardrails.   │  │
│  │                                           │  │
│  │ ┌─────────────────────────────────────┐   │  │
│  │ │ $ forge design "subscription        │   │  │
│  │ │   checkout"                         │   │  │
│  │ │                                     │   │  │
│  │ │ → User flow generated (5 steps)     │   │  │
│  │ │ → 4 user stories with AC            │   │  │
│  │ │ → 12 UX criteria applied            │   │  │
│  │ │ → Ready for implementation          │   │  │
│  │ └─────────────────────────────────────┘   │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ TRANSPARENT PIPELINE                      │  │
│  │                                           │  │
│  │ "AI changes files but I don't know        │  │
│  │  what it did."                            │  │
│  │                                           │  │
│  │ See every phase: design → build → verify. │  │
│  │ Green/red test results without reading    │  │
│  │ code. Every piece traces back to a        │  │
│  │ requirement you wrote.                    │  │
│  │                                           │  │
│  │   Phase 1: contracts ✅                   │  │
│  │   Phase 2: implement ✅                   │  │
│  │   Phase 3: verify (12/12 tests pass) ✅   │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ HANDOFF-READY                             │  │
│  │                                           │  │
│  │ "When I hire devs, will they say          │  │
│  │  throw it away and rewrite?"              │  │
│  │                                           │  │
│  │ Production-grade code from day one.       │  │
│  │ Clean architecture, naming conventions,   │  │
│  │ quality patterns, generated tests.        │  │
│  │ Forge artifacts survive removal — your    │  │
│  │ code, rules, and tests stay yours.        │  │
│  │                                           │  │
│  │ "No team yet. But the codebase is ready   │  │
│  │  for one."                                │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│         [Design your first feature →]           │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| Diamond divider | `──── ◇ ──── ◇ ──── ◇ ────` — visual break, new "story". Line: rgba(118,73,196,0.15), diamonds: #9A75EA |
| Section label | `NOT A DEVELOPER?` — JetBrains Mono, #9A75EA, uppercase |
| Headline | "MVP your future team won't hate" — Satoshi Bold 36-48px, #FFFFFF |
| Subheadline | Satoshi Regular 18px, #CCCCCC, 2 sentences |
| 3 cards | Full-width, vertical stack. bg #191919, border, radius 14px, padding 36px 28px |
| Card label | JetBrains Mono 11px uppercase, #9A75EA |
| Pain quote | Satoshi Regular 16px italic, #A5A5A5 |
| Solution text | Satoshi Regular 16px, #CCCCCC |
| Mini proof | Styled code block or phase indicators inside card |
| CTA | "Design your first feature →" — primary button, centered |

### Entrepreneur Cards

| Card | Label | Pain Quote | Solution | Mini Proof |
|------|-------|-----------|----------|------------|
| 1 | FEATURE DESIGN | "Have an idea but no team." | Describe features in business language. Forge creates user flows, stories, acceptance criteria. AI builds from that spec with architecture guardrails. | Terminal: `forge design "subscription checkout"` → output |
| 2 | TRANSPARENT PIPELINE | "AI changes files but I don't know what it did." | See every phase: design → build → verify. Green/red test results without reading code. Every piece traces back to a requirement you wrote. | Phase checkmarks: ✅ ✅ ✅ |
| 3 | HANDOFF-READY | "When I hire devs, will they say throw it away and rewrite?" | Production-grade code from day one. Clean architecture, naming conventions, quality patterns, generated tests. Forge artifacts survive removal — your code, rules, and tests stay yours. | Closing: "No team yet. But the codebase is ready for one." |

### Behavior
- Diamond divider: fade-in on scroll
- Cards: staggered fade-up
- Mobile: cards stack naturally (already full-width)

---

## Section 11: Pricing

**Widget:** `PricingSection`
**Viewport:** ~1 screen

### Layout
```
┌─────────────────────────────────────────────────┐
│            PRICING (section label)               │
│                                                 │
│     Transparent pricing. No token billing.       │
│                                                 │
│  ┌────────────┐ ┌────────────────┐ ┌──────────┐│
│  │   CORE     │ │      PRO       │ │   TEAM   ││
│  │            │ │  ★ Popular     │ │          ││
│  │   $29/mo   │ │                │ │  $149/mo ││
│  │            │ │    $79/mo      │ │          ││
│  │ forge-core │ │                │ │ All      ││
│  │            │ │ forge-core     │ │ modules  ││
│  │ Arch audit │ │ forge-product  │ │ + team   ││
│  │ Quality    │ │ forge-qa       │ │ features ││
│  │ patterns   │ │                │ │          ││
│  │ Dev-skills │ │ Full pipeline: │ │ Roles    ││
│  │ Pipeline   │ │ design to      │ │ Review   ││
│  │            │ │ tested code    │ │ workflow ││
│  │            │ │                │ │ Escalation│
│  │ [Get Core] │ │ [Get Pro →]    │ │[Get Team]││
│  └────────────┘ └────────────────┘ └──────────┘│
│                                                 │
│  Flat monthly. No per-token charges.            │
│  Cancel anytime. Your artifacts stay forever.   │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| 3 tier cards | Pro card: slightly larger, purple border glow rgba(118,73,196,0.2), "★ Popular" badge |
| Price | Satoshi Black 48px, #FFFFFF |
| Tier name | JetBrains Mono 14px uppercase, #9A75EA |
| Features list | Satoshi Regular 15px, #CCCCCC |
| Pro CTA | Primary button. Core/Team: ghost buttons |
| Trust signals | Satoshi Regular 14px, #A5A5A5, centered below cards |

### Pricing Content

| Tier | Price | Includes | Value line |
|------|-------|----------|------------|
| CORE | $29/mo | forge-core | Architecture audit, quality patterns, dev-skills, pipeline phases |
| PRO ★ | $79/mo | forge-core + forge-product + forge-qa | Full pipeline: from feature design to tested code |
| TEAM | $149/mo | All 4 modules + team features | Roles, review workflow, escalation, multi-dev coordination |

**Trust signals:**
- "Flat monthly. No per-token charges."
- "Cancel anytime. Your generated artifacts stay forever."

### Behavior
- CTA buttons trigger LemonSqueezy checkout overlay
- Pro card has subtle ambient glow
- Mobile: cards stack vertically, Pro first (reordered to top)

---

## Section 12: Author / Trust

**Widget:** `AuthorSection`
**Viewport:** ~0.7 screens

### Layout
```
┌─────────────────────────────────────────────────┐
│            BUILT BY (section label)              │
│                                                 │
│       By a developer, for developers             │
│                                                 │
│  ┌──────────┐                                   │
│  │  [Photo] │  Martin Sikora                    │
│  │          │  Senior Engineer · Founder,        │
│  │          │  Reumbra                          │
│  └──────────┘                                   │
│                                                 │
│  "I built Forge because I was tired of           │
│   re-explaining my architecture to AI agents.    │
│   Every project, every prompt, the same          │
│   context from scratch. So I encoded 10 years    │
│   of engineering decisions into a system that    │
│   does it automatically."                        │
│                                                 │
│                          reumbra.com →           │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| Photo | Real photo, 96-120px, radius 14px, border rgba(118,73,196,0.1) |
| Name | Satoshi SemiBold 24px, #FFFFFF |
| Title | Satoshi Regular 16px, #CCCCCC |
| Quote | Satoshi Regular 18px italic, #CCCCCC, max-width 640px. Left border: 2px #7649C4 |
| Link | "reumbra.com →" — Satoshi Medium 14px, #9A75EA |

### Content
- **Photo:** Real photo of Martin Sikora (to be provided)
- **Quote:** Specific technical motivation, not generic. References the exact pain (prompt fatigue) that Forge solves
- **Principle #27:** Authority must be real — real face, real experience, real opinions

---

## Section 13: FAQ

**Widget:** `FaqSection`
**Viewport:** ~1.2 screens

### Layout
```
┌─────────────────────────────────────────────────┐
│               FAQ (section label)                │
│                                                 │
│        Frequently asked questions                │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ ▸ How is this different from writing      │  │
│  │   .cursorrules myself?                    │  │
│  ├───────────────────────────────────────────┤  │
│  │ ▸ Does it work with my stack?             │  │
│  ├───────────────────────────────────────────┤  │
│  │ ▸ What if I remove Forge?                 │  │
│  ├───────────────────────────────────────────┤  │
│  │ ▸ Does it work outside Claude Code?       │  │
│  ├───────────────────────────────────────────┤  │
│  │ ▸ Do I need coding skills to use this?    │  │
│  ├───────────────────────────────────────────┤  │
│  │ ▸ How is this different from Bolt         │  │
│  │   or Lovable?                             │  │
│  ├───────────────────────────────────────────┤  │
│  │ ▸ Will a real developer be able to work   │  │
│  │   with this code?                         │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Elements

| Element | Spec |
|---------|------|
| Accordion | Vanilla JS, `<details>/<summary>` or custom. bg transparent, border-bottom rgba(118,73,196,0.06) |
| Question | Satoshi Medium 16-18px, #FFFFFF. Arrow indicator ▸ rotates on open |
| Answer | Satoshi Regular 16px, #CCCCCC. Padding 16px 0. Max 2-3 sentences |
| Animation | Smooth height transition, 0.3s ease |

### FAQ Content

| # | Question | Answer direction | Audience |
|---|----------|-----------------|----------|
| 1 | How is this different from writing .cursorrules myself? | Auto-generated from architecture audit. Full pipeline, not just rules. Platform-agnostic — works in Cursor AND Claude Code AND Cowork. | Dev |
| 2 | Does it work with my stack? | 8+ frameworks supported. 3 template families (NestJS/Clean Arch, generic backend, frontend). Stack-specific quality patterns auto-detected. | Dev |
| 3 | What if I remove Forge? | Disposable meta-tool: generated artifacts (dev-skills, tests, docs) work independently. Your code doesn't depend on Forge. | Both |
| 4 | Does it work outside Claude Code? | .claude/ directory auto-detected by Cursor, Claude Desktop, Claude Cowork. Forge installs there — all platforms pick it up. | Both |
| 5 | Do I need coding skills to use this? | Feature design phase (forge-product) uses business language — no code. For implementation, use Claude Cowork or Cursor with Forge installed. AI does the coding. | Entrepreneur |
| 6 | How is this different from Bolt or Lovable? | They generate code. Forge ensures generated code is maintainable. Quality layer on top of any AI builder — not a replacement. | Entrepreneur |
| 7 | Will a real developer be able to work with this code? | That's the entire point. Production-grade architecture, naming conventions, quality patterns, generated tests. Code a senior dev would write. | Entrepreneur |

---

## Section 14: Final CTA + Footer

**Widget:** `FinalCtaSection` + `FooterSection`
**Viewport:** ~0.5 screens

### Layout
```
┌─────────────────────────────────────────────────┐
│                                                 │
│     Ready to make your AI                       │
│        architecture-aware?                      │
│                                                 │
│            [Get Forge →]                        │
│                                                 │
│─────────────────────────────────────────────────│
│                                                 │
│  ◇ Forge DevKit          Docs  Pricing  FAQ     │
│  by Reumbra              Privacy  Terms         │
│                          Refund Policy          │
│                                                 │
│  © 2026 Reumbra OU                              │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Final CTA Elements

| Element | Spec |
|---------|------|
| Headline | "Ready to make your AI architecture-aware?" — Satoshi Bold 36px, #FFFFFF |
| CTA button | "Get Forge →" — primary, centered. Larger padding (18px 48px) |
| Background | Subtle ambient glow centered behind CTA |

### Footer Elements

| Element | Spec |
|---------|------|
| Logo | ◇ Forge DevKit — diamond + text |
| Company | "by Reumbra" — Satoshi Regular 14px, #A5A5A5 |
| Nav links | Docs, Pricing, FAQ — Satoshi Regular 14px, #A5A5A5, hover #FFFFFF |
| Legal links | Privacy Policy, Terms of Service, Refund Policy — required by LemonSqueezy/Stripe |
| Copyright | © 2026 Reumbra OÜ — Satoshi Regular 12px, #A5A5A5 |

---

## Responsive Strategy

| Breakpoint | Layout changes |
|------------|---------------|
| Desktop (≥1024px) | Full layouts as designed. Max content width 1200px. |
| Tablet (768-1023px) | 2-column grids → 1 column where needed. Deep dive zigzag maintained. Padding reduced (64px sections). |
| Mobile (<768px) | All single column. Deep dive: text above, visual below. Nav: hamburger menu. Hero terminal: below fold or simplified. Pricing: Pro card first (reordered). Steps: vertical flow. |

### Mobile-Specific Rules
- Never body text below 15px
- Hero headline: 36px (not 48-72px)
- Section padding: 64-80px vertical
- Cards: full-width, no grid
- Terminal code blocks: horizontal scroll if needed
- CTA buttons: full-width on mobile

---

## Animation Strategy

| Element | Animation | Timing |
|---------|-----------|--------|
| Section content | Fade-up on scroll | 0.7s ease-out, triggered at 20% viewport intersection |
| Cards in groups | Staggered fade-up | 100ms delay between cards |
| Hover on cards | translateY(-3px) + border brighten | 0.3s ease |
| Hover on buttons | lighten bg + translateY(-2px) + purple glow | 0.3s ease |
| Pipeline steps (Section 8) | Sequential appearance | 200ms stagger, left to right |
| Diamond divider (Section 10) | Fade-in | 0.5s, before content |
| FAQ accordion | Height transition | 0.3s ease |

**Rule:** One well-timed page-load sequence > scattered micro-interactions (principle #13). Page-load animation for hero only. Everything else: scroll-triggered.

---

## Implementation Notes

### Widget → Component Mapping (FSD)

| Section | Widget name | Key shared/ui components |
|---------|-------------|--------------------------|
| Nav | `NavBar` | Button, Container |
| Hero | `HeroSection` | Button, Container, CodeBlock, Badge |
| Problem | `ProblemSection` | Card, Container |
| Solution | `SolutionOverviewSection` | Card, Container |
| Deep Dives (4) | `DeepDive{Name}Section` | CodeBlock, Container, Badge |
| How it Works | `HowItWorksSection` | Container |
| Modules | `ModulesSection` | Card, Badge, Container |
| Entrepreneurs | `EntrepreneurSection` | Card, CodeBlock, Container, Button |
| Pricing | `PricingSection` | Card, Button, Badge, Container |
| Author | `AuthorSection` | Container |
| FAQ | `FaqSection` | Accordion, Container |
| Final CTA | `FinalCtaSection` | Button, Container |
| Footer | `FooterSection` | Container |

### Data Sources (shared/config/)

All text content comes from config files, never hardcoded in widgets (principle #7):

| Config file | Content |
|-------------|---------|
| `navigation.ts` | Nav links, CTA labels |
| `hero.ts` | Headlines, subheadlines, terminal content |
| `problems.ts` | Pain quotes |
| `solution.ts` | 3 pillar descriptions |
| `deep-dives.ts` | 4 deep dive blocks content + code samples |
| `how-it-works.ts` | 4 steps content |
| `modules.ts` | Module names, taglines, stats |
| `entrepreneurs.ts` | 3 entrepreneur cards content |
| `pricing.ts` | Tiers, prices, features, CTAs |
| `author.ts` | Name, title, quote, photo path |
| `faq.ts` | Questions and answers |
| `footer.ts` | Links, legal, copyright |

### Interactivity (Vanilla JS)

| Feature | Implementation |
|---------|---------------|
| Mobile menu | `<script>` toggle class on nav |
| FAQ accordion | `<details>/<summary>` native or `<script>` with height animation |
| Smooth scroll | `<script>` for "How it works" ghost CTA |
| Scroll animations | IntersectionObserver-based fade-ups |
| Theme toggle | Prepared architecture, dark-only styles for now |
