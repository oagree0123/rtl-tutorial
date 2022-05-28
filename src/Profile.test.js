import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="oagree" name="오예준" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("show the props correctly", () => {
    render(<Profile username="oagree" name="오예준" />);
    // text를 가진 엘리먼트가 있는지 확인
    screen.getByText("oagree");
    screen.getByText("(오예준)");
    screen.getByText(/오/);
  });
});
