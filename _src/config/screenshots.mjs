// App screenshots used on the site. Use in page bodies as {{shot:id}}.
// "file" is under /assets/screenshots/. No file yet = a visible "Screenshot pending"
// placeholder on the page, and the build lists it so it isn't forgotten.
// Screenshots are from app version 2.1.0. Long screenshots are cropped to one screen;
// "two-models" and "photo-transform" combine two screenshots. Frames are made by a script
// (phone frame, 600x1291 WebP).

export const screenshots = {
  "model-picker": {
    file: "model-picker.webp",
    alt: "Hubnex AI model picker with Auto-Detect and the seven AI families",
    pending: "Model picker: Auto-Detect and the seven AI families (2.1.0 design)",
  },
  "start-screen": {
    file: "start-screen.webp",
    alt: "Hubnex AI start screen with quick actions: create an image, search the web, think it through, ask about a file",
    pending: "Start screen: greeting and the four quick actions",
  },
  "chat-answer": {
    file: "chat-answer.webp",
    alt: "Hubnex AI explaining compound interest with a simple example",
    pending: "Chat answer: a question and a good answer, model name visible",
  },
  "web-search": {
    file: "web-search.webp",
    alt: "Hubnex AI web search answer with source links",
    pending: "Web search: an answer with source links",
  },
  "image-generation": {
    file: "image-generation.webp",
    alt: "Hubnex AI creating an image with GPT Image 2 from a text prompt",
    pending: "Image generation: a prompt and the image made with GPT Image 2",
  },
  "image-studio": {
    file: "image-studio.webp",
    alt: "Hubnex AI Image Studio with templates like Pro Headshot, Action Figure and Anime Portrait",
    pending: "Image Studio: the Templates tab",
  },
  "photo-transform": {
    file: "photo-transform.webp",
    alt: "A photo turned into a boxed action figure with the Action Figure template in Hubnex AI Image Studio",
    pending: "Photo transform: a photo turned into a Pro Headshot or Action Figure",
  },
  "image-edit": {
    file: "image-edit.webp",
    alt: "Editing a generated image by replying to it in Hubnex AI",
    pending: "Image edit: reply to a generated image with a change, showing the new version",
  },
  "thinking-mode": {
    file: "thinking-mode.webp",
    alt: "Hubnex AI Thinking Mode solving the bat and ball puzzle with its step-by-step thinking",
    pending: "Thinking Mode: \"Thought for Xs\" with the thinking steps opened",
  },
  "keep-memory": {
    file: "keep-memory.webp",
    alt: "Kept Memory panel in Hubnex AI with a pinned instruction",
    pending: "Keep: the Kept Memory panel with a pinned message",
  },
  "reply-to-message": {
    file: "reply-to-message.webp",
    alt: "Replying to a specific earlier message in a Hubnex AI chat",
    pending: "Reply: answering a specific earlier message",
  },
  "pdf-chat": {
    file: "pdf-chat.webp",
    alt: "Hubnex AI summarizing an uploaded PDF",
    pending: "PDF chat: a PDF attached to a message and its summary",
  },
  "homework-photo": {
    file: "homework-photo.webp",
    alt: "Hubnex AI explaining a homework question from a photo step by step",
    pending: "Homework photo: a picture of a question and the step-by-step answer",
  },
  "email-composer": {
    file: "email-composer.webp",
    alt: "Hubnex AI writing a polite email with a subject line and a copy button",
    pending: "Email composer: the editable email template",
  },
  "two-models": {
    file: "two-models.webp",
    alt: "Gemini 3.8 Flash and Claude Sonnet 5.5 answering the same question in Hubnex AI",
    pending: "Two models: the same question answered by two models in one chat",
  },
  "grok-x-search": {
    file: "grok-x-search.webp",
    alt: "Grok in Hubnex AI summarizing what people on X say about the newest Google Pixel phone",
    pending: "Grok live X search: an answer with X sources",
  },
  "chat-list": {
    file: "chat-list.webp",
    alt: "Hubnex AI chat list with a pinned chat and renamed chats",
    pending: "Chat list: a pinned chat and renamed chats",
  },
  usage: {
    file: "usage.webp",
    alt: "Hubnex AI usage page showing today's allowance and reset time",
    pending: "Usage page: today's allowance left and when it resets",
  },
  plans: {
    file: "plans.webp",
    alt: "Hubnex AI plans screen with Free, Pro and Max",
    pending: "Plans screen: Free, Pro and Max",
  },
};
