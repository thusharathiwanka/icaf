const express = require('express')
const Router = express.Router()

const { approveNotice , getNotice , attendeesCount, researchersCount , presentersCount, getPendingNotice} = require("../controllers/admin.controller");


Router.get("/getnotice", getNotice)
Router.patch("/accept/:id" , approveNotice)
Router.get("/attendeecount", attendeesCount)
Router.get("/researcherscount" , researchersCount)
Router.get("/presenterscount", presentersCount)
Router.get("/notice/pending", getPendingNotice)


module.exports = Router;