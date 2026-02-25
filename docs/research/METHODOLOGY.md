# Landing Page Strategy Methodology

> **Context:** Документация процесса создания стратегии лендинга. Записывает ЧТО мы делаем, ЗАЧЕМ и КАК на каждом шаге. Станет основой для будущего forge-плагина по product marketing для предпринимателей.

## What This Is

**Product Marketing & UX Strategy** — междисциплинарный процесс на стыке:
- **Product Marketing** — позиционирование, messaging, ценностные предложения
- **UX Research** — понимание аудитории, болей, паттернов поведения
- **Conversion Optimization** — структура страницы, эмоциональные хуки, CTA-стратегия
- **Competitive Intelligence** — анализ рынка, дифференциация
- **Copywriting Strategy** — тон, голос, формулировки
- **Brand Strategy** — визуальная идентичность, дизайн-система

## Process Pipeline

```
Phase 1: Foundation
├── 1.1 Brand Identity Review
├── 1.2 Product Feature Inventory
└── 1.3 Ecosystem Context Mapping

Phase 2: Research
├── 2.1 Audience Pain Discovery
├── 2.2 Competitor Landscape Analysis
├── 2.3 Developer Psychology & Buying Triggers
└── 2.4 Market Size & Positioning

Phase 3: Strategy
├── 3.1 Pain-to-Solution Mapping
├── 3.2 Value Proposition Hierarchy
├── 3.3 Messaging Framework
├── 3.4 Emotional Hook Design
└── 3.5 Positioning Statement

Phase 4: Page Architecture
├── 4.1 Section Flow & Narrative Arc
├── 4.2 CTA Strategy & Placement
├── 4.3 Social Proof Strategy
├── 4.4 Objection Handling (FAQ)
└── 4.5 Conversion Funnel Design

Phase 5: Content Design
├── 5.1 Copy Direction per Section
├── 5.2 Visual Content Strategy
├── 5.3 Interactive Elements
└── 5.4 i18n Content Adaptation

Phase 6: Validation
├── 6.1 A/B Test Hypotheses
├── 6.2 Analytics Event Plan
└── 6.3 Post-Launch Iteration Plan
```

---

## Phase 1: Foundation — What We Did & Why

### 1.1 Brand Identity Review
**What:** Read and extracted key rules from `reumbra-brand-guidelines.docx`
**Why:** Brand guidelines constrain and guide all design decisions. Without them, landing page will contradict brand identity.
**How:**
1. Read the full brand guidelines document
2. Extracted agent-friendly summary → [002-brand-guidelines-summary.md](./002-brand-guidelines-summary.md)
3. Identified key constraints: color palette, typography scale, component specs, voice rules
4. Recorded design principles → [PRINCIPLES.md](./PRINCIPLES.md) items 8-17
**Output:** Brand rules ready for consumption by design/dev agents

### 1.2 Product Feature Inventory
**What:** Deep-dived all 4 commercial plugins (forge-core, forge-product, forge-qa, forge-tracker) with dedicated agents
**Why:** Can't market what you don't understand. Every feature needs to be mapped to user value before writing any copy.
**How:**
1. Launched 4 parallel agents — one per plugin
2. Each agent read: plugin.json, all skills, all commands, all agents, CHANGELOG.md
3. Collected raw features → [003-plugin-features-raw.md](./003-plugin-features-raw.md)
4. Reorganized into marketing categories → [FEATURE-MATRIX.md](./FEATURE-MATRIX.md)
**Key Insight:** Technical plugin boundaries (core/product/qa/tracker) don't match user mental model. Reorganized into 6 value categories: Setup, Quality, Product Design, Testing, Task Management, Ecosystem.
**Output:** 17 commands, 8 agents, 50+ features categorized for marketing

### 1.3 Ecosystem Context Mapping
**What:** Studied all 4 repos (CLI, API, plugins, landing) to understand full ecosystem
**Why:** Landing page must tell a coherent story about how pieces fit together. CLI install flow, API license validation, plugin delivery — all affect messaging and "How it works" section.
**How:**
1. Launched parallel agents for each repo
2. Mapped: CLI commands, API endpoints, plugin structure, purchase flow
3. Documented tech stack decisions → [001-tech-stack-decisions.md](./001-tech-stack-decisions.md)
**Key Insight:** The ecosystem has a clear 4-step user journey: Buy → Install CLI → Activate License → Setup Project. This becomes the "How it Works" section.
**Output:** Full ecosystem understanding, purchase flow documented

