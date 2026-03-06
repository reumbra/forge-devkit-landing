# Landing Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh Forge DevKit landing from single-page (14 sections) to multi-page Module Hub (10 pages) with developer-only messaging, 6 modules, and one-time pricing.

**Architecture:** Astro 5.x SSG with adapted FSD (pages > widgets > shared). Content-driven: all UI text lives in `src/shared/config/*.ts`, widgets read from configs. i18n via `src/shared/i18n/{en,ru}.ts` with `t()` helper. Tailwind v4 for styling.

**Tech Stack:** Astro 5.x, Tailwind CSS v4, TypeScript, Cloudflare Pages, LemonSqueezy checkout overlay.

**Design Doc:** `docs/plans/2026-03-06-landing-refresh-design.md`

---

## Wave Structure (Autopilot-Compatible)

Each wave contains independent features that can be executed in parallel by separate agents. Features within a wave have NO cross-dependencies.

| Wave | Theme | Features | Dependencies |
|------|-------|----------|-------------|
| 0 | Config Foundation | F1-F8 (8 config files) | None |
| 1 | Homepage Widgets | F9-F13 (5 widget updates) | Wave 0 |
| 2 | Multi-Page Infra | F14-F17 (routing, layouts, nav, breadcrumbs) | Wave 0 |
| 3 | Module Pages | F18-F21 (4 module pages) | Wave 2 |
| 4 | Supporting Pages | F22-F25 (pricing, overview, comparisons) | Wave 2 |
| 5 | i18n + Polish | F26-F28 (translations, SEO, cleanup) | Waves 3-4 |

---

## CRO Findings (Pre-Implementation)

CRO audit identified these issues to address during implementation:

| Issue | Severity | Fixed In |
|-------|----------|----------|
| Pricing shows "/yr" subscription framing (should be one-time, JetBrains model) | CRITICAL | F4 |
| "Cancel anytime" / "Annual billing" trust signals contradict one-time model | CRITICAL | F4 |
| Hero CTA "Audit your architecture" → pricing (promise-delivery mismatch) | HIGH | F1 |
| 3/6 CTAs promise action but lead to paywall | HIGH | F1, F6 |
| No competitor price anchor near pricing | HIGH | F4, F22 |
| Social proof stats are features, not social proof | MEDIUM | F1 |
| 4 deep dives = scroll fatigue | MEDIUM | F6, F11 |
| Author section after Pricing (trust signal too late) | MEDIUM | F11 |
| EntrepreneurSection irrelevant for dev audience | MEDIUM | F9 |
| No price visibility above the fold | LOW | F1 (test idea) |

---

## Wave 0: Config Foundation

All features in this wave update independent config files. Zero cross-dependencies.

---

### Feature F1: Update Hero Config

**Files:**
- Modify: `src/shared/config/hero.ts`

**Step 1: Read current hero.ts**

Read `src/shared/config/hero.ts` to understand the current structure and types.

**Step 2: Update hero config**

Replace content with new messaging from design doc:

```typescript
// Key changes:
// - headline: "Your AI writes code. Forge makes it production-ready."
// - subheadline: "Architecture-aware pipeline that auto-generates project-specific guardrails, quality patterns, and development workflows."
// - terminal output: update to 7-gate wizard (was 8-gate)
// - CTA: "Audit your architecture" -> #pricing (was "Get Forge")
```

Preserve existing TypeScript types and export structure. Update both `en` and `ru` content objects.

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds with no errors.

**Step 4: Commit**

```bash
git add src/shared/config/hero.ts
git commit -m "content: update hero — new headline, 7-gate wizard, production-ready messaging"
```

---

### Feature F2: Update Problems Config

**Files:**
- Modify: `src/shared/config/problems.ts`

**Step 1: Read current problems.ts**

Read `src/shared/config/problems.ts` to understand types and card structure.

**Step 2: Replace pain cards with 2026 research**

Update from 4 old pains to updated pains from design doc (section 2 — Problem):

```typescript
// Replace with these pain cards (2x2 grid):
// 1. Context Loss / "Context Rot" (P1) — CRITICAL
//    "Your AI forgets your architecture every session"
// 2. CC Spirals (P3) — HIGH
//    "Claude patches over bugs with quick fixes until nothing works"
// 3. Merge Conflicts in Multi-Agent (P4) — HIGH
//    "Agent Teams = merge conflict chaos"
// 4. Fake Tests / Mock Data (P5) — HIGH
//    "AI writes tests that test nothing"
```

