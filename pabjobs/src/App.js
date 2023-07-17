import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Project/Navbar';
import Footer from './Project/Footer';
import Login from './Project/login';
// import Signup from './Project/signup';
import Auth from './Project/auth';


function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
     {/* <Route exact path = '/' element={<Signup/>}/> */}
      <Route exact path = '/login' element={<Login/>}/>
      <Route exact path = '/Auth' element = {<Auth/>}/>
     </Routes>
     <Footer/>
 
    </div>
  );
}

export default App;
