const products = [
  {
    id: "enteral-hine-e-gel",
    name: "ハイネイーゲル",
    category: "経腸栄養",
    kcalPerMl: 1.0,
    proteinPerMl: 0.06,
    fatPerMl: 0.015,
    carbPerMl: 0.071,
    nitrogenPerMl: 0.0096,
    source: "PDF p.7",
    note: "400kcal/400mL"
  },
  {
    id: "enteral-standard-bag",
    name: "スタンダードバッグ",
    category: "経腸栄養",
    kcalPerMl: 1.5,
    proteinPerMl: 0.0525,
    fatPerMl: 0.03,
    carbPerMl: 0.1875,
    nitrogenPerMl: 0.0084,
    source: "PDF p.7",
    note: "300kcal/200mL"
  },
  {
    id: "enteral-peptamen-af",
    name: "ペプタメンAF",
    category: "経腸栄養",
    kcalPerMl: 1.5,
    proteinPerMl: 0.095,
    fatPerMl: 0.066,
    carbPerMl: 0.132,
    nitrogenPerMl: 0.0152,
    source: "PDF p.7",
    note: "300kcal/200mL"
  },
  {
    id: "enteral-peptamen-intense",
    name: "ペプタメン インテンス",
    category: "経腸栄養",
    kcalPerMl: 1.0,
    proteinPerMl: 0.092,
    fatPerMl: 0.037,
    carbPerMl: 0.075,
    nitrogenPerMl: 0.0147,
    source: "PDF p.6",
    note: "200kcal/200mL"
  },
  {
    id: "enteral-enevo",
    name: "エネーボ",
    category: "経腸栄養",
    kcalPerMl: 1.6,
    proteinPerMl: 0.064,
    fatPerMl: 0.0517,
    carbPerMl: 0.2283,
    nitrogenPerMl: 0.0102,
    source: "PDF p.8",
    note: "300kcal/187.5mL"
  },
  {
    id: "enteral-racol",
    name: "ラコールNF 1.0",
    category: "経腸栄養",
    kcalPerMl: 1.0,
    proteinPerMl: 0.04,
    fatPerMl: 0.03,
    carbPerMl: 0.15,
    nitrogenPerMl: 0.0064,
    source: "PDF p.9",
    note: "400kcal/400mL"
  },
  {
    id: "enteral-terumeal-mini",
    name: "テルミールミニ",
    category: "経腸栄養",
    kcalPerMl: 1.6,
    proteinPerMl: 0.0584,
    fatPerMl: 0.048,
    carbPerMl: 0.208,
    nitrogenPerMl: 0.0093,
    source: "PDF p.10",
    note: "200kcal/125mL"
  },
  {
    id: "enteral-isocal-100",
    name: "アイソカル100",
    category: "経腸栄養",
    kcalPerMl: 2.0,
    proteinPerMl: 0.08,
    fatPerMl: 0.08,
    carbPerMl: 0.255,
    nitrogenPerMl: 0.0128,
    source: "PDF p.10",
    note: "200kcal/100mL"
  },
  {
    id: "enteral-meibalance-mini",
    name: "メイバランス ぎゅっとMini",
    category: "経腸栄養",
    kcalPerMl: 1.6,
    proteinPerMl: 0.06,
    fatPerMl: 0.0448,
    carbPerMl: 0.2576,
    nitrogenPerMl: 0.0096,
    source: "PDF p.10",
    note: "200kcal/125mL"
  },
  {
    id: "enteral-renalen-lp",
    name: "リーナレンLP",
    category: "経腸栄養",
    kcalPerMl: 1.6,
    proteinPerMl: 0.016,
    fatPerMl: 0.0448,
    carbPerMl: 0.2944,
    nitrogenPerMl: 0.0026,
    source: "PDF p.11",
    note: "200kcal/125mL"
  },
  {
    id: "enteral-renalen-mp",
    name: "リーナレンMP",
    category: "経腸栄養",
    kcalPerMl: 1.6,
    proteinPerMl: 0.056,
    fatPerMl: 0.0448,
    carbPerMl: 0.2512,
    nitrogenPerMl: 0.009,
    source: "PDF p.11",
    note: "200kcal/125mL"
  },
  {
    id: "pn-glucose-5",
    name: "ブドウ糖液 5%",
    category: "静脈栄養",
    kcalPerMl: 0.2,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.05,
    nitrogenPerMl: 0,
    source: "PDF p.1",
    note: "20kcal/100mL"
  },
  {
    id: "pn-glucose-10",
    name: "ブドウ糖液 10%",
    category: "静脈栄養",
    kcalPerMl: 0.4,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.1,
    nitrogenPerMl: 0,
    source: "PDF p.1",
    note: "40kcal/100mL"
  },
  {
    id: "pn-glucose-20",
    name: "ブドウ糖液 20%",
    category: "静脈栄養",
    kcalPerMl: 0.8,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.2,
    nitrogenPerMl: 0,
    source: "PDF p.1",
    note: "80kcal/100mL"
  },
  {
    id: "pn-glucose-40",
    name: "ブドウ糖液 40%",
    category: "静脈栄養",
    kcalPerMl: 1.6,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.4,
    nitrogenPerMl: 0,
    source: "PDF p.1",
    note: "160kcal/100mL"
  },
  {
    id: "pn-glucose-50",
    name: "ブドウ糖液 50%",
    category: "静脈栄養",
    kcalPerMl: 2.0,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.5,
    nitrogenPerMl: 0,
    source: "PDF p.1",
    note: "200kcal/100mL"
  },
  {
    id: "pn-amiparen",
    name: "アミパレン輸液",
    category: "静脈栄養",
    kcalPerMl: 0.4,
    proteinPerMl: 0.0978,
    fatPerMl: 0,
    carbPerMl: 0,
    nitrogenPerMl: 0.01565,
    source: "PDF p.2",
    note: "窒素 15.65g/L、熱量 400kcal/L"
  },
  {
    id: "pn-aminoleban",
    name: "アミノレバン点滴静注",
    category: "静脈栄養",
    kcalPerMl: 0.3194,
    proteinPerMl: 0.0764,
    fatPerMl: 0,
    carbPerMl: 0,
    nitrogenPerMl: 0.01222,
    source: "PDF p.2",
    note: "窒素 12.22g/L、熱量 319.4kcal/L"
  },
  {
    id: "pn-kidomin",
    name: "キドミン輸液",
    category: "静脈栄養",
    kcalPerMl: 0.2882,
    proteinPerMl: 0.0625,
    fatPerMl: 0,
    carbPerMl: 0,
    nitrogenPerMl: 0.01,
    source: "PDF p.2",
    note: "窒素 10g/L、熱量 288.2kcal/L"
  },
  {
    id: "pn-intralipos-10",
    name: "イントラリポス輸液 10%",
    category: "静脈栄養",
    kcalPerMl: 1.1,
    proteinPerMl: 0,
    fatPerMl: 0.1,
    carbPerMl: 0,
    nitrogenPerMl: 0,
    source: "PDF p.2",
    note: "約275kcal/250mL"
  },
  {
    id: "pn-intralipos-20",
    name: "イントラリポス輸液 20%",
    category: "静脈栄養",
    kcalPerMl: 2.0,
    proteinPerMl: 0,
    fatPerMl: 0.2,
    carbPerMl: 0,
    nitrogenPerMl: 0,
    source: "PDF p.2",
    note: "約500kcal/250mL"
  }
];

