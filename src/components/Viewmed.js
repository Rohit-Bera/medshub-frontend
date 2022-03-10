import { React, useState } from "react";
import "../style/category.css";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";
import "../style/viewmeds.css";

//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useSelector, useDispatch } from "react-redux";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import StripCheckout from "react-stripe-checkout";
import Navbar from "./Navbar";
import {
  postMedFeedbackApi,
  postMedWishlistApi,
  placeOrderMedicineApi,
} from "../Data/Services/Oneforall";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Viewmed = () => {
  // ======================================================== states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [medBuyModal, setMedBuyModal] = useState(false); // medicine buy modal
  const [medicineItem, setMedicineItem] = useState(null); // mediicne item state
  const [amount, setAmount] = useState(); // price state

  const token = useSelector((state) => state.userReducer).token;

  const _id = useSelector((state) => state.medicineReducer)._id;
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
  const medicineDescription = useSelector(
    (state) => state.medicineReducer
  ).medicineDescription;

  // =========================================================== functions
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
      _id,
      medicineName,
      medicineImage,
      medicinePrice,
      manufacturerName,
      availableStatus,
    };

    const response = await postMedWishlistApi(_id, item, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("added to wishlist!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else if (response.data.error.code === 400) {
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

  const refresh = (e) => {
    e.preventDefault();
  };

  const takeInput = (e) => {
    setFeedback(e.target.value);
  };

  const postMedFeedback = async () => {
    if (feedback === "") {
      toast.info("no input found! ", {
        theme: "dark",
        position: "bottom-right",
      });
    } else {
      setModalIsOpen(true);
      console.log("feed : ", feedback);

      const medicineId = _id;

      const data = { feedback, medicineId, medicineName };

      const response = await postMedFeedbackApi(data, token);
      console.log("response: ", response);

      if (response) {
        setModalIsOpen(false);
        setFeedback("");
      }

      if (response.status === 200) {
        toast.success("feedback send!", {
          theme: "colored",
          position: "bottom-right",
        });
      } else {
        toast.error("error occured! try sometime later.", {
          theme: "colored",
          position: "bottom-right",
        });
      }
    }
  };

  // take item state of medicine
  const takeMedicineItem = () => {
    const medicine = {
      _id,
      medicineName,
      medicinePrice,
      medicineImage,
      manufacturerName,
      availableStatus,
    };
    console.log("medicine item: ", medicine);

    setMedicineItem(medicine);
    setAmount(medicinePrice);
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
              {medicineImage.map((img) => {
                return (
                  <div className="brand" id="img1">
                    <img src={img} alt="_img" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="prod-detail">
            <section>{medicineName}</section>
            <section> ₹{medicinePrice}</section>
            <section>
              {availableStatus ? (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
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
            <section>{manufacturerName}</section>
            <section style={{ width: "40vw" }}>{medicineDescription}</section>
            <section className="btn">
              <button onClick={() => addMedtoWishlist()}>
                Add to Wishlist
              </button>
              <button
                onClick={() => {
                  setMedBuyModal(true);
                  takeMedicineItem();
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
            </section>
          </div>
        </div>
        <div className="view-prod-feedback">
          <form onSubmit={(e) => refresh(e)}>
            <p>Feedback of product</p>
            <textarea
              className=""
              placeholder="write a review"
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
