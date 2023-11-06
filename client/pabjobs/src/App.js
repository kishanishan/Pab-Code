import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './Project/Footer';
import Login from './Project/login';
// import Signup from './Project/signup';
import Auth from './Project/auth';
import Home from './Project/home';
import Browse from './Project/browse';
import Job from './Project/job';
import Location from './Project/job_location';
import Company from './Project/job_company';
import Category from './Project/job_category';
import Designation from './Project/job_designation';
import Skills from './Project/job_skill';
import Profile from './Project/profile';
import Resume from './Project/resume';
import Applied from './Project/applied';
import Jobalert from './Project/jobalert';
import Saved from './Project/saved';
import Password from './Project/password';



function App() {
  return (
    <div>
      {/* <Navbar/> */}
     <Routes>
     {/* <Route exact path = '/' element={<Signup/>}/> */}
      <Route exact path = '/login' element={<Login/>}/>
      <Route exact path = '/Auth' element = {<Auth/>}/>
      <Route exact path = '/home' element = {<Home/>}/>
      <Route exact path='/browse' element = {<Browse/>}/>
      <Route exact path='/job' element = {<Job/>}/>
      <Route exact path='/location' element = {<Location/>}/>
      <Route exact path='/company' element = {<Company/>}/>
      <Route exact path='/category' element = {<Category/>}/>
      <Route exact path='/designation' element = {<Designation/>}/>
      <Route exact path='/skill' element = {<Skills/>}/>
      <Route exact path='/profile' element = {<Profile/>}/>
      <Route exact path='/resume' element = {<Resume/>}/>
      <Route exact path='/applied' element = {<Applied/>}/>
      <Route exact path='/jobalert' element = {<Jobalert/>}/>
      <Route exact path='/savedjobs' element = {<Saved/>}/>
      <Route exact path='/password' element = {<Password/>}/>

     </Routes>
     <Footer/>
 
    </div>
  );
}

export default App;
