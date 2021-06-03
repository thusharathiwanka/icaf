const express = require("express");
const router = express.Router();
const {
	getAllResearchers,
	saveResearcher,
} = require("../controllers/researcher.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");

router.get("/", verifyModeratorAuth, getAllResearchers);
router.post("/create", saveResearcher);

module.exports = router;