const initialRows = [
  { productId: "enteral-racol", dailyMl: 400, rateMlPerHour: "", hoursPerDay: "" },
  { productId: "pn-glucose-20", dailyMl: 250, rateMlPerHour: "", hoursPerDay: "" },
  { productId: "pn-amiparen", dailyMl: 200, rateMlPerHour: "", hoursPerDay: "" },
  { productId: "pn-intralipos-20", dailyMl: "", rateMlPerHour: "", hoursPerDay: "" },
  { productId: "enteral-meibalance-mini", dailyMl: "", rateMlPerHour: "", hoursPerDay: "" }
];

function cloneRows(value) {
  return JSON.parse(JSON.stringify(value));
}

let rows = cloneRows(initialRows);

const elements = {
  lineItems: document.querySelector("#lineItems"),
  mobileItems: document.querySelector("#mobileItems"),
  summaryCards: document.querySelector("#summaryCards"),
  resultGrid: document.querySelector("#resultGrid"),
  masterList: document.querySelector("#masterList"),
  resetButton: document.querySelector("#resetButton"),
  installButton: document.querySelector("#installButton"),
  installHint: document.querySelector("#installHint")
};

let deferredInstallPrompt = null;

function formatNumber(value, digits = 1) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return new Intl.NumberFormat("ja-JP", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  }).format(value);
}

