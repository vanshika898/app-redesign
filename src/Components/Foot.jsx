import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.modules.css'; 

function Foot() {
  return (
    <>
      <div className="promo py-5" data-aos="fade" style={{ backgroundColor: "#4981e2 " }}>
  <div className="container text-center" style={{ textDecoration: "none", height: "30px" }}>
    <h1 className="d-block mb-0 font-weight-light text-white">
      <Link to="/" className="text-white d-block" style={{ textDecoration: "none", height: "30px" }}>
        Aavantika GAS limited
      </Link>
    </h1>
  </div>
</div>
      <footer className="site-footer">
        <div className="container" style={{fontSize:"20px"}}>
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-4 mb-5 mb-lg-0">
                  <h3 className="footer-heading mb-4">Corporate</h3>
                  <ul className="list-unstyled">
                    <li><Link to=""style={{textDecoration:"none"}}>About Agl</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Vision mission</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>network</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Leadership</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>News</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Careers</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Viligance</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Awards</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 col-lg-4 mb-5 mb-lg-0">
                  <h3 className="footer-heading mb-4">Customer</h3>
                  <ul className="list-unstyled"style={{textDecoration:"none"}}>
                    <li><Link to=""style={{textDecoration:"none"}}>Refund policy</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Name transfer policy</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>faqs</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Temporary discontinuation process</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Permanent disconnection process</Link></li>
                    <li><Link to=""style={{textDecoration:"none"}}>Redeveloped building gas</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-md-4 col-lg-4 mb-5 mb-lg-0">
                  <h3 className="footer-heading mb-4">QUICK LINKS</h3>
                  <ul className="list-unstyled">
                    <li><Link to="#"style={{textDecoration:"none"}}>Download</Link></li>
                    <li><Link to="#"style={{textDecoration:"none"}}>E -Tender</Link></li>
                    <li><Link to="#"style={{textDecoration:"none"}}>Photo Gallery</Link></li>
                    <li><Link to="#"style={{textDecoration:"none"}}>Public notice</Link></li>
                    <li><Link to="#"style={{textDecoration:"none"}}>Highlights</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row mb-5">
                <div className="col-md-12"><h3 className="footer-heading mb-4">Avantika gas Limited</h3></div>
                <div className="col-md-6">
                  <p>
                    202-B, 2ND Floor, NRK Business Park,
                    <br />
                    Vijay nagar square,
                    <br />
                    A.B.ROAD, Indore-452010
                    <br />
                    <br />
                    Customer Care number
                    <br />
                    0731-6712222
                    <br />
                    (FROM 9:30 AM TO 6:00 PM)
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Tel. +91 50500550322 <br />
                    Mail. Avantikagasagency@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Foot;
