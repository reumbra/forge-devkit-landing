# Product Marketing Context

*Last updated: 2026-03-10 (v3 - narrative update)*
*Source of truth for all marketing materials: landing, Lemon Squeezy, ads, social, emails.*

## Product Overview

**One-liner:** One command. From feature idea to tested code - for Claude Code, Cursor, and any AI agent.

**What it does:** One command scans your repo - stack, layers, conventions - and generates guardrails, quality patterns, and dev-skills your AI actually follows. 15 modules: from architecture audit to Agent Teams. Works with Claude Code, Cursor, and any AI agent.

**Product category:** AI developer tools / AI coding infrastructure

**Product type:** Commercial plugin ecosystem (CLI + plugins)

**Business model:** One-time purchase, JetBrains model (1 year updates included, optional renewal at ~60%)

## Pricing Tiers (Source of Truth)

| | CORE | PRO | COMPLETE |
|---|------|-----|----------|
| **Price** | **EUR 29** | **EUR 79** | **EUR 149** |
| **Persona** | For solo developers | For professional developers | For developer-founders |
| **Description** | Foundation for architecture-aware AI development | Full dev pipeline: from feature spec to tested, tracked code | Full automation + product intelligence. 15 modules. One purchase. |
| **Modules** | forge-core + forge-worktree | + forge-product + forge-qa + forge-tracker + forge-prompts | + forge-autopilot + 8 advisory adapters |
| **Module count** | 2 | 6 | 15 |
| **Devices** | 2 | 3 | 5 |
| **Badge** | - | Recommended | - |
| **CTA** | Get Core | Get Pro | Get Complete |
| **Renewal** | EUR 19/yr | EUR 49/yr | EUR 89/yr |
| **Checkout** | 5fade325-8f39-41c5-a416-2ba827eae6d4 | 2429257a-9691-46c4-8e9d-10332a6639a3 | 01e422a5-7160-41eb-b2c8-f22318ec170d |

### Tier Features (verbatim from landing)

**CORE:**
- Auto-detects your stack, layers, conventions
- 50+ quality patterns for AI-generated code
- Project-aware dev-skills - one setup, forever
- Scoped phases prevent runaway sessions

**PRO:** Everything in Core +
- Describe features in business language - AI builds from spec (forge-product)
- Tests traced to requirements, not AI guesswork (forge-qa)
- Full pipeline: design -> code -> test -> track
- Prompt engineering frameworks - consistent AI output across sessions (forge-prompts)

**COMPLETE:** Everything in Pro +
- forge-autopilot - Agent Teams on your backlog, zero merge conflicts
- 8 product advisory modules - discovery to growth
- Every future module included

### Module-to-Tier Mapping (from feature table)

| Module | CORE | PRO | COMPLETE |
|--------|------|-----|----------|
| forge-core | YES | YES | YES |
| forge-worktree | YES | YES | YES |
| forge-product | no | YES | YES |
| forge-qa | no | YES | YES |
| forge-tracker | no | YES | YES |
| forge-prompts | no | YES | YES |
| forge-autopilot | no | no | YES |
| 8 advisory adapters | no | no | YES |
| Future modules | no | no | YES |

**IMPORTANT:** forge-autopilot and 8 advisory adapters are COMPLETE-ONLY. forge-worktree is in all tiers (Core+). forge-prompts is in Pro+.

### License Terms
- One-time purchase (not subscription)
- Device activations per license: Core 2, Pro 3, Complete 5
- 1 year of updates included
- Renewal optional at reduced price (~60%)
- 14-day money-back guarantee
- Generated artifacts work forever (even without renewal)

## Modules (6 total)

| Module | Tagline | Key Stats |
|--------|---------|-----------|
| forge-core | Architecture audit & AI guardrails | 7-gate wizard, 50+ quality patterns, 15 rationalization detectors, 3 execution modes |
| forge-product | Feature design in business language | 8 product archetypes, User flows, Stories with AC, 50 UX criteria |
| forge-qa | Tests from requirements | 8+ test frameworks, AC to unit tests, UC to E2E, Traceability matrix |
| forge-tracker | Bridge backlog and development | 5 integrations: GitHub, ClickUp, Linear, Notion, Jira |
| forge-autopilot | Agent Teams without merge hell | 3 autonomy modes, 0 merge conflicts, wave planning |
| forge-worktree | Git worktree lifecycle manager | 3 templates, Docker port isolation, auto-cleanup |

## Target Audience

**Target companies:** Solo developers, professional developers, developer-founders using AI coding agents

**Decision-makers:** Individual developers (self-serve)

**Primary use case:** Making AI coding agents (Claude Code, Cursor, Windsurf) architecture-aware so generated code follows project conventions

**Jobs to be done:**
- Stop re-explaining my architecture to AI every session
- Make AI-generated code follow my project's patterns and conventions
- Get tests that trace back to actual requirements, not AI guesswork
- Run Agent Teams on my backlog without merge conflicts

