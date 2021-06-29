const express = require("express");
const Router = express.Router();

const {GetAllNotices,CreateNotice ,GetByapproval,getNoticeById,UpdateOneNotice,DeleteOneNotice ,GetNoticeByMonth, getbyDateNotice} = require("../controllers/notice.controller.js");

Router.get("/", GetAllNotices);
Router.get("/approved", getbyDateNotice);
Router.get("/:id", getNoticeById);
Router.delete("/delete/:id", DeleteOneNotice);

Router.get("/approval/:isApproved", GetByapproval);
Router.get("/month/:month", GetNoticeByMonth);


Router.post("/", CreateNotice);
Router.put("/:id", UpdateOneNotice);



module.exports = Router;
