import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const [loginUser, setLoginUser] = useState({
		username: "",
		password: "",
		userType: "",
	});

	const handleLogin = (e) => {
		e.preventDefault();
		console.warn(loginUser);
	};

	return (
		<div className="login-content">
			<h1>Login</h1>
			<form className="login-form" onSubmit={handleLogin}>
				<div className="user-credentials">
					<label htmlFor="username">Username</label>
					<input
						type="username"
						name="username"
						id="username"
						required
						value={loginUser.username}
						onChange={(e) =>
							setLoginUser({ ...loginUser, username: e.target.value })
						}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={loginUser.password}
						required
						onChange={(e) =>
							setLoginUser({ ...loginUser, password: e.target.value })
						}
					/>
				</div>
				<div className="user-type-selection">
					<div className="researcher">
						<input
							type="radio"
							name="user-type"
							id="researcher"
							value="researcher"
							required
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "researcher" })
							}
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
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "presenter" })
							}
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
							onClick={() =>
								setLoginUser({ ...loginUser, userType: "attendee" })
							}
						/>
						<label htmlFor="attendee">Attendee</label>
					</div>
				</div>
				<p>
					Haven't registered yet ?
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
