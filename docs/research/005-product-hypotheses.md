# Product Hypotheses -- Forge DevKit

> **Version:** v2 (2026-03-06). Added A2 hypothesis, deferred entrepreneur hypotheses. v1 archived as 005-product-hypotheses-v1.md

## Evaluation Criteria

Each hypothesis evaluated against:
1. **Pain alignment** -- does it address a real, validated pain from research?
2. **Product fit** -- does Forge do this today, or does it require new functionality?
3. **Differentiation** -- does it set us apart, or put us in direct competition?
4. **Messaging consistency** -- does it fit accepted positioning (quality layer, prevention not detection, disposable meta-tool)?

---

## Segment A: Developers

### A1: Architecture-Aware AI Pipeline -- STRONG (primary hypothesis)

| | |
|---|---|
| **Original** | Devs will pay for auto-generation of .cursorrules/CLAUDE.md from repo |
| **Refined** | Devs will pay for auto-generation of a full dev-pipeline from architectural audit of their project |
| **Target pains** | P1 (context loss) + P3 (architecture violations) + P5 (code quality gap) + P6 (prompt fatigue) -- 4 of 9 pains |
| **Forge solution** | `forge setup` -> 7-gate wizard -> architecture audit -> dev-skills + quality patterns (50+) + naming conventions + 15 LLM rationalization detectors |
| **Proof point** | Real CLI: `forge setup` -> detected NestJS + Clean Architecture + 3 layers + PostgreSQL -> generated 12 dev-skills |
| **Metric** | 30% conversion from trial/demo to paid |
| **Pricing** | $29 (forge-core solo, Starter tier) |

**Why it works:**
- P3 (architecture violations) -- #1 severity in research. Direct quotes: "AI breaks DDD modules", "shortcuts validations", "changes one thing, breaks another"
- P6 (prompt fatigue) -- "I have to explain my architecture in every prompt" -- universal frustration
- Cursor Rules ecosystem is popular, but rules are manually written. Auto-gen skills exist but produce one-shot generation without pipeline
- **Forge GAP:** full pipeline (not just rules), platform-agnostic, 7-gate wizard (not one-shot)

**Why NOT "rules generator":**
- "Rules generator" = commodity. Free auto-gen skills already exist
- Forge generates dev-skills + quality patterns + naming audit + red flags + pipeline phases -- this is an architecture-aware pipeline, not a rules file
- "Pipeline" positioning protects from price competition with free generators

**Includes token economy proof point (from former standalone A2):**
- Structured pipeline phases prevent runaway sessions -> predictable costs
- Quality gates stop agent before it spirals -> fewer wasted tokens
- This is a CONSEQUENCE of pipeline, not a separate product

---

### A2: Agent Teams Orchestration -- STRONG (new, 2026)

| | |
|---|---|
| **Hypothesis** | Devs will pay for intelligent multi-agent orchestration: backlog -> conflict detection -> wave execution |
| **Target pains** | P8 (merge conflicts in multi-agent) -- "I literally can't merge their branches" |
| **Forge solution** | forge-autopilot analyzes backlog, detects file/module conflicts BEFORE spawning agents, groups tasks into conflict-free waves, spawns Agent Teams with isolated scopes |
| **Proof point** | Wave visualization showing conflict-free task grouping: "Wave 1: 3 tasks (no overlap) -> Wave 2: 2 tasks (depends on Wave 1) -> all merged clean" |
| **Metric** | % of Agent Teams users who complete multi-task sprints without manual conflict resolution |
| **Pricing** | $149 (Bundle tier -- includes forge-autopilot) |

**Why it works:**
- P8 is a CRITICAL 2026 pain that didn't exist before Claude Agent Teams (Feb 2026)
- Zero competitors in this space -- no product offers backlog -> conflict detection -> wave execution
- Developers who adopted Agent Teams early and hit merge walls are actively searching for solutions
- High-intent buyers: they already invested in Agent Teams, they need orchestration on top

**The analogy:**
- Claude Agent Teams = Docker (infrastructure, spawn containers/agents)
- forge-autopilot = Kubernetes (orchestration, scheduling, conflict avoidance, wave execution)
- Docker without Kubernetes is chaos at scale. Agent Teams without forge-autopilot is merge conflict roulette.

