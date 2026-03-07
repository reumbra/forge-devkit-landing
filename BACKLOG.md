# Forge DevKit Landing — Backlog

> Flat table + detail sections. Reference items by ID in commits/docs.
> Status: `concept` | `backlog` | `design` | `in-progress` | `blocked` | `done`

| ID | Priority | Status | Title | Tags |
|----|----------|--------|-------|------|
| BL-001 | P1 | backlog | Missing module pages: tracker, worktree | `[page]` `[content]` |
| BL-002 | P1 | backlog | RU localization for all new pages | `[i18n]` `[content]` |
| BL-003 | P1 | backlog | Pricing page CTA buttons → LemonSqueezy checkout URLs | `[cro]` `[revenue]` |
| BL-004 | P2 | backlog | Trust signals: real testimonials / case studies | `[cro]` `[social-proof]` |
| BL-005 | P2 | backlog | Privacy policy: add subprocessor list | `[gdpr]` `[legal]` |
| BL-006 | P2 | backlog | Terms page: verify current | `[gdpr]` `[legal]` |
| BL-007 | P2 | backlog | Cloudflare Web Analytics integration | `[analytics]` `[gdpr]` |
| BL-008 | P2 | backlog | OG images for all pages (social sharing) | `[seo]` `[meta]` |
| BL-009 | P2 | backlog | Structured data: Product, FAQ, Breadcrumb schema | `[seo]` `[schema]` |
| BL-010 | P3 | backlog | Changelog page (currently disabled link in footer) | `[page]` `[content]` |
| BL-011 | P3 | backlog | Mobile nav: verify Docs dropdown works on touch | `[ux]` `[mobile]` |
| BL-012 | P3 | concept | Blog / content marketing section | `[page]` `[seo]` `[content]` |
| BL-013 | P3 | concept | Comparison pages: vs Windsurf, vs Aider | `[page]` `[seo]` |
| BL-014 | P2 | backlog | Hero "See how it works" → scroll to #how-it-works broken on /pricing | `[bug]` `[nav]` |
| BL-015 | P1 | backlog | Verify all LemonSqueezy checkout URLs are live | `[revenue]` `[qa]` |
| BL-016 | P2 | backlog | 404 page: custom design with nav back to home | `[page]` `[ux]` |
| BL-017 | P3 | concept | Product Hunt launch assets (tagline, screenshots, maker comment) | `[launch]` `[marketing]` |
| BL-018 | P2 | backlog | Sitemap.xml generation (Astro integration) | `[seo]` `[infra]` |
| BL-019 | P2 | backlog | robots.txt: verify correct for Cloudflare Pages | `[seo]` `[infra]` |
| BL-020 | P3 | backlog | DPA verification: Cloudflare, LemonSqueezy | `[gdpr]` `[legal]` |
| BL-021 | P1 | blocked | Landing copy audit: pipeline → TDD refactor | `[content]` `[copy]` `[blocked:refactor]` |

---

## Detail Sections

### BL-001: Missing module pages: tracker, worktree

Module pages exist for core, product, qa, autopilot. Missing: tracker (`/modules/tracker`), worktree (`/modules/worktree`). Footer and nav currently link these to `/modules` hub. Need configs in `src/shared/config/module-pages/` and slugs added to `moduleSlugs` array.

### BL-002: RU localization for all new pages

Pages created in EN without RU translation: `getting-started.astro`, `usage-guide.astro`. RU copies exist but content is in English. Need actual Russian text. Also: module page configs are EN-only — no i18n mechanism for config-driven content yet.

### BL-003: Pricing CTA buttons → LemonSqueezy checkout

Homepage pricing section has correct LemonSqueezy URLs. Verify: pricing page (`/pricing`) CTAs, module page CTAs, Getting Started CTA, Usage Guide CTA — all should point to correct checkout or `/pricing` page.

### BL-004: Trust signals

