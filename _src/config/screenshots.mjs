// App screenshots used on the site. Use in page bodies as {{shot:id}}.
// "file" is under /assets/screenshots/. No file yet = a visible "Screenshot pending"
// placeholder on the page, and the build lists it so it isn't forgotten.
// Screenshots are 600px wide WebP, exported from the phone-framed PNGs.

export const screenshots = {
  "model-picker": {
    file: "model-picker.webp",
    alt: "Hubnex AI model picker with Auto-Detect, ChatGPT, Claude, DeepSeek, Grok, Gemini and Qwen",
  },
  "chat-answer": {
    file: "chat-answer.webp",
    alt: "Hubnex AI chat answering what quantum computing is, with Auto-Detect choosing ChatGPT",
  },
  "web-search": {
    file: "web-search.webp",
    alt: "Hubnex AI web search answer about the latest AI news with source links",
  },
  "image-generation": {
    file: "image-generation.webp",
    alt: "Hubnex AI generating a realistic portrait image from a text prompt",
  },
  "reply-to-message": {
    file: "reply-to-message.webp",
    alt: "Replying to a specific earlier message in a Hubnex AI chat with Claude",
  },
  "reasoning-mode": {
    file: "reasoning-mode.webp",
    alt: "Hubnex AI reasoning mode showing the thinking process before the answer",
  },
  "keep-memory": {
    file: "keep-memory.webp",
    alt: "Kept Memory panel in Hubnex AI with a pinned instruction",
  },
  "image-edit": {
    file: null,
    alt: "Editing a generated image by replying to it in Hubnex AI",
    pending: "Image edit: reply to a generated image with a change, showing the new version",
  },
  "pdf-chat": {
    file: null,
    alt: "Hubnex AI summarizing an uploaded PDF",
    pending: "PDF chat: a PDF attached to a message and its summary",
  },
  "homework-photo": {
    file: null,
    alt: "Hubnex AI explaining a homework question from a photo step by step",
    pending: "Homework photo: a picture of a question and the step-by-step answer",
  },
  "email-composer": {
    file: null,
    alt: "Hubnex AI email composer with editable subject, recipient and body",
    pending: "Email composer: the editable email template",
  },
  "two-models": {
    file: null,
    alt: "The same question answered by two different models in one Hubnex AI chat",
    pending: "Two models: the same question answered by two models in one chat",
  },
  plans: {
    file: null,
    alt: "Hubnex AI plans screen with Free, Pro and Max",
    pending: "Plans screen: Free, Pro and Max",
  },
};
