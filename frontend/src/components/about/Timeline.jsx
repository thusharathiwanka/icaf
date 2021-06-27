import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";
import { BASE_URL } from "../../config/config";

const Timeline = () => {
	const [agenda, setAgenda] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/conference`);
		const data = await res.json();
		setAgenda(data.conference[0].agenda);
	}, []);

	return (
		<div className="timeline-content-container">
			<h1>International Conference on Application Frameworks 2021</h1>

			<motion.div
				className="timeline"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 1 }}
			>
				<ul>
					{agenda.map((agendaItem) => {
						return <TimelineItem timelineItem={agendaItem} />;
					})}
				</ul>
			</motion.div>
		</div>
	);
};

export default Timeline;
