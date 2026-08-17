/* ==========================================================================
   FundingHate — roster table, adversarial assessment, defunding section
   ========================================================================== */

(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function paras(t) {
    return String(t || "").split(/\n+/).filter(Boolean)
      .map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }
  function tc(t) { return "t-" + String(t).toLowerCase(); }

  /* ------------------------------------------------------------- roster */

  function renderRoster() {
    var R = window.FH_ROSTER;
    var host = document.getElementById("roster");
    if (!R || !host) return;

    var designated = R.board.filter(function (o) { return o.splc; });
    var total = R.board.length;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">Transcribed from the primary document</p>' +
      '<h2>The advisory board, all ' + total + ' of them</h2>' +
      '<p>' + esc(R.framing) + '</p></div>';

    h += '<div class="prov">' +
      '<div class="prov-row"><span>Source</span><b>' + esc(R.source.title) + '</b></div>' +
      '<div class="prov-row"><span>Publisher</span><b>' + esc(R.source.publisher) + ', ' + R.source.year + '</b></div>' +
      '<div class="prov-row"><span>ISBN</span><b>' + esc(R.source.isbn) + '</b></div>' +
      '<div class="prov-row"><span>Extent</span><b>' + R.source.pages + ' pages · board printed at ' + esc(R.source.boardPages) + '</b></div>' +
      '<div class="prov-row"><span>Method</span><b>' + esc(R.source.method) + '</b></div>' +
      '<div class="prov-row"><span>File</span><b><a class="ev-link" href="' + esc(R.source.url) +
        '" target="_blank" rel="noopener noreferrer">' + esc(R.source.url) + ' ↗</a></b></div>' +
      '</div>';

    h += '<div class="tally">' +
      '<div class="tally-cell hot"><span class="fig">' + designated.length + '</span>' +
        '<span class="lab">carry an active SPLC hate-group designation</span></div>' +
      '<div class="tally-cell"><span class="fig">' + (total - designated.length) + '</span>' +
        '<span class="lab">do not</span></div>' +
      '<div class="tally-cell"><span class="fig">' + total + '</span>' +
        '<span class="lab">printed on the board, July 2023</span></div>' +
      '</div>';

    h += '<ol class="roster-list">' + R.board.map(function (o) {
      return '<li class="' + (o.splc ? "flagged" : "") + '">' +
        '<span class="r-name">' + esc(o.name) + '</span>' +
        (o.splc ? '<span class="r-tag">SPLC · ' + esc(o.splc) + '</span>' : '') +
        (o.note ? '<span class="r-note">' + esc(o.note) + '</span>' : '') +
        '</li>';
    }).join("") + '</ol>';

    host.innerHTML = h;
  }

  /* --------------------------------------------------- adversarial pass */

  var SEV = {
    fatal:    { label: "Fatal", cls: "sev-fatal" },
    major:    { label: "Major", cls: "sev-major" },
    moderate: { label: "Moderate", cls: "sev-mod" }
  };

  function sourceChips(ids, reg) {
    if (!ids || !ids.length) return "";
    return '<div class="chips">' + ids.map(function (id) {
      var s = reg[id];
      if (!s) return "";
      var label = esc(s.title);
      return s.url
        ? '<a class="chip" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + label + ' ↗</a>'
        : '<span class="chip">' + label + '</span>';
    }).join("") + '</div>';
  }

  function renderAdversarial() {
    var A = window.FH_ASSESSMENT;
    var host = document.getElementById("adversarial");
    if (!A || !host) return;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">Written against this site, not for it</p>' +
      '<h2>' + esc(A.intro.title) + '</h2>' +
      '<p>' + esc(A.intro.standfirst) + '</p></div>';

    h += A.findings.map(function (f) {
      var sev = SEV[f.severity] || SEV.moderate;
      var o = '<article class="af ' + sev.cls + '">';
      o += '<header class="af-head">' +
        '<span class="af-id">' + esc(f.id) + '</span>' +
        '<span class="af-sev">' + esc(sev.label) + '</span>' +
        '<span class="af-verdict">' + esc(f.verdict) + '</span>' +
        '</header>';
      o += '<div class="af-body">';
      o += '<div class="af-field"><h4>The claim under test</h4><p>' + esc(f.claim) + '</p></div>';
      o += '<div class="af-field attack"><h4>The attack</h4><p>' + esc(f.attack) + '</p></div>';
      o += '<div class="af-field"><h4>What the evidence says</h4>' + paras(f.evidence) + '</div>';
      o += '<div class="af-field consequence"><h4>Consequence</h4><p>' + esc(f.consequence) + '</p></div>';
      o += '<div class="af-field fix"><h4>What was changed</h4><p>' + esc(f.fix) + '</p></div>';
      if (f.closure) {
        o += '<div class="af-field closure"><h4>Status after the hypothesis lab</h4><p>' + esc(f.closure) + '</p></div>';
      }
      o += sourceChips(f.sources, A.sources);
      o += '</div></article>';
      return o;
    }).join("");

    host.innerHTML = h;
  }

  /* ------------------------------------------------------- defunding */

  function renderDefunding() {
    var A = window.FH_ASSESSMENT;
    var host = document.getElementById("defunding");
    if (!A || !A.defunding || !host) return;
    var D = A.defunding;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(D.eyebrow) + '</p>' +
      '<h2>' + esc(D.title) + '</h2>' +
      '<p>' + esc(D.standfirst) + '</p></div>';

    h += D.blocks.map(function (b) {
      var o = '<div class="dblock ' + esc(b.kind) + '">';
      o += '<h3>' + esc(b.head) + '</h3>';
      o += '<div class="dbody">' + paras(b.body) + '</div>';
      if (b.stats) {
        o += '<div class="stats">' + b.stats.map(function (s) {
          return '<div class="stat">' +
            '<span class="s-fig">' + esc(s.figure) + '</span>' +
            '<span class="s-unit">' + esc(s.unit) + '</span>' +
            '<span class="s-lab">' + esc(s.label) + '</span>' +
            '</div>';
        }).join("") + '</div>';
      }
      o += '</div>';
      return o;
    }).join("");

    h += '<p class="closing">' + esc(D.closing) + '</p>';
    host.innerHTML = h;
  }

  /* ------------------------------------------------------- groups table */

  var G_VERDICT = {
    "exceeds":   { label: "Exceeds SPLC — government / court record", cls: "gv-exceeds",
                   blurb: "Rows where criminal law has already gone further than any NGO designation. Throw the SPLC away entirely; these stand." },
    "converges": { label: "Independent convergence", cls: "gv-conv",
                   blurb: "No terrorist listing, but organizations unconnected to the SPLC — ADL, GPAHE, courts on adjacent conduct, the academic literature — arrive at the same classification, usually alongside the subject's own banners and doctrine." },
    "self":      { label: "SPLC + their own words — no external adjudication", cls: "gv-self",
                   blurb: "The policy organizations. No government has designated them; no court has adjudicated the label. These rows say so in bold — and then quote the subjects' own senior officers, because that is the actual case." },
    "contested": { label: "Contested — stated exactly", cls: "gv-cont",
                   blurb: "Designations that are genuinely disputed, with thin external corroboration. Included as the table's honesty controls. What exists and what does not is stated per row." }
  };

  function renderGroups() {
    var G = window.FH_GROUPS;
    var host = document.getElementById("groups");
    if (!G || !host) return;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(G.intro.eyebrow) + '</p>' +
      '<h2>' + esc(G.intro.title) + '</h2>' +
      '<p>' + esc(G.intro.standfirst) + '</p></div>';

    /* definitions */
    h += '<h3 class="gsub">Who defines this, besides the SPLC</h3>';
    h += '<div class="defs">' + G.definitions.map(function (d) {
      return '<div class="def ' + esc(d.kind) + '">' +
        '<div class="def-who">' + esc(d.who) +
        (d.verify ? '<span class="badge-verify">Unverified — check source</span>' : '') + '</div>' +
        '<p class="def-text">' + esc(d.text) + '</p>' +
        (d.url ? '<a class="ev-link" href="' + esc(d.url) + '" target="_blank" rel="noopener noreferrer">' + esc(d.url) + ' ↗</a>' : '') +
        '</div>';
    }).join("") + '</div>';

    /* ladder */
    h += '<h3 class="gsub">The corroboration ladder — SPLC is the floor, not the ceiling</h3>';
    h += '<ol class="gladder">' + G.ladder.map(function (l) {
      return '<li><span class="gl-rank">' + esc(l.rank) + '</span><b>' + esc(l.label) + '</b> — ' + esc(l.desc) + '</li>';
    }).join("") + '</ol>';

    /* groups by verdict band */
    var order = ["exceeds", "converges", "self", "contested"];
    order.forEach(function (vk) {
      var band = G.groups.filter(function (g) { return g.verdict === vk; });
      if (!band.length) return;
      var V = G_VERDICT[vk];
      h += '<div class="gband ' + V.cls + '">';
      h += '<h3 class="gband-head">' + esc(V.label) + ' <span class="gband-n">' + band.length + '</span></h3>';
      h += '<p class="gband-blurb">' + esc(V.blurb) + '</p>';
      h += band.map(function (g) {
        var o = '<article class="grow">';
        o += '<header class="grow-head"><span class="grow-name">' + esc(g.name) + '</span>' +
             '<span class="grow-cat">' + esc(g.cat) + '</span>' +
             (g.v ? '<span class="badge-verify">Verify cells</span>' : '') + '</header>';
        o += '<p class="grow-splc"><b>SPLC:</b> ' + esc(g.splc || "not listed") + '</p>';
        o += '<ul class="grow-ext">' + g.external.map(function (e) {
          return '<li>' + esc(e) + '</li>';
        }).join("") + '</ul>';
        if (g.said) o += '<div class="grow-said"><b>They said it out loud</b>' + esc(g.said) + '</div>';
        o += '</article>';
        return o;
      }).join("");
      h += '</div>';
    });

    h += '<p class="closing" style="margin-top:44px">' + esc(G.outro) + '</p>';
    host.innerHTML = h;
  }

  /* -------------------------------------------------------------- trace */

  function renderTrace() {
    var T = window.FH_TRACE;
    var host = document.getElementById("trace");
    if (!T || !host) return;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(T.intro.eyebrow) + '</p>' +
      '<h2>' + esc(T.intro.title) + '</h2>' +
      '<p>' + esc(T.intro.standfirst) + '</p></div>';

    h += '<ol class="chain">' + T.hops.map(function (x) {
      return '<li><b>Hop ' + x.n + ' — ' + esc(x.label) + ': ' + esc(x.head) + '</b>' +
        '<p>' + esc(x.body) + '</p><span class="chain-cite">' + esc(x.cite) + '</span></li>';
    }).join("") + '</ol>';

    var S = T.sideBySide;
    h += '<h3 class="gsub">' + esc(S.head) + '</h3>';
    h += '<div class="sbs">' +
      '<div class="sbs-cell"><div class="sbs-label">' + esc(S.left.label) + '</div><blockquote>' + esc(S.left.text) + '</blockquote></div>' +
      '<div class="sbs-cell"><div class="sbs-label">' + esc(S.right.label) + '</div><blockquote>' + esc(S.right.text) + '</blockquote></div>' +
      '</div>';

    h += '<h3 class="gsub">' + esc(T.bonus.head) + '</h3>';
    h += '<div class="dblock"><div class="dbody">' + paras(T.bonus.body) + '</div></div>';
    h += '<p class="hyp-record" style="padding:0;border:none">' + esc(T.bonus.cite) + '</p>';
    h += '<p class="closing" style="margin-top:36px">' + esc(T.closing) + '</p>';
    host.innerHTML = h;
  }

  /* ------------------------------------------------------------ authors */

  function renderAuthors() {
    var A = window.FH_AUTHORS;
    var host = document.getElementById("authors");
    if (!A || !host) return;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(A.intro.eyebrow) + '</p>' +
      '<h2>' + esc(A.intro.title) + '</h2>' +
      '<p>' + esc(A.intro.standfirst) + '</p></div>';

    h += '<div class="lc-tablewrap" style="border:1px solid var(--rule)"><table class="lc-table">' +
      '<thead><tr><th>Ch.</th><th>Chapter</th><th>Author(s), as printed</th><th>Affiliation</th><th>On printed board?</th></tr></thead><tbody>';
    h += A.chapters.map(function (c) {
      return '<tr class="' + (c.board ? "flag" : "") + '">' +
        '<td>' + c.n + '</td>' +
        '<td style="white-space:normal;color:var(--ink)">' + esc(c.title) + '</td>' +
        '<td style="white-space:normal">' + esc(c.authors) + '</td>' +
        '<td style="white-space:normal;font-family:var(--sans);font-size:12.5px">' + esc(c.affil) +
          (c.v ? ' <span class="badge-verify">Verify</span>' : '') +
          (c.note ? '<br><span style="color:var(--ink-faint);font-size:11.5px">' + esc(c.note) + '</span>' : '') + '</td>' +
        '<td>' + (c.board ? 'YES' : '—') + '</td></tr>';
    }).join("") + '</tbody></table></div>';

    var C = A.contributorHighlights;
    h += '<h3 class="gsub">' + esc(C.head) + '</h3>';
    h += '<div class="lc-tablewrap" style="border:1px solid var(--rule)"><table class="lc-table">' +
      '<thead><tr><th>Organization</th><th>Credited contributors</th></tr></thead><tbody>';
    h += C.rows.map(function (r) {
      return '<tr class="flag"><td style="white-space:normal;color:var(--ink)">' + esc(r.org) + '</td>' +
        '<td style="white-space:normal;font-family:var(--sans);font-size:13px">' + esc(r.people) + '</td></tr>';
    }).join("") + '</tbody></table></div>';
    h += '<p class="gband-blurb" style="margin-top:14px">' + esc(C.note) + '</p>';

    h += '<div class="stats" style="margin-top:26px">' +
      '<div class="stat"><span class="s-fig">17 / 30</span><span class="s-unit">chapters</span><span class="s-lab">' + esc(A.tally.boardChapters) + '</span></div>' +
      '<div class="stat"><span class="s-fig">9+</span><span class="s-unit">chapters</span><span class="s-lab">' + esc(A.tally.heritage) + '</span></div>' +
      '</div>';
    h += '<p class="hyp-record" style="padding:10px 0 0;border:none">' + esc(A.tally.caveat) + '</p>';
    host.innerHTML = h;
  }

  /* ---------------------------------------------------------- landscape */

  function renderLandscape() {
    var L = window.FH_LANDSCAPE;
    var host = document.getElementById("landscape");
    if (!L || !host) return;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(L.intro.eyebrow) + '</p>' +
      '<h2>' + esc(L.intro.title) + '</h2>' +
      '<p>' + esc(L.intro.standfirst) + '</p></div>';

    /* adjudicated */
    h += '<h3 class="gsub">' + esc(L.adjudicated.head) + '</h3>';
    h += '<p class="gband-blurb">' + esc(L.adjudicated.blurb) + '</p>';
    h += L.adjudicated.items.map(function (x) {
      return '<article class="af sev-fatal" style="border-left-color:var(--tier-a)">' +
        '<header class="af-head"><span class="af-verdict" style="margin-left:0">' + esc(x.title) +
        (x.verify ? ' <span class="badge-verify">Verify cites</span>' : '') + '</span></header>' +
        '<div class="af-body"><div class="af-field"><p>' + esc(x.body) + '</p></div>' +
        '<p class="hyp-record" style="padding:0;border:none">' + esc(x.cite) + '</p></div></article>';
    }).join("");

    /* said it out loud */
    h += '<h3 class="gsub">' + esc(L.saidIt.head) + '</h3>';
    h += L.saidIt.items.map(function (q) {
      return '<figure class="qw"><blockquote class="qw-text">' + esc(q.text) + '</blockquote>' +
        '<figcaption class="qw-attr"><span class="qw-speaker">' + esc(q.speaker) + '</span>' +
        '<span class="qw-where">' + esc(q.where) +
        (q.verify ? '<span class="badge-verify">Archive pending</span>' : '') + '</span></figcaption>' +
        '<div class="qw-gloss">' + paras(q.gloss) + '</div>' +
        '<p class="hyp-record" style="padding:8px 0 0;border:none">' + esc(q.cite) + '</p></figure>';
    }).join("");

    /* weyrich loop */
    if (L.weyrichLoop) {
      var W = L.weyrichLoop;
      h += '<h3 class="gsub">' + esc(W.head) + '</h3>';
      h += '<p class="gband-blurb">' + esc(W.blurb) + '</p>';
      h += '<ol class="chain wloop">' + W.steps.map(function (s) {
        return '<li><b>' + esc(s.year) + '</b><p>' + esc(s.text) + '</p></li>';
      }).join("") + '</ol>';
      h += '<p class="closing" style="margin-bottom:44px">' + esc(W.closing) + '</p>';
    }

    /* ancestry chain */
    h += '<h3 class="gsub">' + esc(L.ancestry.head) + '</h3>';
    h += '<p class="gband-blurb">' + esc(L.ancestry.blurb) + '</p>';
    h += '<ol class="chain">' + L.ancestry.chain.map(function (c) {
      return '<li><b>' + esc(c.step) + (c.verify ? ' <span class="badge-verify">Verify cites</span>' : '') + '</b>' +
        '<p>' + esc(c.body) + '</p>' +
        '<span class="chain-cite">' + esc(c.cite) + '</span></li>';
    }).join("") + '</ol>';

    /* families ledger */
    h += '<h4 class="gsub" style="font-size:17px">' + esc(L.ancestry.families.head) + '</h4>';
    h += '<div class="lc-tablewrap" style="border:1px solid var(--rule)"><table class="lc-table">' +
      '<thead><tr><th>Fortune</th><th>Documented affiliation</th></tr></thead><tbody>';
    h += L.ancestry.families.rows.map(function (r) {
      return '<tr><td style="white-space:normal;color:var(--ink)">' + esc(r.name) +
        (r.v ? ' <span class="badge-verify">Verify</span>' : '') + '</td>' +
        '<td style="white-space:normal;font-family:var(--sans);font-size:13px;line-height:1.55">' + esc(r.fact) + '</td></tr>';
    }).join("") + '</tbody></table></div>';

    h += '<p class="closing" style="margin-top:36px">' + esc(L.ancestry.closing) + '</p>';

    /* the aside */
    if (L.aside) {
      var A = L.aside;
      h += '<aside class="nazi-aside">' +
        '<p class="eyebrow">' + esc(A.eyebrow) + '</p>' +
        '<h3>' + esc(A.head) + '</h3>' +
        '<div class="na-body">' + paras(A.body) + '</div>' +
        '<div class="na-cites"><b>The bibliography being compressed:</b><ul>' +
        A.cites.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") +
        '</ul></div></aside>';
    }
    host.innerHTML = h;
  }

  /* ------------------------------------------------------ source register */

  function renderSources() {
    var A = window.FH_ASSESSMENT;
    var host = document.getElementById("sources");
    if (!A || !host) return;
    var reg = A.sources;
    var keys = Object.keys(reg);

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">Everything cited, in one place</p>' +
      '<h2>Source register</h2>' +
      '<p>' + keys.length + ' sources. Tier A is a primary document; tier B is credible research or reporting. ' +
      'Entries marked for verification were drafted from general knowledge and have not been confirmed against the ' +
      'live source — they are a work queue, not citations.</p></div>';

    h += '<div class="srcs">' + keys.map(function (k) {
      var s = reg[k];
      var o = '<div class="src ' + tc(s.tier) + '">';
      o += '<div class="src-top"><span class="src-tier">Tier ' + esc(s.tier) + ' · ' + esc(s.type) + '</span>' +
           (s.verify ? '<span class="badge-verify">Unverified — check source</span>' : '') + '</div>';
      o += '<p class="src-title">' + esc(s.title) + '</p>';
      if (s.author) o += '<p class="src-meta">' + esc(s.author) + '</p>';
      if (s.pub) o += '<p class="src-meta dim">' + esc(s.pub) + '</p>';
      if (s.url) o += '<a class="ev-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.url) + ' ↗</a>';
      if (s.note) o += '<div class="ev-note">' + esc(s.note) + '</div>';
      o += '</div>';
      return o;
    }).join("") + '</div>';

    host.innerHTML = h;
  }

  /* ---------------------------------------------------- hypothesis lab */

  var H_VERDICT = {
    "closes":          { cls: "h-closes", label: "CLOSES" },
    "fails-as-stated": { cls: "h-fails",  label: "FAILS AS STATED" },
    "open":            { cls: "h-open",   label: "STAYS OPEN" }
  };

  function renderHypothesisLab() {
    var A = window.FH_ASSESSMENT;
    var host = document.getElementById("hlab");
    if (!A || !A.hypothesisLab || !host) return;
    var L = A.hypothesisLab;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(L.eyebrow) + '</p>' +
      '<h2>' + esc(L.title) + '</h2>' +
      '<p>' + esc(L.standfirst) + '</p></div>';

    h += L.hypotheses.map(function (x) {
      var v = H_VERDICT[x.verdict] || H_VERDICT.open;
      var o = '<article class="hyp ' + v.cls + '">';
      o += '<header class="hyp-head">' +
        '<span class="hyp-id">' + esc(x.id) + '</span>' +
        '<span class="hyp-verdict">' + esc(x.verdictLabel) + '</span>' +
        '</header>';
      o += '<p class="hyp-statement">' + esc(x.statement) + '</p>';
      o += '<div class="hyp-test">' + paras(x.test) + '</div>';
      o += '<p class="hyp-record">' + esc(x.record) + '</p>';
      o += '</article>';
      return o;
    }).join("");

    h += '<p class="closing" style="margin-top:40px">' + esc(L.synthesis) + '</p>';
    host.innerHTML = h;
  }

  /* ------------------------------------------------------- quote wall */

  function renderQuoteWall() {
    var P = window.FH_PRIMARY;
    var host = document.getElementById("quotewall");
    if (!P || !host) return;
    var Q = P.quoteWall;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(Q.eyebrow) + '</p>' +
      '<h2>' + esc(Q.title) + '</h2>' +
      '<p>' + esc(Q.standfirst) + '</p></div>';

    h += Q.quotes.map(function (q) {
      var o = '<figure class="qw">';
      o += '<blockquote class="qw-text">' + esc(q.text) + '</blockquote>';
      o += '<figcaption class="qw-attr">';
      o += '<span class="qw-speaker">' + esc(q.speaker) + '</span>';
      o += '<span class="qw-role">' + esc(q.role) + '</span>';
      o += '<span class="qw-where">' + esc(q.where) + ' · ' + esc(q.when) +
           (q.verify ? '<span class="badge-verify">Archive pending</span>' : '') + '</span>';
      o += '</figcaption>';
      o += '<div class="qw-gloss">' + paras(q.gloss) + '</div>';
      if (q.source && q.source.url) {
        o += '<a class="ev-link" href="' + esc(q.source.url) + '" target="_blank" rel="noopener noreferrer">' +
             esc(q.source.label) + ' ↗</a>';
      }
      o += '</figure>';
      return o;
    }).join("");

    host.innerHTML = h;
  }

  /* ---------------------------------------------------------- ledger */

  function renderLedger() {
    var P = window.FH_PRIMARY;
    var host = document.getElementById("ledger");
    if (!P || !host) return;
    var L = P.ledger;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(L.eyebrow) + '</p>' +
      '<h2>' + esc(L.title) + '</h2>' +
      '<p>' + esc(L.standfirst) + '</p></div>';

    h += L.entities.map(function (e) {
      var o = '<div class="ledger-card">';
      o += '<header class="lc-head"><span class="lc-name">' + esc(e.name) + '</span>' +
           '<span class="lc-ein">EIN ' + esc(e.ein) + '</span></header>';
      o += '<p class="lc-headline">' + esc(e.headline) + '</p>';
      o += '<div class="lc-tablewrap"><table class="lc-table"><thead><tr><th>FY</th><th>Revenue</th>';
      var hasOut = e.rows.some(function (r) { return r.out; });
      var hasAssets = e.rows.some(function (r) { return r.assets; });
      if (hasOut) o += '<th>Grants + expenses out</th>';
      if (hasAssets) o += '<th>Assets</th>';
      o += '</tr></thead><tbody>';
      o += e.rows.map(function (r) {
        return '<tr class="' + (r.flag ? "flag" : "") + '"><td>' + esc(r.fy) +
          (r.note ? ' <span class="lc-note">' + esc(r.note) + '</span>' : '') + '</td>' +
          '<td>' + esc(r.rev) + '</td>' +
          (hasOut ? '<td>' + esc(r.out || "—") + '</td>' : '') +
          (hasAssets ? '<td>' + esc(r.assets || "—") + '</td>' : '') + '</tr>';
      }).join("");
      o += '</tbody></table></div>';
      o += '<div class="lc-reading">' + paras(e.reading) + '</div>';
      o += '</div>';
      return o;
    }).join("");

    h += '<div class="ev-hint" style="max-width:82ch"><b>Method — repeat this yourself</b>' + esc(L.method) + '</div>';
    host.innerHTML = h;
  }

  /* --------------------------------------------------------- daf table */

  function renderDafTable() {
    var P = window.FH_PRIMARY;
    var host = document.getElementById("daftable");
    if (!P || !P.dafTable || !host) return;
    var D = P.dafTable;
    var yearKeys = ["FY2022", "FY2023", "FY2024"];

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(D.eyebrow) + '</p>' +
      '<h2>' + esc(D.title) + '</h2>' +
      '<p>' + esc(D.standfirst) + '</p></div>';

    h += '<div class="lc-tablewrap" style="border:1px solid var(--rule)">' +
      '<table class="lc-table daf-table"><thead><tr><th>Grantee (EIN-matched)</th>';
    yearKeys.forEach(function (y) { h += '<th>' + y + '</th>'; });
    h += '<th>Stated purposes (verbatim)</th></tr></thead><tbody>';

    h += D.grants.map(function (g) {
      var o = '<tr class="' + (g.designated ? "flag" : "") + '">';
      o += '<td style="white-space:normal"><span style="color:var(--ink)">' + esc(g.org) + '</span>' +
        (g.designated ? ' <span class="r-tag" style="margin-left:6px">SPLC-designated</span>' : '') +
        '<br><span class="lc-ein">EIN ' + esc(g.ein) + '</span></td>';
      yearKeys.forEach(function (y) {
        var v = g.years[y] || "—";
        o += '<td' + (v.indexOf("n/f") === 0 ? ' style="color:var(--ink-faint)"' : '') + '>' + esc(v) + '</td>';
      });
      o += '<td style="white-space:normal;font-family:var(--sans);font-size:12px;line-height:1.5">' +
        g.purposes.map(esc).join("<br>") + '</td>';
      o += '</tr>';
      return o;
    }).join("");
    h += '</tbody></table></div>';

    h += '<div class="ev-hint" style="max-width:86ch;margin-top:18px"><b>Caveats — read before quoting</b>' + esc(D.caveats) + '</div>';
    h += '<div class="dblock" style="margin-top:26px"><div class="dbody">' + paras(D.reading) + '</div></div>';

    if (D.colcom) {
      var C = D.colcom;
      h += '<h3 style="font-size:22px;font-weight:400;color:var(--ink);margin:44px 0 10px;letter-spacing:-0.01em">' + esc(C.head) + '</h3>';
      h += '<p style="font-family:var(--sans);font-size:15px;color:var(--ink-dim);max-width:82ch;line-height:1.6;margin:0 0 18px">' + esc(C.intro) + '</p>';
      h += '<div class="lc-tablewrap" style="border:1px solid var(--rule)"><table class="lc-table">' +
        '<thead><tr><th>Grantee</th><th>TY2023</th><th>TY2024</th><th>Note</th></tr></thead><tbody>';
      h += C.rows.map(function (r) {
        return '<tr class="' + (r.designated ? "flag" : "") + '">' +
          '<td style="white-space:normal;color:var(--ink)">' + esc(r.org) +
          (r.designated ? ' <span class="r-tag" style="margin-left:6px">SPLC-designated</span>' : '') + '</td>' +
          '<td>' + esc(r.y2023) + '</td><td>' + esc(r.y2024) + '</td>' +
          '<td style="white-space:normal;font-family:var(--sans);font-size:12px;line-height:1.5">' + esc(r.note) + '</td></tr>';
      }).join("");
      h += '</tbody></table></div>';
      h += '<div class="dblock" style="margin-top:20px"><div class="dbody">' + paras(C.tail) + '</div></div>';

      if (C.bothFlanks) {
        var B = C.bothFlanks;
        h += '<h3 style="font-size:22px;font-weight:400;color:var(--tier-b);margin:44px 0 10px;letter-spacing:-0.01em">' + esc(B.head) + '</h3>';
        h += '<p style="font-family:var(--sans);font-size:15px;color:var(--ink-dim);max-width:82ch;line-height:1.6;margin:0 0 18px">' + esc(B.intro) + '</p>';
        h += '<div class="lc-tablewrap" style="border:1px solid var(--rule)"><table class="lc-table">' +
          '<thead><tr><th>Colcom filing</th><th>as “Progressives for Immigration Reform”</th><th>as “Institute for Sound Public Policy”</th><th>Purpose (verbatim)</th></tr></thead><tbody>';
        h += B.rows.map(function (r) {
          return '<tr><td>' + esc(r.ty) + '</td><td>' + esc(r.pfir) + '</td><td>' + esc(r.ispp) + '</td>' +
            '<td style="white-space:normal;font-family:var(--sans);font-size:12px;line-height:1.5">' + esc(r.purpose) + '</td></tr>';
        }).join("");
        h += '</tbody></table></div>';
        h += '<div class="dblock" style="margin-top:20px"><div class="dbody">' + paras(B.reading) + '</div></div>';
      }
    }
    host.innerHTML = h;
  }

  /* -------------------------------------------------------- undercount */

  function renderUndercount() {
    var P = window.FH_PRIMARY;
    var host = document.getElementById("undercount");
    if (!P || !host) return;
    var U = P.undercount;

    var h = '<div class="sec-head">' +
      '<p class="eyebrow">' + esc(U.eyebrow) + '</p>' +
      '<h2>' + esc(U.title) + '</h2>' +
      '<p>' + esc(U.standfirst) + '</p></div>';

    h += '<div class="stats">' + U.stats.map(function (s) {
      return '<div class="stat"><span class="s-fig">' + esc(s.figure) + '</span>' +
        '<span class="s-unit">' + esc(s.unit) + '</span>' +
        '<span class="s-lab">' + esc(s.label) + '</span></div>';
    }).join("") + '</div>';

    h += '<div class="dblock" style="margin-top:30px"><div class="dbody">' + paras(U.reading) + '</div></div>';

    h += '<div class="chips">' + U.sources.map(function (s) {
      return '<a class="chip" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
        esc(s.label) + ' ↗</a>';
    }).join("") + '</div>';

    host.innerHTML = h;
  }

  function boot() {
    renderRoster();
    renderAdversarial();
    renderHypothesisLab();
    renderDefunding();
    renderQuoteWall();
    renderLedger();
    renderDafTable();
    renderGroups();
    renderTrace();
    renderAuthors();
    renderLandscape();
    renderUndercount();
    renderSources();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
