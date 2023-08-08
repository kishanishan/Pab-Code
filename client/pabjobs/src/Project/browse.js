import React from "react";
import Navlogo from "../Project/navs/pabjobs-logo.png";
import "../Project/browse.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Satity from "../Project/satity.png";
import { useNavigate } from "react-router-dom";

function Browse() {
	const [browseJob, setBrowseJob] = useState([]);
	const [jobDes, setJobDes] = useState();
	const[selectedContent, setSelectedContenet] = useState(null)
	useEffect(() => {
		fetchApi();
	}, []);
	const fetchApi = async (req, res) => {
		try {
			const token = localStorage.getItem('token');
		const response = await axios.get("http://localhost:3001/alljobs", {
			headers: {
				token: `${token}`,
			},
		});
		setBrowseJob(response.data);
		if (response.data.length > 0) {
			setJobDes(response.data[0]);
			setSelectedContenet(response.data[0].JobId)
		}
		}catch (error){
			console.error('Error:', error)
		}
		
	};
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
	

	return (
		<div className="app-item">
			<div className="section ">
				{/* NAVBAR SECTION */}
				<section className="section1 sticky-top ">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container ">
							<div className="logo-item m-auto ">
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
											className="dropdown-toggle link-item nav-link browse "
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
											className="dropdown-toggle link-item  jobs nav-link"
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
								<button
									className="align-items-end align-self-center text-end  buttons-itm"
									onClick={GotoAuth}
								>
									<i className="fa-solid fa-user"></i>
									<span>SIGNUP/LOGIN</span>
								</button>
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
									/>
									<div className="dropdown-toggle p-3"></div>
								</div>
								<div className="input-field col-lg-4 col-md-12 mt-2 m-1 ">
									<i className="fa-solid fa-location-dot align-self-center"></i>
									<input
										type="text"
										placeholder="City, Province or Region"
										className="form-control"
									/>
									<div className="dropdown-toggle p-3"></div>
								</div>
								<div className="col-lg-1"></div>
							</div>
							<button className="btn-item my-3">Search</button>
						</div>
					</div>
				</section>
			</div>
			{/* FILTER BUTTONS */}

			<section>
				<div className="row">
					<div className="col-lg-1"></div>
					<div className="col-lg-10">
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
									<div id="demo" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> satiety solutions
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Pab solutions
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Perfex Technology
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Wipro
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> TCS
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Infosys
										</div>
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
									<div id="demo1" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="radio" /> 00 - 02 years
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 02 - 05 years
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 05 - 10 years
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 10 - 15 years
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 15+ years
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
										data-bs-target="#demo3"
									>
										Location <i class="fa-solid fa-plus"></i>
									</button>
									<div id="demo3" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> Hyderabad
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Bengalore
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Mumbai
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Delhi
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Chennai
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
										data-bs-target="#demo4"
									>
										Industry <i class="fa-solid fa-plus"></i>
									</button>
									<div id="demo4" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> IT{" "}
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
									<div id="demo5" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> Web Developer
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Flutter Developer
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Mobile Developer
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Fullstack Developer
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
									<div id="demo7" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="radio" /> 0 - 10k
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 10k - 20k
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 20k -30k
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 30k - 40k
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 40k -60k
										</div>
										<div className="my-2 text-bold">
											<input type="radio" /> 60k - 100kk
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
										data-bs-target="#demo8"
									>
										Skills <i class="fa-solid fa-plus"></i>
									</button>
									<div id="demo8" class="collapse text-start textitem">
										<div className="my-2 text-bold">
											<input type="checkbox" /> Net working
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Software Testing
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> SAAP Abap
										</div>
										<div className="my-2 text-bold">
											<input type="checkbox" /> Call Center
										</div>
										<div className="my-2 text-bold mx-4 text-end">more..</div>
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
					<div className="col-lg-4">
						{browseJob.map((job) => (
							<div
								className={`container ${selectedContent === job.JobId ? 'selected': ''} companyItem p-3 mb-2`} 
								onClick={(e) => change(job.JobId)}
							>
								<h4>{job.designation}</h4>
								<div>{job.companyName}</div>
								<p className="m-0">{job.jobtype}</p>
								<h4>{job.salary}</h4>
								<p className="m-0">{job.location}</p>
								<p className="m-0">{job.experience}</p>
								<div className="text-end">{job.publish}</div>
							</div>
						))}
					</div>
					<div className="col-lg-8">
						{jobDes && (
							<div className="jobdescription">
								<div className="row py-4 px-4 ">
									<div className="col-lg-3 align-items-center text-center align-self-center   ">
										<img
											src={Satity}
											alt="img"
											className="img-fluid satityimg"
										/>
									</div>
									<div className="col-lg-5 text-center designation align-items-center align-self-center ">
										<h5>{jobDes.designation}</h5>
										<h5>{jobDes.companyName}</h5>
									</div>
									<div className="col-lg-4 text-center pb-4  align-items-center align-self-center ">
										<h4>{jobDes.salary}</h4>
										<span>
											{" "}
											<i className="fa-solid fa-location-dot align-self-center"></i>{" "}
											{jobDes.location}
										</span>
										<div>
											{" "}
											<i class="fa-solid fa-briefcase"></i> {jobDes.expdetails}
										</div>
									</div>
									<div className="row-item"></div>
								</div>

								<div className="row p-3  mx-3 ">
									<div className="col-lg-6">
										<p className="m-0">{jobDes.posted}</p>
										<p className="m-0">{jobDes.jobopening}</p>
										<p className="m-0">{jobDes.jobApplication}</p>
									</div>
									<div className="col-lg-6 text-center">
										<button className="loginitem">Login to Apply</button>
									</div>
								</div>
								<div className="p-3 mx-3">
									<h4>{jobDes.jobDescription}</h4>
									<p className="m-0">{jobDes.jobRole}</p>
									<p className="m-0">{jobDes.jobPara}</p>
									<p className="m-0 d-flex flex-column">{jobDes.jobSkills}</p>
									<h5>{jobDes.Skills}</h5>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Browse;
