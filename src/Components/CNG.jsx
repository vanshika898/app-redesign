import React from 'react'
import { Link } from 'react-router-dom';
import C from './CNG.module.css'
export default function CNG() {
  return (
    <div>
       <div className={C.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={C.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>CNG</b></h1>
      <h3 className={C.v} style={{color:"white",marginBottom:"5%",width:"30%"}}>Home / Business/CNG </h3>
     
      <div className={`${C.container} mt-5`}>
      <table className="table" style={{marginLeft:'-0.1%'}}>
      <tbody>
            <Link to='/Domestic'style={{textDecoration:"none"}}>
          <tr >   
            <td>PNG Domestic</td>
          </tr></Link>
          <Link to='/inmp'style={{textDecoration:"none"}}>
          <tr>
            <td>PNG in MP(Availability)</td>
          </tr></Link>
          <Link to='/enquiry'style={{textDecoration:"none"}}>
          <tr>
            <td>Enquiry For PNG</td>
          </tr></Link>
          <Link to='/bil'style={{textDecoration:'none'}}><tr>
            <td>Bill Payment</td>
          </tr>
          </Link>
          <Link to='/retail'style={{textDecoration:'none'}}><tr>
            <td>Retailing selling price</td>
          </tr>
          </Link>
          <Link to='/industry'style={{textDecoration:'none'}}><tr>
            <td>PNG - Industrial</td>
          </tr>
          </Link>
          <Link to='/commercial'style={{textDecoration:'none'}}><tr>
            <td>PNG - commercial</td>
          </tr>
          </Link>
          <Link to='/cng'style={{textDecoration:'Underline'}}><tr>
            <td>CNG</td>
          </tr>
          </Link>
          
        </tbody>
      </table>
   
   </div>
   <div style={{width:"48%",marginLeft:"50%",marginTop:'-37%',marginBottom:"10%"}}>
<h2 style={{color:'#4981e2'}}>CNG FOR AUTOMOBILE SECTOR</h2>
<h4>CNG stands for Compressed Natural Gas. To use Natural Gas as an automobile fuel, it is compressed & dispensed to vehicles at high pressure , CNG is an alternate fuel to Petrol, Diesel, Auto LPG etc.

Today, in the cities where City Gas Distribution network is available, almost all the auto-rickshaws run on CNG. Besides these, passenger cars, postal vans, school buses, courier vans, Light and Heavy commercial vehicles and transport undertakings are also enjoying the benefits of CNG. Economic benefits come along when user switch over to CNG, 
besides of course contributing to a greener, cleaner environment</h4>
  <ol>
   <h4> <li>Being lead and sulphur free, CNG emits lesser harmful gases than other fossil fuels.</li></h4>
   <h4>  <li>CNG is not only eco-friendly, it is also economical for customers</li></h4>
   <h4>  <li>CNG is lighter than air, hence in case of leakage CNG disperses quickly into the air and reducing the risk of fire.</li></h4>
   <h4>  <li>CNG avails you the facility to use both the fuel (CNG & Petrol) in same vehicle.</li></h4>
   <h4>  <li>Compressed Natural Gas storage cylinders are made of special materials to withstand high pressure. They are made entirely of a single piece so there are no joints while petrol tanks are made of ordinary steel sheets by welding.</li></h4>
  </ol>
   </div>
    </div>
  )
}
