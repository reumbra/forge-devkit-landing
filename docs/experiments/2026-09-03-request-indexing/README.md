# Does Google's refusal to index this site come from discovery or from valuation?

**Pre-registered 2026-09-03 at 23:36 EEST, before any result is known.** Nothing below may be
edited after the first check. Results go in a separate section at the bottom.

## Why this experiment exists

Google reports the homepage as `Crawled - currently not indexed` and has not returned since
2026-04-10. Two explanations survived a full adversarial pass and neither could be eliminated
by reading:

1. **Discovery.** Google cannot find or traverse the site. Evidence: URL Inspection over all
   60 sitemap URLs returned **51 unknown to Google, 9 crawled-not-indexed, 0 indexed**, and
   `referringUrls` on every page Google knows names **only the sitemap** and never another
   page of the site. The internal link graph did not exist as far as Google was concerned,
   because all 62 internal links used the unslashed form and 308-redirected. On top of that,
   every nonexistent URL returned HTTP 200 with the homepage, so the domain presented an
   unbounded surface of identical pages.
2. **Valuation.** Google can reach the site perfectly well and has decided it is not worth
   indexing. Google's own documentation for this status names **no cause at all** - it is a
   catch-all - so reading it as a low-authority signal is an interpretation the documentation
   does not license.

The two call for opposite next moves. Discovery is fixed by engineering, which is now done.
Valuation is fixed by the offer, the positioning and external links, none of which is touched
by anything shipped today.

## The intervention, completed before the request

All deployed and verified live on 2026-09-03 (commits `b66d15e`..`84b5f51`):

- `404.astro` added. Nonexistent URLs now return **404** instead of 200-with-homepage.
- 282 internal links across 57 files rewritten to the trailing-slash form. **Zero** internal
  links now redirect.
- `trailingSlash: "always"` and `build.format: "directory"` pinned.
- Sitemap 60 -> 56 URLs, the four noindex pages removed.
- Sitemap resubmitted through the Search Console API; Google downloaded it 1.7 seconds later,
  the first fetch since 2026-03-22.
- `robots.txt` no longer carries Cloudflare's injected block on AI crawlers.

Then, by hand in the Search Console UI (the API does not expose this action), **Request
Indexing** was submitted for three URLs:

| URL | Status at submission | Last crawled |
|---|---|---|
| `https://forge.reumbra.com/pricing/` | URL is unknown to Google | never |
| `https://forge.reumbra.com/` | Crawled - currently not indexed | 2026-04-10 |
| `https://forge.reumbra.com/modules/` | URL is unknown to Google | never |

`/pricing/` is the decisive one: it is the page carrying the checkout, the homepage links it
ten times, it has been in the sitemap since March, and Google has **never fetched it**.

## Pre-registered criteria

Check on **2026-09-10** (7 days). Re-run with:

```bash
cd ~/webstorm-projects/forge-devkit-landing
python3 - <<'PY'
import sys, requests
src=open("scripts/google-api.py",encoding="utf-8").read().replace('if __name__ == "__main__":\n    main()\n','')
g=type(sys)("g"); exec(compile(src,"google-api.py","exec"), g.__dict__)
t=g.get_token(g.load_key(g.DEFAULT_KEY))
for u in ["https://forge.reumbra.com/pricing/","https://forge.reumbra.com/","https://forge.reumbra.com/modules/"]:
    ok,body=g.call(t,"POST","https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
                   {"inspectionUrl":u,"siteUrl":"sc-domain:forge.reumbra.com"})
    r=body.get("inspectionResult",{}).get("indexStatusResult",{})
    print(u, "->", r.get("coverageState"), "| crawled:", r.get("lastCrawlTime","never"),
          "| referringUrls:", r.get("referringUrls","none"))
PY
```

The verdict is read off `/pricing/`, and the other two are corroboration:

| `/pricing/` reads | Verdict | What follows |
|---|---|---|
| **Submitted and indexed**, or any state containing "on Google" | **DISCOVERY** was the cause | The engineering was the fix. Continue with internal linking and expect the rest of the site to follow as Google re-crawls |
| **Crawled - currently not indexed** | **VALUATION** was the cause | Google fetched the checkout page on demand and declined it. Stop spending on technical SEO. The next moves are the public shopfront, the name collision, and external links |
| **URL is unknown to Google** still | **INCONCLUSIVE** | The request did not take effect. Re-check at 14 days. Do not interpret this as either verdict |

Two secondary readings, recorded now so they are not invented later:

- **`referringUrls` on the homepage.** If it still names only `sitemap-0.xml` after Google
  re-crawls, then the internal-link repair did not register and the discovery explanation is
  weakened even if `/pricing/` gets indexed.
- **`/modules/`.** It was submitted with identical status to `/pricing/` and differs only in
  being a hub page rather than the money page. If the two diverge, that difference is about
  the page and not about the site, and neither verdict above applies cleanly.

## What this experiment cannot settle

- **Whether anyone searches for this product.** Indexing is supply. No demand measurement
  exists, and none of these outcomes produces one.
- **Whether the pages deserve to rank.** Being indexed is not being ranked.
- **The soft-404's historical contribution.** Whether Googlebot ever fetched one of the
  unbounded 200-responses is unprovable from outside: URL Inspection returns "unknown" for
  such paths regardless.

## Blinding note for whoever checks this

The expected answer is written above, in `ai-marketplace/docs/VERIFY-LIST.md` (V-017), and in
the auto-injected memory index that reaches every subagent. Anyone dispatched to check this
must be briefed with: **"if a verdict or figure for this reached you by any channel, say so
before answering."** Three raters on an earlier study in this estate disclosed exactly that
contamination unprompted, which is the only reason it was caught.

## Results

*Empty by design. To be filled on 2026-09-10 or later, without editing anything above.*
