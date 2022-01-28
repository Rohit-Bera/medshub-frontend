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
    <div className="main">
      <div className="left-nav">
        <Link to="/">
          <img src={Logo} alt="crashed"></img>{" "}
        </Link>
      </div>
      <div className="center-nav">
        <div className="width">
          <input type="text" placeholder="Search" className="input"></input>
          &nbsp;<i class="fas fa-search"></i>
        </div>
      </div>
      <div className="right-nav">
        <div className="flex margin">
          <i class="fas fa-notes-medical margin-left-nav"></i>
          <i class="fas fa-shopping-cart margin-left-nav"></i>

        <Link to="/checkuser"> 
        <i class="fas fa-user margin-left-nav"></i>
        </Link></div>
     
      <div className='flex'>
          <span className="span-nav">
          <Link> Prescription</Link>
          </span>
          <span className="span-nav">
          <Link>Cart</Link>
          </span>
          <span className="span-nav">
          <Link to="/checkuser">Account</Link>
          </span>
          
        </div>

        {/* <div className="flex">
          <span  className="span-nav">
            <Link> Prescription</Link>
          </span >
          <span  className="span-nav">
            <Link>Cart</Link>
          </span>
          <span  className="span-nav">
            <Link to="/checkuser">Account</Link>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
