const express = require("express");
const router = express.Router();
const {
	getAllPresenters,
	savePresenter,
} = require("../controllers/presenter.controller");

router.get("/", getAllPresenters);
router.post("/create", savePresenter);

module.exports = router;
