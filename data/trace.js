/* ==========================================================================
   FundingHate — the citation trace
   --------------------------------------------------------------------------
   The single most persuasive artifact this project set out to build: one
   designated organization's language, followed hop by hop from its own staff,
   through the playbook, into the Federal Register — with the phrase itself
   traveling verbatim. Zero inference. Every hop is a page number or a federal
   document number.

   Built 2026-08-16 from: the local Mandate PDF text layer (contributors list
   + DHS chapter), and Federal Register full-text API results (the FR's own
   raw text, quoted below).
   ========================================================================== */

window.FH_TRACE = {

  intro: {
    eyebrow: "The photograph, finally taken",
    title: "Watch one phrase travel: “best and brightest… at the highest wages”",
    standfirst:
      "This site has argued that what moves upward from designated organizations is language. Here is the " +
      "proof, caught mid-flight. One phrase — one policy — traced from a designated, eugenics-seeded, " +
      "heiress-sustained organization's own staff, through the playbook's printed pages, into the Federal " +
      "Register as binding regulation. The phrase does not paraphrase. It repeats."
  },

  hops: [
    {
      n: 1,
      label: "The organization",
      head: "Center for Immigration Studies — designated, seeded, sustained",
      body:
        "Everything this site has already cell-verified about CIS applies here: SPLC-designated (designation " +
        "disputed, litigation dismissed); spun out of FAIR in 1986; FAIR seeded with ~$1.2M from the Pioneer " +
        "Fund — chartered 1937 for “race betterment”; CIS sustained today by Colcom's Mellon-fortune endowment " +
        "at roughly two-thirds of its ~$3M budget, per Colcom's own Part XV. The organization about to appear " +
        "in a federal rule's footnotes is the one whose entire ancestry chain is documented upstream.",
      cite: "This site's ledger, pattern table, and ancestry chain — API- and filing-verified."
    },
    {
      n: 2,
      label: "The personnel",
      head: "Six CIS staffers are printed contributors to Mandate for Leadership",
      body:
        "Not cited — credited. The book's own contributor roster (front matter, pages xxv–xxxii) lists Andrew " +
        "“Art” Arthur, Julie Axelrod, Jon Feere, George Fishman, Jason Richwine, and Jessica M. Vaughan — all " +
        "identified in print as Center for Immigration Studies. The same roster credits Austin Ruse (C-Fam), " +
        "Erik Baptist (Alliance Defending Freedom), and Christopher Gacek (Family Research Council). The " +
        "designated organizations did not lobby the playbook from outside. They helped write it, under their " +
        "own names, on its own pages.",
      cite: "Mandate for Leadership (2023), contributors list — extracted from the PDF text layer (PDF pp. 25–31 / printed xxv–xxxi)."
    },
    {
      n: 3,
      label: "The playbook",
      head: "Mandate for Leadership, printed page 150 — the proposal",
      body:
        "The DHS chapter (author: Ken Cuccinelli) proposes, verbatim: “H-1B reform. Transform the program into " +
        "an elite mechanism exclusively to bring in the ‘best and brightest’ at the highest wages while " +
        "simultaneously ensuring that U.S. workers are not being disadvantaged by the program.” The same " +
        "formulation appears at printed page 145: “transformed into an elite program through which employers " +
        "are vying to bring in only the top foreign workers at the highest wages.”",
      cite: "Mandate for Leadership, printed pp. 145 & 150 — verbatim from the PDF text layer; the reader can download the archived PDF and check."
    },
    {
      n: 4,
      label: "The rule",
      head: "Federal Register, Dec 29, 2025 — the phrase arrives, citing CIS by name",
      body:
        "DHS's final rule replacing the H-1B lottery with wage-weighted selection (Doc. 2025-23853) justifies " +
        "the policy by citing — among its named authorities — “George Fishman, Center for Immigration Studies, " +
        "Elon Musk is Right about H-1Bs (Jan. 9, 2025)… (noting the benefit of giving preference to prospective " +
        "H-1B workers who are ‘the best and brightest (those promised the highest salaries)’).” The rule cites " +
        "CIS twice more: Norman Matloff's CIS report and Steven Camarota's CIS op-ed. George Fishman — the " +
        "cited authority — is the same George Fishman printed in the Mandate's contributor roster at hop 2.",
      cite: "90 FR, Doc. 2025-23853 (Dec 29, 2025), 'Weighted Selection Process for Registrants and Petitioners…' — quoted from the Federal Register's own raw full text. Proposed rule: Doc. 2025-18473 (Sep 24, 2025)."
    }
  ],

  sideBySide: {
    head: "The phrase, side by side",
    left: {
      label: "Mandate for Leadership, printed p. 150 (2023)",
      text: "Transform the program into an elite mechanism exclusively to bring in the “best and brightest” at the highest wages…"
    },
    right: {
      label: "Federal Register, Doc. 2025-23853 (2025) — citing Fishman, CIS",
      text: "…giving preference to prospective H-1B workers who are “the best and brightest (those promised the highest salaries)”…"
    }
  },

  bonus: {
    head: "And it is not a one-off",
    body:
      "A Federal Register full-text search for “Center for Immigration Studies” returns twelve documents — six " +
      "of them from 2025–2026 alone: the parole-termination notice (Mar 2025), the H-1B weighted-selection " +
      "proposed and final rules (Sep/Dec 2025), the employment-authorization proposal (Jun 2026), the " +
      "fixed-admission-period rule (Jul 2026), and the new Public Charge rule (Jul 2026) — where DHS defends " +
      "its own population estimate by citing, at footnote 286, “Steven Camarota, Karen Zeigler… Center for " +
      "Immigration Studies (March 12, 2025).” A $3M-a-year organization, two-thirds funded by one perpetual " +
      "endowment, is functioning as a load-bearing evidentiary source for the federal rulebook. That is the " +
      "influence-per-dollar thesis, notarized.",
    cite: "federalregister.gov full-text search, run 2026-08-16; Public Charge final rule Doc. 2026-14539 (Jul 20, 2026), fn. 286 — quoted from the FR raw text."
  },

  closing:
    "This is what the whole site compresses to. The money is anonymous, the ancestry is documented, the " +
    "designation is disputed — but the phrase is not arguable. It was printed in the playbook in 2023, and it " +
    "appeared in the Federal Register in 2025 with the designated organization's staffer cited as authority. " +
    "Laundering, when it works, leaves no receipts. Language always does."
};