Each card: icon, title, description, evidence quote. Preserve TypeScript types.

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/problems.ts
git commit -m "content: update problem cards — CC spirals, merge conflicts, fake tests (2026 research)"
```

---

### Feature F3: Update Modules Config

**Files:**
- Modify: `src/shared/config/modules.ts`

**Step 1: Read current modules.ts**

Read `src/shared/config/modules.ts` to understand card structure and types.

**Step 2: Add autopilot + worktree, update stats**

```typescript
// Changes:
// 1. Add forge-autopilot card:
//    - title: "forge-autopilot"
//    - tagline: "Parallel agents without merge hell"
//    - features: backlog triage, conflict detection, wave execution, auto-merge
//    - link: "/modules/autopilot"
//
// 2. Add forge-worktree card:
//    - title: "forge-worktree"
//    - tagline: "Git worktree lifecycle manager"
//    - features: 3 templates, Docker port isolation, auto-cleanup
//    - link: "/modules" (no dedicated page — card only)
//
// 3. Update headline: "Six modules. One pipeline." (was "Four modules")
// 4. Update stats: "7-gate wizard" (was "8-gate"), "50+ quality patterns" (was "24")
// 5. Add `href` field to each module card for linking to module pages
//    - core, product, qa, autopilot -> "/modules/{slug}"
//    - tracker, worktree -> "/modules#tracker", "/modules#worktree" (anchor on overview)
```

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/modules.ts
git commit -m "content: add autopilot + worktree modules, update stats (6 modules, 50+ patterns)"
```

---

### Feature F4: Fix Pricing Config (CRITICAL)

**Files:**
- Modify: `src/shared/config/pricing.ts`

**Step 1: Read current pricing.ts**

Read `src/shared/config/pricing.ts` to understand the subscription framing bug.

**Step 2: Fix one-time pricing framing**

```typescript
// CRITICAL FIXES (JetBrains pricing model):
// 1. Replace `period: "/yr"` with "one-time" — NOT subscription framing
// 2. Remove `monthlyEquivalent` field — no monthly breakdown for one-time purchase
// 3. Add new field `updatesIncluded: "1 year of updates included"`
// 4. Add new field `renewalPrice` (optional, ~60% of original: $19/$49/$89)
// 5. Rename "Full" tier -> "Bundle"
// 6. Add forge-autopilot + forge-worktree to Bundle tier features
// 7. Add "Future modules included" to Bundle tier
// 8. Update trust signals:
//    - "One-time purchase. Your artifacts stay forever."
//    - "Includes 1 year of updates. Renewal optional."
//    - "No renewal = keep everything, just no new patterns."
// 9. Add competitor anchor: "Devin: $240/yr mandatory. Forge: from $29 once."
// 10. Highlight Pro as recommended tier (not Core)
// 11. Remove "Cancel anytime" and "Annual billing" — subscription language
```

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/pricing.ts
git commit -m "fix: pricing — one-time framing (was subscription), rename Full->Bundle, add autopilot/worktree"
```

---

### Feature F5: Update FAQ Config

**Files:**
- Modify: `src/shared/config/faq.ts`

**Step 1: Read current faq.ts**

Read `src/shared/config/faq.ts` to identify entrepreneur items.

**Step 2: Remove entrepreneur items, add developer items**

```typescript
// REMOVE items with audience: "entrepreneur":
// - "Do I need coding skills?"
// - "vs Bolt/Lovable?"
// - "Will a real developer work with this?"
//
// ADD new developer items:
// - "How does Forge compare to Devin?" -> architecture-aware vs general purpose, one-time vs subscription
// - "Does Forge work with Agent Teams?" -> forge-autopilot orchestrates Agent Teams
// - "What AI agents does Forge support?" -> Claude Code, Cursor, Windsurf, any agent with CLAUDE.md/rules
// - "Is Forge open-source?" -> Commercial, but generated artifacts are yours forever
// - "What happens after 1-year updates expire?" -> Artifacts continue working, just no new patterns
//
// Keep existing dev items (architecture audit, quality patterns, etc.)
// Remove `audience` field entirely — all items are dev-only now
```

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/faq.ts
git commit -m "content: FAQ — remove entrepreneur items, add Devin/Agent Teams/multi-agent questions"
```

---

### Feature F6: Update Deep Dives Config

**Files:**
- Modify: `src/shared/config/deep-dives.ts`

**Step 1: Read current deep-dives.ts**

Read `src/shared/config/deep-dives.ts` to understand the 4 existing deep dives.

**Step 2: Replace one deep dive with forge-autopilot**

Design doc specifies 3 deep dives on homepage (sections 5-7): forge-core, forge-autopilot, forge-qa.

