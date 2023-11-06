const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./register");
const jwt = require("jsonwebtoken");
const BrowseData = require("./browse");
const middleware = require("./middleware");
const JobLoc = require("./joblocation");
const JobCom = require("./jobcompany");
const JobCat = require("./jobcategory");
const JobDesig = require("./jobdesignation");
const JobSkills = require("./jobskill")


const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://kishan:kishan123@cluster0.wkkc23h.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => console.log("DB Connect"))
    .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
    res.send("hello")
})


app.post("/signup", async (req, res) => {
    const { user } = req.body
    console.log(req.body)

    try {
        const user = await userData.findOne({ Email: req.body.Email });
        if (!user) {
            const newUser = {
                typeOfReg: req.body.typeOfReg,
                fullName: req.body.fullName,
                Email: req.body.Email,
                password: req.body.password,
                mobileNumber: req.body.mobileNumber,
                gender: req.body.gender,
                companyName: req.body.companyName,
                experienceType: req.body.experienceType
            };

            const userDetails = await userData.create(newUser)
            res.status(200).send("user created successfully")
        }
        else {
            res.status(402).json("user already registered")

        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(500).json({ messege: e.message })
    }
});

app.get("/allusers", middleware, async (req, res) => {
    const allusers = await userData.find({})
    res.status(200).send(allusers)
})

app.get("/user/:id", middleware, async (req, res) => {
    const { id } = req.params;
    // Assuming your userData model provides a findById method
    try {
        const user = await userData.findById(id);
        if (!user) {
            res.status(404).json("User not found");
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json("Internal server error");
    }
});

app.put('/user/:id', async (req, res) => {
    try {
        const { fullName, state, city, expDet, expYears, userResumeHeadline, userProfile, userskill, Employement, projectDeatails, workSample, whitePaper, Presantation,
            Patent, Certificate,userLocation,desiredIndustry,designationInd,employeType,typeJob,desiredShift,expectedSalary,userDob,userAge,pAddress,homeTown,pincode,marriegetype,passport,aNumber,Addressproof,Languages,
            qualification, course, specialization, university, yearofpass, percentage, courseType, resumeItem, userImage
         } = req.body;
        console.log(Employement)
        console.log(req.params.id);
        const updatedProfile = await userData.findByIdAndUpdate(
            req.params.id,
            { fullName, state, city, expDet, expYears, userResumeHeadline, userProfile, userskill, Employement, projectDeatails, workSample, whitePaper, Presantation,
                Patent, Certificate, userLocation,desiredIndustry,designationInd,employeType,typeJob,desiredShift,expectedSalary,userDob,userAge,pAddress,homeTown,pincode,marriegetype,passport,aNumber,Addressproof,Languages,
                qualification, course, specialization,university, yearofpass, percentage, courseType, resumeItem, userImage
            },
            { new: true }
        );
        console.log(updatedProfile);
        res.status(200).json(updatedProfile);
        console.log("updated");
    } catch (error) {
        res.status(500).json({ error: 'Error updating profile data' });
    }

});


app.delete('/user/Employement/:id', async (req, res) => {
  const { id } = req.params.id;
  try {
    const user = await userData.findByIdAndRemove(id); 
    if (user) {
      return res.status(404).json("User not found");
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json("Internal server error");
  }
});


app.post('/user/:id/employement/delete/:employementId', async (req, res) => {
    try {
        const userId = req.params.id;
        const employementId = req.params.employementId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const employementIndex = user.Employement.findIndex(emp => emp._id == employementId);

        if (employementIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.Employement.splice(employementIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

app.post('/user/:id/projectDeatails/delete/:projectId', async (req, res) => {
    try {
        const userId = req.params.id;
        const projectId = req.params.projectId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const projectIndex = user.projectDeatails.findIndex(emp => emp._id == projectId);

        if (projectIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.projectDeatails.splice(projectIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

app.post('/user/:id/workSample/delete/:WorkId', async (req, res) => {
    try {
        const userId = req.params.id;
        const WorkId = req.params.WorkId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const WorkIndex = user.workSample.findIndex(emp => emp._id == WorkId);

        if (WorkIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.workSample.splice(WorkIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

app.post('/user/:id/whitePaper/delete/:WhiteId', async (req, res) => {
    try {
        const userId = req.params.id;
        const WhiteId = req.params.WhiteId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const WhiteIndex = user.whitePaper.findIndex(emp => emp._id == WhiteId);

        if (WhiteIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.whitePaper.splice(WhiteIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

app.post('/user/:id/Presantation/delete/:PresantationId', async (req, res) => {
    try {
        const userId = req.params.id;
        const PresantationId = req.params.PresantationId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const PresantationIndex = user.Presantation.findIndex(emp => emp._id == PresantationId);

        if (PresantationIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.Presantation.splice(PresantationIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

app.post('/user/:id/Patent/delete/:PatentId', async (req, res) => {
    try {
        const userId = req.params.id;
        const PatentId = req.params.PatentId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const PatentIndex = user.Patent.findIndex(emp => emp._id == PatentId);

        if (PatentIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.Patent.splice(PatentIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

app.post('/user/:id/Certificate/delete/:CertificateId', async (req, res) => {
    try {
        const userId = req.params.id;
        const CertificateId = req.params.CertificateId;

        const user = await userData.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const CertificateIndex = user.Certificate.findIndex(emp => emp._id == CertificateId);

        if (CertificateIndex === -1) {
            return res.status(404).json({ error: 'Employment not found' });
        }

        user.Certificate.splice(CertificateIndex, 1); // Remove the employment entry

        await user.save(); // Save the updated user object

        res.status(200).json(user); // Respond with the updated user object
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employment'});
    }
});

// login
app.post("/login", async (req, res) => {
    const { Email, password } = req.body;

    try {
        const user = await userData.findOne({ Email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const userPassword = user.password;
        if (password === userPassword) {
            // Include user details in the token payload
            const payload = {
                user: {
                    id: user._id,
                    // Include other relevant user details
                }
            };

            jwt.sign(payload, "jwtpassword", { expiresIn: 3600000 }, (err, token) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Error creating token" });
                }
                return res.json({ token, payload });
            });
        } else {
            res.status(401).send("Incorrect password");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


//Browse

app.post('/browsers', async (req, res) => {
    const { JobId, designation, companyName, salary, jobtype, location, experience, publish, jobtext, posted, expdetails, jobopening, jobApplication, jobDescription, jobSkills, jobRole, jobPara, Skills } = req.body
    const newData = BrowseData({
        JobId,
        designation,
        companyName,
        salary,
        jobtype,
        location,
        experience,
        publish,
        jobtext,
        posted,
        expdetails,
        jobopening,
        jobApplication,
        jobDescription,
        jobSkills,
        jobRole,
        jobPara,
        Skills,


    })
    newData.save()
    res.send("data created")


})
app.get("/indJob/:JobId", middleware, async (req, res) => {
    const { JobId } = req.params

    const job = await BrowseData.findOne({ JobId: JobId })

    if (!job) {
        res.status(400).json("job not found");
    }
    res.status(200).send(job)
})
app.get("/alljobs", middleware, async (req, res) => {
    const alljobs = await BrowseData.find({})
    res.status(200).send(alljobs)
})


//Joblocation
app.post('/job_location', async (req, res) => {
    const { Id, JobLocation } = req.body
    const newData = JobLoc({
        Id,
        JobLocation,

    })
    newData.save()
    res.send("data created")


})
app.get("/joblocation", middleware, async (req, res) => {
    const joblocation = await JobLoc.find({})
    res.status(200).send(joblocation)
})



//Jobcompany
app.post('/job_company', async (req, res) => {
    const { Id, JobComapny } = req.body
    const newData = JobCom({
        Id,
        JobComapny,

    })
    newData.save()
    res.send("data created")


})
app.get("/jobcompany", middleware, async (req, res) => {
    const jobcompany = await JobCom.find({})
    res.status(200).send(jobcompany)
})

//Jobcategory
app.post('/job_category', async (req, res) => {
    const { Id, JobCategory } = req.body
    const newData = JobCat({
        Id,
        JobCategory,

    })
    newData.save()
    res.send("data created")


})
app.get("/jobcategory", middleware, async (req, res) => {
    const jobcategory = await JobCat.find({})
    res.status(200).send(jobcategory)
})
//Jobdesignation
app.post('/job_designation', async (req, res) => {
    const { Id, JobDesignation } = req.body
    const newData = JobDesig({
        Id,
        JobDesignation,

    })
    newData.save()
    res.send("data created")


})
app.get("/jobdesignation", middleware, async (req, res) => {
    const jobdesignation = await JobDesig.find({})
    res.status(200).send(jobdesignation)
})

// Jobskill

app.post('/job_skill', async (req, res) => {
    const { Id, JobSkill } = req.body
    const newData = JobSkills({
        Id,
        JobSkill,

    })
    newData.save()
    res.send("data created")


})
app.get("/jobskill", middleware, async (req, res) => {
    const JobSkill = await JobSkills.find({})
    res.status(200).send(JobSkill)
})


app.listen(3001, () => {
    console.log("server running")
}
)