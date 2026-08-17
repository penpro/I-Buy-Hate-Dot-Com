# SOURCING.md — the editorial standard

Read this before adding a single claim to `data/network.js`.

> ## ⚠ The thesis changed on 2026-08-16
>
> Research done for this project **refuted its original premise**. Extremist merchandise revenue
> does not flow upward into establishment policy organizations:
>
> - SPLC's Patriot Front profile documents merch revenue flowing **inward from members** —
>   mandatory purchases from the founder at inflated prices, described as quasi-pyramid. Not an
>   outward retail business, and no unwitting mainstream customer.
> - The scale gap is roughly **three orders of magnitude**. ADL calls these movements
>   "particularly poorly funded," with figures in the thousands. Heritage's 2023 revenue was
>   ~$134M.
>
> **The pipeline is real but it is not financial.** It runs on language, personnel and
> legitimacy — what the communication literature calls *information laundering*. Money is the
> wrong tracer. Do not restore the upward-money framing; it was tested and it failed. Full
> write-up in `data/assessment.js` (AF-1, AF-2, AF-7) and rendered on the site.

This project makes an argument about real, named, litigious organizations. The argument is
strong *because* it is careful. Every shortcut taken here converts a defensible finding into a
dismissible one, and hands the other side a reason to ignore the parts that are simply true.

---

## 1. The tier rules

| Tier | Means | Test |
|---|---|---|
| **A — Documented** | Primary source. A filing, a 990, a court record, a published roster, a Federal Register entry, or **the subject's own published words**. | Can a hostile reader click your citation and land on paper that says this? If no, it is not tier A. |
| **B — Reported** | Credible investigative journalism, leaked datasets, watchdog designations. | Is it attributed to a named outlet or organization, with a date? Two independent sources for anything contested. |
| **C — Illustrative** | A structure that is plausible and instructive but **not evidenced for the specific parties shown**. | Does the prose itself — not just the styling — tell the reader this is hypothetical? |

**Never promote a tier to make the diagram look better.** The diagram is not the product. The
sourcing is the product; the diagram is how you read it.

### The self-declaration rule
The strongest evidence class available to this project is not a watchdog designation — it is the
subject's own storefront, catalog, manifesto, or podcast. Designations get argued about.
Product listings do not. **When you can quote the subject, quote the subject.**

### The designation rule
Always write "designated by SPLC as…", never "is a hate group". SPLC is an advocacy organization,
its designations are contested by the organizations named, and they are not legal findings. This
is stated in the site footer and must stay there. Characterizing your evidence accurately is not
a weakness — it removes the only easy counterargument a hostile reader has.

---

## 2. Capture discipline

Everything on the far right of this diagram is public today and may be gone tomorrow. The
Project 2025 website has already changed repeatedly.

1. **Archive before you cite.** `archive.today` and the Wayback Machine. Save the archive URL
   into the `url` field, and keep the live URL in `note`. **Every archive lands in
   `docs/ARCHIVES.md` in the same session** — that file is the receipt vault, and prefers
   the OLDEST clean snapshot (contemporaneous beats fresh: Rufo's thread was archived the
   day after posting, five years before this project existed — fabrication claims are dead
   on arrival).
2. **Screenshot with the URL bar and system clock visible.** Store under `docs/captures/`
   with a filename of `YYYY-MM-DD_entity_what.png`.
3. **Download PDFs locally.** Mandate for Leadership belongs in `docs/` in this repo, not as a
   hotlink. Cite it by page number.
4. **Record the date you checked**, not just the date of the document.

---

## 3. The `verify: true` queue

Any citation carrying `verify: true` was drafted from general knowledge and has **not** been
confirmed against the live source. It renders on the site as an amber
*"Unverified — check source"* badge, on purpose, so the gap is visible rather than hidden.

**Clear the queue in this order** — cheapest and highest-value first:

### Tier 1 — DONE (2026-08-16)
- [x] **Mandate for Leadership (2023) PDF located and read.** `static.heritage.org`, 920pp,
      ISBN 978-0-89195-174-2, PDF produced 2023-07-11. The `project2025.org` URLs previously used
      across the site were placeholders and have been replaced.
- [x] **Full advisory board roster transcribed** into `data/roster.js` — extracted from the PDF's
      own text layer (pages xi–xii / PDF pages 11–12), not retyped from reporting.
