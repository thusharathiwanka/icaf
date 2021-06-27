const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	src: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	content: { type: String, required: true, trim: true },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		trim: true,
		ref: "researchers",
	},
	createdAt: { type: Date, required: true, default: Date.now() },
});

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;
