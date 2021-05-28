const { response } = require("express");
const Researcher = require("../models/researcher.model");

const getAllResearchers = async (request, response) => {
	try {
		const allResearchers = await Researcher.find();
		response.status(200).json(allResearchers);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const saveResearcher = async (request, response) => {
	if (request.body) {
		const newResearcher = new Researcher(request.body);
		try {
			await newResearcher.save();
			response.status(201).json(newResearcher);
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

module.exports = { getAllResearchers, saveResearcher };
