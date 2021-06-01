const express = require("express");
const router = express.Router();
const {
	getAllWorkshops,
	saveWorkshop,
	getApprovedWorkshops,
	getRejectedWorkshops,
	getPendingWorkshops,
	getWorkshopsByPresenter,
	approveWorkshops,
	rejectWorkshops,
} = require("../controllers/workshop.controller");

router.get("/", getAllWorkshops);
router.post("/create", saveWorkshop);
router.get("/approved", getApprovedWorkshops);
router.get("/rejected", getRejectedWorkshops);
router.get("/pending", getPendingWorkshops);
router.get("/:id", getWorkshopsByPresenter);
router.patch("/approve/:id", approveWorkshops);
router.patch("/reject/:id", rejectWorkshops);

module.exports = router;
