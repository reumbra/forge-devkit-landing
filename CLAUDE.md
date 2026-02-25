# Forge DevKit Landing

Product website for Forge DevKit at `reumbra.com/forge`.

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

## Development

- `pnpm dev` — start dev server (http://localhost:4321/forge/)
- `pnpm build` — production build to `dist/`
- `pnpm lint` / `pnpm lint:fix` — Biome check/fix
- `site` is `https://reumbra.com`, `base` is `/forge`

## Gotchas

- **Tailwind v4**: Uses `@tailwindcss/vite` directly, NOT `@astrojs/tailwind` (that's for v3)
- **Font preloading**: Use `import font from "path.woff2"` in Astro frontmatter. `new URL(..., import.meta.url)` resolves to `file://` in dev
- **Satoshi font**: From fontshare.com (not npm). Downloaded via `api.fontshare.com/v2/css` API
- **Biome + Astro**: `.astro` files need linter overrides (noUnusedVariables, noUnusedImports off) — already configured in `biome.json`

## Design Reference

All design/copy decisions trace back to research docs in `docs/research/`:
- `PRINCIPLES.md` — 44 guardrails for all decisions
- `MESSAGING-FRAMEWORK.md` — copy direction, CTA strategy, voice rules
- `page-architecture-design.md` in `docs/plans/` — 14-section specs with layouts, content, responsive
- `design-tokens.md` in `docs/plans/` — colors, typography, spacing for @theme
- `design/forge-landing.pen` — Pencil visual mockup (open in Pencil app)
