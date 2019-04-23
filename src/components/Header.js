import React from 'react'
import logo from "../img/logo.png";

 const Header = () => {
  return (
    <div className="container-fluid no-padding">
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-bgcolor nav-padding">
        <a class="navbar-brand" href="#">
          <img className="logo-size" src={logo} />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"><span className="header-li">Gateways</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span className="header-li">Tour</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span className="header-li">Activites</span></a>
            </li>
            <li class="nav-item">
              <i class="fas fa-search header-icon d-inline-block"></i>
              <a class="nav-link d-inline-block" href="#"><span className="header-li">Search</span></a>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav" style={{"padding-left":"33%"}}>
          <ul class="navbar-nav">
              <li class="nav-item">
                <i class="fas fa-gift header-icon d-inline-block"></i>
                <a class="nav-link d-inline-block" href="#"><span className="header-li">Gift an Experience</span></a>
              </li>
              <li class="nav-item">
                <i class="fas fa-mobile-alt header-icon d-inline-block"></i>
                <a class="nav-link d-inline-block" href="#"><span className="header-li">Get App</span></a>
              </li>
              <li class="nav-item">
                <button className="btn btn-primary" style={{"color": "#fff","font-size": "14px","background-color":"#f8ad33","border":"1px solid #f8ad33","margin-top": "30%"}}>Login</button>
              </li>
          </ul>
        </div>
      </nav>
      <div className="background"></div>
    </div>
  )
}

export default Header;
