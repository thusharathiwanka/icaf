import React from "react";

import TitleContent from "../components/home/TitleContent";
import SpeakerContent from "../components/home/SpeakerContent";
import Countdown from "../components/home/Countdown";
import Footer from "../components/footer/Footer";

import "./styles/Home.css";
import LandingImg from "url:../../src/assets/images/landing-img.png";

const Home = () => {
	return (
		<div className="home-content">
			<TitleContent />
			<div className="landing-img-container">
				<img src={LandingImg} alt="landing-image" />
			</div>
			<SpeakerContent />
			<Countdown />
			<Footer />
		</div>
	);
};

export default Home;
