// Scrolling strip of the AI model families, each with its logo and models. Use as {{models}}.
import { modelFamilies } from "../config/models.mjs";

function cards(hidden) {
  const items = modelFamilies
    .map(
      (f) => `<li>
        <span class="logo-dot"><img src="/assets/models/${f.logo}.svg" alt="" width="20" height="20" /></span>
        <span class="family"><strong>${f.name}</strong><small>${f.models.map((m) => m.name).join(" · ")}</small></span>
      </li>`,
    )
    .join("");
  return `<ul class="marquee-track"${hidden ? ' aria-hidden="true"' : ""}>${items}</ul>`;
}

export function modelStrip() {
  return `<section class="model-strip" aria-labelledby="models-heading">
    <div class="container">
      <h2 id="models-heading">Top AI model families in one place</h2>
    </div>
    <div class="marquee">
      ${cards(false)}
      ${cards(true)}
    </div>
  </section>`;
}
