import {
  screen,
  render,
  cleanup,
  act,
  fireEvent,
} from "@testing-library/react";
import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import GridViewList from "./GridViewList";
import { BrowserRouter } from "react-router-dom";
import { mainData } from "../../shared/SharedData";

describe("GridViewList tests", () => {
  afterEach(() => {
    cleanup();
  });

  const commonName = /Grenada/i;

  const renderComponent = (
    <BrowserRouter>
      <GridViewList gridData={mainData} />
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

  it("Should show detail onClick", async () => {
    act(() => {
      render(renderComponent);
    });

    const countryName = await screen.findByText(commonName);
    fireEvent.click(countryName);
    const fullName = commonName;
    expect(await screen.findByText(fullName)).toBeInTheDocument();
  });
});
