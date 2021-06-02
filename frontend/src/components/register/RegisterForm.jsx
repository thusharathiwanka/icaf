import React, { useContext, useState } from "react";

import CommonRegisterForm from "./CommonRegisterForm";
import AttendeeForm from "./AttendeeForm";
import ResearcherPresenterForm from "./ResearcherPresenterForm";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const RegisterForm = () => {
	const { currentStep, finalUserData, userType } =
		useContext(RegisterDataContext);

	const changeForms = (currentStep, userType) => {
		if (!userType) {
			return <CommonRegisterForm />;
		} else {
			if (currentStep === 2 && userType === "attendee") {
				return <AttendeeForm />;
			} else if (currentStep === 2 && userType === "researcher") {
				return <ResearcherPresenterForm title="Researcher" />;
			} else if (currentStep === 2 && userType === "presenter") {
				return <ResearcherPresenterForm title="Presenter" />;
			}
		}
	};

	return <div>{changeForms(currentStep, userType)}</div>;
};

export default RegisterForm;
