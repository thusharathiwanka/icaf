const Attendee = require("../models/attendee.model");

const getAllAttendees = async (request, response) => {
	try {
		const allAttendees = await Attendee.find();
		response.status(200).json({ attendees: allAttendees });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const saveAttendee = async (request, response) => {
	if (request.body) {
		const newAttendee = new Attendee(request.body);
		try {
			await newAttendee.save();
			response.status(201).json({ id: newAttendee.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

module.exports = { getAllAttendees, saveAttendee };
