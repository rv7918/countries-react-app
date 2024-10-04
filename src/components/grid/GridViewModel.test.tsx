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
  const fullName = /South Georgia and the South Sandwich Islands/i;

  const renderComponent = (
    <BrowserRouter>
      <GridViewModel />
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

  it("Should show the data from the table", async () => {
    act(() => {
      render(renderComponent);
    });

    const countryName = await screen.findByText(commonName);
    expect(countryName).toBeInTheDocument();
  });

  it("Should close detail onClick", async () => {
    act(() => {
      render(renderComponent);
    });
    const countryName = await screen.findByText(commonName);
    fireEvent.click(countryName);
    expect(await screen.findByText(fullName)).toBeInTheDocument();
    const closeBtn = screen.getByText(/close/i);
    fireEvent.click(closeBtn);
    expect(screen.queryByText(fullName)).not.toBeInTheDocument();
  });
});
