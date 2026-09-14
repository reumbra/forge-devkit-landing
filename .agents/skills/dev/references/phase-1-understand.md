# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 1: Understand + Design — forge-devkit-landing

### core.1.1: Read task requirements

Never speculate about code you have not read. Before making claims about project structure, read the actual files. If referenced files don't exist, say so — don't assume contents.

When reading multiple files or running multiple checks, make all independent tool calls in parallel.

Read task requirements.

### core.1.2: Identify affected layers

Identify affected features and shared dependencies — if only 1 feature, fall back to sequential.

Layers in this project:
- **Pages** (`src/pages/`): Astro pages that assemble widgets
- **Widgets** (`src/widgets/`): composite blocks built from shared/ui
- **Shared** (`src/shared/`): design system + utilities (ui/, lib/, config/, i18n/)
- **Layouts** (`src/layouts/`): Base layout (html, head, fonts, meta)

Note which layers are affected — this determines parallel stream boundaries.

### core.1.3: Schema changes

If new data flow needed:
- Plan state management approach (none — static site, no client state)
- Define API contract if backend call needed (LemonSqueezy checkout overlay)
- Define TypeScript types / interfaces for data models

### core.1.4: Create skeleton contracts

Create skeleton contracts:
- API types and interfaces for data fetching
- Shared component props interfaces
- Config data shape definitions
- Save to `.claude/forge/{task}/contracts.md`

Implement shared foundations first (sequential):
- **Shared** (`src/shared/`): New UI kit components, API functions, utilities
- **Layouts** (`src/layouts/`): Layout changes if needed

### core.1.5: Present contracts for approval

Present contracts + shared foundations to user for approval.

### core.1.9: Phase 1 checkpoint

**Checkpoint:** TaskUpdate Phase 1 → `completed`. Log to pipeline-state.yaml.
