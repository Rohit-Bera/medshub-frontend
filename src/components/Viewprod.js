import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/viewprod.css";
import Navbar from "./Navbar";

import dabur from "../images/dabur.jpg";
import dettol from "../images/dettol.jpg";
import garnier from "../images/garnier.jpg";
import himalya from "../images/himalya.jpg";
import mamaearth from "../images/mamaearth.jpg";

//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Modal from "react-modal/lib/components/Modal";

Modal.setAppElement("#root");

const Viewprod = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
              <div className="brand">
                <img src={dabur} alt="_img" />
              </div>
              <div className="brand">
                <img src={dettol} alt="_img" />
              </div>
              <div className="brand">
                <img src={garnier} alt="_img" />
              </div>
              <div className="brand">
                <img src={himalya} alt="_img" />
              </div>
              <div className="brand">
                <img src={mamaearth} alt="_img" />
              </div>
            </Carousel>
            <div className="prod-img">
              <NavLink to="">
                <img src={dabur} alt="Dabur_img" />
              </NavLink>
              <NavLink to="">
                <img src={dettol} alt="Dettol_img" />
              </NavLink>
              <NavLink to="">
                <img src={garnier} alt="Garnier_img" />
              </NavLink>
              <NavLink to="">
                <img src={himalya} alt="Himalya_img" />
              </NavLink>
              <NavLink to="">
                <img src={mamaearth} alt="Mamaearth_img" />
              </NavLink>
            </div>
          </div>
          <div className="prod-detail">
            <section>Product Name</section>
            <section>Product Price</section>
            <section>Status (in stock)</section>
            <section>Brand</section>
            <section>Category</section>
            <section className="btn">
              <button>Add to Wishlist</button>
              <button onClick={() => setModalIsOpen(true)}>Buy now</button>
            </section>
          </div>
        </div>
        <div className="view-prod-feedback">
          <p>Feedback of product</p>
          <textarea
            className=""
            placeholder="write a review"
            rows="10"
            cols="40"
          ></textarea>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="modalbackground">
          <div className="modalcontainer">
            <div className="closebutton">
              <button className="cancel" onClick={() => setModalIsOpen(false)}>
                X
              </button>
            </div>
            <div className="body">
              Are You Sure <br />
              You Want to Place Order ?
            </div>
            <div className="modalbutton">
              <button className="no" onClick={() => setModalIsOpen(false)}>
                Cancel
              </button>
              <button className="yes">Continue</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Viewprod;
