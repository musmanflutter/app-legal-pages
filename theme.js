/**
 * HUBNEX AI — THEME SWITCHER
 *
 * Priority order:
 *  1. URL param  ?theme=light | ?theme=dark   (from Flutter app)
 *  2. System / OS preference  (prefers-color-scheme)
 *  3. Default → dark
 */
(function () {
  // 1. Check URL param
  const params = new URLSearchParams(window.location.search);
  const paramTheme = params.get("theme"); // "light" | "dark" | null

  // 2. Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // 3. Resolve final theme
  let theme;
  if (paramTheme === "light" || paramTheme === "dark") {
    theme = paramTheme;
  } else {
    theme = prefersDark ? "dark" : "light";
  }

  // Apply to <html> — CSS vars pick this up immediately
  document.documentElement.setAttribute("data-theme", theme);

  // 4. Swap logo src based on theme
  //    Runs after DOM is ready so the <img> exists
  document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".header-logo");
    if (!logo) return;

    if (theme === "light") {
      logo.src = "assets/logo_text_dark.png";
    } else {
      logo.src = "assets/logo_text_light.png";
    }
  });
})();
