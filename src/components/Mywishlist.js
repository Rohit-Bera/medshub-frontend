import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../style/Mywishlist.css";
import YourAccount from "./Youraccount";
import himalya from "../images/himalya.jpg";

import { Triangle, Rings, Oval } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../Data/Reducers/product.reducer";
import {
  deleteWishlistApi,
  getmyWishlistApi,
} from "../Data/Services/Oneforall";
import { Link } from "react-router-dom";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Mywishlist = () => {
  useEffect(() => {
    getmyWishlist();
  }, []);

  //   -------------------------------states
  const token = useSelector((state) => state.userReducer).token;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [myList, setMyList] = useState([]);
  const [listLength, setListLength] = useState();

  const dispatch = useDispatch();

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

  //   -------------------------------functions
  const getmyWishlist = async () => {
    setModalIsOpen(true);

    const response = await getmyWishlistApi(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
      setMyList(response.data.list);
      response.data.list
        ? setListLength(response.data.list.length)
        : setListLength();
    }
  };

  const removeFromWishlist = async (item) => {
    // setModalIsOpen(true);
    console.log("item: ", item);
    const { _id } = item;
    const response = await deleteWishlistApi(_id, token);
    console.log("response: ", response);

    if (response.status === 200 && response.data.status === "200") {
      toast.success("item removed!", {
        theme: "colored",
        position: "top-right",
      });
    } else {
      toast.error("something went wrong!", {
        theme: "colored",
        position: "top-right",
      });
    }

    getmyWishlist();
  };

  const dispatchProd = (product) => {
    console.log("product: ", product);

    dispatch(productData({ product }));
  };

  const dispatchMed = (medicine) => {
    dispatch(medicineData({ medicine }));
  };

  return (
    <>
      <YourAccount />
      <div className="your-wishlist">
        <div className="wishlist-items">
          <p style={{ fontSize: "20px" }}>My Wishlist</p>
          {listLength !== 0 ? (
            myList.map((item) => {
              if (item.product) {
                return (
                  <div className="item">
                    <img src={item.product.productImage[0]} alt="product_img" />
                    <p>{item.product.productName}</p>
                    <p>₹{item.product.productPrice}</p>

                    <button onClick={() => dispatchProd(item.product)}>
                      <Link to="/viewproduct">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button onClick={() => removeFromWishlist(item)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                );
              } else if (item.medicine) {
                return (
                  <div className="item">
                    <img src={item.medicine[0]} alt="product_img" />
                    <p>{item.medicine.medicineName}</p>
                    <p>₹{item.medicine.medicinePrice}</p>

                    <button onClick={() => dispatchMed(item.medicine)}>
                      <Link to="/medicines/viewmedcines">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button onClick={() => removeFromWishlist(item)}>
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                );
              }
            })
          ) : (
            <div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "24px", textAlign: "center" }}>
                no items added into wishlist
              </p>
            </div>
          )}
        </div>
        <div className="account-details-nav">
          <div className="details-nav">
            <Link to="/yourAccount/AccountDetails">
              <section>
                <i class="far fa-user-circle " />
                My Account
              </section>
            </Link>
            <Link to="/yourAccount/MyWishlist">
              <section>
                <i class="fas fa-heart margin-main-icon"></i>My Wishlist
              </section>
            </Link>
            <Link to="/yourAccount/myOrders">
              <section>
                <i class="fas fa-clipboard margin-main-icon"></i>My Orders
              </section>
            </Link>
            <Link to="/yourAccount/notification">
              <section>
                <i class="fas fa-bell margin-main-icon"></i>My Notification
              </section>
            </Link>
            <Link to="/yourAccount/myCart">
              <section>
                <i class="fas fa-shopping-cart"></i>My Cart
              </section>
            </Link>
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

export default Mywishlist;
