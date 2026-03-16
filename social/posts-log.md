# Social Posts Log

Chronological log of all @reumbra_dev social posts. Used for context continuity across sessions.

**Launch date:** March 17, 2026 (Tuesday) 12:01 AM PST
**PH link:** www.producthunt.com/products/forge-devkit
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
| Mar 16 (T-1 eve) | Dev.to | Article 1/5 series (long-form) | ready to publish |
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
www.producthunt.com/products/forge-devkit
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
www.producthunt.com/products/forge-devkit
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
- Product Hunt: www.producthunt.com/products/forge-devkit
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

Launching today on Product Hunt if you want to check it out: www.producthunt.com/products/forge-devkit

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

### Mar 16 (T-1 evening) | Dev.to | Article 1 of 5 (series: "From Solo Dev to Agent Teams")

**Title:** I ran 4 AI agents on my backlog and went for coffee

**Tags:** `claudecode`, `ai`, `devtools`, `productivity`

**Publish:** Mar 16 evening (pre-warm for PH launch Mar 17). PH link already included.

**Body (markdown):**
```
A few weeks ago I picked 4 features from my backlog, typed one command, and walked away from my desk.

I made coffee. I did laundry. I checked on the build about 40 minutes later.

Three features were done - branches created, tests written, code implemented, PRs ready for review. The fourth was still in progress, working through a tricky edge case in the payment integration.

No merge conflicts. No "which file did agent 2 break?" debugging. Each agent worked in its own isolated worktree, on its own branch, completely unaware of the others.

This is what I spent the last year building. And it almost didn't happen.

## Three months before the coffee moment

Rewind to early 2025. I'm building a B2B platform - NestJS monorepo, TypeScript, the usual stack. I use Claude Code for everything. And every single session starts the same way.

"Here's how my guards work. Here's the interceptor chain. Here's why the repository pattern matters. No, don't put business logic in the controller."

Twenty minutes. Every. Session.

I wrote a CLAUDE.md file. Helped for a week. Then my codebase evolved and the document didn't. The AI would read stale rules and generate code that didn't match the current architecture.

So I built a tool that audits your repo automatically - framework, layers, naming conventions, database patterns, auth setup - and generates a `.claude/` directory with rules derived from your actual code. Not a template. Your code, your patterns, your conventions.

The first time I ran it, the AI went from "explain your guards again" to just... following the patterns. No more 20-minute warmups.

That was the first piece of what became [Forge DevKit](https://forge.reumbra.com).

## Then I caught my AI lying about tests

With architecture rules in place, I asked Claude to add a payment webhook handler. Code looked great. Tests passed. 100% coverage.

Then I read the tests.

Every assertion was testing mock data. The coverage number was real. The verification was fake. The AI had optimized for "green checkmark" instead of "proves the webhook actually updates order status."

I added a rule: tests must trace back to acceptance criteria (AC) - the actual requirements, not the code. If an AC says "webhook updates order status," there must be a test that verifies that exact thing.

The AI started arguing. Not literally, but it generated explanations: "The type system already covers this." "This is an implementation detail." Each one sounded perfectly reasonable.

It was rationalizing. Producing smart-sounding arguments for why it should skip work.

I cataloged these patterns. Found 50+ distinct rationalizations over three months. Built detection for them. When the AI tries to skip a test mapped to a requirement, it gets blocked. It can't argue its way out.

The first time it caught a rationalization I was about to approve myself - that's when I knew this was more than a side project.

## From rules to a pipeline to Agent Teams

Rules weren't enough. I needed a full process with gates that block bad output at every step.

So I built a 5-phase TDD pipeline. When you run `/forge:dev "Add payment webhook"`:

1. **Gate** - creates a branch, loads acceptance criteria, links your task tracker
2. **Test (RED)** - generates tests from requirements, not from code
3. **Implement (GREEN)** - writes code to make those tests pass
4. **Verify** - type check, lint, quality patterns, requirement coverage check
5. **Close** - creates PR, updates tracker

The pipeline runs off specs I already wrote - acceptance criteria, architecture rules, quality gates. It doesn't ask me "should I write this test?" It reads the requirements, generates tests, writes code, and only stops when information is genuinely missing. Not hand-holding - actual autonomy with guardrails.

Once I had a pipeline that reliably produced shippable code from a single command... the next question was obvious.

What if I ran multiple pipelines at the same time?

That's the autopilot module. You point it at your backlog, it analyzes which features can run in parallel without file conflicts, groups them into waves, and spawns an AI agent for each feature - each in its own isolated git worktree with its own branch and its own ports.

The agents don't know about each other. They can't step on each other's code. When they're done, each one has a clean PR ready for your review.

That's how I ended up drinking coffee while 4 agents worked my backlog.

Here's what that actually looks like - a real autopilot session, 9 batches, 39 features:

{% agent_session autopilot-39-features-9-batches-20-agents-0-conflicts-rg3huk %}

## The decision that felt wrong

Early on I made a risky call: make the tool disposable.

After Forge runs setup and generates your `.claude/` artifacts - architecture rules, quality patterns, dev-skills - you can uninstall Forge entirely. The generated files work on their own. No plugin required.

No vendor lock-in. No runtime dependency. You pay once, you own the output forever.

Why would I make it easy for people to stop using my product? Because forcing dependency is exactly what I hate about most dev tools. And the architecture audit alone - the thing that kills the 20-minute warmup - is the Starter tier. EUR 29, one-time. Not a subscription.

The autopilot (the coffee moment) is the Complete tier at EUR 149. But you don't start there. You start by fixing context rot, then add the test pipeline, then grow into Agent Teams when you're ready.

14-day money-back guarantee on all tiers.

Works with Claude Code, Cursor, and any AI agent that reads project files.

---

**Try the interactive demo** (no signup): [forge.reumbra.com/docs/interactive-guide](https://forge.reumbra.com/docs/interactive-guide)

I'm launching Forge on [Product Hunt](https://www.producthunt.com/products/forge-devkit) tomorrow. I'll be writing more about how each piece works in this series - architecture audit, rationalization detection, the TDD pipeline, and Agent Teams.

What's the worst thing your AI agent has tried to get away with?
```
**Strategy:** In medias res (hybrid). Hook = autopilot coffee result -> flashback to journey -> return to present. Dev.to "I did X, here's what happened" top pattern. Tier transparency: autopilot = Complete, but you start with Starter. Series tease for follow-up articles. Publish T-1 evening for organic indexing before PH launch.
**Agent session:** `{% agent_session autopilot-39-features-9-batches-20-agents-0-conflicts-rg3huk %}` embedded after "coffee moment" section. Curated English session: 9 batches, 39 features, 20 teammates, full triage phase. Source: lumina-forge real autopilot sessions, translated + polished.
**Note:** canonical_url = forge.reumbra.com. Series: "From Solo Dev to Agent Teams". Cover image: OG image (pipeline terminal). PH link already in body. Scheduled 21:00 Europe/Tallinn.

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

