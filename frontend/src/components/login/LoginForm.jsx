import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
	return (
		<div className="login-content">
			<h1>Login</h1>
			<form className="login-form">
				<div className="user-credentials">
					<label htmlFor="username">Username</label>
					<input type="username" name="username" id="username" required />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<div className="user-type-selection">
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
							required
							value="presenter"
						/>
						<label htmlFor="presenter">Presenter</label>
					</div>
					<div className="attendee">
						<input
							type="radio"
							name="user-type"
							id="attendee"
							required
							value="attendee"
						/>
						<label htmlFor="attendee">Attendee</label>
					</div>
				</div>
				<p>
					Haven't registered yet?
					<Link to="/register" className="register-now">
						Register
					</Link>
				</p>
				<button type="submit" className="gradient-cta">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
