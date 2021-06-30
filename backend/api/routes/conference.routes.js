const express = require("express");
const router = express.Router();
const {
	getConference,
	updateConferenceDate,
} = require("../controllers/conference.controller");

router.get("/", getConference);
router.put("/:startDate", updateConferenceDate);

module.exports = router;
