# Audience Research — Both Segments

> **Context:** Research results for Segment A (Developers) and Segment B (Entrepreneurs/Vibe Coders), gathered from Reddit, HackerNews, dev forums, IndieHackers, market reports. Dated 2026-02-25.

## 1. Developer Pains with AI Coding Agents

### Pain Categories

#### P1: Context Loss at Scale
- **Severity: CRITICAL**
- Model loses project context as codebase grows: "worked before, now the project is complex and the assistant seems dumber"
- Bad context management: picks wrong files, ignores important code sections
- System prompts tuned for "magic vibe coding", not real architecture
- **Forge solution:** forge-core architecture audit → project-specific dev-skills with full context

#### P2: Token Burn & Runaway Sessions
- **Severity: HIGH**
- Huge prompts, tens of millions of tokens for 100-200 lines of code
- Bills of tens of dollars in couple days
- Agent mode generates garbage: wrong tags, code duplication, chaotic changes hard to review
- **Forge solution:** forge-core pipeline phases → structured, scoped work. Quality gates prevent runaway

#### P3: Architecture Violations
- **Severity: CRITICAL**
- Agent makes local changes without understanding system design (DDD modules, layers, IoC)
- Breaks domain invariants and security: shortcuts validations and auth checks "to make it work"
- Changes in one module break contracts with another — no end-to-end understanding
- **Forge solution:** forge-core architecture audit + naming conventions + quality patterns (50+). Dev-skill encodes architecture rules

#### P4: AI Error Patterns
- **Severity: HIGH**
- **Hallucinated APIs:** made-up methods, non-existent parameters, outdated versions
- **Confidently wrong:** code looks clean and convincing but logic doesn't match requirements (especially business logic and complex SQL)
- **Repeating same bugs:** without explicit constraints in rules, model systematically makes same architectural mistakes
- **Over-engineering:** full refactor instead of minimal patch, hard to accept via PR
- **Forge solution:** forge-core red-flags (15 LLM rationalization detectors), scope decomposition, agent self-review

#### P5: Code Quality Gap
- **Severity: MEDIUM**
- AI is fast and good on template tasks (CRUD, glue code, tests)
- Worse on: complex architecture, optimization, nuanced UX/product decisions
- "AI code" increases cognitive debt: visually clean but covered in hidden assumptions
- **Forge solution:** forge-product (product context before coding), forge-qa (requirement-based tests), ux-reviewer

#### P6: Prompt Engineering Fatigue
- **Severity: MEDIUM** (implied, not directly measured)
- Developers must encode their experience into prompts every time
- Without explicit constraints, AI repeats same mistakes
- Maintaining .cursorrules / CLAUDE.md manually is tedious
- **Forge solution:** forge-core auto-generates project-specific rules from architecture audit. No manual prompt engineering

### Pain Severity Ranking (for messaging priority)

1. **Architecture violations** (P3) — most visceral, highest risk
2. **Context loss at scale** (P1) — universal, felt by everyone
3. **AI error patterns** (P4) — confidence + wrongness = dangerous
4. **Token burn** (P2) — financial pain, tangible
5. **Code quality gap** (P5) — chronic but tolerable
6. **Prompt engineering fatigue** (P6) — friction, not crisis

## 2. Developer Psychology & Buying Triggers

### Emotional Hooks That Work

| Hook | Example | Forge Angle |
|------|---------|-------------|
| **Control & predictability** | "No magic, just reliable automation" | "AI that respects your architecture" |
| **Pain avoidance** (not time savings) | "Fewer production bugs, fewer late-night fixes" | "Senior-level guardrails, not best-practices soup" |
| **Identity** | "Tool for serious engineers" | "For teams that actually care about quality" |
| **Authority of maker** | JetBrains, DHH, Guillermo Rauch | Martin Sikora — senior engineer, multi-project experience |

### "By Developers, For Developers" — When It Works

Works when backed by:
- Real engineering authority and product quality (JetBrains)
- Charismatic authority with clear opinions (DHH/Rails)
- Personal brand + strong technical story (Guillermo Rauch/Vercel)

