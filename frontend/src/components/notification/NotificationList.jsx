import React, { useEffect, useContext } from "react";

import { RegisterDataContext } from "../../context/Context";
import NotificationItem from "./NotificationItem";
import { getUserType } from "../../auth/userAuth";
import { BASE_URL } from "../../config/config";

const NotificationList = () => {
	const { setNotifications, notifications } = useContext(RegisterDataContext);
	let fetchEndpoint;

	if (getUserType() === "researcher" || getUserType() === "presenter") {
		if (getUserType() === "researcher") {
			fetchEndpoint = "researcher";
		} else if (getUserType() === "presenter") {
			fetchEndpoint = "presenter";
		}
		useEffect(async () => {
			const res = await fetch(`${BASE_URL}/notification/${fetchEndpoint}`);
			const data = await res.json();
			setNotifications(data.notifications);
		}, []);
	}
	return (
		<div className="notification-tray">
			<h2 className="notification-banner">Notifications</h2>
			{notifications.length > 0 ? (
				notifications.map((notification) => {
					return (
						<NotificationItem
							notification={notification}
							setNotifications={setNotifications}
							notifications={notifications}
							fetchEndpoint={fetchEndpoint}
						/>
					);
				})
			) : (
				<h3 className="light">There are no new notifications</h3>
			)}
		</div>
	);
};

export default NotificationList;
