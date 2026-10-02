const EMPTY_PRODUCT_ID = "";

// 元資料の mg（元素量）を 1 包装あたりの mEq / mmol に換算する。
// 原子量: IUPAC/CIAAW。未記載の成分は null のまま保持する。
const ELECTROLYTE_KEYS = ["sodium", "potassium", "chloride", "calcium", "magnesium", "phosphorus"];
const ELECTROLYTE_LABELS = { sodium: "Na", potassium: "K", chloride: "Cl", calcium: "Ca", magnesium: "Mg", phosphorus: "P" };
const ATOMIC_WEIGHTS = { sodium: 22.98976928, potassium: 39.0983, chloride: 35.45,
  calcium: 40.078, magnesium: 24.305, phosphorus: 30.973761998 };
const VALENCES = { sodium: 1, potassium: 1, chloride: 1, calcium: 2, magnesium: 2, phosphorus: 1 };
const ELECTROLYTE_FIELDS = {
  sodium: "sodiumMeqPerPackage", potassium: "potassiumMeqPerPackage",
  chloride: "chlorideMeqPerPackage", calcium: "calciumMeqPerPackage",
  magnesium: "magnesiumMeqPerPackage", phosphorus: "phosphorusMmolPerPackage"
};

function electrolytesFromMg(values) {
  return Object.fromEntries(ELECTROLYTE_KEYS.map((key) => [ELECTROLYTE_FIELDS[key],
    values[key] == null ? null : values[key] * VALENCES[key] / ATOMIC_WEIGHTS[key]]));
}

function electrolytesFromPerLiter(values, packageMl) {
  return Object.fromEntries(ELECTROLYTE_KEYS.map((key) => [ELECTROLYTE_FIELDS[key],
    values[key] == null ? null : values[key] * packageMl / 1000]));
}

