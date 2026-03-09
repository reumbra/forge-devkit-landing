# Pipeline Journey Redesign

**Date:** 2026-03-09
**Status:** Decided
**Scope:** Homepage sections #4-5 (PipelineSection + EcosystemSection) -> unified JourneySection

---

## Problem

Homepage had two overlapping pipeline visualizations:

- **PipelineSection** - interactive SVG showing only 6 dev modules (outdated, missing 9 advisory adapters)
- **EcosystemSection** - 3-phase flow (Before / During / After code)

Neither mapped modules to user roles or personas. Visitors couldn't answer the "what's for ME?" question. The 3-phase model was technically accurate but didn't help buyers self-select into tiers.

## Decision

Merge both sections into one journey-based visualization with 4 persona-mapped zones. Remove PipelineSection and EcosystemSection entirely.

---

## The 4-Zone Model

| Zone | Persona | Purpose | Modules |
|------|---------|---------|---------|
| Validate | Founder / PM | Validate before you build | discovery, marketing, product (hub) |
| Build | Developer | Build with guardrails | core (foundation), qa, tracker |
| Scale | Team Lead | Parallel agents, zero conflicts | autopilot, worktree |
| Grow | Growth / Product | Measure and iterate | analytics, onboarding, copy, seo, growth, ab |

**Cross-cutting:** forge-prompts (prompt architecture across the entire pipeline) - spans all zones.

### Circular Flow

Grow zone feeds insights back to Validate zone (new feature ideas from analytics/growth data). This creates a product development cycle, not a linear pipeline. There is no endpoint.

---

## Why 4 Zones Instead of 3 Phases

1. **Maps to real roles** - not abstract technical phases. Each zone has a clear owner persona
2. **Answers "what tier do I need?"** - Validate + Build = Pro, Scale = Complete, Grow = Complete
3. **Reduces tier objections** - "Complete tier has too much stuff" dissolves when each zone shows clear purpose for a specific role
4. **No dead end** - the cycle metaphor (Grow -> Validate) communicates continuous product evolution, not a one-shot pipeline

---

## Visual Design

### Layout
- **Desktop:** horizontal 4-column ribbon
- **Mobile:** vertical stack

### Color Coding
| Zone | Color |
|------|-------|
| Validate | Purple |
| Build | Blue |
| Scale | Green |
| Grow | Amber |

### Elements
- Persona label badge at top of each zone
- Module pills inside each zone, clickable to detail pages
- forge-prompts spans full width below the 4 zones
- Dotted return arrow from Grow back to Validate (cycle visualization)

---

## What Was Removed

| Old Section | Reason |
|-------------|--------|
| PipelineSection (interactive SVG, 6 modules) | Outdated - missing 9 advisory adapters, no persona mapping |
| EcosystemSection (3-phase Before/During/After) | Overlapping with pipeline, abstract phases don't help buyer self-selection |

---

## Placement

Section #4 (where PipelineSection SVG was), before the first Ghost CTA.

This is the "here's what you get" moment - positioned right after Solution Overview explains the 3 pillars. The journey visualization makes the module catalog tangible and persona-relevant.

---

## Secondary Change

Added small Manager (desktop app) mention in the How It Works "Install" step as a secondary option below the CLI command. This acknowledges the upcoming desktop app without displacing the CLI-first flow.

---

## Tier Mapping Summary

| Tier | Zones Covered | Price |
|------|--------------|-------|
| Starter (EUR 29) | Build (core + worktree + init only) | - |
| Pro (EUR 79) | Validate (product) + Build (core + qa + tracker + prompts + worktree) | - |
| Complete (EUR 149) | All 4 zones - Validate + Build + Scale + Grow | - |

This mapping gives each tier a clear story: Starter = build, Pro = validate + build, Complete = full cycle.
