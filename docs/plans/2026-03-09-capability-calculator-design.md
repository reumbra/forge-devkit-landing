# Product Assembly Simulator - Capability Calculator Design

**Date:** 2026-03-09
**Section:** EcosystemSection (index.astro position #4)
**Replaces:** Static 4-zone journey visualization (pre v2), module-selector simulator (v2 - never shipped)

## Context

The Ecosystem section is the first interactive touchpoint on the landing page (after Hero, Problem, Solution Overview). Users understand the problem and have seen the high-level solution. Now they need engagement that creates desire and self-qualification toward a pricing tier.

**Target personas** (from pricing): Solo dev (Starter, EUR 29), Professional dev (Pro, EUR 79), Developer-founder (Complete, EUR 149).

## Approach: Persona Match + Optional Capability Customize

Evaluated 3 approaches:
- **A: Capability Calculator** - 8 toggles, high IKEA effect but high activation energy (8 decisions before seeing value)
- **B: Subtractive Calculator** - start at 100%, remove capabilities. Strong loss aversion but feels manipulative to dev audience
- **C: Persona Match + Customize** (chosen) - 1-click persona selection, assembly animation, metrics, optional capability expansion

**Why C:** Minimum activation energy (1 click to animation), self-identification via persona cards (Unity Principle), optional depth for engaged users. Dev audience is lazy on landing pages - they want "is this for me?" fast.

## Design

### Section 1: Persona Cards (Primary Interaction)

Three cards, responsive grid (3-col desktop, stack mobile):

| Card | Title | Key benefit | Modules shown | Count | Price |
|------|-------|-------------|---------------|-------|-------|
| Starter | Solo Builder | AI respects my architecture | core, worktree | 2 | EUR 29 |
| Pro (recommended) | Team Lead | Tests, tracking, dev pipeline | +product, qa, tracker, prompts | 6 | EUR 79 |
| Complete | Founder | Full pipeline, idea to growth | +autopilot, +8 advisory | 15 | EUR 149 |

- Module names on cards are clickable pills linking to `/modules/{slug}` (traffic distribution)
- Pro card has recommended badge, pre-highlighted border
- Each card has "Build" button that triggers assembly
- On mobile: vertical stack, Pro first

### Section 2: Assembly Animation

Triggered by persona card click. Reuses existing code:
- Terminal panel with typewriter line-by-line output (GitHub dark theme)
- Diamond SVG with layer transitions (desktop only, hidden on mobile)
- Modules NOT in selected preset show as "SKIPPED" in yellow (loss aversion micro-moment)
- 5 stages: VALIDATE, ARCHITECTURE, DEVELOP, SCALE, GROW

No changes to animation logic from current implementation.

### Section 3: Health Metrics + Customize Expansion

After animation completes:

**Metrics dashboard** (2-col grid):
- 8 metric bars with percentage, color coding (red <40%, yellow 40-79%, green 80%+)
- Each metric shows zeroImpact text when <100%, fullImpact when 100%
- Missing modules shown as "+ forge-xxx" hints

**Overall bar:**
- Weighted average across 8 metrics
- Recommendation text based on coverage level (low/medium/high/full)
- CTA button linked to pricing, text varies by detected tier

**Customize section** (expandable, collapsed by default):
- Header: "Want more coverage?" with expand toggle
- Shows ONLY capabilities that are currently OFF (not in selected preset)
- Each capability: checkbox + label + description + module pills + tier badge
- Toggling ON: coverage bar updates live (no Rebuild needed for bar)
- Toggling capabilities: Rebuild button appears for re-running animation
- For Complete preset: customize section hidden (everything already ON)
- For Starter: shows all 8 capabilities (maximum upsell surface)

### Section 4: Cross-cutting bar

Static link bar for forge-prompts. No changes.

## Data Architecture

Config file: `src/shared/config/ecosystem.ts`

Non-i18n (already implemented):
- `SIMULATOR_MODULES[]` - 15 modules with id, name, tier, slug
- `CAPABILITIES[]` - 8 capabilities with id, moduleIds, tier
- `BASE_MODULES[]` - ["core", "worktree"] (always included)
- `TIER_PRESETS{}` - capability IDs per tier preset
- `METRIC_CONTRIBUTIONS{}` - module-to-metric percentage mapping
- `METRIC_WEIGHTS{}` - metric importance weights
- `TERMINAL_STAGES[]` - CLI output lines per stage/module
- `DIAMOND_LAYERS{}` - SVG layer-to-module mapping

I18n (SimulatorI18n):
- Section header (label, headline, subheadline)
- UI strings (buttons, labels)
- Persona cards (title, description, benefit) - TO ADD
- Capability labels + descriptions
- Metric labels + impact texts
- Tier labels + prices
- Recommendations + CTA texts
- Cross-cutting bar

## Psychology Applied

| Principle | Where |
|-----------|-------|
| Unity Principle | Persona card self-identification ("That's me!") |
| Default Effect | Pro pre-highlighted, matches pricing recommendation |
| Foot-in-the-Door | 1 click to engage, optional deeper customize |
| Loss Aversion | SKIPPED in terminal, red 0% bars, process gap descriptions |
| Goal-Gradient | Coverage bar pulls toward 100% |
| IKEA Effect | Customize toggle builds ownership |
| Commitment & Consistency | "I'm a Team Lead" persona creates purchase consistency |
| Mere Exposure | Module names visible on cards, familiar by pricing section |
| Anchoring | Coverage % anchors expectations |

## Implementation Notes

- Component: `src/widgets/Ecosystem/EcosystemSection.astro`
- Pure CSS animations + vanilla JS state machine (zero dependencies)
- i18n via `data-locale` attribute + runtime import
- Mobile: diamond SVG hidden, terminal full-width, cards stack vertically
- Existing TERMINAL_STAGES/DIAMOND_LAYERS code reusable without changes
- Need to add persona i18n data to ecosystem.ts config
