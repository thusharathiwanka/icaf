const express = require("express");

const router = express.Router();

const user = {
	name: { firstName: "John", lastName: "Doe" },
	email: "john@gmail.com",
	password: "john@123",
};

router.get("/", (request, response) => {
	response.send(user);
});

module.exports = router;
