import React from "react";
import "./style/Prescription.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal/lib/components/Modal";
import {
  deletePrescriptionApi,
  getPrescriptionApi,
  updatePrescriptionApi,
} from "../Data/Services/Oneforall";
import cx from "classnames";
import Aos from "aos";
import "aos/dist/aos.css";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");

const Prescription = ({ rounded = false }) => {
  const history = useHistory();

  const token = useSelector((state) => state.adminReducer).token;
  const name = useSelector((state) => state.adminReducer).name;
  const email = useSelector((state) => state.adminReducer).email;
  const address = useSelector((state) => state.adminReducer).address;
  const phone = useSelector((state) => state.adminReducer).phoneNumber;

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

  const [viewModal, setViewModal] = useState(false);
  const [ordermodalIsOpen, setOrederModel] = useState(false);
  const [allPrescription, setAllPrescription] = useState([]);
  const [modImg, setModImg] = useState("");
  const [status, setStatus] = useState({
    prescriptionStatus: false,
    prescriptionId: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles2 = {
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

  const viewStyle = {
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

  useEffect(() => {
    getPrescription();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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

  const getPrescription = async () => {
    setModalIsOpen(true);
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await getPrescriptionApi(headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      setAllPrescription(response.data.allPrescription);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  //edit prescription
  const acceptPrescription = async (item) => {
    console.log("item: ", item);
    setStatus({
      ...status,

      prescriptionStatus: true,
      prescriptionId: item._id,
    });
    console.log("status: ", status);
  };
  //update Prescription
  const updatePrescription = async () => {
    setModalIsOpen(true);
    try {
      const { prescriptionStatus, prescriptionId } = status;
      console.log("status: ", status);
      const _id = prescriptionId;
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await updatePrescriptionApi(_id, status, headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      if (response === undefined) {
        toast.success("Accepted!");
      } else {
        toast.error("something went wrong");
      }
      getPrescription();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // delete Prescription
  const deletePrescription = async (id) => {
    setModalIsOpen(true);
    console.log("id: ", id);

    const response = await deletePrescriptionApi(id, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.result.data.status === "200") {
      toast.success(" prescription deleted 👍");
    } else {
      toast.error("something went wrong!");
    }
    getPrescription();
  };

  const sildercx = cx("span-admin-order", {
    rounded: rounded,
  });
  return (
    <div>
      <Navbar />
      <p className="p-prescription-admin">All Prescription</p>
      <table cellPadding="10px" className="table-order">
        <tr className="border-tr-prescription table-title-prescription">
          <td>prescription Image</td>
          <td>Prescription Id</td>
          <td>Owner Name</td>
          <td>Owner Address</td>
          <td>Owner Phone No.</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {allPrescription.map((item) => {
          if (item.prescriptionStatus === false) {
            return (
              <tr
                className="border-tr-prescription"
                style={{ borderBottom: "2px solid black" }}
              >
                <td>
                  <div>
                    {" "}
                    <img
                      src={item.prescriptionImage}
                      style={{ height: "15vh", width: "10vw" }}
                      alt="noImage"
                    />
                  </div>
                </td>
                <td>
                  <p>{item._id}</p>
                </td>
                <td>
                  <p>{item.owner.name}</p>
                </td>
                <td>
                  <p>{item.owner.address}</p>
                </td>
                <td>
                  <p>{item.owner.phoneNumber}</p>
                </td>
                <td>
                  {" "}
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="deliverystatus"
                      className="input-admin-order"
                      onClick={() => acceptPrescription(item)}
                    ></input>
                    <span className={sildercx}></span>
                  </label>
                </td>
                <td>
                  <button
                    className="button-admin-prescription"
                    onClick={() => {
                      setViewModal(true);
                      setModImg(item.prescriptionImage);
                    }}
                  >
                    <i class="fas fa-eye"></i>
                  </button>

                  <Modal isOpen={viewModal} style={viewStyle}>
                    <div
                      className="mod-cross"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "3%",
                      }}
                    >
                      <button onClick={() => setViewModal(false)}>
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="mod-img">
                      <img
                        src={modImg}
                        style={{ width: "50vw", height: "80vh" }}
                      />
                    </div>
                  </Modal>
                </td>

                <td>
                  <button
                    className="button-admin-prescription"
                    onClick={() => updatePrescription()}
                  >
                    <i class="fas fa-check"></i>
                  </button>
                </td>

                <td>
                  <button
                    className="button-admin-prescription"
                    onClick={() => deletePrescription(item._id)}
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </td>
                <td></td>
              </tr>
            );
          }
        })}
      </table>
      <Modal
        isOpen={ordermodalIsOpen}
        onRequestClose={() => setOrederModel(false)}
        style={customStyles}
      >
        <div className="modalbackground">
          <div className="modalcontainer">
            <div className="closebutton">
              <button className="cancel" onClick={() => setOrederModel(false)}>
                X
              </button>
            </div>
            <div className="body">
              Are You Sure <br />
              You Want to accept prescription ?
            </div>
            <div className="modalbutton">
              <button className="no" onClick={() => setOrederModel(false)}>
                Cancel
              </button>
              <button className="yes">Continue</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={() => setModalIsOpen(false)}
        style={customStyles2}
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
          <Triangle color="black" height={100} width={100} />
        </div>
      </Modal>
    </div>
  );
};
export default Prescription;
