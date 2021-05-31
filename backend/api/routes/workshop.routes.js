const express = require("express");
const router = express.Router();
const {
	getAllWorkshops,
	saveWorkshop,
	getApprovedWorkshops,
	getRejectedWorkshops,
	getWorkshopByPresenter,
	approveWorkshops,
	rejectWorkshops,
} = require("../controllers/workshop.controller");

router.get("/", getAllWorkshops);
router.get("/:id", getWorkshopsByPresenter);
router.post("/create", saveWorkshop);
router.get("/approved", getApprovedWorkshops);
router.get("/rejected", getRejectedWorkshops);
router.get("/approve/:id", approveWorkshops);
router.get("/reject/:id", rejectWorkshops);

module.exports = router;
