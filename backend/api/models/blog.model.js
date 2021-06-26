const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
	topic: { type: String, required: true, trim: true },
	src: { type: String, required: true, trim: true },
	content: { type: String, required: true, trim: true },
	createdResearcher: {
		type: mongoose.Schema.Types.ObjectId,
		trim: true,
		ref: "researchers",
	},
	createdPresenter: {
		type: mongoose.Schema.Types.ObjectId,
		trim: true,
		ref: "presenters",
	},
	createdAt: { type: Date, required: true, default: Date.now() },
});

const Publication = mongoose.model("publications", BlogSchema);

module.exports = Publication;
