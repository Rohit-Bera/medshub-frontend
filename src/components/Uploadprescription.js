import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import "../style/Prescription.css";
import Navbar from "./Navbar";
import { Triangle, Rings, Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";
import { uploadPrescriptionApi } from "../Data/Services/Oneforall";
import Footer from "./Footer";
import { toast } from "react-toastify";
Modal.setAppElement("#root");

const Uploadprescription = () => {
  // ================================ states
  const [img, setImg] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();

  const token = useSelector((state) => state.userReducer).token;

  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
  const phone = useSelector((state) => state.userReducer).phoneNumber;

  if (
    name === "" ||
    email === "" ||
    address === "" ||
    phone === "" ||
    token === ""
  ) {
    history.push("/signin");
    toast.info("please login first! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

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

  //   ================================== functions
  const takeInput = (e) => {
    setImg(e.target.files);
  };

  const upload = async () => {
    console.log("img: ", img);

    if (img !== "") {
      setModalIsOpen(true);
      const fd = new FormData();

      for (const key of Object.keys(img)) {
        fd.append("prescriptionImage", img[key]);
      }

      const response = await uploadPrescriptionApi(fd, token);
      console.log("response: ", response);

      if (response) {
        setModalIsOpen(false);
      }

      if (response.status === 200) {
        toast.success("uploaded successfully!", { theme: "colored" });
      } else {
        toast.error("error occured , upload in next 5 seconds");
      }
    } else {
      toast.info("no prescription selected! ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="upload-prescription">
        <div className="background">
          <p>Attach Prescription</p>

          <div className="upload">
            <p>Upload</p>

            <p>Please Attach a valid Prescription.</p>
            <div className="file">
              <i class="fa fa-cloud-upload fa-3x"></i>

              <div className="file">
                <form onSubmit={refresh}>
                  <input
                    type="file"
                    onChange={(e) => takeInput(e)}
                    className="img"
                  />
                  <button onClick={upload}>Upload</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

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

export default Uploadprescription;
