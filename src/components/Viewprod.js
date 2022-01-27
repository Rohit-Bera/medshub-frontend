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
import { useSelector } from "react-redux";

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

  console.log("productImage: ", productImage);

  console.log("productImage: ", productImage.length);

  if (productImage.length === 5) {
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
              <div className="prod-img">
                <img src={productImage[0]} alt="Dabur_img" />

                <img src={productImage[1]} alt="Dettol_img" />

                <img src={productImage[2]} alt="Garnier_img" />

                <img src={productImage[4]} alt="Himalya_img" />

                <img src={productImage[5]} alt="Mamaearth_img" />
              </div>
            </div>
            <div className="prod-detail">
              <section>{productName}</section>
              <section>{productPrice}</section>
              <section>{productPrice}</section>
              <section>{productBrand}</section>
              <section>{productCategory}</section>
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
                <button
                  className="cancel"
                  onClick={() => setModalIsOpen(false)}
                >
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
  } else if (productImage.length === 4) {
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
                  <img src={productImage[0]} alt="_img" id="img1" />
                </div>
                <div className="brand">
                  <img src={productImage[1]} alt="_img" id="img2" />
                </div>
                <div className="brand">
                  <img src={productImage[2]} alt="_img" id="img3" />
                </div>
                <div className="brand">
                  <img src={productImage[3]} alt="_img" id="img4" />
                </div>
              </Carousel>
              <div className="prod-img">
                <img src={productImage[0]} alt="Dabur_img" />

                <img src={productImage[1]} alt="Dettol_img" />

                <img src={productImage[2]} alt="Garnier_img" />

                <img src={productImage[3]} alt="Himalya_img" />
              </div>
            </div>
            <div className="prod-detail">
              <section>{productName}</section>
              <section>{productPrice}</section>
              <section>{productStatus}</section>
              <section>{productBrand}</section>
              <section>{productCategory}</section>
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
                <button
                  className="cancel"
                  onClick={() => setModalIsOpen(false)}
                >
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
  } else if (productImage.length === 3) {
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
                <div className="brand" id="img">
                  <img src={productImage[0]} alt="_img" />
                </div>
                <div className="brand">
                  <img src={productImage[1]} alt="_img" />
                </div>
                <div className="brand">
                  <img src={productImage[2]} alt="_img" />
                </div>
              </Carousel>
              <div className="prod-img">
                <img src={productImage[0]} alt="Dabur_img" />

                <img src={productImage[1]} alt="Dettol_img" />

                <img src={productImage[2]} alt="Garnier_img" />
              </div>
            </div>
            <div className="prod-detail">
              <section>{productName}</section>
              <section>{productPrice}</section>
              <section>{productStatus}</section>
              <section>{productBrand}</section>
              <section>{productCategory}</section>
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
                <button
                  className="cancel"
                  onClick={() => setModalIsOpen(false)}
                >
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
  } else if (productImage.length === 2) {
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
                  <img src={productImage[0]} alt="_img" />
                </div>
                <div className="brand">
                  <img src={productImage[1]} alt="_img" />
                </div>
              </Carousel>
              <div className="prod-img">
                <img src={productImage[0]} alt="Dabur_img" />

                <img src={productImage[1]} alt="Dettol_img" />
              </div>
            </div>
            <div className="prod-detail">
              <section>{productName}</section>
              <section>{productPrice}</section>
              <section>{productStatus}</section>
              <section>{productBrand}</section>
              <section>{productCategory}</section>
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
                <button
                  className="cancel"
                  onClick={() => setModalIsOpen(false)}
                >
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
  }
};

export default Viewprod;
