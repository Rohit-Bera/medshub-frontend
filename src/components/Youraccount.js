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
      <div>
        {/* <Navbar /> */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#f5f5f0",
            height: "1000px",
          }}
        >
          <div>
            <p className=".p">
              <span className="span">Your Account</span>
            </p>
            <div className="menu">
              <div>
                <i class="fas fa-clipboard margin-main-icon"></i>My Order
                <Link to="/yourAccount/myOrders">
                  <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
              </div>
              <div>
                <i class="fas fa-heart margin-main-icon"></i>My Wishlist
                <Link to="/yourAccount/MyWishlist">
                  <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
              </div>
              <div>
                <i class="fas fa-bell margin-main-icon"></i>My Notification
                <Link to="/yourAccount/notification">
                  <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
              </div>
              <div>
                <i class="fas fa-user margin-main-icon"></i>Account details
                <Link to="/yourAccount/accountDetails">
                  <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
              </div>
              <div>
                <i class="far fa-question-circle margin-main-icon"></i>Help?
                <Link to="/yourAccount/Help">
                  <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
              </div>
              <div>
                <i class="fas fa-info-circle margin-main-icon"></i>About
                <Link to="/yourAccount/About">
                  <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
              </div>
              <div>
                <button onClick={() => setModalIsOpen(true)}>
                  <i class="fas fa-power-off margin-main-icon"></i>Logout
                  <i class="fas fa-chevron-circle-right margin-arrow-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
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
            <div className="body">
              Are You Sure <br />
              You Want to Place Order ?
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
