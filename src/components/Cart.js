import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/mycart.css";
import img from "../images/dabur.jpg";
import { deleteFromCart, getMyCart } from "../Data/Services/Oneforall";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { medicineData } from "../Data/Reducers/medicine.reducer";
import { productData } from "../Data/Reducers/product.reducer";
import { Triangle, Rings, Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "react-modal/lib/components/Modal";
Modal.setAppElement("#root");

const Cart = () => {
  useEffect(() => {
    MyCart();
  }, []);

  // -------------------------------------------------------states
  const [myCart, setMyCart] = useState([]);
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

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

  // -------------------------------------------functons
  const MyCart = async () => {
    setModalIsOpen(true);

    const response = await getMyCart(token);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }
    setMyCart(response.data.myCart);
  };

  const removeFromCart = async (_id) => {
    setModalIsOpen(true);

    console.log("_id: ", _id);

    const response = await deleteFromCart(_id, token);
    console.log("response: ", response);
    if (response) {
      setModalIsOpen(false);
    }

    MyCart();
  };

  const viewProduct = (item) => {
    console.log("item: ", item);

    if (item.productName) {
      const {
        availableStatus,
        productBrand,
        productCategory,
        productImage,
        productName,
        productPrice,
      } = item;

      const product = {
        availableStatus,
        productBrand,
        productCategory,
        productImage,
        productName,
        productPrice,
      };
      dispatch(productData({ product }));
    } else if (item.medicineName) {
      dispatch(medicineData({ item }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="mycart">
        <div className="mycart-prods">
          {myCart.map((item) => {
            if (item.product) {
              // console.log("item: ", item.product);
              console.log("item: ", item);

              return (
                <div className="item">
                  <div className="item-detail">
                    <img src={item.product.productImage[0]} alt="_img" />
                    <p>{item.product.productName}</p>
                    <p>{item.product.productPrice}</p>
                    <div className="btn">
                      <Link to="/viewproduct">
                        <button
                          className="cart-btn"
                          onClick={() => viewProduct(item.product)}
                        >
                          view product
                        </button>
                      </Link>
                      <button className="cart-btn">Buy now</button>
                      <button
                        className="cart-btn"
                        onClick={() => removeFromCart(item._id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (item.medicine) {
              // console.log("item.medicine: ", item.medicine);
              console.log("item: ", item);

              return (
                <div className="item">
                  <div className="item-detail">
                    <img src={item.medicine.medicineImage[0]} alt="_img" />
                    <p>{item.medicine.medicineName}</p>
                    <p>{item.medicine.medicinePrice}</p>
                    <div className="btn">
                      <Link to="/medicines/viewmedcines">
                        <button
                          className="cart-btn"
                          onClick={() => viewProduct(item.medicine)}
                        >
                          view product
                        </button>
                      </Link>
                      <button className="cart-btn">Buy now</button>
                      <button
                        className="cart-btn"
                        onClick={() => removeFromCart(item._id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return "";
            }
          })}
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


export default Cart;
