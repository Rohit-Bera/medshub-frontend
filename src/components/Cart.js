import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/mycart.css";
import img from "../images/dabur.jpg";
import {
  deleteFromCart,
  getMyCart,
  placeOrderMedicineApi,
  placeOrderProductApi,
} from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import { productData } from "../Data/Reducers/product.reducer";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import Youraccount from "./Youraccount";
import StripCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Cart = () => {
  useEffect(() => {
    MyCart();
  }, []);

  // -------------------------------------------------------states
  const [length, setCartLentgh] = useState();
  const [myCart, setMyCart] = useState([]);
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false); // loader modal

  const [prodBuyModal, setProdBuyModal] = useState(false); // product buy modal
  const [medBuyModal, setMedBuyModal] = useState(false); // medicine buy modal

  const [productItem, setProductItem] = useState(null); // product item state
  const [medicineItem, setMedicineItem] = useState(null); // mediicne item state

  const [prodId, setProdId] = useState(); // remove from cart ID after placing order product
  const [medId, setMedId] = useState(); // remove from cart ID after placing order product

  const [amount, setAmount] = useState(); // price state
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

  // -------------------------------------------functons
  const MyCart = async () => {
    setModalIsOpen(true);

    const response = await getMyCart(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }
    setMyCart(response.data.myCart);
    setCartLentgh(response.data.myCart.length);
  };

  const removeFromCart = async (_id) => {
    setModalIsOpen(true);

    console.log("_id: ", _id);

    const response = await deleteFromCart(_id, token);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("item removed!", {
        theme: "colored",
        position: "top-right",
      });
    } else {
      toast.error("something went wrong!", {
        theme: "colored",
        position: "top-right",
      });
    }

    MyCart();
  };

  // take item state of product
  const takeProductItem = (item) => {
    console.log("product item: ", item);
    setProductItem(item);
    setAmount(item.productPrice);
  };

  // take item state of medicine
  const takeMedicineItem = (item) => {
    console.log("medicine item: ", item);

    setMedicineItem(item);
    setAmount(item.medicinePrice);
  };

  // place order for product
  const placeOrderProduct = async () => {
    setModalIsOpen(true);
    console.log("productItem : ", productItem);

    const response = await placeOrderProductApi(productItem, token);
    console.log("response place order: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("order placed!", {
        position: "top-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "top-right",
        theme: "dark",
      });
    }
  };
  // payment for product
  const makePaymentProduct = async (token) => {
    console.log("product Item : ", productItem);

    const { productName, productPrice } = productItem;
    const price = productPrice;
    const name = productName;

    const item = { name, price };

    const body = {
      token,
      item,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return await fetch(`http://localhost:5500/paymentStripe`, {
      method: "Post",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
        if (status === 200) {
          placeOrderProduct();
          removeFromCart(prodId);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  // place order for medicine
  const placeOrderMedicine = async () => {
    setModalIsOpen(true);
    console.log(" medicineItem : ", medicineItem);

    const response = await placeOrderMedicineApi(medicineItem, token);
    console.log("response place order: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("order placed!", {
        position: "top-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  // place order for medicine
  const makePaymentMedicine = async (token) => {
    console.log("medicine Item : ", medicineItem);

    const { medicineName, medicinePrice } = medicineItem;
    const price = medicinePrice;
    const name = medicineName;

    const item = { name, price };

    const body = {
      token,
      item,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return await fetch(`http://localhost:5500/paymentStripe`, {
      method: "Post",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
        if (status === 200) {
          placeOrderMedicine();
          removeFromCart(medId);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
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
          {length !== 0 ? (
            myCart.map((item) => {
              if (item.product) {
                return (
                  <div className="item">
                    <img src={item.product.productImage[0]} alt="product_img" />
                    <p>{item.product.productName}</p>
                    <p>₹{item.product.productPrice}</p>

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
                        setProdBuyModal(true);
                        takeProductItem(item.product);
                        setProdId(item._id);
                      }}
                    >
                      Buy Now
                    </button>
                    <Modal isOpen={prodBuyModal} style={customStyles}>
                      <div className="buy-modal-conatiner">
                        <div className="buy-modal-cancel">
                          <button onClick={() => setProdBuyModal(false)}>
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
                            onClick={() => setProdBuyModal(false)}
                          >
                            cancel
                          </button>

                          <StripCheckout
                            stripeKey="pk_test_51K9BzESJxF1xgWl3hAPFSmTRUHtri2Vb2QmboXnSvvdcD0XaNuqwiUmdDJIwZ10VYHCdJskzHLJoERsFQS5mmUWD00leevPB9M"
                            token={makePaymentProduct}
                            name="Make Payment"
                            shippingAddress
                            billingAddress
                          >
                            <button
                              class="btn btn-md bg-warning"
                              className="yes"
                              onClick={() => {
                                setProdBuyModal(false);
                                // makePayment();
                              }}
                            >
                              pay ₹{amount}
                            </button>
                          </StripCheckout>
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
                    <p>₹{item.medicine.medicinePrice}</p>

                    <button onClick={() => viewProduct(item.medicine)}>
                      <Link to="/medicines/viewmedcines">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button onClick={() => removeFromCart(item._id)}>
                      <i class="fas fa-times"></i>
                    </button>
                    <button
                      className="buynow"
                      onClick={() => {
                        setMedBuyModal(true);
                        takeMedicineItem(item.medicine);
                        setMedId(item._id);
                      }}
                    >
                      Buy Now
                    </button>
                    <Modal isOpen={medBuyModal} style={customStyles}>
                      <div className="buy-modal-conatiner">
                        <div className="buy-modal-cancel">
                          <button onClick={() => setMedBuyModal(false)}>
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
                            onClick={() => setMedBuyModal(false)}
                          >
                            cancel
                          </button>

                          <StripCheckout
                            stripeKey="pk_test_51K9BzESJxF1xgWl3VLpG7easuHbz7arQhPME9rZtGqeQYeFDNH1Ve7eiyy3AsVypNWubsegfT78trvTOHGK9kocL00S3gYD1gS"
                            token={makePaymentMedicine}
                            name="Make Payment"
                            shippingAddress
                            billingAddress
                          >
                            <button
                              class="btn btn-md bg-warning"
                              className="yes"
                              onClick={() => {
                                setMedBuyModal(false);
                                // makePayment();
                              }}
                            >
                              pay ₹{amount}
                            </button>
                          </StripCheckout>
                        </div>
                      </div>
                    </Modal>
                  </div>
                );
              }
            })
          ) : (
            <div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "24px", textAlign: "center" }}>
                no Items added in cart yet!
              </p>
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

export default Cart;
