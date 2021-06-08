import React, { useState, useEffect, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "url:../../assets/images/logo-blue.svg";
import { deleteUserAuth } from "../../auth/userAuth";
import { RegisterDataContext } from "../../context/RegisterFormContext";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const { isLogin, setIsLogin } = useContext(RegisterDataContext);

	return (
		<motion.header
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
		>
			<Link to="/">
				<img src={logo} alt="nav-logo" className="nav-logo" />
			</Link>
			<nav id={isMobile ? "menu-open" : ""} onClick={() => setIsMobile(false)}>
				<Link to="/">Home</Link>
				<Link to="/workshops">Workshops</Link>
				<Link to="/publications">Publications</Link>
				<Link to="/blogs">Blogs</Link>
				<Link to="/downloads">Downloads</Link>
			</nav>
			<div
				className="nav-cta"
				id={isMobile ? "menu-open" : ""}
				onClick={() => setIsMobile(false)}
			>
				{!isLogin ? (
					<div className="nav-cta">
						<Link to="/auth/login">Login</Link>
						<Link to="/auth/register" className="active">
							Register
						</Link>
					</div>
				) : (
					<Link
						className="active"
						to="/"
						onClick={() => {
							deleteUserAuth();
							setIsLogin(false);
						}}
					>
						Logout
					</Link>
				)}
			</div>
			<button className="mobile-menu">
				{isMobile ? <IoMdClose /> : <CgMenuRight />}
			</button>
		</motion.header>
	);
};

export default Navbar;
