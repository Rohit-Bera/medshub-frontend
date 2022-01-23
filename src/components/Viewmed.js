import { React, useState } from "react";
import "../style/category.css";
import { Link } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";
import "../style/viewmeds.css";

const Viewmed = () => {
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
  return <></>;
};

export default Viewmed;
