// FAQ accordion, rendered from a page's "faqs" front matter.
// If questions have a "group" and the page sets "faqTabs": true, the groups get tabs.
// Without JavaScript every question stays visible.

function item({ q, a }) {
  return `<details class="faq-item">
          <summary>${q}</summary>
          <p>${a}</p>
        </details>`;
}

function grouped(faqs) {
  const groups = [...new Set(faqs.map((f) => f.group))];
  const tabs = groups
    .map(
      (g, i) =>
        `<button type="button" role="tab" aria-selected="${i === 0}" data-faq-tab="${g}">${g}</button>`,
    )
    .join("");
  const panels = groups
    .map(
      (g) => `<div class="faq-list" role="tabpanel" data-faq-group="${g}" aria-label="${g}">
        ${faqs.filter((f) => f.group === g).map(item).join("\n        ")}
      </div>`,
    )
    .join("\n      ");
  return `<div class="faq-tabs" role="tablist" aria-label="Question topics" hidden>${tabs}</div>
      ${panels}`;
}

export function faqSection(faqs, { heading = "Frequently asked questions", tabs = false } = {}) {
  const body =
    tabs && faqs.every((f) => f.group)
      ? grouped(faqs)
      : `<div class="faq-list">
        ${faqs.map(item).join("\n        ")}
      </div>`;
  return `<section class="section container container-narrow" id="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">${heading}</h2>
      <div data-faq>
      ${body}
      </div>
    </section>`;
}
