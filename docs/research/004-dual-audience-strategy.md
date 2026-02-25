# 004 — Dual Audience Strategy Discussion

> **Context:** Exploring whether to target two audience segments on the landing page: Developers and Entrepreneurs (non-devs / vibe coders). Discussed 2026-02-24.

## Proposed Segments

### Segment A: Developers
- Software engineers, tech leads, indie hackers (age 22-40)
- Already use Claude Code / AI coding tools
- Pain: AI writes code without project context, quality suffers
- Value prop: Senior engineer discipline encoded into AI workflows

### Segment B: Entrepreneurs (Non-Devs + Vibe Coders)
Two sub-groups:
- **B1: True Non-Dev** — designers, marketers, PMs, business owners with product ideas. No dev experience. Need guided path from idea to working product.
- **B2: Vibe Coder** — started coding with Cursor/Claude Code, can copy-paste terminal commands, but doesn't understand architecture. Forge compensates for missing experience.

**Entry points for non-devs:**
- Claude Code Desktop (GUI application, no raw terminal needed)
- Cursor with Claude Code extension
- Guided onboarding guide included with purchase

## Platform Compatibility (Verified 2026-02-25)

| Platform | Works? | How |
|----------|--------|-----|
| Claude Code CLI | YES | Primary target |
| Claude Code Desktop | YES | Same engine, GUI wrapper |
| Cursor | YES | Cursor auto-detects `.claude/` directories (user profile + repo). Forge CLI installs to these paths → Cursor picks up skills/agents/commands automatically |
| Claude Cowork | YES (best for entrepreneurs) | Can create applications and use skills. Most accessible UI for non-devs |

**Key insight:** Forge is platform-agnostic — it installs files to `.claude/` and any tool that reads that directory gets the benefits. This makes the entrepreneur segment technically viable across multiple entry points.

## Resolved Questions

1. ~~Technical reality check~~ → All major platforms supported. See table above.

2. **DECISION: Landing page structure** → Approach B: One landing, one narrative, two use case blocks ("For Developers" / "For Entrepreneurs"). Shared hero, pricing, FAQ. Optimize later based on analytics.

3. **Is the entrepreneur segment viable NOW?** → YES, with caveats:
   - forge-product: design features without dev skills ✅
   - forge-core: AI handles project setup, user follows guided flow ✅
   - forge-qa: tests generated automatically ✅
   - Deployment/infrastructure: outside Forge scope ⚠️ (but Claude Cowork and Cursor can handle basic deployment)
   - Guided onboarding content needed for non-devs ⚠️

4. **Entrepreneur's journey:**
   - Has idea → opens Claude Cowork or Cursor
   - Activates Forge → `/forge:setup` guides project creation
   - `/forge:design` creates user flows, stories, UX criteria (no dev skills needed)
   - AI writes code guided by forge-core quality gates
   - forge-qa generates tests → entrepreneur gets confidence code works
   - Deploy via Claude Cowork / Cursor / manual with guide

## DECISION: Dual audience confirmed. Approach B (one landing, two use case blocks). Iterate based on analytics.
