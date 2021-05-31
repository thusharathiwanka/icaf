const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema({
	topic: { type: String, required: true, trim: true },
	src: { type: String, required: true, trim: true },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "researchers",
	},
	src: { type: String, required: true, trim: true },
	createdAt: { type: Date, required: true, default: Date.now() },
	isApproved: { type: Boolean, required: true, default: false },
	isPaid: { type: Boolean, required: true, default: false },
});

const Publication = mongoose.model("publications", PublicationSchema);

module.exports = Publication;
