# 追加製品の確認記録（2026-09-15）

| 登録製品 | 1規格 | kcal | タンパク質・アミノ酸 g | 脂質 g | 炭水化物 g |
| --- | --- | ---: | ---: | ---: | ---: |
| 明治リーナレンLP | 125mL | 200 | 2 | 5.6 | 36.6 |
| 明治リーナレンLP Zパック400K | 250mL | 400 | 4 | 11.2 | 73.2 |
| ハイネックスリニュート | 400mL | 400 | 24 | 22.4 | 28.4 |
| アイソカル クリア（ピーチ風味） | 200mL | 200 | 10 | 0 | 40 |
| リーバクト配合顆粒 | 4.15g/包 | 16（換算） | 4（有効成分の合計） | 対象外 | 対象外 |
| アミノレバンEN配合散 | 50g/包 | 213 | 13.5 | 対象外 | 対象外 |
| キドパレン輸液 | 混合後1050mL | 1500 | 32.847（総遊離アミノ酸） | 0 | 342.2 |

## 出典

- リーナレンLP：[明治製品ページ](https://www.meiji.co.jp/products/enteral_formula/49720167.html)、[メーカー組成表・PDF最終ページ](https://www.meiji.co.jp/meiji-nutrition-info/pdf/products/mhn/renalen/renalen300.pdf)。125mLと250mL規格を確認。
- ハイネックスリニュート：[大塚製薬工場](https://www.otsukakj.jp/med_nutrition/archives/hinex/hinex_renute.php)。100kcal/100mLあたりの組成を400mLに換算。
- アイソカル クリア：[メーカー製品ページ](https://www.nestlehealthscience.jp/brands/isocal-ons-liquid/isocal-clear)、[メーカー成分表](https://www.nestlehealthscience.jp/sites/default/files/2024-07/isocal-clear.pdf)。ピーチ・レモンティーは主要成分が同じ。「アイソカルピーチ」はクリアのピーチ風味として仮解釈し、独立した別製品は作成していない。
- リーバクト：[PMDA添付文書](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/111890_3253003D2031_2_06)。952mg＋1904mg＋1144mg＝4g。熱量は添付文書記載値ではなく、アミノ酸4g×4kcal/g＝16kcalとして換算（添加剤分を除く）。
- アミノレバンEN：[PMDA添付文書](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/180078_3259108B1039_1_05)「参考」の蛋白質・総エネルギーを採用。
- キドパレン：[PMDA添付文書](https://www.pmda.go.jp/PmdaSearch/iyakuDetail/ResultDataSetPDF/180079_3259538G1021_1_02)。総窒素4.56g、非蛋白熱量1369kcalも採用。

## 集計仕様

- 追加EN/PN製品は表示熱量を使用。既存製品の計算方法は維持。
- 追加EN製品の窒素量はタンパク質÷6.25の推定値。炭水化物はメーカーの炭水化物値（食物繊維を含む）。
- 経口薬は包/日で入力し、カロリーとタンパク量を総合計・体重あたり計算へ加算。溶解水・脂質・炭水化物・窒素・NPCは対象外。ゼロ含有を意味しない。
- NPC/N・窒素バランスはEN/PNのみを対象とし画面に明記。
- アプリが読むマスタはapp.js。products_master_sample.csvは旧Excel移植用サンプルで、アプリのデータソースではない。

## 電解質データ（2026-09-21）

添付の東京都病院薬剤師会「新薬剤師のための輸液・栄養療法」の表を読み取り、製品名と包装量が一致する行だけ `app.js` の各製品の `electrolytes` に登録した。未記載の製品・成分は未登録として扱い、0 とみなさない。

| 製品 | 包装量 | 原表の掲載ページ | 原表の単位 |
| --- | ---: | ---: | --- |
| ペプタメンスタンダード、ペプタメンAF | 各200 mL | 88（PDF 11ページ） | Na/K/Cl/Ca/Mg/P: mg/包 |
| キドパレン輸液 | 混合後1050 mL | 2026年5月改訂の添付文書（ユーザー提供PDF 1–2ページ） | Na 50、K 0、Cl 40、Ca 6、Mg 6 mEq/袋、P 0 mmol/袋。K・Pは8.3項の「含有しない」を根拠に0を登録 |
| 明治リーナレンLP | 125、250 mL | 90（PDF 13ページ） | Na/K/Cl/Ca/Mg/P: mg/包 |
| 明治リーナレンMP | 125 mL | 90（PDF 13ページ） | Na/K/Cl/Ca/Mg/P: mg/包 |
| エルネオパNF 1号・2号 | 各1000 mL | 82–83（PDF 5–6ページ） | Na/K/Cl/Ca/Mg: mEq/袋、P: mg/袋 |
| フルカリック1号・2号・3号 | 903、1003、1103 mL | 82–83（PDF 5–6ページ） | Na/K/Cl/Ca/Mg: mEq/袋、P: mmol/袋（1号）、mg/袋（2・3号） |
| フィジオ140、ラクテック注、ソルアセトD・F | 各500 mL | 78–79（PDF 1–2ページ） | 記載された Na/K/Cl/Ca/Mg: mEq/L。空欄は未登録 |
| ソルデム3A・3AG、フィジオ35 | 各500 mL | 80–81（PDF 3–4ページ） | 記載された Na/K/Cl/Ca/Mg: mEq/L、フィジオ35のP: mmol/L。空欄は未登録 |

mg 表記は元素の原子量で mmol に換算し、Na/K/Cl は 1価、Ca/Mg は 2価として mEq に換算した。P は mmol のまま保持する。mEq/L・mmol/L 表記は包装量に比例換算した。原子量は [IUPAC/CIAAW の標準原子量表](https://ciaaw.org/atomic-weights.htm) を使用。原表の掲載値を `app.js` の各製品データ内に記録し、換算式は同ファイル冒頭に集約した。

結果の電解質は EN と PN/IV の選択製品を合算し、各製品の投与量を包装量で割って比例計算する。一つでも成分が未登録の製品を選択した場合、その成分の合計は「未登録あり」と表示する。経口薬は電解質集計の対象外。
