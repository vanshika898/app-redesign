// // Navbar.js
// import React, { useState } from 'react';
// import './Navbar.modules.css';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className='container-fluid'>
//       <div className='nav'>\
//         <img src={'img/img--1.png'} alt='' className='a1' />
//         <h1 className='a2'>अवंतिका गैस लिमिटेड</h1>
//         <h4 className='a3'>Aavantika Gas Limited</h4>
//         <h5 className='a4'>A Joint Venture Company of <span style={{ color: 'yellow' }}>GAIL</span> & <span style={{ color: 'yellow' }}>HPCL</span></h5>
//         <div className='q1'>
//           <div className='input-group'>
//             <div className='form-outline' data-mdb-input-init>
//               <input id='search-focus' type='search' className='form-control' placeholder='Search..' />
//             </div>
//             <button type='button' className='btn btn-primary' data-mdb-ripple-init>
//               <i className='fas fa-search' />
//             </button>
//           </div>
//           <button id='b1'>
//             <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>
//               Login
//             </Link>
//           </button>
//           <button id='b2'>
//             <Link style={{ textDecoration: 'none', color: 'white' }} to='/signup'>
//               SignUp
//             </Link>
//           </button>
//         </div>
//       </div>
//       <div className='p2'>
//         <ul>
//           <li>
//             <Link className='nav-link scrollto active' to='/'>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className='nav-link scrollto' to='/about'>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link className='nav-link scrollto' to='/contact'>
//               ContactUs
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className='p3'>
//         <ul className='p3'>
//           <li className='dropdown' onClick={toggleDropdown}>
//             CORPORATE
//             {isDropdownOpen && (
//               <div className='dropdown-content'>
//                 <Link to='/vision'>Vision & Mission</Link>
//                 <Link to='/viligance'>Viligance</Link>
//                 <Link to='/Network'>Our Network</Link>
//                 <Link to='/awards'>Awards</Link>
//               </div>
//             )}
//           </li>
//           <li className='dropdown' onClick={toggleDropdown}>
//             BUSINESS
//             {isDropdownOpen && (
//               <div className='dropdown-content'>
//                 <Link to='/Domestic'>PNG Domestic</Link>
//                 <Link to='/inmp'>PNG In Madhya Pradesh</Link>
//                 <Link to='/enquiry'>Enquiry for PNG</Link>
//                 <Link to='/bil'>Bill Payment</Link>
//                 <Link to='/commercial'>PNG -commercial</Link>
//                 <Link to='/industry'>PNG-industrial</Link>
//                 <Link to='/retail'>Retailing price</Link>
//                 <Link to='/cng'>CNG</Link>
//               </div>
//             )}
//           </li>
//           <li className='dropdown' onClick={toggleDropdown}>
//             TENDORS &CSR
//             {isDropdownOpen && (
//               <div className='dropdown-content'>
//                 <Link to='/csr'>CSR objectives</Link>
//                 <Link to='/eoi'>EOI</Link>
//               </div>
//             )}
//           </li>
//           <li className='dropdown' onClick={toggleDropdown}>
//             SAFTY
//             {isDropdownOpen && (
//               <div className='dropdown-content'>
//                 <Link to='/hse'>HSE policy</Link>
//                 <Link to='/cngdo'>CNG Do Don'ts</Link>
//                 <Link to='/pngdo'>PNG Do Don'ts</Link>
//               </div>
//             )}
//           </li>
//           <li className='dropdown' onClick={toggleDropdown}>
//             MEDIA & CUSTOMERS
//             {isDropdownOpen && (
//               <div className='dropdown-content'>
//                 <Link to='/Pay'>Online Pay Bill</Link>
//                 <Link to='/photo'>Photo Gallery</Link>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block ">
        <div className="row gx-0 align-items-center " style={{ height: 45 }}>
          <div className="col-lg-8 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <Link to="/" className="text-light me-4" style={{ color: '#4981e2' }}>
                <i className="fas fa-phone-alt text-primary me-2" style={{ color: '#4981e2' }} />
                +01234567890
              </Link>
              <Link to="/" className="text-light me-0" style={{ color: '#4981e2' }}>
                <i className="fas fa-envelope text-primary me-2" style={{ color: '#4981e2' }} />
                Aavantikagaslimited@gmail.com
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-3" style={{ color: '#4981e2' }}>
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-3" style={{ color: '#4981e2' }}>
                <i className="fab fa-twitter" />
              </Link>
              <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-3" style={{ color: '#4981e2' }}>
                <i className="fab fa-instagram" />
              </Link>
              <Link to="/" className="btn btn-light btn-square border rounded-circle nav-fill me-0" style={{ color: '#4981e2' }}>
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fas fa-star-of-life me-3" />
              Avantika Gas limited
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
              <b>Home</b>
              </Link>
              <Link to="/about" className="nav-item nav-link active">
              <b> About</b>
              </Link>
              
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <b>  Corporates</b>
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/vision" className="dropdown-item">
                    Vision and Mission
                  </Link>
                  <Link to="/viligance" className="dropdown-item">
                    Viligance
                  </Link>
                  <Link to="/Network" className="dropdown-item">
                    Our Network
                  </Link>
                  <Link to="/awards" className="dropdown-item">
                    Awards
                  </Link>
                  
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
               <b> Busniess</b>
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Domestic" className="dropdown-item">
                    PNG Domestic
                  </Link>
                  <Link to="/inmp" className="dropdown-item">
                    PNG in Madhya Pradesh
                  </Link>
                  <Link to="/enquiry" className="dropdown-item">
                    Enquiry for PNG
                  </Link>
                  <Link to="/cng" className="dropdown-item">
                    CNG
                  </Link>
                  <Link to="/bil" className="dropdown-item">
                    Bill Payment
                  </Link>
                  <Link to="/commercial" className="dropdown-item">
                    PNG -commercial
                  </Link>
                  <Link to="/retail" className="dropdown-item">
                    Retailing Price
                  </Link>
                  
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <b> Tendors & CSR</b>
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/csr" className="dropdown-item">
                  CSR objectives
                  </Link>
                  <Link to="/eoi" className="dropdown-item">
                    EOI
                  </Link>
                  
                  
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <b>  Safty</b>
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/hse" className="dropdown-item">
                  HSE Policy
                  </Link>
                  <Link to="/cngdo" className="dropdown-item">
                    CNG Do Don'ts
                  </Link>
                  <Link to="/pngdo" className="dropdown-item">
                    PNG Do Don'ts
                  </Link>
                  
                  
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <b> Media and customers</b>
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Pay" className="dropdown-item">
               Online Pay bill
                  </Link>
                  <Link to="/photo" className="dropdown-item">
                   Photo Gallery
                  </Link>
                  
                  
                  
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
              <b>  Contact Us</b>
              </Link>
            </div>
            <Link to="/login" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">
             Login
            </Link>&nbsp;&nbsp;
            <Link to="/signup" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">
             SignUp
            </Link>
          </div>
        </nav>
       <hr />
      </div>
      {/* Navbar End */}
      {/* Header Start */}
    </div>
  );
}