---

## Phase 2: Research — Completed

### 2.1 Audience Pain Discovery (Two Segments)
**What:** Research pains for both segments — developers (AI coding agents) AND entrepreneurs (vibe coders / non-devs)
**Why:** Landing page copy must speak to real frustrations, not assumed ones. Pains drive urgency. No pain = no purchase. Dual audience requires separate pain analysis — same product, different framing.
**How (executed):**
1. Structured research prompt given to human researcher with specific axes: forums (Reddit, HN, IndieHackers), pain categories, emotional context
2. **Segment A (Developers):** Identified 6 pain categories ranked by severity:
   - P1: Context loss at scale (CRITICAL)
   - P2: Token burn & runaway sessions (HIGH)
   - P3: Architecture violations (CRITICAL — highest messaging priority)
   - P4: AI error patterns / confidently wrong code (HIGH)
   - P5: Code quality gap (MEDIUM)
   - P6: Prompt engineering fatigue (MEDIUM)
3. **Segment B (Entrepreneurs):** Identified 6 pain categories:
   - EP1: Idea-to-MVP gap (CRITICAL)
   - EP2: Black box anxiety (HIGH)
   - EP3: Chaotic codebase (HIGH)
   - EP4: Deployment terror (MEDIUM — partially outside scope)
   - EP5: Handoff fear (HIGH — strongest emotional hook)
   - EP6: Security & trust (MEDIUM)
4. Validated every pain against feature set — confirmed we solve them
5. Output → [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md), [PAIN-SOLUTION-MAP.md](./PAIN-SOLUTION-MAP.md)
**Key Insight:** Pain severity ranking differs between segments. Developers: architecture violations > context loss. Entrepreneurs: idea-to-MVP gap > handoff fear. Messaging must lead with the right pain per segment.
**Pattern Applied:** Pain-First Messaging, Outside-In Research

### 2.2 Competitor Landscape Analysis
**What:** Mapped direct + indirect competitors for both segments
**Why:** Positioning requires knowing what you're positioning AGAINST. Differentiation = revenue.
**How (executed):**
1. **Direct competitors:** Cursor Rules ecosystem, Claude CLAUDE.md, auto-gen skills (paid), enterprise consulting
2. **Indirect competitors (devs):** AI coding assistants (Copilot, Cursor, Aider), code quality tools (ESLint, SonarQube), no-code platforms
3. **Indirect competitors (entrepreneurs):** Bubble, Webflow, Lovable, Bolt, Replit Agent, v0, Claude Cowork
4. Created competitive matrix across 10 dimensions
5. Identified market GAP: no product that auto-generates full dev pipeline for AI agents, platform-agnostically, serving both segments
6. Output → [COMPETITOR-LANDSCAPE.md](./COMPETITOR-LANDSCAPE.md)
**Key Insight:** Forge is NOT another builder. It's the quality layer. For developers: enhancement, not replacement. For entrepreneurs: not "hide code" but "real code that devs can inherit."
**Pattern Applied:** Technical → Marketing Reorganization

### 2.3 Developer & Entrepreneur Psychology
**What:** Research buying triggers, emotional hooks, and messaging that works/repels for both segments
**Why:** Developer audience is notoriously resistant to paying. Entrepreneurs are susceptible to hype but burn quickly. Understanding triggers is essential for conversion.
**How (executed):**
1. Studied successful dev tool positioning: Linear (speed/focus), Raycast (extensibility), Railway/Fly.io (simplicity)
2. Identified 4 developer emotional hooks: control/predictability, pain avoidance (not time savings), identity ("for serious engineers"), authority of maker
3. Analyzed "by developers for developers" pattern — works ONLY with real face + real experience (JetBrains, DHH, Guillermo Rauch). Empty stamp = anti-pattern.
4. Documented anti-patterns: over-promise (Aider case), hidden pricing, feature-focused messaging
5. **Entrepreneur hooks:** "no team yet needed" (honest), "MVP your future dev team won't hate" (killer line), transparency beats magic
6. **Entrepreneur repellents:** "fully autonomous" claims, hiding complexity, pure magic narrative
7. Output → sections in [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)
**Key Insight:** Pain avoidance > time savings for BOTH segments. Developers buy "fewer production bugs." Entrepreneurs buy "working product my team can inherit."

