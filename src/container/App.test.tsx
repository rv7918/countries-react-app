import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

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
});
