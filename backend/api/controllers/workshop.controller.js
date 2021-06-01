const Workshop = require("../models/workshop.model");

const getAllWorkshops = async (request, response) => {
	try {
		const allWorkshops = await Workshop.find().populate(
			"conductor",
			"firstName lastName"
		);
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
		}).populate("conductor", "firstName lastName");
		response.status(200).json(allApprovedWorkshops);
	} catch (error) {
		response.status(406).json({ message: error.message });
	}
};

const getRejectedWorkshops = async (request, response) => {
	try {
		const allRejectedWorkshops = await Workshop.find({
			isApproved: "rejected",
		}).populate("conductor", "firstName lastName");
		response.status(200).json(allRejectedWorkshops);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const getPendingWorkshops = async (request, response) => {
	try {
		const allPendingWorkshops = await Workshop.find({
			isApproved: "pending",
		}).populate("conductor", "firstName lastName");
		response.status(200).json(allPendingWorkshops);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const approveWorkshops = async (request, response) => {
	if (request.params.id) {
		try {
			const approvedWorkshop = await Workshop.findByIdAndUpdate(
				request.params.id,
				{
					isApproved: "approved",
				},
				{
					new: true,
				}
			);
			response.status(200).json(approvedWorkshop);
		} catch (error) {
			response.status(404).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};

const rejectWorkshops = async (request, response) => {
	if (request.params.id) {
		try {
			const rejectedWorkshop = await Workshop.findByIdAndUpdate(
				request.params.id,
				{
					isApproved: "rejected",
				},
				{
					new: true,
				}
			);
			response.status(200).json(rejectedWorkshop);
		} catch (error) {
			response.status(404).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};

const getWorkshopsByPresenter = async (request, response) => {
	if (request.params.id) {
		try {
			const workshopsByPresenter = await Workshop.find({
				conductor: request.params.id,
			});
			response.status(200).json(workshopsByPresenter);
		} catch (error) {
			response.status(404).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};

module.exports = {
	getAllWorkshops,
	saveWorkshop,
	getApprovedWorkshops,
	getRejectedWorkshops,
	approveWorkshops,
	rejectWorkshops,
	getPendingWorkshops,
	getWorkshopsByPresenter,
};
