/* eslint-disable testing-library/prefer-screen-queries */

import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { page, userEvent } from "@vitest/browser/context";

import { ToggleButton } from "./ToggleButton";

describe("ToggleButton", () => {
  test("should initial with Off", async () => {
    render(<ToggleButton />);
    await expect.element(page.getByText("Off")).toBeInTheDocument();
  });

  test("when click, changes to On ", async () => {
    render(<ToggleButton />);

    await userEvent.click(page.getByRole("button", { name: "Off" }));
    await expect.element(page.getByText("On")).toBeInTheDocument();
  });

  test("when On and click, changes to Off ", async () => {
    render(<ToggleButton />);

    await userEvent.click(page.getByRole("button", { name: "Off" }));
    await userEvent.click(page.getByRole("button", { name: "On" }));
    await expect.element(page.getByText("Off")).toBeInTheDocument();
  });
});