**Timing:**

*Mar 16 (T-1 evening):*
- 20:00-21:00 CET: Publish Dev.to article (pre-warm, organic indexing overnight)

*Mar 17 (launch day):*
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
- X = short punchy. LinkedIn = founder story. Reddit = technical depth. HN = no-BS technical. Dev.to = in medias res founder journey (autopilot hook -> backstory -> series tease)
- Same pain points (P1-P5) rotated across platforms, different angles
- Always end with question for engagement (except X launch post)

**Links priority:**
- T-1 posts: interactive demo link (pre-warm)
- T-1 Dev.to: both demo + PH link (article is pre-warm + launch driver)
- Launch posts: PH link (drive upvotes)
- T+1 posts: landing page link (convert)

---

## Karma Comments (Reddit)

Pre-launch karma building on r/ClaudeAI as u/Healthy-Oil-7291. No product mentions, pure experience sharing.

### 2026-03-16 | Reddit r/ClaudeAI | Karma comment on finance app post

**Thread:** "I built a personal finance app in 1 month with Claude Code. It was harder than expected. Here's what I learned"
**URL:** https://www.reddit.com/r/ClaudeAI/comments/1rv6kss/
**Account:** u/Healthy-Oil-7291
**Status:** Published (top-level + reply). Active thread with 2 external replies.

**Top-level comment (published):**
> yeah this matches my experience exactly. first 80% goes fast then you hit a wall
>
> the thing that helped me most was setting up architecture rules *and* product docs before letting claude loose. like if you have actual acceptance criteria written down before coding, claude can write tests against those instead of making up what to test. completely different quality
>
> i basically built a system where product specs -> test generation -> implementation -> verification all flows automatically. each phase has its own context so claude doesn't get confused. sounds overkill but after the 3rd time it rewrote my auth module bc it forgot the pattern i decided the setup cost was worth it lol

**Engagement (updated 2026-03-16 17:30):** Top-level: 2 upvotes, **20 reactions**. Reply: 1 upvote, 7 reactions.

**Reply to OP (published):**
> oh man yeah the spec changing mid-build is the worst. what helped me was writing acceptance criteria before any code - just plain english "user clicks X, sees Y, data Z gets saved". keeps my specs in a markdown file right next to the code so when something changes i update one file and tests regenerate against it instead of hunting down 15 files manually
>
> tbh still figuring out the best approach tho. markdown works but im looking into vector databases so claude can semantically search architecture decisions instead of reading a flat file. not sure if the setup cost is worth it yet. do you mean actual interactive prototypes or just static layouts when you say wireframes? bc data flow matters way more than UI for keeping tests stable imo

