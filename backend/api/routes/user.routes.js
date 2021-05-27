const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/user.controller");

const user = {
	name: { firstName: "John", lastName: "Doe" },
	email: "john@gmail.com",
	password: "john@123",
};

router.get("/", async (request, response) => {
	// response.send(user);
	try {
		const allUsers = await getAllUsers();
		response.status(200).json(allUsers);
	} catch (error) {
		response.status(404).json(error.message);
	}
});

module.exports = router;
