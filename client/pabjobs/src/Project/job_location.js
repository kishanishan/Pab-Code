import React from 'react';
import Navlogo from "../Project/navs/pabjobs-logo.png";
import "../Project/job.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
// import pabimg from "../Project/pab bottom-logo.jpg";

function Location() {
	var [location, setLocation] = useState([]);
	const [filteredCompanies, setFilteredCompanies] = useState([]);
	const [searchLocation, setSearchLocation] = useState('');
	const [duplicateJobs, setDuplicateJobs] = useState([]);
	const [selectLoc, setSelectLoc] = useState([]);

	const fetchApi = async (req, res) => {
		try {
			const token = localStorage.getItem('token');
			const response = await axios.get("http://localhost:3001/joblocation", {
				headers: {
					token: `${token}`,
				},
			});
			setLocation(response.data);
			setDuplicateJobs(response.data)
			setFilteredCompanies(response.data)
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
	const GotoApp = () => {
		Navigate("/job")
	}
	const GotoLocation = () => {
		Navigate("/location")
	}
	const GotoCompany = () => {
		Navigate("/company")
	}
	const GotoCategory = () => {
		Navigate("/category")
	}
	const GotoDesignation = () => {
		Navigate("/designation")
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
	const alphabet =
		["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	const handleAlphabetClick = (alphabet) => {

		const filterdLoc = location.filter(loc => loc.JobLocation.startsWith(alphabet))
		setFilteredCompanies(filterdLoc);
	};
	const oncITYChange = (city) => {

		if (city === "") {
			location = duplicateJobs;
			setFilteredCompanies(duplicateJobs);
			return
		}
		const filteredJobs = location.filter((job) => {
			return job.JobLocation.toLowerCase().includes(city.toLowerCase())
		})
		console.log(location);
		setFilteredCompanies(filteredJobs);

	}
	const onplaceChange = (e) => {
		setSearchLocation(e.target.value)
		oncITYChange(e.target.value, searchLocation)
	}
	const handleclick = () => {
		Navigate("/browse", {state:{location:selectLoc}})

	}
	const handleLocationClick = (city) => {
		if (selectLoc.includes(city)) {
			setSelectLoc((prevArray) => prevArray.filter(item => item !== city));
		} else {
			setSelectLoc((prevArray) => [...prevArray, city]);
		}
	};
	const removeItem = (index) => {
		const updatedItems = [...selectLoc];
		updatedItems.splice(index, 1);
		setSelectLoc(updatedItems);
	};

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
						<button className="active-item col-lg-12 col-md-5 mt-2 " onClick={GotoLocation}>Jobs By Location</button>
					</div>
					<div className='col-lg-2'>
						<button className="buttons col-lg-12 col-md-5 mt-2" onClick={GotoCompany}>Jobs By Company</button>
					</div>
					<div className='col-lg-2'>
						<button className="buttons col-lg-12 col-md-5 mt-2" onClick={GotoCategory}>Jobs By Category</button>
					</div>
					<div className='col-lg-2'>
						<button className="buttons col-lg-12 col-md-5 mt-2" onClick={GotoDesignation}>Jobs By Designation</button>
					</div>
					<div className='col-lg-2'>
						<button className="buttons col-lg-12 col-md-5 mt-2" onClick={Gotoskill}>Jobs By Skills</button>
					</div>
				</div>
			</div>
			<div className='container my-4'>
				<div className='row'>
					<div className='col-lg-6'>
						<p className='browsejobs_item align-items-center align-self-center'>BROWSE JOBS BY LOCATIONS</p>
					</div>
					<div className='col-lg-6'>
						<div className='inputfield_1 d-flex'>
							<input type='search'
								className='form-control inputfield_2'
								placeholder='Search'
								value={searchLocation}
								onChange={onplaceChange} />
							<i class="fa-solid fa-magnifying-glass searcicon"></i>
						</div>
					</div>
				</div>
			</div>
			<div className='container my-4'>

				{alphabet.map((item, index) =>
					<button key={index} className='alphaButton m-1' onClick={() => handleAlphabetClick(item)} >{item}</button>
				)}
			</div>

			<section>
				<div className='container'>

					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">

							<div className="selectedLocationdGrid d-flex justify-content-center">
								{selectLoc.length > 0 ? (
									selectLoc.slice(0 ,5).map((locations, index) => (
										<div className="selectedLocations m-2 d-flex align-items-center align-self-center " key={index}>
											<h6 className="m-1">{selectLoc.includes(locations) ? locations : 'Add'}</h6> 
											<button className="closeBtn" onClick={() => removeItem(index)}> <i class="fa-solid fa-xmark "></i> </button>
										</div>

									))

								) : (
									<div className="noJobFound "></div>
								)}
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">

							<div className="selectedLocationdGrid ">
								{selectLoc.length > 0 ? (
									<div className='d-flex justify-content-center'>
									<div className="selectedLocationsFilterBtn m-2   d-flex" onClick={handleclick}>
										<h6 className="m-0">Filter Locations <i className="fa fa-search ml-1"></i></h6>
									</div>
									</div>
								) : (
									<div className="noJobFound "></div>
								)}
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>

			</section>

			<div className='container text-center my-4'>
				{filteredCompanies.length > 0 ? (
					filteredCompanies.map((jobs, index) => (
						<button key={index} className="button_location m-2" onClick={() => handleLocationClick(jobs.JobLocation)}>
							{jobs.JobLocation}
						</button>
					))
				) : (
					<div className="noJob text-center my-4">NO LOCATION FOUND</div>
				)}
			</div>
		</div>
	)
}


export default Location
