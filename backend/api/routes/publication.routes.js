const express = require("express");
const router = express.Router();
const {
	getAllPublications,
	savePublication,
	getApprovedPublications,
	getRejectedPublications,
	getPaidPublications,
	getUnpaidPublications,
	payPublications,
	approvePublications,
} = require("../controllers/publication.controller");

router.get("/", getAllPublications);
router.post("/create", savePublication);
router.get("/approved", getApprovedPublications);
router.get("/rejected", getRejectedPublications);
router.get("/paid", getPaidPublications);
router.get("/unpaid", getUnpaidPublications);
router.patch("/pay/:id", payPublications);
router.patch("/approve/:id", approvePublications);

module.exports = router;
