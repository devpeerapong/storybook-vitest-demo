import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("should display counter value", () => {
    render(<Counter value={4} />);

    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("should called onChange with increment value", async () => {
    const fn = vi.fn();
    render(<Counter value={4} onChange={fn} />);

    await userEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(fn).toBeCalledWith(5);
  });

  it("should called onChange with decrement value", async () => {
    const fn = vi.fn();
    render(<Counter value={4} onChange={fn} />);

    await userEvent.click(screen.getByRole("button", { name: "Decrement" }));

    expect(fn).toBeCalledWith(3);
  });
});
