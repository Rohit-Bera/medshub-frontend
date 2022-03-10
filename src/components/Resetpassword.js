import React, { useState } from "react";
// import himalaya from "../images/himalya.jpg";
import "../style/signin.css";
import signin from "../images/signin.png";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import {
  forgotMailApi,
  loginUserService,
  resetPasswordApi,
} from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Data/Reducers/userData.reducer";
import { adminData } from "../Data/Reducers/adminData.reducer";
import Modal from "react-modal/lib/components/Modal";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Modal.setAppElement("#root");

const ResetPassword = () => {
  // ---------------states

  const [logUser, setLoguser] = useState({
    email: "",
    password: null,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const resetPassword = async () => {
    setModalIsOpen(true);
    console.log("logUser: ", logUser);

    if (logUser.email !== "" && logUser.password !== null) {
      try {
        const response = await resetPasswordApi(logUser);
        if (response) {
          setModalIsOpen(false);
        }
        console.log("response: ", response);

        const { token, updatePass } = response.data.result;
        const { address, email, name, phoneNumber, password } = updatePass;

        const signupUser = { address, email, name, phoneNumber, password };
        const theUser = { signupUser, token };

        dispatch(userData({ theUser }));

        if (response.data.result) {
          toast.success(" Password Updated ");
          history.push("/yourAccount/AccountDetails");
        } else {
          toast.error("user with this email doesnot exist ");
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
      setModalIsOpen(false);
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
    },
  };

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => referesh(e)}>
        <div style={{ display: "flex", marginTop: "1%" }}>
          <div style={{ flex: "50%" }}>
            <h2 className="signin-title">Reset Your Password</h2>
            <hr className="hr-signin"></hr>
            <div style={{ textAlign: "center" }}>
              <br></br>
              <p style={{ marginRight: "190px", marginBottom: "-1px" }}>
                Existing Email.
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
                New Password
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
              <button className="button" onClick={resetPassword}>
                Reset Password
              </button>
            </div>
          </div>
          <hr className="hr-signin"></hr>
          <div style={{ flex: "50%" }}>
            <img
              src={signin}
              alt="crashed"
              style={{ height: "700px", width: "40vw" }}
            ></img>
          </div>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div
          style={{
            width: "7vw",
            height: "13vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Triangle
            color="black
          "
            height={100}
            width={100}
          />
        </div>
      </Modal>
    </>
  );
};

export default ResetPassword;
