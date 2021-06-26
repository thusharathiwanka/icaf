import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BASE_URL } from "../../config/config";

const ReadBlog = () => {
	document.title = "ICAF | Blog";
	const [blog, setBlog] = useState({});
	const { id } = useParams();

	useEffect(async () => {
		try {
			const result = await fetch(`${BASE_URL}/blog/${id}`);
			const data = await result.json();
			setBlog(data.blog);
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	return (
		<div>
			{blog && (
				<div className="read-blog-container">
					<h1>{blog.title}</h1>
					<img src={blog.src} alt="image" />
					<h3>{blog.description}</h3>
					<p>{blog.content}</p>
					<p>By {blog.createdBy.firstName + " " + blog.createdBy.lastName}</p>
					<p>On {new Date(blog.createdAt).toDateString()}</p>
				</div>
			)}
		</div>
	);
};

export default ReadBlog;
