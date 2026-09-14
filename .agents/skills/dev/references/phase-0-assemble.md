# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 0: Assemble — forge-devkit-landing

### pre.1: Worktree setup

**Built-in lightweight worktree:**

1. **Guard:** Verify git repo (`git rev-parse --show-toplevel`). If not a git repo → skip worktree silently.
2. **Directory:** Check for `.worktrees/` → verify gitignored (`git check-ignore -q .worktrees`). If not ignored → add to `.gitignore` and commit.
3. **Similar check:** `git worktree list` — if matching worktree exists → ask: reuse / create new / abort.
4. **Create:** `git worktree add .worktrees/{slug} -b feat/{slug}`. cd into worktree.
5. **Dependencies:** Auto-detect and install (`pnpm install`).
<!-- IF execution_mode_resolved == quality -->
6. **Baseline test:** Run project tests to verify clean worktree. If tests fail → report, ask whether to proceed.
<!-- ENDIF -->
7. **Save session:** Write `.claude/forge/worktree/worktree-session.yaml` with feature, slug, branch, worktree_path, base_branch.

### core.0.1: Read task description, identify intent

Read task description, identify intent (new feature, bug fix, schema change, refactor).
Quick assessment before detailed planning. IF task is a simple bug fix or single-file change → skip to Phase 1.

**Checkpoint:** Create `.claude/forge/pipeline-state.yaml` with task_name, execution_mode_resolved, empty insights/decisions/friction_events arrays.

### core.0.2: Execution mode resolution

**Execution Mode Resolution:**
1. Read `.claude/forge/core/config.yaml` → `pipeline.execution_mode`, `pipeline.execution_strategy`
2. IF `execution_strategy == "adaptive"`:
   - Estimated files ≤ 5 AND single entity → resolve `economy`
   - Estimated files 6-15 AND routine (no schema migration, no new deps, single entity) → resolve `balanced`
   - Estimated files 6-15 AND complex/new domain → resolve `quality`
   - Estimated files > 15 OR schema migration OR money/PII/auth → resolve `quality`
   - Announce: "Task estimated as [{resolved_mode}]. Confirm?"
3. IF `execution_strategy == "ask"` → present 4 modes, let user choose
4. IF `execution_strategy == "fixed"` → use configured mode
5. Store in pipeline-state.yaml: `execution_mode_resolved: {mode}`

### core.0.3: Create task tree

**Create Task Tree:**

<!-- IF execution_mode_resolved == economy -->
Create 5 top-level tasks (phases only):
<!-- ENDIF -->
<!-- IF execution_mode_resolved == balanced -->
Create ~15 tasks (phases + key subtasks):
<!-- ENDIF -->
<!-- IF execution_mode_resolved == quality OR execution_mode_resolved == manual -->
Create full task tree with subtasks (~25+ tasks):
<!-- ENDIF -->

Use TaskCreate for each task, then TaskUpdate(addBlockedBy) to wire dependencies:
- Phase 0: Task Analysis [no dependencies]
- Phase 1: Schema + Contracts [blockedBy: Phase 0]
- Phase 2: Implementation [blockedBy: Phase 1]
- Phase 3: Verification [blockedBy: Phase 2]
- Phase 4: Close [blockedBy: Phase 3]

**Atomicity guard:** Verify ALL tasks have blockedBy edges wired before proceeding. If context compaction interrupts between TaskCreate and TaskUpdate(addBlockedBy), the task tree exists without dependency edges — rewire them.

### core.0.4: Load project memory

Read `.claude/memory/dev-conventions.md`, `dev-patterns.md`, `dev-decisions.md` if they exist.
Apply loaded conventions and patterns to current task analysis.
Skip if files don't exist (first run).

<!-- IF execution_mode_resolved == economy -->
> [Skipped: Memory Load] — economy mode. Memory not loaded to save tokens.
<!-- ENDIF -->

### core.0.5: Scope check

**Scope Check** — count independent UI units:

| Signal | Threshold |
|--------|-----------|
| Page-level routes | 2+ |
| Modals/drawers with distinct business logic | 2+ |
| Unrelated component trees | 3+ |
| Files across different feature areas | >15 |

IF ANY threshold exceeded → decompose before proceeding:

| # | Subtask | ~Files | Scope | Depends on |
|---|---------|--------|-------|------------|
| 1 | ... | ~N | features/... | — |

Shared foundation (API types, shared hooks) is implemented before subtask #1.

**Keep together (do NOT split):**
- Same UI element reused across contexts (button in modal AND detail view)
- Shared state/hook serving components of one feature
- Tightly coupled parent-child (list → list item → item actions)
- Visual consistency work (theme tokens, layout shell)

Ask user for execution mode:
- **Pipeline** — all subtasks sequentially, full verify each, summary at end
- **Step-by-step** — stop after each subtask for feedback
- **Skip** — proceed without decomposition

Each subtask runs the full pipeline (Phase 0 → 1 → 2 → 3 → 4) independently.

**Checkpoint:** TaskUpdate "Scope Check" → `completed` (or `skipped`). Log to pipeline-state.yaml.

### core.0.6: Approach discussion (brainstorm gate)

**Approach Discussion**: IF task involves architectural decisions (state management strategy, new shared pattern, component architecture, routing approach):
- **Decision cache:** Check `.claude/memory/dev-decisions.md` for relevant cached decisions. If found: "Using previously decided: {decision}. Override? [y/N]". If N → skip, use cached. If y → re-discuss.
- Present 2-3 options with trade-offs
- Wait for user choice before proceeding

**Checkpoint:** TaskUpdate "Brainstorm Gate" → `completed` (or `skipped`). Log to pipeline-state.yaml.

<!-- IF execution_mode_resolved == economy -->
> [Skipped: Brainstorm Gate] — economy mode. Design decisions are made automatically.
<!-- ENDIF -->

<!-- IF execution_mode_resolved == manual -->
> Brainstorm gate (~3K tokens). Execute or skip?
<!-- ENDIF -->

### core.0.7: Red flags scan

Load `references/red-flags.md` — if ANY red flag triggers during this task, STOP and ask user.

Red flags to watch for:
- RF-6: Creating >3 new files not in the original scope (scope creep)
- RF-7: Adding a dependency not mentioned in requirements (gold-plating)
- RF-8: Changing public API of existing code (breaking change risk)
- RF-9: Skipping tests because "too complex to test"
- RF-10: Implementing >1 approach "just in case" (YAGNI violation)
- RF-11: "Refactoring while we're here" for unrelated code (focus dilution)
- RF-12: Silent error handling (catch + ignore)
- RF-13: "Tests pass" but test count decreased
- RF-14: "All checks pass" without showing output
- RF-15: Commit message doesn't match actual changes

<!-- IF execution_mode_resolved == economy -->
> [Skipped: Red Flags] — economy mode. Scope creep not monitored.
<!-- ENDIF -->

<!-- IF execution_mode_resolved == manual -->
> Red flags scan (~1K tokens). Execute or skip?
<!-- ENDIF -->

### core.0.8: Session check

IF estimated scope > 20 files OR > 3 distinct subsystems → recommend saving checkpoint and starting fresh session for better generation quality (non-blocking — user can continue).

### git_conv.0.1: Branch safety check

If current branch matches a protected branch (main) → WARN and offer: create feature branch / continue / abort.

### core.0.9: Phase 0 checkpoint

**Checkpoint:** TaskUpdate Phase 0 → `completed`. Log to pipeline-state.yaml: insights, decisions, friction events collected.