```typescript
// Keep: architecture-audit (forge-core deep dive, section 5)
// REPLACE: structured-pipeline -> forge-autopilot deep dive (section 6, PEAK moment)
//   - title: "Parallel Agents Without Merge Hell"
//   - subtitle: "forge-autopilot orchestrates Agent Teams like Kubernetes orchestrates containers"
//   - features: backlog triage, conflict detection, wave execution, auto-merge
//   - visual: terminal showing wave execution with 3 parallel agents
//   - CTA: "Start with Bundle" -> /pricing
// Keep: requirement-traceability (forge-qa deep dive, section 7)
// REMOVE: quality-patterns (merged into forge-core section)
//
// Update order: core(5) -> autopilot(6) -> qa(7)
// Update CTA links: each deep dive links to its module page
```

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/deep-dives.ts
git commit -m "content: deep dives — add forge-autopilot peak moment, remove quality-patterns standalone"
```

---

### Feature F7: Update Footer Config

**Files:**
- Modify: `src/shared/config/footer.ts`

**Step 1: Read current footer.ts**

Read `src/shared/config/footer.ts` to understand current structure.

**Step 2: Expand to 4-column footer**

```typescript
// Replace simple 3+3 links with 4-column structure from design doc:
//
// Column 1 — Product:
//   Pricing -> /pricing
//   Changelog -> # (future, disabled)
//   Documentation -> # (future, disabled)
//   GitHub -> https://github.com/reumbra (external)
//
// Column 2 — Modules:
//   forge-core -> /modules/core
//   forge-product -> /modules/product
//   forge-qa -> /modules/qa
//   forge-tracker -> /modules#tracker
//   forge-autopilot -> /modules/autopilot
//   forge-worktree -> /modules#worktree
//
// Column 3 — Compare:
//   vs Cursor Rules -> /vs/cursor-rules
//   vs Devin -> /vs/devin
//   vs CLAUDE.md -> /vs/claude-md
//
// Column 4 — Legal:
//   Privacy -> /privacy
//   Terms -> /terms
//
// Type: FooterColumn[] with title + links array
```

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/footer.ts
git commit -m "content: 4-column footer — Product, Modules, Compare, Legal"
```

---

### Feature F8: Update Navigation Config

**Files:**
- Modify: `src/shared/config/navigation.ts`

**Step 1: Read current navigation.ts**

Read `src/shared/config/navigation.ts` to understand current anchor-based structure.

**Step 2: Convert to real routes with dropdown**

```typescript
// Replace anchor-based nav with real routes:
//
// Header (5 items + CTA):
// [Logo: Forge DevKit]   Modules(dropdown)   Pricing   Docs(external)   GitHub(external)   [Get Forge ->]
//
// Modules dropdown (2 columns):
// Core Pipeline:
//   forge-core -> /modules/core ("Architecture audit & guardrails")
//   forge-product -> /modules/product ("Business -> AI specs")
//   forge-qa -> /modules/qa ("Test traceability")
//   forge-tracker -> /modules#tracker ("Task management")
// Automation:
//   forge-autopilot -> /modules/autopilot ("Parallel agent orchestration")
//   forge-worktree -> /modules#worktree ("Worktree lifecycle")
// Bottom: "View all modules ->" -> /modules
//
// Type: NavItem[] with optional `children: NavDropdownColumn[]`
// External links: `external: true` flag
// CTA: { label: "Get Forge", href: "/pricing", variant: "primary" }
```

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/shared/config/navigation.ts
git commit -m "content: navigation — real routes, Modules dropdown, external links"
```

---

## Wave 1: Homepage Widget Updates

Depends on Wave 0 (config files). Features within this wave are independent.

---

### Feature F9: Remove EntrepreneurSection

**Files:**
- Modify: `src/pages/index.astro`
- Delete: `src/widgets/EntrepreneurSection.astro` (if safe)

**Step 1: Read index.astro**

Read `src/pages/index.astro` to locate EntrepreneurSection import and usage.

**Step 2: Remove EntrepreneurSection from index.astro**

Remove the import line and the `<EntrepreneurSection />` component from the page.

**Step 3: Check for other references to EntrepreneurSection**

Run: `grep -r "EntrepreneurSection" src/`
Expected: No references remain.

**Step 4: Delete the widget file**

Delete `src/widgets/EntrepreneurSection.astro` (or `.tsx`).

**Step 5: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 6: Commit**

```bash
git add -A
git commit -m "remove: EntrepreneurSection — developer-only landing"
```

---

### Feature F10: Add Pipeline Visualization Section

**Files:**
- Create: `src/widgets/PipelineSection.astro`
- Modify: `src/pages/index.astro` (add import + placement)
- Create: `src/shared/config/pipeline.ts` (content config)

**Step 1: Create pipeline config**

Create `src/shared/config/pipeline.ts` with the 6-module pipeline flow data:

```typescript
// Pipeline nodes (left to right or top to bottom):
// 1. forge-core (entry) -> 2. forge-product -> 3. forge-qa
//                      \-> 4. forge-tracker
// 5. forge-autopilot (orchestrates) -> 6. forge-worktree (provisions)
//
// Each node: { id, name, tagline, icon, href, position }
// Connections: { from, to, label? }
// Type: PipelineConfig with nodes[] and connections[]
```

**Step 2: Create PipelineSection widget**

Create `src/widgets/PipelineSection.astro`:
- Section label: "The Pipeline"
- Headline: "Six modules. One pipeline."
- SVG-based flow diagram with 6 clickable nodes
- Each node links to its module page (or anchor for tracker/worktree)
- Responsive: horizontal on desktop, vertical stack on mobile
- Use existing design tokens: `bg-surface`, `border-ghost`, `text-primary` for active nodes
- Apply `fade-up` class for scroll animation

**Step 3: Add to index.astro**

Insert `<PipelineSection />` as section 4 (after Solution, before Deep Dives). Check the section ordering matches design doc (13 sections).

**Step 4: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/shared/config/pipeline.ts src/widgets/PipelineSection.astro src/pages/index.astro
git commit -m "feat: pipeline visualization section — 6-module flow diagram"
```