**Doesn't work** as empty stamp without face and story. Typical anti-pattern of weak SaaS landing pages.

**DECISION:** Use "By Developers, For Developers" but anchor it to the author's real experience and specific technical opinions encoded in the tools.

### Why Developers Pay Instead of DIY

1. Real cost of DIY is higher: maintenance, updates, integrations, security, team onboarding
2. Tool closes unpleasant/non-creative work (routine, integrations, maintaining rules) → focus on features
3. Social proof: cases from respected teams, open-core/OSS reputation, conference talks

## 3. Messaging Insights

### Words/Phrases That Resonate

- "Fast, opinionated, predictable"
- "Designed for focus and flow" / "Stay in the zone"
- "No config unless you want it" / "Sane defaults, full control when needed"
- **AI-specific:** "AI that respects your architecture", "Project-aware coding assistant", "Guardrails for your AI agents"

### Words/Phrases That Repel

- Generic AI bullshit: "revolutionize", "10x engineers with AI magic", "fully autonomous coding"
- Promises to "replace developers" instead of helping them
- Enterprise marketing language: "synergies", "digital transformation", "holistic AI platform"

### Anti-Patterns to Avoid

1. **Over-promise, under-deliver** — Aider case: promised production-ready agent, delivered primitive errors and bad support
2. **Hidden pricing / unpredictable billing** — token-based billing causes strong negative reaction
3. **Feature-focused instead of outcome-focused** — listing models, integrations, UI features instead of "what pain do we solve"

### How Top Dev Tools Position Value

| Company | Positioning | Technique |
|---------|-------------|-----------|
| Linear | "Software that feels good to use" | Speed, focus, flow narrative |
| Raycast | "Supercharged productivity for developers" | Extensibility, community, keyboard-first |
| Railway/Fly.io | "Just deploy" | Remove infrastructure pain, simple mental model |

## 4. Market Context

### AI Coding Tools Market

- **2025:** ~$7.37B (Mordor Intelligence)
- **2030:** ~$19-24B (CAGR 24-27%)
- Aggressive growth, strong enterprise and startup interest

### Our Niche Position

**Closest competitors:**
- Cursor rules ecosystem (.cursorrules generators, paid skills)
- Claude CLAUDE.md per-project conventions
- Enterprise consulting for custom AI-agent rules

**GAP we fill:** No widely recognized, independent DevKit solution that automatically builds guardrails for AI agents across any project. Current solutions are:
- Manual (write your own rules)
- Platform-locked (Cursor-only or Claude-only)
- Consulting (expensive, not scalable)

**Forge differentiators:**
1. Auto-generates from architecture audit (not manual)
2. Platform-agnostic (`.claude/` works in Claude Code, Cursor, Cowork)
3. Full pipeline (not just rules — product design, QA, task management)
4. Disposable meta-tool (artifacts survive plugin removal)

---

## 5. Entrepreneur Pains (Segment B)

### Pain Categories

#### EP1: Idea-to-MVP Gap
- **Severity: CRITICAL**
- "Want to test an idea but no money for developer / tech co-founder"
- Stuck between Figma/notebook and real MVP
- No-code seems quick but still requires technical thinking and time
- "I don't want to become a developer, I want to launch a business — but all tools ask me to think like a developer"
- **Forge solution:** forge-product designs features in business language (user flows, stories). forge-core guides AI to build from that design.

#### EP2: Black Box Anxiety
- **Severity: HIGH**
- AI does things in files/IDE but founder doesn't understand what changed or if it's safe to ship
- Can't interpret errors, stack traces, logging — fully dependent on AI for fixes
- AI sometimes gives contradictory fixes
- "Simple things work, as soon as it gets slightly complex — I'm lost"
- **Forge solution:** forge-core structured pipeline = transparent phases. forge-qa auto-tests give confidence. Traceability shows what each piece does.

