import { screen, render, act, cleanup } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should test the component and not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(<Header />);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should render the correct nav title", () => {
    render(<Header />);
    const navTitle = screen.getByText("React Countries");
    expect(navTitle).toBeInTheDocument();
  });
});
