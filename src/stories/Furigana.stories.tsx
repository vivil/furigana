import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Furigana, FuriganaProvider, useFurigana } from '../components';

const meta: Meta<typeof Furigana> = {
  title: 'Components/Furigana',
  component: Furigana,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'メインテキスト（漢字等）',
    },
    furigana: {
      control: 'text',
      description: 'ふりがな（読み仮名）',
    },
    visible: {
      control: 'boolean',
      description: 'ふりがなを表示するかどうか',
    },
    className: {
      control: 'text',
      description: '追加のCSSクラス名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '吾輩',
    furigana: 'わがはい',
    visible: true,
  },
};

export const WithoutFurigana: Story = {
  args: {
    children: '吾輩',
    furigana: 'わがはい',
    visible: false,
  },
  name: 'ふりがなを非表示',
};

export const LongText: Story = {
  args: {
    children: '名前',
    furigana: 'なまえ',
    visible: true,
  },
  name: '基本的なふりがな',
};

export const NoReading: Story = {
  args: {
    children: 'ねこ',
    visible: true,
  },
  name: 'ふりがななし',
};

export const MultipleFurigana: Story = {
  render: () => (
    <div style={{ fontSize: '24px', lineHeight: '2.5' }}>
      <Furigana furigana="わがはい">吾輩</Furigana>
      は
      <Furigana furigana="ねこ">猫</Furigana>
      である。
      <Furigana furigana="なまえ">名前</Furigana>
      はまだ
      <Furigana furigana="な">無</Furigana>
      い。
    </div>
  ),
  name: '「吾輩は猫である」冒頭',
};

const ToggleExampleComponent = () => {
  const [visible, setVisible] = useState(true);
  
  return (
    <div style={{ fontSize: '20px', lineHeight: '2.5' }}>
      <div style={{ marginBottom: '16px' }}>
        <label>
          <input
            type="checkbox"
            checked={visible}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVisible(e.target.checked)}
          />
          ふりがなを表示
        </label>
      </div>
      <div>
        <Furigana furigana="どこ" visible={visible}>何処</Furigana>で
        <Furigana furigana="う" visible={visible}>生</Furigana>れたか
        <Furigana furigana="とん" visible={visible}>頓</Furigana>と
        <Furigana furigana="けんとう" visible={visible}>見当</Furigana>が
        つかぬ。
      </div>
    </div>
  );
};

export const ToggleExample: Story = {
  render: () => <ToggleExampleComponent />,
  name: '「吾輩は猫である」トグルデモ',
};

export const LongPassage: Story = {
  render: () => (
    <div style={{ fontSize: '18px', lineHeight: '2.2', maxWidth: '600px', padding: '20px' }}>
      <p>
        <Furigana furigana="わがはい">吾輩</Furigana>は
        <Furigana furigana="ねこ">猫</Furigana>である。
        <Furigana furigana="なまえ">名前</Furigana>はまだ
        <Furigana furigana="な">無</Furigana>い。
      </p>
      <p>
        <Furigana furigana="どこ">何処</Furigana>で
        <Furigana furigana="う">生</Furigana>れたか
        <Furigana furigana="とん">頓</Furigana>と
        <Furigana furigana="けんとう">見当</Furigana>が
        つかぬ。
        <Furigana furigana="なん">何</Furigana>でも
        <Furigana furigana="うすぐら">薄暗</Furigana>い
        <Furigana furigana="じめじめ">じめじめ</Furigana>した
        <Furigana furigana="ところ">所</Furigana>で
        <Furigana furigana="ニャーニャー">ニャーニャー</Furigana>
        <Furigana furigana="な">泣</Furigana>いていた
        <Furigana furigana="こと">事</Furigana>だけは
        <Furigana furigana="きお">記憶</Furigana>している。
      </p>
    </div>
  ),
  name: '長文サンプル（冒頭部分）',
};

const ContextExampleContent = () => {
  const { visible, toggleFurigana } = useFurigana();
  
  return (
    <div style={{ fontSize: '20px', lineHeight: '2.5' }}>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={toggleFurigana}
          style={{ 
            padding: '8px 16px', 
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          ふりがなを{visible ? '非表示' : '表示'}にする
        </button>
      </div>
      <div>
        <p>
          <Furigana furigana="わがはい">吾輩</Furigana>は
          <Furigana furigana="ねこ">猫</Furigana>である。
          <Furigana furigana="なまえ">名前</Furigana>はまだ
          <Furigana furigana="な">無</Furigana>い。
        </p>
        <p>
          <Furigana furigana="どこ">何処</Furigana>で
          <Furigana furigana="う">生</Furigana>れたか
          <Furigana furigana="とん">頓</Furigana>と
          <Furigana furigana="けんとう">見当</Furigana>が
          つかぬ。
        </p>
      </div>
    </div>
  );
};

export const ContextExample: Story = {
  render: () => (
    <FuriganaProvider>
      <ContextExampleContent />
    </FuriganaProvider>
  ),
  name: 'Context使用例（一括制御）',
};

export const MixedControlExample: Story = {
  render: () => (
    <FuriganaProvider defaultVisible={true}>
      <div style={{ fontSize: '18px', lineHeight: '2.2', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <p>
            <strong>Context制御（全体に影響）:</strong>
          </p>
          <ContextExampleContent />
        </div>
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <p>
            <strong>個別制御（Contextの設定を上書き）:</strong>
          </p>
          <div>
            <Furigana furigana="わがはい" visible={true}>吾輩</Furigana>は
            <Furigana furigana="ねこ" visible={false}>猫</Furigana>である。
            （「吾輩」は常に表示、「猫」は常に非表示）
          </div>
        </div>
      </div>
    </FuriganaProvider>
  ),
  name: 'Context + 個別制御の組み合わせ',
};
