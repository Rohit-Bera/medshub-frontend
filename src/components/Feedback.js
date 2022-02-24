import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import { postWebFeedback } from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import "../style/footer.css";

Modal.setAppElement("#root");

const Feedback = () => {
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
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bgcolor footer">
        <div className="feedback">
          <p>Send Your Feedback Here</p>
        </div>
        <div className="text">
          <form onSubmit={(e) => refresh(e)}>
            <div>
              <textarea
                placeholder="place your review"
                name="feedback"
                value={input.feedback}
                onChange={takeInput}
              ></textarea>
              <button onClick={sendWebFeedback}>send</button>
            </div>
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

export default Feedback;
