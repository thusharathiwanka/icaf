import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BASE_URL } from "../../config/config";
import NewsItem from "../about/NewsItem";

const LatestNews = () => {

	const [news, setNews] = useState([]);

	


	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/notice/approved`);
		const data = await res.json();
		setNews(data.notice);
		console.log(news);
		
	}, []);
	return (<div>
		
		<div>
			
			<h1>Latest News</h1>
		
			<div className="ALL_newsItems">
				<NewsItem news={news} />
		
			</div> 
				
		
		</div>
		
		</div>
	);
};

export default LatestNews;
