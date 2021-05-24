import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

import logo from "url:../../assets/images/logo-blue.svg";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<header>
			<img src={logo} alt="nav-logo" className="nav-logo" />
			<nav id={isMobile && "menu-open"} onClick={() => setIsMobile(false)}>
				<Link to="/">Home</Link>
				<Link to="/workshops">Workshops</Link>
				<Link to="/presentations">Presentations</Link>
				<Link to="/publications">Publications</Link>
				<Link to="/about">About</Link>
			</nav>
			<div className="nav-cta" id={isMobile && "menu-open"}>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
			<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? <IoMdClose /> : <CgMenuRight />}
			</button>
		</header>
	);
};

export default Navbar;
