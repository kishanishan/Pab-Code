import React from 'react'

function Nav() {
  return (
    <div>
         <div class="section">
        <section class="section1">
            <div class="container ">
                <div class="row ">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-2 col-md-6 col-6 text-center  py-2">
                        <div class="logo-item">
                            <img src="pabjobs-logo.png" alt="logo" class="img-fluid logo-item1" />
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-6 col-6 align-items-center align-self-center text-center">
                        <i class="fa-solid fa-bars d-lg-none" id="barItem"></i>
                        <i class="fa-solid fa-xmark " id="markItem"></i>
                    </div>
                    <div class="col-lg-7 col-md-9 text-center align-items-center align-self-center list-item mt-1 " id="listItem">
                        <ul class="row  my-4 ">
                            <li class="col-md-2 col-6  nav-item">
                                <a href="http://127.0.0.1:5500/home.html" class=" link-item nav-link ">Home</a>

                            </li>
                            <li class="col-md-2 col-6 nav-item">
                                <a href="" class="dropdown-toggle link-item nav-link browse " data-bs-toggle="dropdown"
                                    id="browseItem" >Browse
                                    Jobs</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Experience</a></li>
                                    <li><a class="dropdown-item" href="#">Location</a></li>
                                    <li><a class="dropdown-item" href="#">Salary</a></li>
                                    <li><a class="dropdown-item" href="#">Industry</a></li>
                                    <li><a class="dropdown-item" href="#">Destignation</a></li>
                                    <li><a class="dropdown-item" href="#">Education</a></li>
                                    <li><a class="dropdown-item" href="#">Skills</a></li>

                                </ul>
                            </li>
                            <li class="col-md-2 col-6  nav-item">
                                <a href="http://127.0.0.1:5500/job.html" class="dropdown-toggle link-item px-4 nav-link" onclick="jobBtn()">Jobs</a>

                            </li>
                            <li class="col-md-2 col-6  nav-item">
                                <a href="" class="dropdown-toggle link-item px-4 text-center nav-link">Service</a>

                            </li>
                            <li class="col-md-2 col-6  nav-item">
                                <a href="http://127.0.0.1:5500/payment.html" class="dropdown-toggle link-item px-3 nav-link" id="payItem">Payment</a>

                            </li>
                            <li class="col-md-1 col-3  nav-item">
                                <i class=" col-lg-1 fa-regular fa-bell px-3"></i>

                            </li>
                            <li class="col-md-1 col-3 nav-item  ">
                                <i class="fa-solid fa-circle-user dropdown-toggle px-3" id="userId" onclick="userBtn()"></i>
                            </li>
                        </ul>


                    </div>

                    <div class="col-lg-1">

                    </div>
                </div>
            </div>
        </section>
      
    </div>
    </div>
  )
}

export default Nav