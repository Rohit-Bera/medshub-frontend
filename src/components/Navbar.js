import React from "react";
import "../style/Navbar.css";

import Logo from "../images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="main">
      <div className="left-nav">
        <Link to="/">
          <img src={Logo} alt="crashed"></img> </Link>
       </div>
      <div className='center-nav'>
          <div className='width'>
              <input type="text" placeholder='Search' className='input'></input>&nbsp;<i class="fas fa-search"></i>
              </div>
        </div>
      <div className='right-nav'>
        <div className='flex margin'> 
          <i class="fas fa-notes-medical margin-left-nav"></i>
          <i class="fas fa-shopping-cart margin-left-nav"></i>
        <Link to="/yourAccount/AccountDetails"> 
        <i class="fas fa-user margin-left-nav"></i>
        </Link></div>
     
      <div className='flex'>
          <span className="span-nav">
              Prescription
          </span>
          <span className="span-nav">
              Cart
          </span>
          <span className="span-nav">
              Account
          </span>
          </div>
      </div>
      </div>
      
  );
};

export default Navbar;
