# Analytics baseline - 2026-09-03

First time GA4, the production database and Lemon Squeezy were read together. Every
figure below is a measurement with the command that produced it, not a recollection.
Re-run the commands rather than trusting the numbers: they are a snapshot of a
moving system.

## How to reproduce

```bash
# Landing behaviour (GA4). Service-account key at ~/.config/forge-analytics/ga-sa.json
python3 scripts/google-api.py ga4-report  --property 525437386 --days 400
python3 scripts/google-api.py ga4-events  --property 525437386 --days 400
python3 scripts/google-api.py probe                  # which surfaces are usable, and why not

# Product usage (production database) - in ../forge-devkit-api
DB=$(npx sst secret list --stage production | grep '^DatabaseUrl=' | cut -d= -f2-)
DATABASE_URL="$DB" npx tsx scripts/product-metrics.ts

# Revenue - Lemon Squeezy MCP (ls_list_orders, ls_list_subscriptions)
```

## 1. Traffic: 36 people, ever

GA4 property `525437386`. Data begins 2026-03; nothing before that exists.

| Month | Sessions | Users | New users | Pageviews |
|---|---|---|---|---|
| 2026-03 | 52 | 10 | 10 | 143 |
| 2026-04 | 27 | 10 | 8 | 86 |
| 2026-05 | 19 | 16 | 14 | 25 |
| 2026-06 | 17 | 2 | 2 | 14 |
| 2026-07 | 1 | 1 | 1 | 1 |
| 2026-08 | 6 | 1 | 1 | 3 |

**122 sessions and 36 unique users in six months.** `first_visit` fired 36 times,
which is the cleanest count of distinct humans the property holds.

## 2. Channels: organic search is 1.6% of all traffic

| Channel | Sessions | Users |
|---|---|---|
| Direct | 113 | 28 |
| Referral | 5 | 4 |
| Organic Search | **2** | 2 |
| Organic Social | 2 | 2 |

Two organic search sessions in the entire history of the site. This is the single
most important number in this document, because the site's *technical* SEO is
finished and scores 100/100: sitemap with 60 URLs, robots.txt, llms.txt, JSON-LD
for FAQPage / Organization / SoftwareApplication, canonical trailing-slash URLs.

The conclusion follows directly and is worth stating in full, because it is easy
to reach the opposite one: **technical SEO is not a demand problem and cannot fix
one.** Nothing in the audit checklist was skipped. There is simply no content, no
links, and no query the site could rank for that a free competitor
(`sangrokjung/claude-forge`) does not already occupy.

## 3. Funnel: the bottom converts, the top is empty

From `src/shared/tracking/analytics.ts`, all time:

| Step | Events | Users |
|---|---|---|
| `section_view` | 445 | 28 |
| `cta_click` | 23 | 9 |
| `view_item` (a pricing tier seen) | 131 | 17 |
| `select_item` (checkout link clicked) | 14 | **3** |
| `begin_checkout` | **0** | **0** |
| `purchase` | 0 | 0 |

Three people clicked through to checkout. One of them bought (Complete, EUR 149,
2026-04-09). **A one-in-three close rate at the bottom of the funnel is not a
conversion problem.** 28 of 36 visitors scrolled a section; 9 clicked a CTA.

### Defect: the last two steps are structurally blind

- `begin_checkout` reads 0 while `select_item` reads 14. The detector is a
  `MutationObserver` waiting for a Lemon Squeezy overlay; if the link navigates
  away instead of opening an overlay, nothing ever fires. **A step that cannot
  fire is indistinguishable in this table from a step nobody reached** - and the
  two call for opposite decisions.
- `purchase` can never fire: the transaction completes on Lemon Squeezy's domain.
  Closing this needs a server-side event from the webhook the API already
  receives, not more client-side tracking.

Filed as BL-057 and BL-058.

## 4. Product usage: reach peaked at 7 machines in April

From `forge-devkit-api/scripts/product-metrics.ts` against production.

| Month | Downloads | Distinct machines |
|---|---|---|
| 2026-03 | 407 | 6 |
| 2026-04 | 168 | **7** |
| 2026-05 | 110 | 3 |
| 2026-06 | 159 | 2 |
| 2026-07 | 82 | 1 |
| 2026-08 | 1170 | 3 |
| 2026-09 | 120 | 1 |

Ten machines activated in total. **One pinged in the last 7 days, three in 30, four
in 90.** The August download spike is publishing activity from this repository's
own machines, not adoption - distinct machines is the column to read, never the
download count.

The paying customer did activate his licence, so delivery and onboarding both
worked. The loss is entirely above the landing page.

### Defect: test webhooks write to the production licence table

Three `starter` licences with `source=lemonsqueezy`, zero activations, the most
recent created 2026-09-03. Lemon Squeezy has never processed a Starter order -
four orders exist in total, all Pro or Complete. These rows are test artifacts and
will corrupt any conversion metric computed from the licences table. Filed as
BL-059.

## 5. Revenue

Four orders, all time. Two are owner self-issues at 100% discount, one is a comped
Complete, and one is real: **EUR 178.80 gross (EUR 149 net), 2026-04-09**. Nothing
since 2026-04-23. The newsletter has four subscribers.

## What this changes

The plan before this measurement was "measure the funnel before spending on
traffic". The measurement says the opposite: the funnel converts at the bottom and
starves at the top. **Acquisition is the constraint; the landing page is not.**

## 6. Search Console: the site is not in Google's index

Access landed the same day, and Google backfilled the full history - data begins
2026-03-06, so this is not a short window.

