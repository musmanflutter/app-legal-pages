# Website source

The HTML pages, `style.css`, `site.js` and `sitemap.xml` in the site root are **generated**. Edit the files in `_src/`, then rebuild:

```bash
node _src/build.mjs
```

The build needs only Node.js (no packages). It writes every page to the site root, joins `styles/` into one `style.css` and `scripts/` into one `site.js`, regenerates `sitemap.xml`, and prints a warning if a page breaks an SEO rule: a title outside 30–60 characters, a description outside 120–160, not exactly one `<h1>`, an image without `alt`, a broken internal link, or a blog post without `category`/`published`. It also lists the screenshots that are still pending. Commit the generated files together with the source.

GitHub Pages ignores this folder because its name starts with `_`.

## Folders

```
_src/
├── build.mjs               build script: pages + styles + scripts + sitemap, with SEO checks
├── layout.mjs              puts a page together from the components
├── config/
│   ├── site.mjs            site settings: links, Google Analytics ID, nav, footer, social accounts
│   ├── models.mjs          the AI models by family and plan (used by the model strip and pricing table)
│   └── screenshots.mjs     app screenshots and the placeholders for missing ones
├── components/             shared pieces: head, header, breadcrumb, faq, cta-band, footer,
│                           play-button, icon, screenshot, model-strip, price-calculator,
│                           blog (cover, post header, share buttons, post list), mobile-cta
├── seo/schema.mjs          structured data (JSON-LD) for Google
├── utils/html.mjs          small text helpers
├── styles/                 CSS split by area; tokens.css holds colors and fonts
├── scripts/                small optional JavaScript: copy buttons, FAQ tabs, price calculator
├── pages/                  one file per page (blog posts in pages/blog/)
└── docs/                   notes such as the keyword research (not published)
```

To change colors or fonts, edit `styles/tokens.css`. A new style or script file must also be added to `STYLE_FILES` or `SCRIPT_FILES` in `build.mjs`. The site must work without JavaScript; scripts only improve it.

## Adding a page

Create `pages/<name>.html`. It starts with JSON front matter between two `---` lines, followed by the page body:

```html
---
{
  "url": "/my-page/",
  "updated": "2026-11-17",
  "nav": "",
  "title": "Page title, 30 to 60 characters",
  "description": "Meta description, 120 to 160 characters.",
  "breadcrumb": [["My page", "/my-page/"]],
  "faqs": [{ "q": "Question?", "a": "Answer." }]
}
---
<section class="container page-hero">
  <h1>Main keyword as the heading</h1>
  ...
</section>
```

Front matter fields:

| Field | Required | Meaning |
|---|---|---|
| `url` | yes | Public path. `/x/` builds `x/index.html`; `/x.html` builds `x.html` |
| `updated` | yes | Last change date, used in `sitemap.xml` |
| `title`, `description` | yes | `<title>` and meta description |
| `nav` | no | Key of the header link to highlight (see `config/site.mjs`) |
| `breadcrumb` | no | Breadcrumb trail after "Home"; also adds BreadcrumbList schema |
| `faqs` | no | FAQ section at the end of the page, plus FAQPage schema. Each item can have a `group` |
| `faqTabs` | no | `true` shows the FAQ `group`s as tabs |
| `faqHeading` | no | Custom heading for the FAQ section |
| `cta` | no | `false` hides the download banner and mobile bar (used on pages opened from the app); or `{ "title", "text" }` to change the banner |

## Adding a blog post

A blog post is one file in `pages/blog/`. It appears on the blog page automatically, newest first, with its cover, date and read time. Add these fields:

| Field | Meaning |
|---|---|
| `"type": "article"` | Makes it a blog post (post header, share buttons, BlogPosting schema) |
| `category` | `Comparison`, `Guide` or `Safety` (each has its own cover color in `styles/blog.css`) |
| `published` | First publish date, `YYYY-MM-DD` |
| `h1` | The heading shown on the page (the `title` is for Google) |

The post header (title, date, read time, share buttons, cover) is added for you; the body starts with the content.

## Placeholders in a page body

| Placeholder | Becomes |
|---|---|
| `{{play}}` | Google's official "Get it on Google Play" badge (use it unchanged) |
| `{{downloadUrl}}` | The tracked download link |
| `{{icon:name}}` | An icon from `components/icon.mjs` |
| `{{shot:id}}` | A screenshot from `config/screenshots.mjs`; add `:eager` for one near the top of the page |
| `{{models}}` | The scrolling strip of model families, logos and model names |
| `{{modelTable}}` | Table of every model and which plans include it |
| `{{calculator}}` | The "what you pay today" price calculator |
| `{{blogList}}` | All blog posts, newest first |

## Adding a screenshot

Export it from the phone-framed PNG as a 600px-wide WebP into `/assets/screenshots/`, then set its `file` in `config/screenshots.mjs`. Until then the page shows a "Screenshot pending" placeholder.

Then add new pages to the footer or header links in `config/site.mjs`, and link to them from related pages.
