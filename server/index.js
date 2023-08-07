const  express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userData = require("./register");
const jwt = require("jsonwebtoken");
const BrowseData = require("./browse");
const middleware = require("./middleware");

const app = express()
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://kishan:kishan123@cluster0.wkkc23h.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>console.log("DB Connect"))
.catch((err)=>console.log(err.message));

app.get("/", (req,res)=> {
    res.send("hello")
})


app.post ("/signup", async(req,res)=>{
    const { user } = req.body
    console.log(req.body)

    try{
        const user = await userData.findOne({Email: req.body.Email});
        if (!user){
            const newUser = {
                typeOfReg: req.body.typeOfReg,
                fullName: req.body.fullName,
                Email: req.body.Email,
                password: req.body.password,
                mobileNumber: req. body.mobileNumber,
                gender:req.body.gender,
                companyName: req.body.companyName
            };

            const userDetails = await userData.create(newUser)
            res.status(200).send("user created successfully")
        }
        else{
            res.status(402).json("user already registered")

        }
    }
    catch(e){
        console.log(e.message);
        return res.status(500).json({messege:e.message})
    }
});

app.get("/allusers", async (req, res) =>{
    const allusers = await userData.find({})
    res.status(200).send(allusers)
})




app.get("/user/:id", async (req, res) =>{
    const {id} = req.params
    const user = await userData.findById({_id: id})
    if (!user)
    {
        res.status(400).json("user not found");
    }
    res.status(200).send(user)  
})


// login

app.post("/login", async(req,res)=>{
    const {Email, password} = req.body

    const isUserExist = await userData.findOne({Email});
    console.log(isUserExist);
    if(!isUserExist){
        return res.status(400).send("user not found");
    }

        const userPassword = isUserExist.password

        if(password === userPassword){
            let payload = {
                user : isUserExist.id
            }
            jwt.sign(payload, 'jwtpassword',{expiresIn:4000000},
            (err,token)=>{
                if(err) throw err
                return res.json({token})
            }
            )
        }
        else{
            res.send("incorrect password");
        }
    
   
})
//Browse

app.post('/browsers', async(req,res)=>{
    const{JobId,  designation, companyName, salary, jobtype, location, experience, publish, jobtext, posted, expdetails, jobopening, jobApplication, jobDescription, jobSkills, jobRole, jobPara, Skills} = req.body
   const newData = BrowseData ({
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
app.get("/indJob/:JobId" , middleware, async(req,res)=>{
    const {JobId} = req.params

    const job = await BrowseData.findOne({JobId: JobId})
    
    if(!job)
    {
        res.status(400).json("job not found");
    }
    res.status(200).send(job) 
})
app.get("/alljobs", middleware, async(req,res)=>{
    const alljobs = await BrowseData.find({})
    res.status(200).send(alljobs)
})

app.listen(3001,()=>{
    console.log("server running")
}
)