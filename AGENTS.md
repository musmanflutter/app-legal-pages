# Hubnex AI website: rules for anyone editing this repo (people and AI agents)

Marketing and legal site for the Hubnex AI Android app, served by GitHub Pages at https://www.hubnexai.com.

## 1. Never edit the generated files

These files in the repo root are **generated** and get overwritten on every build:

- `index.html`, `privacy.html`, `terms.html`, `delete-account.html`, `limits.html`
- every `*/index.html` page folder (`about/`, `blog/`, `ai-for-students/`, …)
- `style.css`, `site.js` and `sitemap.xml`

Edit the source in `_src/` instead, then rebuild:

```bash
node _src/build.mjs
```

Node.js only, no packages to install. The build must finish with **0 warnings**; it checks title length (30–60 chars), description length (120–160), exactly one `<h1>`, image `alt` text and broken internal links. How pages work and how to add one: `_src/README.md`.

Files that are NOT generated and can be edited directly: `theme.js`, `robots.txt`, `CNAME`, `assets/`.

## 2. Git

Do not stage, unstage, commit, push or merge. The owner stages changes to review them, commits after review and pushes when verified. Leave the working tree and index as you found them; read-only git commands are fine.

## 3. Don't break existing URLs

`/privacy.html`, `/terms.html`, `/delete-account.html` and `/limits.html` are linked from the Android app and the Google Play listing. Keep these URLs. The app opens them with `?theme=light` or `?theme=dark`, which `theme.js` handles.

## 4. Content rules

- Facts about the app come from the Google Play listing and `_src/pages/limits.html`. Don't invent features, numbers, ratings or reviews; leave a gap and ask.
- Always write "Hubnex AI", never "Hubnex" alone (that name belongs to another company).
- Developer name: BisonTech Studio. Platform: Android only.
- The app has seven AI model families: ChatGPT, Claude, Gemini, DeepSeek, Grok, Qwen and Perplexity. The model names and which plan includes each are in `_src/config/models.mjs`; update that file (and any text that names models) when the app changes.
- Keyword research, with which keyword belongs on which page: `_src/docs/hubnex-keyword-research.md`.
- Every new page needs a unique title and description, one H1 containing its main keyword, 500+ words for landing pages, and links to and from related pages (add it to the footer in `_src/config/site.mjs`).

## 5. Things still pending (owner to supply)

- **Screenshots:** the build prints which ones are missing; they show as "Screenshot pending" on the site. Add them in `_src/config/screenshots.mjs`.
- **Google Analytics ID:** `gaId` in `_src/config/site.mjs`. When it's added, also update section 8 ("Website") of the privacy policy to describe website analytics.
- **Other apps' prices** in the price calculator (`_src/components/price-calculator.mjs`) and on the comparison pages were checked November 2026. Re-check them now and then.

## 6. Publishing

GitHub Pages publishes the repo root from the default branch. A push is the release; there is no other deploy step. Folders starting with `_` (like `_src/`) and the files listed in `_config.yml` are not published.
