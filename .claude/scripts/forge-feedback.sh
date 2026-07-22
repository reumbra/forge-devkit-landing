#!/usr/bin/env bash
# Managed by forge-core v5.0.0 — /forge:patch for tracked changes
# Direct edits work but may need manual reconciliation on upgrade
# After plugin removal, this file is fully yours
# forge-feedback.sh — Submit friction feedback via Forge API
# Usage: bash .claude/scripts/forge-feedback.sh <payload.json>
set -euo pipefail

PAYLOAD_FILE="${1:?Usage: forge-feedback.sh <payload.json>}"
HISTORY=".claude/forge/analytics/feedback-history.yaml"
# Forge CLI config moved to the OS-standard dir in CLI v0.4.4, which also removes the
# legacy ~/.forge after migrating. Resolve the current location first (BL-098).
case "$(uname -s)" in
  Darwin) FORGE_CONFIG_DIR="$HOME/Library/Application Support/forge-devkit" ;;
  MINGW*|MSYS*|CYGWIN*) FORGE_CONFIG_DIR="${APPDATA:-$HOME/AppData/Roaming}/forge-devkit" ;;
  *) FORGE_CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/forge-devkit" ;;
esac
FORGE_CONFIG="$FORGE_CONFIG_DIR/config.json"
[[ -f "$FORGE_CONFIG" ]] || FORGE_CONFIG="$HOME/.forge/config.json"

[[ -f "$PAYLOAD_FILE" ]] || { echo "Payload file not found: $PAYLOAD_FILE"; exit 1; }

# Read license credentials + API URL from Forge CLI config
if [[ ! -f "$FORGE_CONFIG" ]]; then
  echo "Forge CLI not configured (no config.json in $FORGE_CONFIG_DIR or ~/.forge). Run 'forge activate' first."
  exit 1
fi

LICENSE_KEY=$(grep -o '"license_key"[[:space:]]*:[[:space:]]*"[^"]*"' "$FORGE_CONFIG" | head -1 | sed 's/.*: *"//' | sed 's/"$//')
MACHINE_ID=$(grep -o '"machine_id"[[:space:]]*:[[:space:]]*"[^"]*"' "$FORGE_CONFIG" | head -1 | sed 's/.*: *"//' | sed 's/"$//')
BASE_URL=$(grep -o '"api_url"[[:space:]]*:[[:space:]]*"[^"]*"' "$FORGE_CONFIG" | head -1 | sed 's/.*: *"//' | sed 's/"$//')
API_URL="${BASE_URL:-https://api.reumbra.com/velvet}/feedback"

if [[ -z "$LICENSE_KEY" || "$LICENSE_KEY" == "null" ]]; then
  echo "No license key found. Run 'forge activate' first."
  exit 1
fi

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -H "x-license-key: $LICENSE_KEY" \
  -H "x-machine-id: $MACHINE_ID" \
  -d @"$PAYLOAD_FILE" 2>/dev/null || echo "000")

case "$HTTP_CODE" in
  201) echo "Feedback submitted successfully"; rm -f "$PAYLOAD_FILE" ;;
  409) echo "Feedback already submitted for this session"; rm -f "$PAYLOAD_FILE" ;;
  429) echo "Rate limited — try again later (payload preserved for retry)" ;;
  000) echo "Network error — feedback not sent (payload preserved for retry)" ;;
  *)   echo "Unexpected response ($HTTP_CODE) — payload preserved for retry" ;;
esac

TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "- submitted: \"$TIMESTAMP\"" >> "$HISTORY"
echo "  status: \"$HTTP_CODE\"" >> "$HISTORY"
