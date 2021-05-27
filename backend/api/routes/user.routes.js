const express = require("express");
const router = express.Router();
const { getAllUsers, saveUser } = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.post("/", saveUser);

module.exports = router;
