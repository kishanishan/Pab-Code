const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        Id:{
            type:String,
            require:true
        },
        JobCategory:{
            type:String,
            require:true
        },
    }

)
const JobCat = mongoose.model("JobCat",Schema);

module.exports = JobCat