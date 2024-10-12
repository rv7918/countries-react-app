import {
  screen,
  render,
  cleanup,
  act,
  fireEvent,
} from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import GridDetail from "./GridDetail";
import { BrowserRouter } from "react-router-dom";
import { rowDataShared } from "../../../shared/SharedData";

const renderComponent = (
  <BrowserRouter>
    <GridDetail rowData={rowDataShared} close={false} setClose={() => {}} />
  </BrowserRouter>
);

describe("GridViewList tests", () => {
  afterEach(() => {
    cleanup();
  });

  const fullName = /South Georgia and the South Sandwich Islands/i;

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

describe("LocalStorage tests for favourites", () => {
  beforeEach(() => {
    localStorage.clear();
    cleanup();
  });

  it("Should test adding favourites localStorage", () => {
    render(renderComponent);
    const favouriteAddBtn = screen.getByText("Favourite");
    fireEvent.click(favouriteAddBtn);
    const item = JSON.parse(localStorage.getItem("favourites"));
    expect(item[0]).toEqual(rowDataShared);
    const deleteBtn = screen.getByText("Delete");
    fireEvent.click(deleteBtn);
    expect(deleteBtn).toBeTruthy();
  });
});
