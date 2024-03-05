import React from 'react'
import { Link } from 'react-router-dom'
import comer from './Commercial.module.css'
export default function Commercial() {
  return (
    <div>
       <div className={comer.cont}>
      
      </div>
      <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
      <h1 className={comer.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>PNG-Commercial</b></h1>
      <h3 className={comer.v} style={{color:"white",marginBottom:"5%"}}>Home / Business/PNG-Commercial</h3>
     
      <div className={`${comer.container} mt-5`}>
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
          <Link to='/commercial'style={{textDecoration:'underline'}}><tr>
            <td>PNG - commercial</td>
          </tr>
          </Link>
          <Link to='/cng'style={{textDecoration:'none'}}><tr>
            <td>CNG</td>
          </tr>
          </Link> </tbody>
      </table>
   
    </div>
          <div style={{width:"48%",marginLeft:"47%",marginTop:"-35%"}}>
            <h1>KEEPING YOUR BUSINESS COMPETITIVE WITH NATURAL GAS</h1>
            <h5>Natural gas is a very popular energy solution for businesses all over the world, 
                and for good reasons. . When you use natural gas to fuel your business, you’ll 
                enjoy benefits like reliability, convenience, comfort and much more. The company
                 is supplying PNG to over 151 industrial customers (as on 31/03/2021) across
                  its operating locations.Any person, proprietorship/partnership firm 
                  and private/public limited firms except industrial units having their presence
                   in commercial applications like as below can convert to Natural Gas as their primary
                   fuel by adopting Commercial PNG Connection</h5>
                   <h5><ol>
                 <li>Hotel</li>
                    <li>Restaurant</li>
                    <li>Canteen</li>
                    <li>Educational Institute</li>
                    <li>Hostel</li>
                    <li>Industrial pantry / canteen</li>
                    <li>Crematorium</li>
                   </ol></h5>


               <br />
               <h5><ul>
               <h2>BENEFITS OF PNG COMMERCIAL</h2>
               <li>Convinent and comfortable</li>
               <li>Economically</li>
               <li>Versatile and safe</li>
               <li>Reliable and competitive</li>
               <li>Environment friendlly & Green solution</li>    </ul></h5>
          </div>
      
          
       
    </div>
  )
}

