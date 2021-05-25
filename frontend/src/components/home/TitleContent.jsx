import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TitleContent = () => {
	return (
		<section className="text-content">
			<h1>International Conference on Application Frameworks</h1>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.4 }}
			>
				<Link to="/about" className="gradient-cta">
					Explore
				</Link>
			</motion.div>
		</section>
	);
};

export default TitleContent;
