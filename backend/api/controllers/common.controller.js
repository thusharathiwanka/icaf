const Attendee = require("../models/attendee.model");
const Presenter = require("../models/presenter.model");
const Researcher = require("../models/researcher.model");
const bcrypt = require("bcryptjs");

const loginUser = async (request, response) => {
	let authUser;

	if (request.body) {
		if (request.body.userType === "researcher") {
			userType = "researcher";
			authUser = await Researcher.findOne({
				username: request.body.username,
			});
		} else if (request.body.userType === "presenter") {
			userType = "presenter";
			authUser = await Presenter.findOne({
				username: request.body.username,
			});
		} else if (request.body.userType === "attendee") {
			userType = "attendee";
			authUser = await Attendee.findOne({
				username: request.body.username,
			});
		}

		if (!authUser) {
			return response
				.status(400)
				.json({ message: "Username or password invalid" });
		}

		const authPassword = await bcrypt.compare(
			request.body.password,
			authUser.password
		);

		if (!authPassword) {
			return response
				.status(400)
				.json({ message: "Username or password invalid" });
		}

		response.status(200).json({ auth: true, userType: userType });
	}
};

module.exports = { loginUser };
