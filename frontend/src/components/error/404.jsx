import React from "react";
import { Link } from "react-router-dom";
import { getUserType } from "../../auth/userAuth";

import "../../pages/styles/404.css";

const ErrorPage = () => {
	return (
		<div className="error-container">
			<h1>Oops.. We cannot find what you were looking for.</h1>
			<Link
				className="gradient-cta"
				to={getUserType() ? `/auth/user/${getUserType()}/dashboard` : "/"}
			>
				Back to {getUserType() ? "Profile" : "Home"}
			</Link>
		</div>
	);
};

export default ErrorPage;
