// "What you pay today" calculator. Use as {{calculator}}.
// Prices are each app's standard paid plan in the US, checked November 2026.
// Update PRICES_CHECKED and the numbers when they change.

const PRICES_CHECKED = "November 2026";

const APPS = [
  { name: "ChatGPT Plus", price: 20, checked: true },
  { name: "Claude Pro", price: 20, checked: true },
  { name: "Google AI Pro (Gemini)", price: 19.99, checked: true },
  { name: "SuperGrok", price: 30, checked: false },
  { name: "Perplexity Pro", price: 20, checked: false },
];

const HUBNEX_MAX = 20;

const money = (n) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

export function priceCalculator() {
  const rows = APPS.map(
    (a) => `<li>
          <label>
            <input type="checkbox" data-price="${a.price}"${a.checked ? " checked" : ""} />
            <span>${a.name}</span>
            <span class="calc-price">${money(a.price)}/mo</span>
          </label>
        </li>`,
  ).join("");
  const startTotal = APPS.filter((a) => a.checked).reduce((s, a) => s + a.price, 0);
  return `<div class="calc" data-calculator data-hubnex="${HUBNEX_MAX}">
    <div class="card calc-today">
      <span class="eyebrow">What you pay today</span>
      <h3>Which AI apps do you pay for?</h3>
      <ul class="calc-list">${rows}
      </ul>
      <p class="calc-total">Total <strong data-total>${money(startTotal)}</strong><small> / month</small></p>
    </div>
    <div class="card card-highlight calc-hubnex">
      <span class="eyebrow">With Hubnex AI</span>
      <h3>Max plan, all seven AI families</h3>
      <p class="price">${money(HUBNEX_MAX)}<small> / month</small></p>
      <p class="calc-save">You save <strong data-save>${money(startTotal - HUBNEX_MAX)}</strong> a month</p>
      <ul class="tick-list">
        <li>Flagship models from ChatGPT, Claude and Gemini</li>
        <li>Plus DeepSeek, Grok, Qwen and Perplexity</li>
        <li>One login, one bill</li>
      </ul>
      <a href="/limits.html">See plans and daily limits</a>
    </div>
  </div>
  <p class="note">Other apps' prices: standard US monthly plans as of ${PRICES_CHECKED}. Each app's limits differ, and Hubnex AI plans have a daily limit. Check each provider for current prices.</p>`;
}
