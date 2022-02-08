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
  getSearchMedicineApi,
  postMedWishlistApi,
} from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import { medicineData } from "../Data/Reducers/medicine.reducer";
Modal.setAppElement("#root");

const Searchmedicine = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchMed, setSearchMed] = useState("");
  const [length, setLength] = useState();
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
  //
  const takeInput = (e) => {
    setSearchMed(e.target.value);
  };

  //
  const getSearchMed = async () => {
    setModalIsOpen(true);
    try {
      const response = await getSearchMedicineApi(searchMed);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
        setMedicines(response.data.searchmed);
        setLength(response.data.searchmed.length);
        setSearchMed("");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //
  const refresh = (e) => {
    e.preventDefault();
  };
  //

  //
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

  //
  const addToCartMed = async (item) => {
    setModalIsOpen(true);

    const med = { item, token };

    const response = await addtoCartMedicine(med);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }
  };

  const dispatchMed = (med) => {
    console.log("item: ", med);

    const item = med;

    dispatch(medicineData({ item }));
  };

  return (
    <>
      <div className="search-prod">
        <CategoryNav />
        <div className="search-container">
          <div className="search-form">
            <form onSubmit={refresh}>
              <input
                type="text"
                placeholder="search medicine..."
                value={searchMed}
                onChange={takeInput}
              />
              <button onClick={getSearchMed}>
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="searched">
            {/* array of items */}
            {length !== 0 ? (
              medicines.map((item) => {
                console.log("item: ", item);
                return (
                  <div className="item">
                    <div className="item-like">
                      <button onClick={() => addMedtoWishlist(item)}>
                        <i class="fas fa-heart"></i>
                      </button>
                    </div>
                    <div className="item-img">
                      <img src={item.medicineImage[0]} alt="_img" />
                    </div>
                    <div className="item-disc">
                      <p>{item.medicineName}</p>
                      <label>{item.medicinePrice}</label>
                    </div>
                    <div className="item-btn">
                      <Link to="/medicines/viewmedcines">
                        <button onClick={() => dispatchMed(item)}>
                          <i class="far fa-eye"></i>view
                        </button>
                      </Link>

                      <Link>
                        <button>
                          <i class="fas fa-money-check-alt"></i>
                          <label>buy now</label>
                        </button>
                        <Modal></Modal>
                      </Link>

                      <Link>
                        <button onClick={() => addToCartMed(item)}>
                          <i class="fas fa-shopping-cart"></i>
                          <label>add to cart</label>
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ color: "white" }}>medicine not found</div>
            )}
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

export default Searchmedicine;
