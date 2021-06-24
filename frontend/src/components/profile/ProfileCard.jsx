import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { getUserType } from "../../auth/userAuth";

const ProfileCard = ({ profile }) => {
	return (
		<div className="profile-card">
			<div className="profile-img">
				<FaUserCircle className="profile-avatar" />
			</div>
			<div className="profile-details">
				<h3>{`Hi, ${profile.firstName} ${
					profile.lastName
				} (${getUserType()})`}</h3>
				<p>{profile.email}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
