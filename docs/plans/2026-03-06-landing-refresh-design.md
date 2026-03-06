# Landing Refresh Design: "From Vibe Code to Production"

Date: 2026-03-06
Status: APPROVED
Audience: Developers (senior devs, tech leads, AI agent users)
Narrative Arc: B — "From Vibe Code to Production"

## Context

Since the original landing page design (2026-02-25), Forge DevKit expanded from 4 to 6 modules:
- forge-autopilot (v1.4.0) — team-based autonomous dev with Agent Teams
- forge-worktree (v1.2.0) — git worktree lifecycle manager

Market research (2026-03-06) confirmed:
- 84% developer AI adoption, market shifting from "AI writes code" to "AI writes code WITH guardrails"
- Agent Teams (Claude Code, Feb 2026) created new pain: merge conflicts, context drift, CC spirals
- "Vibe coding" matured into a movement seeking structured approaches (r/VibeCodeDevs)
- No competitor offers full pipeline: architecture audit + product specs + test traceability + parallel execution
- forge-autopilot has no direct competitor (Claude Agent Teams = infrastructure, autopilot = strategy layer)

Decision: developer-only landing. Entrepreneurs = separate site later.

## Psychological Framework

Models applied (from marketing-psychology analysis):

| Model | Application |
|-------|-------------|
| Jobs to Be Done | "Hire Forge to make AI code production-ready" covers 3/4 audience segments |
| Confirmation Bias | Devs already believe "vibe coding without structure = garbage" — we confirm, not educate |
| Loss Aversion | "Your AI code becomes legacy debt in 3 months" — broad, painful framing |
| Peak-End Rule | forge-autopilot as "wow" peak (section 6), not hero |
| Door-in-the-Face | Show competitor subscription pricing ($20/mo = $240/yr), then our one-time $29-149 (JetBrains model: 1yr updates included, renewal optional) |
| Critical Mass | Depth in "structured AI development" segment before expanding |

## Site Architecture

### Approach: Module Hub (B)

10 pages total. 4 module pages (core selling points), 2 support modules as cards only.

### Page Hierarchy

```
Homepage (/)
├── Modules (/modules)                    ← overview grid, all 6 as cards
│   ├── forge-core (/modules/core)        ← dedicated page
│   ├── forge-product (/modules/product)  ← dedicated page
│   ├── forge-qa (/modules/qa)            ← dedicated page
│   └── forge-autopilot (/modules/autopilot) ← dedicated page
├── Pricing (/pricing)
├── Comparisons
│   ├── Forge vs Cursor Rules (/vs/cursor-rules)
│   ├── Forge vs Devin (/vs/devin)
│   └── Forge vs CLAUDE.md (/vs/claude-md)
└── Legal
    ├── Privacy (/privacy)
    └── Terms (/terms)
```

i18n: `/ru/` prefix for Russian versions.

forge-tracker and forge-worktree appear as cards on `/modules` and in ecosystem sections on other pages, but do NOT get dedicated pages. They are support modules — tracker is commodity (Linear/Jira), worktree is an enabler for autopilot.

### URL Map

| Page | URL | Nav Location | Priority |
|------|-----|-------------|----------|
| Homepage | `/` | Logo | Critical |
| Modules Overview | `/modules` | Header | High |
| forge-core | `/modules/core` | Header dropdown | High |
| forge-product | `/modules/product` | Header dropdown | Medium |
| forge-qa | `/modules/qa` | Header dropdown | Medium |
| forge-autopilot | `/modules/autopilot` | Header dropdown | High |
| Pricing | `/pricing` | Header | Critical |
| vs Cursor Rules | `/vs/cursor-rules` | Footer | Medium |
| vs Devin | `/vs/devin` | Footer | Medium |
| vs CLAUDE.md | `/vs/claude-md` | Footer | Medium |
| Privacy | `/privacy` | Footer | Low |
| Terms | `/terms` | Footer | Low |

### Navigation

**Header (5 items + CTA):**

```
[Logo: Forge DevKit]   Modules▾   Pricing   Docs↗   GitHub↗   [Get Forge →]
```

Modules dropdown (2 columns):

| Core Pipeline | Automation |
|---------------|------------|
| forge-core — Architecture audit & guardrails | forge-autopilot — Parallel agent orchestration |
| forge-product — Business → AI specs | forge-worktree — Worktree lifecycle |
| forge-qa — Test traceability | |
| forge-tracker — Task management | |

