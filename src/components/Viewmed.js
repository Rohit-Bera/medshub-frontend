import { React, useState } from "react";
import "../style/category.css";
import { Link } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";
import "../style/viewmeds.css";

//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useSelector } from "react-redux";
import { Triangle, Rings, Oval } from "react-loader-spinner";

import Navbar from "./Navbar";
import {
  postMedFeedbackApi,
  postMedWishlistApi,
} from "../Data/Services/Oneforall";
Modal.setAppElement("#root");

const Viewmed = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const token = useSelector((state) => state.userReducer).token;

  const med_id = useSelector((state) => state.medicineReducer)._id;
  const medicineName = useSelector(
    (state) => state.medicineReducer
  ).medicineName;
  const medicineImage = useSelector(
    (state) => state.medicineReducer
  ).medicineImage;
  const medicinePrice = useSelector(
    (state) => state.medicineReducer
  ).medicinePrice;
  const manufacturerName = useSelector(
    (state) => state.medicineReducer
  ).manufacturerName;
  const availableStatus = useSelector(
    (state) => state.medicineReducer
  ).availableStatus;

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

  const addMedtoWishlist = async () => {
    setModalIsOpen(true);
    const item = {
      med_id,
      medicineName,
      medicineImage,
      medicinePrice,
      manufacturerName,
      availableStatus,
    };

    const response = await postMedWishlistApi(med_id, item, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  const takeInput = (e) => {
    setFeedback(e.target.value);
  };

  const postMedFeedback = async () => {
    setModalIsOpen(true);
    console.log("feed : ", feedback);

    const medicineId = med_id;

    const data = { feedback, medicineId, medicineName };

    const response = await postMedFeedbackApi(data, token);
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
                <img src={medicineImage[0]} alt="_img" />
              </div>
              <div className="brand" id="img2">
                <img src={medicineImage[1]} alt="_img" />
              </div>
              <div className="brand" id="img3">
                <img src={medicineImage[2]} alt="_img" />
              </div>
              <div className="brand" id="img4">
                <img src={medicineImage[4]} alt="_img" />
              </div>
              <div className="brand" id="img5">
                <img src={medicineImage[5]} alt="_img" />
              </div>
            </Carousel>
          </div>
          <div className="prod-detail">
            <section>Medicine name : {medicineName}</section>
            <section>Medicine Price : {medicinePrice}</section>
            <section>
              {availableStatus ? (
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
            </section>
            <section>manufacturerName : {manufacturerName}</section>
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
              name="feedback"
              onChange={takeInput}
            ></textarea>
            <button onClick={postMedFeedback}>review</button>
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

export default Viewmed;
