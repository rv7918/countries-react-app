import { screen, render, cleanup, act } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import GridDetail from "./GridDetail";
import { BrowserRouter } from "react-router-dom";
import { rowDataShared } from "../../../shared/SharedData";

describe("GridViewList tests", () => {
  afterEach(() => {
    cleanup();
  });

  const fullName = /South Georgia and the South Sandwich Islands/i;

  const renderComponent = (
    <BrowserRouter>
      <GridDetail rowData={rowDataShared} close={false} setClose={() => {}} />
    </BrowserRouter>
  );

  it("Should test the components does not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(renderComponent);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should show full title", () => {
    render(renderComponent);
    expect(screen.queryByText(fullName)).toBeInTheDocument();
  });

  it("Should show region", () => {
    render(renderComponent);
    expect(screen.queryByText(/antarctic/i)).toBeInTheDocument();
  });

  it("Should show population", () => {
    render(renderComponent);
    expect(screen.queryByText(/30/i)).toBeInTheDocument();
  });

  it("Should show Languages", () => {
    render(renderComponent);
    expect(screen.queryByText(/english/i)).toBeInTheDocument();
  });
});
