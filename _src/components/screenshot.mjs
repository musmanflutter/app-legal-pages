// A phone screenshot, or a clearly visible placeholder while it's missing.
import { screenshots } from "../config/screenshots.mjs";

export function screenshot(id, { eager = false } = {}) {
  const shot = screenshots[id];
  if (!shot) throw new Error(`Unknown screenshot "${id}" (add it to config/screenshots.mjs)`);
  if (!shot.file) {
    return `<figure class="shot shot-pending" role="img" aria-label="Screenshot coming soon">
      <span class="shot-pending-badge">Screenshot pending</span>
      <span class="shot-pending-text">${shot.pending}</span>
    </figure>`;
  }
  const loading = eager ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<figure class="shot">
      <img src="/assets/screenshots/${shot.file}" alt="${shot.alt}" width="600" height="1291" ${loading} decoding="async" />
    </figure>`;
}

export const pendingScreenshots = () =>
  Object.entries(screenshots)
    .filter(([, s]) => !s.file)
    .map(([id]) => id);
