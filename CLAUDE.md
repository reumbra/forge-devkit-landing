# Forge DevKit Landing

Product website for Forge DevKit at `reumbra.com/forge`.

## Product Context

**Forge DevKit** — architecture-aware pipeline for AI coding agents. Commercial product by Reumbra.
- **Audience:** Developers (senior devs, tech leads, AI agent users). Entrepreneurs = separate landing later.
- **Narrative:** "From Vibe Code to Production" (Arc B)
- **6 modules:** forge-core, forge-product, forge-qa, forge-tracker, forge-autopilot, forge-worktree
- **Pricing (JetBrains model):** €29/€79/€149 one-time + 1yr updates, renewal optional. Artifacts stay forever.
- **Architecture:** Homepage refreshed (13 sections, Waves 0-1 done). Multi-page Module Hub in progress. See landing-refresh-design.md.

## Tech Stack

- **Framework:** Astro 5.x (SSG mode)
- **Styling:** Tailwind CSS v4 with `@theme` for theming
- **Fonts:** Satoshi (body/headings) + JetBrains Mono (code), self-hosted in `src/assets/fonts/` (Vite-processed, cache-busted)
- **Animations:** CSS animations + Astro View Transitions
- **JS islands:** Vanilla JS (`<script>` in Astro) — theme switcher, mobile menu
- **Hosting:** Cloudflare Pages
- **Payments:** LemonSqueezy checkout overlay (embedded SDK)
- **Package manager:** pnpm
- **Linting:** Biome

## Architecture (Adapted FSD)

Three-layer structure based on Feature-Sliced Design principles, adapted for a content site:

```
pages → widgets → shared
```

- **`src/shared/`** — design system + utilities. The ONLY source of UI components
  - `ui/` — Button, Card, Badge, Container, Typography, etc.
  - `lib/` — utilities (cn(), formatPrice())
  - `config/` — constants (pricing data, nav links, site meta)
- **`src/widgets/`** — composite blocks built exclusively from `shared/ui`
  - Each widget is a directory (Header/, Hero/, Pricing/, etc.)
  - Widgets NEVER import other widgets
- **`src/pages/`** — Astro pages that assemble widgets
- **`src/layouts/`** — Base layout (html, head, fonts, meta, View Transitions)
- **`src/content/`** — Astro Content Collections (future: product catalog, blog)
- **`src/styles/global.css`** — @theme, font-face declarations, CSS variables, base resets

### Dependency Rule

`pages → widgets → shared` — never the other way. A widget never imports another widget. Everything is built from `shared/ui/`.

### Design System (`shared/ui/`)

All visual components live here. Widgets and pages build UI only through design system components. No raw HTML with Tailwind classes outside of `shared/ui/` definitions.

## Theming

- **Dark theme is the default** — all styles are written for dark theme first
- **Light theme support** is architecturally prepared via Tailwind v4 `@theme` and CSS custom properties
- Theme switching via `class` on `<html>` element, persisted in `localStorage`
- Only dark theme styles are implemented initially; light theme variables are defined but not styled

## i18n

- **Astro native i18n** — built-in routing, no external dependencies
- **Default locale:** `en` (no prefix: `reumbra.com/forge/`)
- **Additional locale:** `ru` (prefixed: `reumbra.com/forge/ru/`)
- **Translation files:** `src/shared/i18n/{locale}.ts` — flat key-value objects
- **Helper:** `t(key)` function from `src/shared/i18n/utils.ts`
- **Routing:** Astro's `i18n` config in `astro.config.ts` with `routing: { prefixDefaultLocale: false }`
- **Content:** `shared/config/` files export per-locale data OR use `t()` keys
- **Rule:** All user-facing strings go through `t()`. No hardcoded text in widgets or pages.

## Conventions

- Follow Biome formatting (consistent with forge-devkit-cli and forge-devkit-api)
- Self-host all fonts — no external CDN requests
- Prefer `.astro` components over React for everything static
- Use React islands only when vanilla JS `<script>` is insufficient (currently: never)
- Content data (pricing, features, FAQ) lives in `src/shared/config/`, not hardcoded in widgets
- **Content-driven widgets**: All UI text lives in `src/shared/config/*.ts`. Widgets read from configs, never hardcode copy. This enables parallel editing of content (config) and layout (widget) independently.

