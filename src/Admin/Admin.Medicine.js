import React from "react";
import "./style/Medicine.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  addMedicineApi,
  getallMedicineApi,
  deleteMedicineApi,
  updateMedicineApi,
} from "../Data/Services/Oneforall";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal/lib/components/Modal";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");

const Medicine = () => {
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
  //add medicine  state
  const [meds, setMeds] = useState({
    medicineName: "",
    medicinePrice: null,
    manufacturerName: "",
    medicineCategory: "",
    medicineId: "",
    medicineDescription: "",
  });
  //add image state
  const [Img, setImg] = useState({
    medicineImage: [],
  });
  //add status state
  const [status, setStatus] = useState({
    availableStatus: "",
  });
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

  //effect
  useEffect(() => {
    getMedicine();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  //getallmedicine state
  const [allMedicine, setAllMedicine] = useState([]);

  //add data
  const inputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeds({ ...meds, [name]: value });
  };
  //add img
  const inputImg = (e) => {
    setImg({ medicineImage: e.target.files });
  };
  //aadd availableStatus
  const inputStatus = (e) => {
    setStatus({ availableStatus: e.target.checked });
  };
  //refresh
  const refresh = (e) => {
    e.preventDefault();
  };
  //get all medicine
  const getMedicine = async () => {
    setModalIsOpen(true);
    try {
      // const url = "https://medshub-backend.herokuapp.com/getMedicine";
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await getallMedicineApi(headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      setAllMedicine(response.data.medicines);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  //add medicine api
  const addMedicine = async () => {
    setModalIsOpen(true);
    try {
      const {
        medicineName,
        medicinePrice,
        manufacturerName,
        medicineCategory,
        medicineDescription,
      } = meds;
      // console.log('meds: ', meds);
      const { medicineImage } = Img;
      // console.log('Img: ', Img);
      const { availableStatus } = status;
      // console.log('status: ', status);

      const data = {
        medicineName,
        medicinePrice,
        manufacturerName,
        medicineImage,
        availableStatus,
        medicineCategory,
        medicineDescription,
      };
      console.log("data: ", data);

      const fd = new FormData();
      fd.append("medicineName", medicineName);
      fd.append("medicinePrice", medicinePrice);
      fd.append("manufacturerName", manufacturerName);
      fd.append("availableStatus", availableStatus);
      fd.append("medicineCategory", medicineCategory);
      fd.append("medicineDescription", medicineDescription);

      for (const key of Object.keys(medicineImage)) {
        fd.append("medicineImage", medicineImage[key]);
      }
      // const url = "https://localhost:5500/addMedicine";
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const result = await addMedicineApi(fd, headers);
      console.log("result: ", result);
      if (result) {
        setModalIsOpen(false);
      }
      if (result.data.errors) {
        toast.error("Medicine is not added!");
      } else {
        toast.success("Medicine added Succesfully!");
      }
      getMedicine();
      setStatus({ availableStatus: false });
      setMeds({
        medicineName: "",
        medicinePrice: "",
        manufacturerName: "",
        medicineCategory: "",
        medicineDescription: "",
      });
    } catch (error) {
      console.log("error: ", error.response);
    }
  };
  //delete medicine api
  const deleteMedicine = async (item) => {
    setModalIsOpen(true);
    try {
      const { _id } = item;
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await deleteMedicineApi(headers, _id);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      if (response.data.status === "200") {
        toast.success("Medicne Deleted Successfully!");
      } else {
        toast.error("Medicine is not Deleted!");
      }

      getMedicine();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  //edit medicine data
  const editMedicine = async (item) => {
    setMeds({
      ...meds,

      medicineName: item.medicineName,
      medicinePrice: item.medicinePrice,
      manufacturerName: item.manufacturerName,
      medicineCategory: item.medicineCategory,
      medicineDescription: item.medicineDescription,
      medicineId: item._id,
    });
    setStatus({
      ...status,

      availableStatus: item.availableStatus,
    });
    setImg({
      ...Img,
      medicineImage: item.medicineImage,
    });
  };
  //upadte medicine
  const updateMedicine = async () => {
    setModalIsOpen(true);
    console.log("meds: ", meds);
    console.log("status: ", status);
    console.log("Img: ", Img);
    // console.log(medsId);
    try {
      const {
        medicineName,
        medicinePrice,
        manufacturerName,
        medicineCategory,
        medicineDescription,
      } = meds;
      const { availableStatus } = status;
      const { medicineImage } = Img;
      const _id = meds.medicineId;
      const fd = new FormData();
      fd.append("medicineName", medicineName);
      fd.append("medicinePrice", medicinePrice);
      fd.append("manufacturerName", manufacturerName);
      fd.append("availableStatus", availableStatus);
      fd.append("medicineCategory", medicineCategory);
      fd.append("medicineDescription", medicineDescription);

      for (const key of Object.keys(medicineImage)) {
        fd.append("medicineImage", medicineImage[key]);
      }
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await updateMedicineApi(_id, fd, headers);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      if (response.data.status === "200") {
        toast.success("Medicne Updated Successfully!");
      } else {
        toast.error("Medicine is not Updated!");
      }
      getMedicine();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-main-medicine">
        <p className="p-medicine-admin">Add Medicine</p>
        <hr style={{ color: "black", border: "2px solid" }}></hr>
        <form className="main-admin-medicine" onSubmit={refresh}>
          <div className="form-flex-Medadmin">
            <div>
              <p>Medicine Name</p>
              <input
                type="text"
                placeholder="Enter Medicine Name"
                className="input-medicine-admin"
                name="medicineName"
                value={meds.medicineName}
                onChange={inputData}
              />
              <br></br>
              <p>Medicine Price</p>
              <input
                type="text"
                placeholder="Medicine price"
                min="0"
                className="input-medicine-admin"
                name="medicinePrice"
                value={meds.medicinePrice}
                onChange={inputData}
              />
              <br></br>
              <p>Manufacturer Name</p>
              <input
                type="text"
                placeholder="Manufacturer Name"
                className="input-medicine-admin"
                name="manufacturerName"
                value={meds.manufacturerName}
                onChange={inputData}
              />
              <br></br>
              <p>Medicine Category</p>
              <input
                type="text"
                placeholder="Medicine Category"
                className="input-medicine-admin"
                name="medicineCategory"
                value={meds.medicineCategory}
                onChange={inputData}
              />
              <br></br>
              <p>Medicine Description</p>
              <input
                type="text"
                placeholder="Medicine Description"
                className="input-medicine-admin"
                name="medicineDescription"
                value={meds.medicineDescription}
                onChange={inputData}
              />
              <br></br>
            </div>
            <div>
              <div className="upload-btn-wrapper-medicine">
                <btn className="btn-admin-medicine">
                  <i
                    class="fas fa-cloud-upload-alt"
                    style={{ marginTop: "100px" }}
                  ></i>
                </btn>
                <input
                  type="file"
                  multiple
                  name="medicineImage"
                  onChange={inputImg}
                />
                <br></br>
                <br></br>
              </div>
              <br></br>
              <div className="upload-image-button-medicine">
                <button className="btn2-admin-medicine">
                  UPLOAD MEDICINE IMAGE
                </button>
              </div>
              <br></br>
              <input
                type="checkbox"
                name="availableStatus"
                checked={status.availableStatus}
                onChange={inputStatus}
                className="largeCheckbov-medicine-admin"
              />
              medicine is in stock<br></br>
              <br></br>
            </div>
          </div>
          <br></br>
          <div className="form-flex-Medadmin">
            <button
              className="button-admin-medicine"
              onClick={() => addMedicine()}
            >
              Add medicine
            </button>
            <button
              className="button-admin-medicine"
              onClick={() => updateMedicine()}
            >
              update
            </button>
          </div>
        </form>
      </div>
      <table cellPadding="10px" className="table-medicine ">
        <tr className="border-tr-medicine table-title-medicine">
          <td>Medicine Image</td>
          <td>Medicine Name</td>
          <td>Medicine Price</td>
          <td>Manufacturer Name</td>
          <td>Medicine Category</td>
          <td>Medicine Description</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {allMedicine.map((item) => {
          //  console.log('item: ', item);
          //  if(item.availableStatus === true){
          return (
            <tr className="border-tr-medicine" data-aos="zoom-in-down">
              <td>
                <img
                  src={item.medicineImage[0]}
                  style={{ height: "15vh", width: "10vw" }}
                  alt="noImage"
                />
              </td>
              <td>
                <p>{item.medicineName}</p>
              </td>
              <td>
                <p>{item.medicinePrice}</p>
              </td>
              <td>
                <p>{item.manufacturerName}</p>
              </td>
              <td>
                <p>{item.medicineCategory}</p>
              </td>
              <td>
                <p>{item.medicineDescription}</p>
              </td>
              <td>
                {item.availableStatus ? (
                  <p
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "5px",
                    }}
                  >
                    In Stock
                  </p>
                ) : (
                  <p
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px",
                    }}
                  >
                    Out of stock
                  </p>
                )}
              </td>
              <td>
                <button
                  title="update"
                  onClick={() => editMedicine(item)}
                  className="btn-updateDelte-medicine"
                >
                  <i class="fas fa-edit"></i>
                </button>
              </td>
              <td>
                <button
                  title="delete"
                  onClick={() => deleteMedicine(item)}
                  className="btn-updateDelte-medicine"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          );
          //  }
        })}
      </table>

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
          <Triangle color="black" height={100} width={100} />
        </div>
      </Modal>
    </div>
  );
};

export default Medicine;
