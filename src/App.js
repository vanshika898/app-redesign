import React from 'react';
import './App.css'

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Home from './Components/Home'; // Import Home component
import About from './Components/About'; 
import Login from './Components/Login';
import Signup from './Components/Signup';
import Vision from './Components/Vision';
import Viligance from './Components/Viligance';
import Network from './Components/Network';
import Award from './Components/Award';
import Domestic from './Components/Domestic';
import Inmp from './Components/Inmp';
import Enquiry from './Components/Enquiry';
import Bill from './Components/Bill';
import CNG from './Components/CNG';
import Commercial from './Components/Commercial';
import Industrial from './Components/Industrial';
import Retail from './Components/Retail';
import Pay from './Components/Pay';
import Photo from './Components/Photo';
import HSE from './Components/HSE';
import CNGDO from './Components/CNGDO';
import PNGDO from './Components/PNGDO';
import CSR from './Components/CSR';
import EOI from './Components/EOI';
import './App.css'
import Foot from './Components/Foot';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/viligance" element={<Viligance />} />
          <Route path="/network" element={<Network />} />
          <Route path="/awards" element={<Award />} />
          <Route path="/Domestic" element={<Domestic />} />
          <Route path="/inmp" element={<Inmp />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/bil" element={<Bill />} />
          <Route path="/cng" element={<CNG />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industry" element={<Industrial />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/Pay" element={< Pay/>} />
          <Route path="/hse" element={< HSE/>} />
          <Route path="/photo" element={< Photo/>} />
          <Route path="/cngdo" element={<CNGDO/>} />
          <Route path="/pngdo" element={<PNGDO/>} />
          <Route path="/csr" element={<CSR/>} />
          <Route path="/eoi" element={<EOI/>} />

          
          
         
         

        </Routes> 

<Foot></Foot>
       
      </Router> 
 
     
    </div>
  );
}

export default App;
