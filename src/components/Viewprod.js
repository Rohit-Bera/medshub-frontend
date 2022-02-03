import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/viewprod.css";
import Navbar from "./Navbar";
import {
  postProdFeedbackApi,
  postprodWishlistApi,
} from "../Data/Services/Oneforall";
import Modal from "react-modal/lib/components/Modal";
import { Triangle, Rings, Oval } from "react-loader-spinner";

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

  const [feedback, setFeedback] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const token = useSelector((state) => state.userReducer).token;

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
            <section>{productPrice}</section>
            {productStatus ? (
              <p
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                In Stock
              </p>
            ) : (
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Out of Stock
              </p>
            )}
            <section>{productBrand}</section>
            <section>{productCategory}</section>
            <section className="btn">
              <button onClick={() => addMedtoWishlist()}>
                Add to Wishlist
              </button>
              <button>Buy now</button>
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