| Month | Clicks | Impressions |
|---|---|---|
| 2026-03 | 1 | 16 |
| 2026-04 | 2 | 10 |
| 2026-05 | 0 | **0** |
| 2026-06 | 0 | **0** |
| 2026-07 | 0 | **0** |
| 2026-08 | 0 | **0** |
| 2026-09 | 0 | **0** |

**26 impressions and 3 clicks, all time. Zero impressions since 2026-05-01.**
The query dimension returns no rows at all: at this volume every query sits below
Google's anonymisation threshold.

Average position across the pages that did appear is **2.8** - when Google showed
the site, it ranked in the top three. So this is not a ranking problem.

### URL Inspection - the actual cause

| URL | Coverage | Last crawled | robots | fetch |
|---|---|---|---|---|
| `/` | **Crawled - currently not indexed** | 2026-04-10 | ALLOWED | SUCCESSFUL |
| `/pricing/` | **URL is unknown to Google** | never | - | - |
| `/vs/cursor-rules/` | **Crawled - currently not indexed** | 2026-05-21 | ALLOWED | SUCCESSFUL |

Nothing is blocking anything. `robotsTxtState: ALLOWED`, `indexingState:
INDEXING_ALLOWED`, `pageFetchState: SUCCESSFUL`, canonical resolves to itself.
Google fetched the homepage successfully and **chose not to index it**, then stopped
coming back. The pricing page - the page that carries the checkout - has never been
crawled at all, despite sitting in the sitemap since March.

Sitemap status: submitted 2026-03-07, **last downloaded by Google 2026-03-22**, zero
errors, zero warnings. It is not broken; it is ignored.

This is the ordinary fate of a young domain with no external links. It is not fixed
by anything on the SEO checklist, because every item on that checklist is already
done. It is fixed by other sites linking to this one.

## 7. npm - the CLI is current, and the domain in it does not exist

`@reumbra/forge`: published `0.4.4`, and **the local source is also 0.4.4 with no diff in
`src/` or `package.json`**. The one commit sitting past the tag touches `CLAUDE.md` and
`docs/DEPLOY.md` only. `npx @reumbra/forge@0.4.4 --version` runs, and the CLI points at
`api.reumbra.com/velvet`, which is the live API. **There is nothing to publish and no stale
install path.** The publish token had expired (401) and has been replaced; access is
`read-write` on `@reumbra/forge`.

What the check did find is worse than a stale version. The CLI references **`reumbra.dev`**,
a domain with no A, MX or NS record on either 8.8.8.8 or 1.1.1.1, and which RDAP reports as
**not registered at all** - `google.dev` through the identical query path returns a
registered record, so this is the domain and not the instrument. The live site is
`forge.reumbra.com`; `reumbra.dev` was apparently planned and never bought.

It appears in two places a person or a mail server follows: the renewal link shown to a
customer whose licence expired (`activate.ts`), and `support@reumbra.dev`, written into
every user's `known_marketplaces.json` (`marketplace.ts`). Plus the `homepage` of nine
published Lumina plugins. Filed as **BL-271** in `ai-marketplace`.

## 8. Cloudflare - it counts bots, and at this volume bots are all there is

The zone token reads. On 2026-09-02, `forge.reumbra.com` took **902 requests, 769 of them
HTML** - against GA4's 6 sessions for the whole of August. That gap is not the cookie
banner.

| Country | Requests | Share |
|---|---|---|
| Chile | 538 | **59.6%** |
| United States | 152 | 16.9% |
| Singapore | 83 | 9.2% |
| Netherlands | 77 | 8.5% |

A product with 36 lifetime users and no Chilean customer does not take 59.6% of a day's
traffic from Chile, and Singapore plus Netherlands is a datacentre signature. 78% of it
reports itself as Chrome, which is what headless scrapers report.

**So Cloudflare cannot size the consent blind spot at this traffic level** - the automated
floor is roughly two orders of magnitude above the human signal, and zone analytics has no
way to separate them on this plan (`botScoreSrcName` is a Bot Management field and is not
available). The instrument that would work is the **Web Analytics RUM beacon**, which only
fires in a real browser executing JavaScript. It is account-scoped, and this token carries
Zone Analytics only - the accounts endpoint returns zero rows. Adding
**Account -> Account Analytics -> Read** would close it.

## Revised conclusion

Three independent measurements now say the same thing, and none of them points at
the landing page:

1. GA4 - 36 humans in six months, 1.6% of sessions from search.
2. Search Console - not in the index; 0 impressions for four months.
3. Cloudflare - a day's raw traffic is 59.6% Chilean and 78% self-reported Chrome; the
   human signal is not visible above the automated floor.

The funnel converts one in three at the bottom. **Acquisition and discoverability are
the constraint. Every remaining CRO, copy and technical-SEO item is optimisation of a
surface almost nobody reaches.**

## Still unmeasured

- **Backlink profile** - no source connected. The index diagnosis above points
  straight at external links, and nothing here can currently count them. Ahrefs
  Webmaster Tools is free and binds to the verified Search Console property.
- **Bing / IndexNow** - unmeasured, and it matters more than its market share
  suggests: Bing's index feeds ChatGPT search. Being absent from Google does not
  imply being absent from Bing, and nobody has looked.
- **Cloudflare Web Analytics** - already injected by Pages (beacon token present in
  the live HTML, absent from this repo's source), so consent-independent traffic
  exists but needs a Cloudflare API token to read. It is the only source that can
  size how much the cookie banner hides from GA4.