CRO audit identified need for real testimonials, customer logos, case studies. Currently zero social proof beyond founder quote. Priority: get 3-5 beta user quotes after launch.

### BL-005: Privacy policy subprocessors

Current privacy page missing explicit subprocessor list. Need to add: AWS (API hosting), Supabase (database), Cloudflare (CDN/Pages), LemonSqueezy (payments/MoR), Resend (email delivery).

### BL-006: Terms page verification

Verify `/terms` covers: plugin license terms, update period, device limits, refund policy alignment with LemonSqueezy MoR terms.

### BL-007: Cloudflare Web Analytics

Privacy-respecting, no-cookie analytics. Free with Cloudflare Pages. Add `<script>` tag via Astro integration or direct in BaseLayout.

### BL-008: OG images

No custom OG images. Social shares show generic. Need: per-page OG images or at minimum a default branded OG image. Consider `@astrojs/og` or static images.

### BL-009: Structured data

Add JSON-LD for: Product (pricing), FAQ (homepage FAQ section), BreadcrumbList (all pages with breadcrumbs), SoftwareApplication.

### BL-010: Changelog page

Footer has disabled "Changelog" link. Need actual page or link to GitHub releases (but GitHub is now hidden). Consider in-app changelog page with version history from ai-marketplace `memory/version-history.md`.

### BL-014: Hero scroll link broken on /pricing

"See how it works" links to `#how-it-works` which only exists on homepage. On other pages this anchor doesn't exist. Should use absolute URL `/` + `#how-it-works` or conditionally hide.

### BL-016: 404 page

Astro default 404. Need custom `src/pages/404.astro` with brand styling, nav, and link back to home.

### BL-017: Product Hunt launch assets

Prepare before launch: tagline (<=60 chars), description, 5 screenshots/GIFs, maker comment, first-day offer strategy.

### BL-018: Sitemap.xml

Add `@astrojs/sitemap` integration. Configure in `astro.config.ts`. Verify all pages included, none excluded accidentally.

### BL-019: robots.txt

Verify exists and allows all crawlers. Cloudflare Pages may need manual `public/robots.txt`. Reference sitemap.xml location.

### BL-021: Landing copy audit — pipeline → TDD refactor

**Blocked by:** forge-core pipeline refactor (TDD-first approach) in ai-marketplace repo.

forge-core pipeline is being refactored to work TDD-first. Once the refactor lands, landing page copy needs a full audit because current text references the old pipeline model. Affected areas:

**Pages to review:**
- Homepage: Solution section ("Design → Build → Verify"), How It Works steps, Module cards
- `/modules/core`: steps, capabilities, comparison table
- `/modules/qa`: steps (test generation flow), capabilities
- `/getting-started`: setup wizard description, command reference table
- `/usage-guide`: forge-core commands and workflow description
- `/modules/product`: workflow integration with pipeline

**Copy likely to change:**
- Pipeline phase names and descriptions (if phases renamed/restructured)
- "8-gate wizard" → may become different gate count or structure
- Execution modes ("sequential, parallel, patch") → may change
- Quality pattern counts ("50+", "24 patterns") → verify after refactor
- Dev-skills generation description
- Any mention of specific gate names (Gate 1: Architecture, Gate 2: Quality, etc.)

**Config files to update:**
- `src/shared/config/hero.ts` — subheadline, terminal lines
- `src/shared/config/module-pages/core.ts` — steps, capabilities, comparison
- `src/shared/config/module-pages/qa.ts` — steps referencing pipeline
- `src/shared/config/module-pages/product.ts` — workflow integration
- `src/shared/ui/snippets/ArchitectureAuditHero.astro` — terminal output
- `src/shared/ui/snippets/ArchitectureAudit.astro` — full audit output
- `src/shared/ui/snippets/EcosystemOverview.astro` — commands table

**Action:** After refactor is merged in ai-marketplace, diff the changes and update all affected landing copy + snippets to match new pipeline reality. Do NOT update speculatively — wait for final refactor.