## Development

- `pnpm dev` — start dev server (http://localhost:4321/)
- `pnpm build` — production build to `dist/`
- `pnpm lint` / `pnpm lint:fix` — Biome check/fix
- `site` is `https://reumbra.com`, `base` is `/`

## Gotchas

- **Tailwind v4**: Uses `@tailwindcss/vite` directly, NOT `@astrojs/tailwind` (that's for v3)
- **Font preloading**: Use `import font from "path.woff2"` in Astro frontmatter. `new URL(..., import.meta.url)` resolves to `file://` in dev
- **Satoshi font**: From fontshare.com (not npm). Downloaded via `api.fontshare.com/v2/css` API
- **Biome + Astro**: `.astro` files need linter overrides (noUnusedVariables, noUnusedImports off) — already configured in `biome.json`
- **Config→Widget contract**: Changing config shape (adding/removing fields, renaming) breaks consuming widgets. Always grep for widget imports of the config and verify field-level compatibility after config changes

## Document Matrix

### Research (docs/research/)

Hub: `INDEX.md` — navigation + chronological log + key decisions.

| Doc | Purpose | Status |
|-----|---------|--------|
| MESSAGING-FRAMEWORK.md | Positioning, value props, copy per section, voice rules | v2 Active |
| PAIN-SOLUTION-MAP.md | Developer pains P1-P9 mapped to Forge features | v2 Active |
| FEATURE-MATRIX.md | Complete feature inventory, 7 categories (incl. autopilot + worktree) | v2 Active |
| AUDIENCE-RESEARCH.md | Developer audience insights, 2026 market data, psychology | v2 Active |
| COMPETITOR-LANDSCAPE.md | Competitive analysis: Devin, Factory, Agent Teams, Cursor Rules | v2 Active |
| 005-product-hypotheses.md | Product hypotheses A1+A2 (devs), B1-B3 deferred | v2 Active |
| PRINCIPLES.md | 44 guardrails for all decisions | Active |
| METHODOLOGY.md | Landing strategy process documentation | Active |
| 001-tech-stack-decisions.md | Tech stack: Astro 5.x + Tailwind v4 + Cloudflare Pages | Locked |
| 002-brand-guidelines-summary.md | Brand rules: colors, fonts, tone | Locked |
| *-v1.md files | Archived v1 versions (pre-2026-03-06) | Archive |

### Plans (docs/plans/)

| Doc | Purpose | Status |
|-----|---------|--------|
| **2026-03-06-landing-refresh-design.md** | **Landing refresh: dev-only, 10 pages, Module Hub, JetBrains pricing** | **Current** |
| **2026-03-06-landing-refresh-impl.md** | **Implementation plan: 28 features, 6 waves, autopilot-ready** | **Current** |
| 2026-03-06-component-design-spec.md | Component design specs (Pipeline, NavBar, Footer, Module pages) | Active |
| design-tokens.md | Design tokens (colors, typography, spacing) for @theme | Active |
| 2026-02-25-pencil-design.md | Pencil (.pen) visual mockup specs | Active |
| 2026-02-25-page-architecture-design.md | Original 14-section single-page design | Superseded |
| 2026-02-25-implementation-backlog.md | Original implementation backlog | Superseded |

### Visual Design

| File | Purpose |
|------|---------|
| design/forge-landing.pen | Pencil visual mockup (open via Pencil MCP tools) |

### When to read what

| Task | Read first |
|------|-----------|
| Updating copy/messaging | MESSAGING-FRAMEWORK.md |
| Adding/modifying section | landing-refresh-design.md + landing-refresh-impl.md |
| Understanding audience/pains | AUDIENCE-RESEARCH.md + PAIN-SOLUTION-MAP.md |
| Feature details | FEATURE-MATRIX.md |
| Design tokens/colors | design-tokens.md |
| Competitor positioning | COMPETITOR-LANDSCAPE.md |
| Building new widget/component | 2026-03-06-component-design-spec.md |
| Visual mockup | design/forge-landing.pen (Pencil MCP) |
