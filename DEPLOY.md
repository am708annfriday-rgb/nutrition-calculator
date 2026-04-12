# ガンマ計算アプリ 公開手順

このフォルダは、`prototype/` をそのまま GitHub Pages で公開できるようにしてあります。

## いちばんおすすめ

GitHub に push して GitHub Pages で公開し、スマホでホーム画面に追加して使います。

公開後の URL は次の形です。

```text
https://<ユーザー名>.github.io/<リポジトリ名>/
```

## 手順

### 1. GitHub で空のリポジトリを作る

- 例: `gamma-calc`
- `README` や `.gitignore` は GitHub 側で作らなくて大丈夫です

### 2. このフォルダで push する

```bash
git add .
git commit -m "Add gamma calculator PWA"
git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
git branch -M main
git push -u origin main
```

すでに `origin` がある場合は、`git remote add origin ...` は不要です。

### 3. GitHub Pages を有効にする

- GitHub のリポジトリで `Settings`
- 左メニューの `Pages`
- `Build and deployment` を確認
- `Source` は `GitHub Actions`

このリポジトリには [pages.yml](/Users/am708/Library/CloudStorage/GoogleDrive-am708annfriday@gmail.com/マイドライブ/Inbox/Codex用医療ツール開発事務局/.github/workflows/pages.yml) が入っているので、`main` に push すると `prototype/` が自動公開されます。

### 4. 公開を確認する

- `Actions` タブで `Deploy GitHub Pages` が完了
- 数分後に公開 URL へアクセス

## スマホで使う

### iPhone

- Safari で公開 URL を開く
- 共有メニュー
- `ホーム画面に追加`

### Android

- Chrome で公開 URL を開く
- `ホーム画面に追加` または `インストール`

## 補足

- PWA は `https://` で開いたときに有効です
- ローカルで `file://` 直開きした場合は、ホーム画面追加やオフライン動作が一部効きません
- 公開後に修正したいときは、ファイルを直して `git push` すれば更新されます
