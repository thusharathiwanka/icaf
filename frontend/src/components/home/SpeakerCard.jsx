import React from "react";

const SpeakerCard = ({ detail }) => {
	return (
		<div className="speaker-card">
			<div className="img-container">
				<img src={detail.image} alt={`${detail.name}-image`} />
			</div>
			<h2>{detail.name}</h2>
			<p>{detail.description}</p>
		</div>
	);
};

export default SpeakerCard;
