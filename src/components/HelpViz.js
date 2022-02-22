import React, { useState } from "react";
import Navbar from "./Navbar";
import YourAccount from "./Youraccount";
import "../style/help.css";
import Modal from "react-modal/lib/components/Modal";
import { Link } from "react-router-dom";
Modal.setAppElement("#root");

const HelpViz = () => {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

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
                    <h3>first modal</h3>
                  </div>
                </div>
              </Modal>
            </p>
          </div>

          <div className="help">
            <p>
              how can i delete order{" "}
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
                    <h3>second modal</h3>
                  </div>
                </div>
              </Modal>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpViz;