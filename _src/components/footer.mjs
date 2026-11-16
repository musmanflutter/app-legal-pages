// Site footer with a link to every page and the social media accounts.
import { site, footerColumns, socials } from "../config/site.mjs";
import { socialIcon } from "./social-icons.mjs";

function socialLinks() {
  const items = socials
    .map((s) =>
      s.url
        ? `<li><a class="social-btn" href="${s.url}" target="_blank" rel="noopener me" aria-label="Hubnex AI on ${s.name}" title="${s.name}">${socialIcon(s.name)}</a></li>`
        : `<li><span class="pending-chip" title="Add the link in _src/config/site.mjs">${s.name} link pending</span></li>`,
    )
    .join("");
  return `<ul class="social-list" aria-label="Hubnex AI on social media">${items}</ul>`;
}

export function footer() {
  const cols = footerColumns
    .map(
      (c) => `<div class="footer-col">
          <h2>${c.title}</h2>
          <ul>${c.links.map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
        </div>`,
    )
    .join("\n        ");
  return `<footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a class="brand" href="/"><img src="/assets/tab_icon.png" alt="" width="32" height="32" loading="lazy" /><span>Hubnex AI</span></a>
          <p>The all-in-one AI chat assistant for Android, made by ${site.developer}.</p>
          <p><a href="mailto:${site.email}">${site.email}</a></p>
          ${socialLinks()}
        </div>
        ${cols}
      </div>
      <div class="container footer-bottom">
        <span>© 2026 ${site.developer} · Pakistan</span>
        <span>ChatGPT, Claude, Gemini, DeepSeek, Grok, Qwen and Perplexity are trademarks of their respective owners. Logos are shown only to identify each provider.</span>
      </div>
    </footer>`;
}
