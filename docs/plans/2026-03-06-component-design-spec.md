# Component Design Spec — Landing Refresh

Date: 2026-03-06
Status: APPROVED
Extends: design-tokens.md, landing-refresh-design.md

## Design Direction

**Tone:** "Refined Dark Terminal" — existing aesthetic extended, not replaced.
**Rule:** All new components use existing `shared/ui/` primitives (Button, Card, Badge, SectionLabel, Container, CodeBlock). New primitives only for genuinely new patterns.
**New UI primitives needed:** Breadcrumbs, NavDropdown, ComparisonRow, PipelineNode

---

## 1. Pipeline Visualization (Homepage Section 4)

The BOLD design moment. A visual flow diagram showing 6 modules connected by animated data lines.

### Layout

```
Desktop (lg+):
┌─────────────────────────────────────────────────────┐
│  [SectionLabel: THE PIPELINE]                       │
│  Six modules. One pipeline.                         │
│                                                     │
│  ┌──────┐    ┌──────────┐    ┌────────┐            │
│  │ core ├───►│ product  ├───►│   qa   │            │
│  └──┬───┘    └──────────┘    └────────┘            │
│     │                                               │
│     │  ┌──────────┐                                │
│     ├─►│ tracker  │                                │
│     │  └──────────┘                                │
│     │                                               │
│     │  ┌───────────┐    ┌──────────┐               │
│     └─►│ autopilot ├───►│ worktree │               │
│        └───────────┘    └──────────┘               │
└─────────────────────────────────────────────────────┘

Mobile (< md):
Vertical stack with downward arrows between nodes.
```

### Pipeline Node

```
┌─────────────────────────┐
│  ◇ forge-core           │  <- monospace name, diamond icon
│  Architecture audit     │  <- tagline in text-muted
│  & guardrails           │
└─────────────────────────┘

States:
  default:  bg-surface, border-card
  hover:    border-card-hover, translateY(-2px), glow
  active:   border-[rgba(118,73,196,0.35)] (like Pro pricing card)
```

Each node is an `<a>` linking to its module page (or anchor for tracker/worktree).

Dimensions: `180px × 90px` (desktop), full-width (mobile)

### Connection Lines (SVG)

- **Style:** 1px stroke, `rgba(118,73,196,0.25)` default
- **Animation:** Pulsing dash pattern (`stroke-dasharray: 6 4`, animated `stroke-dashoffset`) that creates "data flowing" effect
- **Color on hover:** When hovering a node, its outgoing connections brighten to `#9A75EA`
- **Arrow heads:** Small triangle markers at endpoints, `#9A75EA`

```css
/* Connection line animation */
@keyframes flow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
}

.pipeline-connection {
  stroke: rgba(118, 73, 196, 0.25);
  stroke-width: 1;
  stroke-dasharray: 6 4;
  fill: none;
  animation: flow 2s linear infinite;
}

.pipeline-connection.active {
  stroke: #9A75EA;
  stroke-width: 1.5;
}
```

### Ambient Effect

Subtle radial glow behind the entire pipeline diagram:
```css
.pipeline-glow {
  background: radial-gradient(ellipse 600px 300px at center, rgba(118,73,196,0.04) 0%, transparent 70%);
}
```

### Scroll Animation

Nodes appear with staggered fade-up (100ms between each), connections draw in after all nodes are visible (SVG `stroke-dashoffset` from full length to 0).

### Responsive

- **Desktop (lg+):** Graph layout as shown above, SVG connections
- **Tablet (md):** Simplified 2-row layout: top row (core → product → qa), bottom row (tracker, autopilot → worktree)
- **Mobile:** Vertical stack. Each node full-width. Simple `↓` arrows between nodes (no SVG).

---

