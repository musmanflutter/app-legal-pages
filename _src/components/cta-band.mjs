// Download banner at the end of a page. A page can change its text with "cta".
import { playButton } from "./play-button.mjs";

const DEFAULT_CTA = {
  title: "Stop switching between AI apps",
  text: "Download Hubnex AI free and start a conversation. Choose your model, or let Auto choose for you.",
};

export function ctaBand(cta = DEFAULT_CTA) {
  return `<section class="container section">
      <div class="cta-band">
        <img src="/assets/tab_icon.png" alt="Hubnex AI app icon" width="72" height="72" loading="lazy" />
        <h2>${cta.title}</h2>
        <p>${cta.text}</p>
        ${playButton()}
      </div>
    </section>`;
}
