# Social Posts Log

Chronological log of all @reumbra_dev social posts. Used for context continuity across sessions.

**Launch date:** March 17, 2026 (Tuesday) 12:01 AM PST
**PH link:** producthunt.com/posts/forge-devkit
**Landing:** forge.reumbra.com
**Demo:** forge.reumbra.com/docs/interactive-guide
**Account X:** @reumbra_dev
**Account LinkedIn:** Martin Sikora (personal)

---

## Published Posts

### 2026-03-15 | X | Pre-launch announcement

**Account:** @reumbra_dev
**Status:** Published
**URL:** https://x.com/reumbra_dev/status/2032972829327548689

```
Your AI coding agent forgets your architecture every session.

Forge DevKit fixes that. One command audits your repo and generates guardrails your AI actually follows.

When it tries to skip a test - Forge blocks it.

Launching on @ProductHunt next week.

forge.reumbra.com
```

**Strategy:** Pain point P1 (Context Rot) + rationalization blocking differentiator
**Characters:** 279/280

---

## Launch Calendar

| Date | Platform | Type | Status |
|------|----------|------|--------|
| Mar 15 (T-2) | X | Pre-launch | published |
| Mar 16 (T-1) | X | Countdown + demo | draft |
| Mar 16 (T-1) | LinkedIn | Personal story | draft |
| Mar 17 (Launch) | X | Launch announcement | draft |
| Mar 17 (Launch) | X | Thread: 5 things AI agents get wrong | draft |
| Mar 17 (Launch) | Reddit r/ClaudeAI | Launch post | draft |
| Mar 17 (Launch) | Reddit r/ChatGPTCoding | Launch post (adapted) | draft |
| Mar 17 (Launch) | Hacker News | Show HN | draft |
| Mar 17 (Launch) | LinkedIn | Launch announcement | draft |
| Mar 18 (T+1) | X | Results + thank you | template |
| Mar 18 (T+1) | LinkedIn | Lessons learned | template |

---

## Drafts

### Mar 16 (T-1) | X | Countdown

```
Tomorrow we launch Forge DevKit on @ProductHunt.

One command that makes AI coding agents respect your architecture.

50+ quality patterns. Rationalization detection. TDD pipeline.

Try the interactive demo before launch:
forge.reumbra.com/docs/interactive-guide
```
**Strategy:** Urgency + interactive demo pre-warm
**Characters:** 268/280

---

### Mar 16 (T-1) | LinkedIn | Personal story

```
Tomorrow I'm launching my first product on Product Hunt.

I've been building Forge DevKit for the past year - a tool that makes AI coding agents actually follow your project's architecture.

The problem I kept hitting: every time I started a new Claude Code session, I had to re-explain my NestJS project structure. Guards, interceptors, repository patterns - the AI would forget everything and start writing code that didn't match.

So I built a tool that audits your repo once - stack, layers, conventions - and generates guardrails your AI follows forever. Even after you uninstall the tool.

The part I'm most proud of: rationalization detection. When the AI tries to skip writing a test ("the type system covers it"), Forge catches and blocks it. 50+ patterns like this.

If you use Claude Code, Cursor, or any AI coding agent - I'd love your feedback.

Interactive demo (no signup): forge.reumbra.com/docs/interactive-guide

Launch tomorrow on Product Hunt - link in comments.
```
**Strategy:** Founder story, vulnerability ("first product"), technical credibility, soft CTA
**Note:** Add PH link as first comment after posting

---

### Mar 17 (Launch) | X | Launch announcement

```
We're live on @ProductHunt!

Forge DevKit - one command turns any AI coding agent into a disciplined engineer.

Your AI writes tests first, follows your architecture, and gets blocked when it tries to cut corners.

Would love your support:
producthunt.com/posts/forge-devkit
```
**Strategy:** Direct announcement + PH link
**Characters:** 278/280

---

### Mar 17 (Launch) | X | Thread - "5 things AI coding agents get wrong"

**Tweet 1/6:**
```
5 things AI coding agents consistently get wrong (and how to fix each one):

A thread from building Forge DevKit.
```

**Tweet 2/6:**
```
1. Context Rot

Your AI forgets your architecture every session. You spend 20 minutes re-explaining what NestJS guards do.

Fix: one-time architecture audit that generates persistent guardrails. Your AI reads them automatically.
```

**Tweet 3/6:**
```
2. Fake Tests

Unit tests pass with 100% coverage. Every assertion uses mock data. Zero real behavior tested.

Fix: tests generated from acceptance criteria, not from code. Traced back to requirements, not AI guesswork.
```

