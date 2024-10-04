import {
  screen,
  render,
  cleanup,
  act,
  fireEvent,
} from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import GridViewModel from "./GridViewModel";
import { BrowserRouter } from "react-router-dom";

describe("GridViewModel tests", () => {
  afterEach(() => {
    cleanup();
  });

  const commonName = /South Georgia/i;

  it("Should test the components does not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(<GridViewModel />);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should show the data from the table", async () => {
    act(() => {
      render(
        <BrowserRouter>
          <GridViewModel />
        </BrowserRouter>
      );
    });

    const countryName = await screen.findByText(commonName);
    expect(countryName).toBeInTheDocument();
  });

  it("Should show detail onClick", async () => {
    act(() => {
      render(
        <BrowserRouter>
          <GridViewModel />
        </BrowserRouter>
      );
    });

    const countryName = await screen.findByText(commonName);
    fireEvent.click(countryName);
    const fullName = /South Georgia and the South Sandwich Islands/i;
    expect(await screen.findByText(fullName)).toBeInTheDocument();
  });
});
