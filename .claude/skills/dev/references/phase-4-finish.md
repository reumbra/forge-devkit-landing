# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Phase 4: Finish — forge-devkit-landing

### core.4.1: Completeness check

**Completeness check:** Verify all top-level TaskList tasks are `completed`. If any task is not completed → go back and complete it before summarizing.

Summarize completed work for the user.

**Summary:**
- Files created: {list with paths}
- Files modified: {list with paths}

**Verification results:**
- Build: {result}
- Lint: {result}

### core.4.2: Insights summary

**Insights collected:** (from pipeline-state.yaml)
- Insights: {count} — {brief list or "none"}
- Friction events: {count} — {brief list or "none"}
- Decisions: {count}

If insights and friction_events are empty: "No significant insights recorded this session"

### core.4.3: Persist insights to memory

For each insight collected during this pipeline run:
1. Classify: CONVENTION → `.claude/memory/dev-conventions.md`, PATTERN → `.claude/memory/dev-patterns.md`, DECISION → `.claude/memory/dev-decisions.md`
2. Deduplicate against existing memory entries (skip exact matches, merge semantic overlaps)
3. Append to appropriate file
4. Update `.claude/memory/MEMORY.md` summary if new category file created
5. Remove persisted insights from pipeline-state.yaml

### core.4.4: Persist conventions to memory

For CONVENTION-type insights only:
1. Append to `.claude/memory/dev-conventions.md`
2. Deduplicate against existing entries
3. Update `.claude/memory/MEMORY.md` summary if new file created

### core.4.5: Insights log (quality)

After memory persistence, append entries to `.claude/forge/insights-log.yaml`:
1. For each insight in pipeline-state.yaml `insights[]`: classify (CONVENTION/PATTERN per memory-protocol.md rules), append `{timestamp, task, category, summary, source: "pipeline_observation"}`
2. For each decision in `decisions[]`: append `{timestamp, task, category: "DECISION", summary: choice, source: "brainstorm_gate"}`
3. If file doesn't exist → create with `entries: []` header, then append
4. If entries count > 200 → trim oldest to keep 200

### core.4.6: Insights log (balanced)

Append CONVENTION and PATTERN entries only to `.claude/forge/insights-log.yaml` (same steps as quality, skip DECISION).

### core.4.13: Commit suggestion

Emoji-prefix commit: `{emoji} {concise summary of changes}`

### git_conv.4.1: Commit format validation

**Commit format:** Validate against emoji-prefix convention. Examples from recent history:
- `🔗 Locale-aware links + ru/privacy & ru/terms pages`
- `🌐 Wave 5: SEO meta tags, i18n keys, floating CTA fix`
- `📄 Wave 4: supporting pages — pricing widgets, comparison widgets`
- `🧩 Wave 3: extract module page widgets`
- `🏗️ Wave 2: multi-page infrastructure — routing, layouts, module & comparison configs`

### core.4.7: Friction feedback

Read `.claude/forge/analytics/friction-log.yaml`. Count events for this session.

If friction_count >= 3:
1. Show preview: plugin version, stack, event list (event_type + phase + brief)
2. User can edit/remove events, add comments, confirm or cancel
3. If confirmed → write JSON to `.claude/forge/analytics/payload.json`:
   ```json
   {
     "plugin_name": "forge-core",
     "plugin_version": "5.0.0",
     "stack": "Astro 5.7.0 + Tailwind CSS v4.1.0",
     "friction_events": [{"phase": "...", "event_type": "...", "brief": "..."}],
     "user_comments": "{optional user text}",
     "session_id": "{feature_slug}"
   }
   ```
4. Run `bash .claude/scripts/forge-feedback.sh .claude/forge/analytics/payload.json`

If friction_count < 3 → skip silently.

### worktree.4.1: Worktree finish

All work committed. Choose:
1. **Merge** into base branch + remove worktree
2. **Create PR** from worktree branch
3. **Keep** branch for later (report path for resume)

After choice: clean up `.claude/forge/worktree/worktree-session.yaml`.

### core.4.8: Next steps

**Next steps:**
- Review: areas requiring careful manual review

### core.4.9: Phase 4 checkpoint

**Checkpoint:** TaskUpdate Phase 4 → `completed`. Log final summary to pipeline-state.yaml.
