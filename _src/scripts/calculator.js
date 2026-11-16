// "What you pay today" calculator: adds up the ticked apps and the saving.
document.querySelectorAll("[data-calculator]").forEach((calc) => {
  const hubnex = Number(calc.dataset.hubnex);
  const total = calc.querySelector("[data-total]");
  const save = calc.querySelector("[data-save]");
  const money = (n) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

  const update = () => {
    const sum = [...calc.querySelectorAll("input[data-price]:checked")].reduce(
      (s, input) => s + Number(input.dataset.price),
      0,
    );
    const rounded = Math.round(sum * 100) / 100;
    total.textContent = money(rounded);
    save.textContent = money(Math.max(0, Math.round((rounded - hubnex) * 100) / 100));
  };

  calc.addEventListener("change", update);
  update();
});