Bottom row: `View all modules →` links to `/modules`

**Footer (4 columns):**

| Product | Modules | Compare | Legal |
|---------|---------|---------|-------|
| Pricing | forge-core | vs Cursor Rules | Privacy |
| Changelog (future) | forge-product | vs Devin | Terms |
| Documentation (future) | forge-qa | vs CLAUDE.md | |
| GitHub | forge-tracker | | |
| | forge-autopilot | | |
| | forge-worktree | | |

**Breadcrumbs** on all pages except homepage:
- `Home > Modules > forge-core`
- `Home > Pricing`
- `Home > Forge vs Cursor Rules`

## Homepage Section Flow

Narrative: Recognition → Understanding → Proof → Depth → Trust → Action

| # | Section | Emotion | Content |
|---|---------|---------|---------|
| 1 | Hero | Curiosity | "Your AI writes code. Forge makes it production-ready." Terminal: `forge setup` output |
| 2 | Problem | Recognition | Updated pains: CC spirals, merge conflicts, fake tests, prompt fatigue. 2x2 grid |
| 3 | Solution Overview | Relief | 3 pillars: Audit → Structure → Execute |
| 4 | Pipeline Visualization | "Show me" | 6-module pipeline flow diagram. Each module = clickable node |
| 5 | Deep: forge-core | "That's smart" | 50+ patterns, 15 rationalization detectors, 3 execution modes |
| 6 | Deep: forge-autopilot | "I need this" | Peak moment. Agent Teams without merge hell. Kubernetes analogy |
| 7 | Deep: forge-qa | "Finally" | AC→unit, UC→E2E, UX→component traceability |
| 8 | How It Works | Simplicity | 3 steps: install → setup → develop |
| 9 | Module Grid | Comprehensive | 6 cards, each links to page or `/modules` anchor |
| 10 | Pricing Teaser | Trust | 3 tiers + "one-time, not subscription" vs Devin $20/mo |
| 11 | Author | Authority | Real face + engineering credibility |
| 12 | FAQ | Objections | Developer-only, 7 items |
| 13 | Final CTA | Action | "Get Forge →" |

Changes from original 14-section design:
- REMOVED: entrepreneur mini-landing (section 10 old)
- ADDED: pipeline visualization (section 4)
- REPLACED: "For Devs / For Entrepreneurs" with forge-autopilot deep dive
- UPDATED: module grid 4 → 6 cards with links
- UPDATED: problem section — new pains from 2026 research
- UPDATED: FAQ — developer-only (removed entrepreneur questions)

## Module Page Template

Each `/modules/{name}` follows the same structure:

```
[Breadcrumb: Home > Modules > forge-{name}]

1. HERO (compact)
   - Icon + Name + Tagline
   - "Part of Forge DevKit ecosystem"
   - CTA: "Get {tier} →" → /pricing

2. THE PROBLEM
   - 2-3 pain points with evidence/quotes
   - "Sound familiar?" transition

3. HOW IT WORKS
   - 3-5 step visual flow
   - Real terminal/code output

4. KEY CAPABILITIES
   - 3-6 feature cards (icon + title + one-liner)

5. WHAT MAKES IT DIFFERENT
   - Comparison table vs closest alternative (3 rows max)

6. WORKS WITH (ecosystem)
   - Which modules it integrates with
   - Data flow arrows
   - "Better together" narrative

7. CTA
   - Pricing tier + "See all modules →"
```

### Module Content Summary

| Module | Tagline | Key pain | vs What | Tier |
|--------|---------|----------|---------|------|
| core | Architecture-aware guardrails from your codebase | AI forgets architecture every session | Cursor Rules generators | Core $29 |
| product | Business language → AI-consumable specs | PRDs that AI can't parse | Figma/Miro PRD tools | Pro $79 |
| qa | Tests that trace to requirements | AI writes tests that test nothing | Virtuoso, TestSprite | Pro $79 |
| autopilot | Parallel agents without merge hell | Agent Teams = merge conflict chaos | Raw Claude Agent Teams | Bundle $149 |

## Comparison Pages

### /vs/cursor-rules

Search intent: "cursor rules vs forge" / "better than .cursorrules"

