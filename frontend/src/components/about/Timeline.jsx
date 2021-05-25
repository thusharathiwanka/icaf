import React from "react";

import TimelineItem from "./TimelineItem";

const Timeline = () => {
	return (
		<div className="timeline-content-container">
			<h1>International Conference on Application Frameworks 2021</h1>
			<div className="timeline">
				<ul>
					<TimelineItem />
					<TimelineItem />
					<TimelineItem />
					<TimelineItem />
					<TimelineItem />
				</ul>
			</div>
		</div>
	);
};

export default Timeline;