### 2.4 Market Size & Positioning
**What:** AI coding tools market context + vibe coding trend analysis
**Why:** Validates opportunity size, contextualizes the shift Forge rides
**How (executed):**
1. Market size: ~$7-8B (2025) → ~$20-24B (2030), CAGR 24-27%
2. Usage: Copilot 1M+ paid, Cursor rapid growth, Claude Code/Replit/Bolt key players
3. Vibe coding trend: from meme → growing criticism → market shift toward "guided/structured AI"
4. Forge positioning: not another builder, not a replacement — THE quality layer that makes vibe coding safe and portable
5. Output → section 4 & 7 in [AUDIENCE-RESEARCH.md](./AUDIENCE-RESEARCH.md)
**Key Insight:** Market is shifting from pure vibe coding → structured AI. Forge IS that shift. Position explicitly.

### 2.5 Dual Audience Strategy (added during research)
**What:** Decided how to address two fundamentally different segments on one landing page
**Why:** Forge serves both senior devs and non-technical entrepreneurs. Message must resonate with both without diluting either.
**How (executed):**
1. Verified platform compatibility: Claude Code CLI ✅, Desktop ✅, Cursor ✅, Claude Cowork ✅
2. Confirmed entrepreneur journey is technically viable (forge-product → forge-core → forge-qa)
3. Evaluated 3 approaches: separate landings (A), shared landing + use case blocks (B), separate + shared funnel (C)
4. **Decision:** Approach B — one landing, two use case blocks, optimize split based on analytics
5. Output → [004-dual-audience-strategy.md](./004-dual-audience-strategy.md)
**Key Insight:** Same features, different framing. Developers buy quality/architecture. Entrepreneurs buy "idea to product without a team." Platform-agnostic value is a shared USP.
**Pattern Applied:** Outside-In Research, Pain-First Messaging

---

## Phase 3: Strategy — In Progress

### 3.1 Pain-to-Solution Mapping ✅
**What:** Mapped every pain to specific Forge features with copy direction
**Why:** Bridge between research and copywriting. Every section on the page must address a real pain.
**How (executed):**
1. For each developer pain (P1-P6): mapped pain → emotion → Forge solution → proof point → copy direction
2. For each entrepreneur pain (EP1-EP6): same mapping
3. Created pain→feature density matrices showing which modules solve which pains
4. Created combined landing page section mapping table
5. Output → [PAIN-SOLUTION-MAP.md](./PAIN-SOLUTION-MAP.md)
**Key Insight:** forge-core solves 5/6 developer pains — it's the hero product. For entrepreneurs, forge-core + forge-product are the hero combo. forge-qa is the confidence builder.

### 3.2 Product Hypotheses Evaluation ✅
**What:** Formulated and evaluated product hypotheses against research data
**Why:** Hypotheses bridge research and action. Without them, landing page strategy is opinion-based, not data-driven.
**How (executed):**
1. Received 8 hypotheses from founder (3 dev, 3 entrepreneur, 2 cross-segment)
2. Evaluated each against: confirmed pains, current product capabilities, competitive positioning, messaging consistency
3. Result: 3 STRONG (A1, B1, B3), 1 REFRAMED (B2→supporting), 1 CONFIRMED (Cross-1), 1 DEFERRED (Cross-2), 2 DROPPED (A2 merged, A3 dropped)
4. Corrected messaging framework: headlines, fears, CTAs aligned with research
5. Output → [005-product-hypotheses.md](./005-product-hypotheses.md)
**Key Insight:** Hypotheses that positioned Forge as a "builder" or "runtime tool" conflicted with research-backed positioning (quality layer, prevention not detection, disposable meta-tool). Correcting early prevents messaging debt.
**Pattern Applied:** Pain-First Messaging, Brand-First Constraints

