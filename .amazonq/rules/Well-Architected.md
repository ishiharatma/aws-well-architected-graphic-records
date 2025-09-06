# AWS Well-Architected Framework グラフィックレコーディング風インフォグラフィック変換プロンプト

バージョン：V5

## 目的
AWS Well-Architected FrameworkをAWS初心者～中級者向けにわかりやすくするためにグラフィックレコーディング風インフォグラフィック(以下、グラレコと表記)を作成します。

AWS Well-Architected Frameworkは以下のホワイトペーパーを参照します。
利用可能な場合は、MCPサーバを利用して正しい情報を参照してください。

- Operational Excellence
  - https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html
- Security
  - https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html
- Reliability
  - https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html
- Performance
  - https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html
- Cost Optimization
  - https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html
- Sustainability
  - https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html

グラレコ対象は、各柱のベストプラクティスです。SUS01-BP01という番号がついたものが対象です。

## グラレコの作成方法

以下の内容を、**大きなFont Awesomeアイコン**と**手書き風の吹き出し**を活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換してください。各カードに1つの大きなアイコンを配置し、小さなインラインアイコンを積極的に活用して情報を視覚的にわかりやすく表現します。

## デザイン仕様
### 1. カラースキーム
```
<palette>
<color name='UI/UX-1' rgb='1B6C8C' r='26' g='108' b='140' />
<color name='UI/UX-2' rgb='BF8136' r='191' g='129' b='53' />
<color name='UI/UX-3' rgb='F2E8E4' r='242' g='231' b='227' />
<color name='UI/UX-4' rgb='260101' r='38' g='0' b='0' />
<color name='UI/UX-5' rgb='BF5656' r='191' g='86' b='86' />
</palette>
```

### 2. グラフィックレコーディング要素（改良版）
- 全体を白背景（#FFF8F5）のキャンバス上に配置
- **各カードに1つの特大サイズのテーマアイコン**を配置（fa-5x程度）
- **カード内のコンテンツは小さなアイコン付きリスト形式**で構造化
- **手書き風の吹き出し**でポイントや補足情報を追加
- 内容を複数のセクションに分け、カード形式で整理
- キーワードをタグ形式で視覚的に強調
- コードサンプルはプレビュー形式で表示
- 関連する概念をつなぐ視覚的な要素（矢印や線）
- 各カードをアニメーションで強調（任意の部分に適用）
- カード内部の情報量を増やし、小さなアイコンで視覚的に整理