| Dimension | Cursor Rules | Forge DevKit |
|-----------|-------------|--------------|
| Rule creation | Manual or template generator | Auto-generated from architecture audit |
| Architecture awareness | None — you specify stack | Detects stack, layers, patterns (DDD, CQRS) |
| Scope | Single rules file | Full pipeline: rules + product + tests + tasks |
| Updates | Manual maintenance | Upgrade command regenerates |
| Platform | Cursor only | Claude Code, Cursor, Windsurf, any AI agent |

### /vs/devin

Search intent: "devin vs forge" / "devin alternative"

| Dimension | Devin | Forge DevKit |
|-----------|-------|--------------|
| What it is | Autonomous AI developer | Infrastructure for YOUR AI agent |
| Pricing | $20/mo + ACU charges | $29-149 one-time |
| Architecture awareness | General purpose | Project-specific from 7-gate audit |
| Multi-agent | Single agent | Conflict-free parallel waves |
| Code ownership | Devin's environment | Your repo, your tools |

### /vs/claude-md

Search intent: "claude.md best practices" / "how to write claude.md"

| Dimension | Manual CLAUDE.md | Forge DevKit |
|-----------|-----------------|--------------|
| Creation | Manual writing | Auto-generated from audit |
| Coverage | What you remember | 50+ patterns, rationalization detectors |
| Tests | Not connected | forge-qa generates from requirements |
| Maintenance | Manual updates | Upgrade command syncs |
| Pipeline | Just rules | Full ecosystem |

## Internal Linking Plan

### Cross-Section Links

| From | To | Anchor context |
|------|----|----------------|
| /modules/core | /modules/qa | "forge-qa generates tests FROM these guardrails" |
| /modules/core | /modules/autopilot | "forge-autopilot uses architecture data for conflict detection" |
| /modules/product | /modules/qa | "forge-qa traces tests back to these artifacts" |
| /modules/autopilot | /modules/core | "Conflict detection uses forge-core architecture map" |
| /modules/autopilot | /modules (worktree card) | "forge-worktree provisions isolated environments" |
| /vs/cursor-rules | /modules/core | "See how forge-core generates rules automatically" |
| /vs/devin | /modules/autopilot | "forge-autopilot orchestrates parallel agents" |
| /vs/claude-md | /modules/core | "forge-core auto-generates CLAUDE.md and more" |
| Every module page | /pricing | CTA button |
| Every module page | /modules | "See all modules →" |

### Link Density Targets

- Homepage: ~15 internal links
- Module page: ~8 internal links
- Comparison page: ~6 internal links
- Pricing: ~8 internal links (module names linked)

### Hub-and-Spoke (future content)

Each module page becomes a hub when blog launches:
```
/modules/core (hub)
├── /blog/architecture-audit-explained (spoke)
├── /blog/quality-patterns-guide (spoke)
└── /vs/cursor-rules (cross-section)
```

## Updated Messaging Framework

### Positioning Statement

For developers using AI coding agents, Forge DevKit is an architecture-aware pipeline that auto-generates project-specific guardrails, quality patterns, and development workflows — unlike manual rules (Cursor Rules, CLAUDE.md), generic AI assistants, and autonomous agents (Devin) that don't understand your project.

### Value Proposition Hierarchy

**Level 1 (Core Promise):** "AI that respects your architecture"

**Level 2 (4 pillars — map to module pages):**
1. Your project's rules, not textbook defaults → forge-core
2. Tests that trace to requirements, not AI guesswork → forge-qa
3. Business specs AI can actually consume → forge-product
4. Parallel agents without merge hell → forge-autopilot

**Level 3 (Proof Points):**
- 7-gate wizard, 50+ quality patterns, 15 rationalization detectors
- 4-level traceability: AC→unit, UC→E2E, UX→component
- 9 product archetypes, 9 methodology frameworks
- Backlog→conflict detection→wave execution→merge
- JetBrains pricing: $29/$79/$149 one-time + 1yr updates, renewal optional (not $20/mo mandatory)

### Updated Pain Points (2026 research)

| ID | Pain | Severity | Evidence |
|----|------|----------|----------|
| P1 | Context loss / "context rot" | CRITICAL | #1 complaint, "lack of context is the real problem" |
| P2 | Architecture violations | CRITICAL | 3x more privilege escalation risks in AI code |
| P3 | CC spirals (cascading code generation) | HIGH | "Claude introduces bugs by patching over with quick fixes" |
| P4 | Merge conflicts in multi-agent | HIGH | "I literally can't merge their branches" |
| P5 | Fake tests / mock data | HIGH | "Unit tests are fake. Displays use mock data" |
| P6 | Prompt fatigue | MEDIUM | Re-explaining architecture every session |
| P7 | Token waste / runaway sessions | MEDIUM | Millions of tokens for 100 lines |

