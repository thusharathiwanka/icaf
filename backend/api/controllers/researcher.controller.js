const { response } = require("express");
const Researcher = require("../models/researcher.model");

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