- [x] **Roster joined against SPLC designations.** Result: **4 of 54**. ADF, FRC, CIS, C-Fam.
- [x] **"100+" corrected to 54.** That figure refers to Heritage's separate coalition-partners
      roster, grown by press release after the book printed. AFA, Liberty Counsel and Moms for
      Liberty are *not* on the printed board despite constant reporting to the contrary.
- [x] **990s pulled via ProPublica API, 2026-08-16** — all five orgs, by EIN, full series in
      `data/primary.js` (ledger section) and CORKBOARD.md. The ~$134M Heritage figure was
      aggregator noise; corrected to FY2022 $106.3M with the correction logged on-site.
- [ ] **Next 990 dig (corkboard P-11):** DonorsTrust Schedule I from the e-filed 990 XML,
      FY2018–23, filtered to the designated orgs + Heritage. Recurring pairs = the pattern
      claim. The API JSON does not contain grant-level rows; the XML does.
- [ ] **Corkboard P-02:** explain DonorsTrust's anomalous $1.09B FY2021 revenue year
      (Part VIII composition on the filing PDF).
- [ ] **Corkboard P-04:** reconcile FRC church status with its continuing 990s before
      restoring any disclosure-reduction claim.
- [ ] **Corkboard P-12:** quote-chase ledger — trace each SPLC-reproduced quote to its
      original publication and archive it.
- [ ] **URGENT ARCHIVE (P-15):** the Rufo thread at
      x.com/realchrisrufo/status/1371541044592996352 — live primary carrying H4; the most
      scrub-vulnerable citation on the site. archive.today it before any public share.
- [x] **Corkboard P-11/P-17: DonorsTrust Schedule I — DONE 2026-08-16.** Cell-level grant rows
      to all four designated orgs, FY2022–24, extracted via ProPublica's full-text viewer in
      real Chrome (claude-in-chrome). Method is now standard; see P-17 for the table and
      object IDs. Continuation pages beyond p.0 still unchecked — "n/f p.0" cells are open.
- [x] **Corkboard P-13: Colcom Part XV — DONE 2026-08-16.** Cell-verified: TY2023 grants of
      $1.975M to CIS (≈2/3 of its revenue), $2.6M to FAIR, $2.3M to IRLI, $2.87M to
      NumbersUSA. H2 is now fully ★★★.
- [x] **Corkboard P-18: both-flanks sweep — DONE 2026-08-16.** Colcom funded PFIR (the
      greenwashing left-flank front) in five consecutive filings, under two names — rename to
      "Institute for Sound Public Policy" caught mid-transition in TY2020 with identical
      purpose strings. Up to ~74% of recipient revenue; recipient now winding down as the
      patron tapers. On-site in the pattern-table section.
- [ ] **Archive SPLC's *Greenwash* PDF** (currently verify-flagged) — the tier-B anchor for
      PFIR's characterization; the grants themselves are tier A regardless.
