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
import { deleteOrderApi, getmyOrderApi } from "../Data/Services/Oneforall";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import { productData } from "../Data/Reducers/product.reducer";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [myorders, setMyOrders] = useState([]);
  const [length, setOrderLentgh] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer).token;

  // ---------------------------------functions
  const myOrder = async () => {
    setModalIsOpen(true);

    const response = await getmyOrderApi(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
      setMyOrders(response.data.myOrder);
      setOrderLentgh(response.data.myOrder.length);
    }
  };

  const dispatchProd = (product) => {
    console.log("product: ", product);

    dispatch(productData({ product }));
  };

  const dispatchMed = (medicine) => {
    dispatch(medicineData({ medicine }));
  };

  const deleteOrder = async (item) => {
    setModalIsOpen(true);
    console.log("item: ", item);
    const { _id } = item;

    const response = await deleteOrderApi(_id, token);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }
    myOrder();
  };

  return (
    <>
      <YourAccount />
      <div className="your-wishlist">
        <div className="wishlist-items">
          <p style={{ fontSize: "20px" }}>My Notifications</p>
          {length !== 0 ? (
            myorders.map((item) => {
              if (item.product && item.deliverystatus == false) {
                return (
                  <div className="item">
                    <img src={item.product.productImage[0]} alt="product_img" />
                    <p>{item.product.productName}</p>
                    <p>{item.product.productPrice}</p>

                    <button onClick={() => dispatchProd(item.product)}>
                      <Link to="/viewproduct">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button onClick={() => deleteOrder(item)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                );
              } else if (item.medicine && item.deliverystatus == false) {
                return (
                  <div className="item">
                    <img src={item.medicine[0]} alt="product_img" />
                    <p>{item.medicine.medicineName}</p>
                    <p>{item.medicine.medicinePrice}</p>

                    <button onClick={() => dispatchMed(item.medicine)}>
                      <Link to="/medicines/viewmedcines">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button onClick={() => deleteOrder(item)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                );
              }
            })
          ) : (
            <div>
              <p>no orders added</p>
            </div>
          )}
        </div>
        <div className="account-details-nav">
          <div className="details-nav">
            <Link to="/yourAccount/AccountDetails">
              <section>
                <i class="far fa-user-circle " />
                My Account
              </section>
            </Link>
            <Link to="/yourAccount/MyWishlist">
              <section>
                <i class="fas fa-heart margin-main-icon"></i>My Wishlist
              </section>
            </Link>
            <Link to="/yourAccount/myOrders">
              <section>
                <i class="fas fa-clipboard margin-main-icon"></i>My Orders
              </section>
            </Link>
            <Link to="/yourAccount/notification">
              <section>
                <i class="fas fa-bell margin-main-icon"></i>My Notification
              </section>
            </Link>
            <Link to="/yourAccount/myCart">
              <section>
                <i class="fas fa-shopping-cart"></i>My Cart
              </section>
            </Link>
          </div>
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
