import React, { useState } from "react";
import Seekerimg from './seeker.jpg'
import recruiterimg from './4153553.jpg'
import '../App.css';
import Navbar from "./navs/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import userData from "../../../../server/register";
// import { response } from "express";



const Auth = () => {
	const [name, setName] = useState("Jobseeker")

	const [typeOfReg, setTypeOfReg] = useState("Jobseeker")
	const [fullName, setFullName] = useState('')
	const [Email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [mobileNumber, setMobileNumber] = useState('')
	const [gender, setGender] = useState('')
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	const onSubmitForm =e=>{
		e.preventDefault();
		if(fullName && Email && mobileNumber && password !== ''){
			setTypeOfReg(name)
			axios.post('http://localhost:3001/signup', userData)
			.then(response=>{
				setData(response.data)
				if(response.status === 200){

					toast.success('Registration successfull', {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
						});
						setTimeout(() => {
							navigate('/Login')
						}, 5000);
					console.log("registration success");
				}
			})
			.catch(error =>{
			console.log(error.response.data)
			})
		}
		else{
			alert("enter details !")
		}
		console.log(userData);
	}
	 
	const userData= {
		typeOfReg : typeOfReg,
		...(name === "Jobseeker"? {fullName:fullName}: {companyName:fullName}),
		Email : Email,
		password : password,
		mobileNumber : mobileNumber,
		...(name === "Jobseeker"? {gender:gender}:{})
		}
		const handleInputChange = (event) => {
			const value = event.target.value;
			setName(value);
			setTypeOfReg(value);
		  };


	
	
	return (
		<div>
			<Navbar/>
   <ToastContainer
		position="top-right"
		autoClose={5000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
		theme="colored"
		/>

			<section className="section2">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="container-item mb-5">
								<div className="header text-center">
									<div className="head-item">
										<h3 className="m-0">Create an account</h3>
									</div>
									<div className="para-item">
										<p>It only a couple of minutes to get started!</p>
									</div>
								</div>
								<div className="row px-2">
									<div className="col-md-6">
										<div className="btn-item1 ">

											<button  className="btn w-100 mt-2" id="loginBtn" >
												Login
											</button>

										</div>
									</div>
									<div className="col-md-6">
										<div className="btn-item2 d-flex ">
											<button className="btn w-100 mt-2 d-flex justify-content-around align-items-center"
												id="singBtn">
												<div>Sign Up</div>
												<i className="fa-solid fa-check icon-item2 " id="signupCheck"></i>
											</button>
										</div>
									</div>
								</div>
								<div className="row px-2">
									<div className="col-md-12 ">
										<div className="btn-item1">
											<div className="  d-flex justify-content-around w-100 mt-2 p-2 border-item">
												<div id="jobBtn">
													<label for="jobCheck" className="job">Job Seeker</label>
													<input type="radio" name="ans" id="jobCheck" value="Jobseeker" className="text-end my-2 " onChange={handleInputChange} />

												</div>
												<span className="right-item1"></span>
												<div id="recuiterBtn">
													<label for="recruiterCheck" className="rec">Recruiters</label>
													<input type="radio" name="ans" id="recruiterCheck" value="recruiter" onChange={handleInputChange} className="text-end my-2 " />

												</div>
											</div>



										</div>
									</div>
								</div>

								
										<div>
											<form action="#" className="px-2" onSubmit={onSubmitForm}>
												<div className="py-2">
													<label for="name" id="fullName" className="py-1">{name === "Jobseeker"?"fullName" : "Company Name"}</label>
													<input type="text" id="name" className="form-control form-item" placeholder={name === "Jobseeker"? "Enter Your Fullname" : "Enter Your Companyname"} onChange={(e)=> setFullName(e.target.value)} value={fullName} />
												</div>
												<div className="py-2">
													<label for="Email" className="py-1">Email ID</label>
													<input type="text" id="Email" className="form-control form-item" placeholder="Enter your Email ID" onChange={(e)=> setEmail(e.target.value)} value={Email} />
												</div>
												<div className="py-2">
													<label for="psw" className="py-1">Password</label>
													<div className="flex-item">
														<input type="password" id="psw" className="form-control"
															placeholder="Minimum 6 charecter" onChange={(e)=>setPassword(e.target.value)} value={password} />
														<i className="fa-solid fa-eye-slash"></i>
													</div>
												</div>
												<div className="py-2">
													<label for="number" className="py-1">Mobile Number</label>
													<div className="d-flex">
														<button className="num-item dropdown-toggle" data-bs-toggle="dropdown">
															+91
														</button>
														<input type="text" id="number" className="form-control form-item"
															placeholder="Enter your mobile number" onChange={(e)=>setMobileNumber(e.target.value)} value={mobileNumber} />
													</div>
												</div>
												<div className="py-2">
													<div id="gender" className={name === "Jobseeker"? "jobseekerDisplay py-2": "genderDisplay"}>Gender</div>
													<div className={name === "Jobseeker"? "jobseekerdisplay row gender-item":"genderDisplay"} >
														<div className="col-lg-2 col-md-2 col-3" id="genderOptions1">
															<input type="radio" name="male" id="male" onChange={(e)=> setGender(e.target.value)} value={"male"} />
															<label for="male">Male</label>
														</div>
														<div className="col-lg-3 col-md-2 col-4" id="genderOptions2">
															<input type="radio" name="male" id="feMale" onChange={(e)=> setGender(e.target.value)} value={"female"} />
															<label for="feMale">Female</label>
														</div>
														<div className="col-lg-5 col-md-8 col-5" id="genderOptions3">
															<input type="radio" name="male" id="others"  onChange={(e)=> setGender(e.target.value)} value={"Prefer not to say"} />
															<label for="others">Prefer not to say</label> <br />
														</div>
													</div>
												</div>
												<div className="py-3">
													<i className="fa-solid fa-check icon-item"></i>
													I would like to get letest job updates on Whatsapp
												</div>
												<p className="para m-0">
													By clicking Register, you agree to the Terms and Conditions &
													Privacy Policy of Pabjobs.com
												</p>
												<button className="register" >Register Now</button>
												<div className="row">
													<div className="col-lg-12 d-lg-none d-md-block d-sm-block d-block py-1">
														<div className="navbar">
															<ul className="nav-item d-flex p-1">
																<li className="nav-link">Already Registerd?</li>
																<li className="nav-link text">
																	<span className="login"> Login</span> here
																</li>
															</ul>
														</div>
													</div>
												</div>
											</form>
										</div>
									
										{/* <div>
											<form action="#" className="px-2">
												<div className="py-2">
													<label for="name" id="fullName" className="py-1">Company Name</label>
													<input type="text" id="name" className="form-control" placeholder="Enter your company name" />
												</div>
												<div className="py-2">
													<label for="Email" className="py-1">Email ID</label>
													<input type="text" id="Email" className="form-control" placeholder="Enter your Email ID" />
												</div>
												<div className="py-2">
													<label for="psw" className="py-1">Password</label>
													<div className="flex-item">
														<input type="text" id="psw" className="form-control"
															placeholder="Minimum 6 charecter" />
														<i className="fa-solid fa-eye-slash"></i>
													</div>
												</div>
												<div className="py-2">
													<label for="number" className="py-1">Mobile Number</label>
													<div className="d-flex">
														<button className="num-item dropdown-toggle" data-bs-toggle="dropdown">
															+91
														</button>
														<input type="text" id="number" className="form-control"
															placeholder="Enter your mobile number" />
													</div>
												</div>
												<div className="py-3">
													<i className="fa-solid fa-check icon-item"></i>
													I would like to get letest job updates on Whatsapp
												</div>
												<p className="para m-0">
													By clicking Register, you agree to the Terms and Conditions &
													Privacy Policy of Pabjobs.com
												</p>
												<button className="register">Register Now</button>
												<div className="row">
													<div className="col-lg-12 d-lg-none d-md-block d-sm-block d-block py-1">
														<div className="navbar">
															<ul className="nav-item d-flex p-1">
																<li className="nav-link">Already Registerd?</li>
																<li className="nav-link text">
																	<span className="login"> Login</span> here
																</li>
															</ul>
														</div>
													</div>
												</div>
											</form>
										</div> */}
								

							</div>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-3 d-lg-block d-md-none d-none">

							{name === "Jobseeker" ?
								(
									<div>
										<div className="side-item">
											<div className="card-container">
												<img src={Seekerimg} alt="img" className="img-fluid jobimg" id="imgchange" />
											</div>
											<div className="item2 mt-4">
												<div className="my-2">
													<i className="fa-solid fa-check icon-item1"></i>
													<span className="profile-item"> Build your profile and let recuiters find you</span>
												</div>
												<div className="my-2">
													<i className="fa-solid fa-check icon-item1"></i>
													<span className="profile-item"> Get job posting delivered right to your email</span>
												</div>
												<div className="my-2">
													<i className="fa-solid fa-check icon-item1"></i>
													<span className="profile-item"> Find a job and grow your career</span>
												</div>
											</div>
										</div>
									</div>
								) :

								(
									<div>
										<div className="side-item">
											<div className="card-container">
												<img src={recruiterimg} alt="img" className="img-fluid jobimg" id="imgchange" />
											</div>
											<div className="item2 mt-4">
												<div className="my-2">
													<i className="fa-solid fa-check icon-item1"></i>
													<span className="profile-item"> Build your Bussines profile and find candidates </span>
												</div>
												<div className="my-2">
													<i className="fa-solid fa-check icon-item1"></i>
													<span className="profile-item"> Get Update aboutb your Jobposting</span>
												</div>
												<div className="my-2">
													<i className="fa-solid fa-check icon-item1"></i>
													<span className="profile-item"> Find Candiadates and easy your recruiting</span>
												</div>
											</div>
										</div>
									</div>
								)

							}

						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default Auth




