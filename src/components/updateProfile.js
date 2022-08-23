import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserApi } from "../Data/Services/Oneforall";
import { userData } from "../Data/Reducers/userData.reducer";
import { Link } from "react-router-dom";
import "../style/updateprofile.css";
import Modal from "react-modal/lib/components/Modal";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
Modal.setAppElement("#root");

const UpdateProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
  const phone = useSelector((state) => state.userReducer).phoneNumber;
  const token = useSelector((state) => state.userReducer).token;
  const _id = useSelector((state) => state.userReducer)._id;

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: name,
    email: email,
    address: address,
    phoneNumber: phone,
  });

  const takeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const refresh = (e) => {
    e.preventDefault();
  };

  const updateUser = async () => {
    setModalIsOpen(true);
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await updateUserApi(_id, user, headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      const { name, email, phoneNumber, address } = user;
      const signupUser = {
        name,
        email,
        phoneNumber,
        address,
      };
      const theUser = {
        signupUser,
      };
      dispatch(userData({ theUser }));

      if (response.status === 200) {
        toast.success("update succesfully!");
      } else {
        toast.error("something went wrong!");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <h2 className="update-title">Update Your Account</h2>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={(e) => refresh(e)}>
          <p style={{ marginRight: "90px", marginBottom: "-1px" }}>
            Please enter your name
          </p>
          <br></br>
          <input
            type="text"
            className="input-update"
            value={user.name}
            name="name"
            onChange={takeInput}
          />
          <br></br>
          <p style={{ marginRight: "90px", marginBottom: "-1px" }}>
            Please enter your email
          </p>
          <br></br>
          <input
            type="text"
            value={user.email}
            className="input-update"
            name="email"
            onChange={takeInput}
          />
          <br></br>
          <p style={{ marginRight: "180px", marginBottom: "-1px" }}>
            Phone No.
          </p>
          <br></br>
          <input
            type="text"
            value={user.phoneNumber}
            className="input-update"
            name="phoneNumber"
            onChange={takeInput}
          />
          <br></br>
          <p style={{ marginRight: "180px", marginBottom: "-1px" }}>Address</p>
          <br></br>
          <input
            type="text"
            value={user.address}
            className="input-update"
            name="address"
            onChange={takeInput}
          />
          <br></br>
          <br></br>
          <Link to="/yourAccount/AccountDetails">
            <button className="button-update">Cancle</button>
          </Link>
          &nbsp;&nbsp;
          <Link to="/yourAccount/AccountDetails">
            <button className="button-update" onClick={() => updateUser()}>
              Update
            </button>
          </Link>
        </form>
      </div>
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
          <Triangle color="black" height={100} width={100} />
        </div>
      </Modal>
    </div>
  );
};
export default UpdateProfile;
