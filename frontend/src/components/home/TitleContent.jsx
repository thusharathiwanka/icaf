import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TitleContent = () => {
	return (
		<section className="text-content" data-testid="section-tag">
			<h1 data-testid="h1-tag">
				International Conference on Application Frameworks
			</h1>
			<motion.p
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				data-testid="p-tag"
			>
				The International Conference on Application Frameworks is dedicated to
				promoting researchers in different programming languages organized by
				the Faculty of Computing of the Sri Lanka Institute of Information
				Technology (SLIIT). Witness the event on 31st July 2021 in SLIIT
				premises.
			</motion.p>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
			>
				<Link to="/about" className="gradient-cta" data-testid="btn-tag">
					Explore
				</Link>
			</motion.div>
		</section>
	);
};

export default TitleContent;
