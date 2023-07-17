import React from "react";
import FooterLogo from './pab bottom-logo.jpg';

function Footer() {
    return (
        <div>

            <footer className="footer ">
                <div className="container p-4">
                    <div className="row pb-4 border-item1" >
                        <div className="col-lg-3 col-md-6 text-white">
                            <img
                                src={FooterLogo}
                                alt="img"
                                className="img-fluid w-50 footer-img"
                            />
                            <p className="para1 my-2">
                                We provide a direct access to the walk-in apportunities available
                                on the site. result can be filterred on work experience. venue,
                                from location, employer type, and data range.
                            </p>
                            <p className="mt-3"> Toll Fre Number:</p>
                            <i className="fa-solid fa-phone"></i>
                            <span className="mx-2"> 1800 833 9448</span>
                        </div>
                        <div className="col-lg-3 col-md-6 text-white">
                            <h3 className="mt-4 my-3"> For Candidates</h3>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Candidate Profile</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> My Resume</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Applied Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Job Alert</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Change Password</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-white">
                            <h3 className="mt-4 my-3"> Jobs</h3>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> All Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Company Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Category Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Locational Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Destignation Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Skill Jobs</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-white">
                            <h3 className="mt-4 my-3"> Browse Jobs</h3>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Companies</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Browse Jobs</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Jobs</span>
                            </div>
                            <h3 className="mt-4 my-3">Information</h3>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Terms & Conditions</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i>
                                <span> Privacy Policy</span>
                            </div>
                            <div className="my-2">
                                <i className="fa-solid fa-angle-right"></i> <span> Fraud Alert</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 privacy-item">
                        <div className="col-lg-4 col-md-4 text-white p-1">
                            <p>
                                All rigths reserved <i className="fa-solid fa-copyright"></i> 2022
                                PABjobs
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 p-1">
                            <p className="desi">
                                Designed by
                                <a href="https://www.perfextechnologies.com/" className="Prefer"
                                >@PerfexTechnologies</a
                                >
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 text-white">
                            <i className="fa-brands fa-linkedin socail p-1"></i>
                            <i className="fa-brands fa-instagram socail p-1"></i>
                            <i className="fa-brands fa-facebook socail p-1"></i>
                            <i className="fa-brands fa-twitter socail p-1"></i>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default Footer