---

### Feature F11: Update Homepage Section Order

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Read current index.astro**

Read `src/pages/index.astro` to understand current section ordering and GhostCta placements.

**Step 2: Reorder sections to match design doc**

Design doc 13-section flow:

```
1.  Hero
2.  Problem (updated cards from F2)
3.  Solution Overview (existing SolutionSection)
4.  Pipeline Visualization (new from F10)
5.  Deep: forge-core (existing, reordered)
6.  Deep: forge-autopilot (new from F6)
7.  Deep: forge-qa (existing, reordered)
8.  How It Works (existing)
9.  Module Grid (existing, updated from F3)
10. Pricing Teaser (existing, updated from F4)
11. Author (existing)
12. FAQ (existing, updated from F5)
13. Final CTA (existing)
```

Place GhostCta sections between major transitions (after section 4, after section 7, after section 10).

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "layout: homepage 13-section flow per design doc"
```

---

### Feature F12: Update Footer Widget (4-column)

**Files:**
- Modify: `src/widgets/Footer.astro`

**Step 1: Read current Footer.astro**

Read `src/widgets/Footer.astro` to understand layout and how it reads footer config.

**Step 2: Refactor to 4-column layout**

Update the widget to render 4 columns from the updated footer config (F7):
- Responsive: 4 columns on desktop, 2x2 on tablet, stacked on mobile
- Column titles in `text-text-muted`, links in `text-text-secondary` with hover `text-white`
- External links get an arrow icon suffix
- Disabled (future) links: `text-text-muted/50` with `cursor-not-allowed`
- Bottom bar: copyright + Reumbra wordmark

**Step 3: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/widgets/Footer.astro
git commit -m "feat: 4-column footer — Product, Modules, Compare, Legal"
```

---

### Feature F13: Update NavBar with Dropdown

**Files:**
- Modify: `src/widgets/NavBar.astro`

**Step 1: Read current NavBar.astro**

Read `src/widgets/NavBar.astro` to understand current anchor-based nav rendering.

**Step 2: Add dropdown menu for Modules**

- Render `Modules` item with chevron icon and dropdown trigger
- Dropdown: 2-column grid matching design doc (Core Pipeline | Automation)
- Each item: module name + one-line description + link
- Bottom row: "View all modules ->" -> `/modules`
- Desktop: hover/click to open dropdown, click outside to close
- Mobile: hamburger menu with expandable Modules section
- External links (Docs, GitHub): open in new tab with external icon
- Active state: highlight current nav item based on `Astro.url.pathname`

**Step 3: Verify build and interaction**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/widgets/NavBar.astro
git commit -m "feat: navbar — Modules dropdown, real routes, external links"
```

---

## Wave 2: Multi-Page Infrastructure

Depends on Wave 0 (configs). Features in this wave are independent of each other.

---

### Feature F14: Astro Page Routing Setup

**Files:**
- Create: `src/pages/modules/index.astro` (overview)
- Create: `src/pages/modules/[slug].astro` (dynamic module pages)
- Create: `src/pages/pricing.astro`
- Create: `src/pages/vs/[slug].astro` (comparison pages)
- Create: `src/pages/privacy.astro` (placeholder)
- Create: `src/pages/terms.astro` (placeholder)
- Create: `src/pages/ru/modules/index.astro`
- Create: `src/pages/ru/modules/[slug].astro`
- Create: `src/pages/ru/pricing.astro`
- Create: `src/pages/ru/vs/[slug].astro`

**Step 1: Check Astro routing config**

Read `astro.config.mjs` to understand i18n setup and base path.

**Step 2: Create page stubs with getStaticPaths**

For dynamic routes (`[slug].astro`), implement `getStaticPaths()`:

```typescript
// src/pages/modules/[slug].astro
export function getStaticPaths() {
  return [
    { params: { slug: "core" } },
    { params: { slug: "product" } },
    { params: { slug: "qa" } },
    { params: { slug: "autopilot" } },
  ];
}

