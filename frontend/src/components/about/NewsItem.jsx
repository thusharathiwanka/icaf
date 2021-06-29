import React from "react";

const NewsItem = ({news}) => {
	return <div className="Latest_newsItem">
		{ news.map((newsItem)=>
			<div className="Latest_newsItem_body">
				<h2 className="Latest_newsItem_body_h1">{newsItem.topic}</h2>
				<p className="Latest_newsItem_body_p">{newsItem.content}</p>
				
			</div>
			)}
	</div>;
};

export default NewsItem;
