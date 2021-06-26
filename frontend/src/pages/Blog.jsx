import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getUserType } from "../auth/userAuth";
import BlogCard from "../components/blog/BlogCard";
import { BASE_URL } from "../config/config";

import "./styles/Blog.css";

const Blog = () => {
	document.title = "ICAF | Blogs";
	const [blogs, setBlogs] = useState([]);

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/blog`);
		const data = await res.json();
		setBlogs(data.blogs);
	}, []);

	return (
		<div>
			<div className="blog-upper">
				<h1>Blogs</h1>
				{getUserType() === "researcher" && (
					<Link to="blogs/create" className="add-new">
						Create a Blog
					</Link>
				)}
			</div>
			<div className="blog-content">
				{blogs.map((blog) => {
					return <BlogCard blog={blog} key={blog._id} />;
				})}
			</div>
		</div>
	);
};

export default Blog;
