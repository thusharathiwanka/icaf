import React from "react";
import { MdFormatQuote } from "react-icons/md";

import SpeakerCard from "./SpeakerCard";
import speakerDetails from "../../data/speakerDetails";

const SpeakerContent = () => {
	return (
		<section className="speaker-content">
			<MdFormatQuote className="quote-icon" />
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