**Why a separate hypothesis (not merged into A1):**
- Different target pain (P8 vs P1/P3)
- Different pricing tier ($149 vs $29)
- Different product (forge-autopilot vs forge-core)
- Different buyer persona (teams using Agent Teams vs individual devs)
- Standalone landing section with its own proof point and CTA

**Proof strategy:**
- Demo video: backlog of 8 tasks -> forge-autopilot conflict analysis -> 3 waves -> Agent Teams execution -> all branches merge clean
- Before/after: manual Agent Teams (4/8 tasks merge-conflicted) vs forge-autopilot (0 conflicts, 3 waves)

---

### ~~A3: Code Review as Service~~ -- DROPPED

**Reason:**
1. Forge doesn't do PR review -- that's a different product
2. Competitors in this space: CodeRabbit, SonarQube, GitHub Copilot review
3. Our position: "prevention, not detection" (COMPETITOR-LANDSCAPE). Entering detection = losing differentiation
4. Our answer to P4 (confidently wrong) -- forge-product (acceptance criteria BEFORE code) + forge-qa (tests FROM requirements) + red flags (15 rationalization detectors). This is prevention, not post-hoc review.

---

## Segment B: Entrepreneurs -- DEFERRED

> **Entrepreneur segment deferred to separate landing page.** Hypotheses B1, B2, B3 are not dropped -- they remain valid and will be activated when the entrepreneur-focused landing is built. The current developer landing page will not include entrepreneur-targeted sections.

### B1: Structured MVP Path -- DEFERRED (was STRONG)

| | |
|---|---|
| **Hypothesis** | Entrepreneurs use Forge as quality layer over any AI-builder for creating handoff-ready MVP |
| **Target pains** | EP1 (idea-to-MVP gap) + EP3 (chaotic codebase) + EP5 (handoff fear) |
| **Status** | DEFERRED -- separate entrepreneur landing page planned |
| **Notes** | Hypothesis validated. Killer line "MVP your future dev team won't hate" confirmed. Activation blocked on separate landing page buildout |

---

### B2: Structured AI Development Path -- DEFERRED (was REFRAMED)

| | |
|---|---|
| **Hypothesis** | Transparent, step-by-step AI development process with visible results at each step |
| **Target pains** | EP2 (black box anxiety) + EP1 (idea-to-MVP gap) |
| **Status** | DEFERRED -- separate entrepreneur landing page planned |
| **Notes** | Functions as "how it works" explanation for B1. Reusable in developer context as pipeline transparency proof point |

---

### B3: Handoff-Ready Artifacts -- DEFERRED (was STRONG)

| | |
|---|---|
| **Hypothesis** | Forge artifacts survive removal -- code, rules, tests, documentation remain ready for team handoff |
| **Target pains** | EP5 (handoff fear) -- strongest emotional hook for entrepreneurs |
| **Status** | DEFERRED -- separate entrepreneur landing page planned |
| **Notes** | Disposable meta-tool USP is also relevant for developers (A1 proof point). Entrepreneur-specific messaging ("MVP your future team won't hate") deferred |

---

## Cross-Segment

### Cross-1: Developer-Only Landing -- UPDATED (was "Shared Landing, Targeted Sections")

| | |
|---|---|
| **Original hypothesis** | One landing page with shared narrative + two targeted use case blocks |
| **Updated decision** | Developer-only landing page. Entrepreneurs get separate site later |
| **Rationale** | Dual-audience landing dilutes developer messaging. Developer pain points (P1-P9) and entrepreneur pain points (EP1-EP6) require fundamentally different hooks, CTAs, and proof points. Shared page = compromised messaging for both |
| **Metric** | 15% lead -> trial conversion (developer segment) |

**Why split now:**
- Developer segment has clearer product-market fit (forge-core shipping, CLI working, architecture audit proven)
- Agent Teams (A2) creates time-sensitive opportunity that requires focused developer landing
- Entrepreneur messaging ("no team needed", "MVP path") on same page undermines developer identity hook ("tool for serious engineers")
- Single-audience landing is simpler to build, test, iterate

