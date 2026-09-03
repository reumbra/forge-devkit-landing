#!/usr/bin/env python3
"""
Read-only client for the Google properties behind this landing page:
GA4 (behaviour, funnel) and Search Console (demand, ranking).

Authenticates with a service-account key using the OAuth2 JWT-bearer flow
directly, so it needs no google-auth dependency - only PyJWT and requests,
which are already present. The key never lives in this repo: pass its path in
GOOGLE_SA_KEY, default ~/.config/forge-analytics/ga-sa.json.

The `probe` subcommand is the one to run first, and it exists because the three
ways this setup fails are indistinguishable from each other in a normal error
message: the API is not enabled on the project, the service account was never
granted access to the property, or the property does not exist. Probe separates
them and says which, per surface, instead of returning one opaque 403.

Property ids are DISCOVERED, never passed in - GA4 account summaries and the
Search Console site list both enumerate exactly what this identity can read.
An id typed by hand is an id that can be wrong without erroring.

Usage:
  python3 scripts/google-api.py probe
  python3 scripts/google-api.py ga4-report --days 90 [--property 123456789]
  python3 scripts/google-api.py ga4-events --days 90
  python3 scripts/google-api.py gsc-queries --days 90 [--site https://forge.reumbra.com/]

Exit codes: 0 = every requested surface answered, 1 = bad args or missing key,
3 = a surface could not be read (the reason is printed, not swallowed).
"""

import argparse
import json
import os
import sys
import time
from datetime import date, timedelta

import jwt
import requests

TOKEN_URL = "https://oauth2.googleapis.com/token"
SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
]
DEFAULT_KEY = os.path.expanduser("~/.config/forge-analytics/ga-sa.json")

# Surfaces this tool reads. Each names the API that must be enabled on the
# project, so a SERVICE_DISABLED error can be turned into an instruction.
SURFACES = {
    "ga4-admin": ("analyticsadmin.googleapis.com", "Google Analytics Admin API"),
    "ga4-data": ("analyticsdata.googleapis.com", "Google Analytics Data API"),
    "gsc": ("searchconsole.googleapis.com", "Google Search Console API"),
}


def load_key(path):
    if not os.path.exists(path):
        sys.exit(f"Service account key not found: {path}\n"
                 f"Set GOOGLE_SA_KEY or place it at {DEFAULT_KEY}")
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def get_token(key):
    now = int(time.time())
    claim = {
        "iss": key["client_email"],
        "scope": " ".join(SCOPES),
        "aud": TOKEN_URL,
        "iat": now,
        "exp": now + 3600,
    }
    assertion = jwt.encode(claim, key["private_key"], algorithm="RS256")
    resp = requests.post(
        TOKEN_URL,
        data={"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
              "assertion": assertion},
        timeout=30,
    )
    if resp.status_code != 200:
        sys.exit(f"Token exchange failed ({resp.status_code}): {resp.text[:400]}")
    return resp.json()["access_token"]


def call(token, method, url, payload=None):
    """Return (ok, parsed_body_or_error_dict). Never raises on an HTTP error -
    the error body is the diagnosis, so it is returned rather than thrown."""
    headers = {"Authorization": f"Bearer {token}"}
    resp = requests.request(method, url, headers=headers, json=payload, timeout=60)
    try:
        body = resp.json()
    except ValueError:
        body = {"raw": resp.text[:500]}
    return resp.status_code == 200, body


def classify(body):
    """Turn a Google error body into the one sentence that says what to do."""
    err = body.get("error", {}) if isinstance(body, dict) else {}
    msg = err.get("message", "") if isinstance(err, dict) else str(err)
    status = err.get("status", "") if isinstance(err, dict) else ""
    details = json.dumps(err.get("details", []))[:600] if isinstance(err, dict) else ""
    if "SERVICE_DISABLED" in details or "has not been used in project" in msg:
        return "API_NOT_ENABLED", msg
    if status == "PERMISSION_DENIED" or "does not have sufficient permissions" in msg:
        return "NO_PROPERTY_ACCESS", msg
    if status == "UNAUTHENTICATED":
        return "BAD_CREDENTIALS", msg
    return status or "ERROR", msg


