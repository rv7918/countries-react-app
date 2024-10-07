import {
  screen,
  render,
  cleanup,
  act,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchViewModel from "./SearchViewModel";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "../../container/App";

describe("Search tests", () => {
  afterEach(() => {
    cleanup();
  });

  const renderSearch = (
    <BrowserRouter>
      <SearchViewModel />
    </BrowserRouter>
  );

  it("Should test the components does not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(renderSearch);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should test title", () => {
    render(renderSearch);
    const title = screen.getByText(/Search/i);
    expect(title).toBeInTheDocument();
  });

  it("Should test input and submit", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const inputBox = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(inputBox, { target: { value: "Japan" } });
    expect(inputBox.value).toBe("Japan");
    const submitBtn = screen.getByText(/submit/i);
    fireEvent.click(submitBtn);
    const populationText = await screen.findByText("Japan");
    expect(populationText).toBeInTheDocument();
  });
});
