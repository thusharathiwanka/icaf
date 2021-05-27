import React from "react";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
	document.title = "ICAF | Register";
	return (
		<div className="register-content">
			<h1>Register</h1>
			<RegisterForm />
		</div>
	);
};

export default Register;
