import React from "react";
import { useSelector } from "react-redux";
import { getUserApi, deleteUserApi } from "../Data/Services/Oneforall";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./style/Users.css";
import Modal from "react-modal/lib/components/Modal";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
Modal.setAppElement("#root");

const Users = () => {
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
  useEffect(() => {
    getUsers();
  }, []);
  const [allUsers, setAllUsers] = useState([]);
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

  const getUsers = async () => {
    setModalIsOpen(true);
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await getUserApi(headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      setAllUsers(response.data.allusers);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const deleteUser = async (item) => {
    setModalIsOpen(true);

    try {
      const { _id } = item;
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await deleteUserApi(headers, _id);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      if (response.data.status === "200") {
        toast.success("User deleted Succesfully!");
      } else {
        toast.error("User is not Deleted!");
      }
      if (response) getUsers();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex-users-admin">
        {allUsers.map((item) => {
          // console.log('item: ', item);
          return (
            <div>
              <div className="User-Profile-admin">
                <sapn title="delete" onClick={() => deleteUser(item)}>
                  <i class="fas fa-times-circle"></i>
                </sapn>
                <div className="icon-user">
                  <i class="far fa-user-circle " />
                </div>
                <p>
                  <span>
                    <i class="fas fa-user"></i>
                  </span>{" "}
                  <span>{item.name}</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-envelope"></i>
                  </span>{" "}
                  <span>{item.email}</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>{" "}
                  <span>{item.address}</span>
                </p>
                <p>
                  <span>
                    <i class="fas fa-phone-alt"></i>
                  </span>{" "}
                  <sapn>{item.phoneNumber}</sapn>
                </p>
              </div>
            </div>
          );
        })}
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

export default Users;