function getProduct(productId) {
  return products.find((product) => product.id === productId) ?? products[0];
}

function getCalculatedVolume(row) {
  const dailyMl = Number(row.dailyMl) || 0;
  const rateMlPerHour = Number(row.rateMlPerHour) || 0;
  const hoursPerDay = Number(row.hoursPerDay) || 0;

  if (dailyMl > 0) {
    return dailyMl;
  }

  if (rateMlPerHour > 0 && hoursPerDay > 0) {
    return rateMlPerHour * hoursPerDay;
  }

  return 0;
}

function calculateRow(row) {
  const product = getProduct(row.productId);
  const volumeMl = getCalculatedVolume(row);
  const kcal = volumeMl * product.kcalPerMl;
  const protein = volumeMl * product.proteinPerMl;
  const fat = volumeMl * product.fatPerMl;
  const carb = volumeMl * product.carbPerMl;
  const nitrogen = volumeMl * (product.nitrogenPerMl ?? product.proteinPerMl / 6.25);
  const npc = kcal - protein * 4;

  return {
    product,
    volumeMl,
    kcal,
    protein,
    fat,
    carb,
    nitrogen,
    npc
  };
}

function getTotals() {
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

function createProductOptions(selectedId) {
  const groups = [...new Set(products.map((product) => product.category))];

  return groups
    .map((group) => {
      const options = products
        .filter((product) => product.category === group)
        .map((product) => {
          const selected = product.id === selectedId ? "selected" : "";
          return `<option value="${product.id}" ${selected}>${product.name}</option>`;
        })
        .join("");

      return `<optgroup label="${group}">${options}</optgroup>`;
    })
    .join("");
}

function renderRows() {
  elements.lineItems.innerHTML = rows
    .map((row, index) => {
      const result = calculateRow(row);
      return `
        <tr data-row="${index}">
          <td>
            <select data-index="${index}" data-field="productId">
              ${createProductOptions(row.productId)}
            </select>
            <small data-cell="productMeta">${result.product.note}<br>${result.product.source}</small>
          </td>
          <td><span class="pill" data-cell="category">${result.product.category}</span></td>
          <td><input type="number" min="0" step="1" value="${row.dailyMl}" data-index="${index}" data-field="dailyMl"></td>
          <td><input type="number" min="0" step="0.1" value="${row.rateMlPerHour}" data-index="${index}" data-field="rateMlPerHour"></td>
          <td><input type="number" min="0" step="0.1" value="${row.hoursPerDay}" data-index="${index}" data-field="hoursPerDay"></td>
          <td><span class="calc-volume" data-cell="volume">${formatNumber(result.volumeMl, 1)} mL</span></td>
          <td data-cell="kcal">${formatNumber(result.kcal, 1)}</td>
          <td data-cell="protein">${formatNumber(result.protein, 2)}</td>
          <td data-cell="fat">${formatNumber(result.fat, 2)}</td>
          <td data-cell="carb">${formatNumber(result.carb, 2)}</td>
          <td data-cell="nitrogen">${formatNumber(result.nitrogen, 2)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderMobileRows() {
  elements.mobileItems.innerHTML = rows
    .map((row, index) => {
      const result = calculateRow(row);
      return `
        <article class="mobile-card" data-mobile-row="${index}">
          <div class="mobile-card-header">
            <div class="mobile-card-title">
              <h3>${index + 1}枠目</h3>
              <p class="mobile-card-meta" data-mobile-cell="productMeta">${result.product.note} ・ ${result.product.source}</p>
            </div>
            <span class="pill" data-mobile-cell="category">${result.product.category}</span>
          </div>
          <div class="mobile-form-grid">
            <div class="mobile-field mobile-field-full">
              <label>製品</label>
              <select data-index="${index}" data-field="productId">
                ${createProductOptions(row.productId)}
              </select>
            </div>
            <div class="mobile-field">
              <label>mL/日</label>
              <input type="number" min="0" step="1" inputmode="decimal" value="${row.dailyMl}" data-index="${index}" data-field="dailyMl">
            </div>
            <div class="mobile-field">
              <label>mL/h</label>
              <input type="number" min="0" step="0.1" inputmode="decimal" value="${row.rateMlPerHour}" data-index="${index}" data-field="rateMlPerHour">
            </div>
            <div class="mobile-field">
              <label>時間/日</label>
              <input type="number" min="0" step="0.1" inputmode="decimal" value="${row.hoursPerDay}" data-index="${index}" data-field="hoursPerDay">
            </div>
            <div class="mobile-field">
              <label>計算量</label>
              <div class="mobile-result"><span>volume</span><strong data-mobile-cell="volume">${formatNumber(result.volumeMl, 1)} mL</strong></div>
            </div>
          </div>
          <div class="mobile-results">
            <div class="mobile-result"><span>kcal</span><strong data-mobile-cell="kcal">${formatNumber(result.kcal, 1)}</strong></div>
            <div class="mobile-result"><span>蛋白 g</span><strong data-mobile-cell="protein">${formatNumber(result.protein, 2)}</strong></div>
            <div class="mobile-result"><span>脂質 g</span><strong data-mobile-cell="fat">${formatNumber(result.fat, 2)}</strong></div>
            <div class="mobile-result"><span>糖質 g</span><strong data-mobile-cell="carb">${formatNumber(result.carb, 2)}</strong></div>
            <div class="mobile-result"><span>N g</span><strong data-mobile-cell="nitrogen">${formatNumber(result.nitrogen, 2)}</strong></div>
          </div>
        </article>
      `;
    })
    .join("");
}

function refreshRow(index) {
  const rowElement = elements.lineItems.querySelector(`[data-row="${index}"]`);
  const result = calculateRow(rows[index]);
  const updates = {
    productMeta: {
      desktop: `${result.product.note}<br>${result.product.source}`,
      mobile: `${result.product.note} ・ ${result.product.source}`
    },
    category: { desktop: result.product.category, mobile: result.product.category },
    volume: { desktop: `${formatNumber(result.volumeMl, 1)} mL`, mobile: `${formatNumber(result.volumeMl, 1)} mL` },
    kcal: { desktop: formatNumber(result.kcal, 1), mobile: formatNumber(result.kcal, 1) },
    protein: { desktop: formatNumber(result.protein, 2), mobile: formatNumber(result.protein, 2) },
    fat: { desktop: formatNumber(result.fat, 2), mobile: formatNumber(result.fat, 2) },
    carb: { desktop: formatNumber(result.carb, 2), mobile: formatNumber(result.carb, 2) },
    nitrogen: { desktop: formatNumber(result.nitrogen, 2), mobile: formatNumber(result.nitrogen, 2) }
  };

  if (rowElement) {
    Object.entries(updates).forEach(([name, value]) => {
      const element = rowElement.querySelector(`[data-cell="${name}"]`);
      if (element) {
        element.innerHTML = value.desktop;
      }
    });
  }

  const mobileRowElement = elements.mobileItems.querySelector(`[data-mobile-row="${index}"]`);
  if (mobileRowElement) {
    Object.entries(updates).forEach(([name, value]) => {
      const element = mobileRowElement.querySelector(`[data-mobile-cell="${name}"]`);
      if (element) {
        element.innerHTML = value.mobile;
      }
    });
  }
}

function renderSummary() {
  const totals = getTotals();
  const npcPerN = totals.nitrogen > 0 ? totals.npc / totals.nitrogen : 0;
  const cards = [
    { label: "総投与量", value: `${formatNumber(totals.volumeMl, 0)} mL` },
    { label: "総カロリー", value: `${formatNumber(totals.kcal, 1)} kcal` },
    { label: "総タンパク量", value: `${formatNumber(totals.protein, 2)} g` },
    { label: "総脂質", value: `${formatNumber(totals.fat, 2)} g` },
    { label: "総糖質", value: `${formatNumber(totals.carb, 2)} g` },
    { label: "NPC/N", value: formatNumber(npcPerN, 1) }
  ];

  elements.summaryCards.innerHTML = cards
    .map(
      (card) => `
        <article class="summary-card">
          <h3>${card.label}</h3>
          <strong>${card.value}</strong>
        </article>
      `
    )
    .join("");

  const results = [
    { label: "非タンパクカロリー", value: `${formatNumber(totals.npc, 1)} kcal` },
    { label: "窒素量", value: `${formatNumber(totals.nitrogen, 2)} g` },
    { label: "蛋白由来カロリー", value: `${formatNumber(totals.protein * 4, 1)} kcal` },
    { label: "参考式", value: "NPC = 総kcal - 蛋白g×4" }
  ];

  elements.resultGrid.innerHTML = results
    .map(
      (result) => `
        <article class="result-item">
          <h3>${result.label}</h3>
          <strong>${result.value}</strong>
        </article>
      `
    )
    .join("");
}

function renderMasterList() {
  elements.masterList.innerHTML = products
    .map(
      (product) => `
        <article class="master-item">
          <h3>${product.name}</h3>
          <p>
            ${product.category}<br>
            ${formatNumber(product.kcalPerMl, 3)} kcal/mL /
            蛋白 ${formatNumber(product.proteinPerMl, 4)} g/mL /
            脂質 ${formatNumber(product.fatPerMl, 4)} g/mL /
            糖質 ${formatNumber(product.carbPerMl, 4)} g/mL<br>
            ${product.note} ・ ${product.source}
          </p>
        </article>
      `
    )
    .join("");
}

function render() {
  renderRows();
  renderMobileRows();
  renderSummary();
  renderMasterList();
}

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
    elements.installButton.hidden = false;
    elements.installHint.textContent = "Android: ボタンからインストールできます";
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    elements.installButton.hidden = true;
    elements.installHint.textContent = "ホーム画面に追加済みです";
  });

  elements.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice.catch(() => null);
    deferredInstallPrompt = null;
    elements.installButton.hidden = true;
  });

  if (window.matchMedia("(display-mode: standalone)").matches) {
    elements.installButton.hidden = true;
    elements.installHint.textContent = "ホーム画面から起動中です";
  }
}

elements.resetButton.addEventListener("click", () => {
  rows = cloneRows(initialRows);
  render();
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return;
  }

  const index = Number(target.dataset.index);
  const field = target.dataset.field;

  if (!Number.isInteger(index) || !field || !rows[index]) {
    return;
  }

  rows[index][field] = target.value;
  renderSummary();

  if (field === "productId") {
    renderRows();
    renderMobileRows();
    return;
  }

  refreshRow(index);
});

render();
registerServiceWorker();
setupPwaInstall();
