const express = require("express");
const router = express.Router();
const {
	getAllAttendees,
	saveAttendee,
} = require("../controllers/attendee.controller");

router.get("/", getAllAttendees);
router.post("/create", saveAttendee);

module.exports = router;
