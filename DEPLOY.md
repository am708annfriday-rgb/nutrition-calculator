# 公開手順

このフォルダには、`prototype/` をそのまま Web 公開できる設定を追加しています。

## 最短で URL を出す方法

### GitHub Pages

1. GitHub で新しい空リポジトリを作る
2. このフォルダで以下を実行する

```bash
git add .
git commit -m "Add nutrition calculator PWA prototype"
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git push -u origin main
```

3. GitHub のリポジトリで `Settings > Pages` を開く
4. `Build and deployment` が `GitHub Actions` になっていることを確認する
5. Actions が完了すると公開される

公開 URL:

```text
https://<ユーザー名>.github.io/<リポジトリ名>/
```

### Netlify

1. GitHub に push する
2. Netlify に GitHub リポジトリを接続する
3. `publish directory` は `prototype` のままでよい

公開 URL は Netlify 側で発行される

## ホーム画面追加

- Android:
  Chrome で公開 URL を開き、「ホーム画面に追加」または「インストール」
- iPhone:
  Safari で公開 URL を開き、共有メニューから「ホーム画面に追加」

## 補足

- PWA は `https://` または `localhost` で有効
- `file://` で直接開くとホーム画面追加やオフラインキャッシュは一部使えない
