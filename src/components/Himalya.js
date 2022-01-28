import { React, useState, useEffect } from "react";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "react-modal/lib/components/Modal";
import { searchProductbyBrand } from "../Data/Services/Oneforall";
Modal.setAppElement("#root");

const Himalya = () => {
  useEffect(() => {
    getProductHimalya();
  }, []);

  const [himalyaProd, setHimalyaprod] = useState([]);

  const getProductHimalya = async () => {
    try {
      const brand = "dabur";
      const response = await searchProductbyBrand(brand);
      console.log("response: ", response);
      setHimalyaprod(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

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
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            {/* array of prod */}
            {himalyaProd.map((item) => {
              return (
                <div className="product">
                  <img src={item.productImage[0]} alt="_img" />
                  <div className="prod-details">
                    <p>{item.productName}</p>

                    <p>{item.productPrice}</p>
                    <p>
                      <button onClick={() => setModalIsOpen(true)}>
                        <i class="fas fa-shopping-cart"></i>
                      </button>
                    </p>
                    <p>
                      <button>
                        <i class="fas fa-heart"></i>
                      </button>
                    </p>
                  </div>
                  <Link to="/viewproduct">
                    <button className="view">view</button>
                  </Link>
                </div>
              );
            })}
          </div>
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

export default Himalya;
