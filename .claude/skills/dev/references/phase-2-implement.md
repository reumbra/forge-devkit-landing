# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 2: Implement — forge-devkit-landing

### core.2.4: Dispatch parallel feature streams

Implement solutions that work for all valid inputs, not just test cases. Do not hard-code values or create solutions only for specific test inputs.

Dispatch feature-scoped agents in parallel (one per independent feature slice).

| Stream | Agent | Scope |
|--------|-------|-------|
| Feature 1 | `feature-worker` | `src/widgets/{feature_1}/` |
| Feature 2 | `feature-worker` | `src/widgets/{feature_2}/` |
| ... | `feature-worker` | `src/widgets/{feature_N}/` |

Each feature-worker operates within its widget/page boundary.
Can READ from `src/shared/` but NEVER write to it.
Shared layer changes must be done in the sequential path before dispatching.

For each area:
- Follow conventions from `references/contract-convention.md`
- Use Tailwind for all styling (no inline styles unless design system requires)
- All UI text lives in `src/shared/config/*.ts` — widgets read from configs, never hardcode copy
- Run verification after completing

Contract negotiation: 1 issue → continue, 2 → halt all, 3+ → sequential fallback.

Each stream writes report to `.claude/forge/{task}/streams/{feature}-report.md`.

### core.2.9: Phase 2 checkpoint

**Checkpoint:** TaskUpdate Phase 2 → `completed`. Log to pipeline-state.yaml.
