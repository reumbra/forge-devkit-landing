# Forge DevKit Landing — Backlog

> Flat table + detail sections. Reference items by ID in commits/docs.
> Status: `concept` | `backlog` | `design` | `in-progress` | `blocked` | `done`

| ID | Priority | Status | Title | Tags |
|----|----------|--------|-------|------|
| BL-001 | P1 | backlog | Missing module pages: tracker, worktree | `[page]` `[content]` |
| BL-002 | P1 | backlog | RU localization for all new pages | `[i18n]` `[content]` |
| BL-003 | P1 | done | Pricing page CTA buttons → LemonSqueezy checkout URLs | `[cro]` `[revenue]` |
| BL-004 | P2 | backlog | Trust signals: real testimonials / case studies | `[cro]` `[social-proof]` |
| BL-005 | P2 | backlog | Privacy policy: add subprocessor list | `[gdpr]` `[legal]` |
| BL-006 | P2 | backlog | Terms page: verify current | `[gdpr]` `[legal]` |
| BL-007 | P2 | backlog | Cloudflare Web Analytics integration | `[analytics]` `[gdpr]` |
| BL-008 | P2 | backlog | OG images for all pages (social sharing) | `[seo]` `[meta]` |
| BL-009 | P2 | done | Structured data: Product, FAQ, Breadcrumb schema | `[seo]` `[schema]` |
| BL-010 | P3 | backlog | Changelog page (currently disabled link in footer) | `[page]` `[content]` |
| BL-011 | P3 | backlog | Mobile nav: verify Docs dropdown works on touch | `[ux]` `[mobile]` |
| BL-012 | P3 | concept | Blog / content marketing section | `[page]` `[seo]` `[content]` |
| BL-013 | P3 | concept | Comparison pages: vs Windsurf, vs Aider | `[page]` `[seo]` |
| BL-014 | P2 | backlog | Hero "See how it works" → scroll to #how-it-works broken on /pricing | `[bug]` `[nav]` |
| BL-015 | P1 | done | Verify all LemonSqueezy checkout URLs are live | `[revenue]` `[qa]` |
| BL-016 | P2 | backlog | 404 page: custom design with nav back to home | `[page]` `[ux]` |
| BL-017 | P3 | concept | Product Hunt launch assets (tagline, screenshots, maker comment) | `[launch]` `[marketing]` |
| BL-018 | P2 | done | Sitemap.xml generation (Astro integration) | `[seo]` `[infra]` |
| BL-019 | P2 | done | robots.txt: verify correct for Cloudflare Pages | `[seo]` `[infra]` |
| BL-020 | P3 | backlog | DPA verification: Cloudflare, LemonSqueezy | `[gdpr]` `[legal]` |
| BL-021 | P1 | blocked | Landing copy audit: pipeline → TDD refactor | `[content]` `[copy]` `[blocked:refactor]` |
| BL-022 | P1 | backlog | Pricing/plans sync: landing ↔ API ↔ marketplace ↔ LemonSqueezy | `[revenue]` `[sync]` `[cross-repo]` |
| BL-023 | P0 | done | Copy audit: fix number inconsistencies (7 vs 8 gates, 24 vs 50+ patterns) | `[copy]` `[credibility]` |
| BL-024 | P0 | in-progress | SEO: create robots.txt + sitemap.xml + og-image placeholder | `[seo]` `[infra]` |
| BL-025 | P0 | done | SEO: fix RU homepage missing meta description | `[seo]` `[i18n]` `[bug]` |
| BL-026 | P1 | done | Copy: fix "Claude" brand risk in Problem section | `[copy]` `[brand]` |
| BL-027 | P1 | done | RU copy: unify guardrails terminology + kill dead anglicisms | `[i18n]` `[copy]` |
| BL-028 | P1 | done | RU copy: remove em-dashes from ru.ts | `[i18n]` `[copy]` |
| BL-029 | P1 | done | SEO: add JSON-LD schemas (FAQPage, Organization, SoftwareApplication) | `[seo]` `[schema]` |
| BL-030 | P1 | done | SEO: add llms.txt for AI search visibility | `[seo]` `[ai-seo]` |
| BL-031 | P1 | done | CRO: surface 14-day guarantee near pricing CTAs | `[cro]` `[trust]` |
| BL-032 | P1 | done | CRO: add CTA after comparison page verdicts | `[cro]` `[conversion]` |
| BL-033 | P2 | done | Analytics: implement Zaraz + GA4 tracking plan | `[analytics]` `[zaraz]` |
| BL-034 | P2 | done | CRO: render competitor anchor on homepage pricing | `[cro]` `[pricing]` |
| BL-035 | P2 | done | CRO: add persona labels under pricing tiers | `[cro]` `[pricing]` |
| BL-036 | P2 | done | SEO: improve pricing page title tag | `[seo]` `[meta]` |
| BL-037 | P2 | done | CRO: add "Why not DIY?" block on pricing page | `[cro]` `[objection]` |
| BL-038 | P2 | done | AI SEO: add definition block "What is Forge DevKit?" | `[seo]` `[ai-seo]` `[content]` |
| BL-039 | P2 | done | CRO: add "no free trial" FAQ item | `[cro]` `[objection]` |
| BL-040 | P2 | done | SEO: cross-link comparison pages + module pages | `[seo]` `[internal-linking]` |
| BL-041 | P3 | backlog | CRO: Pipeline + Modules section consolidation | `[cro]` `[ux]` |
| BL-042 | P3 | backlog | SEO: replace JS language redirect with server-side | `[seo]` `[i18n]` `[infra]` |
| BL-043 | P3 | backlog | AI SEO: unified comparison page (/compare) | `[seo]` `[ai-seo]` `[content]` |
| BL-044 | P3 | backlog | EN copy: rewrite flat Final CTA subheadline | `[copy]` `[cro]` |
| BL-045 | P3 | backlog | EN copy: add rationalization detector example | `[copy]` `[specificity]` |
| BL-046 | P2 | done | Marketing: Token Economy as value prop (execution modes, context isolation, P25 artifacts) | `[copy]` `[cro]` `[content]` |
| BL-047 | P2 | done | Terms page: add /refund link + create /refund page (EN+RU) | `[legal]` `[gdpr]` |
| BL-048 | P2 | backlog | Launch pricing → regular pricing transition + ad coupons | `[pricing]` `[ads]` `[revenue]` |

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

