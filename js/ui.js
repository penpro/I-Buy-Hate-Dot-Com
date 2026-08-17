/* ==========================================================================
   FundingHate — dossier panel, narrative walkthrough, keyboard handling
   ========================================================================== */

(function () {
  "use strict";

  var panel  = document.getElementById("dossier");
  var inner  = document.getElementById("dossier-inner");
  var scrim  = document.getElementById("scrim");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function paras(text) {
    return String(text || "").split(/\n+/).filter(Boolean)
      .map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }

  function tierClass(t) { return "t-" + String(t).toLowerCase(); }

  /* ------------------------------------------------------------- dossier */

  function evidenceHTML(list) {
    if (!list || !list.length) {
      return '<p class="ev-empty">No source list attached to this node yet. ' +
             'If you are building on this, that is a to-do, not a conclusion.</p>';
    }
    return list.map(function (e) {
      var h = '<div class="ev ' + tierClass(e.tier) + '">';
      h += '<div class="ev-type">' + esc(e.type) + ' · Tier ' + esc(e.tier) +
           (e.verify ? '<span class="badge-verify">Unverified — check source</span>' : '') + '</div>';
      h += '<p class="ev-title">' + esc(e.title) + '</p>';
      if (e.source) h += '<p class="ev-source">' + esc(e.source) + '</p>';
      if (e.url) {
        h += '<a class="ev-link" href="' + esc(e.url) + '" target="_blank" rel="noopener noreferrer">' +
             esc(e.url) + ' ↗</a>';
      }
      if (e.note) h += '<div class="ev-note">' + esc(e.note) + '</div>';
      h += '</div>';
      return h;
    }).join("");
  }

  function connHTML(items, dir) {
    if (!items.length) return '<p class="ev-empty">None.</p>';
    return '<ul class="conn">' + items.map(function (c) {
      var d = window.FH.getNodeDef(c.id);
      if (!d) return "";
      return '<li>' +
        '<span class="c-tier ' + tierClass(c.link.tier) + '">' + esc(c.link.tier) + '</span>' +
        '<span><span class="c-name" data-goto="' + esc(c.id) + '">' + esc(d.label) + '</span>' +
        (c.link.label ? ' <span class="c-label">— ' + esc(c.link.label) + '</span>' : '') +
        (c.link.note ? '<div class="c-label" style="margin-top:4px">' + esc(c.link.note) + '</div>' : '') +
        '</span></li>';
    }).join("") + '</ul>';
  }

  window.FH = window.FH || {};

  window.FH.openNode = function (id) {
    var d = window.FH.getNodeDef(id);
    if (!d) return;
    var conns = window.FH.getConnections(id);
    var tn = window.FH.tierName(d.tier);

    var h = '<button class="close" id="dossier-close" aria-label="Close">✕</button>';
    h += '<span class="d-tier ' + tierClass(d.tier) + '">' + esc(tn) + '</span>';
    h += '<h2>' + esc(d.label) + '</h2>';
    h += '<p class="d-sub">' + esc(d.sub) + '</p>';
    h += '<p class="d-summary">' + esc(d.summary) + '</p>';
    h += '<div class="d-detail">' + paras(d.detail) + '</div>';

    h += '<h3>Evidence</h3>' + evidenceHTML(d.evidence);
    h += '<h3>Money / influence in</h3>' + connHTML(conns.up, "up");
    h += '<h3>Money / influence out</h3>' + connHTML(conns.down, "down");

    inner.innerHTML = h;
    panel.classList.add("open");
    scrim.classList.add("on");
    panel.scrollTop = 0;
    panel.setAttribute("aria-hidden", "false");

    document.getElementById("dossier-close").addEventListener("click", close);
    inner.querySelectorAll("[data-goto]").forEach(function (n) {
      n.addEventListener("click", function () { window.FH.openNode(n.getAttribute("data-goto")); });
    });

    window.FH.selectNode(id);
  };

  function close() {
    panel.classList.remove("open");
    scrim.classList.remove("on");
    panel.setAttribute("aria-hidden", "true");
    window.FH.selectNode(null);
  }

  scrim.addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
    if (e.key === "1") window.FH.setMode("all");
    if (e.key === "2") window.FH.setMode("ab");
    if (e.key === "3") window.FH.setMode("a");
  });

  /* ------------------------------------------------------------- journey */

  function money(m) {
    var rows = [
      ["Retail price", m.price],
      ["Blank + print", -m.cogs],
      ["Shipping + processing", -m.fulfillment]
    ];
    var h = '<div class="econ"><table><tbody>';
    rows.forEach(function (r) {
      h += '<tr><td>' + esc(r[0]) + '</td><td>' +
           (r[1] < 0 ? "−" : "") + "$" + Math.abs(r[1]).toFixed(2) + '</td></tr>';
    });
    h += '<tr class="total"><td>Gross margin</td><td>$' + m.margin.toFixed(2) + '</td></tr>';
    h += '</tbody></table><div class="econ-note">' + esc(m.note) + '</div></div>';
    return h;
  }

  function renderJourney() {
    var J = window.FH_JOURNEY;
    var host = document.getElementById("journey-steps");
    if (!host || !J) return;

    host.innerHTML = J.steps.map(function (s) {
      var hypo = s.tier === "C";
      var h = '<article class="step' + (hypo ? " hypo" : "") + '" id="step-' + s.id + '">';
      h += '<div class="rail"><span class="num">' + String(s.id).padStart(2, "0") + '</span>';
      h += '<span class="tierchip ' + tierClass(s.tier) + '">' +
           esc(window.FH.tierName(s.tier)) + '</span></div>';
      h += '<div class="col">';
      h += '<p class="kicker">' + esc(s.kicker) + '</p>';
      h += '<h3>' + esc(s.title) + '</h3>';
      h += '<div class="body">' + paras(s.body) + '</div>';
      if (s.money) h += money(s.money);
      if (s.pull) h += '<blockquote class="pull">' + esc(s.pull) + '</blockquote>';
      if (s.evidenceHint) {
        h += '<div class="ev-hint"><b>How to nail this down</b>' + esc(s.evidenceHint) + '</div>';
      }
      h += '</div></article>';
      return h;
    }).join("");

    var sh = document.getElementById("journey-head");
    if (sh) {
      sh.innerHTML =
        '<p class="eyebrow">The walkthrough</p>' +
        '<h2>' + esc(J.title) + '</h2>' +
        '<p>' + esc(J.standfirst) + '</p>';
    }

    var coda = document.getElementById("coda");
    if (coda && J.coda) {
      coda.innerHTML =
        '<h2>' + esc(J.coda.title) + '</h2>' +
        '<ol>' + J.coda.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ol>' +
        '<p class="closing">' + esc(J.coda.closing) + '</p>';
    }
  }

  /* ------------------------------------------------------------- legend */

  function renderLegend() {
    var host = document.getElementById("legend");
    if (!host) return;
    var items = [
      { k: "a", t: "Documented", d: "A filing, a court record, a published roster, or the subject's own words. Click through and you land on paper." },
      { k: "b", t: "Reported", d: "Investigative journalism, leaked datasets, watchdog designations. Contestable, but sourced and attributed." },
      { k: "c", t: "Illustrative", d: "Structurally plausible; NOT evidenced for these parties. The hypothesis. Always dotted, and switchable off." }
    ];
    host.innerHTML = items.map(function (i) {
      return '<li><span class="swatch ' + i.k + '"></span><dl>' +
        '<dt class="' + i.k + '-t">' + i.t + '</dt>' +
        '<dd>' + i.d + '</dd></dl></li>';
    }).join("");
  }

  function boot() {
    renderLegend();
    renderJourney();
    ["all", "ab", "a"].forEach(function (m) {
      var b = document.getElementById("mode-" + m);
      if (b) b.addEventListener("click", function () { window.FH.setMode(m); });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