// src/pages/vs/[slug].astro
export function getStaticPaths() {
  return [
    { params: { slug: "cursor-rules" } },
    { params: { slug: "devin" } },
    { params: { slug: "claude-md" } },
  ];
}
```

Each page stub: imports BaseLayout, renders `<BaseLayout title="...">` with placeholder content.

**Step 3: Create /ru/ mirrors**

Russian pages import same components but pass `locale="ru"` prop.

**Step 4: Verify build — all routes generated**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds, generates pages for all URLs in the URL map.

**Step 5: Commit**

```bash
git add src/pages/
git commit -m "feat: multi-page routing — modules, pricing, comparisons, legal stubs"
```

---

### Feature F15: Page Layout with Breadcrumbs

**Files:**
- Create: `src/layouts/PageLayout.astro`
- Create: `src/shared/ui/Breadcrumbs.astro`

**Step 1: Read BaseLayout.astro**

Read `src/layouts/BaseLayout.astro` to understand existing layout structure.

**Step 2: Create Breadcrumbs component**

```typescript
// src/shared/ui/Breadcrumbs.astro
// Props: items: { label: string; href?: string }[]
// Render: Home > Parent > Current
// Last item = no link (current page)
// Separator: ">" or chevron SVG
// Schema markup: BreadcrumbList JSON-LD
```

**Step 3: Create PageLayout**

`PageLayout.astro` wraps `BaseLayout` and adds:
- NavBar (top)
- Breadcrumbs (below nav, above content)
- `<slot />` for page content
- Footer (bottom)

```astro
---
import BaseLayout from "./BaseLayout.astro";
import NavBar from "../widgets/NavBar.astro";
import Breadcrumbs from "../shared/ui/Breadcrumbs.astro";
import Footer from "../widgets/Footer.astro";

