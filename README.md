# I Buy Hate

**An evidence-tiered investigation into who actually funds organized hate in the United
States — and what the money buys.**

This started with a small suspicion: that neo-Nazi merchandise money was trickling upward
into hate-based policy. The records showed something more endemic. The t-shirt sellers are
the poor end of a patronage economy. The money starts at the top — inherited banking
fortunes, anonymized billion-dollar funds — and flows *down*, through sworn filings, into
designated hate groups, into purpose-built "opposition," and into the coalition that wrote
Project 2025.

## How to read this site

Every claim carries an evidence tier:

- **Tier A — Documented**: a filing, a court record, a published roster, a Federal Register
  document, or the subject's own words. Click through and you land on paper.
- **Tier B — Reported**: investigative journalism, watchdog designations, peer-reviewed
  scholarship. Contestable, but sourced.
- **Tier C — Illustrative**: hypotheses, always drawn differently, always switchable off.

Nothing is ever promoted a tier to make the picture look better. Every wrong guess we made
is kept on the page, marked — that trail is how you can trust what we kept.

## The method, in brief

- **Pattern-on-records over transaction-tracing**: recurring grantor–grantee pairs across
  sworn filing years, revenue curves against documented events, purpose strings in the
  funders' own words. See [SOURCING.md](SOURCING.md).
- **Self-declaration is the premium evidence class**: catalogs, charters, manifestos,
  broadcasts. "How do we know? Because they said it out loud."
- **The SPLC is the floor, not the foundation**: the corroboration table runs every group
  through criteria owing nothing to any advocacy org — terrorist-entity listings by five
  allied governments, federal jury verdicts, interior-ministry bans.
- **Archive before you point**: every scrub-vulnerable citation is preserved; see
  [docs/ARCHIVES.md](docs/ARCHIVES.md). When a source is scrubbed after citation, the scrub
  is logged as evidence.

## Running locally

No build step, no dependencies, no server required — open `index.html` in a browser, or:

```
python -m http.server 8180
```

All data lives in `data/*.js` as plain object literals; everything the site renders comes
from there.

## Corrections

The site documents its own errors in public (see "What I got wrong" on the page). If you
find one we missed, open an issue with the primary source. Corrections that survive
verification get published with the same visibility as the claims they correct.
