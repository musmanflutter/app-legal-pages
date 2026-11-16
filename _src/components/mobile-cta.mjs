// Download bar fixed to the bottom of the screen on phones.
import { playButton } from "./play-button.mjs";

export function mobileCta() {
  return `<div class="mobile-cta">
      <span><strong>Hubnex AI</strong><small>Free on Android</small></span>
      ${playButton({ height: 58 })}
    </div>`;
}
