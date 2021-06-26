import React from "react";

import NotificationItem from "./NotificationItem";

const NotificationList = () => {
	return (
		<div className="notification-tray">
			<h2 className="notification-banner">Notifications</h2>
			<NotificationItem />
			<NotificationItem />
			<NotificationItem />
		</div>
	);
};

export default NotificationList;
