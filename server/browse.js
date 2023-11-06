const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        JobId:{
            type:String,
            require:true
        },
        designation:{
            type:String,
            require:true
        },
        companyName:{
            type:String,
            require:true
        },
        salary:{
            type:String,
            require:true
        },
        jobtype:{
            type:String,
            require:true
        },
        location:{
            type:String,
            require:true
        },
        experience:{
            type:String,
            require:true
        },
        publish:{
            type:Date,
            require:true
        },
        jobtext:{
            type:String,
            require:true
        },
        posted:{
            type:String,
            require:true
        },
        expdetails:{
            type:String,
            require:true
        },
        jobopening:{
            type:String,
            require:true
        },
        jobApplication:{
            type:String,
            require:true
        },
        jobDescription:{
            type:String,
            require:true
        },
        jobSkills:{
            type:String,
            require:true
        },
        jobRole:{
            type:String,
            require:true
        },
        jobPara:{
            type:String,
            require:true
        },
        Skills:{
            type:Array,
            require:true
        },
       
    }
)

const BrowseData = mongoose.model("BrowseData",Schema);

module.exports = BrowseData