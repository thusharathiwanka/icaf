import React, { useState, useEffect } from "react";

import { BASE_URL } from "../../config/config";
import WorkshopPublicationCard from "../common/WorkshopPublicationCard";

const WorkshopList = () => {
	const [workshops, setWorkshops] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/workshop/approved`);
		const data = await res.json();
		setWorkshops(data.approvedWorkshops);
		console.log(data);
	}, []);

	return (
		<div>
			<h1>Workshops</h1>
			{workshops.map((workshop) => {
				return <WorkshopPublicationCard event={workshop} />;
			})}
		</div>
	);
};

export default WorkshopList;