### BL-022: Pricing/plans sync across 4 sources

Pricing, plan names, included modules, and checkout URLs must be consistent across 4 systems. Currently configured independently — drift is likely.

**Sources of truth to sync:**

| # | System | Repo / Location | What lives there |
|---|--------|----------------|------------------|
| 1 | **LemonSqueezy** | Dashboard (lemonsqueezy.com) | Product names, prices (€29/€79/€149), variant IDs, checkout URLs |
| 2 | **forge-devkit-api** | `forge-devkit-api/src/db/seed.ts` | `planPluginData`: which plugins are in each plan (core/pro/bundle), plan names, plan IDs |
| 3 | **ai-marketplace** | `plugins/*/plugin.json` + `marketplace.json` | Plugin names, versions, published plugin catalog |
| 4 | **forge-devkit-landing** | `src/shared/config/pricing.ts`, `pricing-page.ts`, `hero.ts` | Displayed prices, plan names, feature lists, CTA labels, checkout URLs |

**What to verify (checklist):**
- [ ] Plan names match everywhere (Core / Pro / Bundle)
- [ ] Prices match: LemonSqueezy products = landing page = API seed
- [ ] Included modules per plan match: API seed `planPluginData` = landing feature table = LemonSqueezy product descriptions
- [ ] LemonSqueezy checkout URLs in landing are correct and live (not test/sandbox)
- [ ] LemonSqueezy variant IDs in API match actual products
- [ ] Plugin names in marketplace.json match what API seed references
- [ ] "Includes 1 year of updates" / renewal pricing consistent across landing + terms + LemonSqueezy
- [ ] Currency (€ vs $) consistent — landing shows €, verify LemonSqueezy is configured for EUR

