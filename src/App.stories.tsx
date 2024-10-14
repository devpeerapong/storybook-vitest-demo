import App from "./App";

import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText("0")).toBeVisible();

    await step("Click Increment", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Increment" }));
      await expect(canvas.getByText("1")).toBeVisible();
    });

    await step("Click Decrement", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Decrement" }));
      await expect(canvas.getByText("0")).toBeVisible();
    });
  },
};
