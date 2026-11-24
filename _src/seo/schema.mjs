// Structured data (JSON-LD) that helps Google understand each page.
import { site, socials } from "../config/site.mjs";
import { stripTags } from "../utils/html.mjs";

function organization() {
  return {
    "@type": "Organization",
    "@id": `${site.origin}/#organization`,
    name: site.developer,
    url: `${site.origin}/`,
    logo: `${site.origin}/assets/tab_icon.png`,
    email: site.email,
    sameAs: [site.playStoreUrl, ...socials.filter((s) => s.url).map((s) => s.url)],
  };
}

function mobileApplication() {
  return {
    "@type": "MobileApplication",
    "@id": `${site.origin}/#app`,
    name: site.name,
    operatingSystem: "Android 7.0 or later",
    applicationCategory: "ProductivityApplication",
    description:
      "All-in-one AI chat assistant that brings ChatGPT, Claude, Gemini, DeepSeek, Grok, Qwen and Perplexity into one app, with web search, image generation, file uploads and Thinking Mode.",
    url: `${site.origin}/`,
    downloadUrl: site.playStoreUrl,
    installUrl: site.playStoreUrl,
    image: `${site.origin}/assets/tab_icon.png`,
    publisher: { "@id": `${site.origin}/#organization` },
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Pro", price: "10", priceCurrency: "USD" },
      { "@type": "Offer", name: "Max", price: "20", priceCurrency: "USD" },
    ],
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": `${site.origin}/#website`,
    name: site.name,
    url: `${site.origin}/`,
    publisher: { "@id": `${site.origin}/#organization` },
  };
}

function breadcrumbList(crumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(([name, url], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: site.origin + url,
    })),
  };
}

function faqPage(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: stripTags(a) },
    })),
  };
}

function article(page) {
  return {
    "@type": "BlogPosting",
    headline: page.h1 ?? page.title,
    description: page.description,
    datePublished: page.published,
    dateModified: page.updated,
    author: { "@id": `${site.origin}/#organization` },
    publisher: { "@id": `${site.origin}/#organization` },
    mainEntityOfPage: site.origin + page.url,
    image: site.origin + site.shareImage,
  };
}

export function structuredData(page) {
  const graph = page.url === "/" ? [organization(), mobileApplication(), website()] : [organization()];
  if (page.breadcrumb) graph.push(breadcrumbList([["Home", "/"], ...page.breadcrumb]));
  if (page.faqs?.length) graph.push(faqPage(page.faqs));
  if (page.type === "article") graph.push(article(page));
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
  return `<script type="application/ld+json">\n${json.replace(/</g, "\\u003c")}\n</script>`;
}
