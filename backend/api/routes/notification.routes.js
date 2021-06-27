const express = require("express");
const router = express.Router();
const {
	getAllResearcherNotifications,
	markAsReadResearcherNotification,
} = require("../controllers/notification.controller");

router.get("/researcher", getAllResearcherNotifications);
router.patch("/researcher/:id", markAsReadResearcherNotification);

module.exports = router;
