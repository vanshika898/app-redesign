import React from 'react'
import en from './Enqiury.module.css';
import { Link } from 'react-router-dom';
export default function Enquiry() {


  const showAlert = () => {
    
    alert("Submitted successfully !!!!");
  };
  
  return (
    
    <div>
      <div className={en.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={en.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>Enquiry for PNG</b></h1>
      <h3 className={en.v} style={{color:"white",marginBottom:"5%",width:"30%"}}>Home / Business/Enquiry for PNG </h3>
     
      <div className={`${en.container} mt-5`}>
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
          <Link to='/enquiry'style={{textDecoration:"underline"}}>
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
   <div style={{width:"45%",marginLeft:"48%",marginTop:"-35%",marginBottom:"5%"}}>
    <h2 style ={{color :"#4981e2"}}>ENQUIRY FOR PNG CONNECTION</h2>
    <h4>Piped Natural Gas is an efficient and clean fuel for the domestic household usage, mainly for cooking fuel and also for heating purpose like geyser, etc.

For the enquiry, please fill the below form. 
Our local office representative will contact you and help you for completing the further process.</h4>
<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault01">First name</label>
      <input type="text" className="form-control" id="validationDefault01" placeholder="First name" defaultValue="Mark" required />
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault02">Last name</label>
      <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" defaultValue="Otto" required />
    </div>
    
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault03">City</label>
      <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationDefault04">State</label>
      <input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationDefault05">Zip</label>
      <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required />
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationDefault05">Contact number</label>
      <input type="number" className="form-control" id="validationDefault05" placeholder="contact" required />
    </div>
    


  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck2" required />
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button className="btn btn-primary" type="submit" onClick={showAlert} >Submit form</button>
</form>

    </div>
  </div>
  )
}