## 2. Navbar with Modules Dropdown

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────┐
│ ◇ Forge DevKit    Modules▾    Pricing    Docs↗    GitHub↗    │ [Get Forge →] │
└──────────────────────────────────────────────────────────────┘
```

### Dropdown (appears on hover/click on "Modules")

```
┌─────────────────────────────────────────────────┐
│  Core Pipeline          │  Automation           │
│  ─────────────────      │  ──────────────       │
│  ◇ forge-core           │  ◇ forge-autopilot    │
│    Architecture audit   │    Parallel agents    │
│    & guardrails         │    orchestration      │
│                         │                       │
│  ◇ forge-product        │  ◇ forge-worktree     │
│    Business → AI specs  │    Worktree lifecycle  │
│                         │                       │
│  ◇ forge-qa             │                       │
│    Test traceability    │                       │
│                         │                       │
│  ◇ forge-tracker        │                       │
│    Task management      │                       │
│─────────────────────────┴───────────────────────│
│  View all modules →                              │
└─────────────────────────────────────────────────┘
```

### Dropdown Specs

```
bg:              var(--color-surface)  (#191919)
border:          border-card (rgba(118,73,196,0.06))
border-radius:   var(--radius-card) (14px)
padding:         24px
width:           480px (2 columns: 240px each)
position:        absolute, centered below "Modules" link
box-shadow:      0 16px 48px rgba(0,0,0,0.4)
backdrop-filter: blur(16px)

Column title:
  font:          JetBrains Mono 11px, uppercase, tracking 0.15em
  color:         var(--color-text-muted) (#A5A5A5)
  margin-bottom: 16px

Module item:
  padding:       8px 12px
  border-radius: 8px
  hover:         bg rgba(118,73,196,0.06)

Module name:
  font:          JetBrains Mono 14px, weight 500
  color:         var(--color-text) (#FFFFFF)
  diamond:       ◇ in --color-secondary before name

Module description:
  font:          Satoshi 13px
  color:         var(--color-text-muted) (#A5A5A5)

Bottom row:
  border-top:    border-card
  padding-top:   12px
  margin-top:    12px
  font:          Satoshi 14px, weight 500
  color:         var(--color-secondary)

Animation:
  Enter: opacity 0→1, translateY(-8px)→0, 200ms ease-out
  Exit:  opacity 1→0, translateY(0)→(-8px), 150ms ease-in
```

### Chevron indicator

"Modules" text followed by a small chevron SVG that rotates 180deg when dropdown is open:

```html
<svg width="10" height="6" viewBox="0 0 10 6" fill="none">
  <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

### Active state

Current page's nav item gets `text-white` (not `text-text-muted`). For module pages, "Modules" stays highlighted.

### External links

Docs and GitHub get a small external-link icon (↗) suffix:
```html
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="inline ml-1 opacity-50">
  <path d="M4 1H11V8M11 1L1 11" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
</svg>
```

### Mobile

Hamburger menu (existing pattern). "Modules" section expands inline with indented items:

```
☰ Menu
  Modules  ▾
    ◇ forge-core
    ◇ forge-product
    ◇ forge-qa
    ◇ forge-tracker
    ◇ forge-autopilot
    ◇ forge-worktree
    View all modules →
  Pricing
  Docs ↗
  GitHub ↗
  [Get Forge →]
```

---

## 3. Module Page Template (7 sections)

Each `/modules/{slug}` page follows the same widget structure. Widgets are SHARED — config-driven, not per-module.

### Section 1: Module Hero (compact)

```
┌──────────────────────────────────────────────────────┐
│  [Breadcrumb: Home > Modules > forge-core]           │
│                                                      │
│  ◇ forge-core                                        │  <- JetBrains Mono 24px
│  Architecture-aware guardrails from your codebase    │  <- Satoshi 20px, text-secondary
│                                                      │
│  Part of Forge DevKit ecosystem                      │  <- Satoshi 14px, text-muted
│                                                      │
│  [Get Core — $29 →]                                  │  <- Button primary
└──────────────────────────────────────────────────────┘

bg: transparent (same as page bg)
max-width: 720px, centered
padding: 80px top (clears nav), 48px bottom
```

NOT a full-height hero. Compact — just identity + CTA. No terminal, no animation.

### Section 2: The Problem

```
┌──────────────────────────────────────────────────────┐
│  [SectionLabel: THE PROBLEM]                         │
│                                                      │
│  ┌──────────────────────┐  ┌──────────────────────┐  │
│  │ "AI forgets your     │  │ "Tests test nothing" │  │
│  │ architecture every   │  │                      │  │
│  │ session"             │  │  — r/ExperiencedDevs │  │
│  │                      │  │                      │  │
│  │  — Stack Overflow    │  │                      │  │
│  └──────────────────────┘  └──────────────────────┘  │
│                                                      │
│  Sound familiar?                                     │
└──────────────────────────────────────────────────────┘

Cards: Pain Card variant (compact padding, no hover)
Grid: 1-col mobile, 2-col desktop
Each card: quote (italic, text-secondary) + source (text-muted, right-aligned)
```

### Section 3: How It Works

```
┌──────────────────────────────────────────────────────┐
│  [SectionLabel: HOW IT WORKS]                        │
│                                                      │
│  ① Detect ──── ② Analyze ──── ③ Generate            │
│                                                      │
│  ┌─ Step 1 ────────────────────────────────────────┐ │
│  │ "Detect your stack"                             │ │
│  │  Run `forge setup`. Wizard detects NestJS,      │ │
│  │  Clean Architecture, PostgreSQL + TypeORM...    │ │
│  │                                                 │ │
│  │  ┌─────── terminal ───────┐                     │ │
│  │  │ $ forge setup          │                     │ │
│  │  │ ✓ Gate 1: NestJS 10   │                     │ │
│  │  └────────────────────────┘                     │ │
│  └─────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘

Step indicator: numbered circles connected by dashed line (horizontal desktop, vertical mobile)
Step content: alternating text-left/visual-right (same as deep dive pattern)
Terminal blocks: CodeBlock component with module-specific output
```

Use existing StepConnector component pattern. Steps are 3-5 depending on module.

### Section 4: Key Capabilities

```
┌──────────────────────────────────────────────────────┐
│  [SectionLabel: KEY CAPABILITIES]                    │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐                │
│  │ ◇      │  │ ◇      │  │ ◇      │                │
│  │ 50+    │  │ 7-gate  │  │ 3 exec │                │
│  │ quality│  │ wizard  │  │ modes  │                │
│  │patterns│  │         │  │        │                │
│  └────────┘  └────────┘  └────────┘                │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐                │
│  │ ...    │  │ ...    │  │ ...    │                │
│  └────────┘  └────────┘  └────────┘                │
└──────────────────────────────────────────────────────┘

Cards: Standard Card with hover
Grid: 3-col desktop, 2-col tablet, 1-col mobile
Each card: diamond icon + stat/title (Satoshi 20px bold) + description (Satoshi 15px, text-secondary)
3-6 cards per module
```

### Section 5: What Makes It Different (Comparison)

```
┌──────────────────────────────────────────────────────┐
│  [SectionLabel: WHAT MAKES IT DIFFERENT]             │
│  forge-core vs Cursor Rules generators               │
│                                                      │
│  ┌──────────────┬──────────────┬──────────────┐      │
│  │ Dimension    │ Cursor Rules │ Forge        │      │
│  ├──────────────┼──────────────┼──────────────┤      │
│  │ Creation     │ Manual       │ Auto from    │      │
│  │              │              │ audit   ✓    │      │
│  ├──────────────┼──────────────┼──────────────┤      │
│  │ Architecture │ None         │ Detects      │      │
│  │ awareness    │              │ patterns ✓   │      │
│  ├──────────────┼──────────────┼──────────────┤      │
│  │ Platform     │ Cursor only  │ Any agent ✓  │      │
│  └──────────────┴──────────────┴──────────────┘      │
└──────────────────────────────────────────────────────┘

Table: NOT a standard HTML table. Custom card-based rows:
- Each row is a full-width flex container
- bg-surface for even rows, transparent for odd
- Forge column gets green checkmark (✓) in secondary color
- Max 3-5 rows (concise, not exhaustive)
- Responsive: on mobile, each row becomes a stacked card
```

### Section 6: Works With (Ecosystem)

```
┌──────────────────────────────────────────────────────┐
│  [SectionLabel: WORKS WITH]                          │
│  Better together                                     │
│                                                      │
│  ┌─────────────┐ ──→ ┌─────────────┐                │
│  │ forge-core  │     │ forge-qa    │                │
│  │ (current)   │     │ "generates  │                │
│  │             │     │  tests FROM │                │
│  │             │     │  guardrails"│                │
│  └─────────────┘     └─────────────┘                │
│         │                                            │
│         ▼                                            │
│  ┌─────────────┐                                    │
│  │  autopilot  │                                    │
│  │ "uses arch  │                                    │
│  │  data for   │                                    │
│  │  conflict   │                                    │
│  │  detection" │                                    │
│  └─────────────┘                                    │
└──────────────────────────────────────────────────────┘

Mini pipeline visualization — reuses PipelineNode component but smaller (140px × 70px)
Current module highlighted (border-card-glow)
Connected modules shown with relationship text
Non-connected modules hidden
Links to other module pages
```

### Section 7: CTA

```
┌──────────────────────────────────────────────────────┐
│  Get started with forge-core                         │
│                                                      │
│  [Get Core — $29 →]        See all modules →         │
└──────────────────────────────────────────────────────┘

Simple: headline + primary CTA + ghost link to /modules
Matches existing FinalCtaSection pattern but smaller (no ambient glow)
```

---

## 4. Four-Column Footer

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  Product           Modules            Compare         Legal      │
│  ────────          ────────           ────────        ─────      │
│  Pricing           forge-core         vs Cursor       Privacy    │
│  Changelog ⌛       forge-product      vs Devin        Terms      │
│  Documentation ⌛   forge-qa           vs CLAUDE.md               │
│  GitHub ↗          forge-tracker                                 │
│                    forge-autopilot                                │
│                    forge-worktree                                 │
│                                                                  │
│  ─────────────────────────────────────────────────────────────── │
│  ◇ Forge DevKit by Reumbra                    © 2026 Reumbra OÜ │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

⌛ = disabled (future), shown as text-muted/50 with cursor-not-allowed
↗ = external link indicator

Layout: CSS grid, 4 columns desktop, 2×2 tablet, 1-col mobile (stacked)

Column title:
  font: JetBrains Mono 11px, uppercase, tracking 0.15em
  color: var(--color-text-muted)
  margin-bottom: 16px

Links:
  font: Satoshi 14px, weight 400
  color: var(--color-text-muted)
  hover: var(--color-text) (#FFFFFF)
  transition: color 0.3s ease
  line-height: 2.2 (generous vertical spacing between links)

Bottom bar:
  border-top: border-card
  padding-top: 24px
  margin-top: 40px
  flex: space-between
  Left: ◇ logo + "Forge DevKit by Reumbra"
  Right: copyright

Section bg: transparent (sits on page bg)
Section padding: 80px top, 48px bottom
```

---

## 5. Pricing Page (JetBrains Model)

Dedicated `/pricing` page. Extends the existing PricingSection with more detail.

### Structure

```
1. Headline
2. Competitor anchor bar
3. Tier cards (3)
4. Feature comparison table
5. Trust signals
6. Pricing FAQ
```

### Competitor Anchor Bar (NEW component)

```
┌──────────────────────────────────────────────────────┐
│  Devin: $240/yr mandatory  ·  Cursor Pro: $240/yr  ·  Forge: from $29 once  │
└──────────────────────────────────────────────────────┘

bg: rgba(118,73,196,0.03)
border: border-card
border-radius: var(--radius-card)
padding: 16px 24px
text-align: center
font: Satoshi 14px

"Devin" and "Cursor Pro" in text-muted
"$240/yr" in text-secondary
"Forge: from $29 once" in text + secondary color for "$29"

Subtle strikethrough on competitor prices (optional — test idea)
```

### Tier Cards (enhanced from homepage)

Same as existing PricingSection cards, but with JetBrains model additions:

```
┌──────────────────────────┐
│  CORE                    │
│                          │
│  $29                     │  <- Satoshi 48px Black, NO "/yr"
│  one-time                │  <- Satoshi 14px, text-muted
│                          │
│  Includes 1 year of      │  <- Satoshi 13px, text-secondary
│  updates                 │
│                          │
│  Foundation for...       │
│                          │
│  ✓ Auto-detects stack    │
│  ✓ 50+ quality patterns  │
│  ✓ Project-aware skills  │
│  ✓ Scoped phases         │
│                          │
│  [Get Core →]            │
│                          │
│  Renewal: $19/yr         │  <- Satoshi 12px, text-muted
│  (optional)              │
└──────────────────────────┘
```

Key changes from homepage pricing:
- Price shown as plain number, NO period suffix
- "one-time" text below price (replaces "/yr")
- "Includes 1 year of updates" line
- Renewal price at bottom in small text
- Remove `monthlyEquivalent`
- Bundle (was "Full") gets "Best value" badge instead of "Popular"
- Pro keeps "Recommended" badge

### Feature Comparison Table

```
┌─────────────────────┬──────┬──────┬────────┐
│ Module              │ Core │ Pro  │ Bundle │
├─────────────────────┼──────┼──────┼────────┤
│ forge-core          │  ✓   │  ✓   │   ✓    │
│ forge-product       │  —   │  ✓   │   ✓    │
│ forge-qa            │  —   │  ✓   │   ✓    │
│ forge-tracker       │  —   │  ✓   │   ✓    │
│ forge-autopilot     │  —   │  —   │   ✓    │
│ forge-worktree      │  —   │  —   │   ✓    │
│ Future modules      │  —   │  —   │   ✓    │
└─────────────────────┴──────┴──────┴────────┘

NOT a standard table. Card-based rows:
- Row bg alternates: transparent / rgba(118,73,196,0.02)
- ✓ = secondary color (#9A75EA)
- — = text-muted at 30% opacity
- Module names link to module pages
- Header row: sticky on scroll (within section)
- Bundle column: subtle bg highlight rgba(118,73,196,0.04)
```

### Trust Signals

```
┌──────────────────────────────────────────────────────┐
│  ◇ No subscription    ◇ Artifacts yours     ◇ 1-year │
│    ever                 forever               updates │
│                                               included│
└──────────────────────────────────────────────────────┘

3-column grid of trust badges
Each: diamond icon + bold title + description
Style: text-center, no card bg (transparent)
```

---

## 6. Comparison Page Template (/vs/*)

### Structure

```
[Breadcrumb: Home > Forge vs Cursor Rules]

1. Hero: "Forge DevKit vs Cursor Rules"
2. Quick verdict (1 line)
3. Comparison table (5 rows)
4. CTA
```

### Comparison Table

Same visual pattern as Module Page Section 5, but full-width and more detailed:

```
┌──────────────────────────────────────────────────────┐
│  ┌────────────┬─────────────────┬──────────────────┐ │
│  │            │  Cursor Rules   │  Forge DevKit    │ │
│  │            │  (header, muted)│  (header, white) │ │
│  ├────────────┼─────────────────┼──────────────────┤ │
│  │ Rule       │ Manual or       │ Auto-generated ✓ │ │
│  │ creation   │ template gen    │ from audit       │ │
│  ├────────────┼─────────────────┼──────────────────┤ │
│  │ Arch       │ None — you      │ Detects stack, ✓ │ │
│  │ awareness  │ specify stack   │ layers, patterns │ │
│  ├────────────┼─────────────────┼──────────────────┤ │
│  │ ...        │ ...             │ ...              │ │
│  └────────────┴─────────────────┴──────────────────┘ │
│                                                      │
│  [Try Forge — from $29 →]                            │
└──────────────────────────────────────────────────────┘

Forge column:
  - Slightly wider than competitor column
  - Subtle bg highlight: rgba(118,73,196,0.03)
  - Check marks in secondary color

Competitor column:
  - text-muted for content
  - No negative indicators (no ✗) — just neutral text

Verdict:
  - 1-2 sentences above table
  - Bold the key differentiator
  - e.g.: "Cursor Rules are manual configs. Forge auto-generates from your architecture."
```

---

## 7. Breadcrumbs Component

```
Home  >  Modules  >  forge-core

font: Satoshi 13px
separator: ">" in text-muted/50
links: text-muted, hover text-white
current (last): text-text-secondary, no link
padding: 16px 0
position: below nav, above page content

JSON-LD:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
</script>
```

---

## New shared/ui/ Components Needed

| Component | Purpose | Props |
|-----------|---------|-------|
| Breadcrumbs.astro | Navigation trail + JSON-LD | `items: {label, href?}[]` |
| ComparisonRow.astro | Single row in comparison table | `dimension, them, forge, highlighted?` |
| PipelineNode.astro | Module node in pipeline diagram | `name, tagline, href, size?, active?` |

All other new sections are widgets built from existing primitives.

---

## Animation Notes

### Pipeline (Section 4)
- Nodes: staggered fade-up (100ms delay)
- Connections: SVG stroke-dashoffset animation (draw-in after nodes appear)
- Data flow: continuous pulse animation on connections (2s loop)

### Module Page transitions
- No View Transitions between pages (SSG, keep it simple)
- Each section uses existing fade-up pattern
- Code blocks: 200ms delay after text

### Dropdown
- Enter: 200ms ease-out (opacity + translateY)
- Exit: 150ms ease-in
- Backdrop: none (dropdown closes on outside click)

### Comparison table
- Rows: staggered fade-up (50ms between rows)
- Checkmarks: scale-in after row appears (200ms delay)
