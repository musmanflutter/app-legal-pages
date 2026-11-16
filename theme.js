/**
 * HUBNEX AI — THEME SWITCHER
 *
 * Priority order:
 *  1. URL param  ?theme=light | ?theme=dark   (used by the Flutter app)
 *  2. System / OS preference (prefers-color-scheme)
 *  3. Default → dark
 *
 * Runs in <head> so the page never flashes the wrong theme.
 */
(function () {
  var param = new URLSearchParams(window.location.search).get("theme");
  var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  var theme = param === "light" || param === "dark" ? param : prefersLight ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();
