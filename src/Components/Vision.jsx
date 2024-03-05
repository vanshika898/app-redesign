import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import b from './Vision.module.css';

export default function Vision() {
  return (
    <div>
      <div className={b.cont}></div>
      <img className="aq" src="img/img24.jpg" style={{ width: "43%", height: "50%", marginTop: "-30%" }} alt="" />
      <h1 className={b.vision} style={{ color: "white", marginTop: "-20%", marginBottom: "20%", marginLeft: "60%" }}><b>VISION AND MISSION</b></h1>
      <h3 className={b.v} style={{ color: "white", marginBottom: "15%" }}>Home / Corporates/Vision & Mission</h3>

      <div className={`${b.container} mt-5`}>
        <table className="table" style={{ marginTop: "3%", marginLeft: '-0.3%' }}>
          <tbody>
            <Link to='/Vision' style={{ textDecoration: 'underline' }} > <tr>
              <td>Vision & Mission</td>
            </tr></Link>
            <Link to='/viligance' style={{ textDecoration: 'none' }}>
              <tr >
                <td>Vigilance</td>
              </tr></Link>
            <Link to='/awards' style={{ textDecoration: 'none' }} >
              <tr>
                <td>Award</td>
              </tr></Link>
            <Link to='/network' style={{ textDecoration: 'none' }}>
              <tr>
                <td>Our Network</td>
              </tr></Link>

          </tbody>
        </table>
      </div>
      <h1 style={{ color: "blue", marginLeft: "50%", marginTop: "-30%" }}>Vision</h1>
      <br />
      <h4 style={{ width: "48%", marginLeft: "50%" }}>
        “Our Vision is to be the Pioneer City Gas Distribution Company in the State of Madhya
        Pradesh for providing Environmental Friendly Fuel to the Domestic, Commercial, Industrial
        and Automobile Sectors, in order to help the Residents of M.P. to lead a Healthy & Safe Life”.
      </h4>
      <br />
      <h1 className="M" style={{ color: "Blue", marginLeft: "50%" }}>Mission</h1>
      <h4 style={{ width: "48%", marginLeft: "50%" }}>
        “Environment can be a Concern for everybody, AGL takes it as a Mission”
        and while doing so AGL is committed towards
      </h4>
      <ol style={{ marginLeft: "50%", marginTop: "3%", fontSize: "25px" }}>
        <li>Uninterrupted Gas Supply to Our Customers.</li>
        <li>Customer Satisfaction & Delight.</li>
        <li>Adopting Best Operational Practices.</li>
        <li>Transparent Processes & Policies.</li>
        <li>Being the guiding factor towards cleaner & safer Environment.</li>
        <li>Adherence to Safety Standards of the Industry.</li>
        <li>Good Corporate Governance.</li>
      </ol>
    </div>
  );
}
