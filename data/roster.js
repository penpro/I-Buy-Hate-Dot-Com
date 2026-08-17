/* ==========================================================================
   FundingHate — The Project 2025 Advisory Board, as printed
   --------------------------------------------------------------------------
   PROVENANCE — this is the strongest artifact on the site.

   Transcribed directly from the primary document:
     Mandate for Leadership: The Conservative Promise
     © 2023 The Heritage Foundation · ISBN 978-0-89195-174-2
     Foreword by Kevin D. Roberts, PhD · Edited by Paul Dans and Steven Groves
     920 pages · PDF produced 11 July 2023 (Adobe InDesign 18.3)
     Advisory board printed on pages xi–xii (PDF pages 11–12)
     https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf

   Extracted from the PDF text layer, not retyped from a news summary.
   Order below is the order printed in the book.

   ------------------------------------------------------------------------
   THE COUNT MATTERS. The printed advisory board is 54 organizations.
   ------------------------------------------------------------------------
   You will very often see "100+" in reporting and in advocacy material. That
   number is real but it refers to a DIFFERENT list: Heritage's rolling
   "coalition partners" roster, announced by press release as it grew past 75
   and then past 100 after this book went to print in July 2023.

   Consequences, and they are not minor:
     - American Family Association, Liberty Counsel and Moms for Liberty are
       routinely named as Project 2025 advisory board members. They are NOT on
       the printed advisory board. They belong to the wider coalition list.
     - Any claim on this site about "the advisory board" must be checked
       against THIS array, not against a press summary.

   Getting this right costs nothing and makes the finding unfalsifiable.
   Getting it wrong hands a hostile reader a free, correct rebuttal.
   ========================================================================== */

window.FH_ROSTER = {

  source: {
    title: "Mandate for Leadership: The Conservative Promise",
    publisher: "The Heritage Foundation",
    year: 2023,
    isbn: "978-0-89195-174-2",
    pages: 920,
    boardPages: "xi–xii",
    pdfDate: "2023-07-11",
    url: "https://static.heritage.org/project2025/2025_MandateForLeadership_FULL.pdf",
    method: "Text extracted from the published PDF's text layer and transcribed verbatim."
  },

  /* Designation key:
       splc  — designated by the Southern Poverty Law Center, with category.
               A designation by an advocacy organization. Not a legal finding.
               Disputed by every organization so designated. Say so.
       null  — no designation known to this project. The overwhelming majority.
               Do not imply otherwise; most of this list is ordinary movement
               conservatism and pretending it isn't destroys the argument.     */

  board: [
    { name: "Alabama Policy Institute" },
    { name: "Alliance Defending Freedom", splc: "Anti-LGBTQ",
      note: "Designated by SPLC. Large Christian-right litigation shop with a substantial record of US Supreme Court wins. Disputes the designation publicly and at length." },
    { name: "American Compass" },
    { name: "The American Conservative" },
    { name: "America First Legal Foundation" },
    { name: "American Accountability Foundation" },
    { name: "American Center for Law and Justice" },
    { name: "American Cornerstone Institute" },
    { name: "American Council of Trustees and Alumni" },
    { name: "American Legislative Exchange Council",
      note: "Co-founded 1973 by Paul Weyrich — who also co-founded Heritage, and whose 1980 'I don't want everybody to vote' speech is on video. ALEC's 2009 model Voter ID Act (leaked 2011) preceded the 2011–12 wave of 62 photo-ID bills, over half sponsored by ALEC members per the News21 analysis. See the Weyrich loop in the landscape section." },
    { name: "The American Main Street Initiative" },
    { name: "American Moment" },
    { name: "American Principles Project" },
    { name: "Center for Equal Opportunity" },
    { name: "Center for Family and Human Rights", splc: "Anti-LGBTQ",
      note: "Known as C-Fam. Designated by SPLC since 2013. Operates primarily at the United Nations. Disputes the designation." },
    { name: "Center for Immigration Studies", splc: "Anti-immigrant",
      note: "Designated by SPLC. Sued SPLC over the designation in January 2019; the suit was dismissed in September 2019. Widely cited in mainstream media without the designation attached." },
    { name: "Center for Renewing America" },
    { name: "Claremont Institute",
      note: "NOT SPLC-designated. Frequently named in reporting on the 2020 election-law memos. Keep those two facts apart." },
    { name: "Coalition for a Prosperous America" },
    { name: "Competitive Enterprise Institute" },
    { name: "Conservative Partnership Institute" },
    { name: "Concerned Women for America" },
    { name: "Defense of Freedom Institute" },
    { name: "Ethics and Public Policy Center" },
    { name: "Family Policy Alliance" },
    { name: "Family Research Council", splc: "Anti-LGBTQ",
      note: "Designated by SPLC; disputes it. Obtained association-of-churches status ~2020, reported as permitting reduced disclosure — though 990s with full data continue through FY2023 (EIN 52-1792772). Open reconciliation on the corkboard." },
    { name: "First Liberty Institute" },
    { name: "Forge Leadership Network" },
    { name: "Foundation for Defense of Democracies" },
    { name: "Foundation for Government Accountability" },
    { name: "FreedomWorks" },
    { name: "The Heritage Foundation",
      note: "Convener and publisher. Not designated by anyone. FY2022 revenue $106.3M (API-verified, EIN 23-7327730) — the scale that makes the upward-money hypothesis implausible. See the adversarial assessment and the ledger." },
    { name: "Hillsdale College" },
    { name: "Honest Elections Project" },
    { name: "Independent Women's Forum" },
    { name: "Institute for the American Worker" },
    { name: "Institute for Energy Research" },
    { name: "Institute for Women's Health" },
    { name: "Intercollegiate Studies Institute" },
    { name: "James Madison Institute" },
    { name: "Keystone Policy" },
    { name: "The Leadership Institute" },
    { name: "Liberty University" },
    { name: "National Association of Scholars" },
    { name: "National Center for Public Policy Research" },
    { name: "Pacific Research Institute" },
    { name: "Patrick Henry College" },
    { name: "Personnel Policy Operations" },
    { name: "Recovery for America Now Foundation" },
    { name: "1792 Exchange" },
    { name: "Susan B. Anthony Pro-Life America" },
    { name: "Texas Public Policy Foundation" },
    { name: "Teneo Network" },
    { name: "Young America's Foundation" }
  ],

  /* Stated plainly on the page, because the proportion is the honest finding
     and it is still a remarkable one. */
  framing:
    "Four of the fifty-four organizations printed on the Project 2025 advisory board carry an active " +
    "hate-group designation from the Southern Poverty Law Center. Fifty do not. That is the finding: " +
    "not that the coalition is a hate group, but that a governing manual for the United States was " +
    "assembled with four designated organizations seated at the table and their names printed in the " +
    "front matter — where anyone could have read them at any point in the last three years."
};
