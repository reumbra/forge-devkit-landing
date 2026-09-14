# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 3: Verify — forge-devkit-landing

### core.3.0: Parallel stream sync

When running multiple verification commands (build, lint), make all independent calls in parallel.

**Phase 3a — Collect + Verify:**
1. Read all feature stream reports
2. Integrate features into widgets and pages (sequential):
   - **Widgets** (`src/widgets/`): Assemble feature outputs into composite blocks
   - **Pages** (`src/pages/`): Wire features into page layout
3. Check for contract issues
4. Resolve conflicts (if any)
5. Build: `pnpm build`

### core.3.0.1: Pre-verify self-check (parallel)

<!-- IF execution_mode_resolved == economy -->
**Pre-Verify (economy):** Build (`pnpm build`) + naming conventions only.
> [Skipped: Detailed Self-Review] — economy mode. Only build and naming, no layer-specific checks.
<!-- ELSE IF execution_mode_resolved == manual -->
> Full self-review: layer-specific checklist (~4K tokens). Execute fully or build-only?
<!-- ENDIF -->

Before moving to Phase 3, assess: did implementation fully address the task? Were any shortcuts taken that need revisiting?

Self-review checklist:
- [ ] All new files follow naming conventions
- [ ] No layer boundary violations (widgets importing other widgets, pages in shared/)
- [ ] No hardcoded text in widgets (all copy through config or i18n)
- [ ] No TODO/FIXME without explanation

If any issue found → fix before proceeding.

**Checkpoint:** TaskUpdate "Self-Review" → `completed`.

### core.3.1: Lint (parallel quality)

**Phase 3b — Quality + Insights:**
Lint: `pnpm lint`

### core.3.2: Tests (parallel quality)

Tests: no test runner configured. Skip test step.

### core.3.4: Quality gates (parallel)

Quality gates: check `references/quality-gates.md`
Process insights from stream reports.

### core.3.9: Phase 3 checkpoint

**Checkpoint:** TaskUpdate Phase 3 → `completed`. Log to pipeline-state.yaml.