def cmd_probe(token, _args):
    """Report, per surface, which of the three failure modes is in play."""
    print("# Google access probe\n")
    problems = 0

    ok, body = call(token, "GET",
                    "https://analyticsadmin.googleapis.com/v1beta/accountSummaries")
    if ok:
        summaries = body.get("accountSummaries", [])
        props = [(p.get("property", ""), p.get("displayName", ""))
                 for s in summaries for p in s.get("propertySummaries", [])]
        if props:
            print(f"GA4        OK - {len(props)} property/properties visible:")
            for pid, name in props:
                print(f"             {pid}  {name}   (numeric id: {pid.split('/')[-1]})")
        else:
            problems += 1
            print("GA4        REACHABLE BUT EMPTY - the API answers, but this service "
                  "account is not\n           attached to any property. Add "
                  "it in GA4 Admin -> Property access management (Viewer).")
    else:
        problems += 1
        kind, msg = classify(body)
        print(f"GA4        {kind}: {msg[:220]}")
        if kind == "API_NOT_ENABLED":
            print(f"           Enable: {SURFACES['ga4-admin'][1]} + {SURFACES['ga4-data'][1]}")

    ok, body = call(token, "GET",
                    "https://www.googleapis.com/webmasters/v3/sites")
    if ok:
        sites = body.get("siteEntry", [])
        if sites:
            print(f"\nSearch Console  OK - {len(sites)} site(s):")
            for s in sites:
                print(f"                  {s.get('siteUrl')}   [{s.get('permissionLevel')}]")
        else:
            problems += 1
            print("\nSearch Console  REACHABLE BUT EMPTY - the API answers, but this "
                  "service account\n                  is not a user on any property. Add it in "
                  "Search Console ->\n                  Settings -> Users and permissions (Restricted).")
    else:
        problems += 1
        kind, msg = classify(body)
        print(f"\nSearch Console  {kind}: {msg[:220]}")
        if kind == "API_NOT_ENABLED":
            print(f"                  Enable: {SURFACES['gsc'][1]}")

    print(f"\n# {2 - problems} of 2 surfaces usable.")
    return 0 if problems == 0 else 3


def discover_property(token, explicit):
    if explicit:
        return explicit
    ok, body = call(token, "GET",
                    "https://analyticsadmin.googleapis.com/v1beta/accountSummaries")
    if not ok:
        kind, msg = classify(body)
        sys.exit(f"Cannot discover GA4 property ({kind}): {msg[:200]}")
    for s in body.get("accountSummaries", []):
        for p in s.get("propertySummaries", []):
            return p["property"].split("/")[-1]
    sys.exit("No GA4 property visible to this service account. Run `probe`.")


def discover_site(token, explicit):
    if explicit:
        return explicit
    ok, body = call(token, "GET", "https://www.googleapis.com/webmasters/v3/sites")
    if not ok:
        kind, msg = classify(body)
        sys.exit(f"Cannot discover Search Console site ({kind}): {msg[:200]}")
    sites = body.get("siteEntry", [])
    # Prefer the forge property when several are visible, rather than whichever
    # the API happened to list first.
    for s in sites:
        if "forge" in s.get("siteUrl", ""):
            return s["siteUrl"]
    if sites:
        return sites[0]["siteUrl"]
    sys.exit("No Search Console site visible to this service account. Run `probe`.")


def date_range(days):
    end = date.today()
    start = end - timedelta(days=days)
    return start.isoformat(), end.isoformat()


def table(rows, cols):
    if not rows:
        return "  (no rows)"
    widths = {c: max(len(c), *(len(str(r.get(c, "-"))) for r in rows)) for c in cols}
    out = ["  " + "  ".join(c.ljust(widths[c]) for c in cols),
           "  " + "  ".join("-" * widths[c] for c in cols)]
    out += ["  " + "  ".join(str(r.get(c, "-")).ljust(widths[c]) for c in cols) for r in rows]
    return "\n".join(out)


def ga4_run(token, prop, payload):
    ok, body = call(token, "POST",
                    f"https://analyticsdata.googleapis.com/v1beta/properties/{prop}:runReport",
                    payload)
    if not ok:
        kind, msg = classify(body)
        sys.exit(f"GA4 report failed ({kind}): {msg[:300]}")
    dims = [d["name"] for d in body.get("dimensionHeaders", [])]
    mets = [m["name"] for m in body.get("metricHeaders", [])]
    rows = []
    for r in body.get("rows", []):
        row = {}
        for i, d in enumerate(dims):
            row[d] = r["dimensionValues"][i]["value"]
        for i, m in enumerate(mets):
            row[m] = r["metricValues"][i]["value"]
        rows.append(row)
    return dims + mets, rows


