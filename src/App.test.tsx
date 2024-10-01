import { screen, render } from "@testing-library/react";

import App from "./App";

describe("App tests", () => {
  it("Should render text", () => {
    render(<App />);
    const textFromScreen = screen.findByText("Main app");
    expect(textFromScreen).toBeTruthy();
  });
});
