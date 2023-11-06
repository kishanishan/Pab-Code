import React from "react";
import Navlogo from "../Project/navs/pabjobs-logo.png";
import "../Project/browse.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Satity from "../Project/satity.png";
import { useNavigate , useLocation} from "react-router-dom";

function Browse() {
	var [browseJob, setBrowseJob] = useState([]);
	const [jobDes, setJobDes] = useState();
	const [selectedContent, setSelectedContenet] = useState(null)
	const [searchLocation, setSearchLocation] = useState("");
	const [duplicateJobs, setduplicateJobs] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");
	const [filteredCompanies, setFilteredCompanies] = useState([]);
	const [selectedCompany, setSelectedCompany] = useState([]);
	const [selectedExp, setSelectedExp] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState([]);
	const [selectedDesignation, setSelectedDesignation] = useState([]);
	const [selectedSalary, setSelectedSalary] = useState([]);
	const [selectedSkill, setSelectedSkill] = useState([]);


	const onsearchSkill = (event) => {

		if (event.target.checked) {
			console.log(event.target.value);
			const filteredJobs = browseJob.filter(job =>
				job.toLowerCase().includes(event.target.value.toLowerCase())
			)
			setBrowseJob(filteredJobs)
			if (filteredJobs.length > 0) {
				setJobDes(filteredJobs[0]);
				setSelectedContenet(filteredJobs[0].JobId)
			}
		}
		else {
			fetchApi();
		}


	}

	
	const fetchApi = () => {
		const token = localStorage.getItem('token');
		
		axios.get("http://localhost:3001/alljobs", {
		  headers: {
			token: `${token}`,
		  },
		})
		.then(response => {
		  setBrowseJob(response.data);
		  setduplicateJobs(response.data);
		  setFilteredCompanies(response.data);
		  if (response.data.length > 0) {
			setJobDes(response.data[0]);
			setSelectedContenet(response.data[0].JobId);
		  }
		  if (state?.location) {
			handleFilter(state?.location, response.data)
		}
		})
		.catch(error => {
		  console.error('Error:', error);
		});
	  };

	useEffect(() => {
		fetchApi();
	}, []);

	const onTitleChange = (role) => {
		console.log(role);
		if (role === "") {
			browseJob = duplicateJobs;
			setFilteredCompanies(duplicateJobs);
			setJobDes(duplicateJobs[0]);
			setSelectedContenet(duplicateJobs[0].JobId)
			return
		}
		const filteredJobs = browseJob.filter((job) => {
			return job.designation.toLowerCase().includes(role.toLowerCase())
		})
		setFilteredCompanies(filteredJobs);
		if (filteredJobs.length > 0) {
			setJobDes(filteredJobs[0]);
			setSelectedContenet(filteredJobs[0].JobId)
		}
	}

	const oncITYChange = (location) => {
		console.log(location);
		if (location === "") {
			browseJob = duplicateJobs;
			setFilteredCompanies(duplicateJobs);
			setJobDes(duplicateJobs[0]);
			setSelectedContenet(duplicateJobs[0].JobId)
			return
		}

		const filteredJobs = browseJob.filter((job) => {

			return job.location.toLowerCase().includes(location.toLowerCase())
		})

		setFilteredCompanies(filteredJobs);
		if (filteredJobs.length > 0) {
			setJobDes(filteredJobs[0]);
			setSelectedContenet(filteredJobs[0].JobId)
		}
	}

	const onROLEChange = (e) => {
		setSearchTitle(e.target.value)
		onTitleChange(e.target.value, searchTitle)

	}

	const onplaceChange = (e) => {
		setSearchLocation(e.target.value)
		oncITYChange(e.target.value, searchLocation)
	}



	const token = localStorage.getItem('token');

	const change = (JobId) => {
		setSelectedContenet(JobId === selectedContent ? null : JobId);

		axios
			.get(`http://localhost:3001/indJob/${JobId}`, {
				headers: {
					token: `${token}`,
				},
			})
			.then((res) => {
				setJobDes(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.data);
			});
	};
	const Navigate = useNavigate();
	const GotoHome = () => {
		Navigate("/home");
	};
	const GotoAuth = () => {
		Navigate("/auth");
	};
	const GotoJobs = () => {
		Navigate("/job");
	};
	const GotoResume = () => {
        Navigate('/resume')
    }
    const GotoProfile = () => {
        Navigate('/profile')
    }
	const GotoLogin = () => {
        Navigate('/login')
    }


	useEffect(() => {
		const intervalId = setInterval(() => {
			const currentTime = new Date();
			const updatedResponse = filteredCompanies.map(job => {
				const timeDifferenceInSeconds = Math.floor((currentTime - new Date(job.publish)) / 1000);
				const days = Math.floor(timeDifferenceInSeconds / 86400);
				return {
					...job,
					timeDifference: `${days} ${days === 1 ? 'day' : 'days'} ago`,
				};

			});
			setFilteredCompanies(updatedResponse);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [filteredCompanies]);

	const handleExpDetails = (event) => {
		const expdetails = event.target.value;
		if (event.target.checked) {
			setSelectedExp([...selectedExp, expdetails]);
		} else {
			setSelectedExp(selectedExp.filter((s) => s !== expdetails));
		}
	};

	const handleLocation = (event) => {
		const location = event.target.value;
		if (event.target.checked) {
			setSelectedLocation([...selectedLocation, location]);
		} else {
			setSelectedLocation(selectedLocation.filter((s) => s !== location));
		}
	};

	const handleDesignation = (event) => {
		const designation = event.target.value;
		if (event.target.checked) {
			setSelectedDesignation([...selectedDesignation, designation]);
		} else {
			setSelectedDesignation(selectedDesignation.filter((s) => s !== designation));
		}
	};

	const handleSalary = (event) => {
		const salary = event.target.value;
		if (event.target.checked) {
			setSelectedSalary([...selectedSalary, salary]);
		} else {
			setSelectedSalary(selectedSalary.filter((s) => s !== salary));
		}
	};

	const handleSkill = (event) => {
		const Skills = event.target.value;
		if (event.target.checked) {
			setSelectedSkill([...selectedSkill, Skills]);
		} else {
			setSelectedSkill(selectedSkill.filter((s) => s !== Skills));
		}
	};

	const handleCheckboxChange = (event) => {
		const cName = event.target.value;
		console.log(cName)
		if (event.target.checked) {
			setSelectedCompany([...selectedCompany, cName]);
		} else {
			setSelectedCompany(selectedCompany.filter((s) => s !== cName));
		}
	};

	useEffect(()=>{
        const filteredJobs = browseJob.filter((job) => {
            const companyMatch = selectedCompany.length === 0 || selectedCompany.includes(job.companyName);
            const cityMatch = selectedLocation.length === 0 || selectedLocation.includes(job.location);
            const roleMatch = selectedDesignation.length === 0 || selectedDesignation.includes(job.designation);
			const salaryMatch = selectedSalary.length === 0 || selectedSalary.includes(job.salary);
			const expMatch = selectedExp.length === 0 || selectedExp.includes(job.experience);
            return companyMatch && cityMatch && roleMatch && salaryMatch && expMatch;
          });
          setFilteredCompanies(filteredJobs)
          setJobDes(filteredJobs[0]);
    },[selectedCompany, selectedLocation, selectedDesignation]   )

	const {state}= useLocation();
    console.log("params", state);

	const handleFilter = (city, alljobs = browseJob) => {
        city = Array.isArray(city) ? city : [city]
        const filter = alljobs.filter((job)=>{
            return city.includes(job.location)
        })

        console.log("filters", filter);
        setFilteredCompanies(filter)
        setJobDes(filter[0]);
        setSelectedContenet(filter[0].unqiueNo)
        }

	return (
		<div className="app-item">
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
											className="dropdown-toggle link-item nav-link browse2 "
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
												<button className="dropdown-item ">
													My Browse Filter list
												</button>
											</li>
										</ul>
									</li>
									<li className="  nav-item browse1 mx-2">
										<a
											href=""
											className="dropdown-toggle link-item  jobs2 nav-link"
											data-bs-toggle="dropdown"
										>
											JOBS
										</a>
										<ul
											className="dropdown-menu text-center  filter1"
											aria-labelledby="dropdown2"
										>
											<button className="bitem" onClick={GotoJobs}>
												<li>
													<a className="dropdown-item" href="#">
														All Jobs
													</a>
												</li>
											</button>

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
                                                <div className=""><i class="fa-solid fa-caret-down dropitem"></i></div>
                                                <ul className="dropdown-menu " aria-labelledby='dropdown3'>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoProfile}>Candidate Profile</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoResume} >Resume</a></li>
                                                    <li><a className="dropdown-item" href="#">Applied Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Job alerts</a></li>
                                                    <li><a className="dropdown-item" href="#">Saved Jobs</a></li>
                                                    <li><a className="dropdown-item" href="#">Change Password</a></li>
                                                    <li><a className="dropdown-item" href="#" onClick={GotoLogin}>Logout</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </li>
								
							</div>
						</div>
					</nav>
				</section>
				<section className="container">
					<div className="section2">
						<div className="text-center">
							<h6 className="py-4 filter">
								Home <i className="fa-solid fa-angle-right"></i> Browse Filter
								List
							</h6>
							<div className="button-item1  row py-4">
								<div className="col-lg-2"></div>
								<div className="input-field col-lg-4 col-md-12 mt-2 m-1">
									<i className="fa-solid fa-magnifying-glass align-self-center"></i>
									<input
										type="text"
										placeholder="Job Title, Skill or Company"
										className="form-control"
										value={searchTitle}
										onChange={onROLEChange}

									/>
									<div className="dropdown-toggle p-3"></div>
								</div>
								<div className="input-field col-lg-4 col-md-12 mt-2 m-1 ">
									<i className="fa-solid fa-location-dot align-self-center"></i>
									<input
										type="text"
										placeholder="City, Province or Region"
										className="form-control"

										value={searchLocation}
										onChange={onplaceChange}

									/>
									<div className="dropdown-toggle p-3"></div>
								</div>
								<div className="col-lg-1"></div>
							</div>
							<button className="btn-item my-3" >Search</button>
						</div>
					</div>
				</section>
			</div>
			{/* FILTER BUTTONS */}
			<section>
				<div className="row m-2">
					<div className="col-lg-1"></div>
					<div className="col-lg-10 ">
						<div className="d-flex flex-row row my-3">
							<div className="  col-lg col-md-3 ">
								<div className="card location">
									<button
										type="button"
										class="location1 "
										data-bs-toggle="collapse"
										data-bs-target="#demo"
									>
										Company <i class="fa-solid fa-plus"></i>
									</button>



									<div className="collapse text-start textitem" id="demo">
										{
											[...new Set(browseJob.map((job) => job.companyName))].map(companyName => (
												<div className="my-2 text-bold" key={companyName._id}>
													<input
														type="checkbox"
														value={companyName}
														onChange={handleCheckboxChange}
														checked={selectedCompany.includes(companyName)}
													/>
													{companyName}

												</div>
											))
										}
									</div>
								</div>
							</div>

							<div className=" col-lg col-md-3 ">
								<div className="card location">
									<button
										type="button"
										class="location1 "
										data-bs-toggle="collapse"
										data-bs-target="#demo1"
									>
										Experience <i class="fa-solid fa-plus"></i>
									</button>
									<div className="collapse text-start textitem" id="demo1">
										{
											[...new Set(browseJob.map(job => job.expdetails))].map(expdetails => (
												<div className="my-2 text-bold" key={expdetails._id}>
													<input
														type="checkbox"
														value={expdetails}
														onChange={handleExpDetails}
														checked={selectedExp.includes(expdetails)}
													/>
													{expdetails}

												</div>
											))
										}
									</div>

								</div>
							</div>

							<div className="col-lg col-md-3">
								<div className="card location">
									<button
										type="button"
										class="location1"
										data-bs-toggle="collapse"
										data-bs-target="#demo3"
									>
										Location <i class="fa-solid fa-plus"></i>
									</button>
									<div className="collapse text-start textitem" id="demo3">
										{
											[...new Set(browseJob.map(job => job.location))].map(location => (
												<div className="my-2 text-bold" key={location._id}>
													<input
														type="checkbox"
														value={location}
														onChange={handleLocation}
														checked={selectedLocation.includes(location)}
													/>
													{location}

												</div>
											))
										}
									</div>

								</div>
							</div>
							<div className="col-lg col-md-3">
								<div className="card location">
									<button
										type="button"
										class="location1"
										data-bs-toggle="collapse"
										data-bs-target="#demo4"
									>
										Industry <i class="fa-solid fa-plus"></i>
									</button>
									<div id="demo4" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> IT
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Marketing
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Content Writting
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg col-md-3">
								<div className="card location">
									<button
										type="button"
										class="location1"
										data-bs-toggle="collapse"
										data-bs-target="#demo5"
									>
										Designation <i class="fa-solid fa-plus"></i>
									</button>
									<div className="collapse text-start textitem" id="demo5">
										{
											[...new Set(browseJob.map(job => job.designation))].map(designation => (
												<div className="my-2 text-bold" key={designation._id}>
													<input
														type="checkbox"
														value={designation}
														onChange={handleDesignation}
														checked={selectedDesignation.includes(designation)}
													/>
													{designation}

												</div>
											))
										}
									</div>
								</div>
							</div>
							<div className="col-lg col-md-3">
								<div className="card location">
									<button
										type="button"
										class="location1"
										data-bs-toggle="collapse"
										data-bs-target="#demo6"
									>
										Education <i class="fa-solid fa-plus"></i>
									</button>
									<div id="demo6" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> Graduation
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Any Graduate
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> BE / B.Tech
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> B.com
										</div>
										<div className="my-2 text-bold mx-4 text-end">more..</div>
									</div>
								</div>
							</div>
							<div className="col-lg col-md-3">
								<div className="card location">
									<button
										type="button"
										class="location1"
										data-bs-toggle="collapse"
										data-bs-target="#demo7"
									>
										Salary <i class="fa-solid fa-plus"></i>
									</button>
									<div className="collapse text-start textitem" id="demo7">
										{
											[...new Set(browseJob.map(job => job.salary))].map(salary => (
												<div className="my-2 text-bold" key={salary._id}>
													<input
														type="checkbox"
														value={salary}
														onChange={handleSalary}
														checked={selectedSalary.includes(salary)}
													/>
													{salary}

												</div>
											))
										}
									</div>
								</div>
							</div>
							<div className="col-lg col-md-3">
								<div className="card location">
									<button
										type="button"
										class="location1"
										data-bs-toggle="collapse"
										data-bs-target="#demo8"
									>
										Skills <i class="fa-solid fa-plus"></i>
									</button>
									<div className="collapse text-start textitem" id="demo8">
										{
											[...new Set(browseJob.map(job => job.Skills))].map(Skills => (
												<div className="my-2 text-bold" key={Skills._id}>
													<input
														type="checkbox"
														value={Skills}
														onChange={handleSkill}
														checked={selectedSkill.includes(Skills)}
													/>
													{Skills}

												</div>
											))
										}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-1"></div>
				</div>
			</section>
			<section className="container mb-3">
				<span className="showitem ">Showing 6 results in</span>
			</section>
			<section className="container">
				<div className="row">
					<div className="col-lg-4 mb-3">
						{filteredCompanies.map((job) => (
							<div
								className={`container ${selectedContent === job.JobId ? 'selected' : ''} companyItem p-3 mb-2`}
								onClick={((e) => change(job.JobId))}>
								<div>
									<h4>{job.designation}</h4>
								</div>
								<div>{job.companyName}</div>
								<p className="m-0">{job.jobtype}</p>
								<h4>{job.salary}</h4>
								<p className="m-0">{job.location}</p>
								<p className="m-0">{job.experience}</p>
								<div className="text-end">( Published {job.timeDifference} )</div>
							</div>
						))}
					</div>
					<div className="col-lg-8 ">
						{jobDes && 
							<div className="jobdescription  p-3">
								<div className="row-item py-4 mb-3">
									<div className="row  ">
										<div className="col-lg-2 align-items-center text-center align-self-center   ">
											<img
												src={Satity}
												alt="img"
												className="img-fluid satityimg"
											/>
										</div>
										<div className="col-lg-4 text-start designation align-items-center align-self-center ">
											<h5>{jobDes.designation}</h5>
											<h5>{jobDes.companyName}</h5>
										</div>
										<div className="col-lg-4  align-items-center align-self-center ">
											<button className="loginitem w-100">Apply Now</button>
										</div>
										<div className="col-lg-2"></div>

									</div>
								</div>

								<div className="row-item py-3 mb-3">
									<div className="row px-4  ">
										<div className="col-lg-6">
											<div className="text-start   align-items-center align-self-center ">
												<h4>{jobDes.salary}</h4>
												<span>
													<i className="fa-solid fa-location-dot align-self-center"></i>
													{jobDes.location}
												</span>
												<div className="m-0">
													<i class="fa-solid fa-briefcase"></i> {jobDes.expdetails}
												</div>
												<p className="m-0 opening-item">{jobDes.jobopening}</p>
											</div>
											{/* <p className="m-0">Posted on :{jobDes.posted}</p> */}
											{/* <p className="m-0">{jobDes.jobApplication}</p> */}
										</div>
										{/* <div className="col-lg-6 text-center">
										<button className="loginitem">Login to Apply</button>
									</div> */}
									</div>
								</div>
								<div className="p-3 mx-3 scrollbar_item">
									<h4>{jobDes.jobDescription}</h4>
									<p className="m-0">{jobDes.jobRole}</p>
									<p className="m-0">{jobDes.jobPara}</p>
									<p className="m-0 d-flex flex-column skillitem">{jobDes.jobSkills}</p>
									<ul className="listitem">{jobDes.Skills && jobDes.Skills.map((skill, index) => (<li key={index}>{skill}</li>))}</ul>
								</div>
								</div>							
						}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Browse;