**OP reply to our reply (anirishafrican, 2h later):**
- Claude excels at generating HTML storyboards (wireframes)
- Has custom `/ac` skill for acceptance criteria extraction
- Pipeline: Extract AC -> Plan -> Build -> Verify
- Verification via Playwright / iOS native UI tests
- Recommends **xtended.ai** for vector search (Airtable-like with vectorise for columns)
- Self-learning "Ralph loop": logs learnings in table, skill updates itself after task
- Pain point: Opus 4.6 struggling to remember unique details in longer sessions

**trentbosworth (top-level, cites us):**
- "u/Healthy-Oil-7291's point about setting up architecture rules before letting Claude loose is something I've been thinking about a lot"
- Problem: CLAUDE.md rules drift - Claude follows for ~15 turns then quietly drifts
- Built **getcaliper.dev** - compiles CLAUDE.md conventions into automated checks after every agent turn
- Example checks: "functions under 30 lines", "use HTTP client wrapper", "every migration needs a test"
- AI review layer before each commit
- Looking for alpha testers
- **Competitor note:** getcaliper.dev overlaps with Forge's rationalization detection + quality patterns. Subset of what Forge does but focused specifically on convention enforcement per-turn.

**Reply to trentbosworth (published):**
> interesting, the per-turn convention check is a cool angle. my approach has been more spec-first tho - like i write acceptance criteria upfront and tests get generated from those, so the AI cant really drift bc its working against a fixed spec not just style rules
>
> the CLAUDE.md drift thing is real tho. i noticed the same ~15 turn window. my workaround was splitting context into phases so each phase loads only whats relevant instead of one massive file. seems to help with the forgetting problem
>
> how does your tool handle conflicting conventions? like if CLAUDE.md says "keep functions under 30 lines" but the existing codebase has 200-line functions everywhere

**Strategy:** Validate OP's pain (spec changes), share AC approach, humble exploration (vector DB), end with question for engagement. No product mentions. Thread became highest-engagement comment chain in the post. Reply to trentbosworth positions spec-first (our approach) vs convention-enforcement (his), asks pointed question about conflicting conventions weakness.

---

### 2026-03-16 | Reddit r/ClaudeAI | Karma comment on AbsolutelySkilled skills registry post

**Thread:** "I built a registry of 156 production-ready skills for Claude Code - think 'plugins' that teach it domain expertise"
**URL:** https://www.reddit.com/r/ClaudeAI/comments/1rv1wsc/
**OP:** u/maddhruv (AbsolutelySkilled, GitHub)
**Account:** u/Healthy-Oil-7291
**Status:** Published (top comment). 2 replies received.

**Our comment (published, top comment, 3 upvotes, 43 reactions):**
> tbh skills are probaly the most underrated claude code feature rn. nobody talks about them but they change everything
>
> one thing i noticed building a bunch of them - theres a huge difference between a skill that just says "write tests" vs one that has actual gates built in. like if it says "generate tests from acceptance criteria, block if any AC is untested" the output is way better than generic instructions
>
> also fwiw i settled on keeping SKILL.md short (like under 500 lines) as just the entry point and then lazy-loading reference files only when needed. past ~30 mandatory directives the quality starts droping off pretty noticeably
>
> how do you handle versioning tho? like when the project evolves do the skills drift or do you have somthing that keeps them in sync

**Replies:**
1. **maddhruv (OP)** - 1h ago, 2 upvotes: "npx skills CLI to update, all skills have versioning metadata"
2. **Financial-Garlic-720** - 54m ago, 1 upvote: Shares own pattern (knowledge/background, workflow, mandatory, optional, gotchas, last ran, last updated). Checklist.md + plan.md for drift detection. Considering Obsidian.

**Other notable comments:**
- **InteractionSmall6778** - 5 upvotes: "Session amnesia kills momentum. CLAUDE.md drifts within a week. Skills registry = domain knowledge install is much better pattern."

**Competitor note:** AbsolutelySkilled is free/open-source skills registry (GitHub). "Superhuman" skill overlaps with forge-core conductor (DAG decomposition, parallel sub-agents, TDD, persistent board.md). Key difference: free generic skills vs Forge's auto-detected project-specific artifacts.

**Strategy:** Position as experienced skill builder sharing hard-won lessons (P16 line count, P18 directive budgets, gate-based quality). Subtly establishes expertise. No product mention.
