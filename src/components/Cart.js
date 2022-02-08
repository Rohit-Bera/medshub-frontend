import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/mycart.css";
import img from "../images/dabur.jpg";
import {
  deleteFromCart,
  getMyCart,
  placeOrderApi,
} from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import { productData } from "../Data/Reducers/product.reducer";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";
import Youraccount from "./Youraccount";
import StripCheckout from "react-stripe-checkout";

Modal.setAppElement("#root");

const Cart = () => {
  useEffect(() => {
    MyCart();
  }, []);

  // -------------------------------------------------------states
  const [myCart, setMyCart] = useState([]);
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buyModal, setBuyModal] = useState(false);
  const [buyNowItem, setBuyNowItem] = useState();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.userReducer).token;

  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
  const phone = useSelector((state) => state.userReducer).phoneNumber;

  if (
    name === "" ||
    email === "" ||
    address === "" ||
    phone === "" ||
    token === ""
  ) {
    history.push("/signin");
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

  // -------------------------------------------functons
  const MyCart = async () => {
    setModalIsOpen(true);

    const response = await getMyCart(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }
    setMyCart(response.data.myCart);
  };

  const removeFromCart = async (_id) => {
    setModalIsOpen(true);

    console.log("_id: ", _id);

    const response = await deleteFromCart(_id, token);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }

    MyCart();
  };

  const takeItem = async (item) => {
    setBuyNowItem(item);
  };

  const placeOrder = async () => {
    setModalIsOpen(true);
    console.log("order item : ", buyNowItem);

    const response = await placeOrderApi(buyNowItem, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }
  };

  const viewProduct = (item) => {
    console.log("item: ", item);

    if (item.productName) {
      const {
        availableStatus,
        productBrand,
        productCategory,
        productImage,
        productName,
        productPrice,
      } = item;

      const product = {
        availableStatus,
        productBrand,
        productCategory,
        productImage,
        productName,
        productPrice,
      };
      dispatch(productData({ product }));
    } else if (item.medicineName) {
      dispatch(medicineData({ item }));
    }
  };

  return (
    <>
      <Youraccount />
      <div className="your-wishlist">
        <div className="wishlist-items">
          <p style={{ fontSize: "20px" }}>My Cart</p>
          {myCart.map((item) => {
            if (item.product) {
              return (
                <div className="item">
                  <img src={item.product.productImage[0]} alt="product_img" />
                  <p>{item.product.productName}</p>
                  <p>{item.product.productPrice}</p>

                  <button onClick={() => viewProduct(item.product)}>
                    <Link to="/viewproduct">
                      <i class="fas fa-eye"></i>
                    </Link>
                  </button>

                  <button onClick={() => removeFromCart(item._id)}>
                    <i class="fas fa-times"></i>
                  </button>
                  <button
                    className="buynow"
                    onClick={() => {
                      setBuyModal(true);
                      takeItem(item);
                    }}
                  >
                    Buy Now
                  </button>
                  <Modal isOpen={buyModal} style={customStyles}>
                    <div className="buy-modal-conatiner">
                      <div className="buy-modal-cancel">
                        <button onClick={() => setBuyModal(false)}>
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                      <div className="buy-modal-body">
                        <p>
                          Are you sure <br />
                          you want to buy now?
                        </p>
                      </div>
                      <div className="buy-modal-btn">
                        <button
                          className="no"
                          onClick={() => setBuyModal(false)}
                        >
                          cancel
                        </button>
                        <button
                          className="yes"
                          onClick={() => {
                            setBuyModal(false);
                            placeOrder();
                          }}
                        >
                          proceed
                        </button>
                      </div>
                    </div>
                  </Modal>
                </div>
              );
            } else if (item.medicine) {
              return (
                <div className="item">
                  <img src={item.medicine[0]} alt="product_img" />
                  <p>{item.medicine.medicineName}</p>
                  <p>{item.medicine.medicinePrice}</p>

                  <button onClick={() => viewProduct(item.medicine)}>
                    <Link to="/medicines/viewmedcines">
                      <i class="fas fa-eye"></i>
                    </Link>
                  </button>

                  <button onClick={() => removeFromCart(item._id)}>
                    <i class="fas fa-times"></i>
                  </button>
                  <button className="buynow">Buy Now</button>
                </div>
              );
            }
          })}
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

export default Cart;