**Tweet 4/6:**
```
3. Code Spirals

Your AI patches bugs with quick fixes until the entire module is unmaintainable spaghetti.

Fix: quality patterns that enforce your architecture. The AI follows your layered structure, not its shortcuts.
```

**Tweet 5/6:**
```
4. Merge Conflicts

You ran 3 agents in parallel. Spent 4 hours resolving merge conflicts. Net productivity: negative.

Fix: isolated git worktrees per feature. Each agent gets its own branch. Zero conflicts.
```

**Tweet 6/6:**
```
5. Rationalization

"This test isn't needed because the type system covers it."

The AI sounds convincing. It's wrong. 50+ patterns like this - detected and blocked automatically.

We built all of this into Forge DevKit. Live now on @ProductHunt:
producthunt.com/posts/forge-devkit
```
**Strategy:** Educational content -> product tie-in. Each tweet = one pain point from product-marketing-context.md. Thread format for reach.

---

### Mar 17 (Launch) | Reddit r/ClaudeAI | Launch post

**Title:** I built a tool that generates architecture guardrails for Claude Code (and any AI agent) - launching today on Product Hunt

**Body:**
```
Hey r/ClaudeAI,

I've been using Claude Code daily for the past year building a commercial product (NestJS + TypeScript monorepo). One thing kept frustrating me: every new session, Claude would forget my architecture. Guards, interceptors, repository patterns - I'd spend 20 minutes re-explaining before any real work could start.

So I built Forge DevKit.

**What it does:**

You run one command (`/forge:setup`). It audits your repo - stack, layers, conventions, capabilities - and generates `.claude/` artifacts: architecture rules, quality patterns, dev-skills, step catalogs. Your AI agent reads these automatically. You never re-explain your project again.

**The key insight:**

The generated artifacts are disposable. You can uninstall Forge after setup - everything keeps working. It's a meta-tool: it generates the tools your AI actually uses.

**What surprised me most:**

AI agents rationalize skipping work. "This test isn't needed because the type system covers it" - sounds reasonable, but it's wrong. I cataloged 50+ patterns like this and built detection into the quality pipeline. When Claude tries to skip a test mapped to an acceptance criterion, it gets blocked.

**The full pipeline:**

/forge:dev "Add payment webhook" triggers a 6-phase TDD cycle:
- Gate: creates branch, loads acceptance criteria, links tracker
- Test (RED): generates tests from AC, not from code
- Implement (GREEN): writes code to pass tests
- Verify: type check, lint, quality patterns, AC coverage
- Close: creates PR, updates tracker

Each phase uses specialized subagents on cheaper models (Sonnet for test generation, Haiku for self-review).

**Pricing:** From EUR 29 one-time (not subscription). Generated artifacts work forever.

**Links:**
- Interactive demo (no signup): forge.reumbra.com/docs/interactive-guide
- Product Hunt: producthunt.com/posts/forge-devkit
- Landing: forge.reumbra.com

Would love feedback from fellow Claude Code users. What problems do you hit most with AI-generated code quality?
```
**Strategy:** Technical depth for r/ClaudeAI audience. Show real usage, not marketing speak. End with question for engagement.
**Note:** Flair: "Tool/Resource" or "Show and Tell"

---

### Mar 17 (Launch) | Reddit r/ChatGPTCoding | Adapted launch post

**Title:** I built architecture guardrails for AI coding agents (Claude Code, Cursor, any agent) - open feedback welcome

**Body:**
```
Hey everyone,

After a year of building with AI coding agents, I kept hitting the same problems: context rot (re-explaining architecture every session), fake tests (100% coverage with mock data), and code spirals (AI patches over bugs with quick fixes).

I built Forge DevKit to fix this. One command audits your repo and generates architecture guardrails your AI agent follows automatically. Works with Claude Code, Cursor, Windsurf - anything that reads project files.

**How it works:**
1. Run setup - it detects your stack, layers, conventions (zero config)
2. It generates quality patterns, dev-skills, step catalogs in your project
3. Your AI reads these files and follows your architecture

**The differentiator:** rationalization detection. When your AI tries to skip a test ("the type system covers this"), it gets caught and blocked. 50+ patterns like this built in.

**Pricing:** From EUR 29 one-time purchase. Not a subscription. Generated files work even if you uninstall.

Interactive demo: forge.reumbra.com/docs/interactive-guide

Launching today on Product Hunt if you want to check it out: producthunt.com/posts/forge-devkit

What's your biggest frustration with AI-generated code quality?
```
**Strategy:** Shorter than r/ClaudeAI version. Platform-agnostic framing. Same engagement question.

