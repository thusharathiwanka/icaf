const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema({
	topic: { type: String, required: true, trim: true },
	src: { type: String, required: true, trim: true },
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "researchers",
	},
	isApproved: { type: Boolean, required: true },
	isPaid: { type: Boolean, required: true },
});

const Publication = mongoose.model("publications", PublicationSchema);

module.exports = Publication;
