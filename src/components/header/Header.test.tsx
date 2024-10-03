import { screen, render, act, cleanup } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header tests", () => {
  afterEach(() => {
    cleanup();
  });

  const renderHeader = (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  it("Should test the component and not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(renderHeader);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should render the correct nav title", () => {
    render(renderHeader);
    const navTitle = screen.getByText("React Countries");
    expect(navTitle).toBeInTheDocument();
  });
});
