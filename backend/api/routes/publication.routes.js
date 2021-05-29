const express = require("express");
const route = express.Router();
const {
	getAllPublications,
	savePublication,
	getApprovedPublications,
	getRejectedPublications,
	getPaidPublications,
	getUnpaidPublications,
} = require("../controllers/publication.controller");

route.get("/", getAllPublications);
route.post("/create", savePublication);
route.get("/approved", getApprovedPublications);
route.get("/rejected", getRejectedPublications);
route.get("/paid", getPaidPublications);
route.get("/unpaid", getUnpaidPublications);

module.exports = route;
