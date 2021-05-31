const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
	topic: { type: String, required: true, trim: true },
	dueDate: { type: Date, required: true, trim: true },
	conductor: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		trim: true,
	},
	src: { type: String, required: true, trim: true },
	createdAt: { type: Date, required: true, trim: true, default: Date.now() },
	isApproved: { type: Boolean, required: true, trim: true, default: false },
});

const Workshop = mongoose.model("workshops", workshopSchema);

module.exports = Workshop;
