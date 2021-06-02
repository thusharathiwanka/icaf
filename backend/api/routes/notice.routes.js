const express = require("express");
const Router = express.Router();

const { GetAllNotices } = require("../controllers/blog.controller");

Router.get("/", GetAllNotices);

module.exports = Router;
