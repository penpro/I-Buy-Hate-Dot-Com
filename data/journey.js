/* ==========================================================================
   FundingHate — "The $34 T-Shirt"
   --------------------------------------------------------------------------
   The narrative walkthrough. This is the argument the diagram cannot make on
   its own: that the structure only works because the buyer is never required
   to look, and is offered many comfortable reasons not to.

   Every step carries a `tier`. Steps marked "C" are explicitly framed to the
   reader as hypothetical IN THE PROSE ITSELF, not just in the styling. If the
   styling fails, the text must still be honest.

   `money` is an illustrative unit-economics breakdown, not a claim about any
   real company's books. It is labeled as such on the page.
   ========================================================================== */

window.FH_JOURNEY = {
  title: "The $34 T-Shirt",
  standfirst:
    "Follow one ordinary purchase all the way to a rule change. Five of these nine steps are matters of public record. Four are not, and are marked. " +
    "The point of the exercise is not that every step is proven — it is that the steps which ARE proven are the ones nobody talks about.",

  steps: [
    {
      id: 1,
      tier: "A",
      kicker: "The transaction",
      title: "A man buys a shirt.",
      body:
        "Thirty-four dollars. A stylized eagle, a laurel, some Roman lettering, the words are in Latin. It looks like every other patriotic apparel brand at every other gun show, and the checkout page takes his card in four seconds.\n\n" +
        "He is not a Nazi. He is not lying to himself yet, because he has not yet been given anything to lie about. Nothing on the product page asked him a question.",
      pull: "Nothing on the product page asked him a question.",
      money: null
    },
    {
      id: 2,
      tier: "A",
      kicker: "The seller, in its own words",
      title: "The About page is two clicks away.",
      body:
        "This is the part that makes the whole structure work, and it is the part that is easiest to prove. The same website that sold him a t-shirt without asking him anything will, on a different page, state exactly what it is.\n\n" +
        "For the clearest real-world case, look at publishing rather than apparel. A publisher whose storefront lists translations of Third Reich political texts alongside contemporary far-right titles has not been accused of anything — it has advertised. The catalog is the confession. You do not have to infer the ideology from a logo or a follower list or a vibe. You read the product listings.\n\n" +
        "When people ask 'how do you KNOW they're neo-Nazis' — this is the answer, and it is a better answer than anything a watchdog designation can give you. They said so. In public. To sell you something.",
      pull: "The catalog is the confession.",
      money: null,
      evidenceHint: "ARCHIVE THIS FIRST. A timestamped capture of a public catalog page is the single most defensible artifact this project can hold."
    },
    {
      id: 3,
      tier: "A",
      kicker: "The stated purpose",
      title: "They also tell you where the money goes.",
      body:
        "Movement commerce is not shy about its purpose, because the purpose is the pitch. Buying the shirt IS the politics — that is the value proposition being sold to the sympathetic customer.\n\n" +
        "The oldest and best-documented version of this is the white-power music business. Resistance Records was owned outright by the National Alliance, a neo-Nazi organization, and operated openly to fund and recruit for it. That is not a modern inference or a paranoid reading; it is a decades-old business model the movement has described in its own literature.\n\n" +
        "So the premise underneath this entire website is established before we start: extremist commerce funds extremist organizations. That much is settled. The open question is how far downstream the money travels — and that is where the honesty about evidence has to start.",
      pull: "Buying the shirt IS the politics. That is the pitch.",
      money: null
    },
    {
      id: 4,
      tier: "C",
      kicker: "Hypothetical",
      title: "Twenty-one dollars of margin goes somewhere.",
      body:
        "Here the record runs out and the reconstruction begins. Say the shirt costs about eight dollars blank and printed, and about five to ship and process. Call it twenty-one dollars of gross margin. Some of that is rent and equipment and the operator's rather thin salary.\n\n" +
        "Two different things are true at once here and it matters that you hold both. Businesses that sell merchandise to fund extremist organizations exist — the previous step is not a hypothetical, it is a documented business model with a forty-year history. What this site does not do is name the current ones, because naming them gets the evidence scrubbed and gets people retaliated against. That is a choice about publishing, not a hole in the record.\n\nThe actual hole in the record is the next hop, and it is a real one: what happens to that margin after it leaves the till is not something anyone can trace with public documents. So what follows is a model of how it COULD move — offered so the mechanism is legible, and so that anyone holding better records than we are knows exactly which document would confirm it or kill it.",
      pull: "Here the record runs out and the reconstruction begins.",
      money: { price: 34.00, cogs: 8.00, fulfillment: 5.00, margin: 21.00,
               note: "Illustrative unit economics for a small print-on-demand apparel operation. Not derived from any real company's books." }
    },
    {
      id: 5,
      tier: "C",
      kicker: "Hypothetical",
      title: "The money stops having a name.",
      body:
        "A small operation without its own nonprofit status routes money through an entity that has one — a fiscal sponsor, a pass-through LLC, an aggregating fund. These are ordinary, legal instruments used by thousands of perfectly unremarkable organizations. That is precisely why they work here.\n\n" +
        "After this hop, the filings show an aggregate. The sponsoring entity's return has one line where there used to be many sources. Nobody has broken a law and nobody has to.",
      pull: "Nobody has broken a law and nobody has to.",
      money: null
    },
    {
      id: 6,
      tier: "A",
      kicker: "Public record",
      title: "The donor-advised fund is not a theory.",
      body:
        "Now we are back on paper — and what the paper says is stranger than the speculation.\n\n" +
        "A donor-advised fund accepts a contribution, takes legal ownership of it, and later grants it out under the FUND's own name. The recipient's tax return shows the fund as the source. The original donor is not disclosed anywhere. This is entirely lawful, extremely common, used across the whole political spectrum, and it is the advertised feature of the product.\n\n" +
        "So the wall in the middle of this diagram is real, and it was built on purpose, and it is sitting in public in the tax code. You can watch money enter. You can watch money leave. You cannot match one to the other. Any website that draws you a confident line through a donor-advised fund is lying to you, and this one is telling you that instead.",
      pull: "You can watch money enter. You can watch money leave. You cannot match one to the other.",
      money: null,
      evidenceHint: "IRS Form 990, Schedule I lists grants paid with recipient names and amounts. Free and searchable at ProPublica Nonprofit Explorer."
    },
    {
      id: 7,
      tier: "A",
      kicker: "Public record",
      title: "The money arrives somewhere with a marble lobby.",
      body:
        "The organizations on the receiving end are not hiding. They have press offices, annual galas, and Supreme Court wins.\n\n" +
        "Alliance Defending Freedom is one of the most effective litigation shops in the United States. It is also designated by the Southern Poverty Law Center as an anti-LGBTQ hate group — a designation ADF disputes, from an advocacy organization, not a court. And it appears on the published advisory board of Project 2025.\n\n" +
        "Three true things. Individually verifiable. Almost never printed in the same sentence. The Family Research Council and the Center for Immigration Studies occupy the same position: active designations, published board seats.",
      pull: "Three true things, individually verifiable, almost never printed in the same sentence.",
      money: null
    },
    {
      id: 8,
      tier: "A",
      kicker: "Public record",
      title: "The playbook names its own authors.",
      body:
        "This is the most under-used evidence in the entire public argument about Project 2025, and it has been sitting in plain sight the whole time.\n\n" +
        "Mandate for Leadership is roughly nine hundred pages, and every chapter carries a named author. Those authors have employment histories. Those employers appear on the advisory board printed in the same document's front matter. Organization, to person, to chapter, to specific policy proposal — the entire chain is printed, page-numbered, and downloadable.\n\n" +
        "Nobody needed a leak. It shipped as a book.",
      pull: "Nobody needed a leak. It shipped as a book.",
      money: null,
      evidenceHint: "Download the full PDF, store it locally, and cite by page number. Page-numbered citations to a document the reader can download themselves are effectively unanswerable."
    },
    {
      id: 9,
      tier: "A",
      kicker: "Public record",
      title: "He agrees with the rule change.",
      body:
        "A proposal in the playbook becomes a document in the Federal Register with its own number and date. Both are public. Put the page and the document side by side and the pipeline is a photograph rather than an argument.\n\n" +
        "He sees it on the news that night and he agrees with it. Why wouldn't he? It was written in language built for him, by an organization with a reassuring name, funded through a structure specifically designed so that no receipt ever has to reach him.\n\n" +
        "He is wearing the shirt.",
      pull: "He is wearing the shirt.",
      money: null
    }
  ],

  /* The closing statement of method. Do not delete this — it is the thing that
     makes the site survive a hostile reading. */
  coda: {
    title: "What this site is claiming, exactly",
    points: [
      "That several organizations carrying active hate-group designations from established watchdogs sit on the published advisory board of Project 2025. This is printed in the document's own front matter and requires no inference.",
      "That Project 2025's proposals can be matched to specific executive actions and rulemakings by page number and document number. Both sources are public and free.",
      "That extremist commerce funding extremist organizations is a documented, decades-old business model, not a novel accusation.",
      "That donor-advised funds legally and deliberately sever the link between a donor and a grant, which makes the middle of this diagram genuinely untraceable with public records.",
      "That what this investigation actually found is documented at the line-item level, and it runs the other way: an anonymizing billion-dollar fund granted to every one of the four designated advisory-board organizations across three consecutive sworn filings, with campaign-named purposes; and one perpetual endowment sustains the designated research shop at two-thirds of its entire revenue — while also funding the 'progressive' opposition to its own cause, under two names. We came looking for t-shirt money. We found a patronage economy.",
      "That this project does not name specific current vendors — which is an editorial choice, and not a finding. Read point three again: businesses that sell merchandise to fund extremist organizations demonstrably exist, are documented, and have for decades. We decline to name today's operators for two reasons. Naming invites retaliation against the people doing this work. And naming reliably destroys the evidence: the About page gets rewritten, the catalog gets quietly pruned, the storefront reopens next month under a new LLC with a cleaner logo. That has happened over and over. The self-declaration is the whole case, and it survives exactly until someone points at it. Archive first. Name later, if at all, and with a lawyer.",
      "That what remains genuinely unproven is narrower than it may look. Not whether extremist commerce funds extremist organizations — that is settled. The open question is whether a specific vendor's dollar can be followed through a pooled fund to a specific organization on the Project 2025 advisory board. That link is drawn here as a hypothesis and marked as one everywhere it appears. And the reason it stays a hypothesis is point four, not a shortage of vendors."
    ],
    closing:
      "Hold the shape of this list: the speculative middle stays labeled and switchable, the naming restraint is a choice we explain, and the part we actually proved is bigger and uglier than the part we guessed. That order of operations — guess small, test honestly, find worse — is why the documented claims deserve your trust."
  }
};
