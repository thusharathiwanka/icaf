import React, { useContext, useState } from "react";

import CommonRegisterForm from "./CommonRegisterForm";
import AttendeeForm from "./AttendeeForm";
import PresenterForm from "./PresenterForm";
import ResearcherForm from "./ResearcherForm";
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
				return <ResearcherForm />;
			} else if (currentStep === 2 && userType === "presenter") {
				return <PresenterForm />;
			}
		}
	};

	return <div>{changeForms(currentStep, userType)}</div>;
};

export default RegisterForm;
