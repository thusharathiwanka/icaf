const express = require("express");
const router = express.Router();

router.get("/", getResearchers);
router.post("/create", saveResearcher);

module.exports = router;
