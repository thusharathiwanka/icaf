import React from "react";

import RegisterForm from "../components/register/RegisterForm";
import RegisterFormContext from "../context/RegisterFormContext";

import "./styles/Register.css";

const Register = () => {
	document.title = "ICAF | Register";

	return (
		<div>
			<RegisterFormContext>
				<RegisterForm />
			</RegisterFormContext>
		</div>
	);
};

export default Register;
