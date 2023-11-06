import React from "react";
import "../Project/profile.css";
import Navlogo from "../Project/navs/pabjobs-logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import Select from "react-dropdown-select";


import Education from "./education";

function Resume({ userId }) {
	const Navigate = useNavigate();
	const GotoBrowse = () => {
		Navigate("/browse");
	};
	const GotoLogin = () => {
		Navigate("/login");
	};
	const GotoProfile = () => {
		Navigate("/profile");
	};
	const GotoJobs = () => {
		Navigate("/job");
	};
	const GotoApplied = () => {
		Navigate("/applied");
	};
	const GotoJobalert = () => {
		Navigate('/jobalert')
	};
	const GotoSaved = () => {
		Navigate('/savedjobs')
	}
	const GotoPassword = () => {
		Navigate('/password')
	}

	const [loggedProfile, setLoggedProfile] = useState([]);
	const [profileSkills, setProfileSkills] = useState([]);
	const token = localStorage.getItem("token");
	const storedData = localStorage.getItem("id");
	const [newEmployement, setEmployement] = useState([]);
	const [newProject, setNewProject] = useState([]);
	const [newWork, setNewWork] = useState([]);
	const [newPaper, setNewPeper] = useState([]);
	const [newPresantation, setnewPresantation] = useState([]);
	const [newPatent, setnewPatent] = useState([]);
	const [newCertificate, setnewCertificate] = useState([]);

	const userData = JSON.parse(storedData);
	const id = userData.user.id;

	const fetchApi = async () => {
		try {
			const response = await axios.get(`http://localhost:3001/user/${id}`, {
				headers: {
					token: token,
				},
			});
			setLoggedProfile(response.data);
			console.log(response.data);
			setEmployement(response.data.Employement);
			setNewProject(response.data.projectDeatails);
			setNewWork(response.data.workSample);
			setNewPeper(response.data.whitePaper);
			setnewPresantation(response.data.Presantation);
			setnewPatent(response.data.Patent);
			setnewCertificate(response.data.Certificate);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	console.log(newEmployement);
	// console.log(newProject)
	useEffect(() => {
		fetchApi();
	}, []);

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

	const [description, setDescription] = useState("");
	const [userResumeHeadline, setuserResumeHeadline] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSaveChanges = async () => {
		setDescription(userResumeHeadline);
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				userResumeHeadline,
			});

			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};
	const [newUser, setNewUser] = useState("");
	const [userProfile, setNewUserProfile] = useState("");

	const handleProfileChange = async () => {
		setNewUser(userProfile);
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				userProfile,
			});

			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const [newSkill, setNewskill] = useState([]);
	const [SalaryDetails, setSalaryDetails] = useState([]);
	const [ExpDetails, setNewExpDetails] = useState([]);
	const [userDesignation, setuserDesignation] = useState([]);
	const [userCategory, setuserCategory] = useState([]);
	const [userNewExp, setuserNewExp] = useState("");
	const [DescribeJob, setDescribeJob] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [duration, setDuration] = useState("");
	const [title, settitle] = useState("");
	const [client, setclient] = useState("");
	const [details, setdetails] = useState("");
	const [dateStart, setDateStart] = useState("");
	const [dateEnd, setDateEnd] = useState("");
	const [projectType, setnewprojectType] = useState("In Progress");
	const [worktitle, setworkTitle] = useState("");
	const [urlLink, seturlLink] = useState("");
	const [durationFrom, setdurationFrom] = useState("");
	const [durationTo, setdurationTo] = useState("");
	const [desWork, setdesWork] = useState("");
	const [titlework, settitlework] = useState("");
	const [linkUrl, setlinkUrl] = useState("");
	const [workDes, setworkDes] = useState("");
	const [titleofwork, settitleofwork] = useState("");
	const [linkofUrl, setlinkofUrl] = useState("");
	const [workofDes, setworkofDes] = useState("");
	const [pattentTitle, setpattentTitle] = useState("");
	const [pattentUrl, setpattentUrl] = useState("");
	const [pattentOffice, setpattentOffice] = useState("");
	const [Status, setStatus] = useState("Patent Issued");
	const [pattentNum, setpattentNum] = useState("");
	const [pattentDes, setpattentDes] = useState("");
	const [cname, setcname] = useState("");
	const [cId, setcId] = useState("");
	const [cUrl, setcUrl] = useState("");
	const [cValidfrom, setcValidfrom] = useState("");
	const [cValidto, setcValidto] = useState("");
	const [NewuserLocation, setNewuserLocation] = useState([]);
	const [desiredIndustry, setdesiredIndustry] = useState("");
	const [designationInd, setdesignationInd] = useState("");
	const [employeType, setemployeType] = useState("");
	const [typeJob, settypeJob] = useState("");
	const [desiredShift, setdesiredShift] = useState("");
	const [expectedSalary, setexpectedSalary] = useState("");
	const [userDob, setuserDob] = useState("");
	const [userAge, setuserAge] = useState("");
	const [pAddress, setpAddress] = useState("");
	const [homeTown, sethomeTown] = useState("");
	const [pincode, setpincode] = useState("");
	const [marriegetype, setmarriegetype] = useState("");
	const [passport, setpassport] = useState("");
	const [aNumber, setaNumber] = useState("");
	const [newAddressproof, setnewAddressproof] = useState([]);
	const [newLanguages, setnewLanguages] = useState([]);
	const [newperiod, setnewperiod] = useState([]);
	const [noticeType, setnoticeType] = useState(false);

	const [userskill, setNewuserskill] = useState("");

	const handleSkillChange = async () => {
		setNewskill(userskill);
		setuserNewExp(ExpDetails);
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		console.log(worktitle);
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				userskill: JobSkill,
				worktitle,
				urlLink,
				durationFrom,
				durationTo,
				desWork,
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}

		// const startDateObj = new Date(startDate);
		// const endDateObj = new Date(endDate);

		// let years = endDateObj.getFullYear() - startDateObj.getFullYear();
		// let months = endDateObj.getMonth() - startDateObj.getMonth();
		// let days = endDateObj.getDate() - startDateObj.getDate();
		// if (days < 0) {
		//     months -= 1;
		//     days += new Date(
		//         endDateObj.getFullYear(),
		//         endDateObj.getMonth(),
		//         0
		//     ).getDate();
		// }
		// if (months < 0) {
		//     years -= 1;
		//     months += 12;
		// }
		// setDuration({ years, months, days });
	};


	const handleRemoveProject = async (indexToRemove, projectId) => {
		// Create a copy of the current employmentArray
		const updatednewProject = [...newProject];

		// Remove the employment object at the specified index
		updatednewProject.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setNewProject(updatednewProject);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/projectDeatails/delete/${projectId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChange6 = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				projectDeatails: [
					...newProject,
					{
						title: title,
						client: client,
						details: details,
						dateStart: dateStart,
						dateEnd: dateEnd,
						projectType: projectType,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleRemoveEmployment = async (indexToRemove, employmentId) => {
		// Create a copy of the current employmentArray
		const updatedEmploymentArray = [...newEmployement];

		// Remove the employment object at the specified index
		updatedEmploymentArray.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setEmployement(updatedEmploymentArray);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/employement/delete/${employmentId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChange5 = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		console.log(userData.user.id);
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				Employement: [
					...newEmployement,
					{
						ExpDetails: ExpDetails,
						SalaryDetails: SalaryDetails,
						userDesignation: userDesignation,
						userCategory: userCategory,
						DescribeJob: DescribeJob,
						startDate: startDate,
						endDate: endDate,
						duration: duration,
						Notice: newperiod,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}

		// const startDateObj = new Date(startDate);
		// const endDateObj = new Date(endDate);
		// let years = endDateObj.getFullYear() - startDateObj.getFullYear();
		// let months = endDateObj.getMonth() - startDateObj.getMonth();
		// let days = endDateObj.getDate() - startDateObj.getDate();
		// if (days < 0) {
		//     months -= 1;
		//     days += new Date(
		//         endDateObj.getFullYear(),
		//         endDateObj.getMonth(),
		//         0
		//     ).getDate();
		// }
		// if (months < 0) {
		//     years -= 1;
		//     months += 12;
		// }
		// setDuration({ years, months, days });
	};
	// console.log(ExpDetails)
	// console.log(SalaryDetails);
	// console.log(userDesignation)

	const handleRemoveWork = async (indexToRemove, WorkId) => {
		// Create a copy of the current employmentArray
		const updatednewProject = [...newWork];

		// Remove the employment object at the specified index
		updatednewProject.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setNewWork(updatednewProject);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/workSample/delete/${WorkId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChange1 = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				workSample: [
					...newWork,
					{
						worktitle: worktitle,
						urlLink: urlLink,
						durationFrom: durationFrom,
						durationTo: durationTo,
						desWork: desWork,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};


	const handleRemoveWhite = async (indexToRemove, WhiteId) => {
		// Create a copy of the current employmentArray
		const updatednewProject = [...newPaper];

		// Remove the employment object at the specified index
		updatednewProject.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setNewPeper(updatednewProject);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/whitePaper/delete/${WhiteId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChangework = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		// console.log(worktitle);
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				whitePaper: [
					...newPaper,
					{
						titlework: titlework,
						linkUrl: linkUrl,
						workDes: workDes,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleRemovepres = async (indexToRemove, PresantationId) => {
		// Create a copy of the current employmentArray
		const updatednewProject = [...newPresantation];

		// Remove the employment object at the specified index
		updatednewProject.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setnewPresantation(updatednewProject);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/Presantation/delete/${PresantationId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChangepres = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		// console.log(worktitle);
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				Presantation: [
					...newPresantation,
					{
						titleofwork,
						linkofUrl,
						workofDes,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleRemovepatent = async (indexToRemove, PatentId) => {
		// Create a copy of the current employmentArray
		const updatednewProject = [...newPatent];

		// Remove the employment object at the specified index
		updatednewProject.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setnewPatent(updatednewProject);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/Patent/delete/${PatentId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChangepatent = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		// console.log(worktitle);
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				Patent: [
					...newPatent,
					{
						pattentTitle: pattentTitle,
						pattentUrl: pattentUrl,
						pattentOffice: pattentOffice,
						Status: Status,
						pattentNum: pattentNum,
						pattentDes: pattentDes,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleRemovecert = async (indexToRemove, CertificateId) => {
		// Create a copy of the current employmentArray
		const updatednewProject = [...newCertificate];

		// Remove the employment object at the specified index
		updatednewProject.splice(indexToRemove, 1);

		// Update the state with the modified employmentArray
		setnewCertificate(updatednewProject);

		try {
			// Send a DELETE request to your server to delete the employment record
			const response = await axios.post(`http://localhost:3001/user/${id}/Certificate/delete/${CertificateId}`);
			console.log('Employment deleted:', response.data);
		} catch (error) {
			console.error('Error deleting employment:', error);
		}
	};

	const handleSkillChangecert = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		// console.log(worktitle);
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				Certificate: [
					...newCertificate,
					{
						cname: cname,
						cId: cId,
						cUrl: cUrl,
						cValidfrom: cValidfrom,
						cValidto: cValidto,
					},
				],
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleSkillChange2 = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				userLocation: NewuserLocation,
				desiredIndustry,
				designationInd,
				employeType,
				typeJob,
				desiredShift,
				expectedSalary,
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	const handleSkillChange3 = async () => {
		setIsModalOpen(false);
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				userDob,
				userAge,
				pAddress,
				homeTown,
				pincode,
				marriegetype,
				passport,
				aNumber,
				Addressproof: newAddressproof,
				Languages: newLanguages,
			});
			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	useEffect(() => {
		setDescription(loggedProfile.userResumeHeadline || "");
	}, [loggedProfile]);

	useEffect(() => {
		setNewUser(loggedProfile.userProfile || "");
	}, [loggedProfile]);

	useEffect(() => {
		setjobSkill(loggedProfile.userskill || []);
		setNewExpDetails(loggedProfile.ExpDetails || []);
		setSalaryDetails(loggedProfile.SalaryDetails || []);
		setuserDesignation(loggedProfile.userDesignation || []);
		setuserCategory(loggedProfile.userCategory || []);
		setDescribeJob(loggedProfile.DescribeJob || "");
		setDuration(loggedProfile.duration || "");
		settitle(loggedProfile.title || "");
		setclient(loggedProfile.client || "");
		setdetails(loggedProfile.details || "");
		setDateStart(loggedProfile.dateStart || "");
		setDateEnd(loggedProfile.dateEnd || "");
		setnewprojectType(loggedProfile.projectType || "In Progress");
		setworkTitle(loggedProfile.worktitle || "");
		seturlLink(loggedProfile.urlLink || "");
		setdurationFrom(loggedProfile.durationFrom || "");
		setdurationTo(loggedProfile.durationTo || "");
		setdesWork(loggedProfile.desWork || "");
		settitlework(loggedProfile.titlework || "");
		setlinkUrl(loggedProfile.linkUrl || "");
		setworkDes(loggedProfile.workDes || "");
		settitleofwork(loggedProfile.titleofwork || "");
		setlinkofUrl(loggedProfile.linkofUrl || "");
		setworkofDes(loggedProfile.workofDes || "");
		setpattentTitle(loggedProfile.pattentTitle || "");
		setpattentUrl(loggedProfile.pattentUrl || "");
		setpattentOffice(loggedProfile.pattentOffice || "");
		setStatus(loggedProfile.Status || "Patent Issued");
		setpattentNum(loggedProfile.pattentNum || "");
		setpattentDes(loggedProfile.pattentDes || "");
		setcname(loggedProfile.cname || "");
		setcId(loggedProfile.cId || "");
		setcUrl(loggedProfile.cUrl || "");
		setcValidfrom(loggedProfile.cValidfrom || "");
		setcValidto(loggedProfile.cValidto || "");
		setNewuserLocation(loggedProfile.userLocation || []);
		setdesiredIndustry(loggedProfile.desiredIndustry || "");
		setdesignationInd(loggedProfile.designationInd || "");
		setemployeType(loggedProfile.employeType || "");
		settypeJob(loggedProfile.typeJob || "");
		setdesiredShift(loggedProfile.desiredShift || "");
		setexpectedSalary(loggedProfile.expectedSalary || "");
		setuserDob(loggedProfile.userDob || "");
		setuserAge(loggedProfile.userAge || "");
		setpAddress(loggedProfile.pAddress || "");
		sethomeTown(loggedProfile.homeTown || "");
		setpincode(loggedProfile.pincode || "");
		setmarriegetype(loggedProfile.marriegetype || "");
		setpassport(loggedProfile.passport || "");
		setaNumber(loggedProfile.aNumber || "");
		setnewAddressproof(loggedProfile.Addressproof || []);
		setnewLanguages(loggedProfile.Languages || []);
		setnewperiod(loggedProfile.Notice || []);
	}, [loggedProfile]);

	const [Jobdesignation, setjobdesignation] = useState([]);

	const fetchApi1 = async (req, res) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get("http://localhost:3001/jobdesignation", {
				headers: {
					token: `${token}`,
				},
			});
			setjobdesignation(response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		fetchApi1();
	}, []);

	const [Jobcategory, setjobcategory] = useState([]);

	const fetchApi2 = async (req, res) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get("http://localhost:3001/jobcategory", {
				headers: {
					token: `${token}`,
				},
			});
			setjobcategory(response.data);
			// if (response.data.length > 0) {
			// 	setJobDes(response.data[0]);
			// 	setSelectedContenet(response.data[0].JobId)
			// }
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		fetchApi2();
	}, []);

	const [JobSkill, setjobSkill] = useState([]);

	const fetchApi3 = async (req, res) => {
		try {
			let dummyArray = [];
			const token = localStorage.getItem("token");
			const response = await axios.get("http://localhost:3001/jobskill", {
				headers: {
					token: `${token}`,
				},
			});
			for (let i = 0; i < response.data.length; i++) {
				dummyArray.push(response.data[i].JobSkill);
			}
			setProfileSkills(dummyArray);
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		fetchApi3();
	}, []);

	const skillsList = (e) => {
		setjobSkill([...e]);
	};

	var [location, setLocation] = useState([]);

	const fetchApi4 = async (req, res) => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.get("http://localhost:3001/joblocation", {
				headers: {
					token: `${token}`,
				},
			});
			setLocation(response.data);
			// setDuplicateJobs(response.data)
			// setFilteredCompanies(response.data)
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		fetchApi4();
	}, []);

	const JobExperience = [
		{ Experience: "Fresher", id: 1 },
		{ Experience: "0-2 years", id: 2 },
		{ Experience: "2-5 years", id: 3 },
		{ Experience: "5-7 years", id: 4 },
		{ Experience: "7-10 years", id: 5 },
		{ Experience: "10+ years", id: 7 },
	];

	const JobSalary = [
		{ Salary: "0-3 LPA", id: 1 },
		{ Salary: "3-5 LPA", id: 2 },
		{ Salary: "5-7 LPA", id: 3 },
		{ Salary: "7-10 LPA", id: 4 },
		{ Salary: "10-15 LPA", id: 5 },
		{ Salary: "15+ LPA", id: 6 },
	];

	const Addressproof = [
		{ card: "Aadhar", id: 1 },
		{ card: "PAN Card", id: 2 },
		{ card: "Driving Licence", id: 3 },
		{ card: "Voter Card", id: 4 },
	];

	const Languages = [
		{ id: "Assamese", name: 1 },
		{ id: "Bangla", name: 2 },
		{ id: "Bengali", name: 3 },
		{ id: "Bodo", name: 4 },
		{ id: "Dogri", name: 5 },
		{ id: "Gujarati", name: 6 },
		{ id: "Hindi", name: 7 },
		{ id: "Kashmiri", name: 8 },
		{ id: "Kannada", name: 9 },
		{ id: "Konkani", name: 10 },
		{ id: "Maithili", name: 11 },
		{ id: "Malayalam", name: 12 },
		{ id: "Marathi", name: 13 },
		{ id: "Manipuri", name: 14 },
		{ id: "Nepali", name: 15 },
		{ id: "Odiya", name: 16 },
		{ id: "Punjabi", name: 17 },
		{ id: "Tamil", name: 18 },
		{ id: "Telugu", name: 19 },
		{ id: "Santhali", name: 20 },
		{ id: "Sanskrit", name: 21 },
		{ id: "Urdu", name: 22 },
		{ id: "English", name: 23 },
	];



	const Notice = [
		{ period: "15 days or Less", id: 1 },
		{ period: "1 Month", id: 2 },
		{ period: "2 Month", id: 3 },
		{ period: "3 Month", id: 4 },
		{ period: "More then 3 Months", id: 5 },
		{ period: "serving notice period", id: 6 },
	];

	const [selectedQualification, setSelectedQualification] = useState([]);
	const [selectedCourse, setSelectedCourse] = useState([]);
	const [selectedSpecialization, setSelectedSpecialization] = useState([]);
	const [university, setUniversity] = useState("");
	const [yearofpass, setYearofpass] = useState("");
	const [percentage, setPercentage] = useState("");
	const [courseType, setcourseType] = useState("");

	const handleUpdateDetails5 = async () => {
		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				qualification: selectedQualification,
				course: selectedCourse,
				specialization: selectedSpecialization,
				university: university,
				yearofpass: yearofpass,
				percentage: percentage,
				courseType: courseType,
			});

			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	};

	useEffect(() => {
		setSelectedQualification(loggedProfile.qualification || []);
		setSelectedCourse(loggedProfile.course || []);
		setSelectedSpecialization(loggedProfile.specialization || []);
		setUniversity(loggedProfile.university || "");
		setYearofpass(loggedProfile.yearofpass || "");
		setPercentage(loggedProfile.percentage || "");
		setcourseType(loggedProfile.courseType || "");
	}, [loggedProfile]);

	const [fields, setFields] = useState({
		image: false,
		resume: false,
		resumeHeadline: false,
		profileSummary: false,
		keySkills: false,
		employement: false,
		education: false,
		project: false,
		desiredDes: false,
		desireIndus: false,
		expCtc: false,
		empType: false,
		desShift: false,
		dateOb: false,
		marry: false,
		ages: false,
		lang: false,
		gen: false,
		add: false,
		pass: false
	});

	const [percentage1, setPercentage1] = useState(0);

	const calculatePercentage = () => {
		const totalFields = Object.keys(fields).length;
		const completedFields = Object.values(fields).filter((value) => value).length;
		const calculatedPercentage = (completedFields / totalFields) * 100;
		return Math.round(calculatedPercentage);
	};

	//   const [employementExists, setEmployementExists] = useState(false);

	useEffect(() => {
		let percentage = 0;

		// const employementDiv = document.getElementById('empDisplay');

		if (uploadedImageUrl) {
			setFields((prevFields) => ({ ...prevFields, image: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, image: false }));
		}
		if (newUser) {
			setFields((prevFields) => ({ ...prevFields, resume: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, resume: false }));
		}

		if (description) {
			setFields((prevFields) => ({ ...prevFields, resumeHeadline: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, resumeHeadline: false }));
		}

		if (resumeItem) {
		    setFields((prevFields) => ({ ...prevFields, profileSummary: true }));
		    percentage += 10;
		} else {
		    setFields((prevFields) => ({ ...prevFields, profileSummary: false }));
		}

		if (JobSkill) {
			setFields((prevFields) => ({ ...prevFields, keySkills: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, keySkills: false }));
		}

		if (newEmployement.length !== 0) {
			setFields((prevFields) => ({ ...prevFields, employement: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, employement: false }));
		}
		if (Education) {
			setFields((prevFields) => ({ ...prevFields, education: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, education: false }));
		}
		if (newProject.length !== 0) {
			setFields((prevFields) => ({ ...prevFields, project: true }));
			percentage += 10;
		} else {
			setFields((prevFields) => ({ ...prevFields, project: false }));
		}
		if (designationInd) {
			setFields((prevFields) => ({ ...prevFields, desiredDes: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, desiredDes: false }));
		}
		if (desiredIndustry) {
			setFields((prevFields) => ({ ...prevFields, desireIndus: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, desireIndus: false }));
		}
		if (expectedSalary) {
			setFields((prevFields) => ({ ...prevFields, expCtc: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, expCtc: false }));
		}
		if (employeType) {
			setFields((prevFields) => ({ ...prevFields, empType: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, empType: false }));
		}
		if (desiredShift) {
			setFields((prevFields) => ({ ...prevFields, desShift: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, desShift: false }));
		}
		if (userDob) {
			setFields((prevFields) => ({ ...prevFields, dateOb: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, dateOb: false }));
		}
		if (marriegetype) {
			setFields((prevFields) => ({ ...prevFields, marry: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, marry: false }));
		}
		if (userAge) {
			setFields((prevFields) => ({ ...prevFields, ages: true }));
			percentage += 2;
		} else {
			setFields((prevFields) => ({ ...prevFields, ages: false }));
		}
		if (Languages) {
			setFields((prevFields) => ({ ...prevFields, lang: true }));
			percentage += 1;
		} else {
			setFields((prevFields) => ({ ...prevFields, lang: false }));
		}
		if (loggedProfile.gender) {
			setFields((prevFields) => ({ ...prevFields, gen: true }));
			percentage += 1;
		} else {
			setFields((prevFields) => ({ ...prevFields, gen: false }));
		}
		if (pAddress, homeTown, pincode) {
			setFields((prevFields) => ({ ...prevFields, add: true }));
			percentage += 1;
		} else {
			setFields((prevFields) => ({ ...prevFields, add: false }));
		}
		if (passport) {
			setFields((prevFields) => ({ ...prevFields, pass: true }));
			percentage += 1;
		} else {
			setFields((prevFields) => ({ ...prevFields, pass: false }));
		}




		setPercentage1(percentage);
	}, [newUser, description, JobSkill, newEmployement]);


	const [resumeItem, setresumeItem] = useState ("")

	const handleFileChange = async (e) => {
		const resumeItem = e.target.value;
		const file = e.target.files[0];
		if (!file) return;
	
		const formData = new FormData();
		formData.append('myfile', file);

		const storedData = localStorage.getItem("id");
		const userData = JSON.parse(storedData);
		const id = userData.user.id;
		try {
			const response = await axios.put(`http://localhost:3001/user/${id}`, {
				resumeItem:resumeItem,
			});

			console.log("Details updated:", response.data);
		} catch (error) {
			console.error("Error updating details:", error);
		}
	}
	useEffect(() => {
		setresumeItem(loggedProfile.resumeItem || "");
	}, [loggedProfile]);


	return (
		<div>
			<section className="section1 ">
				<div className="container">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<nav className="navbar navbar-expand-lg navbar-light">
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
										<li className="  nav-item  mx-2">
											<a href="" className=" link-item nav-link active5 ">
												HOME
											</a>
										</li>
										<li className=" nav-item browse1  mx-2">
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
												aria-labelledby="dropdown2"
											>
												<li>
													<button
														className="dropdown-item"
														onClick={GotoBrowse}
													>
														My Browse Filter list
													</button>
												</li>
											</ul>
										</li>
										<li className="  nav-item browse1 mx-2">
											<a
												href=""
												className="dropdown-toggle filter1 link-item  jobs3 nav-link"
												data-bs-toggle="dropdown"
											>
												JOBS
											</a>
											<ul
												className="dropdown-menu "
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
														Destignation Jobs
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
									<li className="nav-item list-dropdown">
										<div className="list-dropdown1">
											<button
												className=" user-btn-item d-flex "
												id="dropdown3"
												data-bs-toggle="dropdown"
											>
												<i
													className="fa-solid fa-circle-user  px-3 useritem"
													id="userId"
												></i>
												<div className="">
													<i className="fa-solid fa-caret-down dropitem"></i>
												</div>
												<ul
													className="dropdown-menu "
													aria-labelledby="dropdown3"
												>
													<li>
														<a
															className="dropdown-item"
															href="#"
															onClick={GotoProfile}
														>
															Candidate Profile
														</a>
													</li>
													<li>
														<a className="dropdown-item" href="#">
															Resume
														</a>
													</li>
													<li>
														<a
															className="dropdown-item"
															href="#"
															onClick={GotoApplied}
														>
															Applied Jobs
														</a>
													</li>
													<li>
														<a className="dropdown-item" href="#" onClick={GotoJobalert} >
															Job alerts
														</a>
													</li>
													<li>
														<a className="dropdown-item" href="#" onClick={GotoSaved}>
															Saved Jobs
														</a>
													</li>
													<li>
														<a className="dropdown-item" href="#" onClick={GotoPassword}>
															Change Password
														</a>
													</li>
													<li>
														<a
															className="dropdown-item"
															href="#"
															onClick={GotoLogin}
														>
															Logout
														</a>
													</li>
												</ul>
											</button>
										</div>
									</li>
								</div>
							</nav>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</section>
			<section className="resume-item" id="resumeItem">
				<div className="container ">
					<div className="row">
						<div className="col-lg-4  my-5">
							<div className="pro-item  p-3" onclick="profileBtn()">
								<div className="row">
									<div className="col-lg-5">
										<div className="icon-item-user text-center">
											<img
												src={
													uploadedImageUrl ||
													"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
												}
												className="img-fluid p-1 user_img "
												alt="img"
												onClick={handleImageClick}
											/>
											<input
												type="file"
												ref={fileInputRef}
												style={{ display: "none" }}
												accept="image/*"
												value={uploadImage}
												onChange={handleImageChange}
											/>
										</div>
									</div>
									<div className="col-lg-7 m-auto">
										<h5>{loggedProfile.fullName}</h5>
									</div>
									<div className="details p-2"></div>
									<div className="row my-4">
										<div className="col-lg-7">
											<div className="d-flex">
												<i className="fa-solid fa-phone"></i>
												<span className="pro">
													{loggedProfile.mobileNumber}
												</span>
											</div>
											<div className="d-flex">
												<i className="fa-regular fa-envelope"></i>
												<span className="pro">{loggedProfile.Email}</span>
											</div>
											<div>
												<i className="fa-solid fa-briefcase"></i>
												<span className="pro">{loggedProfile.expDet}</span>
											</div>
										</div>
										<div className="col-lg-5 ">
											<div>
												<i className="fa-solid fa-location-dot"></i>
												<span className="pro">{loggedProfile.city}</span>
											</div>
											<div>
												<i className="fa-solid fa-briefcase"></i>{" "}
												<span className="pro">
													{loggedProfile.SalaryDetails}
												</span>
											</div>
											<div>
												<i className="fa-solid fa-calendar-days"></i>
												<span className="pro">{loggedProfile.expYears}</span>
											</div>
										</div>
									</div>
								</div>
								<span className="text"> Your profile update</span>
								<div className="row my-2">
									<div className="col-lg-4 col-md-6 my-2">
										<button className="num8"> {percentage1}%</button>
									</div>
									<div className="col-lg-8 col-md-6">
										{percentage1 < 100 && (
											<div className="px-3 p-1 missing-item text-center">
												Add {Object.values(fields).filter((value) => !value).length} Missing details
											</div>
										)}

										{/* <p className="missing-item m-0">Add 2 missing details</p> */}
										<span className="last-item1 text-end">
											Profile last updated - 30Jun, 2023
										</span>
									</div>
								</div>
							</div>
							<div className="profile-sumary sticky-top ">
								<button className="profile-button">
									{" "}
									<a href="#resumeElement" className="color-item">
										Resume
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="#proElement" className="color-item">
										Profile Summary
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="" className="color-item">
										Resume Headline
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="#keyElement" className="color-item">
										Key Skills
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="#employerElement" className="color-item">
										Employment
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="#educationElement" className="color-item">
										Education
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="#projectElement" className="color-item">
										Project
									</a>{" "}
								</button>
								<button className="profile-button">
									{" "}
									<a href="#acoElement" className="color-item">
										Accomplishment
									</a>
								</button>
								<button className="profile-button">
									{" "}
									<a href="#careerElemet" className="color-item">
										Desired Career Profile
									</a>
								</button>
								<button className="profile-button">
									{" "}
									<a href="#personalElement" className="color-item">
										Personal Details
									</a>
								</button>
							</div>
						</div>
						<div className="col-lg-8 my-5">
							<div className="resume-add-item p-3">
								<h4 className=" pb-2" id="resumeElement">
									Resume{" "}
									<span className="sub-resume-item">
										(Recuiters generally do not look at profile without resume.)
									</span>
								</h4>
								<div className="upload-resume p-5 my-3 ">
									
										<div className="btn-upload w-25 ">
											<label className="file_upload" for="myfile">Upload Resume
											<i className="fa-solid fa-arrow-up-from-bracket mx-2"></i>
											</label>
											<input type="file" id="myfile" name="myfile"  accept=".doc, .docx, .rtf, .pdf" hidden  onChange={handleFileChange} />
										</div>									
								</div>
								<div className="resume_path text-center ">{resumeItem}</div>
								<div className="text-center support">
									Supported Formats: doc, docx, rtf, pdf,upto 2 MB
								</div>
							</div>
							<div className="headline mt-4 p-3">
								<h4 className=" d-flex justify-content-between pb-2">
									Resume Headline{" "}
									<span>
										<i
											className="fa-regular fa-pen-to-square"
											data-bs-toggle="modal"
											data-bs-target="#myModal"
											onClick={() => setIsModalOpen(true)}
										></i>
									</span>
								</h4>
								<p className="mx-3">{description}</p>
								<div className="modal fade" id="myModal">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">
														Resume Headline
													</h3>
												</div>
												<div>
													<p className="resumeitem">
														It is the first thing recruiters notice in your
														profile. Write concisely what makes you unique and
														right person for the job you are looking for.
													</p>
												</div>
											</div>

											<div className="modal-body">
												<p>Description</p>
												<textarea
													className="textarea"
													rows={8}
													cols={100}
													value={userResumeHeadline}
													onChange={(e) =>
														setuserResumeHeadline(e.target.value)
													}
												></textarea>
											</div>

											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSaveChanges}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-3" id="proElement">
								<h4 className=" d-flex justify-content-between pb-2">
									Profile Summary{" "}
									<span>
										<i
											className="fa-regular fa-pen-to-square"
											data-bs-toggle="modal"
											data-bs-target="#myModal1"
										></i>
									</span>
								</h4>
								<p className="mx-3">{newUser}</p>
								<div className="modal fade" id="myModal1">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">
														Profile Summary
													</h3>
												</div>
												<div>
													<p className="resumeitem">
														Your Profile Summary should mention the highlights
														of your career and education, what your professional
														interests are, and what kind of a career you are
														looking for. Write a meaningful summary of more than
														50 characters
													</p>
												</div>
											</div>

											<div className="modal-body">
												<p>Details of Projects</p>
												<textarea
													className="textarea"
													rows={8}
													cols={100}
													value={userProfile}
													onChange={(e) => setNewUserProfile(e.target.value)}
												></textarea>
											</div>

											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleProfileChange}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-3" id="keyElement">
								<h4 className=" d-flex justify-content-between pb-2">
									Key Skills{" "}
									<span>
										<i
											className="fa-regular fa-pen-to-square"
											data-bs-toggle="modal"
											data-bs-target="#myModal2"
										></i>
									</span>
								</h4>
								<div className="row">
									<div className="col-md-12">
										<div className="">
											{JobSkill.map((job) => (
												<button className="skill_button_item">{job}</button>
											))}{" "}
										</div>
									</div>
								</div>

								<div className="modal fade" id="myModal2">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">
														Key Skills{" "}
													</h3>
												</div>
												<div>
													<p className="resumeitem">
														Tell recruiters what you know or what you are known
														for e.g. Artificial Intelligence, Oracle, Java etc.
													</p>
												</div>
											</div>

											<div className="modal-body">
												<p>Skills</p>
												<Multiselect
													isObject={false}
													onRemove={(event) => {
														skillsList(event);
													}}
													onSelect={(event) => {
														skillsList(event);
													}}
													options={profileSkills}
												/>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSkillChange}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-3" id="employerElement">
								<h4 className=" pb-2 d-flex justify-content-between">
									Employment{" "}
									<span>
										<i
											className="fa-regular fa-pen-to-square"
											data-bs-toggle="modal"
											data-bs-target="#myModal3"
										></i>
									</span>
								</h4>
								{newEmployement.map((Employement, index) => (
									<div key={index} className="row mx-1 my-4">
										<div className="col-lg-6 ">
											<div className="employement_details">
												<span className="exp_details">Experience: </span>{" "}
												{Employement.ExpDetails}
											</div>
											<div className="employement_details">
												{" "}
												<span className="exp_details">Designation:</span>{" "}
												{Employement.userDesignation}
											</div>
											<div
												className="employement_details"
												value="duration"
												onChange={(e) => setDuration(e.target.value)}
											>
												<span className="exp_details">Duration: </span>{" "}
												{Employement.duration}y/ {Employement.duration}m/{" "}
												{Employement.duration}d
											</div>
											<div className="employement_details">
												{" "}
												<span className="exp_details">
													{" "}
													My Job Description:
												</span>{" "}
												{Employement.DescribeJob}
											</div>
										</div>
										<div className="col-lg-5 ">
											<div className="employement_details">
												{" "}
												<span className="exp_details">Salary: </span>{" "}
												{Employement.SalaryDetails}
											</div>
											<div className="employement_details">
												<span className="exp_details">Category: </span>{" "}
												{Employement.userCategory}
											</div>
											<div className="employement_details">
												<span className="exp_details">Notice period: </span>{" "}
												{Employement.Notice}
											</div>
										</div>
										<div className="col-lg-1">
											<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemoveEmployment(index, Employement._id)}></i>
										</div>
									</div>
								))}
								<div className="modal fade" id="myModal3">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">
														Employement
													</h3>
												</div>
											</div>
											<div>
												<div className="row p-3">
													<div className="col-lg-6">
														<label>Total Experience</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={ExpDetails}
															onChange={(e) => setNewExpDetails(e.target.value)}
														>
															<option hidden>years</option>
															{JobExperience.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.Experience}
																>
																	{loc.Experience}
																</option>
															))}
														</select>
													</div>
													<div className="col-lg-6">
														<label>Current CTC</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={SalaryDetails}
															onChange={(e) => setSalaryDetails(e.target.value)}
														>
															<option hidden>Current CTC</option>
															{JobSalary.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.Salary}
																>
																	{loc.Salary}
																</option>
															))}
														</select>
													</div>
												</div>
												<div className="row p-3 ">
													<div className="col-lg-6">
														<label>Your Designation</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={userDesignation}
															onChange={(e) =>
																setuserDesignation(e.target.value)
															}
														>
															<option hidden>Your Designation</option>
															{Jobdesignation.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.userDesignation}
																>
																	{loc.JobDesignation}
																</option>
															))}
														</select>
													</div>
													<div className="col-lg-6">
														<label>Your Category</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={userCategory}
															onChange={(e) => setuserCategory(e.target.value)}
														>
															<option hidden>Category</option>
															{Jobcategory.map((loc) => (
																<option
																	className=" m-2"
																	key={loc.id}
																	value={loc.userCategory}
																>
																	{loc.JobCategory}
																</option>
															))}
														</select>
													</div>
												</div>

												<p className="ex-item m-0 p-3">
													Is this your current Company?
												</p>
												<div className="py-0">
													<input
														type="radio"
														name="YES"
														id="YES"
														className="mx-3 inputfield-item"
														value="YES"
														checked={noticeType === "YES"}
														onChange={(e) => setnoticeType(e.target.value)}
													/>
													YES
													<input
														type="radio"
														name="YES"
														id="NO"
														className="mx-3 inputfield-item"
														value="NO"
														checked={noticeType === "NO"}
														onChange={(e) => setnoticeType(e.target.value)}
													/>{" "}
													NO
												</div>

												<div className="row p-3 ">
													<div className="col-lg-6">
														<label>Started Working From</label>
														<input
															type="date"
															className="form-control p-2"
															placeholder="dd/mm/yyyy"
															value={startDate}
															onChange={(e) => setStartDate(e.target.value)}
														/>
													</div>
													{noticeType === "NO" && (
														<div className="col-lg-6">
															<label>Worked Till</label>
															<input
																type="date"
																className="form-control p-2"
																placeholder="dd/mm/yyyy"
																value={endDate}
																onChange={(e) => setEndDate(e.target.value)}
															/>
														</div>
													)}
													{noticeType === "YES" && (
														<div className="col-lg-6">
															<label>Present</label>
															<input
																type="text"
																className="form-control p-2"
																placeholder="Present"
																value={startDate === "" ? "Present" : "No"}
																disabled
															/>
														</div>
													)}
												</div>
											</div>
											<div className="modal-body">
												<p>Describe your job profile</p>
												<textarea
													className="textarea"
													rows={8}
													cols={100}
													value={DescribeJob}
													onChange={(e) => setDescribeJob(e.target.value)}
												></textarea>
											</div>
											{noticeType === "YES" ? (
												<div className="p-3">
													<select
														className="w-100 p-2 inputfield-item select-Experience-item"
														id="adrees"
														name="addressproof"
														value={newperiod}
														onChange={(e) => setnewperiod(e.target.value)}
													>
														<option hidden>select your notice period</option>
														{Notice.map((loc) => (
															<option
																className="m-2"
																key={loc.id}
																value={loc.period}
															>
																{loc.period}
															</option>
														))}
													</select>
												</div>
											) : null}

											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSkillChange5}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-3" id="education">
								<div>
									<h4 className=" pb-3 d-flex justify-content-between">
										Education{" "}
										<span>
											<i
												className="fa-regular fa-pen-to-square"
												data-bs-toggle="modal"
												data-bs-target="#myModal4"
											></i>
										</span>
									</h4>
									<div>
										<div className="modal fade" id="myModal4">
											<div className="modal-dialog modal-lg modal-dialog-centered modal-center rounded-modal modal-black  padded-modal">
												<div className="modal-content">
													<button
														type="button"
														className="btn-close"
														data-bs-dismiss="modal"
													></button>
													{/* -- Modal Header --> */}
													<div className="modal-header flex-column">
														<h5 className="modal-title resumeitem mt-2">
															Education
														</h5>
														<span className="resumeitem mt-3">
															*Fill the qualification details from highest to
															lowest.
														</span>
													</div>
													{/* -- Modal body  */}
													<div className="modal-body">
														<div className="my-3">
															<label className="mb-2">Qualification</label>
															<Select
																name="select"
																options={Education.map((item) => ({
																	id: item.id,
																	name: item.qualification,
																}))}
																labelField="name"
																valueField="id"
																dropdownPosition="bottom"
																searchable={true}
																className="w-100 inputfield-item select-Experience-item input_type_text p-2"
																onChange={(selectedOptions) => {
																	console.log(
																		"Selected Options:",
																		selectedOptions
																	);
																	setSelectedQualification(
																		selectedOptions.map((option) => option.name)
																	);
																	setSelectedCourse([]);
																	setSelectedSpecialization([]);
																}}
															/>
														</div>

														<div className="my-3">
															<label className="mb-2">Course</label>
															<Select
																name="select"
																options={(
																	Education.find((item) =>
																		selectedQualification.includes(
																			item.qualification
																		)
																	)?.course || []
																).map((course) => ({ name: course.name }))}
																labelField="name"
																valueField="name"
																dropdownPosition="bottom"
																searchable={true}
																className="w-100 inputfield-item select-Experience-item input_type_text p-2"
																onChange={(selectedOptions) => {
																	console.log(
																		"Selected Course Options:",
																		selectedOptions
																	);
																	setSelectedCourse(
																		selectedOptions.map((option) => option.name)
																	);
																	setSelectedSpecialization([]);
																}}
															/>
														</div>

														{selectedQualification.includes("Graduate") &&
															selectedCourse.length > 0 && (
																<div className="my-3">
																	<label className="mb-2">Specialization</label>
																	<Select
																		name="select"
																		options={(
																			Education.find((item) =>
																				selectedQualification.includes(
																					item.qualification
																				)
																			)?.course.find((course) =>
																				selectedCourse.includes(course.name)
																			)?.specailazation || []
																		).map((spec) => ({ name: spec.sName }))}
																		labelField="name"
																		valueField="name"
																		dropdownPosition="bottom"
																		searchable={true}
																		className="w-100 input_type_text p-2"
																		onChange={(selectedOptions) => {
																			console.log(
																				"Selected Specialization Options:",
																				selectedOptions
																			);
																			setSelectedSpecialization(
																				selectedOptions.map(
																					(option) => option.name
																				)
																			);
																		}}
																	/>
																</div>
															)}
														<div className="my-3">
															<label className="mb-2">
																University/Institute
															</label>
															<input
																type="text"
																placeholder="University/Institute"
																className="form-control input_type_text"
																value={university}
																onChange={(e) => setUniversity(e.target.value)}
															/>
														</div>
														<label className="mb-2">Course Type</label>
														<div className="py-0">
															<input
																type="radio"
																name="fulltime"
																id="ft"
																className="mx-3 inputfield-item"
																value="FullTime"
																checked={courseType === "FullTime"}
																onChange={(e) => setcourseType(e.target.value)}
															/>{" "}
															FullTime
															<input
																type="radio"
																name="parttime"
																id="pt"
																className="mx-3 inputfield-item"
																value="PartTime"
																checked={courseType === "PartTime"}
																onChange={(e) => setcourseType(e.target.value)}
															/>{" "}
															PartTime
															<input
																type="radio"
																name="Correspondence"
																id="Correspondence"
																className="mx-3 inputfield-item"
																value="Correspondence/Distance Learning"
																checked={
																	courseType ===
																	" Correspondence/Distance Learning"
																}
																onChange={(e) => setcourseType(e.target.value)}
															/>{" "}
															Correspondence/Distance Learning
														</div>
														<div className="row">
															<div className="col-lg-6">
																<div className="mt-2">
																	<label className="mb-2">
																		Passed Out Year
																	</label>
																	<br></br>
																	<input
																		type="text"
																		placeholder="Enter passed out year"
																		className="form-control input_type_text"
																		value={yearofpass}
																		onChange={(e) =>
																			setYearofpass(e.target.value)
																		}
																	/>
																</div>
															</div>
															<div className="col-lg-6">
																<div className="mt-2">
																	<label className="mb-2">
																		Marks in Percentage or CGPA
																	</label>
																	<br></br>
																	<input
																		type="text"
																		placeholder="Enter your marks in percentage or CGPA"
																		className="form-control input_type_text"
																		value={percentage}
																		onChange={(e) =>
																			setPercentage(e.target.value)
																		}
																	/>
																</div>
															</div>
														</div>
													</div>
													{/* <!-- Modal footer --> */}
													<div className="modal-footer">
														<button
															type="button"
															className="savechanges"
															data-bs-dismiss="modal"
															onClick={handleUpdateDetails5}
														>
															Save Changes
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="px-2">
										{selectedQualification.length > 0 &&
											selectedCourse.length > 0 && (
												<div className="employement_details ">
													<span className="exp_details">Qualifcation: </span>{" "}
													{selectedQualification.join(", ")} -{" "}
													{selectedCourse.join(", ")}
												</div>
											)}
										<div className="employement_details ">
											<span className="exp_details">University/college: </span>{" "}
											{university}
										</div>
										<div className="employement_details ">
											<span className="exp_details">
												year of pass & Percentage:{" "}
											</span>{" "}
											{yearofpass} ({percentage})
										</div>
										<div className="employement_details ">
											<span className="exp_details">Course Type: </span>{" "}
											{courseType}
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-3" id="projectElement">
								<h4 className=" pb-2 d-flex justify-content-between">
									Projects
									<span>
										<i
											className="fa-regular fa-pen-to-square"
											data-bs-toggle="modal"
											data-bs-target="#myModal5"
										></i>
									</span>
								</h4>
								{newProject.map((projectDeatails, index) => (
									<div key={index} className="row mx-1  my-4">
										<div className="col-lg-6">
											<div className="employement_details">
												<span className="exp_details">Title: </span>
												{projectDeatails.title}
											</div>
											<div className="employement_details">
												{" "}
												<span className="exp_details">Client: </span>
												{projectDeatails.client}
											</div>
											<div className="employement_details">
												<span className="exp_details">
													Project Start Date:{" "}
												</span>
												{projectDeatails.dateStart}
											</div>
										</div>
										<div className="col-lg-5">
											<div className="employement_details">
												<span className="exp_details">Project Details: </span>
												{projectDeatails.details}
											</div>
											<div className="employement_details">
												<span className="exp_details">Project Status: </span>
												{projectDeatails.projectType}
											</div>
											<div className="employement_details">
												<span className="exp_details">Project End Date: </span>
												{projectDeatails.dateEnd}
											</div>
										</div>
										<div className="col-lg-1">
											<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemoveProject(index, projectDeatails._id)}></i>
										</div>
									</div>
								))}

								<div className="modal fade" id="myModal5">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">Project</h3>
												</div>
											</div>
											<div className="p-3">
												<label className="pb-2">Project Title</label>
												<input
													type="text"
													className="form-control input_type_text"
													value={title}
													onChange={(e) => settitle(e.target.value)}
												/>
											</div>
											<div className="p-3">
												<label className="pb-2">client</label>
												<input
													type="text"
													className="form-control input_type_text"
													value={client}
													onChange={(e) => setclient(e.target.value)}
												/>
											</div>
											<p className="ex-item m-0 p-3">Project type?</p>
											<div className="py-0">
												<input
													type="radio"
													name="Progress"
													id="progress"
													className="mx-3 inputfield-item"
													value="In Progress"
													checked={projectType === "In Progress"}
													onChange={(e) => setnewprojectType(e.target.value)}
												/>{" "}
												In Progress
												<input
													type="radio"
													name="Progress"
													id="finished"
													className="mx-3 inputfield-item"
													value="Finished"
													checked={projectType === "Finished"}
													onChange={(e) => setnewprojectType(e.target.value)}
												/>{" "}
												Finished
											</div>

											<div className="row p-3 ">
												<div className="col-lg-6">
													<label>Started Working From</label>
													<input
														type="date"
														className="form-control p-2"
														placeholder="dd/mm/yyyy"
														value={dateStart}
														onChange={(e) => setDateStart(e.target.value)}
													/>
												</div>
												<div className="col-lg-6">
													<label>Worked Till</label>
													<input
														type="date"
														className="form-control p-2"
														placeholder="dd/mm/yyyy"
														value={dateEnd}
														onChange={(e) => setDateEnd(e.target.value)}
													/>
												</div>
											</div>
											<div className="modal-body">
												<p>Details of Projects</p>
												<textarea
													className="textarea"
													rows={8}
													cols={100}
													value={details}
													onChange={(e) => setdetails(e.target.value)}
												></textarea>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSkillChange6}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-4" id="acoElement">
								<h4 className=" pb-1 ">Accomplishment </h4>
								<div className="headline  p-3 mb-2 ">
									<h5 className="d-flex justify-content-between">
										Work Sample
										<span>
											<i
												className="fa-regular fa-pen-to-square"
												data-bs-toggle="modal"
												data-bs-target="#myModal6"
											></i>
										</span>
									</h5>
									{newWork.map((workSample, index) => (
										<div key={index} className="row my-4">
											<div className="col-lg-6">
												<div className="employement_details">
													<span className="exp_details">Title: </span>
													{workSample.worktitle}
												</div>
												<div className="employement_details">
													<span className="exp_details">URL Link: </span>
													{workSample.urlLink}
												</div>
												<div className="employement_details">
													<span className="exp_details">
														Discription of Work :
													</span>
													{workSample.desWork}
												</div>
											</div>
											<div className="col-lg-5">
												<div className="employement_details">
													<span className="exp_details">Duration From: </span>
													{workSample.durationFrom}
												</div>
												<div className="employement_details">
													<span className="exp_details">Duration To: </span>
													{workSample.durationTo}
												</div>
											</div>
											<div className="col-lg-1">
												<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemoveWork(index, workSample._id)}></i>
											</div>
										</div>
									))}
								</div>
								<div className="modal fade" id="myModal6">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-center">
													<h3 className="modal-title resumeitem">
														Work Sample
													</h3>
												</div>
												<p className="m-0 resumeitem">
													Add link to your projects(e.g. Github link etc.).
												</p>
											</div>
											<div className="p-3">
												<label className="pb-2">Work Title</label>
												<input
													type="text"
													className="form-control input_type_text"
													value={worktitle}
													onChange={(e) => setworkTitle(e.target.value)}
												/>
											</div>
											<div className="p-3">
												<label className="pb-2">URL</label>
												<input
													type="text"
													className="form-control input_type_text"
													value={urlLink}
													onChange={(e) => seturlLink(e.target.value)}
												/>
											</div>

											<div className="row p-3 ">
												<div className="col-lg-6">
													<label>Duration From</label>
													<input
														type="date"
														className="form-control p-2"
														placeholder="dd/mm/yyyy"
														value={durationFrom}
														onChange={(e) => setdurationFrom(e.target.value)}
													/>
												</div>
												<div className="col-lg-6">
													<label>Duration To</label>
													<input
														type="date"
														className="form-control p-2"
														placeholder="dd/mm/yyyy"
														value={durationTo}
														onChange={(e) => setdurationTo(e.target.value)}
													/>
												</div>
											</div>
											<div className="modal-body">
												<p>Description</p>
												<textarea
													className="textarea"
													rows={8}
													cols={100}
													value={desWork}
													onChange={(e) => setdesWork(e.target.value)}
												></textarea>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSkillChange1}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className=" work-item">
									<div className=" headline  my-2 p-3 ">
										<h5 className="m-0 pb-2 d-flex justify-content-between ">
											White paper / Research publication
											<span>
												<i
													className="fa-regular fa-pen-to-square"
													data-bs-toggle="modal"
													data-bs-target="#myModal7"
												></i>
											</span>
										</h5>
										{newPaper.map((whitePaper, index) => (
											<div key={index} className="row my-4">
												<div className="col-lg-11">
													<div className="employement_details">
														<span className="exp_details">Title: </span>
														{whitePaper.titlework}
													</div>
													<div className="employement_details">
														<span className="exp_details">URL Link: </span>
														{whitePaper.linkUrl}
													</div>
													<div className="employement_details">
														<span className="exp_details">
															Discription of Work :
														</span>
														{whitePaper.workDes}
													</div>
												</div>
												<div className="col-lg-1 ">
													<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemoveWhite(index, whitePaper._id)}></i>
												</div>
											</div>
										))}
										<div className="modal fade" id="myModal7">
											<div className="modal-dialog modal-lg modal-dialog-centered ">
												<div className="modal-content ">
													<button
														type="button"
														className="btn-close "
														data-bs-dismiss="modal"
													></button>
													<div className="modal-header flex-column text-start">
														<div className="text-center">
															<h3 className="modal-title resumeitem">
																White Paper / Research Publication
															</h3>
														</div>
													</div>
													<div className="p-3">
														<label className="pb-2">Work Title</label>
														<input
															type="text"
															className="form-control input_type_text"
															value={titlework}
															onChange={(e) => settitlework(e.target.value)}
														/>
													</div>
													<div className="p-3">
														<label className="pb-2">URL</label>
														<input
															type="text"
															className="form-control input_type_text"
															value={linkUrl}
															onChange={(e) => setlinkUrl(e.target.value)}
														/>
													</div>

													<div className="modal-body">
														<p>Description</p>
														<textarea
															className="textarea"
															rows={8}
															cols={100}
															value={workDes}
															onChange={(e) => setworkDes(e.target.value)}
														></textarea>
													</div>
													<div className="modal-footer">
														<button
															type="button"
															class="savechanges"
															data-bs-dismiss="modal"
															onClick={handleSkillChangework}
														>
															Save changes
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className=" work-item">
									<div className=" headline p-3 my-2 ">
										<h5 className="m-0 pb-2 d-flex justify-content-between">
											Presentation
											<span>
												<i
													className="fa-regular fa-pen-to-square"
													data-bs-toggle="modal"
													data-bs-target="#myModal8"
												></i>
											</span>
										</h5>
										{newPresantation.map((Presantation, index) => (
											<div className="row my-4" key={index}>
												<div className="col-lg-11">
													<div className="employement_details">
														<span className="exp_details">Title: </span>
														{Presantation.titleofwork}
													</div>
													<div className="employement_details">
														<span className="exp_details">URL Link: </span>
														{Presantation.linkofUrl}
													</div>
													<div className="employement_details">
														<span className="exp_details">
															Discription of Work :
														</span>
														{Presantation.workofDes}
													</div>
												</div>
												<div className="col-lg-1 ">
													<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemovepres(index, Presantation._id)} ></i>
												</div>
											</div>
										))}
									</div>
									<div className="modal fade" id="myModal8">
										<div className="modal-dialog modal-lg modal-dialog-centered ">
											<div className="modal-content ">
												<button
													type="button"
													className="btn-close "
													data-bs-dismiss="modal"
												></button>
												<div className="modal-header flex-column text-start">
													<div className="text-center">
														<h3 className="modal-title resumeitem">
															Presentation
														</h3>
													</div>
												</div>
												<div className="p-3">
													<label className="pb-2">Work Title</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={titleofwork}
														onChange={(e) => settitleofwork(e.target.value)}
													/>
												</div>
												<div className="p-3">
													<label className="pb-2">URL</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={linkofUrl}
														onChange={(e) => setlinkofUrl(e.target.value)}
													/>
												</div>

												<div className="modal-body">
													<p>Description</p>
													<textarea
														className="textarea"
														rows={8}
														cols={100}
														value={workofDes}
														onChange={(e) => setworkofDes(e.target.value)}
													></textarea>
												</div>
												<div className="modal-footer">
													<button
														type="button"
														class="savechanges"
														data-bs-dismiss="modal"
														onClick={handleSkillChangepres}
													>
														Save changes
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="  work-item">
									<div className="headline p-3 my-2 ">
										<h5 className="m-0 pb-2 d-flex justify-content-between ">
											Petent
											<span>
												<i
													className="fa-regular fa-pen-to-square"
													data-bs-toggle="modal"
													data-bs-target="#myModal9"
												></i>
											</span>
										</h5>
										{newPatent.map((Patent, index) => (
											<div key={index} className="row my-4">
												<div className="col-lg-6">
													<div className="employement_details">
														<span className="exp_details">Patent Title: </span>
														{Patent.pattentTitle}
													</div>
													<div className="employement_details">
														<span className="exp_details">URL Link: </span>
														{Patent.pattentUrl}
													</div>
													<div className="employement_details">
														<span className="exp_details">Office :</span>
														{Patent.pattentOffice}
													</div>
												</div>
												<div className="col-lg-5">
													<div className="employement_details">
														<span className="exp_details">Status: </span>
														{Patent.Status}
													</div>
													<div className="employement_details">
														<span className="exp_details">Patent Number: </span>
														{Patent.pattentNum}
													</div>
													<div className="employement_details">
														<span className="exp_details">
															Discription of Patent:
														</span>
														{Patent.pattentDes}
													</div>
												</div>
												<div className="col-lg-1 ">
													<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemovepatent(index, Patent._id)}></i>
												</div>
											</div>
										))}
									</div>
									<div className="modal fade" id="myModal9">
										<div className="modal-dialog modal-lg modal-dialog-centered ">
											<div className="modal-content ">
												<button
													type="button"
													className="btn-close "
													data-bs-dismiss="modal"
												></button>
												<div className="modal-header flex-column text-start">
													<div className="text-center">
														<h3 className="modal-title resumeitem">Petent</h3>
													</div>
												</div>
												<div className="p-3">
													<label className="pb-2">Patent Title</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={pattentTitle}
														onChange={(e) => setpattentTitle(e.target.value)}
													/>
												</div>
												<div className="p-3">
													<label className="pb-2">URL</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={pattentUrl}
														onChange={(e) => setpattentUrl(e.target.value)}
													/>
												</div>
												<div className="p-3">
													<label className="pb-2">Patent Office</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={pattentOffice}
														onChange={(e) => setpattentOffice(e.target.value)}
													/>
												</div>
												<p className="ex-item m-0 p-3">Status?</p>
												<div className="py-0">
													<input
														type="radio"
														name="status"
														id="progress"
														className="mx-3 inputfield-item"
														value="Patent Issued"
														checked={Status === "Patent Issued"}
														onChange={(e) => setStatus(e.target.value)}
													/>{" "}
													Patent Issued
													<input
														type="radio"
														name="status"
														id="finished"
														className="mx-3 inputfield-item"
														value="Patent Pending"
														checked={Status === "Patent Pending"}
														onChange={(e) => setStatus(e.target.value)}
													/>{" "}
													Patent Pending
												</div>

												<div className="p-3">
													<label className="pb-2">Application Number</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={pattentNum}
														onChange={(e) => setpattentNum(e.target.value)}
													/>
												</div>

												<div className="modal-body">
													<p>Description</p>
													<textarea
														className="textarea"
														rows={8}
														cols={100}
														value={pattentDes}
														onChange={(e) => setpattentDes(e.target.value)}
													></textarea>
												</div>
												<div className="modal-footer">
													<button
														type="button"
														class="savechanges"
														data-bs-dismiss="modal"
														onClick={handleSkillChangepatent}
													>
														Save changes
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="  work-item">
									<div className="headline p-3 my-2 ">
										<h5 className="m-0 pb-2 d-flex justify-content-between ">
											Certification
											<span>
												<i
													className="fa-regular fa-pen-to-square"
													data-bs-toggle="modal"
													data-bs-target="#myModal10"
												></i>
											</span>
										</h5>
										{newCertificate.map((Certificate, index) => (
											<div key={index} className="row my-4">
												<div className="col-lg-6">
													<div className="employement_details">
														<span className="exp_details">
															Certificate Name:{" "}
														</span>
														{Certificate.cname}
													</div>
													<div className="employement_details">
														<span className="exp_details">
															Certificate Id:{" "}
														</span>
														{Certificate.cId}
													</div>
													<div className="employement_details">
														<span className="exp_details">
															Certificate Url :
														</span>
														{Certificate.cUrl}
													</div>
												</div>
												<div className="col-lg-5">
													<div className="employement_details">
														<span className="exp_details">Validity From </span>
														{Certificate.cValidfrom}
													</div>
													<div className="employement_details">
														<span className="exp_details">Validity To: </span>
														{Certificate.cValidto}
													</div>
												</div>
												<div className="col-lg-1 ">
													<i class="fa-solid fa-trash-can deleteIcon" onClick={() => handleRemovecert(index, Certificate._id)}></i>
												</div>
											</div>
										))}
									</div>
									<div className="modal fade" id="myModal10">
										<div className="modal-dialog modal-lg modal-dialog-centered ">
											<div className="modal-content ">
												<button
													type="button"
													className="btn-close "
													data-bs-dismiss="modal"
												></button>
												<div className="modal-header flex-column text-start">
													<div className="text-center">
														<h3 className="modal-title resumeitem">
															Certification
														</h3>
													</div>
													<p className="resumeitem">
														Add details of Certifications you have
														achieved/completed
													</p>
												</div>
												<div className="p-3">
													<label className="pb-2">Certification Name</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={cname}
														onChange={(e) => setcname(e.target.value)}
													/>
												</div>
												<div className="p-3">
													<label className="pb-2">
														Certification Completion ID
													</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={cId}
														onChange={(e) => setcId(e.target.value)}
													/>
												</div>
												<div className="p-3">
													<label className="pb-2">Certification URL</label>
													<input
														type="text"
														className="form-control input_type_text"
														value={cUrl}
														onChange={(e) => setcUrl(e.target.value)}
													/>
												</div>

												<div className="modal-body">
													<div className="row">
														<div className="col-lg-6">
															<label>Certificate Validity From</label>
															<input
																type="date"
																className="form-control p-2"
																placeholder="dd/mm/yyyy"
																value={cValidfrom}
																onChange={(e) => setcValidfrom(e.target.value)}
															/>
														</div>
														<div className="col-lg-6">
															<label>Certificate Validity To</label>
															<input
																type="date"
																className="form-control p-2"
																placeholder="dd/mm/yyyy"
																value={cValidto}
																onChange={(e) => setcValidto(e.target.value)}
															/>
														</div>
													</div>
												</div>
												<div className="modal-footer">
													<button
														type="button"
														class="savechanges"
														data-bs-dismiss="modal"
														onClick={handleSkillChangecert}
													>
														Save changes
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="section1 headline mt-4 p-3" id="careerElemet">
								<div className="">
									<div className="">
										<h4 className="m-0 pb-2 d-flex justify-content-between">
											Desired Career Profile
											<span>
												<i
													className="fa-regular fa-pen-to-square"
													data-bs-toggle="modal"
													data-bs-target="#myModal11"
												></i>
											</span>
										</h4>
										<div className="row mx-1">
											<div className="col-lg-6">
												<div className="my-3">
													<div className="exp_details">Desired Industry</div>
													<div className="employement_details">
														{desiredIndustry}
													</div>
												</div>
												<div className="exp_details">Designation</div>
												<div className="employement_details">
													{designationInd}
												</div>
												<div className="my-3">
													<div className="exp_details">Employee Type</div>
													<div className="employement_details">
														{employeType}
													</div>
												</div>
												<div className="exp_details">Prefered Location</div>
												<div className="employement_details">
													{NewuserLocation}
												</div>
											</div>
											<div className="col-lg-6">
												<div className="exp_details">Job Type</div>
												<div className="employement_details">{typeJob}</div>
												<div className="my-3">
													<div className="exp_details">Desired Shift</div>
													<div className="employement_details">
														{desiredShift}
													</div>
												</div>
												<div className="exp_details">Expected CTC</div>
												<div className="employement_details">
													{expectedSalary}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal fade" id="myModal11">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">
														Desired Career
													</h3>
												</div>
											</div>
											<div>
												<div className="row p-3 ">
													<div className="col-lg-6">
														<label>Desired Industry</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={desiredIndustry}
															onChange={(e) =>
																setdesiredIndustry(e.target.value)
															}
														>
															<option hidden>
																Enter your Desired Industry
															</option>
															{Jobcategory.map((loc) => (
																<option
																	className=" m-2"
																	key={loc.id}
																	value={loc.desiredIndustry}
																>
																	{loc.JobCategory}
																</option>
															))}
														</select>
													</div>
													<div className="col-lg-6">
														<label> Designation</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={designationInd}
															onChange={(e) =>
																setdesignationInd(e.target.value)
															}
														>
															<option hidden>
																{" "}
																Enter your Desire Designation
															</option>
															{Jobdesignation.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.designationInd}
																>
																	{loc.JobDesignation}
																</option>
															))}
														</select>
													</div>
												</div>
											</div>
											<div className="modal-body">
												<p className="ex-item my-3">Job type</p>
												<div className="py-0">
													<input
														type="radio"
														name="permanent"
														id="permanent"
														className="mx-3 inputfield-item"
														value="Permanent"
														checked={typeJob === "Permanent"}
														onChange={(e) => settypeJob(e.target.value)}
													/>{" "}
													Permanent
													<input
														type="radio"
														name="permanent"
														id="cantratual"
														className="mx-3 inputfield-item"
														value="Cantratual"
														checked={typeJob === "Cantratual"}
														onChange={(e) => settypeJob(e.target.value)}
													/>{" "}
													Cantratual
												</div>
												<p className="ex-item my-3">Employement type</p>
												<div className="py-0">
													<input
														type="radio"
														name="Fulltime"
														id="fulltime"
														className=" mx-2 inputfield-item"
														value="Full Time"
														checked={employeType === "Full Time"}
														onChange={(e) => setemployeType(e.target.value)}
													/>{" "}
													Full Time
													<input
														type="radio"
														name="Part Time"
														id="parttime"
														className=" mx-2 inputfield-item"
														value="Part Time"
														checked={employeType === "Part Time"}
														onChange={(e) => setemployeType(e.target.value)}
													/>{" "}
													Part Time
													<input
														type="radio"
														name="Freelancer"
														id="freelancer"
														className=" mx-2 inputfield-item"
														value="Freelancer"
														checked={employeType === "Freelancer"}
														onChange={(e) => setemployeType(e.target.value)}
													/>{" "}
													Freelancer
													<input
														type="radio"
														name="wfh"
														id="wfh"
														className=" mx-2 inputfield-item"
														value="Work From Home"
														checked={employeType === "Work From Home"}
														onChange={(e) => setemployeType(e.target.value)}
													/>{" "}
													Work From Home
													<input
														type="radio"
														name="work"
														id="work"
														className=" mx-2 inputfield-item"
														value="Work Abroad"
														checked={employeType === "Work Abroad"}
														onChange={(e) => setemployeType(e.target.value)}
													/>{" "}
													Work Abroad
													<input
														type="radio"
														name="internship"
														id="internship"
														className="mx-2 inputfield-item"
														value="Internships"
														checked={employeType === "Internships"}
														onChange={(e) => setemployeType(e.target.value)}
													/>{" "}
													Internships
												</div>
												<div className="row my-3">
													<div className="col-lg-6">
														<p className="ex-item mb-2 ">Prefered Shifts</p>
														<div className="py-0">
															<input
																type="radio"
																name="any"
																id="any"
																className="mx-3 inputfield-item"
																value="Any Shift"
																checked={desiredShift === "Any Shift"}
																onChange={(e) =>
																	setdesiredShift(e.target.value)
																}
															/>{" "}
															Any Shift
															<input
																type="radio"
																name="Day Shift"
																id="day"
																className="mx-3 inputfield-item"
																value="Day Shift"
																checked={desiredShift === "Day Shift"}
																onChange={(e) =>
																	setdesiredShift(e.target.value)
																}
															/>{" "}
															Day Shift
															<input
																type="radio"
																name="Nigh Shift"
																id="night"
																className="mx-3 inputfield-item"
																value="Night Shift"
																checked={desiredShift === "Night Shift"}
																onChange={(e) =>
																	setdesiredShift(e.target.value)
																}
															/>{" "}
															Night Shift
														</div>
													</div>
													<div className="col-lg-6">
														<label className="mb-2">Expected CTC</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={expectedSalary}
															onChange={(e) =>
																setexpectedSalary(e.target.value)
															}
														>
															<option hidden>Expected CTC</option>
															{JobSalary.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.expectedSalary}
																>
																	{loc.Salary}
																</option>
															))}
														</select>
													</div>
												</div>
												<div className="row my-3">
													<div className="col-lg-6">
														<label className="mb-2">Prefered Location</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="experienceYears"
															name="experienceYears"
															value={NewuserLocation}
															onChange={(e) =>
																setNewuserLocation(e.target.value)
															}
														>
															<option hidden>Prefered Location</option>
															{location.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.userLocation}
																>
																	{loc.JobLocation}
																</option>
															))}
														</select>
													</div>
												</div>
											</div>

											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSkillChange2}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="headline mt-4 p-3" id="personalElement">
								<div className="">
									<h4 className=" m-0 pb-2 d-flex justify-content-between">
										Personal Details
										<span>
											<i
												className="fa-regular fa-pen-to-square"
												data-bs-toggle="modal"
												data-bs-target="#myModal12"
											></i>
										</span>
									</h4>
								</div>
								<div className="row">
									<div className="col-lg-6 ">
										<div className="my-3 mx-2">
											<div className="exp_details">Date of Birth</div>
											<div className="employement_details">{userDob}</div>
										</div>
										<div className="exp_details mx-2">Age</div>
										<div className="employement_details mx-2">{userAge}</div>
										<div className="my-3 mx-2">
											<div className="exp_details">Gender</div>
											<div className="employement_details ">
												{loggedProfile.gender}
											</div>
										</div>
										<div className="exp_details mx-2">Marital Status</div>
										<div className="employement_details mx-2">{marriegetype}</div>
										<div className="my-3 mx-2">
											<div className="exp_details ">Language</div>
											<div className="employement_details ">
												<span className="">{newLanguages}</span>
											</div>
										</div>
										<div className="exp_details mx-2">Address Proof</div>
										<div className="employement_details mx-2">{newAddressproof}</div>
									</div>
									<div className="col-lg-6">
										<div className="my-3 mx-2">
											<div className="exp_details">Parmanent Address</div>
											<div className="employement_details">{pAddress}</div>
										</div>
										<div className="exp_details mx-2">Area Pin Code</div>
										<div className="employement_details mx-2">{pincode}</div>
										<div className="my-3 mx-2">
											<div className="exp_details">Home Town</div>
											<div className="employement_details">{homeTown}</div>
										</div>
										<div className="exp_details mx-2">Do You Have Passport</div>
										<div className="employement_details mx-2">{passport}</div>
										<div className="my-3 mx-2">
											<div className="exp_details">Addressproof Number</div>
											<div className="employement_details">{aNumber}</div>
										</div>
									</div>
								</div>

								<div className="modal fade" id="myModal12">
									<div className="modal-dialog modal-lg modal-dialog-centered ">
										<div className="modal-content ">
											<button
												type="button"
												className="btn-close "
												data-bs-dismiss="modal"
											></button>
											<div className="modal-header flex-column text-start">
												<div className="text-start">
													<h3 className="modal-title resumeitem">
														Personal Details
													</h3>
												</div>
											</div>
											<div>
												<div className="row p-3 ">
													<div className="col-lg-6">
														<label>Date of Birth</label>
														<input
															type="date"
															className="form-control p-2"
															placeholder="dd/mm/yyyy"
															value={userDob}
															onChange={(e) => setuserDob(e.target.value)}
														/>
													</div>
													<div className="col-lg-6">
														<label>Age</label>
														<input
															type="number"
															className="form-control p-2"
															placeholder="Enter your age"
															value={userAge}
															onChange={(e) => setuserAge(e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div className="modal-body">
												<div className="my-0">
													<label className="pb-2">Permanent Adress</label>
													<input
														type="text"
														className="form-control p-2 resume_input"
														placeholder="Enter your Permanent address"
														value={pAddress}
														onChange={(e) => setpAddress(e.target.value)}
													/>
												</div>
												<div className="my-3">
													<label className="pb-2">Hometown</label>
													<input
														type="text"
														className="form-control p-2 resume_input"
														placeholder="Enter Hometown"
														value={homeTown}
														onChange={(e) => sethomeTown(e.target.value)}
													/>
												</div>
												<div className="my-3">
													<label className="pb-2">PIN-Code</label>
													<input
														type="text"
														className="form-control p-2 resume_input"
														placeholder="Enter PIN-Code"
														value={pincode}
														onChange={(e) => setpincode(e.target.value)}
													/>
												</div>
												<p className="ex-item my-3">Marital Status</p>
												<div className="py-0">
													<input
														type="radio"
														name="married"
														id="married"
														className="mx-3 inputfield-item"
														value="Married"
														checked={marriegetype === "Married"}
														onChange={(e) => setmarriegetype(e.target.value)}
													/>{" "}
													Married
													<input
														type="radio"
														name="unmarried"
														id="unmarried"
														className="mx-3 inputfield-item"
														value="Unmarried"
														checked={marriegetype === "Unmarried"}
														onChange={(e) => setmarriegetype(e.target.value)}
													/>{" "}
													Unmarried
													<input
														type="radio"
														name="other"
														id="other"
														className="mx-3 inputfield-item"
														value="Other"
														checked={marriegetype === "Other"}
														onChange={(e) => setmarriegetype(e.target.value)}
													/>{" "}
													Other
												</div>
												<div className="row my-3">
													<div className="col-lg-6">
														<label className="pb-2">Address Proof</label>
														<select
															className="w-100 p-2 inputfield-item select-Experience-item"
															id="adrees"
															name="addressproof"
															value={newAddressproof}
															onChange={(e) =>
																setnewAddressproof(e.target.value)
															}
														>
															<option hidden>Adress Proof</option>
															{Addressproof.map((loc) => (
																<option
																	className="m-2"
																	key={loc.id}
																	value={loc.card}
																>
																	{loc.card}
																</option>
															))}
														</select>
													</div>
													<div className="col-lg-6">
														<div>
															<label className="pb-2">Address Number</label>
															<input
																type="text"
																className="form-control p-2 resume_input"
																placeholder="Enter Hometown"
																value={aNumber}
																onChange={(e) => setaNumber(e.target.value)}
															/>
														</div>
													</div>
												</div>
												<p className="ex-item m-0">Do You Have Passport</p>
												<div className="py-1">
													<input
														type="radio"
														name="yes"
														id="yes"
														className="mx-3 inputfield-item"
														value="YES"
														checked={passport === "YES"}
														onChange={(e) => setpassport(e.target.value)}
													/>{" "}
													YES
													<input
														type="radio"
														name="no"
														id="no"
														className="mx-3 inputfield-item"
														value="NO"
														checked={passport === "NO"}
														onChange={(e) => setpassport(e.target.value)}
													/>{" "}
													NO
												</div>
												<div className="my-3">
													<label className="pb-2">Language</label>
													<Select
														name="select"
														options={Languages}
														labelField="id"
														valueField="name"
														multi
														dropdownPosition="bottom"
														searchable={true}
														className="w-100"
														onChange={(selectedOptions) => {
															console.log("Selected Options:", selectedOptions);
															setnewLanguages(
																selectedOptions.map((option) => option.id)
															);
														}}
													></Select>
												</div>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													class="savechanges"
													data-bs-dismiss="modal"
													onClick={handleSkillChange3}
												>
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Resume;
