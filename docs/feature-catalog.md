# Forge DevKit - Feature Catalog & Dependency Matrix

*Marketing reference for landing pages, PH listing, gallery images, social media, and email campaigns.*
*Last updated: 2026-03-11. Source of truth: ai-marketplace plugin manifests + integration protocols.*

## Tier Structure

| | STARTER | PRO | COMPLETE |
|---|---------|-----|----------|
| **Price** | EUR 29 | EUR 79 | EUR 149 |
| **Persona** | Solo developers | Professional developers | Developer-founders |
| **Modules** | 2 | 6 | 15+ |
| **Devices** | 2 | 3 | 5 |
| **Renewal** | EUR 19/yr | EUR 49/yr | EUR 89/yr |
| **Badge** | - | Recommended | - |

---

## Module Catalog (16 Forge + 3 Lumina)

### Core Pipeline (Starter+)

| Module | Tier | Tagline | Key Proof |
|--------|------|---------|-----------|
| **forge-core** v8.0.0 | Starter+ | Smart orchestrator - 7-gate audit, 50+ patterns, dev-skill generation | 50+ quality patterns, 15 rationalization detectors, 3 execution modes |
| **forge-worktree** v1.2.1 | Starter+ | Git worktree lifecycle - parallel branches, zero port conflicts | 3 templates (Docker/Frontend/Generic), port isolation, auto-cleanup |

### Dev Pipeline (Pro+)

| Module | Tier | Tagline | Key Proof |
|--------|------|---------|-----------|
| **forge-product** v4.1.1 | Pro+ | Feature design in business language | 9 archetypes, 9 methodologies, user flows + stories with AC |
| **forge-qa** v3.8.1 | Pro+ | Tests from requirements, not AI guesswork | 11 modes, 4-level traceability, 8+ frameworks, visual verification |
| **forge-tracker** v3.3.1 | Pro+ | Your tracker talks to your AI agent | 5 integrations (GitHub, ClickUp, Linear, Notion, Jira) |
| **forge-prompts** v1.1.1 | Pro+ | Prompt engineering with frameworks & learning loop | 3 frameworks (CO-STAR, RISEN, TIDD-EC), provider-aware |

### Automation (Complete)

| Module | Tier | Tagline | Key Proof |
|--------|------|---------|-----------|
| **forge-autopilot** v1.6.1 | Complete | Agent Teams on your backlog, zero merge conflicts | 3 autonomy modes, pilot wave detection, 7-phase pipeline |

### Advisory (Complete - 9 modules)

| Module | Domain | Feeds Into |
|--------|--------|-----------|
| **forge-discovery** v1.0.1 | Product discovery & validation | product, marketing |
| **forge-marketing** v1.0.1 | Positioning & go-to-market | copy, seo, growth |
| **forge-analytics** v1.0.1 | Tracking plans & event schemas | ab, growth, onboarding |
| **forge-onboarding** v1.0.1 | Activation flow design | - |
| **forge-copy** v1.0.1 | Brand voice & microcopy | seo |
| **forge-seo** v1.0.1 | Technical SEO & content strategy | - |
| **forge-growth** v1.0.1 | Retention & growth loops | - |
| **forge-ab** v1.0.1 | A/B test design with statistical rigor | - |

### Upstream (standalone)

| Module | Role |
|--------|------|
| **forge-init** v2.0.0 | Greenfield scaffolding - runs before core on empty projects |

---

## Dependency Matrix

```
forge-core (required by ALL)
 |-- forge-product (reads: discovery, marketing)
 |    |-- forge-qa (reads: product)
 |    |-- forge-tracker (reads: product)
 |    |-- forge-prompts (reads: product, qa)
 |    |-- forge-copy (reads: product, marketing)
 |    |-- forge-seo (reads: product, marketing, analytics)
 |    |-- forge-analytics (reads: product)
 |    |-- forge-onboarding (reads: product, analytics)
 |    |-- forge-growth (reads: product, analytics, marketing)
 |    +-- forge-ab (reads: product, analytics)
 |
 |-- forge-worktree (standalone)
 +-- forge-autopilot (reads: product, qa, tracker, worktree)
```

**Dependency types:**
- **required** - blocks setup without it (forge-core for all)
- **recommended** - warns at setup, enriches output significantly
- **optional** - silent skip, nice-to-have

---

## Pipeline Phase Map

| Phase | Stage | Modules Active |
|-------|-------|---------------|
| **0** | Pre-code advisory | discovery, marketing, analytics, onboarding, growth, ab, product (design) |
| **1** | Contract generation | core (dev-skills), product (AC linking), tracker (task loading) |
| **2** | Implementation | prompts (prompt engineering via subagent) |
| **3** | Quality gate | qa (coverage, traceability), tracker (status), copy (review), seo (verification) |
| **4** | Verify/refactor | product (cross-check), seo, copy, prompts (learning loop) |
| **5+** | Autopilot | autopilot (team orchestration), worktree (parallel isolation) |

---

## Proof Points (for marketing copy)

| Metric | Value | Context |
|--------|-------|---------|
| Quality patterns | **50+** | Capability-scoped: UI/API/Infra/Shared |
| Architecture audit gates | **7** | Sequential, each with clear purpose |
| Rationalization detectors | **15** | Catch AI excuses for skipping best practices |
| Test frameworks | **8+** | Auto-detected, not configured |
| Task integrations | **5** | GitHub, ClickUp, Linear, Notion, Jira |
| Execution modes | **3** | Economy/Balanced/Quality |
| Modules total | **15** | 7 pipeline + 8 advisory (+ init upstream) |
| Product archetypes | **9** | SaaS, marketplace, API, etc. |
| Design methodologies | **9** | DDD, Agile, Lean, etc. |
| Prompt frameworks | **3** | CO-STAR, RISEN, TIDD-EC |
| Autonomy modes | **3** | Supervised, semi-auto, full-auto |
| Pipeline contracts | **6** | Structured dev workflow |
| Psychology biases | **18** | Across ecosystem (discovery, product, prompts) |

---

## Competitor Anchor (pricing)

| Product | Price | Model | Gap |
|---------|-------|-------|-----|
| Devin | EUR 240+/yr | Subscription + ACU charges | Sandboxed, lose control |
| Cursor Pro | EUR 240/yr | Subscription | Static rules, Cursor-only |
| Manual CLAUDE.md | Free (hours) | DIY | Drifts, incomplete, no pipeline |
| **Forge Starter** | **EUR 29 once** | One-time | Architecture-aware, 50+ patterns |
| **Forge Pro** | **EUR 79 once** | One-time | Full pipeline: design to tracking |
| **Forge Complete** | **EUR 149 once** | One-time | All 15 modules, Agent Teams |

---

## Tier Feature Messaging (copy-ready)

**STARTER (EUR 29):**
> Stop re-explaining your stack. One setup, forever.
- Auto-detects your stack, layers, conventions
- 50+ quality patterns for AI-generated code
- Project-aware dev-skills - one setup, forever
- Scoped phases prevent runaway sessions

**PRO (EUR 79) - Recommended:**
> Full dev pipeline: design to tested, tracked code.
- Describe features in business language - AI builds from spec
- Tests traced to requirements, not AI guesswork
- Full pipeline: design - code - test - track
- Prompt engineering frameworks - consistent AI output

**COMPLETE (EUR 149):**
> Agent Teams. Zero conflicts. Full automation + product intelligence.
- forge-autopilot - Agent Teams on your backlog, zero merge conflicts
- 9 product advisory modules - discovery to growth
- Every future module included
