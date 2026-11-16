// Puts a page together from the shared components.
import { site } from "./config/site.mjs";
import { head } from "./components/head.mjs";
import { header } from "./components/header.mjs";
import { breadcrumb } from "./components/breadcrumb.mjs";
import { faqSection } from "./components/faq.mjs";
import { ctaBand } from "./components/cta-band.mjs";
import { footer } from "./components/footer.mjs";
import { playButton } from "./components/play-button.mjs";
import { icon } from "./components/icon.mjs";
import { screenshot } from "./components/screenshot.mjs";
import { modelStrip } from "./components/model-strip.mjs";
import { modelTable } from "./components/model-table.mjs";
import { priceCalculator } from "./components/price-calculator.mjs";
import { articleHeader, blogList } from "./components/blog.mjs";
import { mobileCta } from "./components/mobile-cta.mjs";

// Fills the placeholders a page body may use (listed in _src/README.md).
function expand(body, { posts }) {
  return body
    .replace(/\{\{play\}\}/g, () => playButton())
    .replace(/\{\{downloadUrl\}\}/g, site.downloadUrl)
    .replace(/\{\{icon:([a-z]+)\}\}/g, (_, name) => icon(name))
    .replace(/\{\{shot:([a-z-]+)(:eager)?\}\}/g, (_, id, eager) => screenshot(id, { eager: !!eager }))
    .replace(/\{\{models\}\}/g, () => modelStrip())
    .replace(/\{\{modelTable\}\}/g, () => modelTable())
    .replace(/\{\{calculator\}\}/g, () => priceCalculator())
    .replace(/\{\{blogList\}\}/g, () => blogList(posts));
}

export function renderPage(page, context) {
  const isArticle = page.type === "article";
  const isAppPage = page.cta === false; // legal pages opened from inside the app
  return `<!doctype html>
<html lang="en">
  ${head(page)}
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    ${header(page)}
    <main id="main">
      ${page.breadcrumb ? breadcrumb(page.breadcrumb) : ""}
      ${isArticle ? articleHeader(page) : ""}
      ${expand(page.body, context)}
      ${page.faqs?.length ? faqSection(page.faqs, { heading: page.faqHeading, tabs: page.faqTabs }) : ""}
      ${isAppPage ? "" : ctaBand(page.cta)}
    </main>
    ${footer()}
    ${isAppPage ? "" : mobileCta()}
  </body>
</html>
`;
}
