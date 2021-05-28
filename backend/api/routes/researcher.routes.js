const express = require("express");
const router = express.Router();
const {
	getAllResearchers,
	saveResearcher,
} = require("../controllers/researcher.controller");

router.get("/", getAllResearchers);
router.post("/create", saveResearcher);

module.exports = router;
