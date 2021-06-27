const mongoose = require("mongoose");

const ResearcherNotificationSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	to: {
		type: mongoose.Schema.Types.ObjectId,
		trim: true,
		ref: "researchers",
	},
	isRead: { type: Boolean, required: true, default: false },
	createdAt: { type: Date, required: true, default: Date.now() },
});

const ResearcherNotification = mongoose.model(
	"researcher-notifications",
	ResearcherNotificationSchema
);

module.exports = ResearcherNotification;
