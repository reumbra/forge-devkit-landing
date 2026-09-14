---
name: "source-command-forge-status"
description: "Show current project management state"
---

# source-command-forge-status

Use this skill when the user asks to run the migrated source command `forge-status`.

## Command Template

Read and display:
1. `.claude/forge/config.yaml` — active integrations
2. `.claude/forge/current-epic/state.yaml` — current work (if exists)
3. `.claude/forge/BACKLOG.md` — backlog items

Format as structured summary.
