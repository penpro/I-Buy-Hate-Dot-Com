/* ==========================================================================
   FundingHate — chapter → author → employer table
   --------------------------------------------------------------------------
   All 30 chapters of Mandate for Leadership, with named authors as printed in
   the book's own table of contents, and each author's affiliation as given in
   the book's own Authors section (printed pp. xv–xxiv) where available.

   Source: the local PDF's text layer — ToC (PDF pp. 5–8) and Authors bios
   (PDF pp. 15–24). Affiliations marked v:true were drawn from general
   knowledge rather than the bios text and need checking against the bios
   or contemporaneous records before public use.

   board:true = the affiliation appears on the PRINTED advisory board
   (data/roster.js, pages xi–xii). The point of the table: the book's own
   ToC + its own roster, joined, show the coalition writing its own playbook.
   ========================================================================== */

window.FH_AUTHORS = {

  intro: {
    eyebrow: "The book's own ToC, joined to its own roster",
    title: "Thirty chapters, named authors, traceable employers",
    standfirst:
      "Nobody leaked this. Every chapter of Mandate for Leadership carries its author's name in the table of " +
      "contents, and most authors' affiliations are printed in the book's own Authors section. Join those two " +
      "lists to the advisory board printed eleven pages earlier and the machine describes itself: the coalition's " +
      "organizations wrote the chapters governing the agencies they seek to run. Rows are the book's own data; " +
      "affiliation cells drawn from outside the bios carry verify badges."
  },

  chapters: [
    { n: 1,  title: "White House Office", authors: "Rick Dearborn", affil: "Former Trump WH deputy chief of staff", board: false, v: true },
    { n: 2,  title: "Executive Office of the President", authors: "Russ Vought", affil: "President, Center for Renewing America", board: true, v: false,
      note: "Later OMB Director. CRA is on the printed board." },
    { n: 3,  title: "Central Personnel Agencies", authors: "Donald Devine, Dennis Dean Kirk, Paul Dans", affil: "Heritage Foundation (Dans directed Project 2025 itself)", board: true, v: true },
    { n: 4,  title: "Department of Defense", authors: "Christopher Miller", affil: "Former Acting Secretary of Defense", board: false, v: true },
    { n: 5,  title: "Department of Homeland Security", authors: "Ken Cuccinelli", affil: "Center for Renewing America", board: true, v: true,
      note: "The chapter containing the H-1B 'best and brightest at the highest wages' proposal — see the citation trace." },
    { n: 6,  title: "Department of State", authors: "Kiron K. Skinner", affil: "Pepperdine; former State Dept policy planning", board: false, v: true },
    { n: 7,  title: "Intelligence Community", authors: "Dustin J. Carmack", affil: "The Heritage Foundation", board: true, v: false },
    { n: 8,  title: "Media Agencies (USAGM / CPB)", authors: "Mora Namdar; Mike Gonzalez", affil: "Gonzalez: The Heritage Foundation", board: true, v: true },
    { n: 9,  title: "USAID", authors: "Max Primorac", affil: "The Heritage Foundation", board: true, v: false },
    { n: 10, title: "Department of Agriculture", authors: "Daren Bakst", affil: "Competitive Enterprise Institute", board: true, v: false },
    { n: 11, title: "Department of Education", authors: "Lindsey M. Burke", affil: "The Heritage Foundation (Center for Education Policy)", board: true, v: false },
    { n: 12, title: "Department of Energy", authors: "Bernard L. McNamee", affil: "Former FERC commissioner", board: false, v: true },
    { n: 13, title: "EPA", authors: "Mandy M. Gunasekara", affil: "Independent Women's Forum senior fellow; former EPA chief of staff", board: true, v: true,
      note: "IWF is on the printed board." },
    { n: 14, title: "HHS", authors: "Roger Severino", affil: "The Heritage Foundation (VP, Domestic Policy)", board: true, v: true },
    { n: 15, title: "HUD", authors: "Benjamin S. Carson, Sr., MD", affil: "American Cornerstone Institute (founder)", board: true, v: false },
    { n: 16, title: "Department of the Interior", authors: "William Perry Pendley", affil: "Former BLM acting director", board: false, v: true },
    { n: 17, title: "Department of Justice", authors: "Gene Hamilton", affil: "America First Legal Foundation (VP & general counsel)", board: true, v: false },
    { n: 18, title: "Department of Labor", authors: "Jonathan Berry", affil: "Boyden Gray & Associates; former DOL policy head", board: false, v: false },
    { n: 19, title: "Department of Transportation", authors: "Diana Furchtgott-Roth", affil: "The Heritage Foundation", board: true, v: false },
    { n: 20, title: "Department of Veterans Affairs", authors: "Brooks D. Tucker", affil: "Former VA chief of staff", board: false, v: true },
    { n: 21, title: "Department of Commerce", authors: "Thomas F. Gilman", affil: "Former Commerce CFO", board: false, v: true },
    { n: 22, title: "Department of the Treasury", authors: "William L. Walton, Stephen Moore, David R. Burton", affil: "Moore & Burton: Heritage; Walton: investor, Council for National Policy president", board: true, v: true },
    { n: 23, title: "Export–Import Bank (point/counterpoint)", authors: "Veronique de Rugy; Jennifer Hazelton", affil: "de Rugy: Mercatus Center", board: false, v: true },
    { n: 24, title: "Federal Reserve", authors: "Paul Winfree", affil: "Economic Policy Innovation Center; former Heritage", board: false, v: true },
    { n: 25, title: "Small Business Administration", authors: "Karen Kerrigan", affil: "SBE Council", board: false, v: true },
    { n: 26, title: "Trade (point/counterpoint)", authors: "Peter Navarro; Kent Lassman", affil: "Navarro: former WH trade adviser; Lassman: Competitive Enterprise Institute (CEI on board)", board: true, v: true },
    { n: 27, title: "Financial Regulatory Agencies (SEC / CFPB)", authors: "David R. Burton; Robert Bowes", affil: "Burton: The Heritage Foundation", board: true, v: true },
    { n: 28, title: "Federal Communications Commission", authors: "Brendan Carr", affil: "Sitting FCC commissioner at publication; later FCC chairman", board: false, v: true },
    { n: 29, title: "Federal Election Commission", authors: "Hans A. von Spakovsky", affil: "The Heritage Foundation (Election Law Reform Initiative)", board: true, v: false,
      note: "The election-law chapter, authored by the movement's chief voter-fraud-alarm proponent — the Weyrich loop's present tense." },
    { n: 30, title: "Federal Trade Commission", authors: "Adam Candeub", affil: "Michigan State University College of Law", board: false, v: true }
  ],

  contributorHighlights: {
    head: "And in the fine print: designated-org personnel in the contributor roster",
    rows: [
      { org: "Center for Immigration Studies (designated)", people: "Andrew “Art” Arthur · Julie Axelrod · Jon Feere · George Fishman · Jason Richwine · Jessica M. Vaughan — six staffers, all credited in print", v: false },
      { org: "Alliance Defending Freedom (designated)", people: "Erik Baptist", v: false },
      { org: "Family Research Council (designated)", people: "Christopher Gacek", v: false },
      { org: "Center for Family and Human Rights (designated)", people: "Austin Ruse — the same Austin Ruse whose 2014 “taken out and shot” apology is archived above", v: false }
    ],
    note:
      "Extracted from the contributors list in the book's own front matter (printed pp. xxv–xxxii). All four " +
      "designated advisory-board organizations placed personnel inside the book itself. The playbook's " +
      "acknowledgments section is the coalition confessing its own org chart."
  },

  tally: {
    boardChapters: "17 of 30 chapters carry at least one author affiliated with a printed advisory-board organization",
    heritage: "At least 9 chapters authored or co-authored by Heritage Foundation personnel — the convener wrote nearly a third of its own playbook",
    caveat: "Both counts derive from the affiliation cells above; cells marked with verify badges should be confirmed against the book's bios before quoting the tallies publicly."
  }
};
