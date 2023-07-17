let jobseekerBtn = document.getElementById("jobBtn");
let recruiterBtn = document.getElementById("recuiterBtn");
let signElement = document.getElementById("singBtn");
let loginElement = document.getElementById("loginBtn");

recruiterBtn.onclick = function()
{
    document.getElementById("fullName").textContent = "Company name";
    document.getElementById("name").placeholder = "Enter your company name";
    document.getElementById("gender").style.display = "none";
    document.getElementById("genderOptions1").style.display = "none";
    document.getElementById("genderOptions2").style.display = "none";
    document.getElementById("genderOptions3").style.display = "none";
    document.getElementById("imgchange").src = "./4153553.jpg";
    document.getElementById("recruiterCheck").style.display = ""
    jobseekerBtn.style.color = "Silver";
    document.getElementById("jobCheck").style.display = "";
    recruiterBtn.style.color = " Black";    
    document.getElementById("jobCheck").style.accentColor = "silver";
}

jobseekerBtn.onclick = function()
{
    document.getElementById("fullName").textContent = "Full name";
    document.getElementById("name").placeholder = "Enter your full name";
    document.getElementById("gender").style.display = "";
    document.getElementById("genderOptions1").style.display = "";
    document.getElementById("genderOptions2").style.display = "";
    document.getElementById("genderOptions3").style.display = "";
    jobseekerBtn.style.color = "Black";
    document.getElementById("jobCheck").style.display = "";
    recruiterBtn.style.color = "silver";
    document.getElementById("imgchange").src="./seeker.jpg";
    document.getElementById("jobCheck").style.accentColor = " #261043";
    


}
loginElement.onclick = function(){
    window.location.href = "http://127.0.0.1:5500/login.html";
    document.getElementById("recruiterCheck").style.display = "";
    singBtn.style.color = "silver";
}