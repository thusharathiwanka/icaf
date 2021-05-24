import React from "react";
import { Link } from "react-router-dom";

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
			<Link>Explore</Link>
		</section>
	);
};

export default TitleContent;
