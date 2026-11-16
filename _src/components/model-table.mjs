// Table of every model and the plans that include it. Use as {{modelTable}}.
import { modelFamilies, PLANS, PLAN_NAMES } from "../config/models.mjs";

const included = (modelPlan, plan) => PLANS.indexOf(plan) >= PLANS.indexOf(modelPlan);

export function modelTable() {
  const head = PLANS.map((p) => `<th scope="col">${PLAN_NAMES[p]}</th>`).join("");
  const rows = modelFamilies
    .flatMap((f) =>
      f.models.map(
        (m, i) => `<tr>
          ${i === 0 ? `<th scope="rowgroup" rowspan="${f.models.length}" class="family-cell"><img src="/assets/models/${f.logo}.svg" alt="" width="18" height="18" />${f.name}</th>` : ""}
          <td>${m.name}</td>
          ${PLANS.map((p) => (included(m.plan, p) ? `<td class="yes">Yes</td>` : `<td class="no">–</td>`)).join("")}
        </tr>`,
      ),
    )
    .join("");
  return `<div class="table-wrap model-table">
    <table>
      <thead><tr><th scope="col">Family</th><th scope="col">Model</th>${head}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}
