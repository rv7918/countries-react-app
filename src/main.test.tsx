import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/container/App";
import { BrowserRouter } from "react-router-dom";

describe("Main tests", () => {
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
