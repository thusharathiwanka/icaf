import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { RegisterDataContext } from "../../context/RegisterFormContext";

const RegisterForm = () => {
	const { setCurrentStep, userData, setUserData, setUserType } =
		useContext(RegisterDataContext);
	const [tempUserType, setTempUserType] = useState("");

	return (
		<div className="register-content">
			<h1>Register</h1>
			<motion.form
				className="login-form"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="first-name">First Name</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								required
								autoComplete="off"
							/>
						</div>
						<div className="last-name">
							<label htmlFor="last-name">Last Name</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								required
								autoComplete="off"
							/>
						</div>
					</div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						required
						autoComplete="off"
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						autoComplete="off"
					/>
				</motion.div>
				<motion.div
					className="user-type-selection"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
				>
					<label id="no-left-padding">Register as a</label>
					<div className="researcher">
						<input
							type="radio"
							name="user-type"
							id="researcher"
							value="researcher"
							required
							onChange={() => setTempUserType("researcher")}
						/>
						<label htmlFor="researcher">Researcher</label>
					</div>
					<div className="presenter">
						<input
							type="radio"
							name="user-type"
							id="presenter"
							value="presenter"
							required
							onChange={() => setTempUserType("presenter")}
						/>
						<label htmlFor="presenter">Presenter</label>
					</div>
					<div className="attendee">
						<input
							type="radio"
							name="user-type"
							id="attendee"
							value="attendee"
							required
							onChange={() => setTempUserType("attendee")}
						/>
						<label htmlFor="attendee">Attendee</label>
					</div>
				</motion.div>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
				>
					Already have an account ?
					<Link to="/auth/login" className="register-now">
						Login
					</Link>
				</motion.p>
				<motion.button
					type="submit"
					className="gradient-cta"
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
					onClick={() => {
						setCurrentStep(2);
						setUserType(tempUserType);
						console.log(tempUserType);
					}}
				>
					Next
				</motion.button>
			</motion.form>
		</div>
	);
};

export default RegisterForm;
