import { FuriganaProps } from './Furigana.types';
import styles from './Furigana.module.scss';
import { useFurigana } from './useFurigana';

/**
 * ふりがな（ルビ）を表示するReactコンポーネント
 * 
 * @example
 * ```tsx
 * <Furigana furigana="にほん">日本</Furigana>
 * ```
 */
export const Furigana = ({
  children,
  furigana,
  visible,
  className,
  style,
}: FuriganaProps) => {
  // Contextからグローバルな表示設定を取得（Provider外では無視）
  let contextVisible = true;
  try {
    const context = useFurigana();
    contextVisible = context.visible;
  } catch {
    // FuriganaProvider外で使用された場合は何もしない
  }

  // 優先順位: visible prop > Context設定 > デフォルト(true)
  const shouldShowReading = visible !== undefined ? visible : contextVisible;

  const classNames = [
    styles.furigana,
    !shouldShowReading && styles.noRuby,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // ふりがながない場合は通常のテキストとして表示
  if (!furigana) {
    return (
      <span className={classNames} style={style}>
        {children}
      </span>
    );
  }

  // HTML5のruby要素を使用してセマンティックな構造を提供
  // ただし、CSSでスタイリングを制御
  return (
    <ruby className={classNames} style={style}>
      <span className={styles.text}>{children}</span>
      {shouldShowReading && (
        <rt className={styles.ruby}>{furigana}</rt>
      )}
    </ruby>
  );
};

export default Furigana;
