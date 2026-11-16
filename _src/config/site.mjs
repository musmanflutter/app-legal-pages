// Site-wide settings shared by every page.

export const site = {
  name: "Hubnex AI",
  origin: "https://www.hubnexai.com",
  developer: "BisonTech Studio",
  email: "support@hubnexai.com",

  // Tracked link used by every "Get it on Google Play" button.
  downloadUrl: "https://get.hubnexai.com/website",
  // Canonical store listing, used in structured data.
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.hubnexai.app",

  // GA4 Measurement ID of the "Hubnex AI Website" stream in the "hubnex-ai" property
  // (Admin → Data streams → Hubnex AI Website). Empty = no tracking script.
  gaMeasurementId: "G-MNJGT72RNT",
  googleSiteVerification: "sP17MAwv-gsEXH-8gEg8Fd1sJLe9FFYaPk5ei3I96aE",

  // Shown when a link is shared on social media (1200×630).
  shareImage: "/assets/share-image.png",
};

// Official social media accounts. Empty url = a visible "link pending" chip in the
// footer. Filled urls also go into the Organization schema (sameAs) for Google.
export const socials = [
  { name: "Instagram", url: "https://www.instagram.com/hubnexai/" },
  { name: "TikTok", url: "https://www.tiktok.com/@hubnexai" },
  { name: "YouTube", url: "https://www.youtube.com/@hubnexai" },
  { name: "Facebook", url: "https://www.facebook.com/hubnexai" },
];

export const nav = [
  { key: "features", label: "Features", href: "/#features" },
  { key: "image", label: "Image generator", href: "/ai-image-generator/" },
  { key: "students", label: "For students", href: "/ai-for-students/" },
  { key: "compare", label: "Compare", href: "/hubnex-ai-vs-chatgpt/" },
  { key: "pricing", label: "Pricing", href: "/limits.html" },
  { key: "blog", label: "Blog", href: "/blog/" },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      ["All-in-one AI app", "/"],
      ["Free AI assistant app", "/free-ai-assistant-app/"],
      ["ChatGPT alternative", "/chatgpt-alternative/"],
      ["Free AI prompt library", "/prompts/"],
      ["Pricing & limits", "/limits.html"],
    ],
  },
  {
    title: "Features",
    links: [
      ["AI image generator", "/ai-image-generator/"],
      ["Chat with PDF", "/chat-with-pdf/"],
      ["AI with web search", "/ai-web-search/"],
      ["AI writing assistant", "/ai-writing-assistant/"],
    ],
  },
  {
    title: "Use cases",
    links: [
      ["AI for students", "/ai-for-students/"],
      ["AI homework helper", "/ai-homework-helper/"],
    ],
  },
  {
    title: "Compare",
    links: [
      ["Hubnex AI vs ChatGPT", "/hubnex-ai-vs-chatgpt/"],
      ["Hubnex AI vs Claude", "/hubnex-ai-vs-claude/"],
      ["Hubnex AI vs Perplexity", "/hubnex-ai-vs-perplexity/"],
      ["Hubnex AI vs Poe", "/hubnex-ai-vs-poe/"],
      ["Blog", "/blog/"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about/"],
      ["Privacy policy", "/privacy.html"],
      ["Terms of use", "/terms.html"],
      ["Delete account", "/delete-account.html"],
    ],
  },
];
