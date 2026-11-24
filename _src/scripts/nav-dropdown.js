// Header dropdowns: keep only one open, close on outside click or Escape.
(() => {
  const drops = [...document.querySelectorAll(".nav-drop")];
  if (!drops.length) return;
  const closeAll = (except) => drops.forEach((d) => d !== except && d.removeAttribute("open"));
  drops.forEach((d) => d.addEventListener("toggle", () => d.open && closeAll(d)));
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-drop")) closeAll();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = drops.find((d) => d.open);
    if (open) {
      open.removeAttribute("open");
      open.querySelector("summary").focus();
    }
  });
})();
