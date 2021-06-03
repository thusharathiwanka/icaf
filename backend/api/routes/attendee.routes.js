const express = require("express");
const router = express.Router();
const {
	getAllAttendees,
	saveAttendee,
} = require("../controllers/attendee.controller");
const verifyAdminAuth = require("../auth/verifyAdminAuth");

router.get("/", verifyAdminAuth, getAllAttendees);
router.post("/create", saveAttendee);

module.exports = router;