### 3. タイポグラフィ
  - タイトル：36px、#333333（テキスト色）、太字、特大関連アイコン付き（fa-6x以上）
  - カードタイトル：24px、#555555、大きめアイコン付き（fa-5x）
  - リスト見出し：18px、#333333
  - リスト項目：16px、#333333、小さなアイコン付き
  - タグ：16px、#333333、背景色付き
  - 本文：16px、#333333、行間1.5
  - コードプレビュー：14px、等幅フォント、背景色付き
  - 吹き出し内テキスト：手書き風フォント、15px、#333333
  - 日付や補足：14px、#777777
  - フォント指定：
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```

### 4. レイアウト（改良版）
  - 全体：**4カラム構成**（レスポンシブ対応）
  - ヘッダー：超大型アイコン付きタイトル（fa-7x）＋日付
  - 各カード：1つの大きなアイコン＋リスト形式のコンテンツ＋吹き出し
  - カード内部：構造化されたリスト形式で情報を整理
  - コードプレビュー：等幅フォント、背景色付きのプレビュー形式
  - 余白：視認性を高めるための十分な余白を確保
  - 横幅：100%（最大2000px程度でセンタリング）

### 5. 吹き出しとタグ表現
- **手書き風の吹き出し**：3種類のバリエーション（標準・バリエーション1・バリエーション2）
- **位置バリエーション**：上部/左右/下部からの吹き出しでレイアウトに変化
- **タグ表現**：キーワードやコード例をタグ風のデザインでハイライト
- **手書きフォント**：「Yomogi」などの日本語手書きフォントを使用
- **アイコン装飾**：吹き出し内にも小さなアイコンを配置

### 6. アニメーション効果
- **各カードの大型アイコンにアニメーション**（fa-beat-fade, fa-bounce, fa-flip等）
- カードの出現時のフェードインスケールアニメーション
- 重要キーワード出現時のハイライト効果
- 背景色の変化アニメーション（ホバー時）
- スクロールに連動したカードの出現効果

## アイコン活用ガイドライン（改良版）
- カードごとの大型アイコン（1つのみ）：
  - メインコンセプト：**fa-5x〜fa-7x**（カードの中心に配置）
  
- リスト項目の小型アイコン：
  - インラインアイコン：**fa-lg**（テキストに合わせたサイズ）
  - 概念別の推奨アイコン：
    - 恋愛・愛：fa-heart, fa-heart-crack, fa-kiss, fa-hand-holding-heart
    - 人間関係：fa-people-arrows, fa-handshake, fa-users, fa-user-group
    - 感情：fa-face-smile, fa-face-sad-tear, fa-face-angry, fa-face-surprise
    - 質問：fa-circle-question, fa-question, fa-magnifying-glass
    - 時間・プロセス：fa-clock, fa-hourglass, fa-calendar, fa-timeline
    - コミュニケーション：fa-comments, fa-message, fa-comment-dots
    - 思考・アイデア：fa-brain, fa-lightbulb, fa-thought-bubble
    - ポジティブ要素：fa-thumbs-up, fa-check, fa-circle-check
    - ネガティブ要素：fa-thumbs-down, fa-ban, fa-triangle-exclamation
    - 方向性：fa-arrow-right, fa-arrow-left, fa-arrow-up, fa-arrow-down
    - 関係性：fa-link, fa-handshake, fa-code-branch, fa-network-wired
    - プログラミング：fa-code, fa-terminal, fa-file-code, fa-laptop-code
    - 設定：fa-gear, fa-sliders, fa-screwdriver-wrench, fa-tools
    - 情報：fa-info-circle, fa-circle-info, fa-book, fa-clipboard
    - 使用例：fa-code, fa-terminal, fa-laptop, fa-mobile

## HTML/CSS実装のポイント（改良版）
```css
/* カードスタイル */
.section-card {
  flex: 1;
  min-width: 220px;
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

/* カード内アイコンコンテナ */
.mega-icon-container {
  text-align: center;
  margin: 15px 0;
}

/* カードコンテンツ */
.card-content {
  padding: 0 10px 15px;
}

/* キーワードリスト */
.keyword-list {
  margin: 15px 0;
  padding: 0;
  list-style-type: none;
}

.keyword-list li {
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
}

.keyword-list li i {
  margin-right: 8px;
  color: var(--ui-color-2);
  min-width: 16px;
}

/* キーワードタグ */
.keyword-tag {
  background-color: var(--ui-color-3);
  color: var(--ui-color-4);
  padding: 3px 8px;
  border-radius: 5px;
  margin-right: 5px;
  display: inline-block;
  font-weight: bold;
}

/* 手書き風吹き出し */
.speech-bubble {
  position: relative;
  background: #fff;
  border: 3px solid var(--ui-color-1);
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px 5px;
  font-family: 'Yomogi', cursive;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  transform: rotate(-1deg);
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 20px;
  border-width: 12px 8px 0;
  border-style: solid;
  border-color: var(--ui-color-1) transparent;
  display: block;
  width: 0;
}

/* 吹き出しバリエーション */
.speech-bubble.right::after {
  left: auto;
  right: 20px;
  transform: rotate(15deg);
}

.speech-bubble.top::after {
  bottom: auto;
  top: -13px;
  border-width: 0 8px 12px;
  transform: rotate(-5deg);
}

.speech-bubble.variant-1 {
  background: #FFF9E3;
  border-color: var(--ui-color-2);
  transform: rotate(1deg);
}

.speech-bubble.variant-1::after {
  border-color: var(--ui-color-2) transparent;
}

.speech-bubble.variant-2 {
  background: #FFE9E9;
  border-color: var(--ui-color-5);
  transform: rotate(-2deg);
}

.speech-bubble.variant-2::after {
  border-color: var(--ui-color-5) transparent;
}

/* 手書き文字 */
.handwritten {
  font-family: 'Yomogi', cursive;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
}

/* コードプレビュー */
pre {
  background: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 10px;
  overflow-x: auto;
}

/* レスポンシブ対応 */
@media (max-width: 1600px) {
  .section-card {
    min-width: 280px;
  }
}

@media (max-width: 1200px) {
  .section-card {
    min-width: 320px;
  }
}

@media (max-width: 900px) {
  .section-card {
    min-width: 380px;
  }
}

@media (max-width: 768px) {
  .section-layout {
    flex-direction: column;
  }
  
  .section-card {
    width: 100%;
    min-width: auto;
  }
}
```

## 全体的な指針（改良版）
- **各カードに1つの大きなアイコン**を配置し、小さなインラインアイコンを積極的に活用
- **リスト形式で情報を構造化**し、視認性と理解しやすさを向上
- **手書き風の吹き出し**でポイントや補足情報を追加
- **キーワードはタグ形式**でハイライトし、視覚的に強調
- **コードサンプルはプレビュー形式**で表示し、実用性を高める
- 情報の関連性を視覚的な要素（矢印や線）で表現
- アニメーションで重要な要素を強調
- 全体の統一感を保ちながら、変化をつけて単調さを避ける
- 日本語表記を基本とし、必要に応じて英語キーワードも活用

## サンプルHTMLコード（改良版）
```html
<!-- カード例 -->
<div class="section-card fade-in-scale">
  <div class="mega-icon-container">
    <i class="fa-solid fa-code fa-5x" style="color: var(--ui-color-1); animation: fa-bounce 2s;" aria-hidden="true"></i>
    <h2>セクションタイトル</h2>
  </div>
  
  <div class="card-content">
    <ul class="keyword-list">
      <li>
        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
        <span>リスト項目1: <span class="keyword-tag">キーワード</span></span>
      </li>
      <li>
        <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
        <span>リスト項目2</span>
      </li>
      <li>
        <i class="fa-solid fa-code" aria-hidden="true"></i>
        <span>コード例:</span>
      </li>
    </ul>
    
    <pre>
const sample = {
  title: 'サンプルコード',
  description: 'プレビュー形式で表示'
};</pre>
  </div>
  
  <div class="speech-bubble">
    <span class="handwritten">
      <i class="fa-solid fa-lightbulb fa-lg" style="color: var(--ui-color-2);"></i>
      補足情報や解説を
      <br>
      手書き風の吹き出しで表現！
      <br>
      <span class="keyword-tag">重要ポイント</span>
    </span>
  </div>
</div>
```

## 変換する文章/記事
ユーザーが入力（添付）

## HTML出力ディレクトリ
1. 「docs」内に保存してください。
2. AWS Well-Architected フレームワークの柱にしたがって、それぞれ下記サブフォルダ（これを柱フォルダと表記）に格納します。
  - 01-operational-excellence
  - 02-security
  - 03-reliability
  - 04-performance-efficiency
  - 05-cost-optimization
  - 06-sustainability
3. 上記、柱フォルダ内にはベストプラクティスのサブフォルダ（カテゴリフォルダと表記）を作成します。（例：02-security）
 - 02-security
    - 01-security
    - 02-iam
    - 03-detection
    - 04-infrastructure-protection
    - 05-data-protection
    - 06-incident-response
    - 07-application-security
4. カテゴリフォルダには、ベストプラクティスごとにファイルを分離して格納します。ファイル名は「SEC01-BP01.html」のようにします。

5. カテゴリフォルダには、ベストプラクティスの分類（例：SEC01）ごとに、一覧化したHTMLファイル（SEC01.html）を作成します。これをカテゴリ一覧HTMLといいます。HTML内ではベストプラクティスをカードで表示し、クリックすることで各ベストプラクティスのHTML（SEC01-BP01.html）に遷移できるようにします。

6. 柱フォルダには、カテゴリを一覧化したHTMLファイル（01-security.html）を作成します。これをカテゴリ一覧HTMLといいます。HTML内では各カテゴリをカードで表示し、クリックすることで、カテゴリ一覧のHTMLに遷移できるようにします。

## ベストプラクティスのグラレコの構成

- ヘッダ部分に公式ドキュメントへのリンクを付けてください。
- 「このベストプラクティスを活用しない場合のリスクレベル」がある場合は、最初に「リスクレベル」というカードで表示してください。

## CSS適用ルール
1. 共通のスタイルシート「style.css」を定義して、各HTMLでは以下のようにして読み込んでください。
<link rel="stylesheet" type="text/css" href="../css/style.css">

2. ページ個別のスタイルを適用する場合のみ、HTMLファイル内にスタイルを定義してください

3. 各ページの<header></header>は、class="header"を使用すること。

## 作成後のチェックリスト

以下のチェックを実施し、完成しているか確認すること。

### 1. 内容の完全性チェック
• [ ] 指示したベストプラクティスの範囲がすべて完了しているか？
• [ ] AWS公式ドキュメントの内容のみを基にした内容か？
• [ ] 独自の解釈や追加は行っていないか？
• [ ] 各ベストプラクティスにリスクレベルが記述されているか？
• [ ] リスクレベルの内容が完全に記載されているか？（途中で切れていないか）

### 2. 構造・フォーマットチェック
• [ ] ヘッダー部分に class="header" が適用されているか？
• [ ] 公式ドキュメントへのリンクがヘッダーに含まれているか？
• [ ] CSSファイルが正しくリンクされているか？（../css/style.css）
• [ ] ファイル名が正しい命名規則に従っているか？（例：OPS05-BP01.html）
• [ ] 適切なフォルダ構造に保存されているか？

### 3. HTMLマークアップチェック
• [ ] HTMLの基本構造が正しいか？（DOCTYPE、html、head、body）
• [ ] 必要なメタタグが含まれているか？（charset、viewport等）
• [ ] Font AwesomeとGoogleフォントが正しく読み込まれているか？
• [ ] 各カードに大型アイコン（fa-5x以上）が1つ配置されているか？
• [ ] リスト項目に小さなアイコンが適切に配置されているか？

### 4. デザイン・レイアウトチェック
• [ ] 指定されたカラーパレットが使用されているか？
• [ ] 手書き風の吹き出しが適切に配置されているか？
• [ ] キーワードタグが視覚的に強調されているか？
• [ ] レスポンシブデザインが適用されているか？
• [ ] アニメーション効果が適切に設定されているか？

### 5. コンテンツ品質チェック
• [ ] コードサンプルは公式に記載されている場合のみ記述しているか？
• [ ] 日本語表記が適切に使用されているか？
• [ ] 技術用語の説明が分かりやすいか？
• [ ] 情報の階層構造が明確か？

### 6. ファイル完全性チェック
• [ ] HTMLファイルが途中で切れていないか？
• [ ] 閉じタグが適切に記述されているか？
• [ ] 文字化けや表示崩れがないか？
• [ ] ブラウザで正常に表示されるか？

### 7. ナビゲーション・リンクチェック
• [ ] カテゴリ一覧HTMLが作成されているか？
• [ ] 各ベストプラクティスへのリンクが正しく設定されているか？
• [ ] 柱フォルダのカテゴリ一覧HTMLが作成されているか？
• [ ] 相互リンクが適切に機能するか？

### 8. 最終確認
• [ ] すべてのファイルが指定されたディレクトリ構造に配置されているか？
• [ ] ファイルサイズが適切か？（極端に小さくないか）
• [ ] 作成したファイル数が指示された数と一致しているか？
• [ ] バックアップが適切に取られているか？
