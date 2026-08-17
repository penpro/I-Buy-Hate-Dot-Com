/* ==========================================================================
   FundingHate — network data
   --------------------------------------------------------------------------
   EDITING THIS FILE IS THE POINT. It is a plain JS object literal; treat it
   exactly like JSON. Everything the site renders comes from here.

   EVIDENCE TIERS — the spine of the whole project.
     "A"  DOCUMENTED   Primary source. A filing, a 990, a court record, a
                       published roster, or the subject's OWN published words.
                       If a hostile reader clicks through, they land on paper.
     "B"  REPORTED     Credible investigative journalism, leaked datasets,
                       watchdog designations. Contestable but sourced.
     "C"  ILLUSTRATIVE Structurally plausible, NOT evidenced for these specific
                       parties. This is the hypothetical. It is always drawn
                       differently and can be switched off entirely.

   NEVER upgrade a tier to make the picture cleaner. The picture is not the
   product; the sourcing is. See SOURCING.md.

   `verify: true` on a citation means: this claim was drafted from general
   knowledge and has NOT been confirmed against the live source. It renders as
   a loud amber badge until someone checks it and removes the flag.
   ========================================================================== */

window.FH_NETWORK = {

  layers: [
    { id: "consumer",    label: "The Buyer",          blurb: "Retail purchase. The transaction that everyone involved describes as apolitical." },
    { id: "commerce",    label: "Movement Commerce",  blurb: "Revenue-generating operations run by openly extremist actors. They state their purpose publicly." },
    { id: "pool",        label: "The Pooling Layer",  blurb: "Where money loses its fingerprints. Donor-advised funds, fiscal sponsors, LLCs, crowdfunding rails." },
    { id: "respectable", label: "The Respectable Face", blurb: "Registered nonprofits with marble lobbies and press offices. Several carry active hate-group designations." },
    { id: "vehicle",     label: "The Playbook",       blurb: "Project 2025: a governing manual, a personnel database, and a 180-day action plan." },
    { id: "outcome",     label: "Policy",             blurb: "What lands in the Federal Register, the statute book, and the courts." }
  ],

  /* ----------------------------------------------------------------------
     NODES
     value  = relative flow weight for layout only. NOT a dollar claim.
     tier   = the strongest tier at which this ENTITY's described character
              is established.
     ---------------------------------------------------------------------- */
  nodes: [

    /* ---------- LAYER 1: the buyer ---------- */
    {
      id: "buyer", layer: "consumer", tier: "A", value: 100,
      label: "The Retail Buyer",
      sub: "Rally merch · online storefronts · gun-show tables",
      summary: "A customer buys a $34 t-shirt with a clean-looking eagle on it. Nothing about the checkout page requires them to know anything.",
      detail: "This node is not an accusation. It is the mechanism. Movement commerce is designed so that the buyer can complete a transaction without ever encountering the seller's stated ideology — while the seller, on a different page of the same website, states it plainly. The gap between those two pages is where this entire structure lives.",
      evidence: []
    },

    /* ---------- LAYER 2: movement commerce ---------- */
    {
      id: "c-apparel", layer: "commerce", tier: "B", value: 26,
      label: "Movement Apparel & Fitness Brands",
      sub: "White-nationalist groups running clothing lines",
      summary: "Real, documented — but the customers are the group's own members, not the public. This node refutes the assumption it was built to illustrate.",
      detail: "READ THIS ONE AGAINST THE PROJECT. Patriot Front — the white-nationalist group formed out of Vanguard America after Charlottesville in 2017 — does run a merchandise economy, and it is documented. It just does not work the way this site originally assumed.\n\nSPLC's profile describes members being required to buy PF-branded flyers, stickers and stencils from founder Thomas Rousseau at inflated prices, and being shamed when they do not buy enough. One member complained his chapter was 'singlehandedly paying Thomas' rent.' SPLC characterizes the structure as quasi-pyramid, funding leadership operations.\n\nSo the money flows inward from members and stops at the top of a small organization. There is no outward-facing retail business, no unwitting mainstream customer, and no documented onward payment to anything. The head-in-the-sand shopper this project was built around is not this group's customer.\n\nWhat IS documented here is the propaganda operation: members required to post materials monthly, driving 50–100 miles to maximize visibility, with the offline stunt captured for online amplification via Telegram. The product being manufactured is imagery, not revenue.\n\nSee adversarial finding AF-1. This node stays on the site precisely because it contradicts the thesis.",
      evidence: [
        { tier: "B", type: "Watchdog profile", title: "Patriot Front — Extremist Files", source: "Southern Poverty Law Center", url: "https://www.splcenter.org/resources/extremist-files/patriot-front/",
          note: "Documents the internal merchandise economy, the mandatory-purchase structure, and the 'paying Thomas' rent' complaint. Also reproduces manifesto text verbatim, which is the more useful half." },
        { tier: "B", type: "Research explainer", title: "Patriot Front — ISD Explainer (31 March 2023)", source: "Institute for Strategic Dialogue", url: "https://www.isdglobal.org/isd-explainer/patriot-front/",
          note: "The 2018 rebrand to 'patriotic nationalism' — 'Reclaim America', 'Strong families, strong nations' — over a manifesto holding that 'membership to the American nation is inherited through blood.' Independent of SPLC, which matters per AF-4." },
        { tier: "A", type: "Self-declaration", title: "Patriot Front manifesto", source: "The group's own published program, quoted by SPLC and ISD", url: "",
          note: "SPLC quotes it directly: 'An African...may have lived...in America for centuries, yet he is not American.' Trace that to the original document and archive it — a manifesto quote needs no designation to be damning." }
      ]
    },
    {
      id: "c-print", layer: "commerce", tier: "C", value: 18,
      label: "Propaganda Print Shops",
      sub: "Sticker, banner and flyer production sold at cost-plus",
      summary: "Print operations that produce movement propaganda and sell it onward at a margin.",
      detail: "ILLUSTRATIVE ARCHETYPE. This node describes a structure rather than a named company: a small print operation whose principals are openly affiliated with an extremist organization, which produces that organization's stickers, banners and flyers, and which also takes outside commercial print work. Propaganda distribution becomes self-funding; the outside work subsidizes the propaganda.\n\nBe clear about what 'unnamed' means here, because it is easy to misread. It does NOT mean no such businesses exist. They do, they are documented, and the model is decades old — see the hate-music node, where a neo-Nazi organization owned its record label outright and said so. This project declines to name current operators, and that is an editorial decision with two reasons behind it.\n\nFirst, retaliation. Naming a live vendor points it at whoever did the work.\n\nSecond, and less obvious: naming destroys the evidence. The entire case against these businesses is built out of their own public self-declaration — the About page, the catalog, the interview where they say what the money is for. Point at it publicly and it disappears. The page gets rewritten, the catalog gets pruned, the storefront reopens under a new LLC with a softer logo and no politics on the homepage. This has happened repeatedly. So the sequence is archive first, name later if at all.\n\nWhat is genuinely unproven is narrower: whether this vendor's money reaches the pooled-funding layer and then a named policy organization. That specific link is the hypothesis, and it is the first thing to disappear when you switch off illustrative flows.",
      evidence: [
        { tier: "C", type: "Structural hypothesis", title: "Print-shop-as-revenue-engine archetype", source: "Constructed for this project", url: "",
          note: "To promote this node to tier B you need a named vendor with (1) documented principals, (2) documented affiliation, and (3) a documented onward payment. All three, or it stays here." }
      ]
    },
    {
      id: "c-books", layer: "commerce", tier: "B", value: 16,
      label: "Fascist Publishing Houses",
      sub: "Reprints of Nazi-era texts sold as ordinary books",
      summary: "Publishers whose catalogs openly include Third Reich source texts, sold through normal e-commerce.",
      detail: "This is the node that answers 'how do you KNOW they're neo-Nazis?' — because the catalog is the confession. You do not have to infer an ideology from vibes, from a logo, or from who follows whom. You read the storefront. A publisher selling Third Reich political texts as a going concern has told you what it is, in its own product listings, in public, for money.\n\nAnd unlike the apparel node, this one has real numbers attached. SPLC's 2014 Financing Hate report documented Counter-Currents Publishing raising nearly $40,000 through PayPal by November 2013, and earning roughly $20,000 through Amazon's affiliate program over about two years. That is a genuine outward-facing retail operation with mainstream payment rails and mainstream commission income — the structure this project was actually looking for.\n\nNote the scale honestly, though: tens of thousands of dollars over years. It funds a publishing operation. It does not fund a policy apparatus. See AF-2.\n\nThe more important point is the payment rails. Every figure above is a commercial relationship with a company that could have declined it — which is exactly what the defunding section is about.",
      evidence: [
        { tier: "B", type: "Investigative report", title: "Financing Hate (25 February 2014)", source: "Southern Poverty Law Center", url: "https://www.splcenter.org/resources/reports/financing-hate/",
          note: "Documents PayPal serving at least 69 tracked hate groups; Counter-Currents at ~$40,000 via PayPal and ~$20,000 in Amazon affiliate commissions. Note this report does NOT discuss donor-advised funds — do not cite it for anything in the pooling layer." },
        { tier: "B", type: "Research report", title: "Funding Hate: How White Supremacists Raise Their Money (December 2017)", source: "Anti-Defamation League", url: "https://www.adl.org/resources/report/funding-hate-how-white-supremacists-raise-their-money",
          note: "Catalogues merchandise, self-published material on Amazon, dues, event fees and crypto — with figures. Also the source of the finding that these movements are 'particularly poorly funded', which is the sharpest constraint on this whole diagram." },
        { tier: "A", type: "Self-declaration", title: "Publisher catalog listings", source: "Company storefronts", url: "",
          note: "CAPTURE METHOD: archive.today or Wayback the catalog page; screenshot with URL bar and timestamp visible; record the ISBN/title list. Do this BEFORE naming anyone publicly — naming is what triggers the scrub. See SOURCING.md, naming policy." }
      ]
    },
    {
      id: "c-music", layer: "commerce", tier: "B", value: 10,
      label: "Hate-Music Labels & Merch",
      sub: "The oldest self-funding engine in the movement",
      summary: "White-power music has functioned as a movement funding and recruitment pipeline for four decades.",
      detail: "Resistance Records under the National Alliance is the textbook case: a record label owned outright by a neo-Nazi organization, explicitly operated to fund and recruit for it. This is not a modern inference — it is a documented, decades-old business model that the movement discusses openly, and it establishes that 'merch revenue funds the org' is a real structure rather than a paranoid invention.\n\nIt is included here precisely because it proves the mechanism exists. The open question this project raises is not whether extremist commerce funds extremist organizations — it demonstrably does — but how far downstream that money travels.",
      evidence: [
        { tier: "B", type: "Historical record", title: "Resistance Records and the National Alliance funding model", source: "Extremism research literature; contemporaneous reporting", url: "", verify: true,
          note: "Well-covered in academic and watchdog literature from the late 1990s and 2000s. Pin two specific citations." }
      ]
    },
    {
      id: "c-crypto", layer: "commerce", tier: "B", value: 14,
      label: "Crypto & Alt-Payment Rails",
      sub: "Donations that route around deplatforming",
      summary: "After payment processors cut off extremist groups, funding moved to cryptocurrency and alt-tech tipping.",
      detail: "Blockchain analysis firms and journalists have repeatedly traced substantial cryptocurrency transfers to prominent US extremist figures — most famously a large bitcoin transfer distributed among far-right personalities in December 2020, traced by analysts and covered widely. Because the ledger is public, this is one of the few funding streams in the whole diagram that can be examined directly.\n\nThat cuts both ways: it is strong evidence where it exists, and its absence for a given actor is meaningful.",
      evidence: [
        { tier: "B", type: "Blockchain analysis", title: "Traced cryptocurrency transfers to US far-right figures (Dec 2020)", source: "Chainalysis and subsequent reporting", url: "", verify: true,
          note: "The December 2020 transfer is the strongest single example. Get the original analysis, not the second-hand writeups." },
        { tier: "A", type: "Public ledger", title: "On-chain transaction records", source: "Public blockchain explorers", url: "",
          note: "Where a wallet address is published by the recipient themselves, the ledger is primary evidence and independently verifiable by any reader. Link the explorer directly." }
      ]
    },

    /* ---------- LAYER 3: pooling ---------- */
    {
      id: "p-daf", layer: "pool", tier: "A", value: 34,
      label: "Donor-Advised Funds",
      sub: "DonorsTrust · National Christian Foundation · community funds",
      summary: "A legal structure that severs the public link between a donor and a grant. This part is not a theory — it is the product's advertised feature.",
      detail: "A donor-advised fund accepts money, takes legal ownership, and later grants it out under the FUND's name. The recipient's 990 shows the fund as the source. The original donor is not disclosed. This is lawful, extremely common, and used across the political spectrum — and it is the single most important structural fact on this page.\n\nDonorsTrust in particular has been described in reporting as a major conduit for conservative movement funding, and grant flows in and out of large donor-advised funds are visible in IRS Form 990 filings even when the underlying donors are not.\n\nWhat a DAF means for this diagram: any arrow entering this column can be traced. Most arrows LEAVING it can be traced. The correspondence between a specific dollar in and a specific dollar out generally cannot. That is the wall this investigation runs into, and it is honest to say so plainly rather than draw a line through it.",
      evidence: [
        { tier: "A", type: "Sworn filing, cell-level", title: "DonorsTrust Schedule I grant rows, FY2022–24 — extracted 16 Aug 2026", source: "The fund's own e-filed 990s, via ProPublica full-text viewer", url: "https://projects.propublica.org/nonprofits/organizations/522166327",
          note: "EIN-matched line items to all four designated advisory-board orgs, with verbatim purposes: $500K “for the Post-Roe v. Wade Initiative” (ADF, FY2022); $365.5K “for the Going On Offense On Gender Ideology project” (Heritage, FY2024). Full table in the pattern-table section. The wall hides who — not what, to whom, or what for." },
        { tier: "A", type: "Tax filing", title: "IRS Form 990 — grants paid schedules", source: "ProPublica Nonprofit Explorer", url: "https://projects.propublica.org/nonprofits/",
          note: "Free, searchable, primary. Schedule I lists grants paid with recipient names and amounts." },
        { tier: "B", type: "Investigative reporting", title: "Reporting on DonorsTrust as a movement funding conduit", source: "Multiple outlets", url: "", verify: true,
          note: "Pin specific articles with dates. This is well-covered ground; there is no excuse for a vague citation here." }
      ]
    },
    {
      id: "p-shell", layer: "pool", tier: "C", value: 20,
      label: "Shells & Fiscal Sponsors",
      sub: "LLCs, pass-throughs, and borrowed 501(c)(3) status",
      summary: "Small operations without their own nonprofit status route money through entities that have it.",
      detail: "ILLUSTRATIVE. Fiscal sponsorship and pass-through LLCs are ordinary, legal instruments used by countless legitimate organizations. They also make small-dollar movement money extremely difficult to follow, because the sponsoring entity's filings show a single aggregate line rather than the underlying projects.\n\nDrawn here as the mechanism by which the hypothetical commerce layer could reach the documented nonprofit layer without leaving a trace. This is the weakest link in the chain by construction — if this project ever proves this connection for a named pair of entities, it stops being a hypothesis and becomes the story.",
      evidence: [
        { tier: "C", type: "Structural hypothesis", title: "Pass-through routing archetype", source: "Constructed for this project", url: "",
          note: "Promotion path: state corporate registry filings (officers, registered agent) + a 990 Schedule I line naming the sponsor + a public statement tying the sponsored project to the extremist entity." }
      ]
    },
    {
      id: "p-crowd", layer: "pool", tier: "B", value: 16,
      label: "Alt-Tech Crowdfunding",
      sub: "Platforms that stayed open after the mainstream ones closed",
      summary: "Christian and 'free speech' crowdfunding platforms became the default rails after mainstream deplatforming.",
      detail: "GiveSendGo and similar platforms became widely used for legal defense funds and movement campaigns after GoFundMe, PayPal and Stripe removed extremist users. A 2021 data leak from GiveSendGo, reported at the time, exposed donor records and demonstrated how much of this funding is traceable when the data surfaces.\n\nCampaign pages are public by design, which makes this one of the more documentable nodes in the pooling layer.",
      evidence: [
        { tier: "B", type: "Data breach reporting", title: "GiveSendGo donor data exposure and subsequent reporting", source: "Multiple outlets, 2021–2022", url: "", verify: true,
          note: "Confirm dates and outlets. Note that reporting on leaked donor data raises its own ethics questions — see SOURCING.md before using individual donor names." },
        { tier: "A", type: "Public campaign page", title: "Live and archived campaign pages with stated purpose and totals", source: "Platform itself", url: "",
          note: "Campaign pages state their purpose in the organizer's own words and display running totals. Archive them; they get deleted." }
      ]
    },

    /* ---------- LAYER 4: the respectable face ---------- */
    {
      id: "r-adf", layer: "respectable", tier: "A", value: 24,
      label: "Alliance Defending Freedom",
      sub: "Legal shop · SPLC-designated · Project 2025 advisory board",
      summary: "A large Christian-right legal organization that both carries an active hate-group designation and sits on the Project 2025 advisory board.",
      detail: "ADF is the clearest single illustration of this project's central point, and it requires no speculation at all. It is one of the most successful litigation shops in American law, with a long record of US Supreme Court wins. It is also designated by the Southern Poverty Law Center as an anti-LGBTQ hate group. And it appears on the published advisory board of Project 2025.\n\nThose three facts are simultaneously true, individually verifiable, and rarely stated in the same sentence in mainstream coverage. That gap IS the subject of this website.\n\nNote carefully: the SPLC designation is a designation by an advocacy organization, is contested by ADF, and is not a legal finding. Say so on the site. The argument is stronger, not weaker, when the reader can see you characterizing the evidence accurately.",
      evidence: [
        { tier: "A", type: "Primary document", title: "Advisory board, Mandate for Leadership pages xi–xii", source: "The Heritage Foundation, 2023 · ISBN 978-0-89195-174-2 · 920pp", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
          note: "Confirmed by direct extraction from the PDF text layer. ADF is printed second on the roster. The reader can download the same file and check." },
        { tier: "B", type: "Watchdog profile", title: "Alliance Defending Freedom — Extremist Files", source: "Southern Poverty Law Center", url: "https://www.splcenter.org/resources/extremist-files/alliance-defending-freedom/",
          note: "Designated anti-LGBTQ. Use this page primarily for the ADF statements it reproduces — e.g. senior counsel Erik Stanley in 2014 on 'the endgame of the homosexual legal agenda'. Trace those to their original publication and cite THAT; the quote survives even if the designation is disputed." },
        { tier: "A", type: "Tax filing", title: "IRS Form 990 — revenue, grants received, grants paid", source: "ProPublica Nonprofit Explorer", url: "https://projects.propublica.org/nonprofits/",
          note: "Shows scale and, in Schedule I, onward grants. Pull the last five years." }
      ]
    },
    {
      id: "r-frc", layer: "respectable", tier: "A", value: 18,
      label: "Family Research Council",
      sub: "Policy shop · SPLC-designated · Project 2025 advisory board",
      summary: "A Washington policy organization with an active hate-group designation and a seat at the Project 2025 table.",
      detail: "FRC has been designated by SPLC as an anti-LGBTQ hate group and appears on the published Project 2025 advisory board. Around 2020 it obtained IRS classification as an association of churches — a change reported at the time (by ProPublica, among others) as permitting reduced public financial disclosure.\n\nHonesty note, because our own records pull complicated this claim: FRC Inc (EIN 52-1792772) continues to appear in ProPublica's database with full 990 data through FY2023 (~$22M revenue). The reclassification and the continued filings are both real; how they reconcile — voluntary filing, a related entity, an effective-date lag — is an open item on this project's corkboard, and until it is resolved this site claims only what both records support.",
      evidence: [
        { tier: "A", type: "Primary document", title: "Advisory board, Mandate for Leadership pages xi–xii", source: "The Heritage Foundation, 2023 · ISBN 978-0-89195-174-2", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
          note: "Confirmed present on the printed roster by direct extraction from the PDF text layer." },
        { tier: "B", type: "Watchdog profile", title: "Family Research Council — Extremist Files", source: "Southern Poverty Law Center", url: "https://www.splcenter.org/resources/extremist-files/family-research-council/",
          note: "Designated anti-LGBTQ, on the basis of what SPLC calls 'discredited research and junk science'. The page reproduces FRC statements directly — including president Tony Perkins on 'luring children into sexual confusion'. Trace to original, cite that." },
        { tier: "B", type: "Investigative reporting", title: "Reclassification as an association of churches and its disclosure effects", source: "Contemporaneous reporting, 2020", url: "", verify: true,
          note: "Confirm the year and the reporting outlet before publishing." }
      ]
    },
    {
      id: "r-cis", layer: "respectable", tier: "A", value: 16,
      label: "Center for Immigration Studies",
      sub: "Research shop · SPLC-designated · Project 2025 advisory board",
      summary: "Supplies the statistical and policy scaffolding for immigration restriction; designated by SPLC; on the advisory board.",
      detail: "CIS is routinely cited in mainstream media as a neutral-sounding research center. It is designated by SPLC as an anti-immigrant hate group, a designation CIS disputes vigorously and publicly. It appears on the Project 2025 advisory board.\n\nThe laundering being described here is not financial — it is epistemic. A designated organization produces a study; a wire service cites the study without the designation; a policy chapter cites the wire service. The provenance is gone in three steps. Trace that chain for a single specific statistic and you have the most persuasive artifact on the site.",
      evidence: [
        { tier: "A", type: "Primary document", title: "Advisory board, Mandate for Leadership pages xi–xii", source: "The Heritage Foundation, 2023 · ISBN 978-0-89195-174-2", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
          note: "Confirmed present on the printed roster by direct extraction from the PDF text layer." },
        { tier: "B", type: "Watchdog profile", title: "Center for Immigration Studies — SPLC designation", source: "Southern Poverty Law Center", url: "https://www.splcenter.org/resources/extremist-files/", verify: true,
          note: "Designated anti-immigrant. CIS sued SPLC over the designation in January 2019; the suit was dismissed in September 2019. State both facts — the litigation is public and pretending it didn't happen is the kind of omission that costs you a reader." },
        { tier: "A", type: "Citation trace", title: "A single CIS statistic followed from study → news → policy document", source: "To be assembled", url: "",
          note: "HIGH-VALUE BUILD TASK. Pick one number. Show all four hops with screenshots. This is the most persuasive single artifact this project can produce and it requires no speculation whatsoever." }
      ]
    },
    {
      id: "r-heritage", layer: "respectable", tier: "A", value: 46,
      label: "The Heritage Foundation",
      sub: "Convener and publisher of Project 2025",
      summary: "Not designated by anyone. It is the hub — the entity that assembled the coalition and published the playbook.",
      detail: "Heritage is a mainstream, powerful, extensively funded conservative think tank, and it is important to this project's credibility to say clearly that it carries no hate-group designation. Its role here is structural, not ideological: Heritage convened the coalition, ran the project, and published Mandate for Leadership: The Conservative Promise.\n\nThe finding this site makes is about the guest list, not the host. When you publish a 900-page governing manual and print your advisory board in the front matter, you have made a public statement about who you consider a legitimate partner. Several of those partners carry active hate-group designations. Both halves of that sentence are on paper.",
      evidence: [
        { tier: "A", type: "Primary document", title: "Mandate for Leadership: The Conservative Promise (2023)", source: "The Heritage Foundation · ISBN 978-0-89195-174-2 · 920pp · PDF produced 11 July 2023", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
          note: "Foreword by Kevin D. Roberts; edited by Paul Dans and Steven Groves. Cite by page number. A page-numbered citation to a document the reader can download themselves is effectively unanswerable." },
        { tier: "A", type: "Tax filing", title: "IRS Form 990 — roughly $134M revenue against ~$142M expenses (2023)", source: "ProPublica Nonprofit Explorer", url: "https://projects.propublica.org/nonprofits/", verify: true,
          note: "This figure carries real argumentative weight in AF-2 — it is what makes the upward-money hypothesis implausible. Confirm it against the filing itself before relying on it in public." }
      ]
    },
    {
      id: "r-other", layer: "respectable", tier: "A", value: 30,
      label: "The Other 50 Board Members",
      sub: "The rest of the 54 printed on pages xi–xii",
      summary: "Fifty of the fifty-four printed advisory board organizations carry no hate-group designation at all. Say so.",
      detail: "The printed advisory board is 54 organizations — counted from pages xi–xii of the book itself, not from a press summary. The overwhelming majority is ordinary movement conservatism: state policy institutes, tax and energy groups, campus networks, legal shops. Implying otherwise would be false and would hand a critic an easy, correct rebuttal.\n\nThe finding is narrower and much harder to dislodge: four of the fifty-four carry active SPLC designations — Alliance Defending Freedom, Family Research Council, Center for Immigration Studies, and the Center for Family and Human Rights. Four out of fifty-four is a smaller number than most coverage implies, and it is a number nobody can take away from you.\n\nOne correction this project made against itself: the widely repeated '100+' figure refers to Heritage's separate rolling coalition-partners roster, which grew past 75 and then 100 in press releases issued after this book went to print in July 2023. American Family Association, Liberty Counsel and Moms for Liberty are routinely named as advisory board members and are not on the printed board. This site said '100+' too, until the roster was actually read.",
      evidence: [
        { tier: "A", type: "Primary document", title: "Mandate for Leadership: The Conservative Promise — advisory board, pages xi–xii", source: "The Heritage Foundation, 2023 · ISBN 978-0-89195-174-2 · 920pp", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
          note: "Roster transcribed from the PDF's own text layer and published in full on this site. This is the single most defensible artifact here: the reader can download the same file and count the same names." }
      ]
    },

    /* ---------- LAYER 5: the playbook ---------- */
    {
      id: "v-mandate", layer: "vehicle", tier: "A", value: 52,
      label: "Mandate for Leadership",
      sub: "~900 pages · named chapter authors · published 2023",
      summary: "The governing manual. Every chapter carries a named author, and those names are traceable to organizations.",
      detail: "This is the most under-used piece of evidence in the entire public conversation about Project 2025. The document names its chapter authors. Those authors have employment histories. Those employers appear on the advisory board. The whole chain — organization → person → chapter → specific policy proposal → enacted rule — is printed, downloadable, and page-numbered.\n\nNobody needs a leak to build this map. It shipped as a book.",
      evidence: [
        { tier: "A", type: "Primary document", title: "Mandate for Leadership: The Conservative Promise — full text", source: "Project 2025", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf", verify: true,
          note: "Store the PDF locally. Build a chapter → author → employer table in data/authors.js. This is mechanical work with an enormous payoff." }
      ]
    },
    {
      id: "v-personnel", layer: "vehicle", tier: "A", value: 22,
      label: "Personnel Database",
      sub: "A vetted staffing pipeline for a future administration",
      summary: "Project 2025 openly ran a recruitment database to pre-staff an incoming administration with vetted personnel.",
      detail: "The personnel operation was described publicly by the project itself as a core pillar: build a database of screened candidates so that a new administration can fill appointed positions immediately rather than over months. Reporting covered both the scale of the effort and the ideological screening involved.\n\nThis pillar matters for the argument because it is the mechanism by which coalition membership converts into state power directly — not through persuasion, but through hiring.",
      evidence: [
        { tier: "A", type: "Self-declaration", title: "Project 2025's own description of its personnel pillar", source: "Project 2025 published materials", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf", verify: true },
        { tier: "B", type: "Investigative reporting", title: "Reporting on the personnel database and its screening", source: "Multiple outlets, 2023–2024", url: "", verify: true }
      ]
    },
    {
      id: "v-training", layer: "vehicle", tier: "A", value: 14,
      label: "Presidential Administration Academy",
      sub: "Training curriculum for incoming appointees",
      summary: "An online training program for vetted candidates, with coalition organizations supplying instruction.",
      detail: "The training pillar is publicly described by the project. Where coalition organizations supply the instructors or curriculum, the link from advisory-board membership to the content of government training is direct and documentable.",
      evidence: [
        { tier: "A", type: "Self-declaration", title: "Project 2025's own description of the training academy", source: "Project 2025 published materials", url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf", verify: true }
      ]
    },

    /* ---------- LAYER 6: outcomes ---------- */
    {
      id: "o-schedulef", layer: "outcome", tier: "A", value: 24,
      label: "Civil Service Reclassification",
      sub: "Schedule F and successors",
      summary: "Reclassifying career federal employees to make them removable at will.",
      detail: "Schedule F was created by executive order in October 2020, rescinded in January 2021, and appears as a policy objective in Mandate for Leadership. It is the cleanest available demonstration of the pipeline: a proposal that exists in the published playbook with a page number, and in the Federal Register with a document number.\n\nBoth documents are public. Put them side by side.",
      evidence: [
        { tier: "A", type: "Federal Register", title: "Executive orders creating and rescinding Schedule F", source: "Federal Register", url: "https://www.federalregister.gov/",
          note: "Search Federal Register for the EO. Cite the document number and date. Primary, free, permanent." },
        { tier: "A", type: "Primary document", title: "Corresponding chapter and page in Mandate for Leadership", source: "Project 2025", url: "", verify: true,
          note: "Cite the page number. A side-by-side of playbook page and Federal Register entry is the strongest single graphic this site can run." }
      ]
    },
    {
      id: "o-lgbtq", layer: "outcome", tier: "A", value: 20,
      label: "Anti-LGBTQ Rulemaking & Litigation",
      sub: "Agency rules, model bills, strategic cases",
      summary: "Policy outputs matching proposals authored by designated organizations.",
      detail: "Where a designated organization's staff authored the relevant playbook chapter and that organization also litigates in the same area, the connection between coalition membership and policy output is direct, named, and citable. Build this per-case: chapter, author, employer, filing, outcome.",
      evidence: [
        { tier: "A", type: "Court record", title: "Case filings and amicus briefs", source: "CourtListener / RECAP", url: "https://www.courtlistener.com/",
          note: "Free primary-source court records. Amicus briefs name the filing organization on the cover — a direct, uncontestable link between an org and a legal position." }
      ]
    },
    {
      id: "o-immig", layer: "outcome", tier: "A", value: 22,
      label: "Immigration Enforcement Apparatus",
      sub: "Detention, removal, and eligibility rules",
      summary: "Proposals sourced to designated research organizations, appearing in the playbook and then in rulemaking.",
      detail: "The immigration chapters are the clearest place to run the citation trace: a designated organization publishes a statistic, the statistic appears in the playbook, the playbook proposal appears in a proposed rule, and the proposed rule cites the statistic. Four hops, all public, all archivable.",
      evidence: [
        { tier: "A", type: "Federal Register", title: "Proposed and final rules with citations to supporting research", source: "Federal Register", url: "https://www.federalregister.gov/",
          note: "Rules cite their evidence base. That citation list is where epistemic laundering becomes visible in an official document." }
      ]
    }
  ],

  /* ----------------------------------------------------------------------
     LINKS
     tier "C" links are the hypothesis. Everything downstream of the
     respectable layer is tier A or B and survives the "documented only" filter.
     ---------------------------------------------------------------------- */
  links: [
    /* buyer → commerce : the transaction itself */
    { source: "buyer", target: "c-apparel", value: 26, tier: "A", label: "Retail purchase",
      note: "That a customer buys a product from a seller is not in dispute. What the customer knows about the seller is the entire question." },
    { source: "buyer", target: "c-print",   value: 18, tier: "A", label: "Retail purchase" },
    { source: "buyer", target: "c-books",   value: 16, tier: "A", label: "Retail purchase",
      note: "The book buyer's position is the least deniable in the diagram: the catalog they ordered from lists the titles." },
    { source: "buyer", target: "c-music",   value: 10, tier: "A", label: "Retail purchase" },
    { source: "buyer", target: "c-crypto",  value: 14, tier: "A", label: "Direct donation" },

    /* commerce → pool : HYPOTHESIS. This is the contested middle. */
    { source: "c-apparel", target: "p-shell", value: 14, tier: "C", label: "Profit routed to pass-through",
      note: "NOT DOCUMENTED for any named pair of entities. Drawn as the structure to test." },
    { source: "c-apparel", target: "p-crowd", value: 10, tier: "B", label: "Campaign funding" },
    { source: "c-print",   target: "p-shell", value: 12, tier: "C", label: "Profit routed to pass-through", note: "NOT DOCUMENTED." },
    { source: "c-print",   target: "p-daf",   value: 5,  tier: "C", label: "Contribution to pooled fund", note: "NOT DOCUMENTED. The single most speculative arrow on this page." },
    { source: "c-books",   target: "p-shell", value: 8,  tier: "C", label: "Profit routed to pass-through", note: "NOT DOCUMENTED." },
    { source: "c-books",   target: "p-daf",   value: 6,  tier: "C", label: "Contribution to pooled fund", note: "NOT DOCUMENTED." },
    { source: "c-music",   target: "p-shell", value: 9,  tier: "C", label: "Profit routed to pass-through", note: "NOT DOCUMENTED." },
    { source: "c-crypto",  target: "p-crowd", value: 8,  tier: "B", label: "Alt-payment rails" },
    { source: "c-crypto",  target: "p-daf",   value: 5,  tier: "C", label: "Converted and contributed", note: "NOT DOCUMENTED." },

    /* independent large-donor money entering the pool — this is the documented bulk */
    { source: "p-crowd", target: "p-daf",   value: 10, tier: "B", label: "Aggregation" },
    { source: "p-shell", target: "p-daf",   value: 18, tier: "C", label: "Grant to donor-advised fund", note: "The wall. Donor identity does not survive this hop by design." },

    /* pool → respectable : documented in aggregate via 990 Schedule I */
    { source: "p-daf", target: "r-adf",      value: 18, tier: "A", label: "Grant (990 Schedule I)",
      note: "Cell-verified: DonorsTrust granted ADF $634K (FY2022), $1.12M (FY2023), $1.66M (FY2024), including $500K 'for the Post-Roe v. Wade Initiative.' The original donors are not disclosed — by design." },
    { source: "p-daf", target: "r-frc",      value: 12, tier: "A", label: "Grant (990 Schedule I)" },
    { source: "p-daf", target: "r-cis",      value: 10, tier: "A", label: "Grant (990 Schedule I)" },
    { source: "p-daf", target: "r-heritage", value: 20, tier: "A", label: "Grant (990 Schedule I)" },
    { source: "p-daf", target: "r-other",    value: 14, tier: "A", label: "Grant (990 Schedule I)" },
    { source: "p-crowd", target: "r-adf",    value: 4,  tier: "C", label: "Campaign proceeds", note: "NOT DOCUMENTED." },

    /* respectable → vehicle : PUBLIC RECORD. Printed in the book. */
    { source: "r-adf",      target: "v-mandate",   value: 16, tier: "A", label: "Advisory board · chapter authorship",
      note: "Advisory board membership is printed in the document's own front matter. This arrow requires no inference at all." },
    { source: "r-frc",      target: "v-mandate",   value: 12, tier: "A", label: "Advisory board · chapter authorship" },
    { source: "r-cis",      target: "v-mandate",   value: 11, tier: "A", label: "Advisory board · policy input" },
    { source: "r-heritage", target: "v-mandate",   value: 30, tier: "A", label: "Convener and publisher" },
    { source: "r-other",    target: "v-mandate",   value: 22, tier: "A", label: "Advisory board" },
    { source: "r-adf",      target: "v-personnel", value: 6,  tier: "B", label: "Personnel pipeline" },
    { source: "r-heritage", target: "v-personnel", value: 14, tier: "A", label: "Operates the database" },
    { source: "r-frc",      target: "v-training",  value: 5,  tier: "B", label: "Curriculum contribution" },
    { source: "r-heritage", target: "v-training",  value: 9,  tier: "A", label: "Operates the academy" },

    /* vehicle → outcome */
    { source: "v-mandate",   target: "o-schedulef", value: 16, tier: "A", label: "Proposal → executive action",
      note: "Playbook page number and Federal Register document number. Both public. Put them side by side." },
    { source: "v-mandate",   target: "o-lgbtq",     value: 15, tier: "A", label: "Proposal → rulemaking / litigation" },
    { source: "v-mandate",   target: "o-immig",     value: 17, tier: "A", label: "Proposal → rulemaking" },
    { source: "v-personnel", target: "o-schedulef", value: 8,  tier: "A", label: "Staffing the mechanism" },
    { source: "v-personnel", target: "o-immig",     value: 5,  tier: "B", label: "Appointee placement" },
    { source: "v-training",  target: "o-lgbtq",     value: 5,  tier: "B", label: "Trained appointees" }
  ]
};
