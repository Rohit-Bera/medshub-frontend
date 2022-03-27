import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./style/Navbar.css";
import Modal from "react-modal/lib/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { adminData } from "../Data/Reducers/adminData.reducer";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.adminReducer).token;
  const name = useSelector((state) => state.adminReducer).name;
  const email = useSelector((state) => state.adminReducer).email;
  const address = useSelector((state) => state.adminReducer).address;
  const phone = useSelector((state) => state.adminReducer).phoneNumber;

  if (
    name === "" ||
    email === "" ||
    address === "" ||
    phone === "" ||
    token === ""
  ) {
    history.push("/signin");
    toast.info("please login first! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

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

    dispatch(adminData({ theUser }));

    setModalIsOpen(false);
    history.push("/signin");
  };
  return (
    <div className="main">
      <div className="left-nav">
        <Link to="/ADmIn/adminHome">
          <img src={Logo} alt="crashed" className="img"></img>{" "}
        </Link>
      </div>
      <div>
        <div className="logout-admin-nav">
          {" "}
          <i
            class="fas fa-sign-out-alt"
            onClick={() => setModalIsOpen(true)}
          ></i>
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
    </div>
  );
};

export default Navbar;
