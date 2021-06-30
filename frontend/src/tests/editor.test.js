import React from "react";
import Editor from "../pages/Editor.dashboard";
import { getByTestId, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;

describe("Testing Editor dashboard", () => {
  beforeEach(() => {
    container = render(
      
        <Editor/>
      
    ).container;
  });

  it("should render Editor dashboard", () => {
    expect(getByTestId(container, "div-tag")).toBeTruthy();
  });

  
});
