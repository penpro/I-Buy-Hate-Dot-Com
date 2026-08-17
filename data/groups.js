/* ==========================================================================
   FundingHate — "It's not just the SPLC"
   --------------------------------------------------------------------------
   The answer to AF-4. Three parts:
     1. definitions — how governments, courts, and scholars define the object,
        so the argument never rests on one NGO's say-so.
     2. ladder — the corroboration hierarchy. SPLC designation is deliberately
        placed at the FLOOR. Everything above it survives "SPLC is biased."
     3. groups — the table. Each row: what corroboration exists OUTSIDE the
        SPLC, plus the subject's own words where they said it out loud.

   HONESTY RULES FOR THIS FILE
   - A government terrorist designation and a "we don't like their politics"
     designation are different species. The `verdict` field says which a row is.
   - Several civil judgments were litigated BY the SPLC — but the finder of
     fact was a jury or federal judge. Say both halves.
   - The policy orgs at the bottom (ADF, FRC, CIS...) have NO government or
     court adjudication of hate-group status. Their rows say so plainly. For
     them the corroboration is their own published words — which is why the
     quote wall exists. Pretending they are Atomwaffen wrecks the whole table.
   - January 2025 pardons: several convictions below were pardoned or
     commuted. A pardon is executive clemency; it does not vacate the jury's
     findings of fact. Rows note both.
   - verify:true = drafted from general knowledge, not yet confirmed against
     the cited record. Same amber badge as everywhere else on the site.
   ========================================================================== */

