import React from 'react';
import Navlogo from "../Project/navs/pabjobs-logo.png";
import "../Project/job.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
// import pabimg from "../Project/pab bottom-logo.jpg";

function Designation() {
	const [Jobdesignation, setjobdesignation] = useState([]);

	const fetchApi = async (req, res) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get("http://localhost:3001/jobdesignation", {
				headers: {
					token: `${token}`,
				},
			});
			setjobdesignation(response.data);
			// if (response.data.length > 0) {
			// 	setJobDes(response.data[0]);
			// 	setSelectedContenet(response.data[0].JobId)
			// }
		} catch (error) {
			console.error('Error:', error)
		}

	};
	useEffect(() => {
		fetchApi();
	}, []);


    const Navigate = useNavigate();
	const GotoHome = () => {
		Navigate("/home");
	};
	const GotoAuth = () => {
		Navigate("/auth");
	};
	const GotoBrowse = () => {
		Navigate("/browse")
	}
    const GotoApp = ()=>{
        Navigate("/job")

    }
    const GotoLocation = () => {
		Navigate("/location")
	}
    const GotoCategory = () => {
		Navigate("/category")
	}
    const Gotoskill = () => {
		Navigate("/skill")
	}
	const GotoLogin = () => {
        Navigate('/login')
    }
    const GotoProfile = () => {
        Navigate('/profile')
    }
	const GotoResume = () => {
        Navigate('/resume')
    }


	const Alphabat =
		["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	
  return (
    <div>
      <div className="section ">
				{/* NAVBAR SECTION */}
				<section className="section1 sticky-top ">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container ">
							<div className="logo-item">
								<img
									src={Navlogo}
									alt="logo"
									className="img-fluid logo-item1"
								/>
							</div>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse m-auto" id="navbarNav">
								<ul className="navbar-nav mx-5">
									<button
										className=" link-item homeBtn text-start nav-link "
										onClick={GotoHome}
									>
										HOME
									</button>
									<li className=" nav-item browse1 mx-2">
										<a
											href=""
											className="dropdown-toggle link-item nav-link browse3 "
											data-bs-toggle="dropdown"
											id="browseItem"
										>
											BROWSE JOBS
										</a>
										<ul
											className="dropdown-menu filter1"
											aria-labelledby="dropdown1"
										>
											<li>
												<button className="dropdown-item " onClick={GotoBrowse}>
													My Browse Filter list
												</button>
											</li>
										</ul>
									</li>
									<li className="  nav-item browse1 mx-2">
										<a
											href=""
											className="dropdown-toggle link-item  jobs1 nav-link jobs"
											data-bs-toggle="dropdown"
										>
											JOBS
										</a>
										<ul
											className="dropdown-menu  filter1"
											aria-labelledby="dropdown2"
										>
											<li>
												<a className="dropdown-item" href="#">
													All Jobs
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Company Jobs
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Category Jobs
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Location Jobs
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Designation Jobs
												</a>
											</li>

											<li>
												<a className="dropdown-item" href="#">
													Skill Jobs
												</a>
											</li>
										</ul>
									</li>
								</ul>
								<li className='nav-item list-dropdown'>
                                        <div className='list-dropdown1'>
                                            <button className=" user-btn-item d-flex " id='dropdown3' data-bs-toggle="dropdown">
                                                <i className="fa-solid fa-circle-user  px-3 useritem" id="userId"></i>
                                                <div className=""><i className="fa-solid fa-caret-down dropitem"></i></div>
                                                <ul className="dropdown-menu " aria-labelledby='dropdown3'>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoProfile}>Candidate Profile</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoResume}>Resume</a></li>
                                                    <li><a className="dropdown-item" href="#">Applied Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Job alerts</a></li>
                                                    <li><a className="dropdown-item" href="#">Saved Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Change Password</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoLogin}>Logout</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </li>
								{/* <button
									className="align-items-end align-self-center text-end  buttons-itm"
									onClick={GotoAuth}
								>
									<i className="fa-solid fa-user"></i>
									<span>SIGNUP/LOGIN</span>
								</button> */}
							</div>
						</div>
					</nav>
				</section>

	    </div>
        <div className='container my-3'>
            <div className='row'>
                <div className='col-lg-2'>
                <button className="buttons col-lg-12 col-md-5 mt-2 " onClick={GotoApp}>All Jobs</button>
                </div>
                <div className='col-lg-2'>
                <button className=" buttons col-lg-12 col-md-5 mt-2 " onClick={GotoLocation}>Jobs By Location</button>
                </div>
                <div className='col-lg-2'>
                <button className=" buttons  col-lg-12 col-md-5 mt-2">Jobs By Company</button>
                </div>
                <div className='col-lg-2'>
                <button className="buttons col-lg-12 col-md-5 mt-2" onClick={GotoCategory}>Jobs By Category</button>
                </div>
                <div className='col-lg-2'>
                <button className="active-item col-lg-12 col-md-5 mt-2">Jobs By Designation</button>
                </div>
                <div className='col-lg-2'>
                <button className="buttons col-lg-12 col-md-5 mt-2" onClick={Gotoskill}>Jobs By Skills</button>
                </div>
            </div>
        </div>
        <div className='container my-4'>
            <div className='row'>
                <div className='col-lg-6'>
                <p className='browsejobs_item align-items-center align-self-center'>Browse Jobs By Designation</p>
                </div>
                <div className='col-lg-6'>
                    <div className='inputfield_1 d-flex'>
                        <input type='search' className='form-control inputfield_2' placeholder='Search' />
                        <i class="fa-solid fa-magnifying-glass searcicon"></i>
                    </div>
                </div>
            </div>
        </div>
		<div className='container my-4'>
			{Alphabat.map((item, index)=>
			<button key={index} className='alphaButton m-1'>{item}</button>
			)}
		</div>
		<div className='container my-4'>
			{
				Jobdesignation.map((loc)=>
				<button className='button_location m-2'>{loc.JobDesignation}</button>
				)

			}
		</div>
    </div>
  )
}

export default Designation