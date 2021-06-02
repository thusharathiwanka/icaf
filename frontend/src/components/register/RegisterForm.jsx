import React, { useContext } from "react";

import CommonRegisterForm from "./CommonRegisterForm";
import AttendeeForm from "./AttendeeForm";
import PresenterForm from "./PresenterForm";
import ResearcherForm from "./ResearcherForm";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const RegisterForm = () => {
	const { currentStep, finalUserData } = useContext(RegisterDataContext);
	const changeForms = (step) => {
		switch (step) {
			case 1:
				return <CommonRegisterForm />;
			case 2:
				return <AttendeeForm />;
			case 3:
				return <PresenterForm />;
			case 4:
				return <ResearcherForm />;
		}
	};

	return <div>{changeForms(currentStep)}</div>;
};

export default RegisterForm;
