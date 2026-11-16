// Breadcrumb trail shown at the top of inner pages.

export function breadcrumb(crumbs) {
  const items = [["Home", "/"], ...crumbs];
  const parts = items.map(([name, url], i) =>
    i === items.length - 1
      ? `<li aria-current="page">${name}</li>`
      : `<li><a href="${url}">${name}</a></li>`,
  );
  return `<nav class="breadcrumb container" aria-label="Breadcrumb"><ol>${parts.join("")}</ol></nav>`;
}
