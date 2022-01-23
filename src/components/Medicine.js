import { React, useState } from "react";
import CategoryNav from "./Category.nav";
import "../style/viewmeds.css";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "react-modal/lib/components/Modal";

const Medicine = () => {
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
      <div className="meds">
        <CategoryNav />
        <div className="med-container">
          <div className="search-bar">
            <form>
              <input type="text" placeholder="search medicines" />
              <button className="search">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="list">
            <ul type="none">
              <Link to="/medicines">
                <li>All</li>
              </Link>

              <Link to="/medicines/medicinelist">
                <li>A</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>B</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>C</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>D</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>E</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>F</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>G</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>H</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>I</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>J</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>K</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>L</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>M</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>N</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>O</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>P</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>Q</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>R</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>S</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>T</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>U</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>V</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>W</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>X</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>Y</li>
              </Link>
              <Link to="/medicines/medicinelist">
                <li>Z</li>
              </Link>
            </ul>
          </div>
          {/* all medicines */}
          <div>
            <div className="our-brands">
              <div className="brand-body">
                <div className="brand-child">
                  {/* array of prod */}
                  <div className="product">
                    <img src="" alt="_img" />
                    <div className="prod-details">
                      <p>product name - All med</p>
                      <p>price</p>
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
                </div>
              </div>
            </div>
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

export default Medicine;
