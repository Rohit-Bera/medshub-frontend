import { React, useState } from "react";
import "../style/youraccount.css";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar"
import Modal from "react-modal/lib/components/Modal";
import { useDispatch } from "react-redux";
import { userData } from "../Data/Reducers/userData.reducer";
import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");

const Youraccount = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const logout = () => {
    const signupUser = { name: "", email: "", password: "", phoneNumber: "" };
    const token = "";

    const theUser = { signupUser, token };

    dispatch(userData({ theUser }));

    setModalIsOpen(false);
    history.push("/");
  };

  return (
    <>
      <div className="your-account">
        <div>
          <span className="logo1">Medshub </span>
          <span className="logo2">24/7</span>
        </div>

        <ul type="none">
          <Link to="/">
            <li>
              <i class="fas fa-home"></i>Home
            </li>
          </Link>

          <Link to="/yourAccount/About">
            <li>
              <i class="fas fa-info-circle margin-main-icon"></i>About
            </li>
          </Link>
          <Link to="/yourAccount/Help">
            <li>
              <i class="far fa-question-circle margin-main-icon"></i>Help?
            </li>
          </Link>
          <li>
            <button className="logout" onClick={() => setModalIsOpen(true)}>
              <i class="fas fa-power-off margin-main-icon"></i>logout
            </button>
          </li>
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="modalbackground">
          <div className="modalcontainer">
            <div className="closebutton">
              <button className="cancel" onClick={() => setModalIsOpen(false)}>
                X
              </button>
            </div>
            <div className="body" style={{ color: "black" }}>
              Are You Sure <br />
              You Want to Log out ?
            </div>
            <div className="modalbutton">
              <button className="no" onClick={() => setModalIsOpen(false)}>
                Cancel
              </button>
              <button className="yes" onClick={() => logout()}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Youraccount;
