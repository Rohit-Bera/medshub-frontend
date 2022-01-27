import React from "react";
import "./style/AdminHome.css";
import {Link} from "react-router-dom";
import Navbar from "./Navbar.js"
const Adminhome = () => {
  return <div>
    <Navbar></Navbar>
    <div className="main-admin">
    <br></br>
    <div className="admin-flex">
      <Link to ="/ADmIn/ManageProducts">
        <div className="box-admin link-admin">
        <i class="fas fa-box-open" style={{marginTop:"20px"}}></i><br></br>
          Products
        </div>
      </Link>
      <Link to="/ADmIn/ManageMedicine"> 
        <div className="box-admin link-admin">
        <i class="fas fa-pills" style={{marginTop:"20px"}}></i><br></br>
          Medicine
        </div>
      </Link>
    </div>
    <br></br>
    <div className="admin-flex "> 
      <Link to="/">
        <div className="box-admin link-admin" >
        <i class="fas fa-clipboard" style={{marginTop:"20px"}}></i><br></br>
          Feedback
        </div>
      </Link></div>
    <div className="admin-flex ">
      <Link to="/ADmIn/ManageOrder">
        <div className="box-admin link-admin">
        <i class="fas fa-clipboard" style={{marginTop:"20px"}}></i><br></br>
          Order
        </div>
      </Link>
      <Link to="/ADmIn/ManagePrescription">
        <div className="box-admin link-admin">
        <i class="fas fa-notes-medical" style={{marginTop:"20px"}}></i><br></br>
          Prescription
        </div>
      </Link>
    </div>
  </div>
  </div>;
};

export default Adminhome;
