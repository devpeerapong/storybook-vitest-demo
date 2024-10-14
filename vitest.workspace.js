import { defineWorkspace } from "vitest/config";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    test: {
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        headless: true,
        // https://playwright.dev
        providerOptions: {},
      },
    },
  },
  {
    extends: "vite.config.ts",
    plugins: [storybookTest()],
    test: {
      name: "storybook",
      browser: {
        enabled: true,
        name: "chromium",
        provider: "playwright",
        headless: true,
      },
      include: ["**/*.stories.tsx"],
      setupFiles: ["./.storybook/vitest.setup.ts"],
    },
  },
]);
