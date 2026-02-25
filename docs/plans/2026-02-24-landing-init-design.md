# Forge DevKit Landing — Init Design

**Date:** 2026-02-24
**Status:** Approved
**Scope:** Project initialization — architecture, tooling, design system scaffold. No landing page content.

## Context

Landing site for Forge DevKit (`reumbra.com/forge`). Part of the ecosystem:
- **forge-devkit-cli** — npm CLI (`@reumbra/forge`)
- **forge-devkit-api** — Fastify backend (licenses, plugin delivery, webhooks)
- **ai-marketplace** — plugin source code (forge-core, forge-product, forge-qa, forge-tracker)
- **forge-devkit-landing** (this repo) — marketing, pricing, purchase flow

The site will grow into a product catalog, blog, and docs over time.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5.x (SSG) |
| Styling | Tailwind CSS v4 with `@theme` |
| Fonts | Satoshi (body/headings) + JetBrains Mono (code), self-hosted |
| Animations | CSS animations + Astro View Transitions |
| i18n | Astro native (en default, ru) |
| Hosting | Cloudflare Pages |
| Payments | LemonSqueezy checkout overlay |
| Package manager | pnpm |
| Linting | Biome |

## Architecture (Adapted FSD)

Three-layer structure based on Feature-Sliced Design principles:

```
pages → widgets → shared
```

### Layer 1: `src/shared/` — Design system + utilities

The ONLY source of UI components. Everything visible on the page is built from this layer.

- `ui/` — Button, Card, Badge, Container, Typography, Icon, Divider, CodeBlock, Accordion
- `lib/` — utilities (cn(), formatPrice())
- `config/` — constants (pricing data, nav links, site meta, module descriptions, FAQ)
- `i18n/` — translation files (en.ts, ru.ts) + helper (utils.ts with t(), getLocale())

### Layer 2: `src/widgets/` — Composite blocks

Built exclusively from `shared/ui`. Each widget is a directory. Widgets never import other widgets.

- Header, Footer, Hero, ProblemSolution, ModulesShowcase, HowItWorks, Pricing, FAQ

### Layer 3: `src/pages/` — Astro pages

Assemble widgets into pages. Minimal logic.

### Other directories

- `src/layouts/` — Base layout (html, head, fonts, meta, View Transitions)
- `src/content/` — Astro Content Collections (future: product catalog, blog)
- `src/styles/global.css` — @theme, font-face, CSS variables, base resets
- `public/fonts/` — Self-hosted font files

## Project Structure

```
forge-devkit-landing/
├── public/
│   ├── fonts/
│   │   ├── Satoshi-Variable.woff2
│   │   └── JetBrainsMono-Variable.woff2
│   ├── og/
│   └── favicon.svg
├── src/
│   ├── shared/
│   │   ├── ui/              # Design system components
│   │   ├── lib/             # Utilities
│   │   ├── config/          # Data constants
│   │   └── i18n/            # Translations + helpers
│   ├── widgets/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── ProblemSolution/
│   │   ├── ModulesShowcase/
│   │   ├── HowItWorks/
│   │   ├── Pricing/
│   │   └── FAQ/
│   ├── pages/
│   │   └── index.astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── content/
│   │   └── config.ts
│   └── styles/
│       └── global.css
├── astro.config.ts
├── biome.json
├── package.json
├── tsconfig.json
├── CLAUDE.md
└── README.md
```

## Theming

- Dark theme is the default — all styles written dark-first
- Light theme architecturally prepared via Tailwind v4 `@theme` CSS custom properties
- Switching via `class` on `<html>`, persisted in `localStorage`
- Only dark theme implemented initially; light theme variables defined but not styled

## i18n

- Astro native i18n routing: `/` for en, `/ru/` for ru
- `prefixDefaultLocale: false` — English has no prefix
- Translation files: `src/shared/i18n/en.ts`, `src/shared/i18n/ru.ts`
- Helper: `t(key)` resolves current locale and returns string
- Config data (pricing, modules, faq): export per-locale variants
- Rule: all user-facing strings go through `t()`, no hardcoded text

## Design System Components

| Component | Props | Purpose |
|-----------|-------|---------|
| Button | variant (primary/secondary/ghost), size (sm/md/lg), href? | CTA, navigation |
| Card | variant (default/featured), padding (sm/md/lg) | Content containers |
| Badge | variant (default/accent) | Labels ("New", "Popular") |
| Container | size (sm/md/lg) | Max-width wrapper |
| Typography | as (h1-h3/p/span), variant | Consistent text styles |
| Icon | name, size | Inline SVG icons |
| Divider | — | Horizontal separator |
| CodeBlock | code, lang? | Code snippets in JetBrains Mono |
| Accordion | items[] | FAQ expand/collapse (CSS details) |

## Landing Page Sections (future implementation)

1. **Header** — nav, theme toggle, CTA
2. **Hero** — headline, subtitle, CTA buttons, demo area
3. **ProblemSolution** — before/after contrast
4. **ModulesShowcase** — 3 module cards (core, product, tracker)
5. **HowItWorks** — 4-step timeline with code blocks
6. **Pricing** — 3 plan cards (Starter $29, Pro $79, Bundle $149)
7. **FAQ** — accordion with common questions
8. **Footer** — links, copyright, socials

## Rules

1. All UI only through `shared/ui/` — no raw Tailwind in widgets/pages
2. Widgets never import other widgets
3. All user-facing strings through `t()` — no hardcoded text
4. All content data in `shared/config/`
5. Fonts self-hosted in `public/fonts/`
6. Zero React — vanilla JS `<script>` for interactivity (theme toggle, mobile menu)
7. `pages → widgets → shared` dependency direction, never reversed

## Current Scope

Project initialization only:
- Astro project setup with pnpm
- Tailwind CSS v4 configuration with dark theme
- i18n architecture (routing + translation scaffold)
- Design system scaffold (component stubs)
- Biome configuration
- CLAUDE.md with architectural decisions
- Directory structure

Landing page content and styling — separate phase.
