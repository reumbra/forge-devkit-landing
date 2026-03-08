# Product Marketing Context

*Last updated: 2026-03-08*
*Source of truth for all marketing materials: landing, Lemon Squeezy, ads, social, emails.*

## Product Overview

**One-liner:** Architecture-aware AI pipeline for Claude Code, Cursor, and any AI agent.

**What it does:** One command scans your repo - stack, layers, patterns - and generates guardrails your AI actually follows. 50+ quality rules. Works with Claude Code, Cursor, and any AI agent.

**Product category:** AI developer tools / AI coding infrastructure

**Product type:** Commercial plugin ecosystem (CLI + plugins)

**Business model:** One-time purchase, JetBrains model (1 year updates included, optional renewal at ~60%)

## Pricing Tiers (Source of Truth)

| | CORE | PRO | BUNDLE |
|---|------|-----|--------|
| **Price** | **EUR 29** | **EUR 79** | **EUR 149** |
| **Persona** | For solo developers | For professional developers | For tech leads and teams |
| **Description** | Foundation for architecture-aware AI development | Complete pipeline from design to tested code | All 6 modules today. Every new module tomorrow. One purchase. |
| **Modules** | forge-core | forge-core + forge-product + forge-qa + forge-tracker | All 6 + every future module |
| **Module count** | 1 | 4 | 6+ |
| **Devices** | 2 | 3 | 5 |
| **Badge** | - | Recommended | - |
| **CTA** | Get Core | Get Pro | Get Bundle |
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
- Tests that trace back to requirements, not AI guesswork (forge-qa)
- Full pipeline: design -> code -> test
- Task tracker sync - GitHub, Linear, ClickUp, Jira, Notion (forge-tracker)

**BUNDLE:** Everything in Pro +
- forge-autopilot - parallel agent orchestration
- forge-worktree - git worktree lifecycle
- Every future module included

### Module-to-Tier Mapping (from feature table)

| Module | CORE | PRO | BUNDLE |
|--------|------|-----|--------|
| forge-core | YES | YES | YES |
| forge-product | no | YES | YES |
| forge-qa | no | YES | YES |
| forge-tracker | no | YES | YES |
| forge-autopilot | no | **no** | YES |
| forge-worktree | no | **no** | YES |
| Future modules | no | no | YES |

**IMPORTANT:** forge-autopilot and forge-worktree are BUNDLE-ONLY. Never list them in Pro tier.

### License Terms
- One-time purchase (not subscription)
- Device activations per license: Core 2, Pro 3, Bundle 5
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
| forge-autopilot | Parallel agents without merge hell | 3 autonomy modes, 0 merge conflicts, wave planning |
| forge-worktree | Git worktree lifecycle manager | 3 templates, Docker port isolation, auto-cleanup |

## Target Audience

**Target companies:** Solo developers, small dev teams, tech leads using AI coding agents

**Decision-makers:** Individual developers (self-serve), tech leads (team purchase planned)

**Primary use case:** Making AI coding agents (Claude Code, Cursor, Windsurf) architecture-aware so generated code follows project conventions

**Jobs to be done:**
- Stop re-explaining my architecture to AI every session
- Make AI-generated code follow my project's patterns and conventions
- Get tests that trace back to actual requirements, not AI guesswork
- Run parallel AI agents without merge conflicts

**Use cases:**
- Solo dev who wants AI to respect their NestJS Clean Architecture
- Professional dev who needs full pipeline: product spec -> code -> tests
- Tech lead orchestrating parallel agent development across features

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
- 6 modules in ecosystem

**Author:** Martin Sikora, Senior Engineer, 10+ years experience, Founder of Reumbra

**Author quote:** "I built Forge because I was tired of re-explaining my architecture to AI agents. Every project, every prompt, the same context from scratch. So I encoded 10 years of engineering decisions into a system that does it automatically."

**Value themes:**

| Theme | Proof |
|-------|-------|
| Architecture awareness | 7-gate audit auto-detects stack, layers, patterns |
| Quality over speed | 50+ patterns prevent AI shortcuts, 15 rationalization detectors |
| Full pipeline | 6 modules: audit -> design -> code -> test -> track -> orchestrate |
| Economic model | One-time from EUR 29 vs Devin EUR 240/yr, Cursor Pro EUR 240/yr |
| Zero lock-in | Disposable meta-tool - remove plugin, artifacts stay |

## Goals

**Business goal:** Revenue from plugin sales via Lemon Squeezy

**Conversion action:** Purchase a tier (Core/Pro/Bundle) via checkout

**Current metrics:** Pre-launch / early stage

## Saying Framework

### Core Narrative Arc

**Before state:** "AI writes code fast, but you spend more time fixing it than writing it yourself. Every session starts from scratch."

**Turning point:** "What if your AI understood your architecture from day one?"

**After state:** "One setup. Your AI codes like a senior engineer who's read every file in the repo."

### Key Messages by Audience

| Audience | Primary message | Secondary message |
|----------|----------------|-------------------|
| Solo developer | "Stop re-explaining your stack. EUR 29, one time." | "50+ quality patterns you'd never write yourself" |
| Professional dev | "Full pipeline: design -> code -> test. EUR 79." | "Tests trace back to requirements, not AI guesswork" |
| Tech lead | "Parallel agents without merge hell. EUR 149, all modules." | "Every future module included automatically" |

### Elevator Pitches

**5-second:** Architecture-aware pipeline for AI coding agents.

**15-second:** Forge scans your repo and generates guardrails your AI actually follows. 50+ quality patterns, test traceability, parallel agent orchestration. One-time purchase from EUR 29.

**30-second:** AI coding agents write fast but create technical debt because they don't understand your architecture. Forge DevKit runs a 7-gate audit on your project - stack, layers, conventions - and generates project-specific guardrails, quality patterns, and dev-skills. Full pipeline from design to tested code. Works with Claude Code, Cursor, any AI agent. One-time purchase, not a subscription.

### Value Propositions by Tier

**CORE (EUR 29):** "Your AI forgets your architecture every session. Forge doesn't. 7-gate audit, 50+ patterns, one setup forever."

**PRO (EUR 79):** "From business requirement to tested code. Design features in plain language, get tests that prove requirements. Full pipeline."

**BUNDLE (EUR 149):** "The complete ecosystem. All 6 modules, parallel agent orchestration, every future module included. Best value for teams."
