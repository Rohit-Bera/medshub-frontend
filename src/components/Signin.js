import React, { useState } from "react";
// import himalaya from "../images/himalya.jpg";
import "../style/signin.css";
import signin from "../images/signin.png";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { forgotMailApi, loginUserService } from "../Data/Services/Oneforall";
import { useDispatch } from "react-redux";
import { userData } from "../Data/Reducers/userData.reducer";
import { adminData } from "../Data/Reducers/adminData.reducer";
import Modal from "react-modal/lib/components/Modal";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Modal.setAppElement("#root");

const Signin = () => {
  // ---------------states

  const [logUser, setLoguser] = useState({
    email: "",
    password: null,
  });

  const [forgotMail, setForgotEmail] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [forgotModal, setForgotModal] = useState(false);
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
    setModalIsOpen(true);
    console.log("logUser: ", logUser);

    if (logUser.email !== "" && logUser.password !== null) {
      try {
        const response = await loginUserService(logUser);
        if (response) {
          setModalIsOpen(false);
        }
        console.log("response: ", response.receive.data);

        if (response.receive.data.status === "404") {
          toast.error("invalid details");
        } else {
          toast.success("login successfull");
        }

        const { user, token } = response.receive.data.loguser;

        const { name, email, address, phoneNumber, usertype, _id } = user;
        const signupUser = { name, email, phoneNumber, address, _id };
        const theUser = { signupUser, token };
        if (usertype === "admin") {
          dispatch(adminData({ theUser }));
          if (response.receive.data.loguser) {
            return history.push("/ADmIn/adminHome");
          }
        } else {
          dispatch(userData({ theUser }));
          if (response.receive.data.loguser) {
            return history.push("/yourAccount/AccountDetails");
          }
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

  const inputTaker = (e) => {
    setForgotEmail(e.target.value);
  };
  const forgotMailCheck = async () => {
    setModalIsOpen(true);
    console.log("forgotMail: ", forgotMail);
    if (forgotMail === "") {
      toast.info("please enter details", {
        position: "bottom-right",
        theme: "light",
      });
    } else {
      const response = await forgotMailApi(forgotMail);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
        setForgotEmail("");
      }

      if (response.data.result) {
        setForgotModal(false);

        history.push("/reset-password");
      } else if (response.data.error) {
        toast.error("please enter a valid email! , user not found", {
          position: "bottom-right",
          theme: "dark",
        });
      }
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

  const forgotStyle = {
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

              <button className="button" onClick={() => setForgotModal(true)}>
                forgot password
              </button>
              <Modal isOpen={forgotModal} style={forgotStyle}>
                <div className="forgot">
                  <form onSubmit={(e) => referesh(e)}>
                    <p>enter your existing email!</p>
                    <div className="forgot-form">
                      <p>Email : </p>
                      <input
                        type="text"
                        required
                        name="forgotEmail"
                        value={forgotMail}
                        onChange={inputTaker}
                      />
                    </div>
                    <div className="forgot-btn">
                      <button
                        onClick={() => setForgotModal(false)}
                        className="cancel"
                      >
                        cancel
                      </button>
                      <button className="send" onClick={forgotMailCheck}>
                        check
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
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

export default Signin;
