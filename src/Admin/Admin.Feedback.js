import React from "react";
import Navbar from "../Admin/Navbar";
import "./style/Feedback.css";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const AdminFeedback = () => {
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
      <Navbar />
      <div className="feedback-flex">
        <a
          href="https://docs.google.com/spreadsheets/d/1bzg9NWYlEmv9qoZ3CL1-RYBZJQmlhGzXYhbNo3dREo0/edit#gid=0"
          rel
          target="_blank"
        >
          <div className="box-feedback link-feedback">
            <i class="fas fa-box-open"></i>
            <br></br>
            website Feedback
          </div>
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1bzg9NWYlEmv9qoZ3CL1-RYBZJQmlhGzXYhbNo3dREo0/edit#gid=989087027"
          target="_blank"
        >
          <div className="box-feedback link-feedback">
            <i class="fas fa-pills"></i>
            <br></br>
            Medicine Feedback
          </div>
        </a>
      </div>
      <div className="feedback-flex">
        <a
          href="https://docs.google.com/spreadsheets/d/1bzg9NWYlEmv9qoZ3CL1-RYBZJQmlhGzXYhbNo3dREo0/edit#gid=1996999681"
          target="_blank"
        >
          <div className="box-feedback link-feedback">
            <i class="fas fa-box-open"></i>
            <br></br>
            Products Feedback
          </div>
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1bzg9NWYlEmv9qoZ3CL1-RYBZJQmlhGzXYhbNo3dREo0/edit#gid=1804013755"
          target="_blank"
        >
          <div className="box-feedback link-feedback">
            <i class="fas fa-clipboard"></i>
            <br></br>
            Orders Feedback
          </div>
        </a>
      </div>
    </div>
  );
};
export default AdminFeedback;
