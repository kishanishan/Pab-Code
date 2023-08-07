import React from "react";
import googlePng from './google.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./navs/Navbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { response } from "express";

function Login(){
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const userData = {
        Email:Email,
        password:password
    }

    const onSubmit = e =>{
        e.preventDefault();
        if(Email && password !== ''){
            axios.post("http://localhost:3001/login",userData)
            .then(response => {
                if(response.status === 200){
                    let jwtToken = response.data.token
                    localStorage.setItem('token',jwtToken)
                    toast.success('Login successfull', {
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
                            navigate("/home")
						}, 5000);
                    console.log("login success");
                }
            })
            .catch(error =>{
                console.log(error.response.data)
            })
        }
        else{
            alert("enter the details!")
        }
    }



    // const navigate = useNavigate();

    // const signUp = () => {
    //     navigate('/Auth');
    // }
    
    return(
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
        <div className="container ">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="container-item mb-5 px-4">
                        <div className="header text-center">
                            <div className="head-item">
                                <h3 className="m-0">Login</h3>
                            </div>
                            <div className="para-item">
                                <p>It only takes a couple of minutes to get started!</p>
                            </div>
                        </div>
                        <form onSubmit={onSubmit}>
                        <div className="py-2">
                            <label for="Email" className="py-1">Email ID</label>
                            <input type="text" id="Email" className="form-control form-item" placeholder="Enter your Email ID" onChange={(e)=>setEmail(e.target.value)} value={Email}/>
                        </div>  
                        <div className="py-2">
                            <label for="psw" className="py-1">Password</label>
                            <div className="flex-item">
                                <input type="password" id="psw" className="form-control" placeholder="Minimum 6 charecter" onChange={(e)=> setPassword(e.target.value)} value={password} />
                                <i className="fa-solid fa-eye-slash"></i>
                            </div>
                   
                        </div>
                        <div className="text-end">
                            <a href="" className="para-item">Forgot Password?</a>
                        </div>
                        <button className=" button-item w-100 my-2">Login</button>
                        <div className="text-center my-2">
                            <a href="http://127.0.0.1:5500/otp.html" className="otp" onclick="open()">Login via OTP</a>
                        </div>
                        <div className="text-center mb-3 ">
                            <button className="google-item mb-1">
                              <img src={googlePng} alt="google" className="img-fluid google mx-2"/>
                                <span className="mx-1">Sign in with Google</span>
                            </button>
                            <div className="text-center d-lg-none d-md-block d-sm-block d-block">
                                <button className="free-item my-2" id="freeBtn">Register for Free</button>
                            </div>
                        </div>
                        </form>
                        

                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-lg-3 d-lg-block d-md-none d-sm-none d-none">
                    <div className="side-item">
                      
                            <div className="card">
                                <div className="card-container text-center py-3">
                                <span className="new-item">New to Pabjobs?</span>
                                <img src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?size=626&ext=jpg&ga=GA1.2.858548410.1688366189&semt=sph"
                                    alt="img" class="img-fluid jobimg" id="imgchange" />
                            </div>
                        </div>
                      
                        <div className="item2 mt-2">
                            <div className="my-1">
                                <i className="fa-solid fa-check icon-item1"></i>
                                <span className="profile-item px-1"> One click apply using pabjobs profile.</span>
                            </div>
                            <div className="my-1">
                                <i className="fa-solid fa-check icon-item1"></i>
                                <span className="profile-item px-1"> Get relavant jobs recommedations.</span>
                            </div>
                            <div className="my-1">
                                <i className="fa-solid fa-check icon-item1"></i>
                                <span className="profile-item px-1"> Showcase profile to top companies and consultant.</span>
                            </div>
                            <div className="my-1">
                                <i className="fa-solid fa-check icon-item1"></i>
                                <span className="profile-item px-1"> know application status on applied jobs.</span>
                            </div>
                        </div>
                        <button className="free-item my-2 mb-4 " id="registerBtn" > Register for Free</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}
export default Login