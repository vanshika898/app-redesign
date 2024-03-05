import React from 'react'
import { Link } from 'react-router-dom'
import re from './Retail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Retail() {
  return (
    <div>
        <div>
       <div className={re.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={re.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>Retaling selling price</b></h1>
      <h3 className={re.v} style={{color:"white",marginBottom:"5%",width:"30%"}}>Home /Business/Retaling selling price </h3>
     
      <div className={`${re.container} mt-5`}  >
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
          <Link to='/retail'style={{textDecoration:'underline'}}><tr>
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
          <Link to='/cng'style={{textDecoration:'none'}}><tr>
            <td>CNG</td>
          </tr>
          </Link>
          
        </tbody>
      </table>
   
   </div>
   </div>
   
   <div style={{marginLeft:'50%',marginTop:'-38%',marginBottom:'10%'}}>
   <h3 style={{color:'#4981e2'}}>FOR RETAIL SELLING PRICE OF PNG TO INDUSTRIAL SEGMENT, PLEASE CONTACT MARKETING/SALES TEAM</h3>
    <img style={{width:'90%'}} src="img/img55.png" alt="" />
    <h4 style={{color:'#4981e2',marginTop:'5%'}}>ENQUIRY FOR INDUSTRIAL & COMMERCIAL PNG CONNECTION</h4>
   <h4> <i className='fas fa-phone'></i> Call us or whatsapp us</h4>
<h4 style={{marginLeft:"4%"}} > 987456634</h4>
<div style={{marginLeft:'60%',marginTop:'-9%'}}> 
<h4 ><i className='fas fa-envelope'></i> Email us</h4>
<h4>email@.com</h4></div>


   
   </div>
    </div>
    

    
  )
}
