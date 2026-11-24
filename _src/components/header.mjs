// Site header: logo, centered main navigation (with dropdowns), download button and mobile menu.
// Dropdowns are <details> elements, so they open and close without JavaScript;
// _src/scripts/nav-dropdown.js only closes them on outside click or Escape.
import { site, nav } from "../config/site.mjs";

const downloadIcon = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 11l6 6 6-6M5 21h14"/></svg>`;
const chevron = `<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

function navItem(entry, page, cls) {
  const active = entry.key === page.nav ? ' class="is-active"' : "";
  if (!entry.items) {
    const current = entry.key === page.nav ? ' aria-current="page"' : "";
    return `<a href="${entry.href}"${current}>${entry.label}</a>`;
  }
  const links = entry.items
    .map(([label, href]) => `<a href="${href}"${href === page.url ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
  return `<details class="${cls}"><summary${active}>${entry.label}${chevron}</summary><div class="${cls}-panel">${links}</div></details>`;
}

export function header(page) {
  const desktop = nav.map((e) => navItem(e, page, "nav-drop")).join("\n          ");
  const mobile = nav.map((e) => navItem(e, page, "nav-group")).join("\n              ");
  return `<header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/">
          <img src="/assets/tab_icon.png" alt="" width="36" height="36" />
          <span>Hubnex AI</span>
        </a>
        <nav class="nav-links" aria-label="Main">
          ${desktop}
        </nav>
        <div class="header-actions">
          <a class="btn btn-primary btn-small" href="${site.downloadUrl}" target="_blank" rel="noopener">${downloadIcon}Get the app</a>
          <details class="nav-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile">
              ${mobile}
            </nav>
          </details>
        </div>
      </div>
    </header>`;
}
