const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
    {
        typeOfReg:{
            type:String,
            require:true
        },
        fullName:{
            type:String,
            require:true
        },
        companyName:{
            type:String,
            require:true
        },
        Email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        mobileNumber:{
            type:Number,
            require:true
        },
        gender:{
            type:String,
            require:true
        }
    }
)

const userData = mongoose.model("userData",Schema);

module.exports = userData