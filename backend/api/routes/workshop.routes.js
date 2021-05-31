const express = require("express");
const router = express.Router();
const {
	getAllWorkshops,
	saveWorkshop,
	getApprovedWorkshops,
	getRejectedWorkshops,
	getWorkshopByPresenter,
} = require("../controllers/workshop.controller");

router.get("/", getAllWorkshops);
router.post("/create", saveWorkshop);
router.get("/approved", getApprovedWorkshops);
router.get("/rejected", getRejectedWorkshops);
// router.get("/approve/:id", getRejectedWorkshops);
// router.get("/:id", getWorkshopsByPresenter);

module.exports = router;
