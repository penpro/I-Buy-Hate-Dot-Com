/* ==========================================================================
   FundingHate — dynamic sidebar index
   Drawer navigation with active-section tracking. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var SECTIONS = [
    { id: "coldopen-a",  label: "The claim" },
    { id: "masthead-a",  label: "What this is" },
    { id: "graph-zone",  label: "The money flow" },
    { id: "journey",     label: "The $34 t-shirt" },
    { id: "coda",        label: "What we claim, exactly" },
    { id: "roster",      label: "The 54-org advisory board" },
    { id: "adversarial", label: "What we got wrong" },
    { id: "hlab",        label: "The hypothesis lab" },
    { id: "quotewall",   label: "They said it out loud" },
    { id: "ledger",      label: "The 990 ledger" },
    { id: "daftable",    label: "Anonymous money, named purposes" },
    { id: "trace",       label: "The citation trace" },
    { id: "authors",     label: "Who wrote the playbook" },
    { id: "groups",      label: "It's not just the SPLC" },
    { id: "landscape",   label: "Engineered elections + ancestry" },
    { id: "undercount",  label: "The 40:1 undercount" },
    { id: "defunding",   label: "Defunding works" },
    { id: "sources",     label: "Source register" }
  ];

  function boot() {
    /* anchor shims for sections that are classes not ids */
    var co = document.querySelector(".coldopen");
    if (co) co.id = "coldopen-a";
    var mh = document.querySelector(".masthead");
    if (mh) mh.id = "masthead-a";
    var jr = document.querySelector(".journey");
    if (jr) jr.id = "journey";

    var toggle = document.createElement("button");
    toggle.id = "nav-toggle";
    toggle.setAttribute("aria-label", "Open index");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<span class="nt-bars">☰</span> Index';
    document.body.appendChild(toggle);

    var drawer = document.createElement("nav");
    drawer.id = "nav-drawer";
    drawer.setAttribute("aria-label", "Section index");
    drawer.innerHTML =
      '<div class="nd-head">I Buy Hate — Index</div>' +
      '<ul>' + SECTIONS.map(function (s) {
        return '<li><a href="#' + s.id + '" data-sec="' + s.id + '">' + s.label + '</a></li>';
      }).join("") + '</ul>';
    document.body.appendChild(drawer);

    function setOpen(open) {
      drawer.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }
    toggle.addEventListener("click", function () { setOpen(!drawer.classList.contains("open")); });
    drawer.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && window.innerWidth < 1750) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    /* active-section tracking */
    var links = {};
    drawer.querySelectorAll("a[data-sec]").forEach(function (a) { links[a.getAttribute("data-sec")] = a; });
    var current = null;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          if (current) current.classList.remove("active");
          current = links[en.target.id];
          if (current) current.classList.add("active");
        }
      });
    }, { rootMargin: "-15% 0px -70% 0px" });
    SECTIONS.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
