import React from "react";

import { BASE_URL } from "../../config/config";

const NotificationItem = ({
	notification,
	setNotifications,
	notifications,
	fetchEndpoint,
}) => {
	const handleMarkNotification = async (id) => {
		try {
			const res = await fetch(
				`${BASE_URL}/notification/${fetchEndpoint}/${id}`,
				{
					method: "PATCH",
				}
			);
		} catch (error) {
			console.log(error.message);
		}

		if (res.ok) {
			setNotifications(
				notifications.filter((notification) => {
					return notification._id !== id;
				})
			);
		}
	};

	return (
		<div className="notification-item">
			<h4>{notification.title}</h4>
			<p>
				At{" "}
				{new Date(notification.createdAt).toDateString() +
					" " +
					new Date(notification.createdAt).toLocaleTimeString()}
			</p>
			<button onClick={() => handleMarkNotification(notification._id)}>
				Mark as read
			</button>
			<hr />
		</div>
	);
};

export default NotificationItem;
