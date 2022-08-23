import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/Myorder.css";
import YourAccount from "./Youraccount";
import himalya from "../images/himalya.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import Modal from "react-modal/lib/components/Modal";
import {
  getmyOrderApi,
  postProblemFeedbackApi,
} from "../Data/Services/Oneforall";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import { productData } from "../Data/Reducers/product.reducer";
import { toast } from "react-toastify";
Modal.setAppElement("#root");

const Myorder = () => {
  // ---------------------------------states

  useEffect(() => {
    myOrder();
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
      color: "black",
    },
  };
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [count, setCount] = useState(0);
  const [myorders, setMyOrders] = useState([]);
  const [prodModal, setProdModal] = useState(false);
  const [medModal, setMedModal] = useState(false);
  const [length, setOrderLentgh] = useState();
  const [reportItem, setReportitem] = useState({
    itemId: "",
    orderId: "",
    itemName: "",
  });
  const [problem, setProblem] = useState("");

  const dispatch = useDispatch();

  const token = useSelector((state) => state.userReducer).token;

  // ---------------------------------functions
  const myOrder = async () => {
    setModalIsOpen(true);

    const response = await getmyOrderApi(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
      const delievered = response.data.myOrder.filter(
        (i) => i.deliverystatus === true
      );
      setMyOrders(delievered);
      console.log("delievered: ", delievered);
      setOrderLentgh(delievered.length);
    }
  };

  const refresh = (e) => {
    e.preventDefault();
  };

  const takeInput = (item) => {
    console.log("item: ", item);
    if (item.product) {
      setReportitem({
        itemId: item.product._id,
        orderId: item._id,
        itemName: item.product.productName,
      });
    } else {
      setReportitem({
        itemId: item.medicine._id,
        orderId: item._id,
        itemName: item.medicine.medicineName,
      });
    }
  };

  const changeInput = (e) => {
    setProblem(e.target.value);
  };

  const reportProblem = async () => {
    setModalIsOpen(true);
    console.log("report item :", reportItem);
    console.log("probblem : ", problem);

    const { itemId, orderId, itemName } = reportItem;
    const data = { itemId, orderId, itemName, problem };

    const response = await postProblemFeedbackApi(data, token);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }
    if (response.status === 200 && response.data.status === "200") {
      toast.success("problem reported ", {
        theme: "colored",
        position: "top-right",
      });
    } else {
      toast.error("something went wrong , Try again later!", {
        theme: "colored",
        position: "top-right",
      });
    }
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
          <p style={{ fontSize: "20px" }}>My Orders</p>
          {length !== 0 ? (
            myorders.map((item) => {
              if (item.product && item.deliverystatus == true) {
                return (
                  <div className="item">
                    <img src={item.product.productImage[0]} alt="product_img" />
                    <p>{item.product.productName}</p>
                    <p>₹{item.product.productPrice}</p>

                    <button
                      title="view"
                      onClick={() => dispatchProd(item.product)}
                    >
                      <Link to="/viewproduct">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button
                      title="cancel"
                      className="report"
                      onClick={() => {
                        setProdModal(true);
                        takeInput(item);
                      }}
                    >
                      report problem
                    </button>
                    <Modal isOpen={prodModal} style={customStyles}>
                      <div className="modal">
                        <div className="modal-cancel">
                          <button onClick={() => setProdModal(false)}>
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h3>
                            report problem about <br /> product :{" "}
                            {reportItem.itemId}
                          </h3>
                          <form onClick={refresh}>
                            <input type="text" onChange={changeInput} />
                            <button
                              onClick={() => {
                                setProdModal(false);
                                reportProblem();
                              }}
                            >
                              send
                            </button>
                          </form>
                        </div>
                      </div>
                    </Modal>
                  </div>
                );
              } else if (item.medicine && item.deliverystatus == true) {
                return (
                  <div className="item">
                    <img src={item.medicine[0]} alt="product_img" />
                    <p>{item.medicine.medicineName}</p>
                    <p>₹{item.medicine.medicinePrice}</p>

                    <button
                      title="view"
                      onClick={() => dispatchMed(item.medicine)}
                    >
                      <Link to="/medicines/viewmedcines">
                        <i class="fas fa-eye"></i>
                      </Link>
                    </button>

                    <button
                      title="cancel"
                      className="report"
                      onClick={() => {
                        setMedModal(true);
                        takeInput(item);
                      }}
                    >
                      report problem
                    </button>
                    <Modal isOpen={medModal} style={customStyles}>
                      <div className="modal">
                        <div className="modal-cancel">
                          <button onClick={() => setMedModal(false)}>
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h3>
                            report problem about medicine : {reportItem.itemId}
                          </h3>
                          <form onClick={refresh}>
                            <input type="text" onChange={changeInput} />
                            <button
                              onClick={() => {
                                setMedModal(false);
                                reportProblem();
                              }}
                            >
                              send
                            </button>
                          </form>
                        </div>
                      </div>
                    </Modal>
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
                no orders placed yet. <br /> Order History is empty!
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

export default Myorder;
