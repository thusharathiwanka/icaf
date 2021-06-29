import React from "react";

const NewsItem = ({news}) => {
	return <div>
		{ news.map((newsItem)=>
			<div className="timeline-content">
				<h2>{newsItem.topic}</h2>
				<p>{newsItem.content}</p>
				
			</div>
			) }
	</div>;
};

export default NewsItem;