**Use cases:**
- Solo dev who wants AI to respect their NestJS Clean Architecture
- Professional dev who needs full pipeline: product spec -> code -> tests -> tracking
- Developer-founder who wants full automation + product advisory for their project

## Problems & Pain Points

**Core problem:** AI writes code fast but creates technical debt at scale because it doesn't understand your architecture.

**Pain points (verbatim customer language):**

| ID | Pain | Quote |
|----|------|-------|
| P1 | Context Rot | "Your AI forgets your architecture every session. You spend 20 minutes re-explaining what NestJS guards do." |
| P2 | Token Burn | "A simple rename task burned 50K tokens because the AI re-read the entire codebase. Every. Single. Time." |
| P3 | Code Spirals | "Your AI patches over bugs with quick fixes until the entire module is unmaintainable spaghetti." |
| P4 | Merge Conflicts | "I ran 3 agents in parallel. Spent 4 hours resolving merge conflicts. Net productivity: negative." |
| P5 | Fake Tests | "Unit tests pass with 100% coverage. Every assertion uses mock data. Zero real behavior tested." |

**What it costs them:** Time fixing AI-generated code, rework cycles, technical debt, token waste

**Emotional tension:** Frustration with repeating themselves, anxiety about AI-generated code quality, feeling that AI tools promise productivity but deliver rework

## Competitive Landscape

**Direct:**
- Devin ($20/mo + ACU charges, >=EUR 240/yr) - autonomous AI developer, sandboxed environment. Falls short: you lose control of your codebase, locked into their environment
- Cursor Rules - static rules file. Falls short: manual creation, no architecture audit, Cursor-only, no pipeline

**Secondary:**
- Manual CLAUDE.md - hand-written rules. Falls short: limited to what you remember, no test connection, manual maintenance, drifts as codebase evolves

**Indirect:**
- "Just use AI without guardrails" - the default. Falls short: context rot, code spirals, merge conflicts

**Competitor anchor (pricing):** "Devin: EUR 240/yr mandatory. Cursor Pro: EUR 240/yr. Forge: from EUR 29 once."

## Differentiation

**Key differentiators:**
- Architecture-aware from 7-gate audit (not manual config)
- Disposable meta-tool (generated artifacts work without Forge installed)
- Full pipeline, not just rules (design -> code -> test -> deploy)
- Platform-agnostic (Claude Code, Cursor, Windsurf, any AI agent)
- One-time purchase (not subscription)

**How we do it differently:** One command audits your entire project and generates everything - no manual prompt engineering.

**Why that's better:** You get 50+ quality patterns you'd never think of, maintained automatically when your codebase evolves.

**Why customers choose us:** Stop wasting time re-explaining architecture. Pay once, use forever.

## Objections

| Objection | Response |
|-----------|----------|
| "I can write my own CLAUDE.md" | A good CLAUDE.md takes 2-3 hours. Forge generates it from a 7-gate audit with 50+ patterns you'd never think of. Plus it connects to test generation and requirement traceability. |
| "What if I remove Forge?" | Disposable meta-tool: generated artifacts work independently. Your code doesn't depend on Forge. |
| "Why no free trial?" | One-time purchase, not subscription. 14-day money-back guarantee instead - zero risk. |
| "Is it worth the price?" | One prevented production bug pays for the entire year. At EUR 29-79, costs less than a single hour of debugging AI-generated regressions. |