const products = [
  // テルミールミニはコーンスープ味のみNa含有量が異なるため、選択肢を分ける。
  {
    id: "enteral-terumeal-mini-125", name: "テルミールミニ 125mL（コーンスープ味以外）", group: "EN",
    packageMl: 125, kcalPerMl: 200 / 125, useLabelEnergy: true,
    proteinPerMl: 7.3 / 125, fatPerMl: 7.5 / 125, carbPerMl: 26 / 125,
    nitrogenPerMl: 7.3 / 6.25 / 125,
    electrolytes: { sodiumMeqPerPackage: 4.3, potassiumMeqPerPackage: 2.6, chlorideMeqPerPackage: 4.2,
      calciumMeqPerPackage: 90 * 2 / ATOMIC_WEIGHTS.calcium,
      magnesiumMeqPerPackage: 20 * 2 / ATOMIC_WEIGHTS.magnesium,
      phosphorusMmolPerPackage: 90 / ATOMIC_WEIGHTS.phosphorus },
    note: "メーカー表示値。コーヒー・バナナ・麦茶味。窒素量はタンパク質÷6.25の推定値"
  },
  {
    id: "enteral-terumeal-mini-corn-125", name: "テルミールミニ 125mL（コーンスープ味）", group: "EN",
    packageMl: 125, kcalPerMl: 200 / 125, useLabelEnergy: true,
    proteinPerMl: 7.3 / 125, fatPerMl: 7.5 / 125, carbPerMl: 26 / 125,
    nitrogenPerMl: 7.3 / 6.25 / 125,
    electrolytes: { sodiumMeqPerPackage: 7.6, potassiumMeqPerPackage: 2.6, chlorideMeqPerPackage: 4.2,
      calciumMeqPerPackage: 90 * 2 / ATOMIC_WEIGHTS.calcium,
      magnesiumMeqPerPackage: 20 * 2 / ATOMIC_WEIGHTS.magnesium,
      phosphorusMmolPerPackage: 90 / ATOMIC_WEIGHTS.phosphorus },
    note: "メーカー表示値。コーンスープ味はNa 175mg（7.6mEq）。窒素量はタンパク質÷6.25の推定値"
  },
  // Verified additions: see PRODUCT_SOURCES.md (2026-09-15).
  {
    id: "enteral-renalen-lp-125", name: "明治リーナレンLP 125mL", group: "EN",
    packageMl: 125, kcalPerMl: 200 / 125, useLabelEnergy: true,
    proteinPerMl: 2 / 125, fatPerMl: 5.6 / 125, carbPerMl: 36.6 / 125,
    nitrogenPerMl: 2 / 6.25 / 125,
    electrolytes: electrolytesFromMg({ sodium: 60, potassium: 60, chloride: 15, calcium: 60, magnesium: 30, phosphorus: 40 }),
    note: "メーカー表示値。炭水化物は食物繊維を含む。窒素量はタンパク質÷6.25の推定値"
  },
  {
    id: "enteral-renalen-lp-250", name: "明治リーナレンLP Zパック400K 250mL", group: "EN",
    packageMl: 250, kcalPerMl: 400 / 250, useLabelEnergy: true,
    proteinPerMl: 4 / 250, fatPerMl: 11.2 / 250, carbPerMl: 73.2 / 250,
    nitrogenPerMl: 4 / 6.25 / 250,
    electrolytes: electrolytesFromMg({ sodium: 120, potassium: 120, chloride: 30, calcium: 120, magnesium: 60, phosphorus: 80 }),
    note: "メーカー標準組成。炭水化物は食物繊維を含む。窒素量はタンパク質÷6.25の推定値"
  },
  {
    id: "enteral-hinex-renute", name: "ハイネックスリニュート 400mL", group: "EN",
    packageMl: 400, kcalPerMl: 1, useLabelEnergy: true,
    proteinPerMl: 6 / 100, fatPerMl: 5.6 / 100, carbPerMl: 7.1 / 100,
    nitrogenPerMl: 6 / 6.25 / 100,
    note: "メーカー標準組成。炭水化物は食物繊維を含む。窒素量はタンパク質÷6.25の推定値"
  },
  {
    id: "enteral-isocal-clear", name: "アイソカル クリア（ピーチ風味）200mL", group: "EN",
    packageMl: 200, kcalPerMl: 1, useLabelEnergy: true,
    proteinPerMl: 10 / 200, fatPerMl: 0, carbPerMl: 40 / 200,
    nitrogenPerMl: 10 / 6.25 / 200,
    note: "メーカー表示値。レモンティー風味も同じ主要成分。窒素量はタンパク質÷6.25の推定値"
  },
  {
    id: "oral-livact", name: "リーバクト配合顆粒 4.15g/包", group: "ORAL",
    kcalPerPack: 16, proteinPerPack: 4,
    note: "アミノ酸4gをタンパク量として加算。16kcalは4g×4kcal/gの換算値（添加剤を除く）"
  },
  {
    id: "oral-aminoleban-en", name: "アミノレバンEN配合散 50g/包", group: "ORAL",
    kcalPerPack: 213, proteinPerPack: 13.5,
    note: "添付文書記載値。カロリーとタンパク量のみ加算（溶解水は容量に含めない）"
  },
  {
    id: "pn-kidoparen", name: "キドパレン輸液 1050mL", group: "PN",
    packageMl: 1050, kcalPerMl: 1500 / 1050, useLabelEnergy: true,
    proteinPerMl: 32.847 / 1050, fatPerMl: 0, carbPerMl: 342.2 / 1050,
    nitrogenPerMl: 4.56 / 1050, npcPerMl: 1369 / 1050,
    electrolytes: { sodiumMeqPerPackage: 50, potassiumMeqPerPackage: 0, chlorideMeqPerPackage: 40,
      calciumMeqPerPackage: 6, magnesiumMeqPerPackage: 6, phosphorusMmolPerPackage: 0 },
    note: "添付文書：混合後1バッグ。タンパク量は総遊離アミノ酸量、窒素・非蛋白熱量は記載値"
  },

  {
    id: "enteral-peptamen-standard",
    name: "ペプタメンスタンダード",
    group: "EN",
    packageMl: 200,
    kcalPerMl: 1.5,
    proteinPerMl: 10.5 / 200,
    fatPerMl: 12 / 200,
    carbPerMl: 37.5 / 200,
    nitrogenPerMl: 10.5 / 6.25 / 200,
    electrolytes: electrolytesFromMg({ sodium: 430, potassium: 320, chloride: 300, calcium: 234, magnesium: 108, phosphorus: 170 }),
    note: "添付資料: 300kcal/200mL"
  },
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
    electrolytes: electrolytesFromMg({ sodium: 240, potassium: 464, chloride: 162, calcium: 202, magnesium: 62, phosphorus: 170 }),
    note: "PDF掲載: 300kcal/200mL"
  },
  {
    id: "enteral-racol",
    name: "ラコールNF 配合経腸用液",
    group: "EN",
    packageMl: 400,
    kcalPerMl: 1.0,
    proteinPerMl: 17.52 / 400,
    fatPerMl: 8.92 / 400,
    carbPerMl: 62.48 / 400,
    nitrogenPerMl: 2.76 / 400,
    note: "添付文書: 400mL中 400kcal・たん白質17.52g・脂肪8.92g・糖質62.48g"
  },
  {
    id: "enteral-enevo",
    name: "エネーボ配合経腸用液",
    group: "EN",
    packageMl: 250,
    kcalPerMl: 1.2,
    proteinPerMl: 13.5 / 250,
    fatPerMl: 9.6 / 250,
    carbPerMl: 39.6 / 250,
    nitrogenPerMl: (13.5 / 6.25) / 250,
    note: "添付資料: 250mL中 300kcal・たんぱく質13.5g・脂質9.6g・炭水化物39.6g"
  },
  {
    id: "enteral-elental",
    name: "エレンタール配合内用剤",
    group: "EN",
    packageMl: 300,
    kcalPerMl: 1.0,
    proteinPerMl: 12.5088 / 300,
    fatPerMl: 0.509 / 300,
    carbPerMl: (300 - 12.5088 * 4 - 0.509 * 9) / 4 / 300,
    nitrogenPerMl: (12.5088 / 6.25) / 300,
    note: "添付文書: 1包80gを約300mLに調製して300kcal"
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
    electrolytes: electrolytesFromMg({ sodium: 120, potassium: 60, chloride: 20, calcium: 60, magnesium: 30, phosphorus: 70 }),
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
    id: "pn-glucose-5",
    name: "ブドウ糖5%",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 0.2,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.05,
    nitrogenPerMl: 0,
    note: "添付文書: 100kcal/500mL"
  },
  {
    id: "pn-glucose-10",
    name: "ブドウ糖10%",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 0.4,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.1,
    nitrogenPerMl: 0,
    note: "添付文書: 200kcal/500mL"
  },
  {
    id: "pn-glucose-30",
    name: "ブドウ糖30%",
    group: "PN",
    packageMl: 200,
    kcalPerMl: 1.2,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0.3,
    nitrogenPerMl: 0,
    note: "濃度換算: 30g/100mL"
  },
  {
    id: "pn-physio-140-500",
    name: "フィジオ140輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 40 / 1000,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 10 / 1000,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 140, potassium: 4, chloride: 115, calcium: 3, magnesium: 2 }, 500),
    note: "まとめPDF掲載: G10・40kcal/L"
  },
  {
    id: "pn-lactec-500",
    name: "ラクテック注 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 0,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 130, potassium: 4, chloride: 109, calcium: 3 }, 500),
    note: "添付文書: 500mL中 電解質のみ・熱量記載なし"
  },
  {
    id: "pn-solacet-d-500",
    name: "ソルアセトD輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 200 / 1000,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 50 / 1000,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 131, potassium: 4, chloride: 109, calcium: 3 }, 500),
    note: "まとめPDF掲載: G50・200kcal/L"
  },
  {
    id: "pn-solacet-f-500",
    name: "ソルアセトF輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 0,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 0,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 131, potassium: 4, chloride: 109, calcium: 3 }, 500),
    note: "添付文書: 500mL中 電解質のみ・熱量記載なし"
  },
  {
    id: "pn-soludem-1-500",
    name: "ソルデム1輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 52 / 500,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 13 / 500,
    nitrogenPerMl: 0,
    note: "添付文書: 500mL中 ブドウ糖13.0g・52kcal"
  },
  {
    id: "pn-soludem-3a-500",
    name: "ソルデム3A輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 86 / 500,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 21.5 / 500,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 35, potassium: 20, chloride: 35 }, 500),
    note: "添付文書: 500mL中 ブドウ糖21.5g・86kcal"
  },
  {
    id: "pn-physio-35-500",
    name: "フィジオ35輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 400 / 1000,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 100 / 1000,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 35, potassium: 20, chloride: 28, calcium: 5, magnesium: 3, phosphorus: 10 }, 500),
    note: "まとめPDF掲載: G100・400kcal/L"
  },
  {
    id: "pn-soludem-3ag-500",
    name: "ソルデム3AG輸液 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 300 / 1000,
    proteinPerMl: 0,
    fatPerMl: 0,
    carbPerMl: 75 / 1000,
    nitrogenPerMl: 0,
    electrolytes: electrolytesFromPerLiter({ sodium: 35, potassium: 20, chloride: 35 }, 500),
    note: "まとめPDF掲載: G75・300kcal/L"
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
    electrolytes: { sodiumMeqPerPackage: 50, potassiumMeqPerPackage: 22, chlorideMeqPerPackage: 50,
      calciumMeqPerPackage: 4, magnesiumMeqPerPackage: 4, phosphorusMmolPerPackage: 250 / ATOMIC_WEIGHTS.phosphorus },
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
    electrolytes: { sodiumMeqPerPackage: 50, potassiumMeqPerPackage: 27, chlorideMeqPerPackage: 50,
      calciumMeqPerPackage: 5, magnesiumMeqPerPackage: 5, phosphorusMmolPerPackage: 250 / ATOMIC_WEIGHTS.phosphorus },
    note: "PDF掲載: 820kcal/1000mL"
  },
  {
    id: "pn-amiparen",
    name: "アミパレン輸液",
    group: "PN",
    packageMl: 200,
    kcalPerMl: 0.4,
    proteinPerMl: 0.0978,
    fatPerMl: 0,
    carbPerMl: (0.4 - 0.0978 * 4) / 4,
    nitrogenPerMl: 0.01565,
    note: "PDF掲載: 400kcal/L"
  },
  {
    id: "pn-aminoleban-500",
    name: "アミノレバン点滴静注 500mL",
    group: "PN",
    packageMl: 500,
    kcalPerMl: 319.4 / 1000,
    proteinPerMl: 79.86 / 1000,
    fatPerMl: 0,
    carbPerMl: 0,
    nitrogenPerMl: 12.22 / 1000,
    note: "まとめPDF掲載: 総遊離アミノ酸79.86g/L・319.4kcal/L"
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
    electrolytes: { sodiumMeqPerPackage: 50, potassiumMeqPerPackage: 30, chlorideMeqPerPackage: 49,
      calciumMeqPerPackage: 8.5, magnesiumMeqPerPackage: 10, phosphorusMmolPerPackage: 6 },
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
    electrolytes: { sodiumMeqPerPackage: 50, potassiumMeqPerPackage: 30, chlorideMeqPerPackage: 49,
      calciumMeqPerPackage: 8.5, magnesiumMeqPerPackage: 10, phosphorusMmolPerPackage: 250 / ATOMIC_WEIGHTS.phosphorus },
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
    electrolytes: { sodiumMeqPerPackage: 50, potassiumMeqPerPackage: 30, chlorideMeqPerPackage: 49,
      calciumMeqPerPackage: 8.5, magnesiumMeqPerPackage: 10, phosphorusMmolPerPackage: 250 / ATOMIC_WEIGHTS.phosphorus },
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
    id: "pn-propofol-1-50",
    name: "プロポフォール1%静注 50mL",
    group: "PN",
    packageMl: 50,
    kcalPerMl: 0.9,
    proteinPerMl: 0,
    fatPerMl: 0.1,
    carbPerMl: 0,
    nitrogenPerMl: 0,
    note: "添付文書: 1mLあたり約0.1gの脂質"
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
  unit: "ml_h"
};

