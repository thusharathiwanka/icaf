const express = require("express");
const Router = express.Router();

const {GetAllNotices,CreateNotice} = require("../controllers/notice.controller.js");

Router.get("/", GetAllNotices);
Router.post("/", CreateNotice);

module.exports = Router;
