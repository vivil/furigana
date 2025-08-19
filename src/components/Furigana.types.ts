import React from 'react';

/**
 * ふりがなコンポーネントのプロパティ
 */
export interface FuriganaProps {
  /** 
   * メインテキスト（漢字等）
   */
  children: string;
  
  /** 
   * ふりがな（読み仮名）
   */
  furigana: string;
  
  /** 
   * ふりがなを表示するかどうか（Context設定を上書き可能）
   * @default Context設定または true
   */
  visible?: boolean;
  
  /** 
   * 追加のCSSクラス名
   */
  className?: string;
  
  /** 
   * インラインスタイル
   */
  style?: React.CSSProperties;
}
