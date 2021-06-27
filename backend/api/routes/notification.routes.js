const express = require("express");
const router = express.Router();
const {
	getAllResearcherNotifications,
	markAsReadResearcherNotification,
	getAllPresenterNotifications,
	markAsReadPresenterNotification,
} = require("../controllers/notification.controller");

router.get("/researcher", getAllResearcherNotifications);
router.get("/presenter", getAllPresenterNotifications);
router.patch("/researcher/:id", markAsReadResearcherNotification);
router.patch("/presenter/:id", markAsReadPresenterNotification);

module.exports = router;
