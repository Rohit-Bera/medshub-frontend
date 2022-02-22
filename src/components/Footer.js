import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import { postWebFeedback } from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import "../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [input, setInput] = useState({
    feedback: "",
  });
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

  const takeInput = (e) => {
    const value = e.target.value;

    setInput({ feedback: value });
  };

  const sendWebFeedback = async () => {
    setModalIsOpen(true);

    console.log("feedback: ", input.feedback);

    const response = await postWebFeedback(input, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);

      setInput({ feedback: "" });
    }
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer-container">
      <div className="footer-elements">
        <div className="footer-column">
          <div className="feedback">
            <p>Send Your Feedback Here</p>

            <form onSubmit={(e) => refresh(e)}>
              <textarea
                placeholder="place your review"
                name="feedback"
                value={input.feedback}
                onChange={takeInput}
              ></textarea>
              <button onClick={sendWebFeedback}>send</button>
            </form>
          </div>
        </div>
        <div className="footer-column">
          <p>Products</p>
          <Link to="/productCategories/ourBrands">
            <p>Our Brands</p>
          </Link>
          <Link to="/productCategories/Beautyproducts">
            <p>Beauty Products</p>
          </Link>
          <Link to="/productCategories/Men'sgrooming">
            <p>Men's Grooming </p>
          </Link>
          <Link to="/searchproducts">
            <p>Search Product</p>
          </Link>
        </div>
        <div className="footer-column">
          <Link to="/productCategories/covid-essentials">
            <p>Covid Essentials</p>
          </Link>
          <Link to="/productCategories/momandbabies">
            <p>Mom and Baby Products</p>
          </Link>
          <Link to="/productCategories/Brandproducts/fitness">
            <p> Fitness</p>
          </Link>
          <Link to="/productCategories/devices">
            <p>Health Devices</p>
          </Link>
        </div>
        <div className="footer-column">
          <Link to="/medicines">
            <p>Medicines</p>
          </Link>
          <Link to="/searchmedicines">
            <p>Search Medicines</p>
          </Link>
        </div>
        <div className="footer-column">
          <Link to="/uploadprescription">
            <p>Upload Prescription</p>
          </Link>
        </div>
        <div className="footer-column">
          <Link to="/about">
            <p>About us</p>
          </Link>
          <Link to="/help">
            <p>Help</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
