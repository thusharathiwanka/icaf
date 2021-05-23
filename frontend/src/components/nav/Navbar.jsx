import React from "react";

import logo from "url:../../assets/images/logo-blue.svg";

const Navbar = () => {
	return (
		<header>
			<img src={logo} alt="nav-logo" />
			<nav>
				<a href="#">Home</a>
				<a href="#">Workshops</a>
				<a href="#">Presentations</a>
				<a href="#">Publications</a>
				<a href="#">About</a>
			</nav>
			<div className="nav-cta">
				<a href="#">Login</a>
				<a href="#">Register</a>
			</div>
		</header>
	);
};

export default Navbar;
