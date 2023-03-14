import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders placeholder text for input search", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Quick search.../i);
  expect(linkElement).toBeInTheDocument();
});