**Anti-persona:** Teams not using AI coding agents. Pure manual coders. People who want AI to fully replace developers (that's Devin, not Forge).

## Switching Dynamics (Four Forces)

**Push:** Frustration with AI forgetting context, wasted tokens, code spirals, merge conflicts in multi-agent setups

**Pull:** Architecture awareness from day one, 50+ quality patterns, full pipeline, one-time price

**Habit:** "My current CLAUDE.md is good enough" / "I'll write better prompts" / "AI is improving anyway"

**Anxiety:** "Will it work with my stack?" / "What if I'm locked in?" / "Is it maintained?"

## Customer Language

**How they describe the problem:**
- "My AI forgets my architecture every session"
- "I spend more time fixing AI code than writing it myself"
- "AI writes tests but they don't test anything real"

**How they describe us:**
- "Guardrails for AI coding"
- "Makes my AI understand my project"
- "Like .cursorrules but way more comprehensive"

**Words to use:** architecture-aware, guardrails, quality patterns, dev-skills, one-time purchase, disposable meta-tool, pipeline

**Words to avoid:** subscription, SaaS, AI replacement, autonomous coding, magic, revolutionary

**Glossary:**

| Term | Meaning |
|------|---------|
| Dev-skills | Generated artifacts in .claude/ that guide AI behavior |
| Gate | One step in the 7-gate architecture audit wizard |
| Quality patterns | Rules that prevent common AI coding mistakes |
| Rationalization detectors | Rules that catch when AI explains away skipping best practices |
| Execution modes | Economy/balanced/quality/manual - control token usage per task |
| Disposable meta-tool | Plugin generates artifacts, then can be removed - artifacts work standalone |

## Brand Voice

**Tone:** Direct, technical, confident. No fluff. Specificity over vagueness.

**Style:** Problem-first. Lead with pain, then solution. Use exact numbers (50+, 7-gate, 15 detectors). Short punchy headlines under 20 words.

**Personality:** Engineering-minded, pragmatic, honest about trade-offs, opinionated but not arrogant

**Headline patterns:**
- Pain: "AI writes code fast. You fix it faster."
- Solution: "Your AI should respect your architecture."
- Proof: "50+ guardrails. 7-gate audit. Tests from requirements."
- CTA: "Get Forge - from EUR 29"

**No long dashes:** Never use em-dash or en-dash. Always regular hyphen (-).

## Proof Points

**Metrics:**
- 50+ quality patterns
- 7-gate architecture audit
- 15 rationalization detectors
- 8+ test frameworks supported
- 5 task tracker integrations
- 3 execution modes
- 15 modules in ecosystem

**Author:** Martin Sikora, Senior Engineer, 10+ years experience, Founder of Reumbra

**Author quote:** "I built Forge because I was tired of re-explaining my architecture to AI agents. Every project, every prompt, the same context from scratch. So I encoded 10 years of engineering decisions into a system that does it automatically."

**Value themes:**

| Theme | Proof |
|-------|-------|
| Architecture awareness | 7-gate audit auto-detects stack, layers, patterns |
| Quality over speed | 50+ patterns prevent AI shortcuts, 15 rationalization detectors |
| Full pipeline | 15 modules: audit -> design -> code -> test -> track -> orchestrate |
| Economic model | One-time from EUR 29 vs Devin EUR 240/yr, Cursor Pro EUR 240/yr |
| Zero lock-in | Disposable meta-tool - remove plugin, artifacts stay |

## Goals

**Business goal:** Revenue from plugin sales via Lemon Squeezy

**Conversion action:** Purchase a tier (Core/Pro/Complete) via checkout

**Current metrics:** Pre-launch / early stage

## Product Image Card Narrative (LemonSqueezy gallery)

Each tier card follows: Hero (white bold, benefit-first) → Accent (purple/green, modules) → Description (gray, detail).

| Tier | Hero line | Accent line | Description |
|------|-----------|-------------|-------------|
| CORE | Stop re-explaining your stack | 50+ patterns · 7-gate audit · one setup forever | forge-core + forge-worktree |
| PRO | Design → Code → Test → Track | forge-product · qa · tracker · prompts · worktree | Describe features in business language - AI builds the rest |
| COMPLETE | Agent Teams. Zero conflicts. | autopilot + 8 advisory + every future module | Full automation from product discovery to growth |

Design file: `design/product-images.pen` (edit via Pencil MCP, save manually in Pencil app).

## Saying Framework

### Core Narrative Arc

**Before state:** "AI writes code fast, but you spend more time fixing it than writing it yourself. Every session starts from scratch."

**Turning point:** "What if your AI understood your architecture from day one?"

**After state:** "One setup. Your AI codes like a senior engineer who's read every file in the repo."

### Key Messages by Audience

| Audience | Primary message | Secondary message |
|----------|----------------|-------------------|
| Solo developer | "Stop re-explaining your stack. EUR 29, one time." | "50+ quality patterns you'd never write yourself" |
| Professional dev | "Full pipeline: design -> code -> test -> track. EUR 79." | "Tests trace back to requirements, not AI guesswork" |
| Developer-founder | "Full automation + product intelligence. EUR 149, all 15 modules." | "8 advisory modules from discovery to growth" |

### Elevator Pitches

**5-second:** Architecture-aware pipeline for AI coding agents.

**15-second:** Forge scans your repo and generates guardrails your AI actually follows. 50+ quality patterns, test traceability, Agent Teams orchestration. One-time purchase from EUR 29.

**30-second:** AI coding agents write fast but create technical debt because they don't understand your architecture. Forge DevKit runs a 7-gate audit on your project - stack, layers, conventions - and generates project-specific guardrails, quality patterns, and dev-skills. Full pipeline from design to tested code. Works with Claude Code, Cursor, any AI agent. One-time purchase, not a subscription.

### Value Propositions by Tier

**CORE (EUR 29):** "Your AI forgets your architecture every session. Forge doesn't. 7-gate audit, 50+ patterns, one setup forever."

**PRO (EUR 79):** "From business requirement to tested code. Design features in plain language, get tests that prove requirements. Full pipeline."

**COMPLETE (EUR 149):** "Agent Teams. Zero conflicts. Full automation + product intelligence. 15 modules, 8 advisory, every future module included."
