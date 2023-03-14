import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

describe("Quick Search --- InputSearch", () => {
  const setup = () => {
    const utils = render(<App />);
    const input = screen.getByTestId("inputSearch");
    return {
      input,
      ...utils,
    };
  };

  it("Should be rendered", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  it("Should be typeable", () => {
    const { input } = setup();
    act(() => {
      userEvent.type(input, "Harry Potter");
    });

    const inputTyped = screen.getByDisplayValue("Harry Potter");
    expect(inputTyped).toBeInTheDocument();
  });
});
