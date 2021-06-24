import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";
import "../../pages/Researcher";
import PublicationCard from "./PublicationCard";
import ProfileCard from "./ProfileCard";

const ResearcherProfile = () => {
	const [publications, setPublications] = useState([]);
	const [profile, setProfile] = useState({});

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/publication/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const data = await res.json();
		setPublications(data);

		const result = await fetch(`${BASE_URL}/researcher/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const profile = await result.json();
		setProfile(profile.researcher);
	}, []);

	return (
		<div className="researcher-profile">
			<div className="profile-container">
				<ProfileCard profile={profile} />
				<Link className="add-new">Add new Publication</Link>
			</div>
			<h1>Your Submissions</h1>
			<div className="publications">
				{publications.map((publication) => {
					return (
						<PublicationCard publication={publication} key={publication._id} />
					);
				})}
			</div>
		</div>
	);
};

export default ResearcherProfile;
