import { React, useState, useEffect } from "react";
import CategoryNav from "./Category.nav";
import "../style/viewmeds.css";
import "../style/category.css";

import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "react-modal/lib/components/Modal";
import {
  addtoCartMedicine,
  getMedicinesApi,
  postMedWishlistApi,
} from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import { medicineData } from "../Data/Reducers/medicine.reducer";
Modal.setAppElement("#root");

const Medicine = () => {
  useEffect(() => {
    getMedicine();
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [medicines, setMedicines] = useState([]);

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
  const token = useSelector((state) => state.userReducer).token;

  const dispatch = useDispatch();

  const getMedicine = async () => {
    setModalIsOpen(true);
    try {
      const response = await getMedicinesApi();
      // console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      setMedicines(response.data.medicines);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const viewMeds = (item) => {
    console.log("item: ", item);

    dispatch(medicineData({ item }));
  };

  const addMedtoWishlist = async (item) => {
    setModalIsOpen(true);
    console.log("item: ", item);
    console.log("_id: ", item._id);

    const response = await postMedWishlistApi(item._id, item, token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }
  };

  const addToCartMed = async (item) => {
    setModalIsOpen(true);

    const med = { item, token };

    const response = await addtoCartMedicine(med);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="meds">
        <CategoryNav />
        <div className="med-container">
          {/* all medicines */}
          <div>
            <div className="our-brands">
              <div className="brand-body">
                <div className="brand-child">
                  {console.log("meds : ", medicines)}
                  {medicines.map((item) => {
                    console.log("item: ", item.medicineImage[0]);

                    return (
                      <div className="product">
                        <img src={item.medicineImage[0]} alt="_img" />
                        <div className="prod-details">
                          <p>{item.medicineName}</p>
                          <p>{item.medicinePrice}</p>
                          <p>
                            <button onClick={() => addToCartMed(item)}>
                              <i class="fas fa-shopping-cart"></i>
                            </button>
                          </p>
                          <p>
                            <button onClick={() => addMedtoWishlist(item)}>
                              <i class="fas fa-heart"></i>
                            </button>
                          </p>
                        </div>
                        <Link to="/medicines/viewmedcines">
                          <button
                            className="view"
                            onClick={() => viewMeds(item)}
                          >
                            view
                          </button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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

export default Medicine;
