// Site header: logo, centered main navigation, download button and mobile menu.
import { site, nav } from "../config/site.mjs";

const downloadIcon = `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 11l6 6 6-6M5 21h14"/></svg>`;

export function header(page) {
  const links = nav
    .map(
      (l) =>
        `<a href="${l.href}"${l.key === page.nav ? ' aria-current="page"' : ""}>${l.label}</a>`,
    )
    .join("\n          ");
  return `<header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/">
          <img src="/assets/tab_icon.png" alt="" width="36" height="36" />
          <span>Hubnex AI</span>
        </a>
        <nav class="nav-links" aria-label="Main">
          ${links}
        </nav>
        <div class="header-actions">
          <a class="btn btn-primary btn-small" href="${site.downloadUrl}" target="_blank" rel="noopener">${downloadIcon}Get the app</a>
          <details class="nav-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile">
              ${links}
            </nav>
          </details>
        </div>
      </div>
    </header>`;
}
