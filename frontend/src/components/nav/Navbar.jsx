import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import logo from "url:../../assets/images/logo-blue.svg";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<header>
			<img src={logo} alt="nav-logo" className="nav-logo" />
			<nav id={isMobile && "menu-open"} onClick={() => setIsMobile(false)}>
				<a href="#">Home</a>
				<a href="#">Workshops</a>
				<a href="#">Presentations</a>
				<a href="#">Publications</a>
				<a href="#">About</a>
			</nav>
			<div className="nav-cta" id={isMobile && "menu-open"}>
				<a href="#">Login</a>
				<a href="#">Register</a>
			</div>
			<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? <IoMdClose /> : <CgMenuRight />}
			</button>
		</header>
	);
};

export default Navbar;
