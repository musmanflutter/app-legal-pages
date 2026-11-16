// Small text helpers shared by components.

export const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const stripTags = (s) => s.replace(/<[^>]+>/g, "");
