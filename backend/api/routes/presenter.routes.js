const express = require("express");
const router = express.Router();
const {
	getAllPresenters,
	savePresenter,
} = require("../controllers/presenter.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");

router.get("/", verifyModeratorAuth, getAllPresenters);
router.post("/create", savePresenter);

module.exports = router;
