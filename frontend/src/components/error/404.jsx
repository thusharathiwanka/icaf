import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div>
			<h1>Oops.. We cannot find what you were looking for.</h1>
			<Link to="/">Back to Home</Link>
		</div>
	);
};

export default ErrorPage;
