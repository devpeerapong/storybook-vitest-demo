import { composeStories } from "@storybook/react";
import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as stories from "./App.stories";

const { Default } = composeStories(stories);

describe("App", () => {
  test("default counter with 0", async () => {
    await Default.run();

    expect(screen.getByText("0")).toBeVisible();
  });

  test("increment to 1 if click Increment button", async () => {
    await Default.run();

    await userEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByText("1")).toBeVisible();
  });

  test("decrement to -1 if click Decrement button", async () => {
    await Default.run();

    await userEvent.click(screen.getByRole("button", { name: "Decrement" }));
    expect(screen.getByText("-1")).toBeVisible();
  });
});
