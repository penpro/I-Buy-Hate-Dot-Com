/* ==========================================================================
   FundingHate — adversarial assessment + the defunding section
   --------------------------------------------------------------------------
   Written against the site, not for it. The question asked of every claim was
   "what does the smartest hostile reader say back?" — and where the answer was
   good, the claim was demoted or killed rather than defended.

   Two findings here contradict the project's original premise. They are
   published at the top rather than buried, because a project whose whole
   selling point is separating proof from speculation does not get to be quiet
   when its own speculation fails.
   ========================================================================== */

window.FH_ASSESSMENT = {

  intro: {
    title: "What I got wrong — and the worse thing the records showed instead",
    standfirst:
      "This project began believing that small hate-group businesses were helping fund hate-based policy. That " +
      "hypothesis was tested against the records, hard, and it did not survive — because it was too small. The " +
      "t-shirt money is a rounding error on a patronage economy running the opposite direction at a thousand " +
      "times the scale: fortunes at the top, instruments below, all of it in sworn filings. What follows is every " +
      "correction this project made against itself, worst first. It stays on the page because a reader who can " +
      "see exactly what we discarded — and why — can trust what we kept."
  },

  findings: [

    /* ---------------------------------------------------------------- */
    {
      id: "AF-1",
      severity: "fatal",
      verdict: "Wrong — and the truth is uglier",
      claim: "Extremist merchandise revenue pools upward and helps fund establishment policy organizations.",
      attack:
        "Show me the flagship case. Patriot Front is the most-cited example of a US extremist group running a " +
        "merchandise operation. Who actually buys the merchandise, and where does the money go?",
      evidence:
        "SPLC's own profile of Patriot Front documents the opposite of an outward-facing sales business. Members " +
        "are required to buy PF-branded flyers, stickers and stencils from founder Thomas Rousseau at inflated " +
        "prices, and are shamed for not purchasing enough. One member complained his chapter was " +
        "\"singlehandedly paying Thomas' rent.\" SPLC characterizes the arrangement as a quasi-pyramid structure " +
        "that funds leadership operations.\n\n" +
        "So the money flows inward, from members, and stops at the top of a very small organization. There is no " +
        "outward retail business, no unwitting mainstream customer, and no onward payment.",
      consequence:
        "The comfortable version of this story — bad money seeping up from basement merch tables into respectable " +
        "policy — is not what the records show. The merch economy is a pyramid grinding its own members, and it " +
        "was never big enough to fund anything. Which forces the honest question this whole site now answers: if " +
        "the t-shirt money isn't funding the machine, whose money is?",
      fix:
        "The illustrative flows from commerce into the pooling layer stay tier C and stay switched off by default. " +
        "They are retained on the page only as a labelled hypothesis with this refutation attached to them. Do not " +
        "quietly keep drawing the arrow after reading this.",
      closure:
        "WHAT WAS FOUND INSTEAD (hypothesis lab, H2–H4): the arrow inverts, and the picture gets worse. Documented " +
        "private fortunes fund the designated organizations from above — Colcom → FAIR/CIS at $180M+ lifetime, on " +
        "sworn filings — and the fringe's real role in the economy is supplier: it manufactures the imagery and " +
        "vocabulary that far better-funded actors convert into voter mobilization, a mechanism its operators " +
        "describe in their own published words. The t-shirt was a decoy. Follow the lab below to the actual money.",
      sources: ["splc-patriot-front"]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "AF-2",
      severity: "fatal",
      verdict: "Wrong by 1000× — in the worse direction",
      claim: "Merchandise and donation revenue from the extremist fringe is meaningful money in policy terms.",
      attack: "Put the two numbers next to each other. How much money are we actually talking about?",
      evidence:
        "ADL's 2017 report Funding Hate concluded that American white supremacist movements are \"particularly " +
        "poorly funded,\" constrained by small membership and by exclusion from ordinary financial services. Its " +
        "documented figures are in the low thousands: membership dues of $10 a month, event fees of $100–$300, " +
        "early crowdfunding campaigns raising $1,600–$3,500. The largest single sums it records are one legal " +
        "defence campaign at $159,399 and a Stormfront bitcoin wallet at roughly $30,000.\n\n" +
        "The most successful far-right video streamer measured in ADL's later work earned about $114,000 over " +
        "nine months.\n\n" +
        "The Heritage Foundation's Form 990 shows $106.3 million of revenue for FY2022 (the latest year with " +
        "extracted data; verified by EIN 23-7327730 via the ProPublica API on 16 Aug 2026 — an earlier ~$134M " +
        "aggregator figure did not match any confirmed year and was corrected). DonorsTrust, one donor-advised " +
        "fund in the pooling layer, granted out $357.9 million in FY2023 alone.",
      consequence:
        "The scale gap is about three orders of magnitude. If every dollar the American extremist fringe raised in " +
        "a year were handed to Heritage, it would not register on the audit. And that is the sentence that should " +
        "worry you more, not less: the hate isn't scraping by on t-shirt margins. It has a treasury.",
      fix:
        "Stop arguing that the fringe funds the establishment. Argue what the evidence actually supports: the fringe " +
        "supplies language, personnel and normalization, and the establishment supplies the money. That is the " +
        "pipeline, and it is better documented than the one this project started with.",
      closure:
        "WHAT WAS FOUND INSTEAD (hypothesis lab, H2): the gap this finding measured is the signature of a patronage " +
        "economy. The money that matters flows downward at exactly the scale the fringe lacks — Colcom's $437.8M " +
        "endowment disburses ~$30M a year in perpetuity against CIS's ~$3M budget, meaning one fortune quietly IS " +
        "the organization it funds. We went looking for a trickle and found a reservoir.",
      sources: ["adl-funding-hate", "adl-bad-gateway", "heritage-990", "propublica-api-pull"]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "AF-3",
      severity: "major",
      verdict: "Corrected",
      claim: "Project 2025's advisory board has 100+ organizations, including several designated hate groups.",
      attack:
        "Which list? Name the organizations and cite the page. If you cannot, you are repeating a press summary " +
        "and I will find the error for you.",
      evidence:
        "The advisory board printed in Mandate for Leadership (2023), pages xi–xii, contains 54 organizations. The " +
        "\"100+\" figure refers to Heritage's separate rolling coalition-partners roster, which passed 75 and then " +
        "100 in press releases issued after the book went to print in July 2023.\n\n" +
        "The practical consequence: American Family Association, Liberty Counsel and Moms for Liberty are widely " +
        "named as Project 2025 advisory board members and are not on the printed board.",
      consequence:
        "This site previously said \"100+ Other Coalition Partners\" and would have been correctly rebutted by " +
        "anyone holding the actual book.",
      fix:
        "The full 54-organization roster is now transcribed from the PDF's text layer and published on this site, in " +
        "printed order, with the four designated organizations marked and the other fifty shown as what they are. " +
        "Four of fifty-four is a smaller number than the impression most coverage leaves, and it is a number that " +
        "cannot be taken away from you.",
      sources: ["mandate-pdf"]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "AF-4",
      severity: "major",
      verdict: "Structural — mitigate, cannot resolve",
      claim: "These organizations are hate groups.",
      attack:
        "According to whom? SPLC is an advocacy organization with its own politics, it has been sued over exactly " +
        "these designations, and its institutional credibility has been under sustained attack. Rest your argument " +
        "on it and I only have to discredit one source.",
      evidence:
        "The attack has real purchase. The Center for Immigration Studies sued SPLC over its designation in January " +
        "2019; the suit was dismissed that September, but the dispute is genuine and ongoing. Every designated " +
        "organization publishes a rebuttal. Designations are contested assessments by an advocacy group, not legal " +
        "findings, and no amount of repetition changes that.",
      consequence:
        "A site that is single-sourced to SPLC has a single point of failure, and the other side is actively working " +
        "on it.",
      fix:
        "Lead with self-declaration, not designation. SPLC's own profiles are most useful for the primary-source " +
        "quotes they reproduce from the organizations themselves — ADF's senior counsel on \"the homosexual legal " +
        "agenda,\" FRC's president on \"luring children into sexual confusion.\" Those are the organizations' own " +
        "words, verifiable at the original source, and they do not depend on anyone's designation being correct. " +
        "Cite the designation as corroboration, never as foundation.",
      closure:
        "SUBSTANTIALLY CLOSED (the “It's not just the SPLC” section): the single-source problem is now answered " +
        "structurally. A definitions panel (FBI, federal statute, Canadian criminal listing, State Department " +
        "SDGT, academic consensus, independent NGOs) and a 49-row corroboration table run every group through " +
        "criteria owing nothing to the SPLC — terrorist-entity listings by five allied governments, " +
        "seditious-conspiracy convictions, eight-figure jury verdicts, interior-ministry bans, and the subjects' " +
        "own recorded words. Rows with NO external adjudication (the policy orgs) say so in bold. The SPLC is " +
        "now cited on this site as an archivist and a floor, never as the foundation.",
      sources: ["splc-adf", "splc-frc", "canada-listing", "splc-yih-2025"]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "AF-5",
      severity: "major",
      verdict: "Permanent — stop treating it as a to-do",
      claim: "With enough research, the middle of the diagram can be filled in.",
      attack: "No it cannot, and continuing to imply otherwise makes you look naive rather than diligent.",
      evidence:
        "A donor-advised fund takes legal ownership of a contribution and later grants it out under the fund's own " +
        "name. The recipient's Form 990 shows the fund as the source. The original donor is not disclosed to anyone. " +
        "This is lawful, ordinary, used across the political spectrum, and it is the advertised feature of the " +
        "product rather than a loophole in it.",
      consequence:
        "No amount of public-records work closes this gap. It is not a research backlog; it is the designed " +
        "behaviour of a legal instrument.",
      fix:
        "Say so on the page, in those words. \"We cannot trace this, and here is precisely why\" is a stronger " +
        "position than a confident line through a wall, and it is the sentence that makes the rest of the site " +
        "credible.",
      closure:
        "SHARPENED, NOT CLOSED (pattern table): the donor side of the wall stands exactly as stated. But the grant " +
        "side turned out to be far more specific than aggregate totals — DonorsTrust's own Schedule I shows " +
        "EIN-matched line items to all four designated advisory-board organizations across FY2022–24, with " +
        "campaign-named purposes (“Post-Roe v. Wade Initiative,” “Going On Offense On Gender Ideology project”). " +
        "The wall hides who; it does not hide what, to whom, or what for.",
      sources: ["propublica-990", "dt-schedule-i"]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "AF-6",
      severity: "moderate",
      verdict: "Survives, with a caveat",
      claim: "Deplatforming and defunding extremist commerce works.",
      attack:
        "The research is genuinely mixed and you are cherry-picking. Users migrate. Movements persist. You are " +
        "measuring inconvenience and calling it victory.",
      evidence:
        "Partly fair, and the caveat has to be stated. Research on Parler's removal found no decrease in users' " +
        "activity across fringe platforms overall — they migrated. Work on Proud Boys supporters published in " +
        "Perspectives on Politics found group cohesion largely intact after deplatforming.\n\n" +
        "But the measured effects on reach and revenue are real and large. ADL's Bad Gateway study, authored by " +
        "Megan Squire, tracked extremist sites across roughly a decade of domain-ranking data: the Daily Stormer " +
        "went through 17 domain changes in four years and never recovered its pre-2017 traffic; 8chan peaked at rank " +
        "886 of a million and after removal never came close again; TheDonald's community retained only about 20% " +
        "of its users after leaving Reddit.",
      consequence:
        "Deplatforming does not dissolve a movement, and claiming it does is easily refuted. What it reliably does " +
        "is shrink audiences and raise costs.",
      fix:
        "Claim exactly that and nothing more. The honest framing is containment, not cure — see the defunding " +
        "section below, which is written to that limit.",
      sources: ["adl-bad-gateway", "parler-study", "proud-boys-study"]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "AF-7",
      severity: "moderate",
      verdict: "Survives — and is the real thesis",
      claim: "There is a pipeline from organized extremism to federal policy.",
      attack: "You just conceded the money doesn't flow. So what is left of your pipeline?",
      evidence:
        "What is left is the thing that was actually documented all along, and it is not financial. Communication " +
        "scholarship describes \"information laundering\": the process by which racist movements move away from " +
        "recognizable hate symbols and re-encode their agenda in the vocabulary of ordinary politics — immigration, " +
        "heritage, family, crime — so that it can be repeated by people who would reject the original.\n\n" +
        "Patriot Front is a textbook implementation. ISD describes a 2018 rebrand into the red-white-and-blue " +
        "aesthetic of \"patriotic nationalism\" — \"Reclaim America,\" \"Strong families, strong nations\" — while " +
        "the manifesto still holds that \"membership to the American nation is inherited through blood.\" SPLC quotes " +
        "the same manifesto: \"An African...may have lived...in America for centuries, yet he is not American.\" The " +
        "aesthetic changed; the content did not.\n\n" +
        "At the other end of the pipeline, four organizations carrying active designations sat on a published " +
        "advisory board and helped produce a governing manual whose proposals can be matched to executive actions " +
        "by page number.",
      consequence:
        "The transmission medium is language and legitimacy, not cash. Which is worse, not better: money leaves a " +
        "paper trail, and euphemism does not.",
      fix:
        "Reframe the site around this. The buyer's complicity in the walkthrough is real, but it is complicity in " +
        "normalization rather than in financing. That is both more defensible and more damning.",
      sources: ["klein-laundering", "isd-patriot-front", "splc-patriot-front", "mandate-pdf"]
    }
  ],

  /* ==================================================================== */
  /*  THE HYPOTHESIS LAB                                                  */
  /*  AF-1 and AF-2 killed the founding premise. This section is the      */
  /*  disciplined response: candidate reframes, each tested against the   */
  /*  records and the corkboard, verdicts stated plainly. The one that    */
  /*  closes is the one the evidence chose — not the one we started with. */
  /* ==================================================================== */

  hypothesisLab: {
    eyebrow: "Testing reframes against the record",
    title: "The lab: I thought the t-shirts funded the policy. The records showed something viler.",
    standfirst:
      "The starting suspicion — fringe merchandise money trickling up into hate-based policy — did not survive " +
      "contact with the filings. So the question was rebuilt and tested again, five ways, against the records, " +
      "the corkboard, and the subjects' own statements. Verdicts below, including the failures, because the " +
      "failures are the proof of method. The version that survives inverts the arrow entirely: hate is not the " +
      "revenue source scraping money upward. Hate is the product — commissioned, endowed, and renewed annually " +
      "by money that was already there.",

    hypotheses: [
      {
        id: "H1",
        verdict: "fails-as-stated",
        verdictLabel: "Fails as stated → refined below",
        statement: "Large private equity groups directly and indirectly fund smaller hate groups to recruit outraged voters.",
        test:
          "Two precision problems, one per clause. Actor class: no documented case surfaced of a private equity firm, " +
          "as a firm, funding a designated hate group. The documented funders are a different species: inherited " +
          "fortunes operating through perpetual foundations (Mellon banking money via Colcom), a hedge-fund " +
          "principal acting as a family investor (Robert Mercer, co-CEO of Renaissance Technologies — a quant hedge " +
          "fund, not PE), and donor-advised conduits that are anonymous by design. Intent clause: 'to recruit " +
          "outraged voters' is a motive, and motives do not appear on a Form 990.\n\n" +
          "Both defects are repairable — the actor class is wrong but adjacent, and the intent turns out to be " +
          "self-declared elsewhere. That repair is H2 through H4.",
        record: "Corkboard P-16; the actor-class correction runs through every pin below."
      },
      {
        id: "H2",
        verdict: "closes",
        verdictLabel: "Closes — documented, pattern-grade",
        statement: "Large private fortunes, via perpetual foundations, directly fund designated hate groups — at scale, for decades, on the record.",
        test:
          "The Colcom Foundation is the case that closes it. Built by Cordelia Scaife May, heiress to the Mellon " +
          "banking fortune; she provided the founding $500,000 for the Federation for American Immigration Reform in " +
          "1978 — and the Center for Immigration Studies, on the Project 2025 advisory board today, was spun out of " +
          "FAIR's own research division in 1986. Reported lifetime giving to immigration-restriction causes exceeds " +
          "$180 million; over $120 million flowed between 2006 and 2016 alone. The New York Times investigated the " +
          "estate's papers in 2019; the grants are in Colcom's 990-PF filings; the foundation's own records list the " +
          "grantees.\n\n" +
          "Scale coherence, verified by API pull (EIN 31-1479839): Colcom holds $437.8M in assets and disburses " +
          "roughly $30M a year in perpetuity. CIS's entire annual budget is about $3M.\n\n" +
          "And since this hypothesis was first drafted, the grants have been cell-verified from Colcom's own " +
          "990-PF Part XV: $1,975,000 to CIS in TY2023 alone — roughly two-thirds of CIS's entire annual " +
          "revenue — alongside $2.6M to FAIR, $2.3M to IRLI and $2.87M to NumbersUSA. At that dependency ratio, " +
          "the designated organization is not merely funded by the fortune; it operates as its policy instrument, " +
          "renewed annually. Every cell is in a sworn filing any reader can open.",
        record: "Corkboard P-13 (cell-verified) · Colcom 990-PF Part XV, object IDs 202521299349102272 / 202601279349100640 · NYT 2019 investigation · ADL's Regnery/NPI case as the second instance"
      },
      {
        id: "H3",
        verdict: "closes",
        verdictLabel: "Closes — with the platform's own declaration",
        statement: "Financial-sector money funds the mainstreaming platform rather than the hate group — and the platform states its own role.",
        test:
          "Robert Mercer held an investment stake in Breitbart News; the stake is documented, and its divestiture in " +
          "November 2017 was reported by NBC with Mercer's own public statement. In July 2016, Breitbart's executive " +
          "chairman Steve Bannon told Mother Jones, in his own words: 'We're the platform for the alt-right.'\n\n" +
          "Assemble the two documented halves: hedge-fund capital held a stake in an outlet whose own chairman " +
          "publicly declared it the platform for a movement that includes open white nationalists. No inference " +
          "about anyone's beliefs is required — the investment is on record and the role is self-declared. This is " +
          "the in-kind version of funding hate: not writing the fringe a check, but capitalizing the amplifier that " +
          "converts fringe vocabulary into mainstream reach.",
        record: "Corkboard P-14 · Mother Jones (July 2016) · NBC News on the stake and divestiture"
      },
      {
        id: "H4",
        verdict: "closes",
        verdictLabel: "Closes — the intent clause, self-declared",
        statement: "The 'recruit outraged voters' step is not an inference — it is a stated, published strategy.",
        test:
          "The weakest clause of H1 was motive. It turns out motive is the best-documented part, because the chief " +
          "practitioner published it. Christopher Rufo, Manhattan Institute senior fellow and architect of the " +
          "critical-race-theory campaign, on his own account, March 15, 2021, still live at the original URL:\n\n" +
          "'The goal is to have the public read something crazy in the newspaper and immediately think \"critical " +
          "race theory.\" We have decodified the term and will recodify it to annex the entire range of cultural " +
          "constructions that are unpopular with Americans.' And in the same thread: 'We have successfully frozen " +
          "their brand… and are steadily driving up negative perceptions. We will eventually turn it toxic.'\n\n" +
          "That is outrage manufacture described as an engineering process, by its engineer, in public, as a boast. " +
          "The recruitment mechanism the original hypothesis could only guess at is a published methodology.",
        record: "Corkboard P-15 · ARCHIVED: Wayback snapshot of 16 March 2021 — the day after posting — plus the live URL. The evidence predates any possible dispute."
      },
      {
        id: "H5",
        verdict: "open",
        verdictLabel: "Stays open — and the site says so",
        statement: "The flows are centrally coordinated through the pooled funds, with attributable intent, as a unified strategy.",
        test:
          "This is the strong-conspiracy version, and the records cannot carry it. The donor-advised wall is real " +
          "(AF-5): DonorsTrust's grantee-level Schedule I detail sits behind bot-walled PDF archives and unindexed " +
          "IRS XML dumps — the dig is specified on the corkboard (P-11), not abandoned — and even a full grant table " +
          "would show recurring pairs, not coordination or intent. Coordination requires communications, testimony, " +
          "or an internal document, and none is in hand.\n\n" +
          "Publishing this verdict is what separates the lab from the conspiracy board it feeds on. H2 through H4 " +
          "close on records and self-declarations. H5 would close only on evidence nobody here has — so it stays " +
          "open, visibly, as the boundary of the claim.",
        record: "Corkboard P-11 (blocked paths documented) · AF-5"
      }
    ],

    synthesis:
      "Here is what this project thought it would find: hate-group businesses skimming t-shirt profits into " +
      "policy. Here is what it found: the arrow points down, and the operation is endemic. Inherited and " +
      "financial-sector fortunes — through perpetual foundations, platform stakes, and think-tank sinecures — " +
      "fund designated organizations directly (H2), capitalize the amplifiers that mainstream their vocabulary " +
      "(H3), and employ strategists who publish the outrage-recruitment playbook under their own names (H4). The " +
      "fringe was never the treasury. It is the R&D lab and the casting agency: it supplies the imagery, the " +
      "vocabulary, and the manufactured villains that better-funded actors convert into voter mobilization. " +
      "'Funding hate' turns out to be a true phrase with the subject and object reversed — and the reversed " +
      "version is the one with receipts.\n\n" +
      "And then it got viler. The sweep of Colcom's filings found the same endowment funding the “progressive” " +
      "flank of its own debate — a greenwashing front at up to three-quarters of its revenue, renamed after " +
      "exposure, caught mid-rename in the funder's own filing. The patronage economy does not just buy its side " +
      "of the argument. Where the records let us look, it bought the polite opposition too. That is not a " +
      "conspiracy theory this site failed to prove. It is a line item this site found."
  },

  /* ==================================================================== */
  /*  THE DEFUNDING SECTION                                               */
  /* ==================================================================== */

  defunding: {
    eyebrow: "The intervention that has evidence behind it",
    title: "\"Cancel culture\" is a business-model problem wearing a free-speech costume.",
    standfirst:
      "The pejorative describes, almost exactly, the one intervention with measured results: withdrawing commercial " +
      "services from organizations that fund themselves by selling hate. Not silencing opinions — cancelling " +
      "merchant accounts. Here is what the research actually shows it does, and what it does not.",

    blocks: [
      {
        kind: "argument",
        head: "The distinction that does all the work",
        body:
          "Nobody is arrested. No speech is criminalized. What happens in every case below is that a private company " +
          "declines to keep processing payments, registering a domain, or hosting a store for a customer whose " +
          "publicly stated purpose it does not want to service.\n\n" +
          "That is not a speech restriction. It is a refusal of commercial partnership — the same right the " +
          "designated organizations on the Project 2025 advisory board have spent two decades litigating to expand " +
          "for bakers, florists and web designers. The principle they won is that a private business may decline to " +
          "provide services for expression it objects to. Payment processors declining to service hate commerce is " +
          "that principle, applied evenly."
      },
      {
        kind: "evidence",
        head: "What the measurements show",
        body:
          "ADL's Bad Gateway study, authored by extremism researcher Megan Squire, tracked extremist websites through " +
          "roughly a decade of public domain-ranking data before and after they lost infrastructure and payment " +
          "services. The results are specific:",
        stats: [
          { figure: "17", unit: "domain changes", label: "The Daily Stormer, over four years after losing registrars in 2017. Traffic never returned to pre-2017 levels." },
          { figure: "886 → gone", unit: "peak global rank", label: "8chan peaked at rank 886 of a million in March 2019. After removal that August it never came near those numbers again, even rebranded as 8kun." },
          { figure: "20%", unit: "of users retained", label: "TheDonald kept roughly a fifth of its 700,000+ Reddit subscribers after migrating to its own site." },
          { figure: "$114,000", unit: "in nine months", label: "What one far-right streamer earned on DLive before losing the platform — and the revenue that had to be rebuilt from scratch on self-hosted infrastructure, at his own cost." }
        ]
      },
      {
        kind: "argument",
        head: "The three conditions",
        body:
          "The same study identifies what separates an effective removal from a speed bump: consistency, surprise, " +
          "and financial barriers.\n\n" +
          "Sites given advance notice recovered fastest, because warning is preparation time. Coordinated removals " +
          "across several providers at once outperformed isolated ones, because a single provider's exit is trivially " +
          "replaced. And operations forced onto self-hosted infrastructure absorbed real costs they had previously " +
          "pushed onto someone else.\n\n" +
          "This is why campaigns aimed at one company at a time mostly fail, and why the ones that work look " +
          "coordinated and abrupt — which is precisely the quality that gets them called a mob."
      },
      {
        kind: "counter",
        head: "What it does not do — say this part out loud",
        body:
          "Deplatforming does not dissolve a movement, and claiming otherwise is both false and easy to refute.\n\n" +
          "Research on Parler's removal found users simply migrated to other fringe platforms with no net drop in " +
          "activity. Work published in Perspectives on Politics found that the cohesion of Proud Boys supporters " +
          "survived deplatforming largely intact, and that pushing people out of mainstream spaces can drive them " +
          "toward broader external networks. ADL's own researchers note that lost infrastructure is almost always " +
          "replaced by a competitor, because providers do not coordinate.\n\n" +
          "The honest claim is containment, not cure. Defunding shrinks audiences, raises operating costs, and " +
          "forces movements to spend on plumbing instead of propaganda. It does not change anybody's mind, and it " +
          "was never going to."
      },
      {
        kind: "argument",
        head: "Why the target is commerce and not opinion",
        body:
          "Every documented funding mechanism in this project is a commercial transaction: a merchant account, an " +
          "affiliate commission, a subscription, a storefront, a domain registration. SPLC's 2014 Financing Hate " +
          "report found PayPal serving at least 69 tracked hate groups, and documented one publisher earning roughly " +
          "$40,000 through PayPal and about $20,000 in Amazon affiliate commissions.\n\n" +
          "Those are vendor relationships, and vendor relationships are the part of a movement that outsiders can " +
          "actually touch. You cannot deplatform an idea. You can decline to run its payments.\n\n" +
          "Which is the real reason the phrase gets deployed: \"cancel culture\" reframes a decision about who a " +
          "company does business with as a decision about who is allowed to speak — and moves the argument onto the " +
          "one ground where the defence sounds principled."
      }
    ],

    closing:
      "The strongest version of this argument concedes the most. Defunding does not cure extremism, does not change " +
      "minds, and pushes people into worse rooms. It measurably shrinks reach and revenue, which is the only " +
      "outcome anyone has managed to demonstrate at all — and it is achieved by companies exercising exactly the " +
      "right to refuse service that the Project 2025 coalition litigated into existence."
  },

  /* ==================================================================== */
  /*  SOURCE REGISTER — everything cited above, in one place              */
  /* ==================================================================== */

  sources: {
    "mandate-pdf": {
      tier: "A", type: "Primary document",
      title: "Mandate for Leadership: The Conservative Promise",
      author: "Ed. Paul Dans and Steven Groves; foreword by Kevin D. Roberts",
      pub: "The Heritage Foundation, 2023 · ISBN 978-0-89195-174-2 · 920pp",
      url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
      note: "Advisory board printed at pages xi–xii. Roster on this site was extracted from the PDF text layer directly, not from secondary reporting."
    },
    "splc-patriot-front": {
      tier: "B", type: "Watchdog profile",
      title: "Patriot Front — Extremist Files",
      author: "Southern Poverty Law Center",
      pub: "splcenter.org",
      url: "https://www.splcenter.org/resources/extremist-files/patriot-front/",
      note: "Documents the internal merchandise economy: members required to buy branded materials from the founder at inflated prices; described as a quasi-pyramid funding leadership. Also reproduces manifesto text verbatim, which is the more valuable part."
    },
    "isd-patriot-front": {
      tier: "B", type: "Research explainer",
      title: "Patriot Front — ISD Explainer",
      author: "Institute for Strategic Dialogue",
      pub: "isdglobal.org, 31 March 2023",
      url: "https://www.isdglobal.org/isd-explainer/patriot-front/",
      note: "The 2018 rebrand into 'patriotic nationalism'; manifesto's blood-inheritance claim; Telegram as the amplification channel for offline stunts."
    },
    "adl-funding-hate": {
      tier: "B", type: "Research report",
      title: "Funding Hate: How White Supremacists Raise Their Money",
      author: "Anti-Defamation League",
      pub: "adl.org, December 2017",
      url: "https://www.adl.org/resources/report/funding-hate-how-white-supremacists-raise-their-money",
      note: "The scale check. Concludes these movements are 'particularly poorly funded'. Catalogues dues, merch, events, crowdfunding, crypto with actual figures — nearly all in the thousands."
    },
    "adl-bad-gateway": {
      tier: "B", type: "Research report",
      title: "Bad Gateway: How Deplatforming Affects Extremist Websites",
      author: "Megan Squire, for the Anti-Defamation League",
      pub: "adl.org",
      url: "https://www.adl.org/resources/report/bad-gateway-how-deplatforming-affects-extremist-websites",
      note: "The core evidence for the defunding section. Domain-ranking data across ~2013–2022; case studies on Daily Stormer, 8chan/8kun, TheDonald, and DLive streaming revenue. Identifies consistency, surprise and financial barriers as the conditions for effect."
    },
    "splc-financing-hate": {
      tier: "B", type: "Investigative report",
      title: "Financing Hate",
      author: "Southern Poverty Law Center",
      pub: "splcenter.org, 25 February 2014",
      url: "https://www.splcenter.org/resources/reports/financing-hate/",
      note: "PayPal serving at least 69 tracked hate groups; Counter-Currents Publishing raising ~$40,000 via PayPal and ~$20,000 in Amazon affiliate commissions. Note this report does NOT discuss donor-advised funds or charitable structures."
    },
    "squire-monetizing": {
      tier: "B", type: "Peer-reviewed paper",
      title: "Monetizing Propaganda: How Far-right Extremists Earn Money by Video Streaming",
      author: "Megan Squire",
      pub: "WebSci '21 · arXiv:2105.05929, 12 May 2021",
      url: "https://arxiv.org/abs/2105.05929",
      note: "Method: analysis of DLive's public transaction ledgers. Finds micropayment-dominated donation patterns tied to broadcast schedules, and a landscape split into cliques with little crossover in large donations."
    },
    "klein-laundering": {
      tier: "B", type: "Academic theory",
      title: "Slipping Racism into the Mainstream: A Theory of Information Laundering",
      author: "Adam Klein",
      pub: "Communication Theory",
      url: "https://www.researchgate.net/publication/263138211_Slipping_Racism_into_the_Mainstream_A_Theory_of_Information_Laundering",
      verify: true,
      note: "The theoretical backbone for what this site is actually documenting. VERIFY the journal, volume and year against the publisher of record before citing — the ResearchGate entry is a convenience copy, not the source."
    },
    "splc-adf": {
      tier: "B", type: "Watchdog profile",
      title: "Alliance Defending Freedom — Extremist Files",
      author: "Southern Poverty Law Center",
      pub: "splcenter.org",
      url: "https://www.splcenter.org/resources/extremist-files/alliance-defending-freedom/",
      note: "Most valuable for the sourced quotes from ADF's own counsel, which stand on their own regardless of what you think of the designation."
    },
    "splc-frc": {
      tier: "B", type: "Watchdog profile",
      title: "Family Research Council — Extremist Files",
      author: "Southern Poverty Law Center",
      pub: "splcenter.org",
      url: "https://www.splcenter.org/resources/extremist-files/family-research-council/",
      note: "Same principle: use the reproduced FRC statements, trace them to their original publication, cite those."
    },
    "propublica-990": {
      tier: "A", type: "Tax filings",
      title: "Nonprofit Explorer — IRS Form 990 database",
      author: "ProPublica",
      pub: "projects.propublica.org",
      url: "https://projects.propublica.org/nonprofits/",
      note: "Free and primary. Schedule I lists grants paid with recipient names and amounts. The workhorse source for the documented half of the diagram."
    },
    "heritage-990": {
      tier: "A", type: "Tax filing (corrected)",
      title: "The Heritage Foundation — Form 990 financials",
      author: "IRS filings via ProPublica",
      pub: "FY2022 (latest year with extracted data)",
      url: "https://projects.propublica.org/nonprofits/organizations/237327730",
      note: "CORRECTION LOGGED: this entry previously carried a ~$134M '2023' figure from an aggregator; the API pull on 16 Aug 2026 matched it to no confirmed year. Verified series: FY2019 $122.9M, FY2020 $119.1M, FY2021 $101.8M, FY2022 $106.3M. AF-2's scale argument is unchanged at any of these values."
    },
    "propublica-api-pull": {
      tier: "A", type: "Tax filings (API-verified)",
      title: "Form 990 series — Heritage, DonorsTrust, ADF, FRC, CIS, by EIN",
      author: "IRS filings via ProPublica Nonprofit Explorer API, pulled 16 Aug 2026",
      pub: "EINs 23-7327730 · 52-2166327 · 54-1660459 · 52-1792772 · 52-1449368",
      url: "https://projects.propublica.org/nonprofits/organizations/237327730",
      note: "Heritage FY2022 rev $106.3M (latest extracted year — supersedes the ~$134M aggregator figure above, which matched no confirmed year). DonorsTrust FY2023 grants out $357.9M on $1.29B assets. ADF revenue $55.2M (FY2018) → $101.8M (FY2023). CIS ~$3M/yr. FRC ~$22M/yr, filings continuing through FY2023. Full series in the ledger section and CORKBOARD.md."
    },
    "parler-study": {
      tier: "B", type: "Peer-reviewed study",
      title: "Deplatforming did not decrease Parler users' activity on fringe social media",
      author: "Multiple",
      pub: "PNAS Nexus, via PMC",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10029837/",
      note: "The strongest counter-evidence in the defunding section. Cite it there rather than waiting for someone else to."
    },
    "proud-boys-study": {
      tier: "B", type: "Peer-reviewed study",
      title: "Subdued but Unbroken: The Cohesion of Far-Right Extremist Followers after Deplatforming",
      author: "Multiple",
      pub: "Perspectives on Politics, Cambridge University Press",
      url: "https://www.cambridge.org/core/journals/perspectives-on-politics/article/subdued-but-unbroken-the-cohesion-of-farright-extremist-followers-after-deplatforming/7D34C55322D4199DDF6FC38EA02E28EF",
      verify: true,
      note: "~12 million tweets from ~9,000 Proud Boys supporters; cohesion largely intact post-deplatforming. Confirm authors and year."
    },
    "fr-h1b-rule": {
      tier: "A", type: "Federal Register final rule (raw text quoted)",
      title: "Weighted Selection Process for H-1B Registrants — citing CIS three times by name",
      author: "Department of Homeland Security",
      pub: "Doc. 2025-23853, Dec 29, 2025 (proposed: 2025-18473, Sep 24, 2025)",
      url: "https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b",
      note: "Cites George Fishman (CIS) for the 'best and brightest (those promised the highest salaries)' rationale — the same phrase as Mandate p.150, and the same Fishman printed in the Mandate contributor roster. Also cites Matloff (CIS) and Camarota (CIS). The citation trace's fourth hop, quoted from the FR's own raw full text."
    },
    "fr-public-charge": {
      tier: "A", type: "Federal Register final rule (raw text quoted)",
      title: "Public Charge Ground of Inadmissibility — DHS population estimate resting on a CIS report",
      author: "Department of Homeland Security",
      pub: "Doc. 2026-14539, Jul 20, 2026 — footnote 286",
      url: "https://www.federalregister.gov/documents/2026/07/20/2026-14539/public-charge-ground-of-inadmissibility",
      note: "Fn. 286: 'Steven Camarota, Karen Zeigler… Center for Immigration Studies (March 12, 2025).' A $3M/yr organization, two-thirds funded by one endowment, serving as a load-bearing evidentiary source in federal rulemaking. FR full-text search returns twelve CIS-citing documents total, six from 2025–26."
    },
    "alec-exposed": {
      tier: "B", type: "Leaked internal documents, published",
      title: "ALEC's model Voter ID Act — text published by ALEC Exposed",
      author: "Center for Media and Democracy (from ~800 leaked ALEC documents, 2011)",
      pub: "alecexposed.org · model bill approved by ALEC task force July 17, 2009; board Aug 27, 2009",
      url: "https://www.alecexposed.org/wiki/Voter_ID_Act_Exposed",
      note: "The instrument itself, in its own words. ALEC disbanded the producing task force (Public Safety and Elections) in April 2012 under post-Trayvon Martin scrutiny — retiring the instrument rather than defending it."
    },
    "news21-voterid": {
      tier: "B", type: "Data-journalism analysis",
      title: "Flurry of Photo ID Laws Tied to Conservative Washington Group",
      author: "News21 (Carnegie-Knight investigative initiative), 'Who Can Vote' project",
      pub: "August 2012",
      url: "https://votingrights.news21.com/article/movement/",
      note: "The distribution measurement: 62 photo-ID bills in 37 states in 2011–12; more than half sponsored by ALEC members or conference attendees. The middle link of the Weyrich loop, quantified by a journalism-school data team with published methodology."
    },
    "mccrory-4th": {
      tier: "A", type: "Federal appellate opinion (unanimous)",
      title: "NC State Conference of NAACP v. McCrory — “almost surgical precision”",
      author: "US Court of Appeals for the Fourth Circuit, No. 16-1468",
      pub: "July 29, 2016",
      url: "https://www.ca4.uscourts.gov/opinions/published/161468.p.pdf",
      note: "The adjudicated version of 'they studied which IDs to drop': the legislature requested racial usage data, then restricted the exact practices Black voters used — photo-ID types, early-voting days, same-day registration, out-of-precinct voting, preregistration. Fourteenth Amendment + VRA §2 violations. SCOTUS declined revival (2017). The opinion PDF is the citation."
    },
    "tucker-pioneer": {
      tier: "A", type: "Peer-reviewed academic monograph",
      title: "The Funding of Scientific Racism: Wickliffe Draper and the Pioneer Fund",
      author: "William H. Tucker",
      pub: "University of Illinois Press, 2002 · ISBN 0-252-02762-0 · reviewed in the Journal of American History",
      url: "https://www.bibliovault.org/BV.book.epl?ISBN=9780252074639",
      note: "The scholarly backbone of the ancestry chain: the 1937 'race betterment' charter, Draper's anti-Brown and anti-Civil Rights Act funding, the segregation academies. The anti-Brown chapter still needs book-level page cites (corkboard); the Heidelberg and Erbkrank claims are now independently anchored below."
    },
    "lombardo-breed": {
      tier: "A", type: "Peer-reviewed law-review article",
      title: "“The American Breed”: Nazi Eugenics and the Origins of the Pioneer Fund",
      author: "Paul A. Lombardo",
      pub: "65 Albany Law Review 743–830 (2002) · PubMed 11998853",
      url: "https://readingroom.law.gsu.edu/faculty_pub/11/",
      note: "Archival analysis of Draper–Laughlin–Nazi-scientist correspondence; Lombardo's stated conclusion: men with Nazi sympathies began the Pioneer Fund. With Kühl's The Nazi Connection (Oxford UP, 1994), the scholarly anchor for the Erbkrank distribution and the Heidelberg timing (degree three months before incorporation). Full text via HeinOnline/Westlaw; GSU repository holds the record."
    },
    "ushmm-laughlin": {
      tier: "A", type: "Primary document (museum holding)",
      title: "Letter from Dr. Harry H. Laughlin to Dr. Carl Schneider — accepting the Heidelberg honorary degree",
      author: "Harry H. Laughlin, 1936; held by the United States Holocaust Memorial Museum",
      pub: "USHMM 'Experiencing History' collection (also mirrored by CSHL's DNA Learning Center)",
      url: "https://perspectives.ushmm.org/item/letter-from-dr-harry-h-laughlin-to-dr-carl-schneider/collection/higher-education-in-nazi-germany",
      note: "The first president of the fund that seeded FAIR, thanking a Nazi university for honoring his contribution to 'race cleansing' — in his own hand, in the Holocaust museum's collection. The single most unanswerable document in the ancestry chain."
    },
    "weyrich-1980": {
      tier: "A", type: "Self-declaration (on video)",
      title: "Paul Weyrich: “I don't want everybody to vote… our leverage in the elections quite candidly goes up as the voting populace goes down.”",
      author: "Co-founder of The Heritage Foundation, ALEC, and the Moral Majority",
      pub: "National Affairs Briefing, Dallas, August 1980",
      url: "https://www.youtube.com/watch?v=8GBAsFwPglw",
      verify: true,
      note: "Four decades of citation without successful dispute; the video is the artifact. Archive the clip (corkboard hook). The doctrine of electorate-shrinking, on tape, from the founding generation of the Project 2025 convener."
    },
    "canada-listing": {
      tier: "A", type: "Government criminal-law instrument",
      title: "Canada lists 13 new terrorist entities — incl. Proud Boys, Atomwaffen Division, The Base, Russian Imperial Movement",
      author: "Public Safety Canada, Government of Canada",
      pub: "canada.ca, 3 February 2021",
      url: "https://www.canada.ca/en/public-safety-canada/news/2021/02/government-of-canada-lists-13-new-groups-as-terrorist-entities-and-completes-review-of-seven-others.html",
      note: "A G7 government applying its Criminal Code to American organizations — asset freezes, criminalized financing and recruitment. The single strongest non-SPLC designation instrument available to this site. New Zealand followed for Proud Boys and The Base (June 2022)."
    },
    "splc-yih-2025": {
      tier: "B", type: "Annual report (used as archivist, not accuser)",
      title: "The Year in Hate & Extremism 2025 (incl. the 'Lovin' on Hitler' companion)",
      author: "Southern Poverty Law Center",
      pub: "splcenter.org, 2025 · archived at archive.ph/u1WWF (+ 'Lovin' on Hitler' at archive.ph/fPeEf)",
      url: "https://www.splcenter.org/resources/reports/year-hate-extremism-2025/",
      note: "Originally the source of record for the Fuentes/Hitler quote — now superseded by three archived independent write-ups of the Dec 8, 2025 broadcast (JTA archive.ph/b7yWy, Forward archive.ph/UJnET, Times of Israel archive.ph/427AC) carrying the full exchange: 'Yes, I do… And I'm tired of pretending he's not.' SPLC is no longer needed anywhere in that chain."
    },
    "colcom-pfir": {
      tier: "A", type: "Sworn filings, cell-level (extracted 16 Aug 2026)",
      title: "Colcom → Progressives for Immigration Reform / Institute for Sound Public Policy, five consecutive filings",
      author: "Colcom Foundation Form 990-PF Part XV; recipient EIN 26-1634671",
      pub: "Object IDs 202241329349103649 · 202341189349100634 · 202401239349101030 · 202521299349102272 · 202601279349100640",
      note: "The both-flanks finding: the endowment funding FAIR/CIS also funded the 'progressive' flank of the same debate, under two names (rename caught mid-transition in TY2020 with identical purpose strings), at up to ~74% of the recipient's revenue. Recipient now winding down as the patron tapers. Characterization of PFIR as a greenwashing front rests on SPLC's Greenwash report (tier B); the grants themselves are tier A."
    },
    "splc-greenwash": {
      tier: "B", type: "Special report",
      title: "Greenwash: Nativists, Environmentalism and the Hypocrisy of Hate",
      author: "Southern Poverty Law Center",
      pub: "splcenter.org (special report PDF)",
      url: "https://www.splcenter.org/wp-content/uploads/files/d6_legacy_files/downloads/publication/Greenwash.pdf",
      note: "Documents PFIR as a Tanton-network front pitching restriction in environmentalist vocabulary; first ED a former FAIR staff attorney. ARCHIVED: archive.ph/AZbWt (16 Aug 2026). Pairs with SPLC Hatewatch's staff/cash-sharing reporting."
    },
    "dt-schedule-i": {
      tier: "A", type: "Sworn filing, cell-level (extracted 16 Aug 2026)",
      title: "DonorsTrust Form 990 Schedule I — grant rows, FY2022–FY2024",
      author: "DonorsTrust Inc's own e-filed returns, rendered by ProPublica full-text viewer",
      pub: "IRS e-file object IDs 202323049349300742 · 202423189349304787 · 202513179349312256",
      url: "https://projects.propublica.org/nonprofits/organizations/522166327",
      note: "EIN-matched grant rows to ADF, FRC, CIS, FAIR, Heritage, IRLI and NumbersUSA, with verbatim purposes including “for the Post-Roe v. Wade Initiative” ($500K, FY2022) and “for the Going On Offense On Gender Ideology project” ($365.5K, FY2024). Full table and caveats in the pattern-table section; extraction method on the corkboard (P-17)."
    },
    "nyt-colcom": {
      tier: "B", type: "Investigative report",
      title: "Why an Heiress Spent Her Fortune Trying to Keep Immigrants Out",
      author: "The New York Times (investigation of the Cordelia Scaife May estate papers)",
      pub: "August 2019",
      url: "https://www.nytimes.com/2019/08/14/us/anti-immigration-cordelia-scaife-may.html",
      verify: true,
      note: "The estate-papers investigation behind the $180M+ lifetime figure and the FAIR founding grant. Confirm exact URL/date against the NYT archive; the figures are corroborated by Colcom's 990-PF series (API-verified) and multiple secondary analyses."
    },
    "colcom-990": {
      tier: "A", type: "Tax filings (API-verified)",
      title: "Colcom Foundation — Form 990-PF series",
      author: "IRS filings via ProPublica Nonprofit Explorer API, pulled 16 Aug 2026",
      pub: "EIN 31-1479839",
      url: "https://projects.propublica.org/nonprofits/organizations/311479839",
      note: "Assets $437.8M, disbursing ~$28–44M/yr in perpetuity. CELL-VERIFIED 16 Aug 2026 via the full-text viewer: Part XV rows show TY2023 grants of $1,975,000 to CIS, $2,600,000 to FAIR, $2,300,000 to IRLI, $2,870,000 to NumbersUSA — ~$9.7M to the Tanton network in one year, 'GENERAL OPERATING SUPPORT.' The single CIS grant ≈ two-thirds of CIS's entire annual revenue. Object IDs 202521299349102272, 202601279349100640."
    },
    "mother-jones-bannon": {
      tier: "A", type: "Self-declaration (on the record)",
      title: "Steve Bannon to Mother Jones: “We're the platform for the alt-right.”",
      author: "Interview with Sarah Posner, Mother Jones",
      pub: "July 2016",
      url: "https://www.motherjones.com/politics/2016/08/stephen-bannon-donald-trump-alt-right-breitbart-news/",
      note: "The platform role, declared by the platform's own executive chairman, on the record, pre-election. ARCHIVED: archive.ph/1TwT8 (16 Aug 2026). Pairs with the documented Mercer stake (NBC, Nov 2017 divestiture) to complete H3."
    },
    "rufo-tweets": {
      tier: "A", type: "Self-declaration (ARCHIVED — scrub-proof)",
      title: "Christopher Rufo's published CRT strategy thread",
      author: "@realchrisrufo, on his own account",
      pub: "March 15, 2021 · Wayback snapshot 16 March 2021 — archived the day after posting",
      url: "https://web.archive.org/web/20210316084919/https://twitter.com/realchrisrufo/status/1371541044592996352",
      note: "“The goal is to have the public read something crazy in the newspaper and immediately think 'critical race theory.' We have decodified the term and will recodify it…” The outrage-recruitment mechanism, self-declared by its engineer. The citation now points at the CONTEMPORANEOUS archive — captured within a day of posting, years before this project existed. Deletion cannot touch it; fabrication claims are impossible. Live URL and further snapshots logged in docs/ARCHIVES.md."
    },
    "crs-r46318": {
      tier: "A", type: "Congressional Research Service report",
      title: "Federal Data on Hate Crimes in the United States (R46318)",
      author: "Congressional Research Service",
      pub: "congress.gov · updated December 2025",
      url: "https://www.congress.gov/crs-product/R46318",
      note: "Congress's own nonpartisan explainer of why FBI hate-crime counts and BJS victimization estimates diverge by an order of magnitude and a half. The neutral anchor for the undercount section — CRS cannot be dismissed as advocacy by anyone."
    },
    "bjs-ncvs": {
      tier: "A", type: "Federal statistical series",
      title: "Hate Crime Victimization — National Crime Victimization Survey",
      author: "Bureau of Justice Statistics, US Department of Justice",
      pub: "bjs.ojp.gov",
      url: "https://bjs.ojp.gov/data-collection/ncvs",
      note: "The survey-based estimate: ~250,000 hate-crime victimizations annually (2003–2011 series and persisting in later reports), against ~6,000–12,000 in FBI annual data. Both numbers are DOJ's."
    },
    "fbi-cde": {
      tier: "A", type: "Federal data portal",
      title: "FBI Crime Data Explorer — hate crime & per-agency submissions",
      author: "Federal Bureau of Investigation",
      pub: "cde.ucr.cjis.gov",
      url: "https://cde.ucr.cjis.gov/",
      note: "Primary portal for the reported numbers AND for the per-agency zeros. Corkboard P-10: the agencies-reporting-zero pattern is checkable here directly."
    },
    "roberts-foreword": {
      tier: "A", type: "Self-declaration (verified against text layer)",
      title: "Kevin Roberts, foreword to Mandate for Leadership — printed pages 1–17",
      author: "Kevin D. Roberts, The Heritage Foundation",
      pub: "Mandate for Leadership, 2023, pp. 1–17",
      url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
      note: "Source of the p.5 pornography/registered-sex-offenders passage and the pp.4–5 delete-the-terms instruction, both extracted verbatim from the PDF text layer. The strongest self-declaration evidence on the site."
    },
    "cep-patriot-front": {
      tier: "B", type: "Research profile",
      title: "Patriot Front / Vanguard America",
      author: "Counter Extremism Project",
      pub: "counterextremism.com",
      url: "https://www.counterextremism.com/supremacy/patriot-front-vanguard-america",
      verify: true,
      note: "Third independent profile, useful for reducing SPLC single-sourcing per AF-4. Not yet read in full."
    }
  }
};
