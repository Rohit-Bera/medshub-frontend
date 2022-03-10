import { React, useState, useEffect } from "react";
import CategoryNav from "./Category.nav";
import "../style/viewmeds.css";
import "../style/category.css";

import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "react-modal/lib/components/Modal";
import {
  addtoCartMedicine,
  getMedicinesApi,
  postMedWishlistApi,
  placeOrderMedicineApi,
} from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import StripCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Medicine = () => {
  useEffect(() => {
    getMedicine();
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [medBuyModal, setMedBuyModal] = useState(false); // medicine buy modal
  const [medicineItem, setMedicineItem] = useState(null); // mediicne item state
  const [amount, setAmount] = useState(); // price state

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
  const token = useSelector((state) => state.userReducer).token;

  const dispatch = useDispatch();

  const getMedicine = async () => {
    setModalIsOpen(true);
    try {
      const response = await getMedicinesApi();
      // console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      setMedicines(response.data.medicines);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const dispatchMed = (item) => {
    console.log("item: ", item);

    dispatch(medicineData({ item }));
  };

  const addMedtoWishlist = async (item) => {
    setModalIsOpen(true);
    console.log("item: ", item);
    console.log("_id: ", item._id);

    const response = await postMedWishlistApi(item._id, item, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("added to wishlist!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else if (response.data.code === 400) {
      toast.info("already exist in wishlist!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  const addToCartMed = async (item) => {
    setModalIsOpen(true);

    const med = { item, token };

    const response = await addtoCartMedicine(med);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("added to cart!", {
        position: "top-right",
        theme: "dark",
      });
    } else if (response.data.error.code === 400) {
      toast.info("already exist in cart!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  // take item state of medicine
  const takeMedicineItem = (item) => {
    console.log("medicine item: ", item);

    setMedicineItem(item);
    setAmount(item.medicinePrice);
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
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <>
      <div className="search-prod">
        <CategoryNav />
        <div className="search-container">
          <div className="searched">
            {/* array of items */}
            {medicines.map((item) => {
              return (
                <div className="item">
                  <div className="item-like">
                    <button onClick={() => addMedtoWishlist(item)}>
                      <i class="fas fa-heart"></i>
                    </button>
                  </div>
                  <div className="item-img">
                    <img src={item.medicineImage[0]} alt="_img" />
                  </div>
                  <div className="item-disc">
                    <p>{item.medicineName}</p>
                    <label> ₹{item.medicinePrice}</label>
                  </div>
                  <div className="item-btn">
                    <Link to="/medicines/viewmedcines">
                      <button onClick={() => dispatchMed(item)}>
                        <i class="far fa-eye"></i>view
                      </button>
                    </Link>

                    <button
                      onClick={() => {
                        setMedBuyModal(true);
                        takeMedicineItem(item);
                      }}
                    >
                      <i class="fas fa-money-check-alt"></i>
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
                            stripeKey="pk_test_51K9BzESJxF1xgWl3hAPFSmTRUHtri2Vb2QmboXnSvvdcD0XaNuqwiUmdDJIwZ10VYHCdJskzHLJoERsFQS5mmUWD00leevPB9M"
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

                    <button onClick={() => addToCartMed(item)}>
                      <i class="fas fa-shopping-cart"></i>
                      <label>add to cart</label>
                    </button>
                  </div>
                </div>
              );
            })}
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

export default Medicine;
