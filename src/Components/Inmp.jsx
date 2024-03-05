import React from 'react'
import mp from './inmp.module.css';
import { Link } from 'react-router-dom';
export default function Inmp() {
  return (
    <div>
      <div className={mp.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={mp.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>PNG AVAILABILITY IN MP</b></h1>
      <h3 className={mp.v} style={{color:"white",marginBottom:"5%",width:"30%"}}>Home / Corporates/PNG Availability </h3>
     
      <div className={`${mp.container} mt-5`}>
      <table className="table"style={{marginLeft:'-0.1%'}}>
      <tbody>
            <Link to='/Domestic'style={{textDecoration:"none"}}>
          <tr >   
            <td>PNG Domestic</td>
          </tr></Link>
          <Link to='/inmp'style={{textDecoration:"underline"}}>
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
          <Link to='/industrial'style={{textDecoration:'none'}}><tr>
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

<div  style={{marginLeft:"45%",marginTop:"-36%",marginBottom:"30%"}}>
    <h1>We are serving consumers through gas distribution network  at
</h1>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top" style={{width:"140px",fontSize:"25px",marginRight:"10px"}}>
 Ujjain
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right"style={{width:"140px",fontSize:"25px",marginRight:"10px"}}>
Indore
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"style={{width:"140px",fontSize:"25px",marginRight:"10px"}}>
Gwalior
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left"style={{width:"140px",fontSize:"25px",marginRight:"10px"}}>
Pithampur
</button>

</div>

</div>



   
  )
}
