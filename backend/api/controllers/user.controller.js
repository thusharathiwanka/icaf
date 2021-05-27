const { getAll, save } = require("../services/user.services");

const getAllUsers = async (request, response) => {
	try {
		const allUsers = await getAll();
		response.status(200).json(allUsers);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const saveUser = async (request, response) => {
	const newUser = request.body;

	try {
		await save(newUser);
		response.status(201).json(newUser);
	} catch (error) {
		response.status(406).json({ message: error.message });
	}
};

module.exports = { getAllUsers, saveUser };
