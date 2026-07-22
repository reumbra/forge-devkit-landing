# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 0 — Few-Shot Filtering Examples

## Example 1: Economy + Bug Fix

**Input:** mode=economy, type=bug-fix
**Filtered steps:**
- core.0.1: Read task description
- core.0.2: Execution mode resolution
- core.0.3: Create task tree (5 tasks)
- core.0.5: Scope check
- core.0.8: Session check
- git_conv.0.1: Branch safety check
- core.0.9: Phase 0 checkpoint
- core.1.1: Read task requirements
- core.1.2: Identify affected layers
- core.1.9: Phase 1 checkpoint
- core.2.4: Dispatch parallel feature streams
- core.2.9: Phase 2 checkpoint
- core.3.0: Parallel stream sync
- core.3.0.1: Pre-verify self-check
- core.3.9: Phase 3 checkpoint
- core.4.1: Completeness check
- core.4.13: Commit suggestion
- git_conv.4.1: Commit format validation
- core.4.7: Friction feedback
- core.4.8: Next steps
- core.4.9: Phase 4 checkpoint

**Skipped:** core.0.4 (memory load), core.0.6 (brainstorm), core.0.7 (red flags), core.3.1-3.4 (quality gates), core.4.3-4.6 (insight persistence), worktree.4.1 (worktree finish — optional)

## Example 2: Balanced + New Feature

**Input:** mode=balanced, type=new-feature
**Filtered steps:** All `[all]` + `[balanced]` + `[balanced:non-routine]` steps
- Full Phase 0 including memory load, brainstorm gate (if non-routine), red flags
- Full Phase 1 with contracts
- Phase 2 with parallel dispatch
- Phase 3: stream sync + self-check (lint/tests via pre-verify)
- Phase 4: completeness + insights + convention persistence + commit + friction feedback

**Skipped:** core.3.1-3.4 (quality-only gates), core.4.3 (full insight persist — quality only), core.4.5 (quality insights log)

## Example 3: Quality + New Feature

**Input:** mode=quality, type=new-feature
**Filtered steps:** All steps except economy-only exclusions
- Full Phase 0 with brainstorm gate, red flags, memory load
- Full Phase 1 with contracts and approval
- Phase 2 with parallel dispatch
- Phase 3: full quality — stream sync + self-check + lint + tests + quality gates
- Phase 4: full — completeness + full insight persistence + insights log + commit + friction + worktree finish

**Skipped:** core.4.4 (balanced-only convention persist), core.4.6 (balanced-only insights log)
