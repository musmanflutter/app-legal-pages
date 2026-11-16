// <head>: title, meta description, canonical, social tags, styles and schema.
import { site } from "../config/site.mjs";
import { structuredData } from "../seo/schema.mjs";
import { escapeHtml } from "../utils/html.mjs";

function analytics() {
  if (!site.gaId) return "";
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${site.gaId}"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${site.gaId}");</script>`;
}

export function head(page) {
  const canonical = site.origin + page.url;
  const ogType = page.type === "article" ? "article" : "website";
  const verification =
    page.url === "/"
      ? `<meta name="google-site-verification" content="${site.googleSiteVerification}" />`
      : "";
  return `<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${canonical}" />
    ${page.noindex ? '<meta name="robots" content="noindex" />' : ""}
    ${verification}
    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${site.origin}${site.shareImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Hubnex AI: every top AI model in one app" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#050814" />
    <link rel="icon" type="image/png" href="/assets/tab_icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Urbanist:wght@400;500;600;700&display=swap" />
    <link rel="stylesheet" href="/style.css" />
    <script src="/theme.js"></script>
    <script src="/site.js" defer></script>
    ${analytics()}
    ${structuredData(page)}
  </head>`;
}
