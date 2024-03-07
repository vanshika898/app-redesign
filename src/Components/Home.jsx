import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.modules.css'; 
import styles from './BAR.module.css'
import { Link } from 'react-router-dom';




export default function Home() {
 
 
 
  return (
   <div className='container-fluid'>
<div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
<li data-target="#carouselExampleIndicators" data-slide-to={1} />
<li data-target="#carouselExampleIndicators" data-slide-to={2} />

  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="img/img1.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="img/img2.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="img/img3.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>  
</div> 


      <div className='container-fluid'>
  
      <div className={styles.example1}>
        <span style={{ backgroundColor: "yellow" }}>
          CNG PRICES REVISED FROM 09-APRIL-2023 |
          *CNG PRICES REVISED FROM 09-APRIL-2023 |
          PNG Prices revised from 09-April-2023 |
        </span>
      </div>
 
</div>
<div className='container-fluid'>
<div  className="photo" style={{marginTop:"8%"}}>


<img src="img/img81.png" alt="" className='img10' />
      
<img src="img/img82.png" alt="" className='img11'  />
<img src="img/img83.png" alt=""className='img12'  />

</div>
</div>
<br />
<hr />


<div>
  <div className="site-section">
    <div className="container" >
      <div className="row mb-5 justify-content-center">
        <div className="col-12 text-center">
          <h2 className="font-weight-light text-black display-4">Our Specialty</h2>
        </div>
        <div className="col-md-7 text-center">
          <p>AGL specializes in supplying natural gas to various sectors in Madhya Pradesh..</p>
        </div>
      </div>
      <div className="row no-gutters align-items-stretch h-100" >
        <div className="col-lg-6">
          <div className="row no-gutters align-items-stretch h-100 half-sm">
            <div className="col-md-6 bg-image bg-sm-height" style={{backgroundImage: 'url("images/img_4_colored.jpg")'}} data-aos="fade" data-aos-delay={0} />
            <div className="col-md-6 bg-light text">
              <div className="p-4">
                <h2 className="h5 mb-3 text-black line-height-sm">Natural Gas Supply</h2>
                <p> AGL specializes in supplying natural gas to various sectors, including industrial, commercial, and residential, across Madhya Pradesh, India.</p>
                <p className="mb-0"><Link to ="/" className><small className="text-uppercase font-weight-bold text-black">Read More</small></Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row no-gutters align-items-stretch h-100 half-sm">
            <div className="col-md-6 bg-image order-md-2 order-lg-1 bg-sm-height" style={{backgroundImage: 'url("images/img_1_colored.jpg")'}} data-aos="fade" data-aos-delay={200} />
            <div className="col-md-6 bg-light text order-md-1 order-lg-2">
              <div className="p-4">
                <h2 className="h5 mb-3 text-black line-height-sm">Infrastructure Development</h2>
                <p>They possess expertise in developing and maintaining gas distribution networks, ensuring efficient and reliable gas delivery to their customers.</p>
                <p className="mb-0"><Link to="/" className><small className="text-uppercase font-weight-bold text-black">Read More</small></Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row no-gutters align-items-stretch h-100 half-sm">
            <div className="col-md-6 bg-image order-md-1 order-lg-2 bg-sm-height" style={{backgroundImage: 'url("images/img_2_colored.jpg")'}} data-aos="fade" data-aos-delay={300} />
            <div className="col-md-6 bg-light text order-md-2 order-lg-1">
              <div className="p-4">
                <h2 className="h5 mb-3 text-black line-height-sm">Oil &amp; Gas Energy</h2>
                <p>AGL's primary function is to transport and distribute natural gas to various sectors,
Aavantika Gas Limited (AGL) is not directly involved in natural gas exploration or production.s</p>
                <p className="mb-0"><Link to="/" className><small className="text-uppercase font-weight-bold text-black">Read More</small></Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row no-gutters align-items-stretch h-100 half-sm">
            <div className="col-md-6 bg-image order-md-2 bg-sm-height" style={{backgroundImage: 'url("images/img_3_colored.jpg")'}} data-aos="fade" data-aos-delay={400} />
            <div className="col-md-6 bg-light text order-md-1">
              <div className="p-4">
                <h2 className="h5 mb-3 text-black line-height-sm">Customer Service</h2>
                <p>AGL focuses on providing excellent customer service, offering support and solutions to meet diverse energy needs..</p>
                <p className="mb-0"><Link to="/" className><small className="text-uppercase font-weight-bold text-black">Read More</small></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section" >
    <div className="container" style={{width:"120%",fontSize:"20px"}}>
      <div className="row">
        <div className="col-md-6 bg-image bg-sm-height mb-5 mb-md-0 order-md-2" style={{backgroundImage: 'url("images/img_1_colored.jpg")'}} data-aos="fade-up" />
        <div className="col-md-6 pr-md-5 order-md-1">
          <h2 className="display-3 line-height-xs text-black mb-4">Let's grow <strong>together</strong></h2>
          <p className="mb-4">The pollution level in the cities rose alarmingly due to buses, auto rickshaws, taxies and other modes of transport which were using petrol and diesel as a fuel. It was, therefore decided to use C.N.G for plying these vehicles, This fuel does not omit much smoke and is quite pollution free.</p>
          
          <p><Link to="/" className="btn btn-outline-primary btn-sm rounded-0 p-2 px-4">Read More</Link></p>
        </div>
      </div>
    </div>
  </div>
 

    </div>
   
    </div> 
  
  );
}
