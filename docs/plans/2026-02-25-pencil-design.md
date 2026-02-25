# Forge Landing — Pencil Design Plan

> **For Claude:** This is a Pencil MCP design plan executed via batch_design operations. Each task is a checkpoint with screenshot verification and user approval.

**Goal:** Create a complete visual design of the Forge DevKit landing page in Pencil (.pen format), following the page architecture from `docs/plans/2026-02-25-page-architecture-design.md`.

**Architecture:** Single .pen file with 14 sections as vertical-stacked frames inside a 1440px-wide page container. Dark theme, purple accent, developer-first. Monaspace-style deep dive blocks.

**Style base:** `webapp-02-terminalminimal_light` adapted — keep terminal aesthetic, replace green (#10B981) with purple (#7649C4/#9A75EA), add Satoshi font for non-code text, keep JetBrains Mono for code/labels.

**Reference docs:**
- `docs/plans/2026-02-25-page-architecture-design.md` — wireframes, content, specs
- `docs/research/002-brand-guidelines-summary.md` — colors, typography, components
- `docs/research/MESSAGING-FRAMEWORK.md` — copy direction
- `docs/research/PRINCIPLES.md` — 44 guardrails

---

## Design Token Reference (from brand guidelines)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| bg | #000000 | Page background |
| surface | #191919 | Cards, nav, footer |
| surface-deep | #160B2D | Code blocks, terminal |
| primary | #7649C4 | Buttons, links, active states |
| secondary | #9A75EA | Hover, section labels, badges |
| accent-soft | #C8B8F4 | CTA text on dark, highlights |
| accent-light | #E0D7FF | Hover on light surfaces |
| text | #FFFFFF | Primary text |
| text-secondary | #CCCCCC | Subtitles, descriptions |
| text-muted | #A5A5A5 | Captions, placeholders |
| border | rgba(118,73,196,0.06) | Card borders |
| border-hover | rgba(118,73,196,0.12) | Card hover borders |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Display/H1 | Satoshi | 64px | 900 Black |
| H2 | Satoshi | 42px | 700 Bold |
| H3 | Satoshi | 28px | 600 SemiBold |
| Body | Satoshi | 16px | 400 Regular |
| Body Large | Satoshi | 18px | 400 Regular |
| Section Label | JetBrains Mono | 12px | 500 Medium |
| Code | JetBrains Mono | 14px | 400 Regular |

### Spacing
| Token | Value |
|-------|-------|
| Section padding (desktop) | 80-120px vertical, 120px horizontal |
| Card padding | 36px 28px |
| Card radius | 14px |
| Button radius | 10px |
| Button padding | 14px 36px |
| Grid gap | 24px |
| Base grid | 8px |

---

## Task 0: Create File & Set Variables

**Goal:** Create .pen file, set up page container and design variables.

**Step 1:** Open new .pen file `designs/forge-landing.pen`

**Step 2:** Create variables matching brand tokens

```
Variables to set:
- bg: #000000
- surface: #191919
- surface-deep: #160B2D
- primary: #7649C4
- secondary: #9A75EA
- accent-soft: #C8B8F4
- text-primary: #FFFFFF
- text-secondary: #CCCCCC
- text-muted: #A5A5A5
- border-subtle: #1E1235 (rgba(118,73,196,0.06) on black ≈ this)
```

**Step 3:** Create page container

```javascript
page=I(document, {type: "frame", name: "Forge Landing", placeholder: true, layout: "vertical", width: 1440, height: "fit_content(8000)", fill: "#000000"})
```

**Step 4:** Verify with screenshot

---

## Task 1: Navigation Bar

**Goal:** Fixed nav with logo, links, CTA button.

**Content:**
- Logo: `◇ Forge DevKit` (diamond + text)
- Links: Features · Pricing · FAQ
- CTA: `Get Forge →`

**Specs:**
- Height: 72px
- Background: rgba(0,0,0,0.6) + backdrop effect simulated with semi-transparent fill
- Border-bottom: 1px #1E1235
- Logo: JetBrains Mono 16px Medium, #FFFFFF
- Links: Satoshi 14px Regular, #A5A5A5
- CTA button: bg #7649C4, text #FFF, Satoshi Medium 15px, radius 10px, padding 10px 24px

**Operations (~10 ops):**
1. Create nav frame (horizontal, fill_container, height 72, padding [0, 120])
2. Create logo frame (horizontal, gap 8)
3. Insert diamond icon (◇ text or path)
4. Insert "Forge DevKit" text
5. Create links frame (horizontal, gap 32, centered)
6. Insert 3 link texts
7. Create CTA button frame
8. Insert CTA text

**Verify:** Screenshot nav

---

## Task 2: Hero Section

**Goal:** Full hero with headline, subheadline, CTAs, and terminal proof block.

**Content:**
- Label: `FORGE DEVKIT`
- Headline: `AI agents that respect your codebase`
- Subheadline: `Architecture-aware pipeline. Project-specific guardrails, quality patterns, and dev workflows — across any platform.`
- CTA primary: `Audit your architecture →`
- CTA ghost: `How it works`
- Terminal: forge setup 7-gate output

**Specs:**
- Height: ~900px (simulating 100vh)
- Padding: 120px horizontal, 80px top (below nav)
- Content centered vertically
- Terminal: bg #160B2D, border #1E1235, radius 14px, padding 24px
- Ambient glow: radial gradient #7649C4 at 6% opacity behind terminal

**Operations (~20-25 ops across 2 batches):**

Batch 1: Layout + text content
1. Create hero frame (vertical, fill_container, height 900, padding [160, 120, 80, 120])
2. Create content wrapper (vertical, gap 24, alignItems center)
3. Insert section label "FORGE DEVKIT" (JetBrains Mono 12px, #9A75EA, letterSpacing 2.4)
4. Insert headline (Satoshi 64px Black, #FFFFFF, textAlign center)
5. Insert subheadline (Satoshi 18px, #CCCCCC, textAlign center, max-width ~640px via fixed-width)
6. Create buttons frame (horizontal, gap 16)
7. Create primary CTA button (bg #7649C4, radius 10, padding [14, 36])
8. Insert CTA text "Audit your architecture →"
9. Create ghost button (bg transparent, border 1px #A5A5A5 15% opacity)
10. Insert ghost text "How it works"

Batch 2: Terminal block
1. Create glow frame (behind terminal, radial gradient purple at 6%)
2. Create terminal frame (bg #160B2D, border #1E1235, radius 14, padding 24, width 600)
3. Insert "$ forge setup" text (JetBrains Mono 14px, #9A75EA)
4. Insert blank line
5. Insert gate lines (JetBrains Mono 14px, #CCCCCC):
   - "✓ Gate 1: Stack detected — NestJS 10"
   - "✓ Gate 2: Architecture — Clean Architecture"
   - "✓ Gate 3: 3 layers detected"
   - "✓ Gate 4: PostgreSQL + TypeORM"
   - "✓ Gate 5: Naming conventions — consistent"
   - "✓ Gate 6: CI/CD — GitHub Actions"
   - "✓ Gate 7: 12 dev-skills generated"
6. Insert result line "✨ Project ready. AI is now architecture-aware." (#FFFFFF)

**Verify:** Screenshot hero section

### ✅ CHECKPOINT 1: Hero + Nav → user approval

---

## Task 3: Problem Section

**Goal:** Pain recognition section with 4 quote cards.

**Content:**
- Label: `THE PROBLEM`
- Headline: `Your AI doesn't know your project`
- 4 cards with pain quotes (see page-architecture-design.md Section 2)
- Transition: `The problem isn't AI. It's unstructured AI.`

**Specs:**
- Padding: 80px 120px
- Cards: 2x2 grid, bg #191919, border #1E1235, radius 14px, padding 24px, gap 24px
- Quote text: Satoshi 16px italic, #CCCCCC

**Operations (~15 ops):**
1. Create section frame (vertical, fill_container, padding [80, 120], gap 48)
2. Insert section label "THE PROBLEM"
3. Insert headline
4. Create grid frame (horizontal layout, gap 24, wrap to 2 rows — use 2 row frames)
5. Create row1 frame (horizontal, gap 24)
6. Create card1 (bg #191919, border, radius 14, padding 24, width calc)
7. Insert quote text 1
8. Create card2, insert quote 2
9. Create row2 frame
10. Create card3, insert quote 3
11. Create card4, insert quote 4
12. Insert transition line text

**Verify:** Screenshot problem section

---

## Task 4: Solution Overview

**Goal:** 3 pillar cards (Audit / Guard / Pipeline).

**Content:**
- Label: `THE SOLUTION`
- Headline: `Architecture-aware pipeline for AI agents`
- 3 cards with diamond icon, label, headline, description
- Proof line: `One forge setup → your AI codes like a senior engineer who's read every file.`

**Specs:**
- 3 cards in horizontal row, equal width, bg #191919, border, radius 14, padding 36px 28px
- Card label: JetBrains Mono 11px uppercase, #9A75EA
- Card headline: Satoshi SemiBold 24px, #FFFFFF
- Card description: Satoshi 16px, #CCCCCC

**Operations (~18 ops):**
1. Section frame
2. Label + headline
3. Cards row frame (horizontal, gap 24)
4-6. Three cards (each: frame + icon + label + headline + description = 5 ops per card)
7. Proof line text

**Verify:** Screenshot solution overview

### ✅ CHECKPOINT 2: Problem + Solution → user approval

---

## Task 5: Deep Dive — Architecture Audit

**Goal:** First Monaspace-style block. Text left, terminal right.

**Content:** See page-architecture-design.md Section 4.
- Label: `ARCHITECTURE AUDIT`
- Headline: `Your AI forgets your architecture. Forge doesn't.`
- Description: 3 sentences about 7-gate wizard
- Terminal: forge setup detailed output
- Framework badges at bottom

**Specs:**
- Two-column layout: 55% text / 45% terminal
- Terminal: same styling as hero terminal
- Badges: JetBrains Mono 11px, bg rgba(118,73,196,0.05), radius 4px, padding 4px 8px

**Operations (~20 ops):**
1. Section frame (vertical, padding [80, 120], gap 48)
2. Label text
3. Content row (horizontal, gap 48)
4. Left column frame (vertical, gap 24, width 55%)
5. Headline text
6. Description text
7. Right column frame (vertical)
8. Terminal frame with full output (similar to hero terminal but more detailed)
9-15. Terminal content lines
16. Badges row at bottom
17-20. Framework badge frames (NestJS, Django, React, Vue, etc.)

**Verify:** Screenshot

---

## Task 6: Deep Dive — Quality Patterns

**Goal:** Second block, ZIGZAG. Code left, text right.

**Content:** See page-architecture-design.md Section 5.
- Label: `QUALITY PATTERNS`
- Headline: `50 guardrails your AI doesn't know it needs.`
- Code: Red flag detector catching skipped validation
- Description: Auth guards, RLS, 15 rationalization detectors

**Specs:**
- Two-column: code LEFT (45%), text RIGHT (55%) — reverse of previous
- Code block: bg #160B2D, JetBrains Mono 14px
- Warning text in code: #F59E0B (amber) for ⚠ HALT line
- Fix text: #10B981 (green) for ✓ Fixed lines

**Operations (~18 ops):**
Similar structure, reversed columns. Code block with colored lines.

**Verify:** Screenshot

### ✅ CHECKPOINT 3: Deep Dives 1-2 → user approval

---

## Task 7: Deep Dive — Structured Pipeline

**Goal:** Third block. Text left, pipeline visualization right.

**Content:** See page-architecture-design.md Section 6.
- Label: `STRUCTURED PIPELINE`
- Headline: `Structured AI workflows. No runaway sessions.`
- Pipeline phases with checkmarks (vertical flow)

**Specs:**
- Two-column: text LEFT, visualization RIGHT
- Phase visualization: vertical stack, each phase is a frame with phase name + steps + status
- ✅ checkmarks in #10B981 (green)

**Operations (~20 ops):**
Text column + 4 pipeline phase frames with content.

**Verify:** Screenshot

---

## Task 8: Deep Dive — Tests from Requirements

**Goal:** Fourth block, ZIGZAG. Code left, text right.

**Content:** See page-architecture-design.md Section 7.
- Label: `REQUIREMENT TRACEABILITY`
- Headline: `Tests that trace back to requirements. Not AI guesswork.`
- TypeScript test file with traceability comments

**Specs:**
- Code LEFT, text RIGHT
- Code: syntax-highlighted TypeScript. Comments (#9A75EA), keywords (#C8B8F4), strings (#10B981), regular code (#FFFFFF)

**Operations (~18 ops):**
Similar to Task 6 structure.

**Verify:** Screenshot

### ✅ CHECKPOINT 4: Deep Dives 3-4 → user approval

---

## Task 9: How It Works

**Goal:** 4-step horizontal install flow.

**Content:** See page-architecture-design.md Section 8.
- Label: `HOW IT WORKS`
- Headline: `One setup. Project-aware AI forever.`
- 4 steps: Install → Activate → Setup → Code
- Platform badges
- Disposable callout

**Specs:**
- Steps: horizontal row, connected by line, numbered circles
- Step cards: no bg, label JetBrains Mono, command JetBrains Mono #9A75EA, description Satoshi #CCCCCC
- Connecting line: 1px #1E1235

**Operations (~20 ops):**
Section frame + headline + steps row with 4 step frames + line + badges + callout.

**Verify:** Screenshot

---

## Task 10: Modules

**Goal:** 4 module cards, forge-core as hero.

**Content:** See page-architecture-design.md Section 9.
- forge-core: full-width hero card with ★ badge
- forge-product, forge-qa, forge-tracker: 3-column grid

**Specs:**
- Hero card: larger, full width, padding 40px 32px
- ★ badge: bg #7649C4, text #FFF, "Start here"
- Three cards: equal width in row, standard card styling

**Operations (~20 ops):**
Section + headline + hero card frame + content + 3 card frames + content.

**Verify:** Screenshot

### ✅ CHECKPOINT 5: How it Works + Modules → user approval

---

## Task 11: Entrepreneur Mini-Landing

**Goal:** Full entrepreneur story section with diamond divider and 3 cards.

**Content:** See page-architecture-design.md Section 10.
- Diamond divider line
- Label: `NOT A DEVELOPER?`
- Headline: `MVP your future team won't hate`
- 3 vertical cards (Feature Design, Transparent Pipeline, Handoff-Ready)
- CTA: `Design your first feature →`

**Specs:**
- Diamond divider: horizontal line with 3 diamond shapes, #9A75EA
- Cards: full-width vertical stack, bg #191919, padding 36px 28px
- Each card has mini terminal/code proof inside
- CTA: primary button, centered

**Operations (~25 ops across 2 batches):**

Batch 1: Divider + headline + first card with terminal
Batch 2: Cards 2-3 + CTA button

**Verify:** Screenshot

### ✅ CHECKPOINT 6: Entrepreneur section → user approval

---

## Task 12: Pricing

**Goal:** 3 pricing tier cards, Pro highlighted.

**Content:** See page-architecture-design.md Section 11.
- Core $29/mo, Pro $79/mo (★ Popular), Team $149/mo
- Trust signals below

**Specs:**
- 3 cards horizontal, Pro card: larger, purple border glow
- Price: Satoshi Black 48px
- Tier name: JetBrains Mono 14px uppercase #9A75EA
- Features list: Satoshi 15px #CCCCCC
- Pro CTA: primary button. Others: ghost

**Operations (~25 ops across 2 batches):**

Batch 1: Section + 3 card frames with headers and prices
Batch 2: Feature lists + CTAs + trust signals

**Verify:** Screenshot

---

## Task 13: Author / Trust

**Goal:** Author section with photo placeholder, name, quote.

**Content:** See page-architecture-design.md Section 12.
- Label: `BUILT BY`
- Headline: `By a developer, for developers`
- Photo placeholder (120x120, rounded corners)
- Name + title
- Personal quote with left purple border

**Specs:**
- Photo: 120px square, radius 14, border #1E1235, placeholder fill #191919
- Quote: Satoshi 18px italic, #CCCCCC, left border 2px #7649C4, padding-left 20px
- Compact section: ~500px height

**Operations (~12 ops):**
Section + label + headline + photo/info row + quote block + link.

**Verify:** Screenshot

---

## Task 14: FAQ

**Goal:** 7-item accordion-style FAQ.

**Content:** See page-architecture-design.md Section 13. 7 questions with answers.

**Specs:**
- Each item: question frame (horizontal: text + arrow indicator) + answer frame
- Show first item expanded, rest collapsed
- Question: Satoshi Medium 17px, #FFFFFF
- Answer: Satoshi Regular 16px, #CCCCCC
- Divider between items: 1px #1E1235

**Operations (~20 ops):**
Section + headline + 7 question frames (expanded 1st, collapsed rest).

**Verify:** Screenshot

---

## Task 15: Final CTA + Footer

**Goal:** Last conversion point + footer with legal links.

**Content:**
- CTA: `Ready to make your AI architecture-aware?` + `Get Forge →` button
- Footer: logo, nav links, legal links, copyright

**Specs:**
- CTA section: centered, ambient purple glow behind button
- Footer: bg #0A0A0A or #000000, border-top #1E1235, padding 40px 120px
- Footer text: Satoshi 14px, #A5A5A5

**Operations (~18 ops):**
CTA section (frame + headline + button + glow) + footer (columns with links).

**Verify:** Screenshot

### ✅ CHECKPOINT 7: Pricing → Footer → user approval

---

## Task 16: Full Page Review & Polish

**Goal:** Take full page screenshot, review consistency, fix issues.

**Steps:**
1. Screenshot full page (or section by section)
2. Check: color consistency, spacing uniformity, typography hierarchy
3. Check: alignment between zigzag sections
4. Check: all text readable (no text below 15px)
5. Fix any issues found
6. Remove all `placeholder: true` flags
7. Final screenshot

### ✅ FINAL CHECKPOINT: Complete page → user approval

---

## Execution Summary

| Task | Section | Est. batch_design calls | Checkpoint |
|------|---------|------------------------|------------|
| 0 | Setup | 1 | — |
| 1 | Nav | 1 | — |
| 2 | Hero | 2 | ✅ CP1 |
| 3 | Problem | 1-2 | — |
| 4 | Solution Overview | 2 | ✅ CP2 |
| 5 | Deep: Architecture | 2 | — |
| 6 | Deep: Quality | 2 | ✅ CP3 |
| 7 | Deep: Pipeline | 2 | — |
| 8 | Deep: Tests | 2 | ✅ CP4 |
| 9 | How It Works | 2 | — |
| 10 | Modules | 2 | ✅ CP5 |
| 11 | Entrepreneurs | 2 | ✅ CP6 |
| 12 | Pricing | 2 | — |
| 13 | Author | 1 | — |
| 14 | FAQ | 2 | — |
| 15 | Final CTA + Footer | 2 | ✅ CP7 |
| 16 | Polish | 1-2 | ✅ FINAL |

**Total: ~28-32 batch_design calls, 8 checkpoints**

Each checkpoint: screenshot → user reviews → approve or request changes → continue.
