import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/Mynotification.css";
import YourAccount from "./Youraccount";
import himalya from "../images/himalya.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";
import { getmyOrderApi } from "../Data/Services/Oneforall";
Modal.setAppElement("#root");

const Mynotification = () => {
  // ---------------------------------states

  useEffect(() => {
    myOrder();
  }, []);

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
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [myorders, setMyOrders] = useState([]);
  const token = useSelector((state) => state.userReducer).token;

  // ---------------------------------functions
  const myOrder = async () => {
    setModalIsOpen(true);

    const response = await getmyOrderApi(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
      setMyOrders(response.data.myOrder);
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "30%" }}>
          <YourAccount />
        </div>
        <hr></hr>
        <div className="main-noti">
          <h2 style={{ marginLeft: "30px", marginTop: "45px" }}>
            My Notification
          </h2>
          {myorders.map((item) => {
            console.log("item: ", item);
            if (item.product && item.deliverystatus === false) {
              return (
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="order-bg">
                    <img src={himalya} alt="img" className="size"></img>
                  </div>
                  <div className="order-text">
                    <p style={{ marginLeft: "25px" }}>Himalya Products</p>
                    <p style={{ marginLeft: "25px" }}>566/-</p>
                  </div>
                </div>
              );
            } else if (item.medicine && item.deliverystatus === true) {
              console.log("item.medicine: ", item.medicine);
              return (
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="order-bg">
                    <img src={himalya} alt="img" className="size"></img>
                  </div>
                  <div className="order-text">
                    <p style={{ marginLeft: "25px" }}>Himalya Products</p>
                    <p style={{ marginLeft: "25px" }}>566/-</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
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

export default Mynotification;
