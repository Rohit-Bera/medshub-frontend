import React from "react";
import "./style/AdminHome.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Adminhome = () => {
  const history = useHistory();

  const token = useSelector((state) => state.adminReducer).token;
  const name = useSelector((state) => state.adminReducer).name;
  const email = useSelector((state) => state.adminReducer).email;
  const address = useSelector((state) => state.adminReducer).address;
  const phone = useSelector((state) => state.adminReducer).phoneNumber;

  if (
    name === "" ||
    email === "" ||
    address === "" ||
    phone === "" ||
    token === ""
  ) {
    history.push("/signin");
    toast.info("please login first! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="main-admin">
        <br></br>
        <div className="admin-flex">
          <Link to="/ADmIn/ManageProducts">
            <div className="box-admin link-admin">
              <i class="fas fa-box-open" style={{ marginTop: "20px" }}></i>
              <br></br>
              Products
            </div>
          </Link>
          <Link to="/ADmIn/ManageMedicine">
            <div className="box-admin link-admin">
              <i class="fas fa-pills" style={{ marginTop: "20px" }}></i>
              <br></br>
              Medicine
            </div>
          </Link>
          <Link to="/ADmIn/AdminFeedback">
            <div className="box-admin link-admin">
              <i class="fas fa-clipboard" style={{ marginTop: "20px" }}></i>
              <br></br>
              Feedback
            </div>
          </Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="admin-flex ">
          <Link to="/ADmIn/allUSers">
            <div className="box-admin link-admin">
              <i class="fas fa-clipboard" style={{ marginTop: "20px" }}></i>
              <br></br>
              Users
            </div>
          </Link>
          <Link to="/ADmIn/ManageOrder">
            <div className="box-admin link-admin">
              <i class="fas fa-clipboard" style={{ marginTop: "20px" }}></i>
              <br></br>
              Order
            </div>
          </Link>
          <Link to="/ADmIn/ManagePrescription">
            <div className="box-admin link-admin">
              <i class="fas fa-notes-medical" style={{ marginTop: "20px" }}></i>
              <br></br>
              Prescription
            </div>
          </Link>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Adminhome;
