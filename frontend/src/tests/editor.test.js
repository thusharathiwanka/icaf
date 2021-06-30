import React from "react";
import Welcome  from "../components/Editor.dashboard/welcome";
import { getByTestId, render } from "@testing-library/react";


let container = null;

describe("Testing Editor welcome div", () => {
  beforeEach(() => {
    container = render(
        <Welcome/>
    ).container;
  });
   
    
    
  it("should render welcome div", () => {
    expect(getByTestId(container, "div-tag")).toBeTruthy();
  });

  
});
