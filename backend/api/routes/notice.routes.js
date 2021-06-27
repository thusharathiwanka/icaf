const express = require("express");
const Router = express.Router();

const {GetAllNotices,CreateNotice ,GetByapproval,getNoticeById,UpdateOneNotice,DeleteOneNotice ,GetNoticeByMonth} = require("../controllers/notice.controller.js");

Router.get("/", GetAllNotices);
Router.get("/:id", getNoticeById);
Router.delete("/delete/:id", DeleteOneNotice);
Router.get("/approval/:isApproved", GetByapproval);
Router.get("Month/:month", GetNoticeByMonth);


Router.post("/", CreateNotice);
Router.put("/:id", UpdateOneNotice);



module.exports = Router;
