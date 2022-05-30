import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  it("has a number add two button", () => {
    render(<Counter />);
    screen.getByText("0");
    screen.getByText("1");
    screen.getByText("-1");
  });
  it("increase", () => {
    render(<Counter />);
    const number = screen.getByText("0");
    const plusButton = screen.getByText("+1");

    fireEvent.click(plusButton);
    expect(number.textContent).toBe("2");
  });
  it("decrease", () => {
    render(<Counter />);
    const number = screen.getByText("0");
    const minusButton = screen.getByText("-1");

    fireEvent.click(minusButton);
    expect(number.textContent).toBe("-2");
  });
});
