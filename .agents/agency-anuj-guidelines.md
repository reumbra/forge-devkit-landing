# Agency Guidelines - Anuj

*Last updated: 2026-03-17*

## Overview

Anuj (@anujcodes21) is a LinkedIn tech influencer/promoter. 300+ brand collaborations in 3 months, ~80k avg views per post. Posts from his own accounts as sponsored content (audience knows it's promotional).

**Channels:**
- LinkedIn: linkedin.com/in/anujcodes21/
- X/Twitter: x.com/anujcodes_21
- Telegram: t.me/codecareer123 (9.5K+ active)
- PH-dedicated Telegram/WhatsApp groups (for upvotes)

## Audience Analysis (CRITICAL)

**Anuj's audience is NOT our core ЦА.** This matters for copy.

| | Our target (r/ClaudeAI, HN) | Anuj's audience |
|---|---|---|
| Who | Senior devs using Claude Code/Cursor daily | Broad LinkedIn tech enthusiasts |
| Tech depth | Knows .claude/, CLAUDE.md, NestJS guards | "AI writes code" at buzzword level |
| Responds to | Technical specifics, pain points, honest pricing | "Cool new AI tool", visual demos, wow-effect |
| Converts via | Interactive demo, detailed docs | Video demo, simple CTA |
| Volume | Niche, high-intent | Broad, low-intent but high volume |

**Implication:** Copy for Anuj must be SIMPLER than our Reddit/HN copy. No .claude/ artifacts, no rationalization detection jargon, no NestJS guards. Video does 80% of the work, copy is just the hook.

## Post Style (from examples analysis)

Anuj's format across Lovable, Krisp, Abacus.ai, Liveblocks etc:
- First person ("I tried", "I found")
- Hook line (provocation or story)
- Short lines, line breaks between every sentence
- Month 1/2/3 or before/after escalation
- Product reveal as "discovery"
- Feature bullets (emoji or dash)
- CTA link
- Hashtags at end
- Video attached (1-2 min)

**Keep his format.** His audience expects it. Changing to long paragraphs would hurt engagement.

## Post Format

- **Perspective:** First person, as a developer user ("I tried", "I found"), NOT founder
- **Narrative:** Discovery pattern (problem -> search -> solution -> result)
- **Video:** 1-2 min product demo attached to posts
- **Platforms:** LinkedIn + X/Twitter (separate posts per platform)
- **CTA:** Link to interactive demo (forge.reumbra.com/docs/interactive-guide)

## Mandatory Review Checklist

Every post from the agency MUST be reviewed against these before publishing:

### Technical Accuracy (BLOCKERS)

| Check | Correct | Common mistake |
|-------|---------|---------------|
| Setup command | `/forge:setup` (Claude Code slash command) | `forge setup` (not a bash CLI) |
| Product type | Claude Code plugin ecosystem | Standalone CLI tool |
| Output location | `.claude/` directory artifacts | Generic "rules" or "config" |
| Pricing | From EUR 29 one-time | Missing "one-time" or wrong currency |
| Platform support | Claude Code, Cursor, any AI agent | Claude-only |
| Disposable claim | Uninstall plugin, .claude/ files keep working | "Delete Forge" (vague) |
| Time claims | Do NOT fabricate metrics ("60 seconds", "10x faster") unless proven | Any unverified number |

### Brand Voice Rules

| Do | Don't |
|----|-------|
| Direct, technical, specific | Hype, buzzwords, infomercial tone |
| Concrete examples ("NestJS guards", "auth module") | Generic ("your code", "your project") |
| Regular hyphens (-) | Em-dashes or en-dashes |
| "From EUR 29, one-time" | "Affordable", "cheap", "budget-friendly" |
| "blocked, not warned" (enforcement) | "helps", "assists", "guides" |
| Relatable developer frustration | "Month 1/2/3" escalation pattern |
| One insight per post | Feature dump lists |

### Words to Avoid

- subscription, SaaS, AI replacement, autonomous coding
- magic, revolutionary, game-changing, innovative, streamline
- "The best part?" (infomercial framing)
- "here is the fix" (salesy CTA)
- Emoji bullets as structure (no lists)
- Exclamation points

### Words That Resonate

- "drifts within a week" (CLAUDE.md pain - everyone knows this)
- "blocked not warned" (enforcement, not suggestion)
- "the type system covers this" (AI rationalization everyone recognizes)
- "disposable" (anti lock-in)
- "one-time, not subscription" (anti-subscription fatigue)
- "50+ patterns" (specific proof point)

## Platform-Specific Rules

### LinkedIn
- **Length:** 800-1500 chars
- **Format:** Short paragraphs, no emoji bullets, no headers
- **Tone:** Professional developer sharing experience
- **Hook:** Specific technical frustration (not generic "AI is amazing but...")
- **CTA:** Soft - "worth checking out if you..." not "here is the fix"
- **Hashtags:** Optional, max 3, at end if used
- **No:** "Month 1/2/3" format, carousel-bait hooks, LinkedIn-bro patterns

### X/Twitter
- **Length:** Under 280 chars (or thread)
- **Format:** Lowercase ok, casual, punchy
- **Tone:** Dev sharing a find, not marketing
- **Hook:** One specific pain point
- **CTA:** Link at end, no "check this out!!!"
- **No:** Hashtag spam, emoji chains, thread bait ("A thread")

## AI-Generated Content Policy

Posts MUST NOT read as AI-generated. Developers detect AI slop instantly and it damages brand credibility.

**AI slop markers to avoid:**
- Perfect paragraph structure (intro -> point -> conclusion)
- "Here is what happened:" framing
- Every sentence adding value (real humans ramble)
- Zero typos in casual content
- Rhetorical questions as transitions ("The best part?")
- Emoji-as-bullets formatting
- Metaphors that sound clever but say nothing ("chaotic AI intern into senior dev")

**Before submitting, ask:** "Would a developer scrolling LinkedIn stop and think 'this sounds real' or 'this sounds like marketing'?"

## Reference Materials

Share these with the agency for context:
- `.agents/product-marketing-context.md` - full product positioning, pricing, voice
- `.agents/reddit-audience-research.md` - what developers actually complain about
- Landing page: forge.reumbra.com
- Interactive demo: forge.reumbra.com/docs/interactive-guide

## Approved Post Template (LinkedIn)

This was reviewed and approved on launch day (2026-03-17). Use as reference for future posts.

```
I let AI write my code for 3 months.

Month 1: mass-producing features like never before.
Month 2: "wait, why does this look different than last week?"
Month 3: the AI rewrote a critical module. For the third time.

AI is great at writing code.
It's terrible at remembering HOW you write code.

Every session it forgets:
- Your project structure
- Your naming conventions
- Which parts of the codebase shouldn't be touched

So you re-explain everything. Every. Single. Time.

Then I found Forge DevKit.

One command scans your project and generates rules your AI actually follows.

When your AI tries to skip writing tests - it gets blocked.
When it tries to break your patterns - it gets caught.

You can delete Forge after setup.
The rules stay. No lock-in.

Works with Claude Code, Cursor, and any AI coding agent.

Interactive demo if you want to see it in action: forge.reumbra.com/docs/interactive-guide

[video]

#AI #DevTools #SoftwareEngineering
```

## Approved Post Template (X/Twitter - single tweet)

```
i let AI write my code for 3 months

by month 3 it had rewritten a critical module for the third time

the problem: AI forgets your architecture every session

found a tool that fixes that. one command, rules that stick, skipped tests get blocked

works with claude code, cursor, any AI agent

forge.reumbra.com/docs/interactive-guide
```

### What was fixed from Anuj's original draft:

| Original (wrong) | Fixed | Why |
|---|---|---|
| `forge setup` (bash command) | Removed - no CLI command shown | Product is Claude Code plugin, not bash CLI |
| "In 60 seconds" | Removed | Fabricated metric, no evidence |
| Emoji bullets (fire/magnifier/gear) | Simple dashes | Less AI-slop signal |
| "chaotic AI intern into senior dev" | Removed | Forced metaphor, not our voice |
| "here is the fix" | "Try the interactive demo" | Less infomercial |
| NestJS/Prisma/React specific | "Your project structure" | Anuj's audience doesn't know NestJS guards |
| No platform mention | "Claude Code, Cursor, and any AI coding agent" | Platform-agnostic positioning |
| Price in post | Removed | Testimonial format - user doesn't cite price |

## Review Process

1. Agency sends draft post
2. We review against this checklist + audience analysis
3. Flag BLOCKER issues (technical accuracy - see table above)
4. Check: is copy too technical for Anuj's broad audience?
5. Check: does it match Anuj's format (short lines, hook, reveal)?
6. Approve or request rewrite
7. Agency publishes from their accounts
