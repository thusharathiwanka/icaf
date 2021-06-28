const Conference = require("../models/conference.model");

const getConference = async (request, response) => {
	try {
		const conference = await Conference.find();
		response.status(200).json({ conference: conference });
	} catch (error) {
		response.status(401).json({ message: error.message });
	}
};

const updateConferenceDate = async (request, response) => {
	try {

		
		const conference = await Conference.findByIdAndUpdate("60b1289b9ef2a7c9a9238995", { $set: { startDate: request.params.startDate } });
		response.status(200).json({conference:conference});
	} catch (error) {
		response.status(401).json({ message: error.message });
	}
}

module.exports = { getConference ,updateConferenceDate};
