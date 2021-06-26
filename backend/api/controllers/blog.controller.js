const Blog = require("../models/blog.model");

const getAllBlogs = async (request, response) => {
	try {
		const allBlogs = await Blog.find().populate(
			"createdBy",
			"firstName lastName"
		);
		response.status(200).json({ blogs: allBlogs });
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

const getBlog = async (request, response) => {
	if (request.params.id) {
		try {
			const foundBlog = await Blog.findById(request.params.id).populate(
				"createdBy",
				"firstName lastName"
			);
			response.status(200).json({ blog: foundBlog });
		} catch (error) {
			response.status(404).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};

module.exports = { getAllBlogs, saveBlog, getBlog };
