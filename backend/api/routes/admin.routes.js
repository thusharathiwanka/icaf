const express = require('express')
const Router = express.Router()

const { approveNotice, rejectNotice, attendeesCount, researchersCount , presentersCount, getPendingNotice} = require("../controllers/admin.controller");


Router.patch("/accept/:id" , approveNotice)
Router.get("/attendeecount", attendeesCount)
Router.get("/researcherscount" , researchersCount)
Router.get("/presenterscount", presentersCount)
Router.get("/notice/pending", getPendingNotice)
Router.patch("/reject/:id", rejectNotice)


module.exports = Router;