const EMPTY_DRUG_ID = "";

const DRUGS = [
  { id: "drug-3", name: "アルチバ / レミフェンタニル", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "2", defaultDilution: "20", recommendation: "麻酔導入維持の鎮痛　導入：0.5-1ガンマ　維持：0.25-max 2ガンマ\n\n人工呼吸器中の鎮静：負荷1.5μg/kg、維持0.008-0.25ガンマ" },
  { id: "drug-4", name: "イノバン / ドパミン", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "150", defaultDilution: "50", recommendation: "・急性心不全：開始0.5-5γ　維持0.5-20γ\n・心停止後の治療：5-20γ\n　低容量1-3γ：利尿作用（エビデンス的に微妙）\n　中等量3-10γ：β1心拍数､CO増加\n　高用量10γ以上：α1血圧上昇作用" },
  { id: "drug-5", name: "エスラックス", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "25", defaultDilution: "2.5", recommendation: "気管挿管時の筋弛緩：\n静注：導入0.6-0.9mg/kg 迅速導入時は1-1.2mg/kg\n持続：7ガンマ\nICU青本：気管挿管時0.6-1mg/kg静注" },
  { id: "drug-6", name: "オノアクト", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "150", defaultDilution: "50", recommendation: "開始 0.5-1γ　心拍数､血圧により調整し1-10γで適宜調整" },
  { id: "drug-7", name: "ケタミン / ケタラール", concentrationUnit: "mg/mL", doseUnit: "mg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "200", defaultDilution: "20", recommendation: "全身麻酔の導入・補助　初回：1-2mg/kg\n\n検査／処置時の鎮痛・鎮静：初回1mg/kg　必要に応じて0.5-1mg/kg追加\nICU青本：鎮静0.1-0.5mg/kg静注し、持続静注0.05-0.4mg/kg/hr" },
  { id: "drug-8", name: "シグマート", concentrationUnit: "mg/mL", doseUnit: "mg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "48", defaultDilution: "48", recommendation: "・急性心不全：0.05-0.2 mg/kg/hr\n・不安定狭心症：2-6mg/h" },
  { id: "drug-9", name: "シベレスタット", concentrationUnit: "mg/mL", doseUnit: "mg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "300", defaultDilution: "50", recommendation: "急性肺傷害 0.2mg/kg/hr" },
  { id: "drug-10", name: "ジルチアゼム", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "150", defaultDilution: "50", recommendation: "・上室性頻脈：10mgを3min iv\n\n・手術時の異常高血圧：1回10mg iv。or 持続 5-15γ。\n\n・不安定狭心症：1-5γ" },
  { id: "drug-11", name: "デクスメデトミジン", concentrationUnit: "μg/mL", doseUnit: "μg/kg/hr", amountUnit: "μg", dilutionUnit: "mL", defaultAmount: "200", defaultDilution: "50", recommendation: "・集中治療における人工呼吸中・離脱後の鎮静，局所麻酔下における非挿管での手術・処置時の鎮静:\n負荷:6μg/kg/hr　10分間｡\n維持：0.2-0.7μg/kg/hr。" },
  { id: "drug-12", name: "DOB", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "150", defaultDilution: "50", recommendation: "・急性心不全：開始0.5-5γ　維持0.5-20γ\n・心停止後の治療：5-20γ" },
  { id: "drug-13", name: "ニカルジピン", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "10", defaultDilution: "10", recommendation: "・高血圧緊急症：0.5-6γ\n・手術時の異常高血圧の応急処置：2～10γ．急速に降圧したい場合：10～30μg/kg iv\n・急性心不全：0.5-2γ" },
  { id: "drug-14", name: "ニトプロ / ニトロプルシドナトリウム", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "30", defaultDilution: "50", recommendation: "・手術時の低血圧維持：0.5-3γ\n・手術時の異常高血圧：0.5-3γ" },
  { id: "drug-15", name: "ニトロール", concentrationUnit: "mg/mL", doseUnit: "mg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "5", defaultDilution: "10", recommendation: "・急性心不全：1.5-8mg/hr　最大10mg/hrまで\n・不安定狭心症：2-5mg/hr\n*その他もあり" },
  { id: "drug-16", name: "ニトログリセリン", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "5", defaultDilution: "10", recommendation: "・急性心不全：初期0.05-0.1γ､維持 0.1-0.2γずつ調節\n・不安定狭心症：初期0.1-0.2γ､維持　1-2γ" },
  { id: "drug-17", name: "Nad 3mg/50mL", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "3", defaultDilution: "50", recommendation: "・心原性ショック:0.03-0.3γ\n・敗血症性ショック：0.05γ\n・心停止後の治療：0.1-0.5　*α刺メイン→昇圧最高。" },
  { id: "drug-18", name: "Nad 6mg/50mL", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "6", defaultDilution: "50", recommendation: "・心原性ショック:0.03-0.3γ\n・敗血症性ショック：0.05γ\n・心停止後の治療：0.1-0.5　*α刺メイン→昇圧最高。" },
  { id: "drug-19", name: "Nad 12mg/50mL", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "12", defaultDilution: "50", recommendation: "・心原性ショック:0.03-0.3γ\n・敗血症性ショック：0.05γ\n・心停止後の治療：0.1-0.5　*α刺メイン→昇圧最高。" },
  { id: "drug-20", name: "ハンプ / カルペリチド", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "1", defaultDilution: "50", recommendation: "・急性心不全 0.01-0.05γで開始　最大0.2γ" },
  { id: "drug-21", name: "ピトレシン", concentrationUnit: "U/mL", doseUnit: "U/min", amountUnit: "U", dilutionUnit: "mL", defaultAmount: "40", defaultDilution: "40", recommendation: "・敗血性ショック：\n初期：0.03U/min　維持：0.01-0.03U/min（体重によらない）　最大0.03U/minまで(Nad効果不応時）\n・下垂体性尿崩症：1回2-10Uを1日2-3回\nその他もあり" },
  { id: "drug-22", name: "フェンタニル 0.6mg/50mL", concentrationUnit: "μg/mL", doseUnit: "μg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "0.6", defaultDilution: "50", recommendation: "鎮痛 0.5-5μg/kg/hr" },
  { id: "drug-23", name: "フェンタニル 1mg/50mL", concentrationUnit: "μg/mL", doseUnit: "μg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "1", defaultDilution: "50", recommendation: "鎮痛 0.5-5μg/kg/hr" },
  { id: "drug-24", name: "フェンタニル 2mg/50mL", concentrationUnit: "μg/mL", doseUnit: "μg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "2", defaultDilution: "50", recommendation: "鎮痛 0.5-5μg/kg/hr" },
  { id: "drug-25", name: "プロポフォール 1%", concentrationUnit: "mg/mL", doseUnit: "mL/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "10", defaultDilution: "1", recommendation: "・集中治療における人工呼吸器の鎮静：\n導入0.3mg/kg/hr、維持0.3-3mg/kg/hr(0.03-0.3mL/kg/hr)適宜調整\n・全身麻酔の導入・維持：導入0.5mg/kg/10sec．状態観察し　維持 4～10mg/kghr" },
  { id: "drug-26", name: "ミダゾラム", concentrationUnit: "mg/mL", doseUnit: "mg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "20", defaultDilution: "20", recommendation: "・麻酔前投薬：0.08-0.1mg/kg　手術30-60分前\n・全身麻酔の導入､維持：0.15-3mg/kg\n・集中治療における人工呼吸器中の鎮静：\n導入 0.03mg/kg 5分以上経過で0.03mg/kg追加可。\n維持　0.03-0.06mg/kg/hr 適宜増減（推奨範囲0.03-0.18mg/kg/hr）\n・緩和ケアにおける鎮静：0.5-1mg/hr開始､追加は1-5mg/hrずつ。通常の維持量は1-20mg/hr" },
  { id: "drug-27", name: "ミルリノン", concentrationUnit: "mg/mL", doseUnit: "μg/kg/min", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "20", defaultDilution: "40", recommendation: "・急性心不全：開始0.05-0.25γ　維持0.05-0.75γ\n・心停止後の治療：50μg/kgを10分かけて　維持0.375γ" },
  { id: "drug-28", name: "モルヒネ", concentrationUnit: "mg/mL", doseUnit: "mg/kg/hr", amountUnit: "mg", dilutionUnit: "mL", defaultAmount: "", defaultDilution: "", recommendation: "" }
];

function initialCard() {
  return {
    cardId: crypto.randomUUID(),
    drugId: EMPTY_DRUG_ID,
    amount: "",
    dilution: "",
    mode: "rate",
    rateInput: "",
    doseInput: ""
  };
}

const state = {
  weight: "50",
  cards: [initialCard()]
};

const elements = {
  bodyWeight: document.querySelector("#bodyWeight"),
  drugCards: document.querySelector("#drugCards"),
  addDrugButton: document.querySelector("#addDrugButton")
};

function findDrug(drugId) {
  return DRUGS.find((drug) => drug.id === drugId) ?? null;
}

function normalizeNumericInput(value) {
  return String(value ?? "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/．/g, ".")
    .replace(/，/g, ",")
    .replace(/ー|−|―/g, "-")
    .replace(/＋/g, "+")
    .replace(/\s+/g, "")
    .replace(/,/g, "");
}

function parseNumber(value) {
  const normalized = normalizeNumericInput(value);
  if (!normalized) {
    return null;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "エラー";
  }

  return new Intl.NumberFormat("ja-JP", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function formatInputNumber(value) {
  return Number.isFinite(value) ? value.toFixed(2) : "";
}

function normalizeDoseUnit(unit) {
  return (unit || "").replaceAll("ｍ", "m");
}

function doseNeedsWeight(doseUnit) {
  return normalizeDoseUnit(doseUnit).includes("/kg/");
}

function convertUnitRatio(sourceUnit, targetUnit) {
  if (sourceUnit === targetUnit) {
    return 1;
  }
  if (sourceUnit === "mg" && targetUnit === "μg") {
    return 1000;
  }
  if (sourceUnit === "μg" && targetUnit === "mg") {
    return 0.001;
  }
  return null;
}

function convertConcentration(value, concentrationUnit, targetNumerator) {
  if (!Number.isFinite(value)) {
    return null;
  }

  const numerator = concentrationUnit.split("/")[0];
  const ratio = convertUnitRatio(numerator, targetNumerator);
  return ratio === null ? (numerator === targetNumerator ? value : null) : value * ratio;
}

function concentrationFromInputs(amount, amountUnit, dilution, concentrationUnit) {
  const amountValue = parseNumber(amount);
  const dilutionValue = parseNumber(dilution);

  if (amountValue === null || dilutionValue === null) {
    return { value: null, error: "成分量と希釈総量を入力してください。" };
  }
  if (amountValue <= 0 || dilutionValue <= 0) {
    return { value: null, error: "成分量と希釈総量は0より大きい値を入力してください。" };
  }

  const targetUnit = concentrationUnit.split("/")[0];
  const ratio = convertUnitRatio(amountUnit, targetUnit);
  if (ratio === null) {
    return { value: null, error: "濃度単位の換算に対応していません。" };
  }

  return { value: amountValue * ratio / dilutionValue, error: "" };
}

function computeDoseFromRate({ rate, concentration, concentrationUnit, weight, doseUnit }) {
  const normalizedUnit = normalizeDoseUnit(doseUnit);

  if (normalizedUnit === "μg/kg/min") {
    const ugPerMl = convertConcentration(concentration, concentrationUnit, "μg");
    return ugPerMl === null ? null : ugPerMl * rate / weight / 60;
  }
  if (normalizedUnit === "mg/kg/hr") {
    const mgPerMl = convertConcentration(concentration, concentrationUnit, "mg");
    return mgPerMl === null ? null : mgPerMl * rate / weight;
  }
  if (normalizedUnit === "μg/kg/hr") {
    const ugPerMl = convertConcentration(concentration, concentrationUnit, "μg");
    return ugPerMl === null ? null : ugPerMl * rate / weight;
  }
  if (normalizedUnit === "mg/hr") {
    const mgPerMl = convertConcentration(concentration, concentrationUnit, "mg");
    return mgPerMl === null ? null : mgPerMl * rate;
  }
  if (normalizedUnit === "U/min") {
    const uPerMl = convertConcentration(concentration, concentrationUnit, "U");
    return uPerMl === null ? null : uPerMl * rate / 60;
  }
  if (normalizedUnit === "mL/kg/hr") {
    return rate / weight;
  }
  return null;
}

function computeRateFromDose({ dose, concentration, concentrationUnit, weight, doseUnit }) {
  const normalizedUnit = normalizeDoseUnit(doseUnit);

  if (normalizedUnit === "μg/kg/min") {
    const ugPerMl = convertConcentration(concentration, concentrationUnit, "μg");
    return ugPerMl === null ? null : dose * weight * 60 / ugPerMl;
  }
  if (normalizedUnit === "mg/kg/hr") {
    const mgPerMl = convertConcentration(concentration, concentrationUnit, "mg");
    return mgPerMl === null ? null : dose * weight / mgPerMl;
  }
  if (normalizedUnit === "μg/kg/hr") {
    const ugPerMl = convertConcentration(concentration, concentrationUnit, "μg");
    return ugPerMl === null ? null : dose * weight / ugPerMl;
  }
  if (normalizedUnit === "mg/hr") {
    const mgPerMl = convertConcentration(concentration, concentrationUnit, "mg");
    return mgPerMl === null ? null : dose / mgPerMl;
  }
  if (normalizedUnit === "U/min") {
    const uPerMl = convertConcentration(concentration, concentrationUnit, "U");
    return uPerMl === null ? null : dose * 60 / uPerMl;
  }
  if (normalizedUnit === "mL/kg/hr") {
    return dose * weight;
  }
  return null;
}

function evaluateCard(card) {
  const drug = findDrug(card.drugId);
  if (!drug) {
    return { drug: null, resultValue: "薬剤を選択", resultTitle: "未選択", resultHelp: "薬剤選択後に計算できます。", resultError: false };
  }

  const concentrationResult = concentrationFromInputs(card.amount, drug.amountUnit, card.dilution, drug.concentrationUnit);
  if (concentrationResult.value === null) {
    return {
      drug,
      concentrationLabel: "エラー",
      resultTitle: "入力を確認",
      resultValue: "エラー",
      resultHelp: concentrationResult.error,
      resultError: true
    };
  }

  const weight = parseNumber(state.weight);
  if (doseNeedsWeight(drug.doseUnit) && (weight === null || weight <= 0)) {
    return {
      drug,
      concentrationLabel: `${formatNumber(concentrationResult.value)} ${drug.concentrationUnit}`,
      resultTitle: "体重を確認",
      resultValue: "エラー",
      resultHelp: "体重は0より大きい値を入力してください。",
      resultError: true
    };
  }

  const activeInput = card.mode === "rate" ? card.rateInput : card.doseInput;
  const activeValue = parseNumber(activeInput);
  if (activeValue === null) {
    return {
      drug,
      concentrationLabel: `${formatNumber(concentrationResult.value)} ${drug.concentrationUnit}`,
      resultTitle: card.mode === "rate" ? "目標投与量" : "投与速度",
      resultValue: "--",
      resultHelp: card.mode === "rate" ? "速度を入力すると投与量を算出します。" : "投与量を入力すると速度を算出します。",
      resultError: false
    };
  }

  if (activeValue < 0) {
    return {
      drug,
      concentrationLabel: `${formatNumber(concentrationResult.value)} ${drug.concentrationUnit}`,
      resultTitle: "入力を確認",
      resultValue: "エラー",
      resultHelp: "入力値は0以上で指定してください。",
      resultError: true
    };
  }

  const computed = card.mode === "rate"
    ? computeDoseFromRate({ rate: activeValue, concentration: concentrationResult.value, concentrationUnit: drug.concentrationUnit, weight, doseUnit: drug.doseUnit })
    : computeRateFromDose({ dose: activeValue, concentration: concentrationResult.value, concentrationUnit: drug.concentrationUnit, weight, doseUnit: drug.doseUnit });

  if (!Number.isFinite(computed) || computed === null || computed < 0) {
    return {
      drug,
      concentrationLabel: `${formatNumber(concentrationResult.value)} ${drug.concentrationUnit}`,
      resultTitle: "計算不可",
      resultValue: "エラー",
      resultHelp: "計算できません。入力値を確認してください。",
      resultError: true
    };
  }

  return {
    drug,
    concentrationLabel: `${formatNumber(concentrationResult.value)} ${drug.concentrationUnit}`,
    concentrationValue: concentrationResult.value,
    computedValue: computed,
    resultTitle: card.mode === "rate" ? "算出された目標投与量" : "算出された投与速度",
    resultValue: `${formatNumber(computed)} ${card.mode === "rate" ? drug.doseUnit : "mL/h"}`,
    resultHelp: card.mode === "rate" ? "入力した速度から投与量を算出しました。" : "入力した投与量から速度を算出しました。",
    resultError: false
  };
}

function defaultLabel(value, unit) {
  return value ? `${value} ${unit}` : "未設定";
}

function drugOptions(selectedId) {
  return [
    `<option value="${EMPTY_DRUG_ID}" ${selectedId === EMPTY_DRUG_ID ? "selected" : ""}>薬剤を選択</option>`,
    ...DRUGS.map((drug) => `<option value="${drug.id}" ${selectedId === drug.id ? "selected" : ""}>${escapeAttribute(drug.name)}</option>`)
  ].join("");
}

function modeOptions(selectedMode) {
  return [
    `<option value="rate" ${selectedMode === "rate" ? "selected" : ""}>速度から投与量を算出</option>`,
    `<option value="dose" ${selectedMode === "dose" ? "selected" : ""}>投与量から速度を算出</option>`
  ].join("");
}

function escapeAttribute(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function activeValueForDisplay(card, evaluated, field) {
  if (field === "rateInput") {
    if (card.mode === "dose" && Number.isFinite(evaluated.computedValue)) {
      return formatInputNumber(evaluated.computedValue);
    }
    return card.rateInput;
  }

  if (card.mode === "rate" && Number.isFinite(evaluated.computedValue)) {
    return formatInputNumber(evaluated.computedValue);
  }
  return card.doseInput;
}

function cardMarkup(card, index) {
  const evaluated = evaluateCard(card);
  const drug = evaluated.drug;

  if (!drug) {
    return `
      <article class="drug-card empty">
        <div class="field-card">
          <label class="field-label" for="drug-select-${card.cardId}">薬剤選択</label>
          <select id="drug-select-${card.cardId}" data-card-id="${card.cardId}" data-field="drugId">
            ${drugOptions(card.drugId)}
          </select>
          <p class="empty-copy">選択した薬剤だけ表示されます。</p>
        </div>
      </article>
    `;
  }

  return `
    <article class="drug-card">
      <div class="card-top">
        <div>
          <h3 class="card-title">${index + 1}. ${escapeAttribute(drug.name)}</h3>
          <p class="card-subtitle">体重・調製内容・片側入力から自動計算します。</p>
        </div>
        <div class="card-actions">
          <button type="button" class="ghost-button" data-action="reset-defaults" data-card-id="${card.cardId}">標準に戻す</button>
          <button type="button" class="danger-button" data-action="remove-card" data-card-id="${card.cardId}">削除</button>
        </div>
      </div>

      <div class="card-grid">
        <div class="compact-grid">
          <div class="field-card">
            <label class="field-label" for="drug-select-${card.cardId}">薬剤</label>
            <select id="drug-select-${card.cardId}" data-card-id="${card.cardId}" data-field="drugId">
              ${drugOptions(card.drugId)}
            </select>
          </div>
          <div class="field-card">
            <label class="field-label" for="mode-${card.cardId}">計算方法</label>
            <select id="mode-${card.cardId}" data-card-id="${card.cardId}" data-field="mode">
              ${modeOptions(card.mode)}
            </select>
          </div>
        </div>

        <div class="input-grid">
          <div class="field-card">
            <label class="field-label" for="amount-${card.cardId}">成分量</label>
            <div class="input-with-unit">
              <input id="amount-${card.cardId}" type="text" inputmode="decimal" value="${escapeAttribute(card.amount)}" data-card-id="${card.cardId}" data-field="amount" placeholder="${drug.defaultAmount || ""}" />
              <span>${drug.amountUnit}</span>
            </div>
          </div>

          <div class="field-card">
            <label class="field-label" for="dilution-${card.cardId}">希釈総量</label>
            <div class="input-with-unit">
              <input id="dilution-${card.cardId}" type="text" inputmode="decimal" value="${escapeAttribute(card.dilution)}" data-card-id="${card.cardId}" data-field="dilution" placeholder="${drug.defaultDilution || ""}" />
              <span>${drug.dilutionUnit}</span>
            </div>
          </div>
        </div>

        <div class="summary-row">
          <div class="mini-kpi">
            <span>濃度</span>
            <strong>${evaluated.concentrationLabel || "--"}</strong>
          </div>
          <div class="mini-kpi">
            <span>標準設定</span>
            <strong>${defaultLabel(drug.defaultAmount, drug.amountUnit)} / ${defaultLabel(drug.defaultDilution, drug.dilutionUnit)}</strong>
          </div>
          <div class="mini-kpi">
            <span>計算単位</span>
            <strong>${drug.doseUnit}</strong>
          </div>
        </div>

        <div class="input-grid">
          <div class="field-card">
            <label class="field-label" for="rate-${card.cardId}">速度</label>
            <div class="input-with-unit">
              <input id="rate-${card.cardId}" type="text" inputmode="decimal" value="${escapeAttribute(activeValueForDisplay(card, evaluated, "rateInput"))}" data-card-id="${card.cardId}" data-field="rateInput" ${card.mode === "rate" ? "" : "readonly"} />
              <span>mL/h</span>
            </div>
          </div>

          <div class="field-card">
            <label class="field-label" for="dose-${card.cardId}">目標投与量</label>
            <div class="input-with-unit">
              <input id="dose-${card.cardId}" type="text" inputmode="decimal" value="${escapeAttribute(activeValueForDisplay(card, evaluated, "doseInput"))}" data-card-id="${card.cardId}" data-field="doseInput" ${card.mode === "dose" ? "" : "readonly"} />
              <span>${drug.doseUnit}</span>
            </div>
          </div>
        </div>

        <div class="result-panel ${evaluated.resultError ? "error" : ""}">
          <div class="result-caption">${evaluated.resultTitle}</div>
          <div class="result-value">${evaluated.resultValue}</div>
          <div class="result-help">${evaluated.resultHelp}</div>
        </div>

        <div class="field-card">
          <div class="note-list">
            <div class="note-chip"><strong>体重</strong> ${escapeAttribute(state.weight || "--")} kg</div>
            <div class="note-chip"><strong>入力</strong> ${card.mode === "rate" ? "速度" : "投与量"}</div>
          </div>
          <details>
            <summary>参考用量を見る</summary>
            <div class="recommendation">${drug.recommendation || "参考文言は未設定です。"}</div>
          </details>
        </div>
      </div>
    </article>
  `;
}

function render(focusDescriptor = null) {
  elements.bodyWeight.value = state.weight;
  elements.drugCards.innerHTML = state.cards.map((card, index) => cardMarkup(card, index)).join("");

  if (!focusDescriptor) {
    return;
  }

  const selector = `[data-card-id="${focusDescriptor.cardId}"][data-field="${focusDescriptor.field}"]`;
  const target = document.querySelector(selector);
  if (target) {
    target.focus();
    if (typeof focusDescriptor.selectionStart === "number" && typeof target.setSelectionRange === "function") {
      target.setSelectionRange(focusDescriptor.selectionStart, focusDescriptor.selectionEnd);
    }
  }
}

function captureFocusDescriptor(target) {
  if (!target?.dataset?.cardId || !target?.dataset?.field) {
    return null;
  }

  return {
    cardId: target.dataset.cardId,
    field: target.dataset.field,
    selectionStart: typeof target.selectionStart === "number" ? target.selectionStart : null,
    selectionEnd: typeof target.selectionEnd === "number" ? target.selectionEnd : null
  };
}

function resetCardToDefaults(card) {
  const drug = findDrug(card.drugId);
  if (!drug) {
    return card;
  }

  return {
    ...card,
    amount: drug.defaultAmount,
    dilution: drug.defaultDilution,
    mode: "rate",
    rateInput: "",
    doseInput: ""
  };
}

function updateCard(cardId, updater) {
  state.cards = state.cards.map((card) => (card.cardId === cardId ? updater(card) : card));
}

function sanitizeFieldValue(field, value) {
  if (["amount", "dilution", "rateInput", "doseInput", "weight"].includes(field)) {
    return normalizeNumericInput(value);
  }
  return value;
}

elements.addDrugButton.addEventListener("click", () => {
  state.cards.push(initialCard());
  render();
});

elements.bodyWeight.addEventListener("input", (event) => {
  state.weight = sanitizeFieldValue("weight", event.target.value);
  render();
});

function handleCardInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return;
  }

  const { cardId, field } = target.dataset;
  if (!cardId || !field) {
    return;
  }

  const focusDescriptor = captureFocusDescriptor(target);
  const sanitizedValue = sanitizeFieldValue(field, target.value);

  updateCard(cardId, (card) => {
    if (field === "drugId") {
      const drug = findDrug(sanitizedValue);
      return drug
        ? { ...card, drugId: drug.id, amount: drug.defaultAmount, dilution: drug.defaultDilution, mode: "rate", rateInput: "", doseInput: "" }
        : { ...initialCard(), cardId };
    }

    if (field === "mode") {
      return { ...card, mode: sanitizedValue === "dose" ? "dose" : "rate" };
    }

    return { ...card, [field]: sanitizedValue };
  });

  render(focusDescriptor);
}

elements.drugCards.addEventListener("input", handleCardInput);
elements.drugCards.addEventListener("change", handleCardInput);

elements.drugCards.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const { action, cardId } = target.dataset;
  if (!action || !cardId) {
    return;
  }

  if (action === "remove-card") {
    state.cards = state.cards.filter((card) => card.cardId !== cardId);
    if (state.cards.length === 0) {
      state.cards = [initialCard()];
    }
    render();
    return;
  }

  if (action === "reset-defaults") {
    updateCard(cardId, (card) => resetCardToDefaults(card));
    render();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

render();
