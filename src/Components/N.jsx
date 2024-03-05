// Navbar.js
import React, { useState } from 'react';
import './Navbar.modules.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ zIndex: '2000', marginLeft: '-3' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={'img/img--1.png'} alt="" style={{ width: '66px', height: '70px' }} />
            <span style={{ fontFamily: 'Noto Sans Devanagari', color: 'white', fontSize: '20px', marginLeft: '10px' }}>अवंतिका गैस लिमिटेड</span>
            <small style={{ color: 'white', fontSize: '19px' }}>Aavantika Gas Limited</small>
          </Link>

          <div className="collapse navbar-collapse">
            <div className="input-group">
              <div className="form-outline" data-mdb-input-init>
                <input id="search-focus" type="search" className="form-control" placeholder="Search.." />
              </div>
              <button type="button" className="btn btn-primary" data-mdb-ripple-init style={{ backgroundColor: 'white', height: '40px', borderColor: 'green' }}>
                <i className="fas fa-search" style={{ color: 'black' }} />
              </button>
              <button id="b1">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                  Login
                </Link>
              </button>
              <button id="b2">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">
                  SignUp
                </Link>
              </button>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  ContactUs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="p2">
      <ul>
  <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
  <li><Link className="nav-link scrollto" to="/about">About</Link></li>
  <li><Link className="nav-link scrollto" to="/contact">ContactUs</Link></li>
</ul>
      </div>

      <div className="p3">
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
