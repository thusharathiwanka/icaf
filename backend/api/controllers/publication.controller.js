const { response } = require("express");
const Publication = require("../models/publication.model");

const getAllPublications = async (request, response) => {
	try {
		const allPublications = await Publication.find();
		response.status(200).json(allPublications);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const savePublication = async (request, response) => {
	if (request.body) {
		const newPublication = new Publication(request.body);
		try {
			await newPublication.save();
			response.status(201).json(newPublication);
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

const getApprovedPublications = async (request, response) => {
	try {
		const allApprovedPublications = await Publication.find({
			isApproved: true,
		});
		response.status(200).json(allApprovedPublications);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const getRejectedPublications = async (request, response) => {
	try {
		const allRejectedPublications = await Publication.find({
			isApproved: false,
		});
		response.status(200).json(allRejectedPublications);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const getPaidPublications = async (request, response) => {
	try {
		const allPaidPublications = await Publication.find({
			isPaid: true,
		});
		response.status(200).json(allPaidPublications);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const getUnpaidPublications = async (request, response) => {
	try {
		const allUnpaidPublications = await Publication.find({
			isPaid: false,
		});
		response.status(200).json(allUnpaidPublications);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

module.exports = {
	getAllPublications,
	savePublication,
	getApprovedPublications,
	getRejectedPublications,
	getPaidPublications,
	getUnpaidPublications,
};
