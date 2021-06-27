import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BASE_URL } from "../../config/config";

const ReadBlog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	document.title = `ICAF | Blog`;

	useEffect(async () => {
		try {
			const result = await fetch(`${BASE_URL}/blog/${id}`);
			const data = await result.json();
			setBlog(data.blog);
			setIsLoaded(true);
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	return (
		<div>
			{isLoaded && (
				<div className="read-blog-container">
					<h1>{blog.title}</h1>
					<div>
						<img src={blog.src} alt="image" />
					</div>
					<h3>{blog.description}</h3>
					<p className="blog-content">{blog.content}</p>
					<p className="light">
						By {blog.createdBy.firstName + " " + blog.createdBy.lastName}
					</p>
					<p className="light">On {new Date(blog.createdAt).toDateString()}</p>
				</div>
			)}
		</div>
	);
};

export default ReadBlog;
