import React from 'react'
import {  Link } from 'react-router-dom';
import  ind from './Industrial.module.css'
export default function Industrial() {
  return (
    <div>
        <div className={ind.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={ind.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>PNG industrial</b></h1>
      <h3 className={ind.v} style={{color:"white",marginBottom:"5%",width:"30%"}}>Home / Business/PNG Industrial </h3>
     
      <div className={`${ind.container} mt-5`}>
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
          <Link to='/bil'style={{textDecoration:'none'}}><tr>
            <td>Bill Payment</td>
          </tr>
          </Link>
          <Link to='/retail'style={{textDecoration:'none'}}><tr>
            <td>Retailing selling price</td>
          </tr>
          </Link>
          <Link to='/industrial'style={{textDecoration:'underline'}}><tr>
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
   <div style={{marginLeft:'50%',width:'40%',marginTop:'-37%',marginBottom:'10%'}}> 
    <h1>INDUSTRIAL CUSTOMERS</h1>
    <h4>ndustrial customers comprises of those natural gas customers who need natural gas for their industrial setups. They use piped natural gas mainly as a source of energy for many industry specific processes. Natural gas is mainly used in industrial applications like heating, cooling, power, processes and manufacturing. The company is supplying PNG to over
       246 industrial customers (as on 31/03/2021) across its operating locations.</h4>
  
   <h3>Benefits of industrial customers</h3>
   <ol>
   <h4>
    <li>Safest fossil fuel</li>
    <li>Economical</li>
    <li>High level of combustion efficiency</li>
    <li>Uninterrupted 24 x 7 supply</li>
    <li>No pre-heating or vaporizer required</li>
    </h4> </ol>
   </div>
    </div>
  )
}