- [x] **Verify sweep on the groups table — RUN 2026-08-16** (corkboard P-19 branches for the
      full log). Confirmed at the primary: Canada Feb 3 2021 listing (canada.ca verbatim), UK
      Home Office proscriptions ×6, Germany BMI Hammerskins ban, RIM SDGT via Federal
      Register 2020-07835, NZ TSA s.22 designations, FBI definition verbatim, Sines v.
      Kessler's full arc incl. Fourth Circuit 3–0 affirmance (2024), Fischer May 2010 verbatim
      (Media Matters + RWW audio), Ruse March 2014 (apology live on C-Fam's own site). ~14
      verify flags cleared; National Action added as row 50.
- [ ] **Still open from the sweep:** Fuentes Piers Morgan clip archive (Dec 2025) — top
      scrub-risk; US v. Nordean docket citations; Australia listing pages; Krikorian quote.
- [ ] **Corkboard P-14:** archive the Mother Jones Bannon interview (canonical URL) and the
      NBC Mercer-divestiture piece.
- [ ] **NYT Colcom investigation (2019):** confirm exact URL/date; currently verify-flagged.

### Tier 2 — the citation trace (highest persuasive value per hour spent)
- [ ] **Pick one CIS statistic.** Follow it: study → wire-service citation (designation dropped)
      → Mandate chapter → proposed rule. Screenshot all four hops. This demonstrates epistemic
      laundering with zero speculation and it is the most persuasive artifact available.
- [ ] **Schedule F side-by-side.** Mandate page number next to the Federal Register document
      number for the October 2020 executive order and its January 2021 rescission.
- [ ] **Chapter → author → employer table** for Mandate for Leadership into `data/authors.js`.

### Tier 3 — the commerce layer (harder; do not publish thin)
- [ ] **Antelope Hill catalog capture.** A timestamped screenshot of a public catalog listing
      Third Reich source texts. This is the answer to "how do you know", and it is a primary
      source. Do this before anything else in this tier.
- [ ] **Patriot Front / Will2Rise:** identify which specific Unicorn Riot documents describe
      merchandise and dues as funding. Cite the document, not the summary.
- [ ] **Resistance Records / National Alliance:** pin two specific citations from the extremism
      literature. Well covered; no excuse for vagueness.
- [ ] **December 2020 crypto transfer:** get the original blockchain analysis, not the
      second-hand write-ups.
- [ ] **GiveSendGo 2021 leak:** confirm outlets and dates. **Do not publish individual donor
      names** — see §5.

---

## 4. Promoting a tier-C link to tier B or A

The illustrative links are the hypothesis this project exists to test. To promote one you need
**all three** of the following for a *named pair* of entities:

1. **Identity** — state corporate registry filing showing officers or registered agent.
2. **Affiliation** — the principals' own public statements, or documented membership.
3. **The payment** — a 990 Schedule I line, a court exhibit, a bank record in a filing, or an
   on-chain transaction.

Two out of three is not a story. It is a lawsuit.

If you ever get all three for a real pair of entities, that stops being a website feature and
becomes the lede. Take it to a lawyer and a newsroom before you publish it.

---

## 5. Lines this project does not cross

- **No private individuals.** Organizations, officers acting in their official capacity, and
  published chapter authors only. No rank-and-file donors, no employees, no customers.
- **No leaked donor names.** Leaked datasets can establish *structure* and *scale*. Naming a
  private individual from a breach is a different act with different ethics, and it is not
  necessary for anything this site argues.
- **No inferred membership.** A person appearing in a photograph, following an account, or
  attending an event is not evidence of membership. Ever.
- **No "and therefore everyone who buys X is a Nazi."** The site's actual claim is the opposite
  and more interesting: the structure is *designed* so the buyer never has to know. Losing that
  distinction loses the argument.

### The naming policy — and what it does NOT concede

**This project does not name currently-operating vendors.** Historical and defunct cases are
named freely (Resistance Records, the National Alliance) because the record is closed and the
scholarship exists.

Two reasons, and the second one is the one people miss:

1. **Retaliation.** Naming a live vendor points it at whoever did the work.
2. **Naming destroys the evidence.** The whole case against these businesses is built from their
   own public self-declaration — the About page, the catalog, the interview where they say what
   the money is for. Point at it publicly and it evaporates. The page is rewritten, the catalog
   pruned, the storefront reopens next month under a new LLC with a softer logo and no politics
   on the homepage. This has happened over and over. **So: archive first, name later if at all,
   and with a lawyer.**

**What this policy is not.** It is not a concession that no such businesses exist. They exist,
they are documented, and the model is decades old — that is tier B on the site and it is not in
dispute. Do not let the prose anywhere on this site drift into implying otherwise; a reader who
comes away thinking "they couldn't find any" has been misled by us, which is worse than being
argued with.

Keep the three claims separate everywhere they appear:

| Claim | Status |
|---|---|
| Extremist commerce funds extremist organizations | **Documented.** Settled. Decades old. |
| We are not naming today's specific vendors | **Editorial choice.** Ours. Reversible. Not a finding. |
| Vendor dollar → pooled fund → named policy org | **Unproven**, and blocked by §4's donor-advised-fund wall — *not* by a shortage of vendors. |
- **The advisory board is mostly ordinary movement conservatism.** Say so. The finding is that a
  countable subset carries designations — not that the whole coalition does. Overstating it is
  both false and strategically stupid.

---

## 6. When you are wrong

Fix it in `data/network.js`, drop the tier, and leave the correction visible. A project whose
whole premise is "look at how carefully we separate proof from speculation" does not get to be
quiet about its own errors.
