import React, { useState, useEffect } from "react";

import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";
import "../../pages/Researcher";
import UserItemCard from "./UserItemCard";

const ResearcherProfile = () => {
	const [publications, setPublications] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/publication/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const data = await res.json();
		setPublications(data);
	}, []);

	return (
		<div className="researcher-profile">
			<h1>Your Submissions</h1>
			<div className="publications">
				{publications.map((publication) => {
					return (
						<UserItemCard publication={publication} key={publication._id} />
					);
				})}
			</div>
		</div>
	);
};

export default ResearcherProfile;
