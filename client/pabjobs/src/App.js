import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './Project/Footer';
import Login from './Project/login';
// import Signup from './Project/signup';
import Auth from './Project/auth';
import Home from './Project/home';
import Browse from './Project/browse';



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
     </Routes>
     <Footer/>
 
    </div>
  );
}

export default App;