const state = {
  enRows: Array.from({ length: 4 }, () => ({ ...defaultRow })),
  oralRows: Array.from({ length: 2 }, () => ({ ...defaultRow, unit: "packs_day" })),
  pnRows: Array.from({ length: 4 }, () => ({ ...defaultRow })),
  weight: "",
  advancedMode: "none",
  urineVolume: "",
  urineUN: ""
};

const elements = {
  oralSlots: document.querySelector("#oralSlots"),
  oralSummary: document.querySelector("#oralSummary"),
  enSlots: document.querySelector("#enSlots"),
  pnSlots: document.querySelector("#pnSlots"),
  enSummary: document.querySelector("#enSummary"),
  pnSummary: document.querySelector("#pnSummary"),
  totalSummary: document.querySelector("#totalSummary"),
  perKgSummary: document.querySelector("#perKgSummary"),
  npcnSummary: document.querySelector("#npcnSummary"),
  electrolyteSummary: document.querySelector("#electrolyteSummary"),
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

function formatElectrolyte(value) {
  return value > 0 && value < 0.005 ? "<0.01" : formatNumber(value, 2);
}

function getUnitLabel(unit) {
  if (unit === "packs_day") return "包/日";
  if (unit === "ml_h") return "mL/h";
  if (unit === "ml_day") return "mL/日";
  return "回/日";
}

function buildProductMeta(product) {
  if (!product) {
    return "未選択の枠です";
  }

  if (product.group === "ORAL") {
    return `1包 / ${formatNumber(product.kcalPerPack)}kcal / タンパク量 ${formatNumber(product.proteinPerPack)}g / ${product.note}`;
  }
  const packageMl = product.packageMl || 0;
  const packageKcal = packageMl * (product.kcalPerMl || 0);
  const packageProtein = packageMl * (product.proteinPerMl || 0);
  const packageFat = packageMl * (product.fatPerMl || 0);
  const packageCarb = packageMl * (product.carbPerMl || 0);

  return [
    `1規格 ${formatNumber(packageMl, 0)}mL`,
    `${formatNumber(packageKcal, 1)}kcal`,
    `炭水化物 ${formatNumber(packageCarb, 1)}g`,
    `タンパク質 ${formatNumber(packageProtein, 1)}g`,
    `脂質 ${formatNumber(packageFat, 1)}g`,
    product.note
  ].join(" / ");
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

  if (row.unit === "ml_day") {
    return amount;
  }

  if (row.unit === "ml_h") {
    return amount * 24;
  }

  return amount * (product.packageMl || 0);
}

function calculateRow(row) {
  const product = findProduct(row.productId);
  if (!product) {
    return { product: null, volumeMl: 0, kcal: 0, protein: 0, fat: 0, carb: 0, nitrogen: 0, npc: 0 };
  }

  if (product.group === "ORAL") {
    const packs = Math.max(0, Number(row.amount) || 0);
    return { product, volumeMl: 0, kcal: packs * product.kcalPerPack,
      protein: packs * product.proteinPerPack, fat: 0, carb: 0, nitrogen: 0, npc: 0 };
  }
  const volumeMl = getDailyVolume(row, product);
  const protein = volumeMl * product.proteinPerMl;
  const fat = volumeMl * product.fatPerMl;
  const carb = volumeMl * product.carbPerMl;
  const nitrogen = volumeMl * product.nitrogenPerMl;
  const kcal = product.useLabelEnergy ? volumeMl * product.kcalPerMl : protein * 4 + fat * 9 + carb * 4;
  const npc = product.npcPerMl != null ? volumeMl * product.npcPerMl : kcal - protein * 4;

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

function renderRowElectrolytes(row, product) {
  if (!product || product.group === "ORAL" || !(Number(row.amount) > 0)) return "";
  const ratio = getDailyVolume(row, product) / product.packageMl;
  const cells = ELECTROLYTE_KEYS.map((key) => {
    const value = product.electrolytes?.[ELECTROLYTE_FIELDS[key]];
    const unit = key === "phosphorus" ? "mmol" : "mEq";
    return { key, value, unit };
  });
  if (cells.every(({ value }) => value == null || !Number.isFinite(value))) {
    return '<div class="slot-electrolytes"><span class="slot-electrolytes-title">電解質 / 日</span><span class="slot-electrolytes-unknown">電解質データ未登録</span></div>';
  }
  return `<div class="slot-electrolytes"><span class="slot-electrolytes-title">電解質 / 日</span><div class="slot-electrolytes-grid">${cells.map(({ key, value, unit }) =>
    `<div class="slot-electrolyte"><span>${ELECTROLYTE_LABELS[key]}</span><strong>${value == null || !Number.isFinite(value) ? "未登録" : `${formatElectrolyte(value * ratio)} ${unit}`}</strong></div>`).join("")}</div></div>`;
}

function renderSlots(group) {
  const container = group === "ORAL" ? elements.oralSlots : group === "EN" ? elements.enSlots : elements.pnSlots;
  const rows = getRowsByGroup(group);
  // 入力済みの後続行を残し、その直後に未選択行を一つだけ表示する。
  const lastUsedIndex = rows.findLastIndex((row) => row.productId || row.amount !== "");
  const visibleCount = Math.min(rows.length, Math.max(1, lastUsedIndex + 2));

  container.innerHTML = rows.slice(0, visibleCount)
    .map((row, index) => {
      const result = calculateRow(row);
      const product = result.product;
      const meta = buildProductMeta(product);
      const showInputs = Boolean(product);
      return `
        <article class="slot-card" data-group="${group}" data-index="${index}">
          <div class="slot-header">
            <span class="slot-index">${group === "ORAL" ? "経口薬" : "製剤"}${index + 1}</span>
            <span class="slot-badge" data-cell="badge">${product ? getUnitLabel(row.unit) : "未選択"}</span>
          </div>
          <div class="slot-fields ${showInputs ? "" : "single"}"><select class="slot-select" aria-label="${group === "ORAL" ? "経口薬" : "製剤"}${index + 1}の製品" data-group="${group}" data-index="${index}" data-field="productId">
            ${createOptions(group, row.productId)}
          </select>
          <div class="${showInputs ? "" : "hidden"}" data-input-area>
          <div class="dose-row">
            <input
              class="dose-input"
              aria-label="${group === "ORAL" ? "経口薬" : "製剤"}${index + 1}の投与量"
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
              ${group === "ORAL" ? '<option value="packs_day">包/日</option>' : `
              <option value="ml_h" ${row.unit === "ml_h" ? "selected" : ""}>mL/h</option>
              <option value="ml_day" ${row.unit === "ml_day" ? "selected" : ""}>mL/日</option>
              <option value="times_day" ${row.unit === "times_day" ? "selected" : ""}>回/日</option>`}
            </select>
          </div>
          </div>
          </div>
          <details class="slot-info ${showInputs ? "" : "hidden"}" data-info>
            <summary>製品情報</summary><p class="slot-meta" data-cell="meta">${meta}</p>
          </details>
          <div class="${showInputs ? "" : "hidden"}" data-metrics>
          <div class="slot-foot">
            <div class="mini-metric ${group === "ORAL" ? "hidden" : ""}"><span>容量</span><strong data-cell="volume">${formatNumber(result.volumeMl, 0)} mL</strong></div>
            <div class="mini-metric"><span>kcal</span><strong data-cell="kcal">${formatNumber(result.kcal, 1)}</strong></div>
            <div class="mini-metric"><span>タンパク質</span><strong data-cell="protein">${formatNumber(result.protein, 1)} g</strong></div>
          </div>
          </div>
          <div data-cell="electrolytes">${renderRowElectrolytes(row, product)}</div>
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
  const oralTotals = sumRows(state.oralRows);
  const totalTotals = {
    volumeMl: enTotals.volumeMl + pnTotals.volumeMl,
    kcal: enTotals.kcal + pnTotals.kcal + oralTotals.kcal,
    protein: enTotals.protein + pnTotals.protein + oralTotals.protein,
    fat: enTotals.fat + pnTotals.fat,
    carb: enTotals.carb + pnTotals.carb,
    nitrogen: enTotals.nitrogen + pnTotals.nitrogen,
    npc: enTotals.npc + pnTotals.npc
  };
  const weight = Number(state.weight) || 0;

  elements.oralSummary.innerHTML = `<p>エネルギー：${formatNumber(oralTotals.kcal)} kcal ／ タンパク量：${formatNumber(oralTotals.protein)} g</p>`;
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

  elements.npcnSummary.innerHTML = renderNpcnSummary(totalTotals);
  elements.electrolyteSummary.innerHTML = renderElectrolytes(weight);
  renderAdvanced(totalTotals, weight);
}

function calculateElectrolytes(rows) {
  const totals = Object.fromEntries(ELECTROLYTE_KEYS.map((key) => [key, 0]));
  const missing = Object.fromEntries(ELECTROLYTE_KEYS.map((key) => [key, new Set()]));
  let doseCount = 0;
  for (const row of rows) {
    const product = findProduct(row.productId);
    if (!product || !(Number(row.amount) > 0)) continue;
    doseCount += 1;
    const ratio = getDailyVolume(row, product) / product.packageMl;
    for (const key of ELECTROLYTE_KEYS) {
      const value = product.electrolytes?.[ELECTROLYTE_FIELDS[key]];
      if (value == null || !Number.isFinite(value)) missing[key].add(product.name);
      else totals[key] += ratio * value;
    }
  }
  return { totals, missing, doseCount };
}

function renderElectrolytes(weight) {
  const { totals, missing, doseCount } = calculateElectrolytes([...state.enRows, ...state.pnRows]);
  if (!doseCount) return '<div class="advanced-card"><h3>電解質</h3><p class="electrolyte-note">製剤の投与量を入力すると電解質を表示します。</p></div>';
  const missingProducts = new Set(ELECTROLYTE_KEYS.flatMap((key) => [...missing[key]]));
  const rows = ELECTROLYTE_KEYS.map((key) => {
    const unit = key === "phosphorus" ? "mmol" : "mEq";
    const unknown = missing[key].size > 0;
    return `<tr><th scope="row">${ELECTROLYTE_LABELS[key]}</th><td>${unknown ? '<span title="電解質データ未登録">未登録あり</span>' : `${formatElectrolyte(totals[key])} ${unit}`}</td>${weight > 0 ? `<td>${unknown ? "—" : formatElectrolyte(totals[key] / weight)}</td>` : ""}</tr>`;
  }).join("");
  return `<div class="advanced-card"><h3>電解質</h3>
    <table class="electrolyte-table"><thead><tr><th>成分</th><th>/day</th>${weight > 0 ? "<th>/kg/day</th>" : ""}</tr></thead><tbody>${rows}</tbody></table>
    ${missingProducts.size ? `<p class="electrolyte-note">電解質データ未登録の成分を含むため、「未登録あり」の行は合計を表示しません。対象製剤：${[...missingProducts].join("、")}</p>` : ""}
    <p class="electrolyte-note">/kg/day の単位は各行の /day と同じです。経腸栄養・静脈栄養／輸液のみ。経口薬は対象外です。</p></div>`;
}

function renderNpcnSummary(totals) {
  const npcn = totals.nitrogen > 0 ? formatNumber(totals.npc / totals.nitrogen, 1) : "—";
  return `<div class="advanced-card">
    <h3>NPC/N</h3>
    <div class="advanced-formula">経腸・静脈栄養のみ（経口薬は対象外）。非タンパクカロリーは製品記載値、またはエネルギー − タンパク質(g) × 4</div>
    <div class="advanced-grid">
      <div class="advanced-value"><span>非タンパクカロリー</span><strong>${formatNumber(totals.npc, 1)} kcal</strong></div>
      <div class="advanced-value"><span>窒素量</span><strong>${formatNumber(totals.nitrogen, 2)} g</strong></div>
      <div class="advanced-value"><span>NPC/N</span><strong>${npcn}</strong></div>
    </div>
    ${totals.nitrogen > 0 ? "" : '<p class="electrolyte-note">窒素量が0のためNPC/Nは計算できません。</p>'}
  </div>`;
}

function renderAdvanced(totals, weight) {
  if (state.advancedMode !== "nitrogen-balance") {
    elements.advancedPanel.innerHTML = "";
    return;
  }

  const { nitrogenIn, nitrogenOut, balance } = calculateNitrogenBalance(totals, weight);

  elements.advancedPanel.innerHTML = `
    <div class="advanced-panel-inner">
      <div class="advanced-card">
        <h3>窒素バランス計算</h3>
        <div class="advanced-formula">
          経腸・静脈栄養のみ（経口薬は対象外）。窒素インは製品の窒素量の合計（未記載製品はタンパク質 / 6.25で推定）<br />
          窒素アウト = 尿量(mL) × 尿中UN濃度(mg/dL) / 100000 + 体重 × 0.031
        </div>
        <div class="advanced-grid">
          <label class="field-label" for="urineVolume">尿量 (mL/日)</label>
          <input class="advanced-input" id="urineVolume" type="number" min="0" step="1" inputmode="decimal" value="${state.urineVolume}" />
          <label class="field-label" for="urineUN">尿中UN濃度 (mg/dL)</label>
          <input class="advanced-input" id="urineUN" type="number" min="0" step="0.1" inputmode="decimal" value="${state.urineUN}" />
          <div class="advanced-value"><span>窒素イン</span><strong data-balance="in">${formatNumber(nitrogenIn, 2)} g</strong></div>
          <div class="advanced-value"><span>窒素アウト</span><strong data-balance="out">${formatNumber(nitrogenOut, 3)} g</strong></div>
          <div class="advanced-value"><span>窒素バランス</span><strong data-balance="net">${formatNumber(balance, 3)} g</strong></div>
        </div>
      </div>
    </div>
  `;
}

function calculateNitrogenBalance(totals, weight) {
  const nitrogenIn = totals.nitrogen;
  const nitrogenOut = (Number(state.urineVolume) || 0) * (Number(state.urineUN) || 0) / 100000 + weight * 0.031;
  return { nitrogenIn, nitrogenOut, balance: nitrogenIn - nitrogenOut };
}

function refreshNitrogenBalanceValues() {
  const totals = sumRows([...state.enRows, ...state.pnRows]);
  const { nitrogenIn, nitrogenOut, balance } = calculateNitrogenBalance(totals, Number(state.weight) || 0);
  const values = { in: `${formatNumber(nitrogenIn, 2)} g`, out: `${formatNumber(nitrogenOut, 3)} g`, net: `${formatNumber(balance, 3)} g` };
  for (const [key, value] of Object.entries(values)) {
    const node = elements.advancedPanel.querySelector(`[data-balance="${key}"]`);
    if (node) node.textContent = value;
  }
}

function render() {
  renderSlots("EN");
  renderSlots("PN");
  renderSlots("ORAL");
  renderSummaries();
}

function refreshSlotCard(group, index) {
  const container = group === "ORAL" ? elements.oralSlots : group === "EN" ? elements.enSlots : elements.pnSlots;
  const row = getRowsByGroup(group)[index];
  const card = container.querySelector(`.slot-card[data-group="${group}"][data-index="${index}"]`);
  if (!card || !row) {
    return;
  }

  const result = calculateRow(row);
  const product = result.product;
  const meta = buildProductMeta(product);
  const badge = card.querySelector('[data-cell="badge"]');
  const metaNode = card.querySelector('[data-cell="meta"]');
  const volume = card.querySelector('[data-cell="volume"]');
  const kcal = card.querySelector('[data-cell="kcal"]');
  const protein = card.querySelector('[data-cell="protein"]');
  const inputArea = card.querySelector("[data-input-area]");

  if (badge) badge.textContent = product ? getUnitLabel(row.unit) : "未選択";
  if (metaNode) metaNode.textContent = meta;
  const info = card.querySelector("[data-info]");
  if (info) info.classList.toggle("hidden", !product);
  if (volume) volume.textContent = `${formatNumber(result.volumeMl, 0)} mL`;
  if (kcal) kcal.textContent = formatNumber(result.kcal, 1);
  if (protein) protein.textContent = `${formatNumber(result.protein, 1)} g`;
  if (inputArea) inputArea.classList.toggle("hidden", !product);
  const metrics = card.querySelector("[data-metrics]");
  if (metrics) metrics.classList.toggle("hidden", !product);
  const electrolytes = card.querySelector('[data-cell="electrolytes"]');
  if (electrolytes) electrolytes.innerHTML = renderRowElectrolytes(row, product);
}

function getRowsByGroup(group) {
  return { EN: state.enRows, PN: state.pnRows, ORAL: state.oralRows }[group];
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
    refreshNitrogenBalanceValues();
    return;
  }

  if (target.id === "urineUN") {
    state.urineUN = target.value;
    refreshNitrogenBalanceValues();
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
  if (field === "productId" && !target.value) rows[index].amount = "";

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
  if (field === "productId" && !target.value) rows[index].amount = "";
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
