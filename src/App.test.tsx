import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App tests", () => {
  it("Should render text", () => {
    render(<App />);
    const textFromScreen = screen.getByText("React Countries");
    expect(textFromScreen).toBeInTheDocument();
  });
});
