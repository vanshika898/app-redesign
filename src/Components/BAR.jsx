import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.modules.css'; 
import { Link } from 'react-router-dom';
export default function BAR() {
  return (
    
       <div class="site-wrap">
<div>
  <div className="site-mobile-menu">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div> {/* .site-mobile-menu */}
  <div className="site-navbar-wrap bg-white">
    <div className="site-navbar-top">
      <div className="container py-2">
        <div className="row align-items-center">
          <div className="col-6">
            <Link to="/" className="p-2 pl-0"><span className="icon-twitter" /></Link>
            <Link  to="/" className="p-2 pl-0"><span className="icon-facebook" /></Link>
            <Link  to="/" className="p-2 pl-0"><span className="icon-linkedin" /></Link>
            <Link  to="/" className="p-2 pl-0"><span className="icon-instagram" /></Link>
          </div>
          <div className="col-6">
            <div className="d-flex ml-auto">
              <Link  to="/" className="d-flex align-items-center ml-auto mr-4">
                <span className="icon-phone mr-2" />
                <span className="d-none d-md-inline-block">youremail@domain.com</span>
              </Link>
              <Link  to="/" className="d-flex align-items-center">
                <span className="icon-envelope mr-2" />
                <span className="d-none d-md-inline-block">+1 291 2830 302</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-navbar bg-light">
      <div className="container py-1">
        <div className="row align-items-center">
          <div className="col-2">
            <h2 className="mb-0 site-logo"><Link to="index.html">Industrie</Link></h2>
          </div>
          <div className="col-10">
            <nav className="site-navigation text-right" role="navigation">
              <div className="container">
                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><Link to="/" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></Link></div>
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="has-children active">
                    <Link to="index.html">Home</Link>
                    <ul className="dropdown arrow-top">
                      <li><Link to="/">Menu One</Link></li>
                      <li><Link to="/">Menu Two</Link></li>
                      <li><Link to="/">Menu Three</Link></li>
                      <li className="has-children">
                        <Link to="/">Sub Menu</Link>
                        <ul className="dropdown">
                          <li><Link to="/">Menu One</Link></li>
                          <li><Link to="/">Menu Two</Link></li>
                          <li><Link to="/">Menu Three</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/">Company</Link>
                    <ul className="dropdown arrow-top">
                      <li><Link to="/">Menu One</Link></li>
                      <li><Link to="/">Menu Two</Link></li>
                      <li><Link to="/">Menu Three</Link></li>
                    </ul>
                  </li>
                  <li><Link to="news.html">News</Link></li>
                  <li><Link to="/">Services</Link></li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