### 3.3 Messaging Framework (includes Value Props, Emotional Hooks, Positioning) ✅
**What:** Complete messaging strategy — positioning statement, value proposition hierarchy, emotional architecture, copy direction per section, voice rules, CTA strategy, competitive differentiation messaging
**Why:** Messaging Framework is the bridge between research and implementation. Without it, copywriting and design happen in a vacuum. Every section on the page, every headline, every CTA must be grounded in research.
**How (executed):**
1. Synthesized 7 source documents: AUDIENCE-RESEARCH, PAIN-SOLUTION-MAP, COMPETITOR-LANDSCAPE, 005-product-hypotheses, 002-brand-guidelines, FEATURE-MATRIX, PRINCIPLES
2. Defined positioning formula (for/who/is/that/unlike)
3. Created 3-level value prop hierarchy: core promise → segment-specific props → technical proof points
4. Designed emotional journeys for both segments (Recognition → Relief/Hope → Trust/Confidence → Action)
5. Wrote copy direction for each landing section (10 sections)
6. Defined CTA strategy per location and segment
7. Set voice rules, word lists, headline formulas, paragraph limits
8. Documented competitive differentiation responses for 6 competitor types
9. Defined narrative arc: Pain → Understanding → Solution → Proof → Trust → Action
10. Output → [MESSAGING-FRAMEWORK.md](./MESSAGING-FRAMEWORK.md)
**Key Insight:** Messaging Framework combines what were planned as separate steps (3.3-3.6). In practice, value props, emotional hooks, and positioning are deeply intertwined — separating them creates artificial boundaries and inconsistency. One document, one source of truth.
**Pattern Applied:** Brand-First Constraints (voice rules from guidelines), Pain-First Messaging (every section addresses a confirmed pain)

---

## Phase 4: Page Architecture — Completed

### 4.1 Section Flow & Narrative Arc ✅
**What:** Defined 14-section page structure with narrative arc, content blocks, visual specs, and responsive strategy
**Why:** Information architecture bridges strategy and implementation. Without it, developers build sections in isolation without understanding the user's emotional journey.
**How (executed):**
1. Brainstorming skill: clarifying questions → approach proposals → section-by-section design → approval
2. Key decisions made via multiple-choice questions:
   - Audience: Dev-first hero + entrepreneur mini-landing below (B+C)
   - Density: Long-form, 14 sections (~14 screens) (A)
   - Visual: Monaspace-style progressive value reveal (C)
   - Proof points: Styled code blocks from real output
   - Entrepreneur block: Full story, 3 pain→solution cards (A)
   - Structure: Problem-first narrative with Monaspace-style deep dives (A+C)
3. Each section designed with: layout wireframe, element specs (typography, colors, spacing per brand guidelines), content, emotional role, responsive behavior
4. Output → [page-architecture-design.md](../plans/2026-02-25-page-architecture-design.md)
**Key Insight:** Deep dive blocks (Sections 4-7) are the heart of the page — Monaspace-style self-contained proof blocks. Each one: pain headline + visual proof. Zigzag layout. This is what converts developers. Problem section (Section 2) is deliberately short — just enough for recognition, then straight into proof.
**Pattern Applied:** Progressive Value Reveal — each block adds desire. Brand-First Constraints — every spec references brand guidelines.

### 4.2-4.5: Included in 4.1
CTA strategy, social proof, FAQ, and conversion funnel all designed as part of the unified page architecture document.

---

## Phase 5: Content Design — Completed

### 5.1 Design System Implementation ✅
**What:** 9 shared/ui components (Button, Card, Badge, Container, CodeBlock, AccordionItem, SectionLabel, DiamondDivider, StepConnector)
**Why:** Design system ensures visual consistency across all 17 widgets. Components enforce brand guidelines at the code level.
**How:**
1. Extracted design tokens from brand guidelines → `global.css` @theme variables
2. Built atomic components from tokens: colors, radii, shadows, typography
3. Each component accepts props for variants (primary/ghost/secondary, standard/compact padding)
**Output:** `src/shared/ui/` — 9 production-ready Astro components

### 5.2 Content Data Layer ✅
**What:** 12 TypeScript config files with all page content
**Why:** Separating content from presentation enables i18n, A/B testing, and CMS migration
**How:**
1. Created typed config per section: hero.ts, problems.ts, solution.ts, deep-dives.ts, how-it-works.ts, modules.ts, entrepreneurs.ts, pricing.ts, faq.ts, author.ts, navigation.ts, footer.ts
2. Each config exports per-locale data or t() keys
3. All user-facing strings flow through config → widget → render
**Output:** `src/shared/config/` — 12 config files

### 5.3 Widget Assembly ✅
**What:** 17 widgets built exclusively from shared/ui components + content configs
**Why:** FSD architecture: pages → widgets → shared. Widgets are composite blocks that never import each other.
**How:**
1. Built each widget as directory with single .astro file
2. Widget imports: shared/ui components + shared/config data
3. Responsive layout via Tailwind breakpoints (mobile-first)
4. Zigzag layout for deep dives via CSS Grid order
**Output:** `src/widgets/` — 17 widget directories

