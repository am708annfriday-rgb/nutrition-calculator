const EMPTY_PRODUCT_ID = "";

const products = [
  {
    id: "enteral-peptamen-af",
    name: "ペプタメンAF",
    group: "EN",
    packageMl: 200,
    kcalPerMl: 1.5,
    proteinPerMl: 0.095,
    fatPerMl: 0.066,
    carbPerMl: 0.132,
    nitrogenPerMl: 0.0152,
    note: "PDF掲載: 300kcal/200mL"
  },
  {
    id: "enteral-racol",
    name: "ラコールNF 配合経腸用液",
    group: "EN",
    packageMl: 400,
    kcalPerMl: 1.0,
    proteinPerMl: 0.04,
    fatPerMl: 0.03,
    carbPerMl: 0.15,
    nitrogenPerMl: 0.0064,
    note: "PDF掲載: 400kcal/400mL"
  },
  {
    id: "enteral-enevo",
    name: "エネーボ配合経腸用液",
    group: "EN",
    packageMl: 187.5,
    kcalPerMl: 1.6,
    proteinPerMl: 0.064,
    fatPerMl: 0.0517,
    carbPerMl: 0.2283,
    nitrogenPerMl: 0.0102,
    note: "PDF掲載: 300kcal/187.5mL"
  },
  {
    id: "enteral-renalen-mp",
    name: "明治リーナレンMP",
    group: "EN",
    packageMl: 125,
    kcalPerMl: 1.6,
    proteinPerMl: 0.056,
    fatPerMl: 0.0448,
    carbPerMl: 0.2512,
    nitrogenPerMl: 0.009,
    note: "PDF掲載: 200kcal/125mL"
  },
  {
    id: "enteral-hine-e-gel",
    name: "ハイネイーゲル",
    group: "EN",
    packageMl: 400,
    kcalPerMl: 1.0,
    proteinPerMl: 0.06,
    fatPerMl: 0.015,
    carbPerMl: 0.071,
    nitrogenPerMl: 0.0096,
    note: "PDF掲載: 400kcal/400mL"
  },
  {
    id: "enteral-meibalance-mini",
    name: "明治メイバランスHP1.0Zパック",
    group: "EN",
    packageMl: 125,
    kcalPerMl: 1.6,
    proteinPerMl: 0.06,
    fatPerMl: 0.0448,
    carbPerMl: 0.2576,
    nitrogenPerMl: 0.0096,
    note: "PDF掲載: 200kcal/125mL"
  },
  {
    id: "pn-elneopa-1",
    name: "エルネオパNF 1号輸液",
    group: "PN",
    packageMl: 1000,
    kcalPerMl: 0.56,
    proteinPerMl: 0.02,
    fatPerMl: 0,
    carbPerMl: 0.12,
    nitrogenPerMl: 0.00313,
    note: "PDF掲載: 560kcal/1000mL"
  },
  {
    id: "pn-elneopa-2",
    name: "エルネオパNF 2号輸液",
    group: "PN",
    packageMl: 1000,
    kcalPerMl: 0.82,
    proteinPerMl: 0.03,
    fatPerMl: 0,
    carbPerMl: 0.175,
    nitrogenPerMl: 0.0047,
    note: "PDF掲載: 820kcal/1000mL"
  },
  {
    id: "pn-fulkalic-1",
    name: "フルカリック1号輸液",
    group: "PN",
    packageMl: 903,
    kcalPerMl: 560 / 903,
    proteinPerMl: 20 / 903,
    fatPerMl: 0,
    carbPerMl: 120 / 903,
    nitrogenPerMl: 3.12 / 903,
    note: "PDF掲載: 560kcal/903mL"
  },
  {
    id: "pn-fulkalic-2",
    name: "フルカリック2号輸液",
    group: "PN",
    packageMl: 1003,
    kcalPerMl: 840 / 1003,
    proteinPerMl: 30 / 1003,
    fatPerMl: 0,
    carbPerMl: 180 / 1003,
    nitrogenPerMl: 4.68 / 1003,
    note: "PDF掲載: 840kcal/1003mL"
  },
  {
    id: "pn-fulkalic-3",
    name: "フルカリック3号輸液",
    group: "PN",
    packageMl: 1103,
    kcalPerMl: 1160 / 1103,
    proteinPerMl: 40 / 1103,
    fatPerMl: 0,
    carbPerMl: 250 / 1103,
    nitrogenPerMl: 6.23 / 1103,
    note: "PDF掲載: 1160kcal/1103mL"
  },
  {
    id: "pn-intralipos-20-100",
    name: "イントラリポス輸液20%",
    group: "PN",
    packageMl: 100,
    kcalPerMl: 2.0,
    proteinPerMl: 0,
    fatPerMl: 0.2,
    carbPerMl: 0,
    nitrogenPerMl: 0,
    note: "20% 100mL規格"
  },
  {
    id: "pn-beefreed-500",
    name: "ビーフリード輸液",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 210 / 500,
    proteinPerMl: 15 / 500,
    fatPerMl: 0,
    carbPerMl: 37.5 / 500,
    nitrogenPerMl: 2.35 / 500,
    note: "添付文書: 500mL中 総遊離アミノ酸15g・総熱量210kcal"
  },
  {
    id: "pn-glucose-50",
    name: "ブドウ糖50%",
    group: "PN",
    packageMl: 20,
    kcalPerMl: 2.0,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.5,
    nitrogenPerMl: 0,
    note: "PDF掲載: 200kcal/100mL"
  },
  {
    id: "pn-glucose-70",
    name: "ブドウ糖70%",
    group: "PN",
    packageMl: 350,
    kcalPerMl: 980 / 350,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 245 / 350,
    nitrogenPerMl: 0,
    note: "添付文書: 350mL中 精製ブドウ糖245g・980kcal"
  }
];

