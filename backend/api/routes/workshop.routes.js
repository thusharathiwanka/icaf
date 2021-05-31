const express = require("express");
const router = express.Router();
const {
	getAllWorkshops,
	saveWorkshop,
	getApprovedWorkshops,
	getRejectedWorkshops,
	getWorkshopsByPresenter,
	approveWorkshops,
	rejectWorkshops,
} = require("../controllers/workshop.controller");

router.post("/create", saveWorkshop);

router.get("/", getAllWorkshops);
router.get("/:id", getWorkshopsByPresenter);
router.get("/approved", getApprovedWorkshops);
router.get("/rejected", getRejectedWorkshops);

router.patch("/approve/:id", approveWorkshops);
router.patch("/reject/:id", rejectWorkshops);

module.exports = router;
