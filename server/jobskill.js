const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        Id:{
            type:String,
            require:true
        },
        JobSkill:{
            type:String,
            require:true
        },
    }

)
const JobSkills = mongoose.model("JobSkill",Schema);

module.exports = JobSkills