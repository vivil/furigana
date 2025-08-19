# @vivil/furigana

日本語テキストにふりがな（ルビ）を表示するReactコンポーネントライブラリ

## 📚 ドキュメント

- **[Storybook - ライブデモとAPI仕様](https://vivil.github.io/furigana/)**
- **[GitHub Repository](https://github.com/vivil/furigana)**

## 特徴

- TypeScript対応
- SCSSでカスタマイズ可能
- レスポンシブデザイン
- トグル機能付き
- Storybook対応
- HTML5 ruby要素を使用してセマンティック

## インストール

```bash
npm install @vivil/furigana
```

## 使用方法

### 基本的な使用方法

```tsx
import { Furigana } from '@vivil/furigana';

function App() {
  return (
    <div>
      <Furigana furigana="わがはい">吾輩</Furigana>は<Furigana furigana="ねこ">猫</Furigana>である。
    </div>
  );
}
```

### ふりがなを非表示にする

```tsx
// 基本的な使用例
<Furigana furigana="にほん">日本</Furigana>

// ふりがなを非表示にする
<Furigana furigana="わがはい" visible={false}>
```

### 複数のふりがなを使用

```tsx
<div>
  <Furigana furigana="わがはい">吾輩</Furigana>は
  <Furigana furigana="ねこ">猫</Furigana>である。
  <Furigana furigana="なまえ">名前</Furigana>はまだ
  <Furigana furigana="な">無</Furigana>い。
</div>
```

### トグル機能の実装

```tsx
function ToggleExample() {
  const [visible, setVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        ふりがなを{visible ? '非表示' : '表示'}
      </button>
      <p>
        <Furigana furigana="どこ" visible={visible}>
          何処
        </Furigana>で
        <Furigana furigana="う" visible={visible}>
          生
        </Furigana>れたか
        <Furigana furigana="とん" visible={visible}>
          頓
        </Furigana>と
        <Furigana furigana="けんとう" visible={visible}>
          見当
        </Furigana>が
        つかぬ。
      </p>
    </div>
  );
}
```

### Contextを使った一括制御

複数のFuriganaコンポーネントを一括で制御したい場合は、`FuriganaProvider`と`useFurigana`フックを使用します。

```tsx
import { FuriganaProvider, useFurigana, Furigana } from '@vivil/furigana';

function ContextExample() {
  const { visible, toggleFurigana } = useFurigana();
  
  return (
    <div>
      <button onClick={toggleFurigana}>
        ふりがなを{visible ? '非表示' : '表示'}
      </button>
      <p>
        <Furigana furigana="わがはい">吾輩</Furigana>は
        <Furigana furigana="ねこ">猫</Furigana>である。
        <Furigana furigana="なまえ">名前</Furigana>はまだ
        <Furigana furigana="な">無</Furigana>い。
      </p>
    </div>
  );
}

function App() {
  return (
    <FuriganaProvider>
      <ContextExample />
    </FuriganaProvider>
  );
}
```

## Props

### Furigana

| プロパティ | 型 | デフォルト | 説明 |
|------------|---|-----------|------|
| `children` | `string` | - | メインテキスト（漢字等） |
| `furigana` | `string` | - | ふりがな（読み仮名） |
| `visible` | `boolean` | Context設定または`true` | ふりがなを表示するかどうか（Context設定を上書き可能） |
| `className` | `string` | - | 追加のCSSクラス名 |
| `style` | `React.CSSProperties` | - | インラインスタイル |

### FuriganaProvider

| プロパティ | 型 | デフォルト | 説明 |
|------------|---|-----------|------|
| `children` | `ReactNode` | - | 子要素 |
| `defaultVisible` | `boolean` | `true` | ふりがな表示の初期状態 |

### useFurigana フック

Context内で使用できるフックで、以下のプロパティを提供します：

| プロパティ | 型 | 説明 |
|------------|---|------|
| `visible` | `boolean` | 現在のふりがな表示状態 |
| `setVisible` | `(show: boolean) => void` | ふりがな表示状態を設定 |
| `toggleFurigana` | `() => void` | ふりがな表示状態を切り替え |

## カスタマイズ

### SCSS変数

```scss
// Colors
$furigana-text-color: #333;
$furigana-ruby-color: #666;

// Typography
$furigana-font-family: inherit;
$furigana-ruby-font-size: 0.5em;
$furigana-ruby-line-height: 1;

// Spacing
$furigana-ruby-margin: 0;
$furigana-ruby-padding: 0;
```

### CSS クラス

```css
.furigana {
  /* ベーススタイル */
}

.furigana__text {
  /* メインテキストのスタイル */
}

.furigana__ruby {
  /* ふりがなのスタイル */
}

.furigana--no-ruby {
  /* ふりがな非表示時のスタイル */
}
```

## 開発

### 開発環境のセットアップ

```bash
npm install
```

### Storybookの起動

```bash
npm run storybook
```

### ビルド

```bash
npm run build
```

### 型チェック

```bash
npm run type-check
```

## デプロイメント

### Storybookドキュメントの公開

このライブラリのStorybookドキュメントは自動的にGitHub Pagesにデプロイされます：

```bash
# 手動でStorybookをビルドして公開する場合
npm run build-storybook
npm run deploy-storybook
```

### GitHub Actions

mainブランチへのプッシュ時に自動的にStorybookが https://vivil.github.io/furigana/ にデプロイされます。

### npmパッケージの公開

```bash
npm run build
npm publish
```

## ライセンス

MIT
