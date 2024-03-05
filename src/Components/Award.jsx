import React from 'react'
import  aw from './Award.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
export default function Award() {
  return (
    <div>
      <div className={aw.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={aw.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>Awards</b></h1>
      <h3 className={aw.v} style={{color:"white",marginBottom:"15%"}}>Home / Corporates/Awards</h3>
     
      <div className={`${aw.container} mt-5`}>
      <table className="table"style={{marginTop:"3%",marginLeft:'-0.3%'}}>
      <tbody>
     <Link to='/Vision' style={{textDecoration:'none'}} > <tr>   
          <td>Vision & Mission</td>
        </tr></Link >
        <Link  to='/viligance'style={{textDecoration:'none'}}>
        <tr >
          <td>Vigilance</td>
        </tr></Link>
        <Link to='/awards'style={{textDecoration:'underline'}} >
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
    <div style={{marginTop:'7%'}}>
    <img  className="img50" style={{width:"25%",marginLeft:"40%",marginTop:"-35%",borderRadius:'20%'}} src="img/img50.jpeg" alt="" />
    <img className="img51"  style={{width:"25%",marginLeft:"4%",marginTop:"-35%",borderRadius:'20%'}} src="img/img51.jpg" alt="" />
    </div>
    </div>
  )
}