window.FH_GROUPS = {

  intro: {
    eyebrow: "Answering AF-4 — the single-source problem",
    title: "It's not just the SPLC.",
    standfirst:
      "The laziest rebuttal this site will meet is “the SPLC is a liberal bullshit factory.” Fine — throw the SPLC " +
      "out. What remains: two G7 governments and three Five Eyes allies designating American groups as terrorist " +
      "entities under criminal law; federal juries returning seditious-conspiracy convictions and eight-figure " +
      "civil verdicts; a federal statute that has carried a hate group's name since 1871; interior-ministry bans " +
      "in Germany; and — above all — the subjects' own mouths. The table below runs every group through criteria " +
      "that owe nothing to the Southern Poverty Law Center, and marks plainly the rows where no such external " +
      "corroboration exists."
  },

  /* ------------------------------------------------------------------ */
  definitions: [
    {
      who: "FBI — hate crime (not hate group)",
      kind: "gov",
      text: "“A criminal offense against a person or property motivated in whole or in part by an offender's bias against race, religion, disability, sexual orientation, ethnicity, gender, or gender identity.” Verified verbatim against fbi.gov, 16 Aug 2026 — as is the next sentence on the same page: “Hate itself is not a crime.” The FBI designates no hate GROUPS at all — it investigates crimes. Anyone claiming “the FBI doesn't call them a hate group” as exoneration is citing an agency that calls nobody a hate group, by policy.",
      url: "https://www.fbi.gov/investigate/civil-rights/hate-crimes"
    },
    {
      who: "US federal statute",
      kind: "gov",
      text: "The Hate Crime Statistics Act (1990) defines the bias categories the FBI counts; the Matthew Shepard and James Byrd Jr. Hate Crimes Prevention Act (2009, 18 U.S.C. § 249) criminalizes bias-motivated violence federally. And the Ku Klux Klan Act of 1871 — still litigated today as 42 U.S.C. § 1985, and the statute under which the Charlottesville organizers were sued — has carried a specific hate group's name in the United States Code for over 150 years. The federal government has named at least one hate group since Reconstruction.",
      url: "https://www.justice.gov/crt/matthew-shepard-and-james-byrd-jr-hate-crimes-prevention-act-2009",
      verify: true
    },
    {
      who: "Canada — Criminal Code terrorist listing",
      kind: "gov",
      text: "Under s. 83.05, an entity is listed when there are reasonable grounds to believe it has knowingly carried out, attempted, participated in or facilitated terrorist activity. In February 2021 Canada listed Proud Boys, Atomwaffen Division, The Base and the Russian Imperial Movement — freezing assets and criminalizing their financing and recruitment. This is a criminal-law instrument applied by a G7 government to American organizations.",
      url: "https://www.canada.ca/en/public-safety-canada/news/2021/02/government-of-canada-lists-13-new-groups-as-terrorist-entities-and-completes-review-of-seven-others.html"
    },
    {
      who: "US State Department — SDGT",
      kind: "gov",
      text: "On April 6, 2020 the State Department designated the Russian Imperial Movement and three named leaders as Specially Designated Global Terrorists under E.O. 13224 — the first white-supremacist entity so designated, published in the Federal Register (Doc. 2020-07835). The US government's own counterterrorism apparatus has therefore already crossed the line critics claim doesn't exist. Footnote worth savoring: The Heritage Foundation published a commentary praising this designation as 'an important step in keeping America safe' — the Project 2025 convener endorsing the very instrument.",
      url: "https://www.federalregister.gov/documents/2020/04/14/2020-07835/designation-of-russian-imperial-movement-as-a-specially-designated-global-terrorist"
    },
    {
      who: "Academic consensus (sociology of organized racism)",
      kind: "academic",
      text: "The scholarly literature — Kathleen Blee (Inside Organized Racism), Pete Simi and Robert Futrell (American Swastika), the Journal of Hate Studies — converges on a definition close to: an organization whose core doctrine asserts the inherent superiority or inferiority of identity-defined groups and which advocates exclusion, denial of rights, or violence on that basis. The academic test is doctrinal, not behavioral: what the organization itself professes is the primary evidence. Which is why self-declaration is the strongest column in the table below.",
      url: "",
      verify: true
    },
    {
      who: "Independent NGOs (not the SPLC)",
      kind: "ngo",
      text: "The Anti-Defamation League's Center on Extremism maintains its own profiles and Glossary of Extremism under its own criteria, built over a century of tracking antisemitic movements. The Global Project Against Hate and Extremism publishes its own designations. Where the table below cites NGO corroboration it means these — organizations with separate boards, methods, and funding from the SPLC, arriving at the same classifications independently.",
      url: "https://www.adl.org/resources/glossary-terms",
      verify: true
    },
    {
      who: "SPLC — for comparison, at the floor",
      kind: "ngo",
      text: "The SPLC's published test: organizations whose beliefs or practices vilify entire classes of people based on immutable characteristics. Note that this is the LOOSEST standard on this list — a doctrinal test requiring no criminal act — which is exactly why this site treats an SPLC designation as the floor of the evidence ladder, useful chiefly for its footnotes, which point at primary sources anyone can walk to without ever trusting the designation itself.",
      url: "https://www.splcenter.org/resources/frequently-asked-questions-about-hate-and-antigovernment-groups/",
      verify: true
    }
  ],

  /* ------------------------------------------------------------------ */
  ladder: [
    { rank: "L1", label: "Government designation", desc: "Terrorist-entity listing, proscription, SDGT designation, or interior-ministry ban, under criminal law, by a national government." },
    { rank: "L2", label: "Court adjudication", desc: "Criminal convictions of leadership for organized political violence, or civil jury verdicts against the organization for coordinated racial violence. (Where SPLC lawyers were plaintiffs' counsel, the row says so — the finding of fact still belongs to the jury.)" },
    { rank: "L3", label: "Government legal action", desc: "Attorney-general suits, named state investigations, statutes and prosecutions targeting the organization short of final adjudication." },
    { rank: "L4", label: "Independent NGO convergence", desc: "ADL, GPAHE, or comparable organizations — independent of SPLC — reaching the same classification." },
    { rank: "L5", label: "Academic literature", desc: "Treatment as an organized-hate subject in peer-reviewed scholarship." },
    { rank: "SD", label: "Self-declaration", desc: "The organization's or leadership's own published words. Orthogonal to the ladder and stronger than all of it: no designator required." }
  ],

  /* ------------------------------------------------------------------
     verdict values:
       "exceeds"    — government/court corroboration; SPLC is redundant
       "converges"  — multiple independent non-SPLC sources agree
       "self"       — SPLC + the subject's own words; no external adjudication
       "contested"  — designation disputed, external corroboration thin; row
                      says exactly what exists and what does not
     ------------------------------------------------------------------ */
  groups: [

    /* ================= L1: GOVERNMENT-DESIGNATED ================= */
    { name: "Proud Boys", cat: "Organized political violence", verdict: "exceeds",
      splc: "General hate (2018–)",
      external: [
        "L1 · Canada: Criminal Code terrorist entity, Feb 3, 2021 (confirmed against canada.ca)",
        "L1 · New Zealand: designated under the Terrorism Suppression Act 2002 s.22, Jun 20, 2022 — the first US-based groups ever on NZ's list, alongside The Base",
        "L2 · US v. Nordean: seditious-conspiracy convictions of chairman Enrique Tarrio and three lieutenants, May 2023; Tarrio sentenced to 22 years (pardoned Jan 2025 — the jury findings stand)",
      ],
      said: "“We are western chauvinists who refuse to apologize for creating the modern world” — the initiation oath, written by founder Gavin McInnes, recited on camera by every member.",
      v: false },

    { name: "Atomwaffen Division / National Socialist Order", cat: "Neo-Nazi accelerationist", verdict: "exceeds",
      splc: "Neo-Nazi",
      external: [
        "L1 · Canada: terrorist entity, Feb 3, 2021 (confirmed against canada.ca)",
        "L1 · UK: proscribed April 2021 as 'Atomwaffen Division (AWD)/National Socialist Order (NSO)' — confirmed against the Home Office's published list, which describes it as 'a predominately US-based white supremacist group'",
        "L2 · Multiple federal convictions of members (swatting campaign against journalists; Kaleb Cole convicted 2021)",
      ],
      said: "Organizational doctrine is James Mason's Siege, which the group itself distributes — advocacy of terroristic collapse in its own canonical text.",
      v: false },

    { name: "The Base", cat: "Neo-Nazi accelerationist", verdict: "exceeds",
      splc: "Neo-Nazi",
      external: [
        "L1 · Four allied governments, all confirmed: Canada (Feb 3, 2021, canada.ca), UK (proscribed Jul 2021, Home Office list), Australia (2021, Criminal Code), New Zealand (Jun 20, 2022, TSA s.22)",
        "L2 · Georgia and Maryland cell members convicted of federal crimes incl. plotting violence (2020–22)",
      ],
      said: "Recruitment materials in the group's own name solicit for race war; founder Rinaldo Nazzaro runs it openly from Russia (BBC identification).",
      v: false },

    { name: "Russian Imperial Movement", cat: "White-supremacist paramilitary", verdict: "exceeds",
      splc: "—",
      external: [
        "L1 · US State Department: SDGT, Apr 6, 2020, under E.O. 13224 — the first white-supremacist entity so designated; Federal Register Doc. 2020-07835 (primary, confirmed). Basis included training two Swedes later convicted of the Gothenburg refugee-shelter bombings",
        "L1 · Canada: terrorist entity, Feb 3, 2021 (confirmed against canada.ca)",
      ],
      said: "Operates paramilitary training openly under its own name (St. Petersburg 'Partizan' courses). Named leaders designated alongside the org: Vorobyev, Gariyev, Trushchalov.",
      v: false },

    { name: "Hammerskin Nation", cat: "Racist skinhead", verdict: "exceeds",
      splc: "Racist skinhead",
      external: [
        "L1 · Germany: banned by the Federal Interior Ministry, Sep 19, 2023 — 700+ officers, raids in 10 states, sub-group Crew 38 banned with it; BMI's own release notes the ban was coordinated with US counterparts (bmi.bund.de, confirmed)",
        "L4 · ADL: longstanding profile as the most violent racist-skinhead network",
      ],
      said: "The name is the platform: 'Hammerskin' iconography derives from the crossed hammers of white-power mythology; the network's own music circuit (Hammerfest) is its recruitment engine — BMI's ban notice describes the concerts as the radicalization mechanism.",
      v: false },

    { name: "Combat 18", cat: "Neo-Nazi", verdict: "exceeds",
      splc: "—",
      external: [
        "L1 · Germany: banned, Jan 2020",
        "L1 · Canada: terrorist entity (with Blood & Honour), Jun 2019",
      ],
      said: "The name itself: '18' is A.H. — Adolf Hitler's initials by alphabet position. Self-declaration encoded in the brand.",
      v: true },

    { name: "Blood & Honour", cat: "Neo-Nazi music network", verdict: "exceeds",
      splc: "—",
      external: [
        "L1 · Canada: terrorist entity, Jun 2019",
        "L1 · Banned in Germany (2000) and Russia",
      ],
      said: "Founded by Ian Stuart Donaldson of Skrewdriver explicitly to fund and spread National Socialism through music — the stated mission, in the founders' own publications. The Resistance Records model's British parent.",
      v: true },

    { name: "Three Percenters (III%)", cat: "Anti-government militia", verdict: "exceeds",
      splc: "Antigovernment (not 'hate group' — SPLC's own distinction, noted honestly)",
      external: [
        "L1 · Canada: terrorist entity, Jun 2021",
        "L2 · Multiple adherents convicted for Jan 6 roles",
      ],
      said: "The name is a standing claim that 3% of armed patriots will resist the US government — the thesis is the brand.",
      v: true },

    /* ================= L2: COURT-ADJUDICATED ================= */
    { name: "Oath Keepers", cat: "Anti-government militia", verdict: "exceeds",
      splc: "Antigovernment (SPLC does NOT list as a hate group — this row is here because a federal jury went further than any designation)",
      external: [
        "L2 · Founder Stewart Rhodes convicted of seditious conspiracy, Nov 2022; 18-year sentence (commuted Jan 2025 — the verdict stands)",
      ],
      said: "Rhodes, in his own pre-Jan 6 open letters: calls for Trump to invoke the Insurrection Act, published on the organization's own site.",
      v: false },

    { name: "Ku Klux Klan (various klans)", cat: "White supremacist", verdict: "exceeds",
      splc: "Ku Klux Klan (multiple chapters)",
      external: [
        "L3 · A federal statute has carried its name since 1871 (Ku Klux Klan Act, litigated today as 42 U.S.C. §1985 — the Charlottesville plaintiffs' cause of action)",
        "L2 · Donald v. United Klans of America: $7M jury verdict for the lynching of Michael Donald (1987; SPLC as counsel — the verdict was the jury's), which bankrupted the UKA",
        "L2 · A century-and-a-half federal prosecution record, Reconstruction through the Birmingham church bombing convictions",
      ],
      said: "No inference has ever been required.",
      v: true },

    { name: "Aryan Nations", cat: "Christian Identity neo-Nazi", verdict: "exceeds",
      splc: "Neo-Nazi (historic)",
      external: [
        "L2 · Keenan v. Aryan Nations: $6.3M Idaho jury verdict (2000; SPLC as counsel) — bankrupted the compound",
      ],
      said: "Richard Butler's own sermons and the group's 'whites-only homeland' doctrine, self-published for decades.",
      v: true },

    { name: "Aryan Brotherhood", cat: "Race-based criminal enterprise", verdict: "exceeds",
      splc: "—",
      external: [
        "L2/L3 · DOJ RICO prosecutions describing it in indictments as a race-based enterprise; sweeping federal convictions (2002 indictment wave; 2022 convictions)",
      ],
      said: "Membership iconography (shamrock/swastika brands) constitutes open self-identification within the system it operates in.",
      v: true },

    { name: "National Socialist Movement", cat: "Neo-Nazi", verdict: "exceeds",
      splc: "Neo-Nazi",
      external: [
        "L2 · Sines v. Kessler: federal jury found Charlottesville organizers incl. NSM liable, Nov 2021 ($24M punitive + ~$2M compensatory); punitives cut to $350K under Virginia's statutory cap, then the Fourth Circuit affirmed liability 3–0 and reinstated the cap per-plaintiff (2024). The liability findings survived appellate review unanimously.",
      ],
      said: "The organization's name is 'National Socialist.' It marched under swastikas until a 2016 rebrand its own leader described as image management.",
      v: false },

    { name: "Vanguard America", cat: "Neo-Nazi", verdict: "exceeds",
      splc: "Neo-Nazi (historic)",
      external: [
        "L2 · Sines v. Kessler defendant, found liable (2021); liability affirmed 3–0 by the Fourth Circuit (2024)",
        "L5 · Documented as Patriot Front's parent organization (James Fields marched with VA at Charlottesville)",
      ],
      said: "“Blood and Soil” — the group's own slogan, a direct German Nazi translation (Blut und Boden).",
      v: true },

    { name: "League of the South", cat: "Neo-Confederate", verdict: "exceeds",
      splc: "Neo-Confederate",
      external: [
        "L2 · Sines v. Kessler defendant, found liable (2021); liability affirmed 3–0 by the Fourth Circuit (2024)",
      ],
      said: "President Michael Hill, in his own essays on the group's site: calls for an 'Anglo-Celtic' Southern ethnostate. Self-published, repeatedly, over decades.",
      v: true },

    { name: "Traditionalist Worker Party", cat: "Neo-Nazi", verdict: "exceeds",
      splc: "Neo-Nazi (defunct)",
      external: [
        "L2 · Sines v. Kessler defendants (Heimbach, Parrott) found liable (2021)",
      ],
      said: "Matthew Heimbach's own platform statements advocating racial separation; the party published its 25-point program itself.",
      v: true },

    { name: "Identity Evropa / American Identity Movement", cat: "White nationalist", verdict: "exceeds",
      splc: "White nationalist (defunct)",
      external: [
        "L2 · Sines v. Kessler defendant (Identity Evropa; founder Nathan Damigo), found liable (2021)",
      ],
      said: "Recruitment doctrine in leaked internal chats (Unicorn Riot archives) matches the public 'identitarian' branding — the euphemism documented from inside.",
      v: true },

    { name: "Patriot Front", cat: "White nationalist", verdict: "exceeds",
      splc: "White nationalist",
      external: [
        "L2 · Five members convicted of conspiracy to riot, Coeur d'Alene (2023) — 31 arrested in the U-Haul, Jun 2022",
        "L2 · Direct organizational descent from Sines defendant Vanguard America (founder Thomas Rousseau led VA members at Charlottesville)",
        "L4 · ISD and CEP profiles independent of SPLC",
      ],
      said: "The manifesto: “An African… may have lived, worked, and even been classed as a citizen in America for centuries, yet he is not American.” Quoted identically by SPLC and ISD from the group's own document.",
      v: true },

    { name: "Rise Above Movement", cat: "White-nationalist fight club", verdict: "exceeds",
      splc: "White nationalist (historic)",
      external: [
        "L2 · Federal riot-conspiracy convictions of members (2018–19); founder Robert Rundo pled guilty (2024)",
      ],
      said: "Self-produced propaganda videos of members training for and executing political violence — the evidence in their own prosecutions was largely their own footage.",
      v: true },

    { name: "Daily Stormer (Andrew Anglin)", cat: "Neo-Nazi publisher", verdict: "exceeds",
      splc: "Neo-Nazi",
      external: [
        "L2 · Gersh v. Anglin: $14M federal judgment for an antisemitic terror campaign (2019; SPLC as counsel — the judgment is the court's)",
        "L2 · Additional judgments (Obeidallah v. Anglin); Anglin a fugitive from US civil process",
      ],
      said: "The site is named in homage to Der Stürmer, the Nazi propaganda weekly — Anglin's own stated choice. Its style guide (leaked, HuffPost) instructs writers to dehumanize by design.",
      v: true },

    /* ================= L3/L4: GOV ACTION + NGO CONVERGENCE ================= */
    { name: "NSC-131", cat: "Neo-Nazi (New England)", verdict: "converges",
      splc: "Neo-Nazi",
      external: [
        "L3 · New Hampshire AG civil-rights enforcement action; Massachusetts AG action (statuses evolving — verify current posture)",
        "L4 · ADL and GPAHE profiles",
      ],
      said: "Self-described 'pro-white street-oriented fraternity'; masked banner drops filmed and published by the group itself.",
      v: true },

    { name: "VDARE", cat: "White-nationalist publisher", verdict: "converges",
      splc: "White nationalist",
      external: [
        "L3 · New York AG charities investigation; organization announced its own shutdown citing it (2024)",
        "L4 · ADL profile; academic citation as movement publisher",
      ],
      said: "Founder Peter Brimelow: 'VDARE.com is certainly not White Nationalist' — printed directly above decades of contributor essays arguing for white demographic preservation, in the site's own archive.",
      v: true },

    { name: "Blood Tribe", cat: "Neo-Nazi", verdict: "converges",
      splc: "Neo-Nazi",
      external: [
        "L4 · ADL profile; GPAHE tracking",
        "L3 · Members' arrests at armed marches (various states)",
      ],
      said: "Marches under actual swastika flags, filmed and distributed by the group itself. Founder Christopher Pohlhaus's recruitment posts are explicit by design — deniability is not the strategy.",
      v: true },

    { name: "Goyim Defense League", cat: "Antisemitic propaganda network", verdict: "converges",
      splc: "Antisemitism",
      external: [
        "L4 · ADL: extensive documentation (the org exists to harass Jews; ADL is its primary chronicler)",
        "L3 · State-level charges against members for banner/harassment stunts; Florida legislation responding to its litter campaigns",
      ],
      said: "'Hitler was right' — recurring GDL banner text, hung from freeway overpasses, photographed and celebrated by the group's own channels.",
      v: true },

    { name: "Active Club network", cat: "White-nationalist fitness cells", verdict: "converges",
      splc: "White nationalist (network)",
      external: [
        "L4 · GPAHE multi-country network reports; ADL profile",
        "L5 · Successor structure to RAM (whose members were federally convicted) — founder lineage runs through Rundo",
      ],
      said: "Recruiting material in the clubs' own channels frames fitness as preparation for racial conflict — the 'brotherhood' pitch is the laundered wrapper, per their own posts.",
      v: true },

    { name: "White Lives Matter network", cat: "White-nationalist propaganda", verdict: "converges",
      splc: "White nationalist",
      external: [
        "L4 · ADL and GPAHE tracking of the network's banner/sticker campaigns",
      ],
      said: "Telegram channels run by the network publish their own materials; the name is a direct appropriation built for grievance recruitment.",
      v: true },

    { name: "National Alliance", cat: "Neo-Nazi (historic peak)", verdict: "converges",
      splc: "Neo-Nazi",
      external: [
        "L5 · William Pierce's The Turner Diaries — FBI-cited as inspiration for the Oklahoma City bombing and multiple terror cells",
        "L4 · ADL: decades of documentation; owned Resistance Records openly",
      ],
      said: "Pierce's own membership handbook: the goal is 'White living space.' The Resistance Records catalog was the self-declared funding arm — the founding case study of this entire project.",
      v: true },

    { name: "Stormfront", cat: "White-nationalist forum", verdict: "converges",
      splc: "White nationalist",
      external: [
        "L4 · ADL profile; academic studies of radicalization pathways through the forum",
        "L5 · SPLC's much-contested 'Stormfront users and murder' statistic aside, the forum's role in Breivik-adjacent radicalization is documented in scholarship independently",
      ],
      said: "Founded by former KKK Grand Wizard Don Black (biographical fact); masthead slogan 'White Pride World Wide' — the self-description is the URL banner.",
      v: true },

    { name: "American Renaissance (Jared Taylor)", cat: "Pseudo-academic white nationalism", verdict: "converges",
      splc: "White nationalist",
      external: [
        "L4 · ADL profile; GPAHE",
        "L5 · Standard subject of the academic literature on 'scientific racism' repackaging",
      ],
      said: "Taylor, in his own writing: 'When blacks are left entirely to their own devices, Western civilization — any kind of civilization — disappears.' Published under his own name, defended on camera repeatedly.",
      v: true },

    { name: "Council of Conservative Citizens", cat: "White nationalist", verdict: "converges",
      splc: "White nationalist",
      external: [
        "L5 · Historians document direct institutional descent from the segregationist White Citizens' Councils",
        "L3 · Cited by name in Dylann Roof's manifesto as his gateway — examined in the subsequent federal proceedings",
      ],
      said: "Statement of Principles, in the group's own words: opposes 'all efforts to mix the races of mankind.'",
      v: true },

    { name: "Asatru Folk Assembly", cat: "Folkish/racial neopagan", verdict: "converges",
      splc: "Neo-Völkisch",
      external: [
        "L4 · ADL glossary entry on folkish exclusion",
      ],
      said: "Its own Declaration of Purpose restricts the faith to those of 'European folk' descent — the membership criterion is published doctrine, no inference needed.",
      v: true },

    { name: "Nick Fuentes / America First (Groypers)", cat: "White-nationalist streaming movement", verdict: "converges",
      splc: "White nationalist",
      external: [
        "L4 · ADL profile; platform bans across the mainstream stack (a market-consensus signal, documented)",
        "L3 · Jan 6 grand jury attention; subpoenaed (no charge — say so)",
      ],
      said: "Piers Morgan Uncensored, December 8, 2025. Morgan asked whether he believed Hitler was 'very f**king cool.' Fuentes, on camera: 'Yes, I do… And I'm tired of pretending he's not.' Confirmed by three independent contemporaneous write-ups, all archived: JTA (archive.ph/b7yWy), the Forward (archive.ph/UJnET), Times of Israel (archive.ph/427AC) — no SPLC required anywhere in the chain. Years of his own broadcasts precede it (Holocaust 'cookie' monologue, 2019, his own show).",
      v: false },

    { name: "National Justice Party", cat: "Neo-Nazi political party (defunct)", verdict: "converges",
      splc: "Neo-Nazi (historic)",
      external: [
        "L4 · ADL documentation of founding conference",
      ],
      said: "Its own 25-point platform demanded a state 'for people of European descent' with explicit antisemitic planks — self-published at launch (2020).",
      v: true },

    { name: "Westboro Baptist Church", cat: "Anti-LGBTQ ministry", verdict: "converges",
      splc: "Anti-LGBTQ",
      external: [
        "L2 · Snyder v. Phelps (SCOTUS 2011) — honest note: the Court protected their picketing as speech; it adjudicated no 'hate' status. Cited because the record of conduct is judicial and complete",
        "L4 · Universal NGO documentation",
      ],
      said: "The church's principal web domain has been 'godhatesfags.com' since 1996. Self-declaration as an address.",
      v: false },

    { name: "Nation of Islam", cat: "Black nationalist / antisemitic leadership rhetoric", verdict: "converges",
      splc: "Black separatist–antisemitism",
      external: [
        "L4 · ADL: decades of documentation of Farrakhan's antisemitic statements — this row is on the table because the criteria apply regardless of the group's position on the political map",
      ],
      said: "Louis Farrakhan, on his own account, Oct 2018: 'I'm not an anti-Semite. I'm anti-Termite.' The metaphor is his, published under his name.",
      v: true },

    { name: "New Black Panther Party", cat: "Black nationalist", verdict: "converges",
      splc: "Black separatist",
      external: [
        "L4 · ADL profile; the ORIGINAL Black Panthers' surviving leadership publicly repudiated the NBPP as a hate group — peer repudiation from the name's own originators",
      ],
      said: "Former chairman Khalid Abdul Muhammad's recorded speeches (his own words, on tape) are the founding rhetorical record.",
      v: true },

    { name: "Israel United in Christ", cat: "Radical Hebrew Israelite", verdict: "converges",
      splc: "General hate (Radical Hebrew Israelite)",
      external: [
        "L4 · ADL documentation of street-preaching rhetoric",
      ],
      said: "Street sermons distributed by the organization's own media arm; the doctrine is proclaimed on camera as outreach.",
      v: true },

    { name: "Sonnenkrieg Division", cat: "Neo-Nazi accelerationist (UK/AUS reach)", verdict: "exceeds",
      splc: "—",
      external: [
        "L1 · UK: proscribed Feb 2020 (confirmed against the Home Office list — 'established March 2018 as a splinter group of System Resistance Network'); Australia: listed 2021",
      ],
      said: "Propaganda in the cell's own output celebrated terrorism explicitly (the basis of proscription).",
      v: false },

    { name: "National Action", cat: "Neo-Nazi (UK)", verdict: "exceeds",
      splc: "—",
      external: [
        "L1 · UK: proscribed Dec 2016 (confirmed against the Home Office list — 'a racist neo-Nazi group established in 2013'); the first far-right group proscribed in the UK since WWII",
        "L2 · Multiple UK members convicted of membership and terror offenses, incl. a plot to murder an MP",
      ],
      said: "Celebrated the murder of MP Jo Cox in its own social-media output — the conduct cited in the proscription.",
      v: true },

    { name: "Feuerkrieg Division", cat: "Neo-Nazi accelerationist", verdict: "exceeds",
      splc: "—",
      external: [
        "L1 · UK: proscribed Jul 2020 (confirmed against the Home Office list — 'an international footprint, with members across North America and Europe')",
      ],
      said: "Recruitment materials in the group's own channels; founded, per reporting, by a minor in Estonia — the network's own structure documented in prosecutions of members.",
      v: false },

    { name: "Creativity Movement", cat: "Racist theology", verdict: "converges",
      splc: "Neo-Nazi (theological)",
      external: [
        "L2 · Leader Matthew Hale convicted of soliciting the murder of a federal judge (2004, 40-year sentence)",
        "L4 · ADL profile",
      ],
      said: "The religion's own scripture (Ben Klassen's White Man's Bible) defines 'racial holy war' — RaHoWa — as doctrine. The catechism is the confession.",
      v: true },

    { name: "ShieldWall Network", cat: "Neo-Nazi (Arkansas)", verdict: "converges",
      splc: "Neo-Nazi",
      external: [
        "L4 · ADL/GPAHE tracking; founder Billy Roper's decades-long public record",
      ],
      said: "Roper's own publications and podcast openly advocate ethnostate secession — he is among the least euphemistic figures in the movement, by his own choosing.",
      v: true },

    { name: "Identity Dixie", cat: "Neo-Confederate", verdict: "converges",
      splc: "Neo-Confederate",
      external: [
        "L4 · GPAHE profile",
      ],
      said: "Its own essays and podcast network ('Rebel Yell') argue Southern ethnonationalism under bylined pseudonyms — the content is self-published and unambiguous.",
      v: true },

    /* ================= THE POLICY ORGS — HONEST ROWS ================= */
    { name: "Alliance Defending Freedom", cat: "Christian-right legal advocacy", verdict: "self",
      splc: "Anti-LGBTQ",
      external: [
        "NO government designation. NO court adjudication of hate-group status. Say it plainly.",
        "L4 · GLAAD Accountability Project catalogs statements (independent of SPLC); international: ADF International's interventions abroad documented in European court records",
      ],
      said: "Senior counsel Erik Stanley (2014): 'The endgame of the homosexual legal agenda is unfettered sexual liberty and the silencing of all dissent.' Supported recriminalization of consensual LGBTQ intimacy in ADF's own amicus practice (Lawrence-era). Their case rests on their filings and their statements — both self-authored.",
      v: true },

    { name: "Family Research Council", cat: "Christian-right policy organization", verdict: "self",
      splc: "Anti-LGBTQ",
      external: [
        "NO government designation. NO court adjudication. The row's evidence is the subject's own archive.",
        "L4 · GLAAD Accountability Project; Right Wing Watch (People For the American Way) broadcast archives",
      ],
      said: "President Tony Perkins: 'For years, LGBT activists wanted to keep the goal of luring children into sexual confusion under wraps.' FRC's own Washington Update, over his name.",
      v: true },

    { name: "Center for Immigration Studies", cat: "Immigration-restriction research", verdict: "contested",
      splc: "Anti-immigrant",
      external: [
        "NO government designation; sued SPLC over its designation (dismissed, Sept 2019 — the dismissal upheld SPLC's right to the opinion, it did not adjudicate the label's truth; say both halves)",
        "L5 · Academic literature documents Tanton-network origins (spun from FAIR, 1986); funding dependency cell-verified on this site (Colcom ≈ 2/3 of revenue)",
      ],
      said: "Founder-era circulation of white-nationalist authors in CIS weekly mailers is documented; executive director Mark Krikorian's own published line — immigration policy should select for 'people who are like us' framing — is quotable from his columns. The strongest non-SPLC evidence here is the money: who builds and sustains it, on sworn filings.",
      v: true },

    { name: "Center for Family and Human Rights (C-Fam)", cat: "UN-focused social-conservative advocacy", verdict: "self",
      splc: "Anti-LGBTQ",
      external: [
        "NO government designation. NO court adjudication.",
        "L4 · Documented at the UN by independent human-rights observers",
      ],
      said: "President Austin Ruse, guest-hosting on American Family Radio, March 2014: the 'hard left, human-hating people that run modern universities… should all be taken out and shot.' The apology confirming the quote — dated March 14, 2014 — is still published on C-Fam's own website, now permanently archived (archive.ph/9bAEi). AFA — itself designated — removed him from its airwaves over it, calling the remark 'un-Christian.' One designated org firing another's president over the quote: the record impeaches itself from both directions.",
      v: false },

    { name: "American Family Association", cat: "Christian-right media network", verdict: "self",
      splc: "Anti-LGBTQ",
      external: [
        "NO government designation. NOT on the printed Project 2025 advisory board (coalition list only — this site's own correction, AF-3).",
        "L4 · Right Wing Watch broadcast archive (independent org) preserves the primary audio",
      ],
      said: "Longtime spokesman Bryan Fischer, Focal Point on AFA's own American Family Radio, May 2010, verbatim: 'Hitler discovered that he could not get straight soldiers to be savage and brutal and vicious enough to carry out his orders, but that homosexual soldiers basically had no limits.' Audio preserved independently by Media Matters and Right Wing Watch. AFA's own airwaves; the archive is the evidence.",
      v: false },

    { name: "Liberty Counsel", cat: "Christian-right legal advocacy", verdict: "self",
      splc: "Anti-LGBTQ",
      external: [
        "NO government designation. NOT on the printed advisory board (coalition list only).",
        "L4 · GLAAD Accountability Project",
      ],
      said: "Founder Mat Staver's own broadcasts and briefs — including characterizing LGBTQ advocacy as destroying civilization — are self-published in the organization's media library.",
      v: true },

    { name: "Moms for Liberty", cat: "Parental-rights advocacy", verdict: "contested",
      splc: "Antigovernment extremist (2023) — note: NOT 'hate group'; SPLC's own category distinction, reported accurately",
      external: [
        "NO government designation. External corroboration is thin and this row says so — it is included as the table's honesty control, not as an equivalence",
        "L4 · Documented incident: its Hamilton County, Indiana chapter newsletter approvingly quoted Adolf Hitler ('He alone, who owns the youth, gains the future'), June 2023 — reported by AP from the chapter's own newsletter; the chapter apologized, confirming provenance",
      ],
      said: "The newsletter quote above — their own publication, their own apology. Everything beyond that is politics, and the table does not launder politics into designation.",
      v: true }
  ],

  outro:
    "Scoreboard, stated plainly: of the rows above, more than a dozen carry corroboration that makes the SPLC " +
    "redundant — criminal terrorist listings by allied governments, seditious-conspiracy and riot convictions, " +
    "eight-figure jury verdicts, interior-ministry bans. A second band carries convergent documentation from " +
    "organizations with no connection to the SPLC, usually alongside the subjects' own flags, banners, oaths and " +
    "catechisms. And the policy organizations at the bottom — the ones seated on the Project 2025 advisory " +
    "board — have no government designation and no court adjudication, and their rows say so in bold, because " +
    "for them the case was never the designation. It is that their senior officers keep saying it out loud, on " +
    "their own letterhead, into their own microphones, and this site's method is simply to keep the receipts."
};
