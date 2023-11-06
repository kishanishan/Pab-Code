const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        Id:{
            type:String,
            require:true
        },
        JobComapny:{
            type:String,
            require:true
        },
    }

)
const JobCom = mongoose.model("JobCom",Schema);

module.exports = JobCom