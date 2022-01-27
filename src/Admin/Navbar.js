import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";
import "./style/Navbar.css"
 
const Navbar = ()=>{
    return <div className="main">
        <div className="left-nav">
            <Link to="/ADmIn/adminHome">
                <img src={Logo} alt="crashed" className="img"></img> </Link>
        </div>
        <div>
       <div className="logout-admin-nav"> <i class="fas fa-sign-out-alt"></i></div>
        </div>
    </div>
    
;
} 

export default Navbar