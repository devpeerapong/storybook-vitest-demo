import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  build: {
    // running `storybook build --test` will strip all of the addons, including `addon-coverage`
    // explicitly define disabledAddons here to prevent that
    test: {
      disabledAddons: ["@storybook/addon-docs", "@storybook/addon-essentials/docs"],
    },
  },
};
export default config;
