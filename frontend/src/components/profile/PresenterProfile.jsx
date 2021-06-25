import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";
import "../../pages/Researcher";
import ProfileCard from "./ProfileCard";
import PublicationCard from "../common/UserItemCard";

const PresenterProfile = () => {
	const [workshops, setWorkshops] = useState([]);
	const [profile, setProfile] = useState({});

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/workshop/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const data = await res.json();
		setWorkshops(data);

		const result = await fetch(`${BASE_URL}/presenter/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const profile = await result.json();
		setProfile(profile.presenter);
	}, []);
	return (
		<div className="researcher-profile">
			<div className="profile-container">
				<ProfileCard profile={profile} />
				<Link className="add-new">Add new Workshop</Link>
			</div>
			<h1>Your Workshops</h1>
			<div className="publications">
				{workshops.map((workshop) => {
					return <PublicationCard publication={workshop} key={workshop._id} />;
				})}
			</div>
		</div>
	);
};

export default PresenterProfile;
