import React from "react";

const WorkshopPublicationCard = ({ event }) => {
	return (
		<div className="event-card">
			<div className="event-details">
				<h2>{event.topic}</h2>
				<p>
					On{" "}
					{new Date(event.dueDate).toDateString() +
						" " +
						new Date(event.dueDate).toLocaleTimeString()}
				</p>
			</div>
			<div className="conductor-details">
				<div className="profile-details">
					<h3>
						Conduct By{" "}
						{event.createdBy.firstName + " " + event.createdBy.lastName}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default WorkshopPublicationCard;
