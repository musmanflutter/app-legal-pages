// Inline stroke icons. Use in page bodies as {{icon:name}}.

const ICONS = {
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z",
  image: "M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M15 9h.01",
  brain: "M9 3a4 4 0 0 0-4 4v1a3 3 0 0 0 0 6v1a4 4 0 0 0 7 2.6V3.4A4 4 0 0 0 9 3zM15 3a4 4 0 0 1 4 4v1a3 3 0 0 1 0 6v1a4 4 0 0 1-7 2.6",
  pin: "M9 4h6l-1 6 4 3H6l4-3zM12 13v8",
  reply: "M9 14 4 9l5-5M4 9h11a5 5 0 0 1 5 5v6",
  file: "M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6",
  mic: "M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3",
  pen: "M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4",
  auto: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  camera: "M4 8h3l2-3h6l2 3h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h7",
  check: "M5 12l5 5L20 7",
  chat: "M4 5h16v11H9l-5 4z",
  layers: "M12 3 3 8l9 5 9-5zM3 13l9 5 9-5",
};

export function icon(name, size = 22) {
  const d = ICONS[name];
  if (!d) throw new Error(`Unknown icon "${name}"`);
  return `<svg class="i-${name}" aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
}