const defaultRow = {
  productId: EMPTY_PRODUCT_ID,
  amount: "",
  unit: "ml_h",
  hours: "24"
};

const state = {
  enRows: Array.from({ length: 4 }, () => ({ ...defaultRow })),
  pnRows: Array.from({ length: 4 }, () => ({ ...defaultRow })),
  weight: "",
  advancedMode: "none",
  urineVolume: "",
  urineUN: ""
};

state.enRows[0] = { productId: "enteral-peptamen-af", amount: "20", unit: "ml_h", hours: "24" };
state.pnRows[0] = { productId: "pn-elneopa-2", amount: "20", unit: "ml_h", hours: "24" };

const elements = {
  enSlots: document.querySelector("#enSlots"),
  pnSlots: document.querySelector("#pnSlots"),
  enSummary: document.querySelector("#enSummary"),
  pnSummary: document.querySelector("#pnSummary"),
  totalSummary: document.querySelector("#totalSummary"),
  perKgSummary: document.querySelector("#perKgSummary"),
  advancedPanel: document.querySelector("#advancedPanel"),
  bodyWeight: document.querySelector("#bodyWeight"),
  advancedMode: document.querySelector("#advancedMode")
};

let deferredInstallPrompt = null;

function findProduct(productId) {
  if (!productId) {
    return null;
  }

  return products.find((product) => product.id === productId) ?? null;
}

function formatNumber(value, digits = 1) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("ja-JP", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(value);
}

function getUnitLabel(unit) {
  if (unit === "ml_h") return "mL/h";
  if (unit === "ml_day") return "mL/日";
  return "回/日";
}

function createOptions(group, selectedId) {
  const emptySelected = selectedId === EMPTY_PRODUCT_ID ? "selected" : "";
  const groupProducts = products.filter((product) => product.group === group);

  return [
    `<option value="${EMPTY_PRODUCT_ID}" ${emptySelected}>未選択</option>`,
    ...groupProducts.map((product) => {
      const selected = product.id === selectedId ? "selected" : "";
      return `<option value="${product.id}" ${selected}>${product.name}</option>`;
    })
  ].join("");
}

