import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import vil from './Viligance.module.css';
import { Link } from 'react-router-dom';
export default function Viligance() {
  return (
    <div>
    <div className={vil.cont}>
    
    </div>
    <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
    <h1 className={vil.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>VILIGANCE</b></h1>
    <h3 className={vil.v} style={{color:"white",marginBottom:"15%"}}>Home / Corporates/Viligance</h3>
   
    <div className={`${vil.container} mt-5`}>
    <table className="table" style={{marginTop:"3%",marginLeft:'-0.3%'}}>
      <tbody>
     <Link to='/Vision' style={{textDecoration:'none'}} > <tr>   
          <td>Vision & Mission</td>
        </tr></Link>
        <Link  to='/viligance'>
        <tr style={{textDecoration:'underline'}}>
          <td>Vigilance</td>
        </tr></Link>
        <Link to='/awards'style={{textDecoration:'none'}} >
        <tr>
          <td>Award</td>
        </tr></Link>
        <Link to='/network'style={{textDecoration:'none'}}>
        <tr>
          <td>Our Network</td>
        </tr></Link>
       
      </tbody>
    </table>
 
 </div>
  <div className="card text-center" style={{width:"40%",marginLeft:"53%",marginTop:"-10%"}}>
  <div className="card-header" style={{backgroundColor:"#4981e2"}}>
   
  </div>
  <div className="card-body">
    <h2 className="card-title">CHIEF VIGILANCE OFFICER</h2>
    <h4>SHRI SANDEEP SARKAR</h4>
    <h4 className="card-text">Email id: cvogail@gail.co.in</h4>
    <h4 className="card-text">Address: 16, BHIKAJI CAMA Place
New delhi-110066</h4>
  
  </div>
  <div className="card-footer text-muted" style={{backgroundColor:"#4981e2"}}>
 
  </div>
  
</div>
<div/>
<div className="card text-center" style={{width:"40%",marginLeft:"53%",marginTop:"-30%",marginBottom:"20%"}}>
  <div className="card-header" style={{backgroundColor:"#4981e2"}}>
  
  </div>
  <div className="card-body">
    <h2 className="card-title">VIGILANCE OFFICER</h2>
    <h4>SHRI RAHUL PASTOR</h4>
    <h4 className="card-text">Email id: vigilance@aglonline.net</h4>
   <h4>Phone no: 0731-4222520</h4>
  </div>
  <div className="card-footer text-muted" style={{backgroundColor:"#4981e2"}}>
   
  </div>

</div>
</div>
  
  )
}
