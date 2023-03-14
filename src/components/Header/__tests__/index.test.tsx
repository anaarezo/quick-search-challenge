import { render, screen } from "@testing-library/react";

import App from "../../../App";

describe("Quick Search --- Header", () => {
  const setup = () => {
    const utils = render(<App />);
    const header = screen.getByTestId("headerContent");
    return {
      header,
      ...utils,
    };
  };

  it("Should be rendered", () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });
});