function getDailyVolume(row, product) {
  if (!product) {
    return 0;
  }

  const amount = Number(row.amount) || 0;
  const hours = Number(row.hours) || 0;

  if (row.unit === "ml_day") {
    return amount;
  }

  if (row.unit === "ml_h") {
    return amount * hours;
  }

  return amount * (product.packageMl || 0);
}

function calculateRow(row) {
  const product = findProduct(row.productId);
  if (!product) {
    return { product: null, volumeMl: 0, kcal: 0, protein: 0, fat: 0, carb: 0, nitrogen: 0, npc: 0 };
  }

  const volumeMl = getDailyVolume(row, product);
  const kcal = volumeMl * product.kcalPerMl;
  const protein = volumeMl * product.proteinPerMl;
  const fat = volumeMl * product.fatPerMl;
  const carb = volumeMl * product.carbPerMl;
  const nitrogen = volumeMl * product.nitrogenPerMl;
  const npc = kcal - protein * 4;

  return { product, volumeMl, kcal, protein, fat, carb, nitrogen, npc };
}

function sumRows(rows) {
  return rows.reduce(
    (accumulator, row) => {
      const result = calculateRow(row);
      accumulator.volumeMl += result.volumeMl;
      accumulator.kcal += result.kcal;
      accumulator.protein += result.protein;
      accumulator.fat += result.fat;
      accumulator.carb += result.carb;
      accumulator.nitrogen += result.nitrogen;
      accumulator.npc += result.npc;
      return accumulator;
    },
    { volumeMl: 0, kcal: 0, protein: 0, fat: 0, carb: 0, nitrogen: 0, npc: 0 }
  );
}

