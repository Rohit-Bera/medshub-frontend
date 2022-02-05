import React, { useState } from "react";
// import himalaya from "../images/himalya.jpg";
import "../style/signin.css";
import signin from "../images/signin.png";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { loginUserService } from "../Data/Services/Oneforall";
import { useDispatch } from "react-redux";
import { userData } from "../Data/Reducers/userData.reducer";
import { adminData } from "../Data/Reducers/adminData.reducer";

const Signin = () => {
  // ---------------states

  const [logUser, setLoguser] = useState({
    email: "",
    password: null,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  // ---------------functions

  const referesh = (e) => {
    e.preventDefault();
  };

  const formInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoguser({ ...logUser, [name]: value });
  };

  const LoginUser = async () => {
    console.log("logUser: ", logUser);
    try {
      const response = await loginUserService(logUser);
      console.log("response: ", response.receive.data);

      const { user, token } = response.receive.data.loguser;

      const { name, email, address, phoneNumber, usertype } = user;
      const signupUser = { name, email, phoneNumber, address };
      const theUser = { signupUser, token };
      if(usertype==="admin"){
        dispatch(adminData({theUser}));
        if (response.receive.data.loguser) {
          return history.push("/ADmIn/adminHome");
        }
      }
      else{
        dispatch(userData({ theUser }));
        if (response.receive.data.loguser) {
          return history.push("/yourAccount/AccountDetails");
        }
      }
      

      if (response.receive.data.loguser) {
        return history.push("/yourAccount/AccountDetails");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => referesh(e)}>
        <div style={{ display: "flex", marginTop: "1%" }}>
          <div style={{ flex: "50%" }}>
            <h2 className="signin-title">Please Enter Your Login Details</h2>
            <hr className="hr-signin"></hr>
            <div style={{ textAlign: "center" }}>
              <br></br>
              <p style={{ marginRight: "190px", marginBottom: "-1px" }}>
                Email.
              </p>
              <input
                type="text"
                placeholder="Enter email.."
                className="input-signin"
                name="email"
                value={logUser.email}
                onChange={formInput}
              ></input>
              <br></br>
              <br></br>
              <p style={{ marginRight: "180px", marginBottom: "-1px" }}>
                Password
              </p>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input-signin"
                name="password"
                value={logUser.password}
                onChange={formInput}
              ></input>
              <br></br>
              <br></br>
              <br></br>
              <button className="button" onClick={LoginUser}>
                Log In
              </button>
              <br></br>
              <br></br>
              <p className="p-signin">
                You Have No Account?{" "}
                <Link to="/signup" className="p-signin">
                  Signup
                </Link>
              </p>
            </div>
          </div>
          <hr className="hr-signin"></hr>
          <div style={{ flex: "50%" }}>
            <img src={signin} alt="crashed" style={{ height: "700px" }}></img>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
