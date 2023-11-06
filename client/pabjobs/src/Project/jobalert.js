import React from "react";
import "../Project/profile.css";
import Navlogo from "../Project/navs/pabjobs-logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Multiselect } from 'multiselect-react-dropdown'


function Jobalert() {

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
    const GotoResume = () => {
        Navigate('/resume')
    }
    const GotoApplied = () => {
        Navigate('/applied')
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
                                                        <a className="dropdown-item" href="#" onClick={GotoResume}>
                                                            Resume
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#" onClick={GotoApplied}>
                                                            Applied Jobs
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#" onClick={GotoJobalert}>
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
                                    <button className="button-profile-item mt-2" onClick={GotoProfile}>Candidate Profile</button>
                                    <button className="button-profile-item mt-2" onClick={GotoResume}>Resume</button>
                                    <button className="button-profile-item mt-2" onClick={GotoApplied}>Applied Jobs</button>
                                    <button className="button-profile mt-2" onclick="alertBtn()">job Alerts</button>
                                    <button className="button-profile-item mt-2" onClick={GotoSaved}>Saved Jobs</button>
                                    <button className="button-profile-item mt-2" onClick={GotoPassword}>Change Password</button>
                                    <button className="button-profile-item mt-2" onClick={GotoLogin}>Log Out</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Jobalert