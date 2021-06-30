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
   
    
    
  it("should render Editor dashboard", () => {
    expect(getByTestId(container, "div-tag")).toBeTruthy();
  });

  
});
