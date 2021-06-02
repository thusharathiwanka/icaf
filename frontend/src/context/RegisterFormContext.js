import React, { useState, createContext } from "react";

import RegisterFrom from "../components/register/RegisterForm";

export const RegisterDataContext = createContext();

const RegisterFormContext = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState({});
	const [finalUserData, setFinalUserData] = useState({});

	return (
		<div>
			<RegisterDataContext.Provider
				value={{
					currentStep,
					setCurrentStep,
					userData,
					setUserData,
					finalUserData,
					setFinalUserData,
				}}
			>
				<RegisterFrom />
			</RegisterDataContext.Provider>
		</div>
	);
};

export default RegisterFormContext;
