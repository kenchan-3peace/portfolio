# Portfolio Website - Kentaro Hayashi

## 概要

このリポジトリは、QA/テストエンジニア及びフロントエンドエンジニアである林 健太郎（Kentaro Hayashi）のポートフォリオWebサイトです。個人の経歴、実績、およびスキルを紹介するシンプルなシングルページアプリケーション（SPA）として実装されています。

## 技術スタック

このポートフォリオサイトは、以下の技術を使用して構築されています：

- **HTML5** - ページ構造とコンテンツ
- **CSS3** - スタイリングとレスポンシブデザイン
- **JavaScript (jQuery)** - インタラクティブ機能とアニメーション
- **Google Fonts** - カスタムフォント（Alfa Slab One、Kosugi Maru）

## プロジェクト構成

```
portfolio/
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # JavaScriptファイル（スクロールアニメーション）
├── image/              # 画像アセット
│   ├── top-img.png     # トップページ画像
│   ├── myicon.png      # プロフィールアイコン
│   ├── socialtech.png  # 作品サンプル1
│   ├── Myprofile.png   # 作品サンプル2
│   ├── hairtech.png    # 作品サンプル3
│   └── ...             # SNSロゴなど
└── README.md           # このファイル
```

## 主な機能

### 1. レスポンシブデザイン
- デスクトップとモバイルデバイスに対応
- モバイル用のハンバーガーメニュー実装

### 2. セクション構成
- **ABOUT** - 経歴とスキルの紹介
- **WORK** - 実績とポートフォリオ作品の展示
- **CONTACT** - お問い合わせフォーム

### 3. スクロールアニメーション
- スクロールに応じたフェードインエフェクト
- スムーズなユーザー体験

### 4. お問い合わせフォーム
- StaticFormsを使用したフォーム送信機能
- お名前、メールアドレス、メッセージの入力

### 5. SNS連携
- Twitter
- Wantedly
- LinkedIn

## 使用方法

### ローカルでの実行

1. リポジトリをクローン：
```bash
git clone https://github.com/kenchan-3peace/portfolio.git
cd portfolio
```

2. ブラウザで `index.html` を開く：
```bash
# macOSの場合
open index.html

# Linuxの場合
xdg-open index.html

# Windowsの場合
start index.html
```

または、任意のローカルWebサーバーを使用：
```bash
# Pythonを使用する場合
python -m http.server 8000
# ブラウザで http://localhost:8000 にアクセス

# Node.jsのhttp-serverを使用する場合
npx http-server
```

### デプロイ

このサイトは静的サイトであるため、以下のプラットフォームに簡単にデプロイできます：

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- その他の静的サイトホスティングサービス

## カスタマイズ

### 個人情報の変更

`index.html`ファイル内の以下の情報を編集してください：

- サイトタイトル（line 8）
- メタディスクリプション（line 10）
- プロフィール情報（line 68-77）
- SNSリンク（line 30-32, 41-43, 132-134）
- お問い合わせフォームの設定（line 106-120）

### スタイルの変更

`style.css`ファイルでカラースキーム、フォント、レイアウトなどをカスタマイズできます。

### 作品の追加・変更

ABOUTセクション（line 87-97）内の作品画像とタイトルを編集して、独自のポートフォリオ作品を追加できます。

## 作者について

**林 健太郎（Kentaro Hayashi）**  
Codona Style

- 1981年生まれ
- 20年以上のIT業界経験
- QA/テストエンジニアとしてモバイル端末、Webシステム、アプリケーションの検証を担当
- 2021年7月よりフリーランスとして活動
- QA/テストエンジニア業務に加え、Web制作も展開中

## 連絡先

お仕事のご依頼やお問い合わせは、以下の方法でご連絡ください：

- **Website**: [ポートフォリオサイト](https://kenchan-3peace.github.io/portfolio/)
- **Email**: k.hayashi.codona@gmail.com
- **Twitter**: [@CodonaStyle](https://twitter.com/CodonaStyle)
- **Wantedly**: [プロフィール](https://www.wantedly.com/id/kentarou_hayashi_h)
- **LinkedIn**: [kenchan3peace](https://www.linkedin.com/in/kenchan3peace/)

## ライセンス

© 2023 kentaro hayashi. All Rights Reserved.

---

**注意**: このREADMEは、リポジトリについての説明として作成されました。プロジェクトの詳細やアップデート情報については、適宜更新してください。
