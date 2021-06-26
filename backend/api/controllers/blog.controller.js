const Blog = require("../models/blog.model");

const getAllBlogs = async (request, response) => {
	try {
		const allBlogs = await Blog.find();
		response.status(200).json(allBlogs);
	} catch (error) {
		response.status(401).json({ message: error.message });
	}
};

const saveBlog = async (request, response) => {
	if (request.body) {
		const newBlog = new Blog(request.body);
		try {
			await newBlog.save();
			response.status(201).json(newBlog);
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request body is empty" });
	}
};

module.exports = { getAllBlogs };
