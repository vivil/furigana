import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) => {
    // SCSS用の設定を追加（モダンなSass APIを使用）
    config.css = {
      ...(config.css || {}),
      modules: {
        localsConvention: 'camelCase',
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    };
    return config;
  }
};

export default config;
