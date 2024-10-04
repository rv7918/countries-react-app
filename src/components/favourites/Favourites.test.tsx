import { cleanup, act } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import Favourites from "./Favourites";
import { BrowserRouter } from "react-router-dom";

describe("GridViewModel tests", () => {
  afterEach(() => {
    cleanup();
  });

  const renderComponent = (
    <BrowserRouter>
      <Favourites />
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
});
