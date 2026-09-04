// biofmt marketing site — minimal JS
// Handles mobile nav toggle only. No analytics trackers are active.

(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (event) {
    if (!nav.classList.contains("is-open")) {
      return;
    }
    var clickedInsideNav = nav.contains(event.target);
    var clickedToggle = toggle.contains(event.target);
    if (!clickedInsideNav && !clickedToggle) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// --- Analytics stub (disabled) ---
// Uncomment and configure only if you actually want visitor analytics.
// This site ships with no tracking by default.
//
// (function () {
//   var script = document.createElement("script");
//   script.src = "https://plausible.io/js/script.js";
//   script.setAttribute("data-domain", "example.com");
//   document.head.appendChild(script);
// })();