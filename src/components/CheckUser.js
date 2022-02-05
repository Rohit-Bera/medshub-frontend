import React from "react";
import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckUser = () => {
  const histoy = useHistory();

  const name = useSelector((state) => state.userReducer).name;
  console.log("name: ", name);
  const email = useSelector((state) => state.userReducer).email;
  console.log("email: ", email);
  const phoneNumber = useSelector((state) => state.userReducer).phoneNumber;
  console.log("phoneNumber: ", phoneNumber);

  if (name === "" || email === "" || phoneNumber === "") {
    histoy.push("/signin");
  } else {
    histoy.push("/yourAccount/AccountDetails");
  }
  return (
    <>
      {/* <Navbar />
      <button>
        <Link to="/signin">sign In</Link>
      </button>
      <button>
        <Link to="/signup">Sign Up</Link>
      </button> */}
    </>
  );
};

export default CheckUser;
