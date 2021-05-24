import React from "react";

import SpeakerCard from "./SpeakerCard";
import speakerDetails from "../../data/speakerDetails";

const SpeakerContent = () => {
	return (
		<section className="speaker-content">
			<h1>Meet our Keynote Speakers</h1>
			<div className="speaker-card-content">
				{speakerDetails.map((detail, index) => (
					<SpeakerCard detail={detail} key={index} />
				))}
			</div>
		</section>
	);
};

export default SpeakerContent;