---

### Mar 17 (Launch) | Hacker News | Show HN

**Title:** Show HN: Forge DevKit - Architecture guardrails for AI coding agents (one-time purchase, from EUR 29)

**Body:**
```
Forge DevKit is a disposable meta-tool for AI coding agents. You run one command, it audits your repo (stack, layers, conventions), and generates architecture guardrails, quality patterns, and a TDD pipeline. Then you can remove Forge - the generated artifacts work standalone.

The core problem: AI agents write code fast but ignore your architecture. They forget your patterns every session, generate fake tests, and rationalize skipping work ("the type system covers this test").

What Forge generates:
- Architecture rules derived from your actual codebase (not generic templates)
- 50+ quality patterns that prevent common AI shortcuts
- Rationalization detectors that block the AI from skipping required work
- TDD pipeline: tests from acceptance criteria, then implementation, then verification

It works with Claude Code, Cursor, and any AI agent that reads project files. Platform-agnostic by design.

Pricing: EUR 29/79/149 one-time purchase (Starter/Pro/Complete). Not a subscription. 14-day money-back guarantee. Generated artifacts work forever, even without renewal.

Built with: Astro + Tailwind (landing), Node.js CLI, AWS Lambda + Supabase (API), Cloudflare Pages (hosting).

Demo: https://forge.reumbra.com/docs/interactive-guide
Landing: https://forge.reumbra.com
```
**Strategy:** HN values technical depth, no-BS pricing, open about tech stack. "Show HN" format. No "upvote please" language.

---

### Mar 17 (Launch) | LinkedIn | Launch announcement

```
Today I'm launching Forge DevKit on Product Hunt.

It's been a year of building, and I want to share what I learned about the gap between "AI writes code fast" and "AI writes code I can ship."

The core problem: AI coding agents (Claude Code, Cursor, Windsurf) don't understand your architecture. They forget your patterns every session. They generate tests that pass with mock data but test nothing real. They rationalize skipping work.

Forge DevKit fixes this with a single command. It audits your project - stack, layers, conventions - and generates guardrails your AI follows automatically. Tests traced to requirements. Rationalization detection. Full TDD pipeline.

The part that matters most to me: it's a one-time purchase, not another subscription. From EUR 29. The generated files work forever - even after uninstalling.

If you work with AI coding agents and care about code quality, I'd love your feedback:
forge.reumbra.com/docs/interactive-guide

Product Hunt link in comments.
```
**Strategy:** Professional tone, founder credibility, quality-focused messaging for LinkedIn dev audience.
**Note:** Add PH link as first comment

---

### Mar 18 (T+1) | X | Results + thank you

```
24 hours on @ProductHunt:

[X] upvotes
[X] comments
[X] website visits

Thank you to everyone who checked out Forge DevKit.

The #1 question I got: [most common question]

Answer: [answer]

If you missed the launch: forge.reumbra.com
```
**Strategy:** Metrics + address most common objection/question. Extends conversation.
**Fill in:** Real metrics after launch day

---

### Mar 18 (T+1) | LinkedIn | Lessons learned

```
Yesterday I launched Forge DevKit on Product Hunt. Here's what happened and what I learned.

[Results: upvotes, traffic, sign-ups]

3 things that worked:
1. [what worked]
2. [what worked]
3. [what worked]

2 things I'd do differently:
1. [lesson]
2. [lesson]

The biggest surprise: [surprise]

If you're planning a Product Hunt launch, happy to share more details.

forge.reumbra.com
```
**Strategy:** Retrospective content performs well on LinkedIn. Builds founder brand.
**Fill in:** Real data after launch

---

## Cross-Platform Notes

**Timing (Mar 17 launch day):**
- 00:01 PST: PH goes live automatically
- 09:00 CET (~00:00 PST): Post X launch announcement
- 09:15 CET: Post X thread
- 09:30 CET: Post Reddit r/ClaudeAI
- 10:00 CET: Post Reddit r/ChatGPTCoding
- 10:30 CET: Post LinkedIn launch
- 11:00 CET: Post Hacker News Show HN
- Throughout day: Reply to all PH comments within 1 hour

**Content reuse rules:**
- Each platform gets unique copy (no cross-posting identical text)
- X = short punchy. LinkedIn = founder story. Reddit = technical depth. HN = no-BS technical
- Same pain points (P1-P5) rotated across platforms, different angles
- Always end with question for engagement (except X launch post)

**Links priority:**
- T-1 posts: interactive demo link (pre-warm)
- Launch posts: PH link (drive upvotes)
- T+1 posts: landing page link (convert)
