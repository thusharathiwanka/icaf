import React from "react";

import SpeakerCard from "./SpeakerCard";

const SpeakerContent = () => {
	return (
		<section className="speaker-content">
			<h1>International Conference on Application Frameworks</h1>
			<div className="speaker-card-content">
				<SpeakerCard />
				<SpeakerCard />
				<SpeakerCard />
			</div>
		</section>
	);
};

export default SpeakerContent;
