import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import signup from "../images/signup.png";
import "../style/signup.css";
import Navbar from "./Navbar";
import { postUserService } from "../Data/Services/Oneforall";
import { useDispatch } from "react-redux";
import { userData } from "../Data/Reducers/userData.reducer";
import { toast } from "react-toastify";

const Signup = () => {
  // -----------------------------------------------------------states
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: null,
    address: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  // --------------------------------------------------------functions

  const refresh = (e) => {
    e.preventDefault();
  };

  const formInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postUser = async () => {
    console.log("user: ", user);
    if (
      user.address !== "" &&
      user.email !== "" &&
      user.name !== "" &&
      user.password !== null &&
      user.phoneNumber !== ""
    ) {
      try {
        const response = await postUserService(user);
        console.log("response: ", response);

        const theUser = await response.receive.data.signupuser;
        console.log("signupuser: ", theUser);
        dispatch(userData({ theUser }));

        if (response.receive) {
          return history.push("/yourAccount/AccountDetails");
        }
        if (response.error) {
          console.log("error occured", response.error);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    } else {
      toast.info("please enter details", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setUser({
      ...user,
      ["name"]: "",
      ["email"]: "",
      ["password"]: null,
      ["address"]: "",
      ["phoneNumber"]: "",
    });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => refresh(e)}>
        <div style={{ display: "flex", marginTop: "1%" }}>
          <div style={{ flex: "50%" }}>
            <img
              src={signup}
              alt="crashed"
              style={{ height: "700px", width: "40vw", marginLeft: "10%" }}
            ></img>
          </div>
          <hr className="hr-signup"></hr>
          <div style={{ flex: "50%" }}>
            <h2 className="signup-title">Create New Account</h2>
            <hr className="hr-signup"></hr>
            <div style={{ textAlign: "center" }}>
              <br></br>
              <p style={{ marginRight: "90px", marginBottom: "-1px" }}>
                Please enter your name
              </p>
              <input
                required
                type="text"
                placeholder="eg:- james martin"
                className="input-signup"
                name="name"
                value={user.name}
                onChange={formInput}
              />
              <br></br>
              <p style={{ marginRight: "90px", marginBottom: "-1px" }}>
                Please enter your email
              </p>
              <input
                required
                type="text"
                placeholder="eg:- james@gmail.com"
                className="input-signup"
                name="email"
                value={user.email}
                onChange={formInput}
              />
              <br></br>
              <p style={{ marginRight: "180px", marginBottom: "-1px" }}>
                Phone No.
              </p>
              <input
                type="text"
                required
                placeholder="eg:- 9898989898"
                className="input-signup"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={formInput}
              />
              <br></br>
              <p style={{ marginRight: "180px", marginBottom: "-1px" }}>
                Address
              </p>
              <input
                type="text-area"
                required
                placeholder="address"
                className="input-signup"
                name="address"
                value={user.address}
                onChange={formInput}
              />
              <p style={{ marginRight: "95px", marginBottom: "-1px" }}>
                Please enter Password
              </p>
              <input
                type="password"
                required
                placeholder="password"
                className="input-signup"
                name="password"
                value={user.password}
                onChange={formInput}
              />
              <br></br>
              <button
                className="button-signup"
                onClick={postUser}
                style={{ marginTop: "2%" }}
              >
                Sign up
              </button>
              <br></br>

              <p className="p-signup">
                Already Registered?{" "}
                <Link to="/signin" className="p-signup">
                  Signin
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
