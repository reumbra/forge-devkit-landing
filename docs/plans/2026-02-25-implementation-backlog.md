# Forge DevKit Landing — Implementation Backlog

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement the Forge DevKit landing page from Pencil design to production-ready Astro site.

**Architecture:** Astro 5.x SSG, Tailwind v4 with @theme, adapted FSD (pages → widgets → shared), vanilla JS interactivity, i18n (en/ru), self-hosted fonts.

**Tech Stack:** Astro 5.x, Tailwind CSS v4, Biome, pnpm, Cloudflare Pages

---

## Reference Documents

| Doc | Path | Purpose |
|-----|------|---------|
| CLAUDE.md | `CLAUDE.md` | Architecture rules, FSD structure, conventions |
| Page Architecture | `docs/plans/2026-02-25-page-architecture-design.md` | 14-section specs: layouts, elements, content, responsive |
| Design Tokens | `docs/plans/design-tokens.md` | Colors, typography, spacing, component specs for @theme |
| Pencil Design | `design/forge-landing.pen` | Visual reference (open in Pencil) |
| Messaging Framework | `docs/research/MESSAGING-FRAMEWORK.md` | Copy direction, CTA strategy, voice rules |
| Principles | `docs/research/PRINCIPLES.md` | 44 design/brand/marketing guardrails |
| Brand Guidelines | `docs/research/002-brand-guidelines-summary.md` | Brand rules, visual identity |

---

## Phase 1: Scaffolding — Get `pnpm dev` Running

**Goal:** Empty Astro project with Tailwind v4, Biome, i18n, fonts, FSD directories, base layout. Dev server shows a blank dark page.

**Refs:** `CLAUDE.md` (tech stack, architecture), `design-tokens.md` (colors, fonts)

### Task 1.1: Init Astro + Tailwind + Biome

**Files:**
- Create: `package.json`, `astro.config.ts`, `tsconfig.json`, `biome.json`
- Create: `src/styles/global.css`

**Steps:**
1. `pnpm create astro@latest . -- --template minimal --no-install`
2. `pnpm install`
3. `pnpm add tailwindcss @tailwindcss/vite`
4. `pnpm add -D @biomejs/biome`
5. Configure `astro.config.ts` — Tailwind vite plugin + i18n (en default, ru prefixed)
6. Configure `biome.json` — formatter + linter + astro overrides
7. `pnpm dev` — verify server starts
8. Commit: `chore: init astro 5 + tailwind v4 + biome`

### Task 1.2: Directory Structure (FSD)

**Files:**
- Create dirs: `src/shared/ui/`, `src/shared/lib/`, `src/shared/config/`, `src/shared/i18n/`
- Create dirs: `src/widgets/`, `src/layouts/`, `src/pages/ru/`
- Create: `src/assets/fonts/` (empty, fonts added in 1.3)

**Steps:**
1. Create all directories per CLAUDE.md architecture
2. Add `.gitkeep` to empty dirs
3. Commit: `chore: add FSD directory structure`

### Task 1.3: Fonts + Global CSS + @theme

**Files:**
- Add: `src/assets/fonts/*.woff2` (Satoshi + JetBrains Mono)
- Create: `src/styles/global.css` — @font-face + @import tailwindcss + @theme block

**Refs:** `design-tokens.md` sections 1-5 (full @theme block in section 9)

**Steps:**
1. Download Satoshi font family (Regular 400, Medium 500, SemiBold 600, Bold 700, Black 900) as woff2
2. Download JetBrains Mono (Regular 400, Medium 500) as woff2
3. Place in `src/assets/fonts/`
4. Write `global.css` with @font-face declarations, @import tailwindcss, @theme with all design tokens
5. Commit: `feat: add fonts + global css with design tokens`

