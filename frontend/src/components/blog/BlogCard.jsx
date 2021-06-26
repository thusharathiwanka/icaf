import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
	return (
		<div className="blog-card">
			<div className="blog-img-container">
				<img src={blog.src} alt="blog-image" />
			</div>
			<div className="blog-text-content">
				<h3>{blog.title}</h3>
				<p>{blog.description}</p>
				<p>By {blog.createdBy.firstName + " " + blog.createdBy.lastName}</p>
				<p>On {new Date(blog.createdAt).toDateString()}</p>
				<Link to={`blogs/${blog._id}`} className="add-new">
					View
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
