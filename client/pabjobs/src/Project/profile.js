import React from 'react'
import "../Project/profile.css";
import Navlogo from '../Project/navs/pabjobs-logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Profile() {

    const [loggedProfile, setLoggedProfile] = useState([])


    const token = localStorage.getItem('token');
    const storedData = localStorage.getItem('id');

    // console.log(storedData)

    const userData = JSON.parse(storedData);
    const id = userData.user.id;
    // console.log(id)
    // console.log(token)
    const fetchApi = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/user/${id}`, {
                headers: {
                    "token": token,
                },
            });
            setLoggedProfile(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };


    useEffect(() => {
        fetchApi()

    }, [])

    const [fullName, setFullName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [expDet, setExpDet] = useState('');
    const [expYears, setExpYears] = useState('');


    const handleUpdateDetails = async () => {
        const storedData = localStorage.getItem('id');
        const userData = JSON.parse(storedData);
        const id = userData.user.id
        try {
            const response = await axios.put(`http://localhost:3001/user/${id}`, {
                fullName,
                state,
                city,
                expDet,
                expYears
            });


            console.log('Details updated:', response.data);
        } catch (error) {
            console.error('Error updating details:', error);
        }
    };

    const [showDetails, setShowDetails] = useState(false);

    const handleRadioChange = (e) => {
        setExpDet(e.target.value);
        setShowDetails(e.target.value === "Experience")
        if (e.target.value === "Fresher") {
            setExpYears("0 years")
        }

    };
    console.log(showDetails);
    useEffect(() => {
        setState(loggedProfile.state || "")
        setFullName(loggedProfile.fullName || "")
        setCity(loggedProfile.city || "")
        setExpDet(loggedProfile.expDet || "");
        setExpYears(loggedProfile.expYears || "");


    }, [loggedProfile])


    console.log(expDet);
    console.log(expYears);


    const fileInputRef = useRef(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage) {
            uploadImage(selectedImage);

        }
    };
    const uploadImage = async (imageFile) => {
        const imageURL = URL.createObjectURL(imageFile);
        setUploadedImageUrl(imageURL);
    };

    const Navigate = useNavigate()
    const GotoBrowse = () => {
        Navigate('/browse')
    }
    const GotoLogin = () => {
        Navigate('/login')
    }
    const GotoResume = () => {
        Navigate('/resume')
    }
    const GotoHome = () => {
		Navigate("/home");
	};
    const GotoJobs = () => {
		Navigate("/job");
	};
    const GotoApplied = () =>{
        Navigate("/applied");

    }
    const GotoJobalert = () => {
        Navigate('/jobalert')
    }
    const GotoSaved = () => {
        Navigate('/savedjobs')
    }
    const GotoPassword = () => {
        Navigate('/password')
    }


    return (
        <div>
            <section className="section1 sticky-top">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-10'>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="logo-item m-auto ">
                                    <img src={Navlogo} alt="logo" className="img-fluid logo-item1" />
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse m-auto" id="navbarNav">

                                    <ul className="navbar-nav mx-5">
                                        <li className="  nav-item  mx-2">
                                            <a href="" className=" link-item nav-link active5 " onClick={GotoHome}>HOME</a>
                                        </li>
                                        <li className=" nav-item browse1  mx-2">
                                            <a href="" className="dropdown-toggle link-item nav-link browse " data-bs-toggle="dropdown"
                                                id="browseItem">BROWSE JOBS</a>
                                            <ul className="dropdown-menu filter1" aria-labelledby='dropdown2'>
                                                <li><button className="dropdown-item" onClick={GotoBrowse}  >My Browse Filter list</button></li>
                                            </ul>
                                        </li>
                                        <li className="  nav-item browse1 mx-2">
                                            <a href="" className="dropdown-toggle filter1 link-item  jobs3 nav-link" data-bs-toggle="dropdown">JOBS</a>
                                            <ul className="dropdown-menu " aria-labelledby='dropdown2'>
                                            <button className="bitem" onClick={GotoJobs}>
												<li>
													<a className="dropdown-item" href="#">
														All Jobs
													</a>
												</li>
											</button>                                                 
                                            <li><a className="dropdown-item" href="#">Company Jobs</a></li>
                                                <li><a className="dropdown-item" href="#">Category Jobs</a></li>
                                                <li><a className="dropdown-item" href="#">Location Jobs</a></li>
                                                <li><a className="dropdown-item" href="#">Destignation Jobs</a></li>
                                                <li><a className="dropdown-item" href="#">Skill Jobs</a></li>

                                            </ul>
                                        </li>
                                    </ul>


                                    <li className='nav-item list-dropdown'>
                                        <div className='list-dropdown1'>
                                            <button className=" user-btn-item d-flex " id='dropdown3' data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-circle-user  px-3 useritem" id="userId"></i>
                                                <div className=""><i class="fa-solid fa-caret-down dropitem"></i></div>
                                                <ul className="dropdown-menu " aria-labelledby='dropdown3'>
                                                    <li><a className="dropdown-item" href="#">Candidate Profile</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoResume} >Resume</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoApplied}>Applied Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoJobalert}>Job alerts</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoSaved}>Saved Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoPassword}>Change Password</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoLogin}>Logout</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </li>
                                </div>
                            </nav>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3 my-5">
                            <div className="profile-item">
                                <div className="icon-item-user text-center">
                                    <img src={uploadedImageUrl || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} className='img-fluid p-4 user_img1' alt='img' onClick={handleImageClick} />
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="button-items ">
                                    <button className="button-profile mt-2">Candidate Profile</button>
                                    <button className="button-profile-item mt-2" onClick={GotoResume}>Resume</button>
                                    <button className="button-profile-item mt-2" onclick={GotoApplied}>Applied Jobs</button>
                                    <button className="button-profile-item mt-2" onclick={GotoJobalert}>job Alerts</button>
                                    <button className="button-profile-item mt-2" onclick={GotoSaved}>Saved Jobs</button>
                                    <button className="button-profile-item mt-2" onclick={GotoPassword}>Change Password</button>
                                    <button className="button-profile-item mt-2">Log Out</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 my-5">
                            <div className="info-item p-3">
                                <div className="py-3">
                                    <h4 className="basic-item">Basic Information</h4>
                                </div>
                                <div className="py-2">
                                    <label for="name" className="py-1"> Name</label>
                                    <input type="text" id="name" className="form-control inputfield-item" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>
                                <div className="py-3">
                                    <p className="ex-item">Experience</p>
                                    <input type="radio" name="experienceType" id="freshItem" className="mx-4 inputfield-item" value="Fresher"
                                        onChange={handleRadioChange} checked={expDet === "Fresher"} /> Fresher
                                    <input type="radio" name="experienceType" id="experienceItem" className="mx-4 inputfield-item" value="Experience"
                                        onChange={handleRadioChange} checked={expDet === "Experience"} /> Experience
                                </div>
                                {showDetails && (
                                    <div className='my-3'>
                                        <p className="ex-item m-0"> Total Experience</p>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div>
                                                    <select className='w-100 p-2 inputfield-item select-Experience-item' id="experienceYears" name="experienceYears" onChange={(e) => setExpYears(e.target.options[e.target.selectedIndex].getAttribute("data-value"))}>
                                                        <option value="years" >Years</option>
                                                        <option data-value="0-2 years" value={expYears || ""}  >0-2 years</option>
                                                        <option data-value="2-5 years" value={expYears || ""}  >2-5 years</option>
                                                        <option data-value="5-7 years" value={expYears || ""}>5-7 years</option>
                                                        <option data-value="7-10 years" value={expYears || ""} >7-10 years</option>
                                                        <option data-value="10+ years" value={expYears || ""}>10+ years</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'></div>
                                        </div>

                                    </div>
                                )}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label for="state">State</label>
                                        <div className="same-item">
                                            <input type="text" className="form-control " id="state" placeholder="Select your state" value={state}
                                                onChange={(e) => setState(e.target.value)} />
                                            <i className="fa-solid fa-chevron-down align-self-center px-3"></i>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <label for="state">Current Location</label>
                                        <div className="same-item">
                                            <input type="text" className="form-control" id="state" placeholder="Select your state" value={city}
                                                onChange={(e) => setCity(e.target.value)} />
                                            <i className="fa-solid fa-chevron-down align-self-center px-3"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="my-3">
                                            <label for="number">Mobile Number</label>
                                            <input type="text" name="num" id="number" placeholder="Enter your mobile number" value={loggedProfile.mobileNumber || ''} readOnly
                                                className="form-control inputfield-item" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="my-3">
                                            <label for="email">Email</label>
                                            <input type="text" name="email" id="email" placeholder="Enter your Email address" value={loggedProfile.Email || ''} readOnly
                                                className="form-control inputfield-item" />
                                        </div>
                                    </div>
                                </div>
                                <div className="update-button">
                                    <button className="btn-update" onClick={handleUpdateDetails}>Update Details</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile