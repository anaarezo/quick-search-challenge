import { fireEvent, render, screen } from "@testing-library/react";

import App from "../../../App";

describe("Quick Search --- ResultsList", () => {
  const setup = () => {
    const utils = render(<App />);
    const input = screen.getByTestId("inputSearch");

    return {
      input,
      ...utils,
    };
  };

  it("Should be rendered with skeleton structure", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Harry Potter" } });
    expect(input).toBeTruthy();

    screen.getByTestId("SkeletonTitle");
  });

  it("Should be When the book is not found", async () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "asdfasdfasdfa" } });
    expect(input).toBeTruthy();

    const emptyElement = await screen.findByText("There's no result to this search.");
    expect(emptyElement).toBeInTheDocument();
  });
});
