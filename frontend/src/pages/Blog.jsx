import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { getUserType } from "../auth/userAuth";
import BlogCard from "../components/blog/BlogCard";
import { BASE_URL } from "../config/config";

import "./styles/Blog.css";

const Blog = () => {
	document.title = "ICAF | Blogs";
	const [blogs, setBlogs] = useState([]);

	useEffect(async () => {
		try {
			const res = await fetch(`${BASE_URL}/blog`);
			const data = await res.json();
			setBlogs(data.blogs);
		} catch (error) {
			console.log(error.message);
		}
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
			<div
				className="blog-content"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.8 }}
			>
				{blogs.map((blog) => {
					return <BlogCard blog={blog} key={blog._id} />;
				})}
			</div>
		</div>
	);
};

export default Blog;
