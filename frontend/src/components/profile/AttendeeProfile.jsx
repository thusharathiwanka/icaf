import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";
import "../../pages/Researcher";
import ProfileCard from "./ProfileCard";

const AttendeeProfile = () => {
	document.title = "ICAF | Attendee";
	const [profile, setProfile] = useState({});

	useEffect(async () => {
		try {
			const result = await fetch(`${BASE_URL}/attendee/my`, {
				headers: {
					"Content-Type": "application/json",
					authToken: getUserToken(),
				},
			});
			const profile = await result.json();
			setProfile(profile.attendee);
		} catch (error) {
			console.log(error.message);
		}
	}, []);
	return (
		<div className="researcher-profile">
			<div className="profile-container">
				<ProfileCard profile={profile} />
			</div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
			>
				<h1>You are successfully registered for the conference.</h1>
				<h1 className="attendee-greeting">
					Your token number is <span className="blue">{profile.id}</span>
				</h1>
			</motion.div>
		</div>
	);
};

export default AttendeeProfile;
