import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/viewprod.css";
import Navbar from "./Navbar";
import {
  postProdFeedbackApi,
  postprodWishlistApi,
  placeOrderProductApi,
} from "../Data/Services/Oneforall";
import Modal from "react-modal/lib/components/Modal";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import StripCheckout from "react-stripe-checkout";
//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useSelector } from "react-redux";
Modal.setAppElement("#root");

const Viewprod = () => {
  // ==================================states
  const productId = useSelector((state) => state.productReducer)._id;
  const productName = useSelector((state) => state.productReducer).productName;
  const productImage = useSelector(
    (state) => state.productReducer
  ).productImage;
  const productBrand = useSelector(
    (state) => state.productReducer
  ).productBrand;
  const productCategory = useSelector(
    (state) => state.productReducer
  ).productCategory;
  const productPrice = useSelector(
    (state) => state.productReducer
  ).productPrice;
  const productStatus = useSelector(
    (state) => state.productReducer
  ).availableStatus;
  const productDescription = useSelector(
    (state) => state.productReducer
  ).productDescription;

  const prodItem = {
    productId,
    productName,
    productImage,
    productBrand,
    productCategory,
    productPrice,
    productStatus,
    productDescription,
  };

  const [feedback, setFeedback] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const token = useSelector((state) => state.userReducer).token;

  const [prodBuyModal, setProdBuyModal] = useState(false); // product buy modal
  const [productItem, setProductItem] = useState(null); // product item state
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

  // ===========================================functions
  const addMedtoWishlist = async () => {
    setModalIsOpen(true);

    const item = {
      productId,
      productName,
      productImage,
      productBrand,
      productCategory,
      productDescription,
      productPrice,
      productStatus,
    };
    console.log("item :", item);

    const response = await postprodWishlistApi(productId, item, token);

    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
      setFeedback("");
    }
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  const takeInput = (e) => {
    setFeedback(e.target.value);
  };

  const sendProdFeedback = async () => {
    setModalIsOpen(true);

    console.log("feed : ", feedback);

    const data = { feedback, productId, productName, productBrand };

    const response = await postProdFeedbackApi(data, token);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
      setFeedback("");
    }
  };

  // take item state of product
  const takeProductItem = (item) => {
    console.log("product item: ", item);
    setProductItem(item);
    setAmount(item.productPrice);
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
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="view">
        <div className="view-prod">
          <div className="view-prod-slide">
            <Carousel
              className="slider"
              plugins={[
                "centered",
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  autoplayPlugin,
                  options: {
                    numberOfSlides: 1,
                    interval: 4000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <div className="brand" id="img1">
                <img src={productImage[0]} alt="_img" />
              </div>
              <div className="brand" id="img2">
                <img src={productImage[1]} alt="_img" />
              </div>
              <div className="brand" id="img3">
                <img src={productImage[2]} alt="_img" />
              </div>
              <div className="brand" id="img4">
                <img src={productImage[4]} alt="_img" />
              </div>
              <div className="brand" id="img5">
                <img src={productImage[5]} alt="_img" />
              </div>
            </Carousel>
          </div>
          <div className="prod-detail">
            <section>{productName}</section>
            <section>
              {productStatus ? (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "5vh",
                  }}
                >
                  <p className="green"></p>
                  In Stock
                </p>
              ) : (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <p className="red"></p>
                  Out of Stock
                </p>
              )}
            </section>
            <section
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "18vw",
              }}
            >
              <p>{productCategory}</p>
              <p>{productBrand}</p>
              <p> ₹{productPrice}</p>
            </section>
            <section style={{ width: "40vw", textAlign: "center" }}>
              {productDescription}
            </section>
            <section className="btn">
              <button onClick={() => addMedtoWishlist()}>
                Add to Wishlist
              </button>
              <button
                className="buynow"
                onClick={() => {
                  setProdBuyModal(true);
                  takeProductItem(prodItem);
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
                      stripeKey="pk_test_51K9BzESJxF1xgWl3VLpG7easuHbz7arQhPME9rZtGqeQYeFDNH1Ve7eiyy3AsVypNWubsegfT78trvTOHGK9kocL00S3gYD1gS"
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
            </section>
          </div>
        </div>
        <div className="view-prod-feedback">
          <form onSubmit={(e) => refresh(e)}>
            <p>Feedback of product</p>
            <textarea
              className=""
              placeholder="write a review"
              rows="10"
              cols="40"
              name="prodFeedback"
              value={feedback}
              onChange={takeInput}
            ></textarea>
            <button onClick={sendProdFeedback}>send review</button>
          </form>
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

export default Viewprod;
