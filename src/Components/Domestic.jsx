import React from 'react'
import dom from './Domestic.module.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
export default function Domestic() {
  return (
    <div>
       <div>
      <div className={dom.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={dom.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>PNG DOMESTIC</b></h1>
      <h3 className={dom.v} style={{color:"white",marginBottom:"5%"}}>Home / Business/PNG Domestic</h3>
     
      <div className={`${dom.container} mt-5`}>
      <table className="table"style={{marginLeft:'-0.1%'}}>
        <tbody>
            <Link to='/Domestic'>
          <tr style={{textDecoration:"underline"}}>   
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
          <Link to='/cng'style={{textDecoration:'none'}}><tr>
            <td>CNG</td>
          </tr>
          </Link>
        </tbody>
      </table>
   
   </div>
   <div className={dom.d} style={{marginTop:'-37%',marginBottom:"10%"}}>
    <h2 style={{color:'#4981e2'}}>PNG Domestic</h2>
<h4>AGL has the distinction of pioneering Natural Gas distribution network in Indore, Ujjain and Gwalior region.
     Over 1,03,326 domestic customers are connected through our wide network of over 2458 kms.
      which comprises of carbon steel (CS) and polyethylene (PE) pipeline.
      PNG is used for various purposes like cooking and water heating. 
      It is also widely used by Hospitals, Nursing Homes, Hotels, Flight kitchens, Restaurants, canteen, Community Halls, places of Worship etc.
<br /><br /><h4 style={{color:"#4981e2"}}><b>PNG FOR RESIDENTIAL PURPOSE</b></h4>
<h4>Piped Natural Gas (PNG) is the preferred fuel these days primarily because of the manifold benefits of natural gas.
     Some benefits of PNG are :</h4>
</h4>
<ol>
    <h4><li>CONVENIENT & COMFORTABLE</li></h4>
    <h4>  <li>VERSATILE & SAFE</li></h4>
    <h4> <li>RELIABLE & COMPETITIVE</li></h4>
    <h4> <li>ENVIRONMENT FRIENDLY & GREEN SOLUTION</li></h4>
</ol>

</div>





















    </div>
    </div>
    
  )
}


