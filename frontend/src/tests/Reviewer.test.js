import React from "react";
import Reviewer from "../components/reviwer/Reviewer";
import { getByTestId, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;

describe("Testing Reviewer", () => {
  beforeEach(() => {
    container = render(
      <Router>
        <Reviewer />
      </Router>
    ).container;
  });

  it("should render Reviewer", () => {
    expect(getByTestId(container, "div-tag")).toBeTruthy();
  });

  it("should render Research papers", () => {
    expect(getByTestId(container, "button")).toBeTruthy();
    expect(getByTestId(container, "button").innerHTML).toBe("Reasearch Paper");
  });

  it("should render Link", () => {
    expect(getByTestId(container, "button1-tag")).toBeTruthy();
    expect(getByTestId(container, "button1-tag").innerHTML).toBe("Workshop");
  });
});