function renderSlots(group) {
  const container = group === "EN" ? elements.enSlots : elements.pnSlots;
  const rows = group === "EN" ? state.enRows : state.pnRows;

  container.innerHTML = rows
    .map((row, index) => {
      const result = calculateRow(row);
      const product = result.product;
      const meta = product ? product.note : "未選択の枠です";
      return `
        <article class="slot-card" data-group="${group}" data-index="${index}">
          <div class="slot-header">
            <span class="slot-index">${index + 1}枠目</span>
            <span class="slot-badge" data-cell="badge">${product ? getUnitLabel(row.unit) : "未選択"}</span>
          </div>
          <select class="slot-select" data-group="${group}" data-index="${index}" data-field="productId">
            ${createOptions(group, row.productId)}
          </select>
          <p class="slot-meta" data-cell="meta">${meta}</p>
          <div class="dose-row">
            <input
              class="dose-input"
              type="number"
              min="0"
              step="0.1"
              inputmode="decimal"
              placeholder="値を入力"
              value="${row.amount}"
              data-group="${group}"
              data-index="${index}"
              data-field="amount"
            />
            <select class="dose-unit" data-group="${group}" data-index="${index}" data-field="unit">
              <option value="ml_h" ${row.unit === "ml_h" ? "selected" : ""}>mL/h</option>
              <option value="ml_day" ${row.unit === "ml_day" ? "selected" : ""}>mL/日</option>
              <option value="times_day" ${row.unit === "times_day" ? "selected" : ""}>回/日</option>
            </select>
          </div>
          <div class="extra-row ${row.unit === "ml_h" ? "" : "hidden"}" data-hours-row>
            <input
              class="hours-input"
              type="number"
              min="0"
              step="0.1"
              inputmode="decimal"
              placeholder="投与時間 / 日"
              value="${row.hours}"
              data-group="${group}"
              data-index="${index}"
              data-field="hours"
            />
          </div>
          <div class="slot-foot">
            <div class="mini-metric"><span>容量</span><strong data-cell="volume">${formatNumber(result.volumeMl, 0)} mL</strong></div>
            <div class="mini-metric"><span>kcal</span><strong data-cell="kcal">${formatNumber(result.kcal, 1)}</strong></div>
            <div class="mini-metric"><span>タンパク質</span><strong data-cell="protein">${formatNumber(result.protein, 1)} g</strong></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function createSummaryTable(title, totals, unitSuffix = "") {
  return `
    <table class="summary-table">
      <thead>
        <tr>
          <th>成分</th>
          <th colspan="2">${title}</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="label">容量</td><td class="value">${formatNumber(totals.volumeMl, 0)}</td><td class="unit">mL${unitSuffix}</td></tr>
        <tr><td class="label">エネルギー</td><td class="value">${formatNumber(totals.kcal, 1)}</td><td class="unit">kcal${unitSuffix}</td></tr>
        <tr><td class="label">タンパク質</td><td class="value">${formatNumber(totals.protein, 1)}</td><td class="unit">g${unitSuffix}</td></tr>
        <tr><td class="label">脂質</td><td class="value">${formatNumber(totals.fat, 1)}</td><td class="unit">g${unitSuffix}</td></tr>
        <tr><td class="label">炭水化物</td><td class="value">${formatNumber(totals.carb, 1)}</td><td class="unit">g${unitSuffix}</td></tr>
      </tbody>
    </table>
  `;
}

function renderSummaries() {
  const enTotals = sumRows(state.enRows);
  const pnTotals = sumRows(state.pnRows);
  const totalTotals = {
    volumeMl: enTotals.volumeMl + pnTotals.volumeMl,
    kcal: enTotals.kcal + pnTotals.kcal,
    protein: enTotals.protein + pnTotals.protein,
    fat: enTotals.fat + pnTotals.fat,
    carb: enTotals.carb + pnTotals.carb,
    nitrogen: enTotals.nitrogen + pnTotals.nitrogen,
    npc: enTotals.npc + pnTotals.npc
  };
  const weight = Number(state.weight) || 0;

  elements.enSummary.innerHTML = createSummaryTable("経腸栄養剤 (EN) 合計値", enTotals);
  elements.pnSummary.innerHTML = createSummaryTable("静脈栄養剤 (PN) 合計値", pnTotals);
  elements.totalSummary.innerHTML = createSummaryTable("製剤合計値", totalTotals);

  if (weight > 0) {
    elements.perKgSummary.innerHTML = createSummaryTable("体重あたり合計値", {
      volumeMl: totalTotals.volumeMl / weight,
      kcal: totalTotals.kcal / weight,
      protein: totalTotals.protein / weight,
      fat: totalTotals.fat / weight,
      carb: totalTotals.carb / weight
    }, "/kg");
  } else {
    elements.perKgSummary.innerHTML = `<div class="advanced-card"><div class="advanced-formula">体重を入力すると /kg 計算を表示します。</div></div>`;
  }

  renderAdvanced(totalTotals, weight);
}

function renderAdvanced(totals, weight) {
  if (state.advancedMode === "none") {
    elements.advancedPanel.innerHTML = "";
    return;
  }

  if (state.advancedMode === "npcn") {
    const npcn = totals.nitrogen > 0 ? totals.npc / totals.nitrogen : 0;
    elements.advancedPanel.innerHTML = `
      <div class="advanced-panel-inner">
        <div class="advanced-card">
          <h3>NPC/N</h3>
          <div class="advanced-formula">非タンパクカロリー = 総エネルギー - タンパク質(g) × 4</div>
          <div class="advanced-grid">
            <div class="advanced-value"><span>非タンパクカロリー</span><strong>${formatNumber(totals.npc, 1)} kcal</strong></div>
            <div class="advanced-value"><span>窒素量</span><strong>${formatNumber(totals.nitrogen, 2)} g</strong></div>
            <div class="advanced-value"><span>NPC/N</span><strong>${formatNumber(npcn, 1)}</strong></div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const urineVolume = Number(state.urineVolume) || 0;
  const urineUN = Number(state.urineUN) || 0;
  const nitrogenIn = totals.nitrogen;
  const nitrogenOut = urineVolume * urineUN / 100000 + weight * 0.031;
  const balance = nitrogenIn - nitrogenOut;

  elements.advancedPanel.innerHTML = `
    <div class="advanced-panel-inner">
      <div class="advanced-card">
        <h3>窒素バランス計算</h3>
        <div class="advanced-formula">
          窒素イン = 総タンパク質 / 6.25<br />
          窒素アウト = 尿量(mL) × 尿中UN濃度(mg/dL) / 100000 + 体重 × 0.031
        </div>
        <div class="advanced-grid">
          <label class="field-label" for="urineVolume">尿量 (mL/日)</label>
          <input class="advanced-input" id="urineVolume" type="number" min="0" step="1" inputmode="decimal" value="${state.urineVolume}" />
          <label class="field-label" for="urineUN">尿中UN濃度 (mg/dL)</label>
          <input class="advanced-input" id="urineUN" type="number" min="0" step="0.1" inputmode="decimal" value="${state.urineUN}" />
          <div class="advanced-value"><span>窒素イン</span><strong>${formatNumber(nitrogenIn, 2)} g</strong></div>
          <div class="advanced-value"><span>窒素アウト</span><strong>${formatNumber(nitrogenOut, 3)} g</strong></div>
          <div class="advanced-value"><span>窒素バランス</span><strong>${formatNumber(balance, 3)} g</strong></div>
        </div>
      </div>
    </div>
  `;
}

function render() {
  renderSlots("EN");
  renderSlots("PN");
  renderSummaries();
}

function refreshSlotCard(group, index) {
  const container = group === "EN" ? elements.enSlots : elements.pnSlots;
  const row = getRowsByGroup(group)[index];
  const card = container.querySelector(`.slot-card[data-group="${group}"][data-index="${index}"]`);
  if (!card || !row) {
    return;
  }

  const result = calculateRow(row);
  const product = result.product;
  const meta = product ? product.note : "未選択の枠です";

  const badge = card.querySelector('[data-cell="badge"]');
  const metaNode = card.querySelector('[data-cell="meta"]');
  const volume = card.querySelector('[data-cell="volume"]');
  const kcal = card.querySelector('[data-cell="kcal"]');
  const protein = card.querySelector('[data-cell="protein"]');
  const hoursRow = card.querySelector("[data-hours-row]");

  if (badge) badge.textContent = product ? getUnitLabel(row.unit) : "未選択";
  if (metaNode) metaNode.textContent = meta;
  if (volume) volume.textContent = `${formatNumber(result.volumeMl, 0)} mL`;
  if (kcal) kcal.textContent = formatNumber(result.kcal, 1);
  if (protein) protein.textContent = `${formatNumber(result.protein, 1)} g`;
  if (hoursRow) hoursRow.classList.toggle("hidden", row.unit !== "ml_h");
}

function getRowsByGroup(group) {
  return group === "EN" ? state.enRows : state.pnRows;
}

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return;
  }

  if (target.id === "bodyWeight") {
    state.weight = target.value;
    renderSummaries();
    return;
  }

  if (target.id === "advancedMode") {
    state.advancedMode = target.value;
    renderSummaries();
    return;
  }

  if (target.id === "urineVolume") {
    state.urineVolume = target.value;
    renderSummaries();
    return;
  }

  if (target.id === "urineUN") {
    state.urineUN = target.value;
    renderSummaries();
    return;
  }

  const group = target.dataset.group;
  const index = Number(target.dataset.index);
  const field = target.dataset.field;
  const rows = getRowsByGroup(group);

  if (!rows || !Number.isInteger(index) || !field || !rows[index]) {
    return;
  }

  rows[index][field] = target.value;

  if (field === "productId" || field === "unit") {
    render();
    return;
  }

  renderSummaries();
  refreshSlotCard(group, index);
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return;
  }

  const group = target.dataset.group;
  const index = Number(target.dataset.index);
  const field = target.dataset.field;
  const rows = getRowsByGroup(group);

  if (!rows || !Number.isInteger(index) || !field || !rows[index]) {
    return;
  }

  rows[index][field] = target.value;
  render();
});

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

function setupPwaInstall() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
  });
}

elements.bodyWeight.value = state.weight;
elements.advancedMode.value = state.advancedMode;

render();
registerServiceWorker();
setupPwaInstall();
