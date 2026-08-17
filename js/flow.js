/* ==========================================================================
   FundingHate — flow diagram renderer
   --------------------------------------------------------------------------
   A hand-rolled layered Sankey. No D3, no CDN, no build step. Works offline
   and from file://.

   Ribbons are STROKES rather than filled polygons, specifically so that the
   evidence tier can be encoded in the dash pattern (solid = documented,
   dashed = reported, dotted = illustrative). That encoding is the point of
   the whole diagram, so it drives the rendering approach.
   ========================================================================== */

(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";

  var CFG = {
    W: 1660,
    padX: 26,
    padTop: 66,      // room for layer headers
    padBottom: 26,
    boxW: 186,
    gapY: 22,        // vertical gap between nodes in a column
    scale: 4.2,      // px of node height per unit of flow value
    minLinkW: 1.6
  };

  var svg   = document.getElementById("flow");
  var tip   = document.getElementById("tip");
  var data  = window.FH_NETWORK;

  var state = {
    mode: "all",        // "all" | "ab" | "a"
    selected: null,
    layout: null
  };

  /* ---------------------------------------------------------------- helpers */

  function el(name, attrs, cls) {
    var n = document.createElementNS(SVG_NS, name);
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (cls) n.setAttribute("class", cls);
    return n;
  }

  function tierClass(t) { return "t-" + String(t).toLowerCase(); }

  function tierName(t) {
    return { A: "Documented", B: "Reported", C: "Illustrative" }[t] || t;
  }

  /* Greedy word wrap into an array of lines of at most `max` characters. */
  function wrap(text, max) {
    var words = String(text || "").split(/\s+/), lines = [], cur = "";
    for (var i = 0; i < words.length; i++) {
      var t = cur ? cur + " " + words[i] : words[i];
      if (t.length > max && cur) { lines.push(cur); cur = words[i]; }
      else { cur = t; }
    }
    if (cur) lines.push(cur);
    return lines;
  }

  /* Which tiers are visible in the current mode. */
  function allowed() {
    if (state.mode === "a")  return { A: 1 };
    if (state.mode === "ab") return { A: 1, B: 1 };
    return { A: 1, B: 1, C: 1 };
  }

  /* ---------------------------------------------------------------- layout */

  function computeLayout() {
    var ok = allowed();

    /* 1. Filter nodes and links by tier. */
    var nodes = data.nodes.filter(function (n) { return ok[n.tier]; });
    var byId = {};
    nodes.forEach(function (n) { byId[n.id] = { def: n, in: [], out: [], id: n.id }; });

    var links = data.links.filter(function (l) {
      return ok[l.tier] && byId[l.source] && byId[l.target];
    }).map(function (l) { return { def: l, s: byId[l.source], t: byId[l.target], value: l.value }; });

    links.forEach(function (l) { l.s.out.push(l); l.t.in.push(l); });

    /* 2. Drop orphans — a disconnected box in a flow diagram reads as a bug,
          and their disappearance is itself the honest result of the filter. */
    var live = {};
    nodes.forEach(function (n) {
      var w = byId[n.id];
      if (w.in.length || w.out.length) live[n.id] = w;
    });
    links = links.filter(function (l) { return live[l.s.id] && live[l.t.id]; });
    var wrapped = Object.keys(live).map(function (k) { return live[k]; });

    /* 3. Column assignment, preserving declared layer order. */
    var layerOrder = data.layers.map(function (L) { return L.id; });
    var cols = layerOrder.map(function (id) {
      return { id: id, def: data.layers.filter(function (L) { return L.id === id; })[0], items: [] };
    });
    wrapped.forEach(function (w) {
      var ci = layerOrder.indexOf(w.def.layer);
      if (ci >= 0) cols[ci].items.push(w);
    });
    var visibleCols = cols.filter(function (c) { return c.items.length; });

    /* 4. Node sizing. Height is the larger of the flow-proportional height and
          whatever the label text actually needs. */
    wrapped.forEach(function (w) {
      var sin = w.in.reduce(function (a, l) { return a + l.value; }, 0);
      var sout = w.out.reduce(function (a, l) { return a + l.value; }, 0);
      w.value = Math.max(sin, sout, 6);

      w.labelLines = wrap(w.def.label, 24);
      w.subLines = wrap(w.def.sub, 32).slice(0, 2);
      var textNeed = 22 + w.labelLines.length * 16 + 5 + w.subLines.length * 13 + 12;

      w.h = Math.max(w.value * CFG.scale, textNeed);
    });

    /* 5. Column x positions spread across the full width. */
    var nCols = visibleCols.length;
    var usable = CFG.W - CFG.padX * 2;
    var step = nCols > 1 ? (usable - CFG.boxW) / (nCols - 1) : 0;
    visibleCols.forEach(function (c, i) { c.x = CFG.padX + i * step; });

    /* 6. Canvas height driven by the tallest column, then centre each column. */
    var tallest = 0;
    visibleCols.forEach(function (c) {
      var tot = c.items.reduce(function (a, w) { return a + w.h; }, 0) + (c.items.length - 1) * CFG.gapY;
      c.total = tot;
      if (tot > tallest) tallest = tot;
    });
    var H = CFG.padTop + tallest + CFG.padBottom;

    visibleCols.forEach(function (c) {
      var y = CFG.padTop + (tallest - c.total) / 2;
      c.items.forEach(function (w) {
        w.x = c.x; w.y = y; w.w = CFG.boxW;
        y += w.h + CFG.gapY;
      });
    });

    /* 7. Ribbon endpoints. Sorting by the opposite endpoint's y reduces
          crossings enough to keep the picture readable. */
    wrapped.forEach(function (w) {
      w.out.sort(function (a, b) { return a.t.y - b.t.y; });
      w.in.sort(function (a, b) { return a.s.y - b.s.y; });
      var o = w.y;
      w.out.forEach(function (l) {
        l.sw = Math.max(l.value * CFG.scale, CFG.minLinkW);
        l.sy = o + l.sw / 2; o += l.sw;
      });
      var i2 = w.y;
      w.in.forEach(function (l) {
        var tw = Math.max(l.value * CFG.scale, CFG.minLinkW);
        l.ty = i2 + tw / 2; i2 += tw;
      });
    });

    return { cols: visibleCols, nodes: wrapped, links: links, H: H, byId: live };
  }

  /* ---------------------------------------------------------------- render */

  function render() {
    var L = computeLayout();
    state.layout = L;

    while (svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute("viewBox", "0 0 " + CFG.W + " " + L.H);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    /* diagonal hatch used behind illustrative columns */
    var defs = el("defs");
    var pat = el("pattern", {
      id: "hatch", width: 8, height: 8,
      patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)"
    });
    pat.appendChild(el("rect", { width: 8, height: 8, fill: "rgba(139,111,212,0.035)" }));
    pat.appendChild(el("line", { x1: 0, y1: 0, x2: 0, y2: 8, stroke: "rgba(139,111,212,0.11)", "stroke-width": 2 }));
    defs.appendChild(pat);
    svg.appendChild(defs);

    var gBands = el("g"), gLinks = el("g"), gNodes = el("g"), gHeads = el("g");
    svg.appendChild(gBands); svg.appendChild(gLinks); svg.appendChild(gNodes); svg.appendChild(gHeads);

    /* --- hypothetical band: shade any column that is entirely illustrative */
    L.cols.forEach(function (c) {
      var allC = c.items.every(function (w) { return w.def.tier === "C"; });
      if (!allC) return;
      gBands.appendChild(el("rect", {
        x: c.x - 22, y: CFG.padTop - 34, width: CFG.boxW + 44, height: L.H - CFG.padTop + 12
      }, "hypo-band"));
    });

    /* --- layer headers */
    L.cols.forEach(function (c, i) {
      var t = el("text", { x: c.x, y: 30 }, "lyr-title");
      t.textContent = c.def.label;
      gHeads.appendChild(t);
      var n = el("text", { x: c.x, y: 46 }, "lyr-num");
      n.textContent = String(i + 1).padStart(2, "0");
      gHeads.appendChild(n);
      if (i > 0) {
        var mid = (L.cols[i - 1].x + CFG.boxW + c.x) / 2;
        gHeads.appendChild(el("line", { x1: mid, y1: 14, x2: mid, y2: L.H - 10 }, "lyr-divider"));
      }
    });

    /* --- ribbons */
    L.links.forEach(function (l) {
      var x0 = l.s.x + l.s.w, x1 = l.t.x;
      var xm = x0 + (x1 - x0) * 0.5;
      var d = "M" + x0 + "," + l.sy + " C" + xm + "," + l.sy + " " + xm + "," + l.ty + " " + x1 + "," + l.ty;
      var p = el("path", { d: d, "stroke-width": l.sw }, "link " + tierClass(l.def.tier));
      p.__link = l;
      p.addEventListener("mouseenter", function (e) { hoverLink(l, e); });
      p.addEventListener("mousemove", moveTip);
      p.addEventListener("mouseleave", clearHover);
      p.addEventListener("click", function () { openLinkDossier(l); });
      gLinks.appendChild(p);
      l.el = p;
    });

    /* --- nodes */
    L.nodes.forEach(function (w) {
      var g = el("g", null, "node-g");
      g.setAttribute("data-id", w.id);
      w.el = g;

      g.appendChild(el("rect", {
        x: w.x, y: w.y, width: w.w, height: w.h, rx: 2
      }, "node-box " + tierClass(w.def.tier)));

      var ty = el("text", { x: w.x + 12, y: w.y + 17 }, "node-tier " + tierClass(w.def.tier));
      ty.textContent = tierName(w.def.tier).toUpperCase();
      g.appendChild(ty);

      var y = w.y + 35;
      w.labelLines.forEach(function (ln) {
        var t = el("text", { x: w.x + 12, y: y }, "node-label");
        t.textContent = ln; g.appendChild(t); y += 16;
      });
      y += 3;
      w.subLines.forEach(function (ln) {
        var t = el("text", { x: w.x + 12, y: y }, "node-sub");
        t.textContent = ln; g.appendChild(t); y += 13;
      });

      /* transparent hit rect on top so text never eats the pointer */
      var hit = el("rect", { x: w.x, y: w.y, width: w.w, height: w.h }, "node-hit");
      hit.addEventListener("mouseenter", function (e) { hoverNode(w, e); });
      hit.addEventListener("mousemove", moveTip);
      hit.addEventListener("mouseleave", clearHover);
      hit.addEventListener("click", function () { window.FH.openNode(w.def.id); });
      g.appendChild(hit);

      gNodes.appendChild(g);
    });

    if (state.selected && L.byId[state.selected]) {
      L.byId[state.selected].el.classList.add("selected");
    }
    updateCaption(L);
  }

  /* ---------------------------------------------------------------- hover */

  function hoverNode(w, e) {
    var L = state.layout;
    var hot = {}; hot[w.id] = 1;
    var hotLinks = [];
    /* walk upstream and downstream so the reader sees the whole path */
    (function up(n) {
      n.in.forEach(function (l) {
        if (hotLinks.indexOf(l) >= 0) return;
        hotLinks.push(l); hot[l.s.id] = 1; up(l.s);
      });
    })(w);
    (function down(n) {
      n.out.forEach(function (l) {
        if (hotLinks.indexOf(l) >= 0) return;
        hotLinks.push(l); hot[l.t.id] = 1; down(l.t);
      });
    })(w);

    L.nodes.forEach(function (n) {
      n.el.classList.toggle("hot", n.id === w.id);
      n.el.classList.toggle("faded", !hot[n.id]);
    });
    L.links.forEach(function (l) {
      var on = hotLinks.indexOf(l) >= 0;
      l.el.classList.toggle("hot", on);
      l.el.classList.toggle("faded", !on);
    });

    showTip(tierName(w.def.tier), "<b>" + w.def.label + "</b><br>" + w.def.summary +
      "<br><span style='color:#626a73'>Click for sources.</span>", w.def.tier, e);
  }

  function hoverLink(l, e) {
    var L = state.layout;
    L.nodes.forEach(function (n) {
      n.el.classList.remove("hot");
      n.el.classList.toggle("faded", n.id !== l.s.id && n.id !== l.t.id);
    });
    L.links.forEach(function (k) {
      k.el.classList.toggle("hot", k === l);
      k.el.classList.toggle("faded", k !== l);
    });
    var body = "<b>" + l.s.def.label + " → " + l.t.def.label + "</b><br>" +
      (l.def.label || "") + (l.def.note ? "<br><br>" + l.def.note : "");
    showTip(tierName(l.def.tier) + " connection", body, l.def.tier, e);
  }

  function clearHover() {
    var L = state.layout; if (!L) return;
    L.nodes.forEach(function (n) { n.el.classList.remove("hot", "faded"); });
    L.links.forEach(function (l) { l.el.classList.remove("hot", "faded"); });
    tip.classList.remove("on");
  }

  var TIER_COLOR = { A: "var(--tier-a)", B: "var(--tier-b)", C: "var(--tier-c)" };

  function showTip(head, body, tier, e) {
    tip.innerHTML = '<div class="tip-h" style="color:' + (TIER_COLOR[tier] || "#9aa0a8") + '">' +
      head + '</div><div class="tip-b">' + body + "</div>";
    tip.classList.add("on");
    moveTip(e);
  }

  function moveTip(e) {
    var pad = 16;
    var x = e.clientX + pad, y = e.clientY + pad;
    var r = tip.getBoundingClientRect();
    if (x + r.width > window.innerWidth - 10) x = e.clientX - r.width - pad;
    if (y + r.height > window.innerHeight - 10) y = e.clientY - r.height - pad;
    tip.style.left = x + "px";
    tip.style.top = Math.max(8, y) + "px";
  }

  /* ---------------------------------------------------------------- caption */

  var CAPTIONS = {
    all: {
      cls: "c",
      text: "Showing everything, including the illustrative reconstruction. The dotted violet flows on the left are <strong>not documented</strong> for any named pair of entities — they are the small suspicion this project started with. The records showed the real money entering from somewhere else entirely: the top. Flip to “documented only” to watch the decoy vanish and the machine remain."
    },
    ab: {
      cls: "b",
      text: "Illustrative flows removed. What remains is primary documents plus credible reporting and watchdog designations — contestable, but sourced."
    },
    a: {
      cls: "a",
      text: "<strong>Documented only — primary sources.</strong> Notice what just happened: the entire merchandise layer vanished, because that chain was never on paper. It was the small version of the story. What remains standing — anonymized funds granting to designated organizations, a published advisory board, a published playbook, matching published rulemakings — is the endemic version, and it survives without a single inference."
    }
  };

  function updateCaption(L) {
    var box = document.getElementById("graph-caption");
    if (!box) return;
    var c = CAPTIONS[state.mode];
    var counts = { A: 0, B: 0, C: 0 };
    L.links.forEach(function (l) { counts[l.def.tier]++; });
    box.className = "graph-caption tier-" + c.cls;
    box.innerHTML =
      '<p>' + c.text + '</p>' +
      '<div class="counts">' +
      '<span class="ct a">' + counts.A + ' documented</span>' +
      '<span class="ct b">' + counts.B + ' reported</span>' +
      '<span class="ct c">' + counts.C + ' illustrative</span>' +
      '<span class="ct n">' + L.nodes.length + ' entities shown</span>' +
      '</div>';
  }

  /* ---------------------------------------------------------------- public */

  window.FH = window.FH || {};

  window.FH.setMode = function (m) {
    state.mode = m;
    ["all", "ab", "a"].forEach(function (k) {
      var b = document.getElementById("mode-" + k);
      if (b) b.setAttribute("aria-pressed", String(k === m));
    });
    render();
  };

  window.FH.selectNode = function (id) {
    state.selected = id;
    if (!state.layout) return;
    state.layout.nodes.forEach(function (n) {
      n.el.classList.toggle("selected", n.id === id);
    });
  };

  window.FH.getNodeDef = function (id) {
    for (var i = 0; i < data.nodes.length; i++) if (data.nodes[i].id === id) return data.nodes[i];
    return null;
  };

  window.FH.getConnections = function (id) {
    var up = [], down = [];
    data.links.forEach(function (l) {
      if (l.target === id) up.push({ id: l.source, link: l });
      if (l.source === id) down.push({ id: l.target, link: l });
    });
    return { up: up, down: down };
  };

  window.FH.render = render;
  window.FH.tierName = tierName;

  function openLinkDossier(l) {
    /* Clicking a ribbon opens the downstream node — the destination is almost
       always what a reader actually wants next. */
    window.FH.openNode(l.t.def.id);
  }

  /* boot — exactly once, whichever path applies */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { window.FH.setMode("all"); });
  } else {
    window.FH.setMode("all");
  }
})();
