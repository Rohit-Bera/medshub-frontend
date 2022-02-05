import { React } from "react";
import "../style/Navbar.css";

import Logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const histoy = useHistory();

  // const name = useSelector((state) => state.userReducer).name;
  // console.log("name: ", name);
  // const email = useSelector((state) => state.userReducer).email;
  // console.log("email: ", email);
  // const phoneNumber = useSelector((state) => state.userReducer).phoneNumber;
  // console.log("phoneNumber: ", phoneNumber);

  // if (name === "" || email === "" || phoneNumber === "") {
  //   histoy.push("/checkuser");
  // }

  return (
    <>
      <div className="nav-part">
        <div className="nav-part-logo">
          <Link to="/">
            <div>
              <img />
              <span className="logo1">Medshub </span>
              <span className="logo2">24/7</span>
            </div>
          </Link>
        </div>
        <div className="nav-part-link">
          <Link to="/uploadprescription">
            <div className="nav-box">
              <i class="fas fa-notes-medical"></i>
              <p>upload prescription</p>
            </div>
          </Link>
          <Link to="/yourAccount/AccountDetails">
            <div className="nav-box">
              <i class="fas fa-user"></i>
              <p>my account</p>
            </div>
          </Link>
          <Link to="/yourAccount/myCart">
            <div className="nav-box cart">
              <i class="fas fa-shopping-cart"></i>
              <p>cart</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
