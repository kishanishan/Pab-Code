const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        Id:{
            type:String,
            require:true
        },
        JobDesignation:{
            type:String,
            require:true
        },
    }

)
const JobDesig = mongoose.model("JobDesignation",Schema);

module.exports = JobDesig