---

## Phase 6: Validation — In Progress

### 6.1 Visual UX Audit ✅

**What:** Comprehensive visual UX audit of the live landing page across desktop and mobile viewports, covering 6 specialized dimensions
**Why:** Post-implementation validation catches gaps between design spec and reality. Live rendering reveals spacing accumulation, overflow bugs, touch target deficiencies, and conversion flow breaks that are invisible in static mockups.

#### Methodology: Multi-Heuristic Parallel Audit

**Framework composition:** We combined 3 established UX evaluation frameworks into a unified audit methodology optimized for conversion-focused landing pages:

| Framework | Origin | What It Covers | Why We Use It |
|-----------|--------|---------------|---------------|
| **Nielsen's 10 Usability Heuristics** | Jakob Nielsen, 1994 | General usability: visibility, consistency, error prevention, flexibility | Industry standard for heuristic evaluation. Covers navigation, IA, system feedback |
| **CRO Analysis (Conversion Rate Optimization)** | Marketing/growth discipline | Persuasion flow, CTA strategy, friction points, social proof, pricing UX | Landing pages exist to convert. CRO directly measures conversion potential |
| **WCAG 2.1 AA (selected criteria)** | W3C, 2018 | Color contrast, touch targets (≥44px), keyboard navigation, semantic HTML | Accessibility is both ethical and practical — affects ~15% of users |

**Why this combination:** Each framework has blind spots. Nielsen doesn't address conversion. CRO doesn't evaluate navigation usability. WCAG doesn't assess persuasion flow. Combined, they provide 360° coverage for a product landing page.

#### Execution: 6 Parallel Specialized Agents

**Pattern applied:** Parallel Deep-Dive (Pattern 1) — one agent per audit dimension, each with specific criteria and viewport.

```
Desktop Audits (viewport: 1440x900)
├── Agent 1: Visual Design & Hierarchy
│   ├── Criteria: Visual hierarchy, spacing rhythm, typography, color contrast,
│   │            component consistency, section transitions, alignment, white space
│   ├── Reference: design-tokens.md, PRINCIPLES.md, global.css
│   └── Method: Full-page + per-section Playwright screenshots → pixel-level analysis
│
├── Agent 2: CTA & Conversion (CRO)
│   ├── Criteria: Hero value prop, PAS flow, CTA strategy, pricing clarity,
│   │            social proof, objection handling, urgency, friction analysis
│   ├── Reference: MESSAGING-FRAMEWORK.md, hero.ts, pricing.ts, faq.ts
│   └── Method: Screenshot key decision points → map persuasion flow → audit CTA table
│
└── Agent 3: Navigation & Information Architecture
    ├── Criteria: Nielsen's 10 heuristics, section flow logic, page length,
    │            scroll landmarks, nav coverage, deep dive density
    ├── Reference: page-architecture-design.md, navigation.ts, NavBar.astro
    └── Method: Measure all section heights → test all anchor links → assess IA flow

Mobile Audits (viewport: 390x844, 360x800, 768x1024)
├── Agent 4: Responsive Layout & Readability
│   ├── Criteria: Layout reflow, typography scaling, touch targets (≥44px),
│   │            horizontal overflow, code block handling, card layouts, font sizes
│   ├── Reference: Container.astro, Card.astro, Button.astro, CodeBlock.astro
│   └── Method: Multi-viewport testing → measure overflow → audit touch targets
│
├── Agent 5: Mobile Navigation & Scroll
│   ├── Criteria: Hamburger menu UX, scroll length, thumb zone, content density,
│   │            sticky elements, scroll-margin-top, back-to-top, progress indicators
│   ├── Reference: NavBar.astro, navigation.ts
│   └── Method: Interactive testing (click menu, scroll, test anchors) → measure total height
│
└── Agent 6: Mobile Conversion Flow
    ├── Criteria: Above-the-fold impact, CTA map across scroll, pricing on mobile,
    │            FAQ interaction, friction points, floating CTA need
    ├── Reference: hero.ts, pricing.ts, faq.ts, GhostCta, Button.astro
    └── Method: Map all CTAs with Y-positions → identify conversion dead zones → test interactions
```

#### Scoring System

Each audit produces:
- **Overall score (1-100)** — weighted composite of criteria
- **Per-section breakdown** — 1-5 scale per criterion per section
- **Top 5 critical issues** — with file paths, line numbers, specific CSS values
- **Top 5 strengths** — what's working well and should be preserved
- **Actionable recommendations** — prioritized P0/P1/P2/P3 with code-level changes

