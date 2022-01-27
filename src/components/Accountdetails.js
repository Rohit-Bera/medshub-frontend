import React from "react";
import "../style/Accountdetails.css";
import YourAccount from "./Youraccount";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Accountdetails = () => {
  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
  console.log("address: ", address);
  const phone = useSelector((state) => state.userReducer).phoneNumber;

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
              <span className="bold">Name</span> -{" "}
              <span className="margin-left">{name}</span>
              <br></br>
              <br></br>
              <span className="bold">Address</span> -{" "}
              <span className="margin-left">{address}</span>
              <br></br>
              <br></br>
              <span className="bold">Mobile No</span> -{" "}
              <span className="margin-left">{phone}</span>
              <br></br>
              <br></br>
              <span className="bold">Email ID</span> -{" "}
              <span className="margin-left">{email}</span>
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
