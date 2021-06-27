const mongoose = require("mongoose");

const PresenterNotificationSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	to: {
		type: mongoose.Schema.Types.ObjectId,
		trim: true,
		ref: "presenters",
	},
	isRead: { type: Boolean, required: true, default: false },
	createdAt: { type: Date, required: true, default: Date.now() },
});

const PresenterNotification = mongoose.model(
	"presenter-notifications",
	PresenterNotificationSchema
);

module.exports = PresenterNotification;
