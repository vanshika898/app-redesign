// Navbar.js
import React, { useState} from 'react';
import './Navbar.modules.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
 
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    
  };

  return (
    <div className='container-fluid'  style={{zIndex:"2000",marginLeft:'-3',}} >
      <div className="nav" >
        <img src={'img/img--1.png'} alt="" style={{ width: "66px", height: "70px" }} />
        <h1 style={{ fontFamily: 'Noto Sans Devanagari', color: "white", fontSize: "20px", marginTop: "5px", marginLeft: "10px" }}>अवंतिका गैस लिमिटेड</h1>
        <h4 style={{ color: "white", marginTop: "23px", marginLeft: "-155px", fontSize: "19px" }}>Aavantika Gas Limited</h4>
        
        
        <h5 style={{ color: "white", marginTop: "43px",marginLeft: "-180px", fontSize: "16px" }}>A Joint Venture Company of <span style={{ color: "yellow" }}>GAIL</span> & <span style={{ color: "yellow" }}>HPCL</span></h5>
      <div className="input-group">
  <div className="form-outline" data-mdb-input-init>
    <input id="search-focus" type="search" className="form-control" placeholder="Search.." />
    
  </div>
  <button type="button" className="btn btn-primary" data-mdb-ripple-init style={{backgroundColor:"white",height:"40px",borderColor:"green"}}>
    <i className="fas fa-search" style={{color:"black"}} />
  </button>
  <button id ="b1">
  <Link style={{textDecoration:"none",color:"white"}}  to="/login">
    Login
  </Link>
</button>

<button id ="b2">
  <Link style={{textDecoration:"none",color:"white"}}  to="/signup">
    SignUp
  </Link>
</button>
  
</div>


      </div>
      <div className='p2'>
      <ul>
  <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
  <li><Link className="nav-link scrollto" to="/about">About</Link></li>
  <li><Link className="nav-link scrollto" to="/contact">ContactUs</Link></li>
</ul>


</div>
<div className='p3'>

      

      <ul className="p3">
        <li className="dropdown" onClick={toggleDropdown}>
          CORPORATE
          {isDropdownOpen && (
            <div className="dropdown-content">
               <Link to="/vision">Vision & Mission</Link>
               <Link to="/viligance">Viligance</Link>
               <Link to="/Network">Our Network</Link>
               <Link to="/awards">Awards</Link>
             
          
            </div>
          )}
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          BUSINESS
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/Domestic">PNG Domestic</Link>
              <Link to="/inmp">PNG In Madhya Pradesh</Link>
              <Link to="/enquiry">Enquiry for PNG</Link>
              <Link to="/bil">Bill Payment</Link>
              <Link to="/commercial">PNG -commercial</Link>
              <Link to="/industry">PNG-industrial</Link>
              <Link to="/retail">Retailing price</Link>
              <Link to="/cng">CNG</Link>
            </div>
          )}
        </li>
        
        <li className="dropdown" onClick={toggleDropdown}>
          TENDORS &CSR
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/csr">CSR objectives</Link>
              <Link to="/eoi">EOI</Link>
             
             
          
            </div>
          )}
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          SAFTY
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/hse">HSE policy</Link>
              <Link to="/cngdo">CNG Do Don'ts</Link>
              <Link to="/pngdo">PNG Do Don'ts</Link>
          
            </div>
          )}
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          MEDIA & CUSTOMERS
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/Pay">Online Pay Bill</Link>
              <Link to="/photo">Photo Gallery</Link>
        
              
          
            </div>
          )}
        </li>
       
        
</ul>
</div>

</div>


    
   

  );
}

export default Navbar;
