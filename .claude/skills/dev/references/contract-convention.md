# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Naming Conventions — forge-devkit-landing

## Directory & File Naming

| Category | Pattern | Example |
|----------|---------|---------|
| Widget directories | PascalCase | `src/widgets/Hero/`, `src/widgets/Pricing/` |
| Shared UI components | PascalCase.astro | `Button.astro`, `Card.astro`, `Badge.astro` |
| Config files | kebab-case.ts | `pricing-data.ts`, `nav-links.ts` |
| Pages | kebab-case.astro | `index.astro`, `pricing.astro` |
| i18n files | {locale}.ts | `en.ts`, `ru.ts` |

## Architecture Conventions (Adapted FSD)

### Layer Rules

```
pages → widgets → shared (never the other way)
```

- **Pages** (`src/pages/`): Astro pages that assemble widgets. No business logic.
- **Widgets** (`src/widgets/`): Composite blocks. Each is a directory. Widgets NEVER import other widgets.
- **Shared** (`src/shared/`): Design system + utilities. The ONLY source of UI components.
  - `ui/` — Button, Card, Badge, Container, Typography
  - `lib/` — utilities (cn(), formatPrice())
  - `config/` — constants (pricing data, nav links, site meta)
  - `i18n/` — translation files and utilities
- **Layouts** (`src/layouts/`): Base layout (html, head, fonts, meta, View Transitions)

### Import Rules

- Widgets import ONLY from `shared/`
- Pages import from `widgets/` and `shared/`
- No widget-to-widget imports
- No upward imports (shared cannot import from widgets or pages)

## Content Conventions

- All user-facing strings go through `t()` from `src/shared/i18n/utils.ts`
- No hardcoded text in widgets or pages
- Content data (pricing, features, FAQ) lives in `src/shared/config/`, not in widgets
- Widgets read from configs — content-driven architecture

## Styling

- Tailwind CSS v4 with `@theme` for theming
- Dark theme is default — all styles written for dark first
- No inline styles unless design system requires
- All visual components live in `shared/ui/`

## Component Rules

- Prefer `.astro` components for everything static
- Use React islands only when vanilla JS `<script>` is insufficient
- Self-host all fonts — no external CDN requests
