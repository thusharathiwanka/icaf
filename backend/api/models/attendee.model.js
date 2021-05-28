const mongoose = require("mongoose");

const AttendeeSchema = new mongoose.Schema({
	firstName: { type: String, required: true, trim: true },
	lastName: { type: String, required: true, trim: true },
	username: { type: String, required: true, trim: true, unique: true },
	password: { type: String, required: true, trim: true },
	nic: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true, unique: true },
	contactNumber: { type: String, required: true, trim: true },
});

const Attendee = mongoose.model("attendees", AttendeeSchema);

module.exports = Attendee;