Severity classification:
- **P0 (Critical):** Broken functionality, accessibility violations, horizontal overflow
- **P1 (High):** Conversion-killing issues, missing CTA zones, trust gaps
- **P2 (Medium):** Spec deviations, suboptimal spacing, missing animations
- **P3 (Low):** Polish items, minor inconsistencies

#### Results Summary

| Audit Dimension | Score | Key Finding |
|----------------|:-----:|-------------|
| Desktop Visual Design | 72/100 | Strong brand identity, but excessive spacing (192-256px between sections) and container over-padding (240px) |
| Desktop CTA & Conversion | 62/100 | Zero social proof, 13 screens without CTA, weak final CTA |
| Desktop Navigation & IA | 52/100 | Broken #features anchor, no scroll indicators on 14-screen page, 3/14 sections in nav |
| Mobile Layout & Responsive | 62/100 | Horizontal overflow (40px), code blocks too large (14px mono), touch targets < 44px |
| Mobile Navigation & Scroll | 52/100 | 21.6 screens without progress indicator, menu doesn't lock scroll, no back-to-top |
| Mobile Conversion Flow | 52/100 | 13 screens CTA desert, smooth scroll = 5s delay, no floating CTA |

**Cross-cutting findings (confirmed by 3+ agents):**
1. Horizontal overflow on mobile — found by agents 4, 5, 6
2. Broken `#features` anchor — found by agents 3, 5
3. CTA desert in middle of page — found by agents 2, 5, 6
4. Excessive vertical padding — found by agents 1, 4
5. No social proof — found by agents 2, 6

**Output:** Consolidated issue tracker with 25 prioritized items, each linked to specific files and code changes.

#### Meta-Insights for Future Plugin

**Pattern 6: Multi-Heuristic Parallel Audit**
**When to use:** After implementation of any multi-section page or complex UI
**How:** Define 4-6 narrow audit dimensions. Launch one agent per dimension with specific criteria, viewport, and reference docs. Each agent uses Playwright for visual verification. Consolidate cross-cutting findings.
**Why it works:**
- Narrow focus prevents "audit fatigue" — each agent goes deep on its dimension
- Parallel execution completes in ~10 min wall-clock (vs ~60 min sequential)
- Cross-agent agreement on issues validates severity (3+ agents = confirmed problem)
- Specific viewports prevent desktop-only bias

**Pattern 7: Viewport-Stratified Testing**
**When to use:** Any responsive page audit
**How:** Test at 3+ viewports per device class: mobile (360, 390), tablet (768), desktop (1440). Each viewport reveals different breakpoint behaviors.
**Why it works:** Breakpoint boundary bugs (e.g., `md:grid-cols-2` at 768px creating 280px columns) only appear at specific widths. Testing at multiple viewports catches edge cases.

### 6.2 A/B Test Hypotheses — Pending
### 6.3 Analytics Event Plan — Pending
### 6.4 Post-Launch Iteration Plan — Pending

---

## Meta: Process Patterns for Future Plugin

### Pattern 1: Parallel Deep-Dive
**When to use:** Product has multiple components that need independent analysis
**How:** Launch one agent per component, each with specific extraction prompt. Merge results.
**Why it works:** Prevents shallow overview. Forces exhaustive enumeration. Parallelism saves time.

### Pattern 2: Technical → Marketing Reorganization
**When to use:** After feature inventory, before messaging
**How:** Take technical categories (by module/API/component) and reorganize into user-value categories
**Why it works:** Users don't think in implementation boundaries. They think in problems and outcomes.

### Pattern 3: Brand-First Constraints
**When to use:** Before any design or copy work
**How:** Extract brand guidelines into agent-consumable format. Record as principles.
**Why it works:** Prevents brand drift. Every decision already has boundaries.

### Pattern 4: Pain-First Messaging
**When to use:** After research, before writing any copy
**How:** Map real audience pains → product features → value propositions → copy direction
**Why it works:** Copy that doesn't address real pain doesn't convert. Features without pain context are noise.

### Pattern 5: Outside-In Research
**When to use:** When you don't know your audience well enough
**How:** Give a structured research prompt (like we did), conduct externally, bring results back
**Why it works:** Breaks echo chamber. Forums have unfiltered developer opinions.
