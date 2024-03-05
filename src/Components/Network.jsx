import React, { useState } from 'react';
import net from './Network.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const MapsComponent1 = () => (
  <div >
    {/* First Map - Indore */}
    <iframe
      title="Indore Map"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58877.60478160882!2d75.83663863328668!3d22.733804920319788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sindore%20avantika%20gas!5e0!3m2!1sen!2sin!4v1708833760276!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>
);
const MapsComponent2 = () => (
  <div>
    {/* Second Map - Ujjain */}
    <iframe
      title="Ujjain Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117860.6056634049!2d75.59486728220209!3d22.611099969388817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962565d1e3e37b7%3A0x15a43f7e9e5d8547!2sAavantika%20Gas%20Limited!5e0!3m2!1sen!2sin!4v1708833834526!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>
);
const MapsComponent3 = () => (
  <div>
    {/* Third Map - Pitampur in Indore Ujjain */}
    <iframe
      title="Pitampur Map"
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117426.94477506592!2d75.80380314504293!3d23.112025968182056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sujjain%20avantika%20gas%20%20center!5e0!3m2!1sen!2sin!4v1708832625421!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

const Network = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // Add logic to handle tab changes, if needed
  };

  return (
    <div className='container-fluid'>
      <div className={net.cont}></div>
      <img className="aq" src="img/img24.jpg" style={{ width: "43%", height: "50%", marginTop: "-20%" }} alt="" />
      <h1 className={net.vision} style={{ color: "white", marginTop: "-20%", marginBottom: "20%", marginLeft: "60%" }}><b>Our network</b></h1>
      <h3 className={net.v} style={{ color: "white", marginBottom: "15%" }}>Home / Corporates / Our network</h3>

      <div className={`${net.container} mt-5`}>
        <table className="table" style={{marginTop:"3%",marginLeft:'-0.3%'}}>
        <tbody>
     <Link to='/Vision' style={{textDecoration:'none'}} > <tr>   
          <td>Vision & Mission</td>
        </tr></Link >
        <Link  to='/viligance'style={{textDecoration:'none'}}>
        <tr >
          <td>Vigilance</td>
        </tr></Link>
        <Link to='/awards'style={{textDecoration:'none'}} >
        <tr>
          <td>Award</td>
        </tr></Link>
        <Link to='/network'style={{textDecoration:'underline'}}>
        <tr>
          <td>Our Network</td>
        </tr></Link>
        
      </tbody>
        </table>
      </div>

      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{width:"50%",marginLeft:"45%",marginTop:"-25%",backgroundColor:"#4981e2"}}>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)} data-bs-toggle="pill" data-bs-target="#map1" type="button" role="tab" aria-controls="map1" aria-selected="true" style={{color:"white",fontSize:"20px"}}>Indore</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)} data-bs-toggle="pill" data-bs-target="#map2" type="button" role="tab" aria-controls="map2" aria-selected="false" style={{color:"white",fontSize:"20px"}}>Pithampur</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)} data-bs-toggle="pill" data-bs-target="#map3" type="button" role="tab" aria-controls="map3" aria-selected="false" style={{color:"white",fontSize:"20px"}}>Ujjain</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent"style={{width:"50%",marginLeft:"45%",marginTop:"-2%"}}>
        <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="map1" role="tabpanel" aria-labelledby="pills-home-tab">
          {/* Display Map 1 */}
          {activeTab === 0 && <MapsComponent1 />}
        </div>
        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="map2" role="tabpanel" aria-labelledby="pills-profile-tab">
          {/* Display Map 2 */}
          {activeTab === 1 && <MapsComponent2 />}
        </div>
        <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="map3" role="tabpanel" aria-labelledby="pills-contact-tab">
          {/* Display Map 3 */}
          {activeTab === 2 && <MapsComponent3 />}
        </div>
      </div>
    </div>
  );
}

export default Network;
