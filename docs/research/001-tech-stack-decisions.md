# 001 — Tech Stack & Architecture Decisions

> **Context:** Decisions made during project init brainstorming session, 2026-02-24.

## Decisions

| # | Decision | Alternatives Considered | Rationale |
|---|----------|------------------------|-----------|
| 1 | Astro 5.x SSG | Next.js, Remix | Content-first site, zero JS by default, best Lighthouse. Growth toward catalog/blog/docs — all content. Dashboard unlikely. |
| 2 | Tailwind CSS v4 with `@theme` | Tailwind v3 dark:, CSS variables only | Native theme support, CSS-first config, modern, less boilerplate |
| 3 | Adapted FSD (3-layer) | Classic FSD (7-layer), flat structure | 7-layer overkill for content site. 3 layers (shared/widgets/pages) capture the dependency rule without empty directories |
| 4 | Vanilla JS islands | React islands, Svelte | Only 2-3 interactive elements (theme toggle, mobile menu, FAQ accordion). React overkill. ~50 lines vanilla JS total |
| 5 | Astro native i18n | astro-i18next, Paraglide | Built-in routing sufficient for landing + catalog. No complex pluralization needed |
| 6 | Satoshi + JetBrains Mono | Inter, Geist | Satoshi: geometric, not yet commoditized. JetBrains Mono: developer shibboleth. Per brand guidelines |
| 7 | Self-hosted fonts | Google Fonts CDN, Fontshare CDN | Privacy, performance, no external dependencies |
| 8 | pnpm + Biome | npm/yarn, ESLint+Prettier | Consistent with forge-devkit-cli and forge-devkit-api |
| 9 | Cloudflare Pages | Vercel, Netlify | Free tier, fast edge CDN, no vendor lock-in with Astro SSG |
| 10 | Dark theme default | Light default | Brand guidelines: "Keep dark theme as primary. Reumbra is dark-first." |
| 11 | Design system as sole UI source | Direct Tailwind in widgets | Enforces consistency, enables future theme switching, prevents style drift |
| 12 | Data in shared/config/ | Hardcoded in components | Enables i18n, A/B testing, CMS migration. Single source of truth |

## Open Questions (Resolved)

- ~~UI kit library?~~ → No library. Custom Astro components in `shared/ui/`. Full design control.
- ~~SPA framework for future?~~ → Not needed. Catalog/blog/docs are content, not app.
- ~~Starlight for docs?~~ → Deferred to Phase 6. Pure Astro now.
