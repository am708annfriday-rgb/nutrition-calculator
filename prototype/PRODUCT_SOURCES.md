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
