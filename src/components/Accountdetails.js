import React from "react";
import "../style/Accountdetails.css";
import YourAccount from "./Youraccount";
import Navbar from "./Navbar";

const Accountdetails = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "30%" }}>
          <YourAccount />
        </div>
        <hr></hr>

        <div className="main-details">
          <div>
            <h2 style={{ marginLeft: "30px", marginTop: "45px" }}>
              Account Details
            </h2>
            <br></br>

            <div style={{ marginLeft: "30px" }}>
              <span className="bold">First Name</span> -{" "}
              <span className="margin-left">Manthan</span>
              <br></br>
              <br></br>
              <span className="bold">Last Name</span> -{" "}
              <span className="margin-left">Manthan</span>
              <br></br>
              <br></br>
              <span className="bold">Mobile No</span> -{" "}
              <span className="margin-left">Manthan</span>
              <br></br>
              <br></br>
              <span className="bold">Email ID</span> -{" "}
              <span className="margin-left">Manthan</span>
              <br></br>
              <br></br>
              <span className="bold">Change Password</span> <br></br>
              <span className="bold">Deactivate Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountdetails;
