---
name: dev
description: Use when developing features, fixing bugs, or working on forge-devkit-landing. Triggers on 'dev', 'implement', 'add feature', 'fix bug', 'build component', 'create page'.
---
# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Dev Skill — forge-devkit-landing

## Overview

Development skill for forge-devkit-landing (Astro, none, Adapted FSD). Parallel execution pipeline.

> Astro Adapted FSD | Layers: pages, widgets, shared, layouts | Pipeline: parallel

## Routing Matrix

| Intent | Route |
|--------|-------|
| New feature / page | Full pipeline |
| New component | Component layer → verify |
| Bug fix | Scope to affected area |
| Styling change | Component → visual verify |
| API integration change | Data layer → integration test |

## Architecture Rules (Adapted FSD)

### FSD Import Rules
- `pages → widgets → shared` — never the other way
- A widget NEVER imports another widget
- Everything is built from `shared/ui/`
- Cross-feature communication through shared state or events only

## Pipeline Contracts

> Cross-cutting behavioral contracts. Apply to ALL phases. Not step-catalog rows — these are framework rules.

- **Resume:** On session start, read `pipeline-state.yaml`. If phases partially complete → recreate task list from last checkpoint, continue from where stopped. Your context window will be automatically compacted as it approaches its limit. This is normal — do not stop tasks early due to token budget concerns. The pipeline is designed to survive context compaction via TaskList + pipeline-state.yaml checkpoints.
- **Insights:** Throughout the pipeline, silently collect architectural discoveries and non-obvious findings about this codebase. Log to `pipeline-state.yaml` when relevant: `insights`, `friction_events`, `decisions`. This is best-effort — never block pipeline progress to write insights.
- **Friction:** Log redo/correction/dissatisfaction events to `friction-log.yaml` (analytics enabled). Detection is best-effort. When in doubt, skip. Never block pipeline progress.
- **Scope:** Avoid over-engineering. Only make changes that are directly requested or clearly necessary. Keep solutions simple and focused. Don't add features, refactor code, or make "improvements" beyond what was asked. Don't add docstrings, comments, or type annotations to code you didn't change. Don't create helpers, utilities, or abstractions for one-time operations.
- **Safety:** Consider the reversibility and potential impact of your actions. Editing files, running tests, reading code → proceed freely. Creating new files, installing deps → mention but proceed. Schema migration, deleting files, git operations → ask first. External services, force-push, publish → always ask. When encountering obstacles, do not use destructive actions as a shortcut.
- **Sessions:** If >20 files touched or >3 subsystems affected → recommend fresh session for remaining work.

## Pipeline

### Phase 0: Pipeline Gate

**Role:** Pipeline compiler. Do NOT execute implementation steps here.

**Gate Rules (execute in order, FAIL = stop and resolve):**
1. `execution_mode` defined in config? → FAIL: "Set execution mode: /forge:mode quality|balanced|economy"
2. `step-catalog.md` exists & readable? → FAIL: "Run /forge:upgrade to regenerate catalog"
3. Task type detected from user input? → Default: `new-feature` (most inclusive step set)
4. **Brainstorm Gate:** Missing context (affected layers? acceptance criteria? dependencies?) → List gaps, AskUserQuestion, wait for response, re-run gate. NO assumptions, NO placeholder steps.

**Assembly:**
1. Read `references/step-catalog.md`
2. Filter: keep `[all]` + `[{execution_mode}]` + `[patch:*]` + `[{task_type}]`
3. **Coverage check:** filtered_steps >= 3?
   - **YES** → Build TaskCreate plan from filtered steps (Registry Filter path)
   - **NO** → Plan-and-Execute fallback: generate plan from task description, validate against guardrails (no skipping tests in quality mode, no skipping commit), build TaskCreate tree from generated plan
4. Economy mode → prepend disclaimer: "Economy mode: {N}-step pipeline (no tests, no QA). Switch to balanced/quality for fuller workflow."
5. Proceed to Phase 1

**Few-shot Examples** (see `references/phase-0-examples.md`)

### Phase 1: Understand + Design
Read `references/phase-1-understand.md`. Execute filtered steps from catalog (Phase 1 section).
**Inspector gate → Phase 2:** All Phase 1 tasks completed or explicitly skipped? Context gaps resolved?

### Phase 2: Implement
Read `references/phase-2-implement.md`. Execute filtered steps from catalog (Phase 2 section).
**Inspector gate → Phase 3:** All Phase 2 tasks completed? Files saved? No uncommitted partial changes?

### Phase 3: Verify
Read `references/phase-3-verify.md`. Execute filtered steps from catalog (Phase 3 section).
**Inspector gate → Phase 4:** Tests pass? Blockers resolved or acknowledged by user?

### Phase 4: Finish
Read `references/phase-4-finish.md`. Execute filtered steps from catalog (Phase 4 section).

## References

- `references/step-catalog.md` — pipeline steps (generated)
- `references/phase-0-examples.md` — few-shot filtering examples
- `references/phase-{1-4}-*.md` — step details per phase
- `references/contract-convention.md` — naming rules
- `references/quality-gates.md` — verification checklist
- `.claude/forge/{task}/contracts.md` — shared contracts (created per task at runtime)

<!--
quality_patterns:
  brainstorm_gate: true
  scope_decomposition: true
  agent_self_review: true
  finishing_protocol: true
  red_flags: true
  session_boundaries: true
-->
