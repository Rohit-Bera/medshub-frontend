import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../style/Mywishlist.css";
import YourAccount from "./Youraccount";
import himalya from "../images/himalya.jpg";

import { Triangle, Rings, Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";

import { useDispatch, useSelector } from "react-redux";
import { productData } from "../Data/Reducers/product.reducer";
import { getmyWishlistApi } from "../Data/Services/Oneforall";

Modal.setAppElement("#root");

const Mywishlist = () => {
  useEffect(() => {
    getmyWishlist();
  }, []);

  //   -------------------------------states
  const token = useSelector((state) => state.userReducer).token;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [myList, setMyList] = useState([]);

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

  //   -------------------------------functions
  const getmyWishlist = async () => {
    setModalIsOpen(true);

    const response = await getmyWishlistApi(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
      setMyList(response.data.list);
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
        <div className="main-wish">
          <h2 style={{ marginLeft: "30px", marginTop: "45px" }}>My Wishlist</h2>
          {myList.map((item) => {
            console.log("item: ", item);
            if (item.product) {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "1%",
                  }}
                >
                  <div className="wish-bg">
                    <img src={himalya} alt="img" className="size"></img>
                  </div>
                  <div className="wish-text">
                    <p style={{ marginLeft: "25px" }}>Himalya Products</p>
                    <p style={{ marginLeft: "25px" }}>566/-</p>
                  </div>
                </div>
              );
            } else if (item.medicine) {
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginBottom: "1%",
                }}
              >
                <div className="wish-bg">
                  <img src={himalya} alt="img" className="size"></img>
                </div>
                <div className="wish-text">
                  <p style={{ marginLeft: "25px" }}>Himalya Products</p>
                  <p style={{ marginLeft: "25px" }}>566/-</p>
                </div>
              </div>;
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

export default Mywishlist;