**Landing files to check:**
- `src/shared/config/pricing.ts` — plan cards on homepage
- `src/shared/config/pricing-page.ts` — dedicated pricing page (feature table, trust badges, FAQ)
- `src/shared/config/hero.ts` — CTA "from €29"
- `src/shared/config/module-pages/*.ts` — per-module tier + tierPrice
- `src/pages/getting-started.astro` — CTA "from €29"
- `src/pages/usage-guide.astro` — CTA "from €29"
- `src/widgets/Dashboard/DashboardSection.astro` — CTA "from €29"

**Action:** Create a single-pass cross-repo audit. Read LemonSqueezy state (manual or API), API seed, marketplace.json, and all landing configs. Produce diff table of mismatches. Fix in one batch.

### BL-046: Marketing — Token Economy as Value Prop

> Forge's architectural approach to context/token economy as a marketing differentiator. Migrated from ai-marketplace BL-014.

**Уникальные механизмы экономии (раскрыть на лендинге):**
1. **Execution modes** (economy/balanced/quality/manual) - пользователь контролирует бюджет на задачу
2. **Tag-based step filtering** `[all:!economy]` - шаги пропускаются хирургически
3. **P25 Pipeline Artifact Protocol** - фазы общаются через summary (~500 токенов вместо ~49K)
4. **Context isolation** - субагенты получают только свой scope
5. **Scope decomposition** - большие задачи бьются на layer-waves

**Маркетинговый анализ:**
- P2 "Token Burn" валидирована как реальная боль в audience research
- Конкуренты не говорят об этом (Devin $500/мес, Cursor Rules - нет контроля)
- Усиливает one-time pricing message
- P2 на 7-м месте - supporting evidence для VP #3, НЕ hero message

**Outcome-oriented копирайт:**
- "Simple bug fix? 5-step economy mode. Complex feature? Full quality pipeline. You decide."
- "Your AI reads what it needs, not everything you have."
- "Predictable costs. No surprise $50 sessions."

**Точки применения:**
- Deep Dive секция на homepage (pipeline flow с token counts)
- Comparison page: "Forge vs raw Claude Code" с реальными числами
- Module page forge-core: секция "Pipeline Economy"

### BL-048: Launch pricing → regular pricing transition + ad coupons

Текущие цены = launch pricing. Через 2-4 недели после запуска (или по триггеру первых N продаж) поднять до regular, ad coupons возвращают к текущему уровню.

**Целевые цены:**

| Tier | Launch (текущие) | Regular | Купон в Ads |
|------|-----------------|---------|-------------|
| Core | €29 | €39 | -25% → €29 |
| Pro | €79 | €99 | -20% → €79 |
| Complete | €149 | €199 | -25% → €149 |

**Шаги:**
1. За неделю до повышения: добавить "Launch Price" badge на pricing cards (landing)
2. Опционально: countdown timer
3. Обновить цены в LemonSqueezy (products + variants)
4. Создать купоны в LemonSqueezy для ad campaigns
5. Обновить landing pricing configs (pricing.ts, pricing-page.ts, hero.ts)
6. Обновить API seed (planPluginData prices)
7. Обновить product-marketing-context.md

**Триггер:** решение принимается после первых 2-4 недель трафика, когда понятна конверсия.

### BL-047: Terms page — Refund Link + /refund Page

> Terms page refund paragraph needs a link to the full refund policy document at /refund. Migrated from ai-marketplace BL-017.

**Scope:**
- Add link in refund paragraph in `src/pages/terms.astro` + `src/pages/ru/terms.astro`
- Create `/refund` page with full refund policy (14-day money-back guarantee, process, conditions)
- Create `/ru/refund` page (Russian translation)
- Add /refund to footer Legal section in `src/shared/config/footer.ts`
