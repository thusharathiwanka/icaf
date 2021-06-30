import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";

import SpeakerCard from "./SpeakerCard";
import { BASE_URL } from "../../config/config";

const SpeakerContent = () => {
	const [speakers, setSpeakers] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/conference`);
		const data = await res.json();
		setSpeakers(data.conference[0].keySpeakers);
	}, []);

	return (
		<section className="speaker-content" data-testid="section-tag">
			<MdFormatQuote className="quote-icon" />
			<h1 data-testid="h1-tag">Meet our Keynote Speakers</h1>
			<div className="speaker-card-content" data-testid="div-tag">
				{speakers.map((speaker) => (
					<SpeakerCard speaker={speaker} key={speaker.id} />
				))}
			</div>
		</section>
	);
};

export default SpeakerContent;