**Entrepreneur landing -- later:**
- Separate domain/subdomain or distinct page
- Reuses B1, B2, B3 hypotheses
- Own hero, CTAs, proof points, pricing presentation

---

### Cross-2: Flat Pricing, No Freemium (MVP) -- DEFERRED freemium

| | |
|---|---|
| **Original hypothesis** | Free: 3 rules gen/mo -> Paid: unlimited + integrations |
| **Decision** | Flat pricing on MVP ($29/$79/$149). Freemium deferred |
| **Rationale** | Current API architecture: LemonSqueezy -> license key -> activate -> download. Free tier not provisioned. Implementation requires: API changes, CLI changes, rate-limiting infrastructure |
| **Pricing on landing** | Show directly and early -- transparent pricing is trust signal |

**Why flat pricing is better at launch:**
- Hidden pricing / token-based billing = strong developer backlash (AUDIENCE-RESEARCH)
- $29/$79/$149 -- predictable, comparable with dev tool market
- Freemium -- separate product hypothesis for next cycle (when usage data exists)

---

## Messaging Framework (Developer-Focused)

### Headlines

| Element | Content | Rationale |
|---|---|---|
| **Hero** | "AI agents that respect your codebase" | Hits "control & predictability" hook. Concrete, not generic. Proven in research |
| **Agent Teams angle** | "Conflict-free parallel development for Agent Teams" | New 2026 hook for A2. High-intent buyers |

### Fear -> Solution

| Fear | Framing | Rationale |
|---|---|---|
| **Architecture violations** | "Your AI agent doesn't understand your architecture. It breaks it." | P3 (#1 severity). Includes: broken invariants, security shortcuts, cross-module breakage |
| **Merge conflict chaos** | "Agent Teams without orchestration = merge conflict roulette" | P8 (#3 severity). New, visceral, unsolved |

### CTA

| Context | CTA | Rationale |
|---|---|---|
| **forge-core** | "Audit your architecture" | "Generate rules" = commodity. "Audit" reflects 7-gate wizard and full pipeline |
| **forge-autopilot** | "See your first wave plan" | Shows conflict detection + wave execution. Concrete outcome |

---

## Hypothesis Map (Final)

```
STRONG (landing built around these):
+-- A1: Architecture-Aware AI Pipeline (dev hero, forge-core)
+-- A2: Agent Teams Orchestration (dev hero #2, forge-autopilot)

SUPPORTING (reinforce hero hypotheses):
+-- Token economy (= proof point in A1, not standalone)
+-- B2: Structured AI Path (reusable in dev context as pipeline transparency)

DEFERRED (separate landing / next cycle):
+-- B1: Structured MVP Path (entrepreneur landing)
+-- B3: Handoff-Ready Artifacts (entrepreneur landing)
+-- Cross-2: Freemium (requires API work)
+-- Entrepreneur landing page (separate buildout)

DROPPED:
+-- A3: Code Review Service (different product, conflicts with positioning)
+-- Old A2: Token Guard as standalone (merged -> A1)
```

---

## Implications for Landing Page

### Section priorities (based on hypothesis strength):

1. **Hero:** "AI agents that respect your codebase" -- developer-focused, single audience
2. **Problem:** Architecture violations (P3) + merge conflict chaos (P8) + CC spirals (P7) -- the three most visceral developer pains
3. **Solution overview:** Full pipeline, not rules. Quality layer, not builder. Orchestration, not just infrastructure.
4. **forge-core block (A1):** Architecture audit, dev-skills, quality patterns, pipeline phases, red-flag detectors
5. **forge-autopilot block (A2):** Agent Teams orchestration, conflict detection, wave execution, merge-free parallel development
6. **How it Works:** Pipeline phases visualization (detection -> audit -> generation -> validation)
7. **Modules:** forge-core (hero) -> forge-product -> forge-qa -> forge-tracker -> forge-autopilot -> forge-worktree
8. **Pricing:** Flat, transparent, early on page. $29 / $79 / $149
9. **Author/Trust:** Real face, real experience, real technical opinions
10. **FAQ:** Developer-specific questions
