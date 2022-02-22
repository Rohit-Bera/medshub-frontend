import React, { useState } from "react";
import Navbar from "./Navbar";
import YourAccount from "./Youraccount";
import "../style/help.css";
import Modal from "react-modal/lib/components/Modal";
import { Link } from "react-router-dom";
Modal.setAppElement("#root");

const Help = () => {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [fourModal, setFourModal] = useState(false);
  const [fiveModal, setFiveModal] = useState(false);


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
      <YourAccount />
      <div className="main-help">
        <div className="help-container">
          <div className="help">
            <p>
              how can i place order{" "}
              <button onClick={() => setFirstModal(true)}>
                <i class="fas fa-question"></i>
              </button>
              <Modal isOpen={firstModal} style={customStyles}>
                <div className="help-modal">
                  <div className="help-cross">
                    <button onClick={() => setFirstModal(false)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="help-body">
                    <h3>Firstly explore the product you want to explore after that select 
                      the most suitable outcome as per your needs. Later that click to buy now. 
                      After the click on buy, it will send you to the payment page in this page u  
                      have to fulfill the card details for paying the bill. After all click on the 
                      Pay button, it will place your order.</h3>
                  </div>
                </div>
              </Modal>
            </p>
          </div>

          <div className="help">
            <p>
              how can i cancel order{" "}
              <button onClick={() => setSecondModal(true)}>
                <i class="fas fa-question"></i>
              </button>
              <Modal isOpen={secondModal} style={customStyles}>
                <div className="help-modal">
                  <div className="help-cross">
                    <button onClick={() => setSecondModal(false)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="help-body">
                    <h3>Firstly go in my orders then select the product you want to cancel.
                       After the select the option of canceling the order.
                        In this, you have only 12 hours to cancel the order. 
                        After 12 hours you have to pay the charge to cancel the order or you can't 
                        cancel the order it depends on the store.</h3>
                  </div>
                </div>
              </Modal>
            </p>
          </div>

          <div className="help">
            <p>
              how can i give product feedback{" "}
              <button onClick={() => setThirdModal(true)}>
                <i class="fas fa-question"></i>
              </button>
              <Modal isOpen={thirdModal} style={customStyles}>
                <div className="help-modal">
                  <div className="help-cross">
                    <button onClick={() => setThirdModal(false)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="help-body">
                    <h3>To give feedback on a certain product you buy.
                       You have to select a product that you like to give 
                       your feedback at the end of that product you have a 
                       Report button. If you click the button it will ship 
                       you to the feedback form. In that, you convey your good 
                       or bad feedback regarding the outcome you brought.</h3>
                  </div>
                </div>
              </Modal>
            </p>
          </div>
          <div className="help">
            <p>
              how can i manage wishlist{" "}
              <button onClick={() => setFourModal(true)}>
                <i class="fas fa-question"></i>
              </button>
              <Modal isOpen={fourModal} style={customStyles}>
                <div className="help-modal">
                  <div className="help-cross">
                    <button onClick={() => setFourModal(false)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="help-body">
                    <h3> To handle the wishlist you explore for any product/medicine 
                      from that you like the product if the product/medicine is not 
                      in stock or you want to keep for the future. In product/medicine, 
                      you have a button with Buy Now that is Add to wishlist if you click 
                      the button it will save and you want to see your wishlist go to settings 
                      and click on My Wishlist it shows you all the products you save and in that, 
                      you can remove your product from wishlist by clicking the Remove button</h3>

                  </div>
                </div>
              </Modal>
            </p>
          </div>

          <div className="help">
            <p>
              What is my Order Section{" "}
              <button onClick={() => setFiveModal(true)}>
                <i class="fas fa-question"></i>
              </button>
              <Modal isOpen={fiveModal} style={customStyles}>
                <div className="help-modal">
                  <div className="help-cross">
                    <button onClick={() => setFiveModal(false)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="help-body">
                    <h3>If you want to visit your past brought orders then move to My Account and then choose My Orders. 
                      In this, you can see your earlier ordered products/medicines. And also your current order.</h3>
                  </div>
                </div>
              </Modal>
            </p>
          </div>

         
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
    </>
  );
};

export default Help;
