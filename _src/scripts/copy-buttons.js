// Copy buttons: [data-copy-link] copies a URL, [data-copy-target] copies another element's text.
document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-link], [data-copy-target]");
  if (!button) return;
  const text = button.dataset.copyLink ?? document.getElementById(button.dataset.copyTarget)?.innerText;
  if (!text) return;
  const label = button.textContent;
  try {
    await navigator.clipboard.writeText(text.trim());
    button.textContent = "Copied";
  } catch {
    button.textContent = "Press and hold to copy";
  }
  setTimeout(() => (button.textContent = label), 1800);
});
