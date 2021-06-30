import React from "react";
import TitleContent from "../components/home/TitleContent";
import { getByTestId, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;

describe("Testing TitleContent", () => {
	beforeEach(() => {
		container = render(
			<Router>
				<TitleContent />
			</Router>
		).container;
	});

	it("should render TitleContent", () => {
		expect(getByTestId(container, "section-tag")).toBeTruthy();
	});

	it("should render h1", () => {
		expect(getByTestId(container, "h1-tag")).toBeTruthy();
		expect(getByTestId(container, "h1-tag").textContent).toBe(
			"International Conference on Application Frameworks"
		);
	});

	it("should render p", () => {
		expect(getByTestId(container, "p-tag")).toBeTruthy();
	});

	it("should render explore button", () => {
		expect(getByTestId(container, "btn-tag")).toBeTruthy();
		expect(getByTestId(container, "btn-tag").innerHTML).toBe("Explore");
	});
});
