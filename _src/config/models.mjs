// The AI models in Hubnex AI, by family and by the cheapest plan that includes them.
// Plans are cumulative: Pro includes every Free model, Max includes every Free and Pro model.
// Update this list when the app's models change; the model strip and the pricing table use it.

export const PLANS = ["free", "pro", "max"];
export const PLAN_NAMES = { free: "Free", pro: "Pro", max: "Max" };

export const modelFamilies = [
  {
    name: "ChatGPT",
    maker: "OpenAI",
    logo: "chatgpt",
    models: [
      { name: "GPT-6 Luna", plan: "free" },
      { name: "GPT-6.1 Terra", plan: "pro" },
      { name: "GPT-6.1 Sol", plan: "max" },
    ],
  },
  {
    name: "Claude",
    maker: "Anthropic",
    logo: "claude",
    models: [
      { name: "Claude Haiku 5.5", plan: "free" },
      { name: "Claude Sonnet 5.5", plan: "pro" },
      { name: "Claude Opus 5.5", plan: "max" },
    ],
  },
  {
    name: "Gemini",
    maker: "Google",
    logo: "gemini",
    models: [
      { name: "Gemini 3.1 Flash-Lite", plan: "free" },
      { name: "Gemini 3.8 Flash", plan: "pro" },
      { name: "Gemini 3.1 Pro", plan: "max" },
    ],
  },
  {
    name: "DeepSeek",
    maker: "DeepSeek",
    logo: "deepseek",
    models: [
      { name: "DeepSeek Flash", plan: "free" },
      { name: "DeepSeek V4 Pro", plan: "pro" },
    ],
  },
  {
    name: "Grok",
    maker: "xAI",
    logo: "grok",
    models: [
      { name: "Grok 4.3", plan: "free" },
      { name: "Grok 4.7", plan: "max" },
    ],
  },
  {
    name: "Qwen",
    maker: "Alibaba",
    logo: "qwen",
    models: [
      { name: "Qwen 3.8 Flash", plan: "free" },
      { name: "Qwen 3.7 Plus", plan: "pro" },
      { name: "Qwen 3.7 Max", plan: "max" },
    ],
  },
  {
    name: "Perplexity",
    maker: "Perplexity",
    logo: "perplexity",
    models: [
      { name: "Perplexity Sonar (Fast Search)", plan: "free" },
      { name: "Perplexity Sonar (Deep Web Search)", plan: "pro" },
    ],
  },
];
