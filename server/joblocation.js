const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        Id:{
            type:String,
            require:true
        },
        JobLocation:{
            type:String,
            require:true
        },
    }

)
const JobLoc = mongoose.model("JobLoc",Schema);

module.exports = JobLoc