import React from 'react';
import bil from './Bill.module.css';
import { Link } from 'react-router-dom';
export default function Bill() {
  return (
   
       <div>
      <div className={bil.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={bil.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>Bill Payment</b></h1>
      <h3 className={bil.v} style={{color:"white",marginBottom:"6%"}}>Home / Business/Bill payment</h3>
     
      <div className={`${bil.container} mt-5`} style={{marginBottom:"10%"}}>
      <table className="table"style={{marginLeft:'-0.1%'}}>
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
          <Link to='/bil'style={{textDecoration:'underline'}}><tr>
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
          <Link to='/cng'style={{textDecoration:'none'}}><tr>
            <td>CNG</td>
          </tr>
          </Link>
          
        </tbody>
      </table>
   
   </div>
   <div style={{width:"50%",backgroundColor:"#4981e2",marginLeft:"45%",marginTop:"-47%",marginBottom:"30%"}}>
    <h1 style={{color:'white'}} >PNG BILL PAYMENT OPTIONS</h1>
    
   </div>
   <img src="img/img54.png" alt="" style={{marginLeft:"45%",width:"50%",marginTop:"-25%",marginBottom:'20%'}} />
 </div>
  )
}