interface Props {
  title?: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const { title, description, breadcrumbs = [] } = Astro.props;
---
<BaseLayout title={title} description={description}>
  <NavBar />
  {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
  <main>
    <slot />
  </main>
  <Footer />
</BaseLayout>
```

**Step 4: Verify build**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/layouts/PageLayout.astro src/shared/ui/Breadcrumbs.astro
git commit -m "feat: PageLayout + Breadcrumbs component with JSON-LD schema"
```

---

### Feature F16: Module Page Content Configs

**Files:**
- Create: `src/shared/config/module-pages/core.ts`
- Create: `src/shared/config/module-pages/product.ts`
- Create: `src/shared/config/module-pages/qa.ts`
- Create: `src/shared/config/module-pages/autopilot.ts`
- Create: `src/shared/config/module-pages/index.ts` (barrel export)

**Step 1: Define ModulePage type**

```typescript
// Type shared across all module pages:
interface ModulePageConfig {
  slug: string;
  name: string;
  tagline: string;
  tier: "Core" | "Pro" | "Bundle";
  tierPrice: string;
  // Section 2: The Problem
  problems: { pain: string; evidence: string }[];
  // Section 3: How It Works
  steps: { title: string; description: string; visual?: VisualLine[] }[];
  // Section 4: Key Capabilities
  capabilities: { icon: string; title: string; description: string }[];
  // Section 5: What Makes It Different
  comparison: { dimension: string; them: string; forge: string }[];
  comparisonTarget: string; // "Cursor Rules", "Devin", etc.
  // Section 6: Works With (ecosystem)
  integrations: { module: string; description: string; href: string }[];
  // Meta
  seo: { title: string; description: string };
}
```

**Step 2: Create config for each module**

Content from design doc section "Module Content Summary" + comparison tables:

- `core.ts`: vs Cursor Rules generators, 7-gate wizard, 50+ patterns
- `product.ts`: vs Figma/Miro PRD tools, 9 archetypes, 9 methodologies
- `qa.ts`: vs Virtuoso/TestSprite, 4-level traceability, LLM-as-Judge
- `autopilot.ts`: vs Raw Agent Teams, backlog->conflict->wave->merge pipeline

**Step 3: Create barrel export**

```typescript
// src/shared/config/module-pages/index.ts
export { corePageConfig } from "./core";
export { productPageConfig } from "./product";
export { qaPageConfig } from "./qa";
export { autopilotPageConfig } from "./autopilot";

export const modulePages = { core: corePageConfig, product: productPageConfig, qa: qaPageConfig, autopilot: autopilotPageConfig };
```

**Step 4: Verify build (type-check)**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npx astro check`
Expected: No type errors.

**Step 5: Commit**

```bash
git add src/shared/config/module-pages/
git commit -m "content: module page configs — core, product, qa, autopilot"
```

---

### Feature F17: Comparison Page Content Configs

**Files:**
- Create: `src/shared/config/comparisons/cursor-rules.ts`
- Create: `src/shared/config/comparisons/devin.ts`
- Create: `src/shared/config/comparisons/claude-md.ts`
- Create: `src/shared/config/comparisons/index.ts`

**Step 1: Define ComparisonPage type**

```typescript
interface ComparisonPageConfig {
  slug: string;
  competitor: string;
  searchIntent: string[]; // SEO keywords
  headline: string;
  subheadline: string;
  rows: { dimension: string; them: string; forge: string }[];
  verdict: string;
  ctaText: string;
  seo: { title: string; description: string };
}
```

**Step 2: Create configs from design doc comparison tables**

Content directly from design doc sections `/vs/cursor-rules`, `/vs/devin`, `/vs/claude-md`.

**Step 3: Create barrel export**

**Step 4: Verify type-check**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npx astro check`
Expected: No type errors.

**Step 5: Commit**

```bash
git add src/shared/config/comparisons/
git commit -m "content: comparison page configs — vs Cursor Rules, Devin, CLAUDE.md"
```

---

## Wave 3: Module Pages

Depends on Wave 2 (routing + layout + configs). Each page is independent.

---

### Feature F18: forge-core Module Page

**Files:**
- Create: `src/widgets/module-page/ModuleHero.astro`
- Create: `src/widgets/module-page/ModuleProblem.astro`
- Create: `src/widgets/module-page/ModuleHowItWorks.astro`
- Create: `src/widgets/module-page/ModuleCapabilities.astro`
- Create: `src/widgets/module-page/ModuleComparison.astro`
- Create: `src/widgets/module-page/ModuleEcosystem.astro`
- Create: `src/widgets/module-page/ModuleCta.astro`
- Modify: `src/pages/modules/[slug].astro`

**Step 1: Create reusable module page widgets**

Each widget accepts `ModulePageConfig` (or a slice of it) as props. These widgets are SHARED across all 4 module pages.

Template from design doc (Module Page Template, 7 sections):
1. Hero (compact): icon + name + tagline + CTA
2. The Problem: 2-3 pain points with evidence
3. How It Works: 3-5 step visual flow with terminal output
4. Key Capabilities: 3-6 feature cards
5. What Makes It Different: comparison table vs closest alternative
6. Works With (ecosystem): integration arrows
7. CTA: pricing tier + "See all modules ->"

Style: reuse existing design tokens and UI components (Card, Button, CodeBlock, SectionLabel, Container).

**Step 2: Wire [slug].astro to render module widgets**

```astro
---
import { modulePages } from "../../shared/config/module-pages";
import PageLayout from "../../layouts/PageLayout.astro";
// ... import all ModulePage widgets

export function getStaticPaths() {
  return Object.keys(modulePages).map(slug => ({ params: { slug } }));
}

const { slug } = Astro.params;
const config = modulePages[slug];
---
<PageLayout
  title={config.seo.title}
  description={config.seo.description}
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Modules", href: "/modules" },
    { label: config.name }
  ]}
>
  <ModuleHero {...config} />
  <ModuleProblem problems={config.problems} />
  <ModuleHowItWorks steps={config.steps} />
  <ModuleCapabilities capabilities={config.capabilities} />
  <ModuleComparison rows={config.comparison} target={config.comparisonTarget} />
  <ModuleEcosystem integrations={config.integrations} />
  <ModuleCta tier={config.tier} price={config.tierPrice} />
</PageLayout>
```

**Step 3: Verify forge-core page renders**

Run: `cd /home/marisko/webstorm-projects/forge-devkit-landing && npm run dev`
Navigate to `http://localhost:4321/modules/core`
Expected: Page renders all 7 sections with forge-core content.

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds, `/modules/core/index.html` generated.

**Step 5: Commit**

```bash
git add src/widgets/module-page/ src/pages/modules/
git commit -m "feat: module page template (7 widgets) + forge-core page"
```

---

### Feature F19: forge-product Module Page

**Files:**
- Modify: `src/pages/modules/[slug].astro` (already handles this via config)

This feature is "free" if F18 widgets + F16 config are done correctly. Verify only.

**Step 1: Verify page renders**

Run: `npm run dev`, navigate to `/modules/product`
Expected: All 7 sections render with forge-product content from config.

**Step 2: Review content quality**

Check each section for correct copy, proper linking, and consistent styling.

**Step 3: Commit (if any fixes needed)**

```bash
git commit -m "content: verify forge-product module page"
```

---

### Feature F20: forge-qa Module Page

Same as F19 — verify `/modules/qa` renders correctly.

---

### Feature F21: forge-autopilot Module Page

Same as F19 — verify `/modules/autopilot` renders correctly. This is the **peak moment** page, so extra attention to:
- Terminal visual showing wave execution with parallel agents
- Kubernetes analogy in "How It Works"
- Comparison table vs raw Agent Teams
- "Works With" showing forge-core + forge-worktree integration

---

## Wave 4: Supporting Pages

Depends on Wave 2 (routing + layout). Independent of Wave 3.

---

### Feature F22: Pricing Dedicated Page

**Files:**
- Create: `src/widgets/pricing-page/PricingHero.astro`
- Create: `src/widgets/pricing-page/PricingTiers.astro`
- Create: `src/widgets/pricing-page/PricingComparison.astro`
- Create: `src/widgets/pricing-page/PricingTrust.astro`
- Create: `src/widgets/pricing-page/PricingFaq.astro`
- Modify: `src/pages/pricing.astro`
- Create: `src/shared/config/pricing-page.ts`

**Step 1: Create pricing page config**

Content from design doc "Pricing Page Design" section (JetBrains model):

```typescript
// 1. Headline: "One-time purchase. Your artifacts stay forever."
// 2. Competitor anchor bar: "Devin: $240/yr mandatory. Forge: from $29 once."
// 3. Three tier cards (Pro highlighted) — price shown as "$29" NOT "$29/yr"
//    Each card: price + "Includes 1 year of updates" + "Renewal: $19/yr (optional)"
// 4. Feature comparison table (all 6 modules x 3 tiers)
// 5. Trust signals: "No subscription", "Artifacts yours forever", "Renewal optional"
// 6. Pricing FAQ: "What happens after year 1?", "Do I have to renew?",
//    "What if I don't renew?", refunds, team licensing
```

**Step 2: Create pricing page widgets**

- `PricingHero`: headline + competitor anchor
- `PricingTiers`: 3 cards with checkmarks, Pro card highlighted with "Recommended" badge
- `PricingComparison`: expandable table showing all features per tier
- `PricingTrust`: trust badges (no subscription, no tokens, 1-year updates)
- `PricingFaq`: pricing-specific FAQ accordion

Each tier card CTA: LemonSqueezy checkout link (`data-lemonsqueezy` attribute for overlay).

**Step 3: Wire pricing.astro**

```astro
<PageLayout
  title="Pricing — Forge DevKit"
  description="One-time purchase. Core $29, Pro $79, Bundle $149."
  breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
>
  <PricingHero />
  <PricingTiers />
  <PricingComparison />
  <PricingTrust />
  <PricingFaq />
</PageLayout>
```

**Step 4: Verify build + LemonSqueezy overlay**

Run: `npm run build`
Expected: `/pricing/index.html` generated. Checkout links use `lemonsqueezy.com/buy/` format.

**Step 5: Commit**

```bash
git add src/widgets/pricing-page/ src/pages/pricing.astro src/shared/config/pricing-page.ts
git commit -m "feat: dedicated pricing page — tiers, comparison table, trust signals"
```

---

### Feature F23: Modules Overview Page

**Files:**
- Create: `src/widgets/modules-overview/ModulesGrid.astro`
- Create: `src/widgets/modules-overview/ModulesOverviewHero.astro`
- Modify: `src/pages/modules/index.astro`
- Create: `src/shared/config/modules-overview.ts`

**Step 1: Create overview config**

```typescript
// Headline: "The Forge Pipeline"
// Subheadline: "Six modules that transform AI-assisted development from chaos to production-ready code."
// Grid: all 6 modules as cards
// 4 with dedicated pages: link to /modules/{slug}
// 2 support (tracker, worktree): expanded card content with anchors
```

**Step 2: Create overview widgets**

- `ModulesOverviewHero`: headline + pipeline summary
- `ModulesGrid`: 6-card grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
  - Cards with module icon, name, tagline, key features (3 bullet points), CTA link
  - tracker/worktree cards: `id="tracker"`, `id="worktree"` for anchor linking
  - forge-autopilot card: highlight border (peak moment)

**Step 3: Wire modules/index.astro**

**Step 4: Verify build**

Run: `npm run build`
Expected: `/modules/index.html` generated.

**Step 5: Commit**

```bash
git add src/widgets/modules-overview/ src/pages/modules/index.astro src/shared/config/modules-overview.ts
git commit -m "feat: modules overview page — 6-card grid with anchor support"
```

---

### Feature F24: Comparison Pages (vs/*)

**Files:**
- Create: `src/widgets/comparison-page/ComparisonHero.astro`
- Create: `src/widgets/comparison-page/ComparisonTable.astro`
- Create: `src/widgets/comparison-page/ComparisonVerdict.astro`
- Create: `src/widgets/comparison-page/ComparisonCta.astro`
- Modify: `src/pages/vs/[slug].astro`

**Step 1: Create reusable comparison widgets**

Template for all 3 comparison pages:
1. Hero: "Forge DevKit vs {Competitor}" + search intent keywords
2. Comparison Table: side-by-side with green checkmarks for Forge advantages
3. Verdict: summary paragraph
4. CTA: "Try Forge ->" -> /pricing

**Step 2: Wire [slug].astro with comparison configs (F17)**

```astro
---
import { comparisons } from "../../shared/config/comparisons";
import PageLayout from "../../layouts/PageLayout.astro";

export function getStaticPaths() {
  return Object.keys(comparisons).map(slug => ({ params: { slug } }));
}

const { slug } = Astro.params;
const config = comparisons[slug];
---
<PageLayout
  title={config.seo.title}
  breadcrumbs={[{ label: "Home", href: "/" }, { label: `Forge vs ${config.competitor}` }]}
>
  <ComparisonHero {...config} />
  <ComparisonTable rows={config.rows} />
  <ComparisonVerdict text={config.verdict} />
  <ComparisonCta text={config.ctaText} />
</PageLayout>
```

**Step 3: Verify all 3 comparison pages**

Run: `npm run build`
Expected: `/vs/cursor-rules/`, `/vs/devin/`, `/vs/claude-md/` generated.

**Step 4: Commit**

```bash
git add src/widgets/comparison-page/ src/pages/vs/
git commit -m "feat: comparison pages — vs Cursor Rules, Devin, CLAUDE.md"
```

---

### Feature F25: Legal Pages (Privacy + Terms)

**Files:**
- Modify: `src/pages/privacy.astro`
- Modify: `src/pages/terms.astro`

**Step 1: Create placeholder legal pages**

Minimal pages with PageLayout, breadcrumbs, and placeholder content:
- "Privacy Policy — coming soon"
- "Terms of Service — coming soon"

These are Phase 2 content but need to exist for footer links to work.

**Step 2: Verify build**

Run: `npm run build`
Expected: `/privacy/` and `/terms/` generated.

**Step 3: Commit**

```bash
git add src/pages/privacy.astro src/pages/terms.astro
git commit -m "feat: legal page placeholders (privacy, terms)"
```

---

## Wave 5: i18n + Polish

Depends on Waves 3-4. Can be parallelized by page/area.

---

### Feature F26: Russian Translations for New Content

**Files:**
- Modify: `src/shared/i18n/ru.ts`
- Modify: `src/shared/i18n/en.ts` (add new keys)

**Step 1: Read current i18n files**

Read `src/shared/i18n/en.ts` and `ru.ts` to understand structure.

**Step 2: Add translation keys for all new content**

Add keys for:
- Module page sections (hero, problem, how-it-works, capabilities, comparison, ecosystem, cta)
- Pricing page sections
- Comparison page sections
- Breadcrumb labels
- Navigation items (Modules dropdown labels)
- Footer column titles
- Pipeline section

**Step 3: Verify Russian pages build**

Run: `npm run build`
Expected: All `/ru/*` pages generated with Russian content.

**Step 4: Commit**

```bash
git add src/shared/i18n/
git commit -m "i18n: Russian translations for all new pages and sections"
```

---

### Feature F27: SEO Meta Tags

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/layouts/PageLayout.astro`

**Step 1: Add OpenGraph + Twitter meta tags**

```html
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url.href} />
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
```

**Step 2: Add canonical URL**

```html
<link rel="canonical" href={Astro.url.href} />
```

For Russian pages, canonical should point to the Russian version (not English).

**Step 3: Add hreflang tags**

```html
<link rel="alternate" hreflang="en" href={enUrl} />
<link rel="alternate" hreflang="ru" href={ruUrl} />
<link rel="alternate" hreflang="x-default" href={enUrl} />
```

**Step 4: Verify build**

Run: `npm run build`
Expected: All pages have proper meta tags in HTML output.

**Step 5: Commit**

```bash
git add src/layouts/
git commit -m "seo: OpenGraph, Twitter cards, canonical URLs, hreflang"
```

---

### Feature F28: Cleanup + Redirect Anchors

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Add id anchors for backward compatibility**

The old landing used anchor links (`#solution`, `#how-it-works`, `#modules`, `#pricing`, `#faq`). Add `id` attributes to corresponding sections so existing bookmarks/links still work.

Also update floating mobile CTA: change `href="#pricing"` to `href="/pricing"`.

**Step 2: Remove any orphaned components**

Check for unused widgets or config files that were replaced. Remove dead imports.

**Step 3: Full build + link check**

Run: `npm run build`
Verify: all internal links resolve (no 404s in build output).

**Step 4: Commit**

```bash
git add -A
git commit -m "cleanup: backward-compat anchors, remove orphaned components, fix internal links"
```

---

## Summary

| Wave | Features | Parallel Agents | Est. Files Changed |
|------|----------|----------------|-------------------|
| 0 | F1-F8 | 8 | 8 config files |
| 1 | F9-F13 | 5 | ~10 widget files + index.astro |
| 2 | F14-F17 | 4 | ~20 page stubs + layouts + configs |
| 3 | F18-F21 | 4 | 7 module widgets + verification |
| 4 | F22-F25 | 4 | ~15 widgets + page wiring |
| 5 | F26-F28 | 3 | i18n + layouts + cleanup |

**Total: 28 features across 6 waves.**

Wave 0 is fully parallel (8 agents). Waves 1-2 can run in parallel with each other (both depend only on Wave 0). Waves 3-4 can run in parallel (both depend on Wave 2). Wave 5 is the final sequential wave.

```
Wave 0 (8 parallel) ─┬─> Wave 1 (5 parallel) ─────────────┬─> Wave 5 (3 parallel)
                      └─> Wave 2 (4 parallel) ─┬─> Wave 3 (4 parallel) ─┘
                                                └─> Wave 4 (4 parallel) ─┘
```
