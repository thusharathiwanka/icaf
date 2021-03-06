const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    createdAt: { type: Date, required: true, default: Date.now() },
    tobePost:{type:Date , required:true, default:Date.now()},
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        trim:true,
        required:true,
        ref:"moderators",
    },
    isApproved :{type:String,required:true,default:"Pending"},
    topic:{type:String,required:true,trim:true},
    content:{type:String,required:true,trim:true},

});


const notice = mongoose.model("notices",noticeSchema);
module.exports = notice;




