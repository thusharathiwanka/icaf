const Workshop = require("../models/workshop.model");

const getAllWorkshops = async (request, response) => {
	try {
		const allWorkshops = await Workshop.find();
		response.status(200).json(allWorkshops);
	} catch (error) {
		response.status(404), json({ message: error.message });
	}
};

const saveWorkshop = async (request, response) => {
	if (request.body) {
		const newWorkshop = new Workshop(request.body);
		try {
			await newWorkshop.save();
			response.status(201).json(newWorkshop);
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request body is empty" });
	}
};

const getApprovedWorkshops = async (request, response) => {
	try {
		const allApprovedWorkshops = await Workshop.find({
			isApproved: "approved",
		});
		response.status(200).json(allApprovedWorkshops);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const getRejectedWorkshops = async (request, response) => {
	try {
		const allRejectedWorkshops = await Workshop.find({
			isApproved: "rejected",
		});
		response.status(200).json(allRejectedWorkshops);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

module.exports = {
	getAllWorkshops,
	saveWorkshop,
	getApprovedWorkshops,
	getRejectedWorkshops,
};