### Headline Formula

`[Specific developer pain] + [concrete Forge solution]`

Examples:
- "Your AI forgets your architecture. Forge doesn't."
- "50 guardrails your AI doesn't know it needs."
- "Parallel agents without merge hell."
- "Tests that trace to requirements. Not AI guesswork."
- "One setup. Production-ready AI forever."

### Voice Rules (unchanged)

- Direct, technical, specific, concise
- Lead with pain, not features
- Specific > generic (CQRS, DDD > "modern architecture")
- Outcomes > features
- Real terminal output > abstract diagrams
- Never: innovative, revolutionary, AI-powered, 10x, magic

### CTA Strategy

| Location | CTA | Links to |
|----------|-----|----------|
| Hero | "Audit your architecture →" | /pricing |
| Deep dives | "Start with forge-core →" | /pricing |
| Module pages | "Get {tier} →" | /pricing |
| Pricing teaser | "Get Forge →" | /pricing |
| Floating (mobile) | "Get Forge →" | /pricing |
| Comparison pages | "Try Forge →" | /pricing |

## Pricing Page Design

### Structure

1. Headline: "One-time purchase. Your artifacts stay forever."
2. Competitor anchor: "Devin: $240/yr mandatory. Cursor Pro: $240/yr. Forge: from $29 once."
3. Three tier cards (Pro highlighted as recommended)
4. Feature comparison table (all 6 modules × 3 tiers)
5. Trust signals: "No subscription. No per-token charges. 1-year updates included. Renewal optional at reduced price."
6. FAQ (pricing-specific: refunds, updates after year 1, renewal pricing, team licensing)

### Pricing Model (JetBrains-style)

- One-time purchase: $29 / $79 / $149
- Includes 1 year of updates (new patterns, new modules for Bundle)
- Generated artifacts are yours forever, even without renewal
- Optional renewal at reduced price (~60% of original) for continued updates
- No renewal = keep everything you have, just no new patterns/modules
- Positioning: "one-time" prominently, "1yr updates" as detail — NOT "/yr" subscription framing

### Tiers

| | Core $29 | Pro $79 | Bundle $149 |
|---|---|---|---|
| forge-core | Y | Y | Y |
| forge-product | - | Y | Y |
| forge-qa | - | Y | Y |
| forge-tracker | - | Y | Y |
| forge-autopilot | - | - | Y |
| forge-worktree | - | - | Y |
| Future modules | - | - | Y |

## Design Tokens

Preserved from original design (docs/plans/design-tokens.md):
- Primary: #7649C4, Secondary: #9A75EA
- BG: #000000, Surface: #191919
- Fonts: Satoshi (body) + JetBrains Mono (code)
- Cards: bg #191919, radius 14px, hover lift + accent border

## What Changes in Existing Research Docs

| Document | Change needed |
|----------|--------------|
| MESSAGING-FRAMEWORK.md | Remove entrepreneur messaging, add autopilot/worktree, update pain points |
| PAIN-SOLUTION-MAP.md | Add P3 (CC spirals), P4 (merge conflicts), P5 (fake tests). Remove entrepreneur pains |
| FEATURE-MATRIX.md | Add autopilot + worktree rows |
| AUDIENCE-RESEARCH.md | Remove entrepreneur segments (defer to separate landing) |
| 005-product-hypotheses.md | Keep B1/B3 as deferred. Mark A1 as primary |
| page-architecture-design.md | Superseded by this document |
| COMPETITOR-LANDSCAPE.md | Add Devin ($20/mo), Factory AI, Agent Teams, wtp, Treekanga |

## Implementation Scope

Phase 1 (this design):
- Homepage refresh (13 sections)
- 4 module pages (core, product, qa, autopilot)
- Pricing page
- Modules overview page
- Navigation (header + footer)
- i18n (en + ru)

Phase 2 (future):
- 3 comparison pages (/vs/*)
- Blog infrastructure
- Documentation
- Entrepreneur landing (separate domain/subdomain)
- forge-tracker and forge-worktree dedicated pages (if demand grows)
