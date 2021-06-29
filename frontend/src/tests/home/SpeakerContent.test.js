import React from "react";
import SpeakerContent from "../../components/home/SpeakerContent";
import { getByTestId, render } from "@testing-library/react";

let container = null;

describe("Testing SpeakerContent", () => {
	beforeEach(() => {
		container = render(<SpeakerContent />).container;
	});

	it("should render SpeakerContent", () => {
		expect(getByTestId(container, "section-tag")).toBeTruthy();
	});

	it("should render SpeakerCard container", () => {
		expect(getByTestId(container, "div-tag")).toBeTruthy();
	});

	it("should render h1", () => {
		expect(getByTestId(container, "h1-tag")).toBeTruthy();
		expect(getByTestId(container, "h1-tag").textContent).toBe(
			"Meet our Keynote Speakers"
		);
	});
});
