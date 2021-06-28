import React from "react";

const TimelineItem = ({ timelineItem }) => {
	return (
		<li>
			<div className="timeline-content">
				<h2>{timelineItem.topic}</h2>
				<p>{timelineItem.content}</p>
				<p className="grey">
					On {new Date(timelineItem.startAt).toDateString()}
				</p>
			</div>
		</li>
	);
};

export default TimelineItem;