### Task 1.4: Base Layout + Placeholder Page

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/index.astro`

**Steps:**
1. Create `BaseLayout.astro` — html/head/body, import global.css, meta tags, font preloads, slot
2. Create `index.astro` — uses BaseLayout, shows "Forge DevKit" text in white on black bg
3. `pnpm dev` — verify: dark page, correct fonts loaded, no errors
4. Commit: `feat: add base layout + placeholder page`

### Task 1.5: i18n Setup

**Files:**
- Create: `src/shared/i18n/en.ts`, `src/shared/i18n/ru.ts`, `src/shared/i18n/utils.ts`
- Create: `src/pages/ru/index.astro`

**Steps:**
1. Create translation files with a few test keys
2. Create `t()` helper function
3. Create ru/index.astro that uses Russian locale
4. Verify `/` shows English, `/ru/` shows Russian
5. Commit: `feat: add i18n scaffolding (en + ru)`

**Checkpoint 1:** `pnpm dev` works, dark page with correct fonts, i18n routing works.

---

## Phase 2: Design System — `shared/ui/` Components

**Goal:** All reusable UI components built and visually verified in isolation.

**Refs:** `design-tokens.md` (component specs section 6), `page-architecture-design.md` (element tables per section), `design/forge-landing.pen` (visual reference)

### Task 2.1: Container + SectionLabel

**Files:**
- Create: `src/shared/ui/Container.astro`
- Create: `src/shared/ui/SectionLabel.astro`

Container: max-w-[1200px], centered, responsive padding.
SectionLabel: JetBrains Mono 12px uppercase, #9A75EA, letter-spacing 0.15em.

### Task 2.2: Button (primary, ghost, large)

**Files:**
- Create: `src/shared/ui/Button.astro`

**Refs:** `design-tokens.md` section 6 (button specs), `page-architecture-design.md` (CTA specs)

Variants: primary (bg #7649C4), ghost (border, transparent bg), large (18px 48px padding).
Props: variant, href, size.

### Task 2.3: Card (standard, pain, pricing, module, entrepreneur)

**Files:**
- Create: `src/shared/ui/Card.astro`

**Refs:** `design-tokens.md` section 6 (card variants), `page-architecture-design.md` (per-section card specs)

Standard card: bg #191919, border, radius 14px, hover lift.
Variants via props: pain (italic quote, no hover), pricing (Pro glow), hero-module (full-width, larger padding), entrepreneur (full-width, vertical).

### Task 2.4: CodeBlock (terminal + code)

**Files:**
- Create: `src/shared/ui/CodeBlock.astro`

**Refs:** `design-tokens.md` section 6 (code block specs), `page-architecture-design.md` (terminal content specs)

Dark purple bg (#160B2D), JetBrains Mono, border, radius 14px. Props: content (string[]), language (optional), withGlow (boolean).

### Task 2.5: Badge (framework, platform, status)

**Files:**
- Create: `src/shared/ui/Badge.astro`

JetBrains Mono, small, purple tint bg. Variants: framework (11px), platform (11px), status (★ Popular).

### Task 2.6: Accordion (FAQ)

**Files:**
- Create: `src/shared/ui/Accordion.astro`
- Create: `src/shared/ui/AccordionItem.astro`

Native `<details>/<summary>` or vanilla JS. Purple indicator bar, smooth height transition.

### Task 2.7: DiamondDivider + StepConnector

**Files:**
- Create: `src/shared/ui/DiamondDivider.astro`
- Create: `src/shared/ui/StepConnector.astro`

DiamondDivider: `──── ◇ ──── ◇ ──── ◇ ────` pattern.
StepConnector: horizontal line with 4 dots (from How It Works).

**Checkpoint 2:** All shared/ui components exist. Verify in a dev-only test page (`/dev/components`).

---

## Phase 3: Content Data — `shared/config/`

**Goal:** All text content in TypeScript config files. No hardcoded strings in widgets.

**Refs:** `page-architecture-design.md` (content per section), `MESSAGING-FRAMEWORK.md` (copy direction)

### Task 3.1: Navigation + Hero + Problem data

**Files:**
- Create: `src/shared/config/navigation.ts`
- Create: `src/shared/config/hero.ts`
- Create: `src/shared/config/problems.ts`

### Task 3.2: Solution + Deep Dives data

**Files:**
- Create: `src/shared/config/solution.ts`
- Create: `src/shared/config/deep-dives.ts` (all 4 blocks)

### Task 3.3: How It Works + Modules data

**Files:**
- Create: `src/shared/config/how-it-works.ts`
- Create: `src/shared/config/modules.ts`

### Task 3.4: Entrepreneur + Pricing + Author data

**Files:**
- Create: `src/shared/config/entrepreneurs.ts`
- Create: `src/shared/config/pricing.ts`
- Create: `src/shared/config/author.ts`

### Task 3.5: FAQ + Footer + Final CTA data

**Files:**
- Create: `src/shared/config/faq.ts`
- Create: `src/shared/config/footer.ts`

**Checkpoint 3:** All config files export typed data. `tsc --noEmit` passes.

---

## Phase 4: Widgets — Section by Section

**Goal:** Each landing page section as an independent widget, consuming shared/ui + shared/config.

**Refs:** `page-architecture-design.md` (layouts, responsive), `design/forge-landing.pen` (visual), `PRINCIPLES.md` (#14 real content, #15 direct)

### Task 4.1: NavBar widget

**Files:** `src/widgets/NavBar/NavBar.astro`
**Ref:** page-architecture Section 1 (Nav specs), design-tokens (nav styling)

### Task 4.2: HeroSection widget

**Files:** `src/widgets/Hero/HeroSection.astro`
**Ref:** page-architecture Section 1 (Hero layout + elements), design-tokens (terminal glow)

### Task 4.3: ProblemSection widget

**Files:** `src/widgets/Problem/ProblemSection.astro`
**Ref:** page-architecture Section 2 (2x2 pain grid + transition)

### Task 4.4: SolutionOverviewSection widget

**Files:** `src/widgets/Solution/SolutionOverviewSection.astro`
**Ref:** page-architecture Section 3 (3 pillar cards with ◇ icons)

### Task 4.5: DeepDiveArchitectureSection widget

**Files:** `src/widgets/DeepDives/DeepDiveArchitectureSection.astro`
**Ref:** page-architecture Section 4 (text LEFT, terminal RIGHT)

### Task 4.6: DeepDiveQualitySection widget

**Files:** `src/widgets/DeepDives/DeepDiveQualitySection.astro`
**Ref:** page-architecture Section 5 (code LEFT, text RIGHT — zigzag)

### Task 4.7: DeepDivePipelineSection widget

**Files:** `src/widgets/DeepDives/DeepDivePipelineSection.astro`
**Ref:** page-architecture Section 6 (text LEFT, pipeline RIGHT)

### Task 4.8: DeepDiveTestsSection widget

**Files:** `src/widgets/DeepDives/DeepDiveTestsSection.astro`
**Ref:** page-architecture Section 7 (code LEFT, text RIGHT — zigzag)

### Task 4.9: HowItWorksSection widget

**Files:** `src/widgets/HowItWorks/HowItWorksSection.astro`
**Ref:** page-architecture Section 8 (4 steps + connector + platform badges)

### Task 4.10: ModulesSection widget

**Files:** `src/widgets/Modules/ModulesSection.astro`
**Ref:** page-architecture Section 9 (forge-core hero + 3 module cards)

### Task 4.11: EntrepreneurSection widget

**Files:** `src/widgets/Entrepreneur/EntrepreneurSection.astro`
**Ref:** page-architecture Section 10 (diamond divider + 3 cards + CTA)

### Task 4.12: PricingSection widget

**Files:** `src/widgets/Pricing/PricingSection.astro`
**Ref:** page-architecture Section 11 (3 tiers, Pro highlighted)

### Task 4.13: AuthorSection widget

**Files:** `src/widgets/Author/AuthorSection.astro`
**Ref:** page-architecture Section 12 (photo + quote with left border)

### Task 4.14: FaqSection widget

**Files:** `src/widgets/Faq/FaqSection.astro`
**Ref:** page-architecture Section 13 (7 accordion items)

### Task 4.15: FinalCtaSection + FooterSection widgets

**Files:**
- `src/widgets/FinalCta/FinalCtaSection.astro`
- `src/widgets/Footer/FooterSection.astro`

**Ref:** page-architecture Section 14

**Checkpoint 4:** Each widget renders correctly in isolation. Visual comparison with Pencil design.

---

## Phase 5: Assembly + Polish

### Task 5.1: Main Page Assembly

**Files:** `src/pages/index.astro`
Compose all widgets in narrative arc order.

### Task 5.2: Scroll Animations

**Files:** `src/shared/lib/scroll-observer.ts` (vanilla JS)
IntersectionObserver: fade-up on scroll, 0.7s ease-out, staggered cards.

### Task 5.3: Responsive Verification

Test all breakpoints: mobile (<768px), tablet (768-1023px), desktop (≥1024px).
**Ref:** page-architecture Responsive Strategy section

### Task 5.4: Russian Translation

**Files:** `src/shared/i18n/ru.ts` (all keys), `src/pages/ru/index.astro`
**Ref:** `MESSAGING-FRAMEWORK.md` section 9 (i18n notes)

### Task 5.5: Meta + SEO + Performance

Open Graph tags, favicon, sitemap, robots.txt. Lighthouse audit target: 90+.

**Checkpoint 5:** Full landing page works, both locales, responsive, animated, performant.
