const Presenter = require("../models/presenter.model");

const getAllPresenters = async (request, response) => {
	try {
		const allPresenters = await Presenter.find();
		response.status(200).json(allPresenters);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const savePresenter = async (request, response) => {
	if (request.body) {
		const newPresenter = new Presenter(request.body);
		try {
			await newPresenter.save();
			response.status(201).json(newPresenter);
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

module.exports = { getAllPresenters, savePresenter };
