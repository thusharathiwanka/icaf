import React from "react";
import { motion } from "framer-motion";

import TitleContent from "../components/home/TitleContent";
import SpeakerContent from "../components/home/SpeakerContent";
import Countdown from "../components/home/Countdown";
import Footer from "../components/footer/Footer";

import "./styles/Home.css";
import LandingImg from "url:../../src/assets/images/landing-img.png";
import PatternImg from "url:../../src/assets/images/pattern.png";

const Home = () => {
	document.title = "ICAF | 2021";

	return (
		<>
			<motion.div
				className="home-content"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<TitleContent />
				<div className="landing-img-container">
					<img src={LandingImg} alt="landing-image" />
				</div>
				<motion.img
					src={PatternImg}
					className="pattern pattern-top"
					alt="pattern"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: "tween", duration: 1, delay: 1 }}
				/>
				<SpeakerContent />
				<motion.img
					src={PatternImg}
					className="pattern pattern-bottom"
					alt="pattern"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: "tween", duration: 1, delay: 1 }}
				/>
				<Countdown />
			</motion.div>
			<Footer />
		</>
	);
};

export default Home;
