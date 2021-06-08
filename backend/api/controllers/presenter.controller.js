const Presenter = require("../models/presenter.model");
const { hashPassword } = require("../helpers/passwordHash");

const getAllPresenters = async (request, response) => {
	try {
		const allPresenters = await Presenter.find();
		response.status(200).json({ presenters: allPresenters });
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const savePresenter = async (request, response) => {
	if (request.body) {
		request.body.password = await hashPassword(request.body.password);
		const newPresenter = new Presenter(request.body);
		try {
			await newPresenter.save();
			response.status(201).json({ id: newPresenter.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

module.exports = { getAllPresenters, savePresenter };
