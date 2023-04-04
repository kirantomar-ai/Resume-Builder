import React from 'react'
import {Routes, Route ,Navigate} from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import ResumeTemplates from './Components/Home'
import NavBar from './Components/Navbar'
import MyResume from './Components/DetailsFillComponents/MyResume';
import AboutUs from './Components/AboutUs';
import './App.css';

// This component defines routing for other components //
function App() {
  return (
    <div>
        <div> 
          <NavBar/>
        </div>
        
        <div>
            <Routes>
                  <Route exact path="/" element={<ResumeTemplates/>}></Route>
                  <Route path="/myresumes" element={<MyResume/>}></Route>
                  <Route exact path="/about" element={<AboutUs/>}></Route>
                  <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes> 
        </div>
    </div>
  )
}


export default App
