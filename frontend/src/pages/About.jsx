import React from "react";

import Timeline from "../components/about/Timeline";
import Footer from "../components/footer/Footer";
import LatestNews from "../components/about/LatestNews";

import "./styles/About.css";

const About = () => {
	document.title = "ICAF | Explore";

	return (
		<div className="about-content">
			<Timeline />
			<LatestNews />
			<Footer />
		</div>
	);
};

export default About;
<h1>About</h1>;
