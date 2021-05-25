import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "url:../../assets/images/logo-blue.svg";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<motion.header
			initial={{ transform: "translateY(-20%)", opacity: 0 }}
			animate={{ transform: "translateY(0%)", opacity: 1 }}
			transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
		>
			<Link to="/">
				<img src={logo} alt="nav-logo" className="nav-logo" />
			</Link>
			<nav id={isMobile && "menu-open"} onClick={() => setIsMobile(false)}>
				<Link to="/">Home</Link>
				<Link to="/workshops">Workshops</Link>
				<Link to="/presentations">Presentations</Link>
				<Link to="/publications">Publications</Link>
				<Link to="/blogs">Blogs</Link>
			</nav>
			<div
				className="nav-cta"
				id={isMobile && "menu-open"}
				onClick={() => setIsMobile(false)}
			>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
			<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? <IoMdClose /> : <CgMenuRight />}
			</button>
		</motion.header>
	);
};

export default Navbar;
