# Forge DevKit Landing

**URL:** `reumbra.dev/forge`
**Role:** Product website — pricing, docs, purchase flow

## Ecosystem

Forge DevKit is a commercial product by [Reumbra](https://reumbra.dev) — AI-powered project scaffolding tools for Claude Code.

```
┌──────────────────────────────────────────────────────────────────┐
│                     Forge DevKit Ecosystem                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  forge-devkit-cli                    PUBLIC                      │
│  └─ npm @reumbra/forge                                           │
│  └─ Commands: activate, install, update, list, status, doctor    │
│  └─ User-facing tool, distributed via npm                        │
│                                                                  │
│  forge-devkit-api                    PRIVATE                     │
│  └─ License validation, plugin delivery, webhooks                │
│  └─ Node.js (Fastify) + PostgreSQL (Supabase) + Cloudflare R2   │
│                                                                  │
│  forge-devkit-landing (this repo)    PUBLIC                      │
│  └─ reumbra.dev/forge — website, pricing, docs                   │
│  └─ Astro + Tailwind, hosted on Cloudflare Pages                 │
│                                                                  │
│  forge-devkit-plugins                PRIVATE (currently public)   │
│  └─ Plugin source code, tests, design docs                       │
│  └─ Currently: github.com/maselious/ai-marketplace               │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Page Structure

```
reumbra.dev/forge
├─ Hero: "AI-powered project scaffolding for Claude Code"
│   └─ Subtitle + 30-sec demo GIF/video
├─ Problem -> Solution: "Claude Code is powerful but unstructured..."
├─ Modules showcase:
│   ├─ forge-core: "7-gate project setup -> generated dev-skills"
│   ├─ forge-product: "Product design pipeline -> user flows, stories, UX"
│   └─ forge-tracker: "Task management hub -> GitHub, ClickUp, sync"
├─ How it works: 4 steps
│   1. Buy -> get license key
│   2. npm i -g @reumbra/forge && forge activate <key>
│   3. forge install core
│   4. /forge:setup in your project
├─ Pricing cards: Starter / Pro / Bundle (LS checkout overlay)
├─ FAQ
└─ Footer: docs, GitHub (issues/discussions), email
```

## Pricing Plans

| Plan | Contents | Price | Renewal |
|------|----------|-------|---------|
| Starter | forge-core | $29 | $15/year |
| Pro | forge-core + forge-product + forge-tracker | $79 | $40/year |
| Bundle | All current + all future modules (1 year) | $149 | $75/year |

**Model:** One-time purchase + 1 year of updates. Renewal at 50% of original price. JetBrains model.

## Purchase Flow

```
1. User visits reumbra.dev/forge
2. Selects package -> payment via LemonSqueezy (checkout overlay)
3. Webhook -> API creates license record
4. User receives email with license key + install instructions

Installation:
5. $ npm install -g @reumbra/forge
6. $ forge activate FRG-XXXX-XXXX
7. $ forge install core
8. $ forge update
```

## Modules

### forge-core
7-gate project setup wizard. Detects stack, architecture, integrations. Generates dev-skills — autonomous coding instructions tailored to the project. Generated artifacts work independently after plugin removal.

### forge-product
Product design pipeline. Creates user flows, stories, use cases, UX criteria. Integrates with forge-core: enriches generated dev-skills with product context, validates UX in code review.

### forge-tracker
Task management hub. Connects to GitHub Issues, ClickUp, Linear. Picks tasks, syncs status, creates comments. Bridges product backlog and development workflow.

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS
- **Hosting:** Cloudflare Pages (free tier)
- **Payments:** LemonSqueezy checkout overlay (embedded)
- **Analytics:** TBD (likely Plausible or Fathom for privacy)

## Implementation Roadmap

| Phase | Scope |
|-------|-------|
| 2. Landing | Hero, modules showcase, pricing cards, LS integration, FAQ |
| 5. Launch | Final copy, demo video/GIF, SEO, social cards |
| 6. Iterate | Docs section, blog, changelog page |

## Branding

| Element | Value |
|---------|-------|
| Company | Reumbra |
| Product (full) | Forge DevKit |
| Product (short) | Forge |
| Domain | reumbra.dev/forge |
| License key prefix | FRG- |
