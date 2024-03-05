import React from 'react'
import Ph from './Photo.module.css'
export default function Photo() {
  return (
    // <div>
    //     <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
    // <h1 className={Ph.vision} style={{color:"white",marginTop:"-20%",marginBottom:"20%",marginLeft:"60%"}}><b>VILIGANCE</b></h1>
    // <h3 className={Ph.v} style={{color:"white",marginBottom:"15%"}}>Home / Corporates/Viligance</h3>
   
    // </div>
    <div>
    <div className={Ph.cont}>
    
    </div>
    <img  className="aq"src="img/img24.jpg" style={{width:"43%",height:"50%",marginTop:"-30%"}}alt="" />
    <h1 className={Ph.vision} style={{color:"white",marginTop:"-20%",marginBottom:"10%",marginLeft:"60%"}}><b>Photo Gallery</b></h1>
    <h3 className={Ph.v} style={{color:"white",marginBottom:"15%",width:'30%',marginRight:'9%'}}>Home/media & customer/photo Gallery</h3>
    <div style={{marginBottom:"5%"}}>
    <img className='img1' style={{ width: '350px', height: '350px', marginLeft: '50px', borderRadius: '20%'}} src="img/img57.jpg" alt="" />
    <img className='img2' style={{ width: '350px', height: '350px', marginLeft: '50px', borderRadius: '20%' }} src="img/img58.jpg" alt="" />
    <img className='img3' style={{ width: '350px', height: '350px', marginLeft: '50px', borderRadius: '20%' }} src="img/img59.jpg" alt="" />
    <img className='img4' style={{ width: '350px', height: '350px', marginLeft: '50px', borderRadius: '20%' }} src="img/img60.jpg" alt="" />
</div>


 </div>
 
  )
}