def cmd_ga4_report(token, args):
    prop = discover_property(token, args.property)
    start, end = date_range(args.days)
    print(f"# GA4 property {prop}, {start} .. {end}\n")

    cols, rows = ga4_run(token, prop, {
        "dateRanges": [{"startDate": start, "endDate": end}],
        "dimensions": [{"name": "yearMonth"}],
        "metrics": [{"name": "sessions"}, {"name": "totalUsers"},
                    {"name": "newUsers"}, {"name": "screenPageViews"}],
        "orderBys": [{"dimension": {"dimensionName": "yearMonth"}}],
    })
    print("## Traffic by month")
    print(table(rows, cols), "\n")

    cols, rows = ga4_run(token, prop, {
        "dateRanges": [{"startDate": start, "endDate": end}],
        "dimensions": [{"name": "sessionDefaultChannelGroup"}],
        "metrics": [{"name": "sessions"}, {"name": "totalUsers"}],
        "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
        "limit": 25,
    })
    print("## Sessions by channel")
    print(table(rows, cols), "\n")

    cols, rows = ga4_run(token, prop, {
        "dateRanges": [{"startDate": start, "endDate": end}],
        "dimensions": [{"name": "pagePath"}],
        "metrics": [{"name": "screenPageViews"}, {"name": "totalUsers"}],
        "orderBys": [{"metric": {"metricName": "screenPageViews"}, "desc": True}],
        "limit": 25,
    })
    print("## Top pages")
    print(table(rows, cols))
    return 0


def cmd_ga4_events(token, args):
    """The funnel this landing page was instrumented for. Every step is printed,
    including the ones with zero rows - a step missing from the output would
    read as 'not measured', which is a different claim from 'nobody did it'."""
    prop = discover_property(token, args.property)
    start, end = date_range(args.days)
    print(f"# GA4 events, property {prop}, {start} .. {end}\n")
    cols, rows = ga4_run(token, prop, {
        "dateRanges": [{"startDate": start, "endDate": end}],
        "dimensions": [{"name": "eventName"}],
        "metrics": [{"name": "eventCount"}, {"name": "totalUsers"}],
        "orderBys": [{"metric": {"metricName": "eventCount"}, "desc": True}],
        "limit": 100,
    })
    print("## All events")
    print(table(rows, cols), "\n")

    funnel = ["section_view", "cta_click", "view_item", "select_item",
              "begin_checkout", "purchase"]
    seen = {r["eventName"]: r for r in rows}
    print("## Declared funnel (from src/shared/tracking/analytics.ts)")
    print(table([{"step": s,
                  "eventCount": seen.get(s, {}).get("eventCount", "0"),
                  "totalUsers": seen.get(s, {}).get("totalUsers", "0")}
                 for s in funnel], ["step", "eventCount", "totalUsers"]))
    return 0


def cmd_gsc_queries(token, args):
    site = discover_site(token, args.site)
    start, end = date_range(args.days)
    print(f"# Search Console {site}, {start} .. {end}\n")
    for dim, title in (("query", "Top queries"), ("page", "Top pages"),
                       ("country", "By country"), ("device", "By device")):
        ok, body = call(
            token, "POST",
            f"https://www.googleapis.com/webmasters/v3/sites/"
            f"{requests.utils.quote(site, safe='')}/searchAnalytics/query",
            {"startDate": start, "endDate": end, "dimensions": [dim],
             "rowLimit": 25},
        )
        if not ok:
            kind, msg = classify(body)
            print(f"## {title}\n  UNREADABLE ({kind}): {msg[:200]}\n")
            continue
        rows = [{dim: r["keys"][0],
                 "clicks": r["clicks"], "impressions": r["impressions"],
                 "ctr": f"{r['ctr'] * 100:.2f}%", "position": f"{r['position']:.1f}"}
                for r in body.get("rows", [])]
        print(f"## {title}")
        print(table(rows, [dim, "clicks", "impressions", "ctr", "position"]), "\n")
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--key", default=os.environ.get("GOOGLE_SA_KEY", DEFAULT_KEY))
    sub = ap.add_subparsers(dest="cmd", required=True)

    sub.add_parser("probe", help="which surfaces are usable, and why not")

    p = sub.add_parser("ga4-report", help="traffic, channels, top pages")
    p.add_argument("--days", type=int, default=90)
    p.add_argument("--property", default=None)

    p = sub.add_parser("ga4-events", help="event counts and the declared funnel")
    p.add_argument("--days", type=int, default=90)
    p.add_argument("--property", default=None)

    p = sub.add_parser("gsc-queries", help="queries, pages, countries, devices")
    p.add_argument("--days", type=int, default=90)
    p.add_argument("--site", default=None)

    args = ap.parse_args()
    token = get_token(load_key(args.key))
    handler = {"probe": cmd_probe, "ga4-report": cmd_ga4_report,
               "ga4-events": cmd_ga4_events, "gsc-queries": cmd_gsc_queries}[args.cmd]
    sys.exit(handler(token, args))


if __name__ == "__main__":
    main()
