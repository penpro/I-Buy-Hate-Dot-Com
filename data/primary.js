/* ==========================================================================
   FundingHate — primary-record sections
   --------------------------------------------------------------------------
   Three sections built to survive a reader who distrusts every watchdog:
     1. The quote wall  — "how do we know? because they said it out loud."
        Nothing here is mediated by SPLC or any advocacy group. Every entry is
        the subject's own publication, on video, or in a record they filed.
     2. The ledger      — 990 patterns pulled from the ProPublica API by EIN.
        Pattern-on-records doctrine: no transaction tracing, no donor identity
        claims; recurring shapes across filing years, each cell citable.
     3. The undercount  — federal hate-crime data vs the federal victimization
        survey. Both numbers are the government's own.
   Working leads live in CORKBOARD.md, not here. This file is publishable-only.
   ========================================================================== */

window.FH_PRIMARY = {

  /* ================================================================== */
  quoteWall: {
    eyebrow: "No watchdog required",
    title: "“How do we know?” — because they said it out loud.",
    standfirst:
      "Every quote below comes from the speaker's own publication, their own filing, or their own mouth on video. " +
      "No SPLC mediation, no advocacy summary, no characterization. This is the evidence class that cannot be " +
      "answered with “consider the source” — the source is the subject.",

    quotes: [
      {
        speaker: "Kevin D. Roberts, PhD",
        role: "President, The Heritage Foundation — foreword to Mandate for Leadership",
        where: "Mandate for Leadership: The Conservative Promise, printed page 5",
        when: "2023",
        text:
          "Pornography, manifested today in the omnipresent propagation of transgender ideology and sexualization of " +
          "children… has no claim to First Amendment protection. Its purveyors are child predators and misogynistic " +
          "exploiters of women… Pornography should be outlawed. The people who produce and distribute it should be " +
          "imprisoned. Educators and public librarians who purvey it should be classed as registered sex offenders. And " +
          "telecommunications and technology firms that facilitate its spread should be shuttered.",
        gloss:
          "Read the definitional move: “pornography” is defined in the same sentence as including “the " +
          "omnipresent propagation of transgender ideology,” and the prescribed penalty is prison and the " +
          "sex-offender registry — extended to educators and librarians. This is the convening organization's " +
          "president, in the book's own front section, over his own name. Verified against the PDF text layer; the " +
          "reader can download the file and turn to page 5.",
        source: { label: "Mandate for Leadership, full PDF (page 5) — Wayback snapshot 7 Nov 2024", url: "https://web.archive.org/web/20241107162309/https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf" },
        tier: "A"
      },
      {
        speaker: "Kevin D. Roberts, PhD",
        role: "President, The Heritage Foundation — on Steve Bannon's War Room",
        where: "Real America's Voice, on video",
        when: "July 2, 2024",
        text:
          "We are in the process of the second American Revolution, which will remain bloodless if the left allows it to be.",
        gloss:
          "Said aloud, on camera, days after the Supreme Court's presidential-immunity ruling, by the president of " +
          "the organization that convened and published Project 2025. Not a leak, not a paraphrase — a broadcast. " +
          "Coverage the same week in Rolling Stone, The Hill, and Newsweek; the primary artifact is the video segment " +
          "itself.",
        source: { label: "Contemporaneous coverage (The Hill) — archived at archive.ph/3S8G7", url: "https://archive.ph/3S8G7" },
        tier: "A",
        verify: true,
        verifyNote: "Coverage archived 16 Aug 2026. Still open: the original Real America's Voice clip itself. Corkboard P-08."
      },
      {
        speaker: "Mandate for Leadership, Foreword",
        role: "The published program of the Project 2025 coalition",
        where: "Printed pages 4–5",
        when: "2023",
        text:
          "The next conservative President must make the institutions of American civil society hard targets for woke " +
          "culture warriors. This starts with deleting the terms sexual orientation and gender identity (“SOGI”), " +
          "diversity, equity, and inclusion (“DEI”), gender, gender equality, gender equity, gender awareness, " +
          "gender-sensitive, abortion, reproductive health, reproductive rights, and any other term used to deprive " +
          "Americans of their First Amendment rights out of every federal rule, agency regulation, contract, grant, " +
          "regulation, and piece of legislation that exists.",
        gloss:
          "Verbatim from the text layer, spanning printed pages 4–5. A published instruction to delete a list of " +
          "words from the entire federal corpus. Whatever one thinks of it, it is not a characterization by " +
          "critics — it is the program, stated as a program, on a page number.",
        source: { label: "Mandate for Leadership, full PDF (pages 4–5)", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf" },
        tier: "A"
      },
      {
        speaker: "Patriot Front manifesto",
        role: "The group's own published program",
        where: "Quoted identically by SPLC and ISD from the group's materials",
        when: "current",
        text:
          "An African… may have lived, worked, and even been classed as a citizen in America for centuries, yet he is not American.",
        gloss:
          "The group's own founding document, quoted in identical form by two independent research organizations. " +
          "The 2018 rebrand wrapped this in flags and fitness content — 'Reclaim America,' 'Strong families, strong " +
          "nations' — but the document underneath did not change. This is what information laundering looks like " +
          "with the wrapper removed.",
        source: { label: "ISD explainer (quoting the manifesto) — archived at archive.ph/16oev", url: "https://archive.ph/16oev" },
        tier: "A",
        verify: true,
        verifyNote: "ISD carrier page archived 16 Aug 2026. Corkboard P-12: archiving the manifesto itself (so the quote needs no intermediary at all) remains open."
      },
      {
        speaker: "The Heritage Foundation",
        role: "Press release, in its own name",
        where: "heritage.org press page",
        when: "2022–2023",
        text:
          "Project 2025 Reaches 100 Coalition Partners, Continues to Grow in Preparation for Next President",
        gloss:
          "The coalition's existence, scale, and purpose are not an investigation's finding — they are Heritage's own " +
          "press headline. The distinction between this rolling 100+ coalition list and the 54-organization printed " +
          "advisory board is documented on this site; both lists are Heritage's own publications.",
        source: { label: "Heritage press release", url: "https://www.heritage.org/press/project-2025-reaches-100-coalition-partners-continues-grow-preparation-next-president" },
        tier: "A"
      }
    ]
  },

  /* ================================================================== */
  ledger: {
    eyebrow: "Pulled from the filings, by EIN",
    title: "The ledger: what the 990s actually show",
    standfirst:
      "Every number below comes from IRS Form 990 data retrieved from ProPublica's Nonprofit Explorer API on " +
      "August 16, 2026, by employer identification number. No transaction is traced and no donor is named — " +
      "that is not possible and this site says so. What the filings do support is patterns: shapes that repeat " +
      "across years, each cell citable to a specific filing.",

    entities: [
      {
        name: "DonorsTrust Inc",
        ein: "52-2166327",
        headline: "$1.29 billion in assets. Grants out tripled in six years.",
        rows: [
          { fy: "2018", rev: "$202.8M", out: "$144.8M", assets: "$245.1M" },
          { fy: "2019", rev: "$324.0M", out: "$166.2M", assets: "$422.6M" },
          { fy: "2020", rev: "$360.2M", out: "$185.8M", assets: "$607.7M" },
          { fy: "2021", rev: "$1,094.7M", out: "$191.9M", assets: "$1,504.9M", flag: true },
          { fy: "2022", rev: "$323.1M", out: "$248.1M", assets: "$1,387.5M" },
          { fy: "2023", rev: "$158.3M", out: "$357.9M", assets: "$1,291.2M" }
        ],
        reading:
          "This is the pooling layer with real numbers on it. Assets grew sixfold from 2018 to the 2021 peak; " +
          "annual grantmaking now runs ~$358M. The FY2021 line is the anomaly: $1.09 billion of revenue in a single " +
          "year, triple its neighbors — consistent with one or a few enormous contributions of appreciated assets, " +
          "and, by the structure's design, permanently anonymous. Note the scale against the extremist fringe: " +
          "DonorsTrust grants out more in a week than ADL's documented fringe fundraising figures total in years. " +
          "The interesting money never touched a t-shirt."
      },
      {
        name: "Alliance Defending Freedom",
        ein: "54-1660459",
        headline: "Revenue nearly doubled across the designation-fight years.",
        rows: [
          { fy: "2018", rev: "$55.2M" }, { fy: "2019", rev: "$60.9M" },
          { fy: "2020", rev: "$65.2M" }, { fy: "2021", rev: "$78.8M" },
          { fy: "2022", rev: "$104.5M" }, { fy: "2023", rev: "$101.8M" }
        ],
        reading:
          "A near-monotonic climb through precisely the years when the SPLC designation fight, 303 Creative, and " +
          "Dobbs were loudest. A revenue series cannot prove causation and this site will not pretend it does. It " +
          "can support a narrower sentence: the designation demonstrably did not impair fundraising, and the " +
          "controversy years coincide with the steepest growth in the organization's filings. Donors were not " +
          "deterred. Draw your own conclusion about whether they were motivated."
      },
      {
        name: "Center for Immigration Studies",
        ein: "52-1449368",
        headline: "$3M a year buys a citation empire.",
        rows: [
          { fy: "2018", rev: "$3.4M" }, { fy: "2019", rev: "$3.2M" },
          { fy: "2020", rev: "$2.5M" }, { fy: "2021", rev: "$3.7M" },
          { fy: "2022", rev: "$3.8M" }, { fy: "2023", rev: "$3.0M" }
        ],
        reading:
          "The economics finding hiding in plain sight. CIS is tiny — smaller than many university departments — " +
          "yet its statistics surface in wire copy, congressional testimony, and the immigration chapters of the " +
          "playbook. That ratio is the whole information-laundering thesis in one line: moving policy does not " +
          "require the fringe's money or the establishment's budget. It requires a footnote-able institution, and " +
          "the full unit cost of one is about $3 million a year.\n\n" +
          "And we now know who pays it: Colcom's TY2023 grant to CIS was $1,975,000 — roughly two-thirds of this " +
          "entire budget, from a single perpetual endowment, marked 'general operating support' in the " +
          "foundation's own filing. See the pattern table."
      },
      {
        name: "The Heritage Foundation",
        ein: "23-7327730",
        headline: "$106M revenue, $388M in assets — the convener's scale.",
        rows: [
          { fy: "2019", rev: "$122.9M" }, { fy: "2020", rev: "$119.1M" },
          { fy: "2021", rev: "$101.8M" }, { fy: "2022", rev: "$106.3M", note: "latest year with extracted data" }
        ],
        reading:
          "Verified by API pull; an earlier aggregator figure of ~$134M for 2023 did not match any confirmed year " +
          "and has been corrected — the error is logged, not papered over. The argument is unchanged at any of " +
          "these values: against a fringe whose documented fundraising lives in the tens of thousands, the " +
          "convener's nine-figure budget settles the direction of dependency. The establishment does not need the " +
          "fringe's money. What it takes from the fringe is vocabulary."
      },
      {
        name: "Colcom Foundation",
        ein: "31-1479839",
        headline: "The downward-flow case: a perpetual endowment 150× the size of the designated org it sustains.",
        rows: [
          { fy: "2019", rev: "$26.4M", out: "$37.2M", assets: "$408.2M" },
          { fy: "2020", rev: "$24.8M", out: "$44.3M", assets: "$388.7M" },
          { fy: "2021", rev: "$48.3M", out: "$30.5M", assets: "$406.6M" },
          { fy: "2022", rev: "$64.9M", out: "$28.1M", assets: "$443.4M" },
          { fy: "2023", rev: "$23.5M", out: "$28.9M", assets: "$437.8M" }
        ],
        reading:
          "Built by Cordelia Scaife May, heiress to the Mellon banking fortune, to pursue her program in perpetuity. " +
          "She provided the founding $500,000 for FAIR in 1978; the Center for Immigration Studies — on the Project " +
          "2025 advisory board — was spun out of FAIR's research division in 1986. Reported lifetime giving to " +
          "immigration-restriction causes exceeds $180 million (NYT estate-papers investigation, 2019). Note what " +
          "the table shows: expenses routinely exceed revenue, because a perpetual endowment is not fundraising — " +
          "it is disbursing. Against CIS's ~$3M budget, this is the patronage economy AF-2's scale gap predicted, " +
          "with the arrow pointing the documented direction: down."
      },
      {
        name: "Family Research Council",
        ein: "52-1792772",
        headline: "The disclosure puzzle this site caught in its own claim.",
        rows: [
          { fy: "2020", rev: "$17.9M" }, { fy: "2021", rev: "$22.6M" },
          { fy: "2022", rev: "$24.3M" }, { fy: "2023", rev: "$22.0M" }
        ],
        reading:
          "FRC's 2020 reclassification as an association of churches was reported as reducing its disclosure " +
          "obligations — a claim this site repeated. Our own API pull then complicated it: filings with full data " +
          "keep appearing through FY2023. Both facts are real; the reconciliation (voluntary filing? a related " +
          "entity? effective-date lag?) is an open item on the corkboard, and the original claim has been softened " +
          "until it is resolved. Published here because catching your own overclaim is the method, demonstrated."
      }
    ],

    method:
      "Method note, for anyone repeating this: ProPublica Nonprofit Explorer exposes a free JSON API — " +
      "search by name to resolve the EIN, then /api/v2/organizations/{EIN}.json returns the filing series with " +
      "revenue, expenses, and assets per fiscal year, plus links to the filing PDFs. Grant-level detail (which " +
      "recipient got how much) lives in Schedule I of the e-filed 990 XML. The next dig on this site's corkboard " +
      "is parsing DonorsTrust's Schedule I across six years for recurring grantee pairs — patterns, not " +
      "transactions, because patterns are what the public record can actually prove."
  },

  /* ================================================================== */
  dafTable: {
    eyebrow: "Extracted from the fund's own Schedule I, cell by cell",
    title: "The pattern table: anonymous money, named purposes",
    standfirst:
      "These rows come from DonorsTrust's own sworn Form 990 filings — Schedule I, the grants-paid schedule — " +
      "extracted from the e-filed returns and matched by EIN, never by name alone. The donors behind each grant " +
      "are anonymous by the structure's design. The grants are not: they are line items, with dollar amounts and " +
      "stated purposes, to every one of the four designated organizations on the printed Project 2025 advisory " +
      "board. Three consecutive filing years. This is what “pattern on top of public records” means.",

    grants: [
      { org: "Alliance Defending Freedom", ein: "54-1660459", designated: true,
        years: { "FY2022": "$634,014", "FY2023": "$1,117,259", "FY2024": "$1,656,648" },
        purposes: ["$500,000 “for the Post-Roe v. Wade Initiative” (FY2022)", "“for litigation for defending free speech” — recurring, all three years"] },
      { org: "The Heritage Foundation", ein: "23-7327730", designated: false,
        years: { "FY2022": "n/f p.0", "FY2023": "$581,680", "FY2024": "$734,673" },
        purposes: ["$365,500 “for the Going On Offense On Gender Ideology project” (FY2024)", "$10,000 “for the Focus 2024 project” (FY2023)"] },
      { org: "Family Research Council", ein: "52-1792772", designated: true,
        years: { "FY2022": "$11,100", "FY2023": "n/f p.0", "FY2024": "$20,000" },
        purposes: ["“for general operations”"] },
      { org: "Center for Immigration Studies", ein: "52-1449368", designated: true,
        years: { "FY2022": "$20,000", "FY2023": "n/f p.0", "FY2024": "n/f p.0" },
        purposes: ["“for general operations”"] },
      { org: "Federation for American Immigration Reform", ein: "52-1136126", designated: true,
        years: { "FY2022": "$22,000", "FY2023": "n/f p.0", "FY2024": "n/f p.0" },
        purposes: ["“for general operations”"] },
      { org: "Immigration Reform Law Institute (FAIR's legal arm)", ein: "52-1469956", designated: false,
        years: { "FY2022": "$120,000", "FY2023": "$200,000", "FY2024": "$250,000" },
        purposes: ["“for general operations” — rising every year"] },
      { org: "NumbersUSA Education & Research Foundation", ein: "47-0865426", designated: false,
        years: { "FY2022": "$106,600", "FY2023": "$125,100", "FY2024": "$100,100" },
        purposes: ["“for general operations”"] }
    ],

    colcom: {
      head: "Second fund, same method: Colcom → the Tanton network",
      intro:
        "The same extraction run against the Colcom Foundation's Form 990-PF Part XV — the private foundation built " +
        "by Mellon heiress Cordelia Scaife May to fund immigration restriction in perpetuity. These are not " +
        "donor-advised grants; they are the foundation's own, and every row below reads “GENERAL OPERATING SUPPORT” " +
        "in the filing except where noted.",
      rows: [
        { org: "Center for Immigration Studies", designated: true, y2023: "$1,975,000", y2024: "$400,000",
          note: "The TY2023 grant alone ≈ two-thirds of CIS's entire reported annual revenue (~$3M)." },
        { org: "Federation for American Immigration Reform", designated: true, y2023: "$2,600,000", y2024: "$650,000",
          note: "Colcom's founder provided FAIR's founding grant in 1978; the relationship is in its fifth decade." },
        { org: "Immigration Reform Law Institute", designated: false, y2023: "$2,300,000", y2024: "$575,000–$2,575,000",
          note: "TY2024 includes a $2,000,000 row marked “RESTRICTED GRANT” in the filing." },
        { org: "NumbersUSA Education & Research Foundation", designated: false, y2023: "$2,870,000", y2024: "$650,000–$910,000", note: "" }
      ],
      tail:
        "TY2023 total to these four organizations: roughly $9.7 million in a single filing year. Object IDs: " +
        "202521299349102272 (TY2023), 202601279349100640 (TY2024). TY2024 ranges reflect rows spanning the " +
        "paid-during-year and approved-for-future sections, which share a header in the rendered filing; the " +
        "conservative low end is used in any argument on this site. The dependency ratio is the finding: at " +
        "two-thirds of the grantee's revenue, this is not a donation to an independent organization — it is the " +
        "operating budget of a policy instrument, renewed annually, from a perpetual endowment whose founder " +
        "stated its purpose.",

      bothFlanks: {
        head: "Both flanks: the same endowment funded the “progressive” opposition",
        intro:
          "A sweep of the same five filings for the left flank of the immigration debate found it — on the same " +
          "funder's books. Progressives for Immigration Reform, described in the Southern Poverty Law Center's " +
          "Greenwash report as the country's leading greenwashing organization — established in 2009 with Colcom " +
          "support, its first executive director a former FAIR staff attorney — appears in Colcom's Part XV in " +
          "every one of the five years examined. Since the group was publicly identified, it has renamed itself " +
          "“The Institute for Sound Public Policy” (same EIN, 26-1634671) — and the TY2020 filing catches the " +
          "rename mid-transition, with grants to BOTH names carrying the identical purpose string.",
        rows: [
          { ty: "TY2020", pfir: "$454,300", ispp: "$127,500", purpose: "“PUBLIC EDUCATION ON IMMIGRATION, ENVIRONMENT, AND LABOR”" },
          { ty: "TY2021", pfir: "$150,000", ispp: "$25,000", purpose: "“GENERAL OPERATING SUPPORT”" },
          { ty: "TY2022", pfir: "$350,000", ispp: "—", purpose: "“GENERAL OPERATING SUPPORT”" },
          { ty: "TY2023", pfir: "—", ispp: "$350,000", purpose: "“GENERAL OPERATING SUPPORT”" },
          { ty: "TY2024", pfir: "—", ispp: "$125,000–$250,000", purpose: "“GENERAL OPERATING SUPPORT”" }
        ],
        reading:
          "Run the dependency ratio one more time: in FY2020 the Colcom grants equalled roughly three-quarters of " +
          "this organization's entire revenue. And as the patron tapered, the organization began dying — FY2023 " +
          "revenue collapsed to $108K against $585K of spending, assets draining toward zero. Same signature as " +
          "the CIS ratio above: not a funded ally, an instrument.\n\n" +
          "Step back and read what the five filings show as a set. One perpetual endowment simultaneously funded " +
          "the restrictionist flank of the immigration debate — FAIR, CIS, IRLI, NumbersUSA, $9.7M in TY2023 " +
          "alone — and the “progressive” flank arguing the same conclusion in environmentalist and labor " +
          "vocabulary. The purpose string is the funder's own: “public education on immigration, environment, and " +
          "labor.” This is the funding layer of information laundering. The vocabulary was not just washed — the " +
          "polite opposition that would lose the argument was pre-purchased, by the same money, on the same " +
          "sworn schedule."
      }
    },

    caveats:
      "Read the caveats before quoting this table. (1) “n/f p.0” means not found on page 0 of that year's " +
      "Schedule I — the filings run to 700–927 grant rows per page with continuation pages unchecked, so an " +
      "empty cell is “not yet searched,” never “zero.” (2) DonorsTrust is a donor-advised fund: its account " +
      "holders recommended these grants, and the fund executed them. No claim is made about which donor funded " +
      "which grant — that is unknowable from public records, which is the structure's advertised feature. " +
      "(3) Every row was matched on EIN; name-matching alone surfaces false positives (a Tennessee county " +
      "historical society shares Heritage's name). (4) Citations: IRS e-file object IDs 202323049349300742 " +
      "(FY2022), 202423189349304787 (FY2023), 202513179349312256 (FY2024) — each renders in full at ProPublica's " +
      "full-text viewer, where any reader can verify any cell.",

    reading:
      "What the table establishes is precisely what AF-5 said aggregate totals never could: the anonymizing pool " +
      "is not a wall between donors and a vague movement — it is a wall between donors and specific, named, " +
      "designated organizations receiving grants with campaign-specific purposes. Someone recommended half a " +
      "million dollars “for the Post-Roe v. Wade Initiative” through an entity whose function is that their name " +
      "never appears. Someone recommended $365,500 “for the Going On Offense On Gender Ideology project.” The " +
      "purposes are in the sworn filing. Only the people are missing — by design, lawfully, and that design is " +
      "itself the finding."
  },

  /* ================================================================== */
  undercount: {
    eyebrow: "Both numbers are the federal government's",
    title: "The undercount: 40-to-1 against the official story",
    standfirst:
      "When hate-crime statistics come up, the FBI's annual number is treated as the fact of the matter. The " +
      "federal government's own victimization survey says the true figure is roughly forty times higher. Neither " +
      "number comes from an advocacy group — this is Justice Department data disagreeing with Justice Department " +
      "data, and Congress's own research service explaining why.",

    stats: [
      { figure: "~250,000", unit: "hate-crime victimizations / year",
        label: "Bureau of Justice Statistics, National Crime Victimization Survey — the survey-based estimate, including crimes never reported to police." },
      { figure: "~6,000–12,000", unit: "incidents in FBI annual data",
        label: "FBI Hate Crime Statistics — only crimes reported to police, by agencies that choose to participate, that the agency classified as bias-motivated." },
      { figure: "voluntary", unit: "agency participation",
        label: "Reporting to the FBI program is not mandatory. Thousands of agencies submit zero hate crimes year after year — zeros that are indistinguishable from silence." },
      { figure: "2021", unit: "the data hole",
        label: "The transition to NIBRS dropped major departments — including the country's largest — out of the national data entirely for the transition period." }
    ],

    reading:
      "The honest framing cuts in a specific direction. This is not “the FBI is hiding hate crimes” — it is " +
      "structural: the headline number is a floor constructed from voluntary paperwork, while the government's own " +
      "victim survey, run continuously since 1973 precisely because reported crime undercounts crime, produces an " +
      "estimate an order of magnitude and a half higher.\n\n" +
      "Why it belongs on this site: the undercount is the demand-side twin of information laundering. The supply " +
      "side re-encodes the ideology into respectable vocabulary; the undercount guarantees that the measured " +
      "consequences stay too small to force the conversation back open. A policy coalition can seat designated " +
      "organizations at the table without cost partly because the official harm ledger runs at two percent of the " +
      "government's own best estimate. When someone says “hate crime is rare — look at the FBI numbers,” " +
      "the correct response is that the Justice Department itself publishes the reason those numbers cannot bear " +
      "that weight.",

    sources: [
      { label: "CRS R46318 — Federal Data on Hate Crimes in the United States (updated Dec 2025)",
        url: "https://www.congress.gov/crs-product/R46318" },
      { label: "BJS — Hate Crime Victimization statistical series",
        url: "https://bjs.ojp.gov/data-collection/ncvs" },
      { label: "FBI Crime Data Explorer — per-agency submissions (the zeros are checkable)",
        url: "https://cde.ucr.cjis.gov/" }
    ]
  }
};
