# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours

# Quality Gates — forge-devkit-landing

## Required Checks (must pass)

| Check | Command | Severity |
|-------|---------|----------|
| Build | `pnpm build` | required |
| Lint | `pnpm lint` | required |
| Secret scan | Manual review — no secrets in committed code | required |
| Env safety | No `.env` files committed, no hardcoded API keys | required |

## Recommended Checks (should pass)

| Check | Command | Severity |
|-------|---------|----------|
| Accessibility | Manual a11y review (alt text, ARIA, keyboard nav) | recommended |
| Dependency audit | `pnpm audit` | recommended |
| Lockfile | `pnpm-lock.yaml` in sync with package.json | recommended |

## Verification Flow

1. Run required checks first — ALL must pass before proceeding
2. Run recommended checks — report results, don't block on warnings
3. If any required check fails → fix before commit
4. If recommended check fails → report, suggest fix, continue

## Build Verification

```bash
pnpm build
```

Expected: clean build to `dist/` with no errors. Warnings are acceptable but should be reviewed.

## Lint Verification

```bash
pnpm lint
```

Expected: Biome check passes. Auto-fixable issues can be resolved with `pnpm lint:fix`.
