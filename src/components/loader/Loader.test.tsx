import { screen, render, act } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import SuspenseLoader from "./Loader";

describe("Tests for loader", () => {
  it("Should render component without crashing", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(<SuspenseLoader />);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should show the text loading", () => {
    render(<SuspenseLoader />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });
});
