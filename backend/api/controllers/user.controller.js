const { getAll, save } = require("../services/user.services");

const getAllUsers = async (request, response) => {
	try {
		const allUsers = await getAll();
		response.status(200).json(allUsers);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const saveUser = async () => {};

module.exports = { getAllUsers, saveUser };
