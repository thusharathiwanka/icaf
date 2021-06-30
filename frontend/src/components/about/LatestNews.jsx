import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../config/config";
import NewsItem from "../about/NewsItem";

const LatestNews = () => {

	const [news, setNews] = useState(null);
	const [date, SetDate] = useState(new Date(Date.now()).getUTCDate());
	


	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/notice/date/${date}`);
		const data = await res.json();
		setNews(data);
		console.log(news);
		
	}, []);
	return (<div>
		{news &&
			<div>
		
				<h1>Latest News</h1>
		
				<div className="ALL_newsItems">
					<NewsItem news={news} />
			
		
				</div>
			
		
			</div>
		}
		</div>
	);
};

export default LatestNews;
