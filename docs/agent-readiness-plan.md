# Agent-readiness: 16 recommendations, triaged

Source: Cloudflare's agent-readiness recommendations, validated by the scanner at
`isitagentready.com/api/scan`. Captured 2026-09-03.

**Read the blocker first.** Everything below is unactionable until it is fixed, and acting on
any of it before then produces a result that cannot be trusted.

## Blocker: the scanner cannot measure this site

Every one of these standards is validated by fetching a `.well-known` URL and checking the
response. Measured 2026-09-03:

```
/.well-known/api-catalog                       200 text/html 179161b
/.well-known/agent-card.json                   200 text/html 179161b
/.well-known/mcp/server-card.json              200 text/html 179161b
/.well-known/agent-skills/index.json           200 text/html 179161b
/.well-known/oauth-protected-resource          200 text/html 179161b
/.well-known/openid-configuration              200 text/html 179161b
/auth.md                                       200 text/html 180099b
/.well-known/http-message-signatures-directory 200 text/html 179161b
```

Every one of those is the homepage. There is no `src/pages/404.astro`, so the build emits no
`dist/404.html` and Cloudflare Pages serves `index.html` for any unmatched route, with a 200.

**A scan run today measures nothing.** A `fail` cannot be distinguished from a missing file,
and a check that tests only for reachability would report a false `pass`. This already cost
something real: a fix in this same session replaced a dead-domain link with
`https://forge.reumbra.com/blog/`, verified it by checking for a 200, and shipped a link to a
page that does not exist.

**Fix `404.astro` before scanning, before implementing, before believing any result.**

## Triage

Ranked by whether the item can plausibly change an outcome for this product, not by effort.

### Tier 1 - on strategy, do it

| Item | Why it fits |
|---|---|
| **Agent Skills Discovery Index** `/.well-known/agent-skills/index.json` | Forge *is* skills. This is a discovery standard for exactly the artifact this product sells, and it is the machine-readable half of the public-shopfront idea: a listing an agent can read, with the artifacts still license-gated. Open question to settle first: the spec wants a fetchable `url` plus a SHA-256 `digest` per skill, which sits awkwardly with paid artifacts. Decide what the public surface is before writing the file. |

### Tier 2 - cheap and defensible

| Item | Note |
|---|---|
| **MCP Server Card** `/.well-known/mcp/server-card.json` | A real MCP server already exists at `api.reumbra.com/velvet/mcp`. Publishing a card for it is honest and costs one static file. It serves licensed users, so scope the card to what a stranger may see. |
| **Link response headers** | Only the `describedby` relation is worth having, pointing at `llms.txt`. The `api-catalog` relation depends on an API catalog that should not exist here (below). Add via Cloudflare Transform Rules, no origin change. |

### Tier 3 - aligned but early, park with a re-check date

| Item | Note |
|---|---|
| **WebMCP** `navigator.modelContext.registerTool()` | Genuinely on-thesis: an agent in the browser could query the module catalogue or a plan's contents. Chrome early-preview only, so reach is near zero today. Re-check when it leaves preview. |
| **ACP** `/.well-known/acp.json` | Describes a commerce surface without replacing checkout, unlike the rest of the payment set. The only one of the five worth revisiting. |

### Tier 4 - not applicable to this product

| Item | Why not |
|---|---|
| API Catalog (RFC 9727) | This is a static marketing site. The API is `api.reumbra.com`, licence-gated by design; publishing a catalogue for it invites probing and offers nothing. |
| OAuth/OIDC discovery, OAuth Protected Resource Metadata | There is no OAuth. Licensing is a key in a header. |
| Auth.md agent registration | Agents do not register with this service. |
| A2A Agent Card | This product is not an agent. |
| Web Bot Auth | This is for identifying requests *we* send. We send none. |
| DNS-AID | Requires DNSSEC-signed `_agents` records for an experiment with no adoption. |

### Tier 4b - the payment protocols, blocked on a business fact rather than effort

**x402, MPP, UCP, AP2** all route payment away from the current checkout. Lemon Squeezy is the
**merchant of record** here, and that is not a convenience: the one real order shows
`tax_name: VAT, tax_rate: 20.00` collected and remitted by them. Any agent-native payment path
that bypasses Lemon Squeezy makes Reumbra the merchant of record, which is an EU VAT and
compliance change, not a technical one.

That decision is worth making deliberately some day. It is not worth making because a scanner
reported a `fail`.

## The pattern worth naming

This is the second 20-plus-item checklist to arrive today, after Ahrefs' 27 site-audit issues.
In both, most items describe a well-formed site rather than a discoverable one, and acting on
the list top-to-bottom would consume weeks while the measured constraint - 36 visitors in six
months, not in Google's index - goes untouched.

**One item here is on strategy. Two are cheap. Thirteen are not for this product.** A checklist
is evidence about the checklist's author, not about this site.

## Order

1. `404.astro` - unblocks measurement for everything above, and is independently the strongest
   candidate cause of the indexing verdict.
2. Re-run the scanner, and only then treat any result as information.
3. Decide the public shopfront surface, then write the Agent Skills index against that decision.
4. MCP server card and the `describedby` Link header.
5. Re-check WebMCP and ACP later; leave the rest.
