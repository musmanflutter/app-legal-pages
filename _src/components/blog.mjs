// Blog pieces: post cover, post header with share buttons, and the post list.
import { site } from "../config/site.mjs";
import { escapeHtml, stripTags } from "../utils/html.mjs";

const WORDS_PER_MINUTE = 220;

export function readTime(body) {
  const words = stripTags(body).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const categoryClass = (category) => `cover-${category.toLowerCase().replace(/[^a-z]+/g, "-")}`;

export function cover(post, size = "") {
  return `<div class="cover ${categoryClass(post.category)} ${size}" aria-hidden="true">
      <span class="cover-label">${post.category}</span>
      <span class="cover-brand"><img src="/assets/tab_icon.png" alt="" width="24" height="24" loading="lazy" />Hubnex AI</span>
    </div>`;
}

function shareLinks(post) {
  const url = encodeURIComponent(site.origin + post.url);
  const text = encodeURIComponent(post.h1 ?? post.title);
  return `<div class="share" aria-label="Share this post">
      <button type="button" class="share-btn" data-copy-link="${site.origin + post.url}">Copy link</button>
      <a class="share-btn" href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener">WhatsApp</a>
      <a class="share-btn" href="https://x.com/intent/post?text=${text}&amp;url=${url}" target="_blank" rel="noopener">X</a>
      <a class="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener">LinkedIn</a>
      <a class="share-btn" href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener">Facebook</a>
    </div>`;
}

// Header shown at the top of every blog post (pages with "type": "article").
export function articleHeader(post) {
  return `<header class="container article-header">
    <p class="post-meta"><span class="post-category">${post.category}</span> · ${formatDate(post.published)}</p>
    <h1>${post.h1 ?? post.title}</h1>
    <p class="lead">${escapeHtml(post.description)}</p>
    <p class="post-byline">${site.developer} · ${readTime(post.body)} min read</p>
    ${shareLinks(post)}
    ${cover(post, "cover-large")}
  </header>`;
}

function postCard(post) {
  return `<li>
      <a class="post-card" href="${post.url}">
        ${cover(post)}
        <span class="post-meta"><span class="post-category">${post.category}</span> · ${formatDate(post.published)} · ${readTime(post.body)} min read</span>
        <h3>${post.h1 ?? post.title}</h3>
        <p>${escapeHtml(post.description)}</p>
      </a>
    </li>`;
}

// All blog posts, newest first. Use as {{blogList}}.
export function blogList(posts) {
  const sorted = [...posts].sort((a, b) => b.published.localeCompare(a.published));
  return `<ul class="post-grid">${sorted.map(postCard).join("")}</ul>`;
}
