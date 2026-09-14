---
name: "source-command-dev"
description: "Start feature development using project-specific pipeline"
---

# source-command-dev

Use this skill when the user asks to run the migrated source command `dev`.

## Command Template

# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# /dev — Feature Development

Start developing a feature, bug fix, or refactoring task.

1. Load the `dev` skill — it contains the full pipeline
2. Use the task described in the user's request. If it is missing, ask one concise question.
3. Execute the pipeline from Phase 0 through Phase 4
4. If task is linked to a GitHub issue: update issue status after completion
