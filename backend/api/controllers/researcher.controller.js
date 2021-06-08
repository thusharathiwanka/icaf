const Researcher = require("../models/researcher.model");
const { hashPassword } = require("../helpers/passwordHash");

const getAllResearchers = async (request, response) => {
	try {
		const allResearchers = await Researcher.find();
		response.status(200).json({ researchers: allResearchers });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const saveResearcher = async (request, response) => {
	if (request.body) {
		request.body.password = await hashPassword(request.body.password);
		const newResearcher = new Researcher(request.body);
		try {
			await newResearcher.save();
			response.status(201).json({ id: newResearcher.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

module.exports = { getAllResearchers, saveResearcher };
