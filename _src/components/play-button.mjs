// Google's official "Get it on Google Play" badge. Use in page bodies as {{play}}.
// Google's brand rules: use the badge image as it is (no recoloring or cropping)
// and keep its built-in clear space. Source: play.google.com/intl/en_us/badges
import { site } from "../config/site.mjs";

export function playButton({ height = 80 } = {}) {
  const width = Math.round((height * 646) / 250);
  return `<a class="play-badge" href="${site.downloadUrl}" target="_blank" rel="noopener">
  <img src="/assets/google-play-badge.png" alt="Get it on Google Play" width="${width}" height="${height}" />
</a>`;
}
