const ResearcherNotification = require("../models/researcherNotification.model");
const PresenterNotification = require("../models/presenterNotification.model");

const getAllResearcherNotifications = async (request, response) => {
	try {
		const allResearcherNotifications = await ResearcherNotification.find({
			isRead: false,
		});
		response.status(200).json({ notifications: allResearcherNotifications });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const getAllPresenterNotifications = async (request, response) => {
	try {
		const allPresenterNotifications = await PresenterNotification.find({
			isRead: false,
		});
		response.status(200).json({ notifications: allPresenterNotifications });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const markAsReadResearcherNotification = async (request, response) => {
	if (request.params.id) {
		try {
			const markedNotification = await ResearcherNotification.findByIdAndUpdate(
				request.params.id,
				{
					isRead: true,
				},
				{
					new: true,
				}
			);
			response.status(200).json(markedNotification);
		} catch (error) {
			response.status(404).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};

const markAsReadPresenterNotification = async (request, response) => {
	if (request.params.id) {
		try {
			const markedNotification = await PresenterNotification.findByIdAndUpdate(
				request.params.id,
				{
					isRead: true,
				},
				{
					new: true,
				}
			);
			response.status(200).json(markedNotification);
		} catch (error) {
			response.status(404).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};

module.exports = {
	getAllResearcherNotifications,
	markAsReadResearcherNotification,
	getAllPresenterNotifications,
	markAsReadPresenterNotification,
};
