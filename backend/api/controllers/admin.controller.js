const Notice = require('../models/notice.model')
const Attendee = require('../models/attendee.model')
const Researcher = require('../models/researcher.model')
const Presenter = require('../models/presenter.model')

const approveNotice = async (req,res) => {
    try{
        const firstNotice = await Notice.findByIdAndUpdate(req.params.id,
            {
                isApproved : "Approved",
            })
        res.status(200).json({message: 'notice successfully approved'})
    }catch(err){
        res.status(400).json({message: err.message })
    }
}

const rejectNotice = async (req,res) => {
    try{
        const firstNotice = await Notice.findByIdAndUpdate(req.params.id,
            {
                isApproved : "Rejected",
            })
        res.status(200).json({message: 'notice successfully rejected'})
    }catch(err){
        res.status(400).json({message: err.message })
    }
}

const attendeesCount = async(req,res)=>{
    try{
        const attendeeCount = await Attendee.count()
        res.json(attendeeCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const researchersCount = async(req,res) => {
    try{
        const researcherCount = await Researcher.count();
        res.json(researcherCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const presentersCount = async(req,res) => {
    try{
        const presentersCount = await Presenter.count();
        res.json(presentersCount)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getPendingNotice = async(req,res)=>{
    try{
        const pendingnotice = await Notice.find({
            isApproved:"Pending"
        })
        res.json(pendingnotice)
    }catch(err){
        res.status(500).json({massage: err.message})
    }
}




module.exports = { approveNotice, rejectNotice ,attendeesCount, researchersCount, presentersCount, getPendingNotice}