#### EP3: Chaotic Codebase
- **Severity: HIGH**
- Without architecture understanding → chaotic monolith of files, hard to scale or hand off to devs
- Data management issues: "data disappears / duplicates / behaves strangely"
- No understanding of how to model entities and relationships
- **Forge solution:** forge-core architecture audit + templates enforce clean structure from day one. Naming conventions. Quality gates.

#### EP4: Deployment & Infrastructure Terror
- **Severity: MEDIUM**
- Even if AI builds the code, "where and how to deploy?" remains unsolved
- Domain, SSL, databases, background jobs — all outside comfort zone
- **Forge solution:** Partial — outside Forge scope, but Claude Cowork/Cursor can handle basic deployment. Forge ensures code is deployable.

#### EP5: Handoff Fear
- **Severity: HIGH**
- "What happens when I actually need a developer? Will they say throw everything away and rewrite?"
- Fear of lock-in to specific platform
- Fear that AI-generated code is a "black box" that can't be audited or explained to investors
- **Forge solution:** Core differentiator. Forge generates production-grade, maintainable code that devs can pick up. "MVP your future team won't hate."

#### EP6: Security & Trust
- **Severity: MEDIUM**
- "Can I actually store user data, payments, medical info on this?"
- Need for security scans, privacy controls
- **Forge solution:** forge-core quality patterns include auth guards, input validation, RLS, OWASP awareness. forge-qa tests security paths.

### Entrepreneur Pain Severity Ranking

1. **Idea-to-MVP gap** (EP1) — the foundational pain, everything starts here
2. **Handoff fear** (EP5) — the long-term anxiety that blocks commitment
3. **Chaotic codebase** (EP3) — what actually happens without guardrails
4. **Black box anxiety** (EP2) — daily friction during building
5. **Security & trust** (EP6) — gate to real users
6. **Deployment terror** (EP4) — final mile, partially outside our scope

## 6. Entrepreneur Messaging Insights

### What Resonates

- "From idea to working product in X days, even if you don't code" — with real examples
- "Production-grade from day one" — backed by exportable code, open standards, security scans
- **"No team yet needed"** (not "no team ever") — honest, mature message
- **"MVP your future dev team won't hate"** — the killer line for handoff fear
- "AI that builds developer-ready products"
- "Guardrails for your AI, so your codebase grows clean instead of chaotic"

### What Repels

- "Fully autonomous, no code needed ever" — triggers skepticism
- Hiding complexity — entrepreneurs aren't stupid, they know trade-offs exist
- Pure magic narrative without showing real output

### Competitive Positioning for Entrepreneurs

| Competitor | Their promise | Forge counter-position |
|-----------|-------------|----------------------|
| No-code (Bubble, Webflow) | "No code needed" | "Real code that devs can continue" |
| AI builders (Bolt, Lovable, v0) | "AI builds everything" | "AI builds WITH guardrails" |
| Replit Agent | "Anyone can create software" | "Anyone can create MAINTAINABLE software" |

**Forge's unique angle:** We don't hide code. We don't replace code. We make AI write code that a real dev team can inherit, maintain, and scale. The entrepreneur gets an MVP AND a codebase.

## 7. Market Context (Updated)

### AI Coding Tools Market
- **2025:** ~$7-8B (includes pro-dev assistants, AI builders, no-code with AI)
- **2030:** ~$20-24B (CAGR 24-27%)
- Segments: IDE assistants, AI code review, AI app builders, no-code/low-code with AI

### Usage Scale
- **Copilot:** 1M+ paid subscribers (growing)
- **Cursor:** Rapid growth in install base and community
- **Claude Code / Replit / Bolt:** Key players in AI coding and app building, "democratizing software creation"

### Vibe Coding Trend
- Became a meme: YouTube videos, articles, Red Hat criticism ("uncomfortable truth about vibe coding")
- Attractive narrative: "describe the feeling, AI figures it out"
- Growing criticism: no guardrails, architecture uncertainty, hidden debt, security risks
- **Market shift:** From pure vibe coding → "guided/structured AI" (project rules, security scans, code export, built-in best practices)
- **Forge positioning in this shift:** Not "another AI app builder" but "the layer that makes vibe coding safe and portable"
