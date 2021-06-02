import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
						type="username"
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
				>
					Next
				</motion.button>
			</motion.form>
		</div>
	);
};

export default RegisterForm;
