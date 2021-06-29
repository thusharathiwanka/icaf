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
		
			<div  initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "tween", duration: 1 }}>
			
				<ul >
				
					<NewsItem news={news} />;
			
				</ul>
					
				</div> 
				
		
		</div>
		
		</div>
	);
};

export default LatestNews;
