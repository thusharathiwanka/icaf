import React from "react";

import TitleContent from "../components/home/TitleContent";

import "./styles/Home.css";
import LandingImg from "url:../../src/assets/images/landing-img.png";

const Home = () => {
	return (
		<div>
			<TitleContent />
			<div className="landing-img-container">
				<img src={LandingImg} alt="landing-image" />
			</div>
		</div>
	);
};

export default Home;
