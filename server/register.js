const mongoose = require("mongoose");

const Employement = new mongoose.Schema(
    {
        ExpDetails: {
            type: String,
            require: true
        },
        SalaryDetails: {
            type: Array,
            require: true
        },
        userDesignation: {
            type: Array,
            require: true
        },
        userCategory: {
            type: Array,
            require: true
        },
        DescribeJob: {
            type: String,
            require: true
        },
        startDate: {
            type: Date,
            require: true
        },
        endDate: {
            type: Date,
            require: true
        },
        duration: {
            type: String,
            require: true
        },
        Notice: {
            type: Array,
            require: true
        }
    }
)

const projectDeatails = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        client: {
            type: String,
            require: true
        },
        details: {
            type: String,
            require: true
        },
        dateStart: {
            type: String,
            require: true
        },
        dateEnd: {
            type: String,
            require: true
        },
        projectType: {
            type: String,
            require: true
        },


    }
)

const workSample = new mongoose.Schema(
    {
        worktitle: {
            type: String,
            require: true
        },
        urlLink: {
            type: String,
            require: true
        },
        durationFrom: {
            type: String,
            require: true
        },
        durationTo: {
            type: String,
            require: true
        },
        desWork: {
            type: String,
            require: true
        }
    }
)
const whitePaper = new mongoose.Schema(
    {
        titlework: {
            type: String,
            require: true
        },
        linkUrl: {
            type: String,
            require: true
        },
        workDes: {
            type: String,
            require: true
        }
    }
)
const Presantation = new mongoose.Schema(
    {
        titleofwork: {
            type: String,
            require: true
        },
        linkofUrl: {
            type: String,
            require: true
        },
        workofDes: {
            type: String,
            require: true
        }
    }
)
const Patent = new mongoose.Schema(
    {
        pattentTitle: {
            type: String,
            require: true
        },
        pattentUrl: {
            type: String,
            require: true
        },
        pattentOffice: {
            type: String,
            require: true
        },
        Status: {
            type: String,
            require: true
        },
        pattentNum: {
            type: String,
            require: true
        },
        pattentDes: {
            type: String,
            require: true
        },
    }
)
const Certificate = new mongoose.Schema(
    {

        cname: {
            type: String,
            require: true
        },
        cId: {
            type: String,
            require: true
        },
        cUrl: {
            type: String,
            require: true
        },
        cValidfrom: {
            type: String,
            require: true
        },
        cValidto: {
            type: String,
            require: true
        },
    }
)

const Schema = new mongoose.Schema(
    {
        typeOfReg: {
            type: String,
            require: true
        },
        fullName: {
            type: String,
            require: true
        },
        companyName: {
            type: String,
            require: true
        },
        Email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        mobileNumber: {
            type: Number,
            require: true
        },
        gender: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        expDet: {
            type: String,
            require: true
        },
        expYears: {
            type: String,
            require: true
        },
        userResumeHeadline: {
            type: String,
            require: true
        },
        userProfile: {
            type: String,
            require: true
        },
        userskill: {
            type: Array,
            require: true
        },

        Employement: [Employement],
        projectDeatails: [projectDeatails],
        workSample: [workSample],
        whitePaper: [whitePaper],
        Presantation: [Presantation],
        Patent: [Patent],
        Certificate:[Certificate],




        userLocation: {
            type: String,
            require: true
        },
        desiredIndustry: {
            type: String,
            require: true
        },
        designationInd: {
            type: String,
            require: true
        },
        employeType: {
            type: String,
            require: true
        },
        typeJob: {
            type: String,
            require: true
        },
        desiredShift: {
            type: String,
            require: true
        },
        expectedSalary: {
            type: String,
            require: true
        },
        userDob: {
            type: String,
            require: true
        },
        userAge: {
            type: String,
            require: true
        },
        pAddress: {
            type: String,
            require: true
        },
        homeTown: {
            type: String,
            require: true
        },
        pincode: {
            type: String,
            require: true
        },
        marriegetype: {
            type: String,
            require: true
        },
        passport: {
            type: String,
            require: true
        },
        aNumber: {
            type: String,
            require: true
        },
        Addressproof: {
            type: Array,
            require: true
        },
        Languages: {
            type: Array,
            require: true
        },
        qualification: {
            type: Array,
            require: true
        },
        course: {
            type: Array,
            require: true
        },
        specialization: {
            type: Array,
            require: true
        },
        university: {
            type: String,
            require: true
        },
        yearofpass: {
            type: String,
            require: true
        },
        percentage: {
            type: String,
            require: true
        },
        courseType: {
            type: String,
            require: true
        },
        resumeItem: {
            type: String,
            require: true
        },
        userImage:{
            type: String,
            require: true
        },


    }
)

const userData = mongoose.model("userData", Schema);

module.exports = userData
