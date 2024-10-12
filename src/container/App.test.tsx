import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const renderComponent = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe("App tests", () => {
  it("Should render text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const textFromScreen = screen.getByText("React Countries");
    expect(textFromScreen).toBeInTheDocument();
  });

  it("Should render Filter page text", async () => {
    render(renderComponent);
    const filterNav = await screen.findByText("Filter");
    expect(filterNav).toBeInTheDocument();
    fireEvent.click(filterNav);
    expect(filterNav).toBeInTheDocument();
  });

  it("Should render Favourite page text", async () => {
    render(renderComponent);
    const favNav = await screen.findByText("Favourites");
    expect(favNav).toBeInTheDocument();
    fireEvent.click(favNav);
    expect(favNav).toBeInTheDocument();
  });
});
