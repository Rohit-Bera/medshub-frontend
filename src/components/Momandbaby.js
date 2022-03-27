import { React, useState, useEffect } from "react";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "react-modal/lib/components/Modal";
import {
  searchProductbyBrand,
  addToCartProduct,
  postprodWishlistApi,
  searchProductbyCategory,
  placeOrderProductApi,
} from "../Data/Services/Oneforall";
import { Triangle, Rings, Oval } from "react-loader-spinner";
import StripCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../Data/Reducers/product.reducer";
import { toast } from "react-toastify";

Modal.setAppElement("#root");
const Momandbaby = () => {
  useEffect(() => {
    getProduct();
  }, []);

  // ========================================================states
  const [Products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [prodBuyModal, setProdBuyModal] = useState(false); // product buy modal
  const [productItem, setProductItem] = useState(null); // product item state
  const [amount, setAmount] = useState(); // price state

  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.userReducer).token;

  const getProduct = async () => {
    try {
      setModalIsOpen(true);
      const category = "mom baby";
      const response = await searchProductbyCategory(category);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
        setProducts(response.data.found.searchpro);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const dispatchProd = (product) => {
    console.log("product: ", product);

    dispatch(productData({ product }));
  };

  const addToWishlist = async (item) => {
    setModalIsOpen(true);
    console.log("item id: ", item._id);
    const _id = item._id;

    const response = await postprodWishlistApi(_id, item, token);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("added to wishlist!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else if (response.data.error.code === 400) {
      toast.info("already exist in wishlist!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  const addToCartProd = async (item) => {
    setModalIsOpen(true);
    console.log("product: ", item._id);

    if (token === "") {
      history.push("/signin");
    }

    const prod = { item, token };
    const response = await addToCartProduct(prod);
    console.log("response: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("added to cart!", {
        position: "top-right",
        theme: "dark",
      });
    } else if (response.data.error.code === 400) {
      toast.info("already exist in cart!", {
        position: "bottom-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  // take item state of product
  const takeProductItem = (item) => {
    console.log("product item: ", item);
    setProductItem(item);
    setAmount(item.productPrice);
  };

  // place order for product
  const placeOrderProduct = async () => {
    setModalIsOpen(true);
    console.log("productItem : ", productItem);

    const response = await placeOrderProductApi(productItem, token);
    console.log("response place order: ", response);

    if (response) {
      setModalIsOpen(false);
    }

    if (response.status === 200 && response.data.status === "200") {
      toast.success("order placed!", {
        position: "top-right",
        theme: "dark",
      });
    } else {
      toast.error("error occured! try again later", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  // payment for product
  const makePaymentProduct = async (token) => {
    console.log("product Item : ", productItem);

    const { productName, productPrice } = productItem;
    const price = productPrice;
    const name = productName;

    const item = { name, price };

    const body = {
      token,
      item,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return await fetch(`http://localhost:5500/paymentStripe`, {
      method: "Post",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response", response);
        const { status } = response;
        console.log("Status", status);
        if (status === 200) {
          placeOrderProduct();
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

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

  return (
    <>
      <div className="search-prod">
        <CategoryNav />
        <div className="search-container">
          <p>Mom and Babies</p>
          <div className="searched">
            {/* array of items */}
            {Products.map((item) => {
              console.log("item: ", item);
              return (
                <div className="item">
                  <div className="item-like">
                    <button onClick={() => addToWishlist(item)}>
                      <i class="fas fa-heart"></i>
                    </button>
                  </div>
                  <div className="item-img">
                    <img src={item.productImage[0]} alt="_img" />
                  </div>
                  <div className="item-disc">
                    <p>{item.productName}</p>
                    <label>₹{item.productPrice}</label>
                  </div>
                  <div className="item-btn">
                    <Link to="/viewproduct">
                      <button onClick={() => dispatchProd(item)}>
                        <i class="far fa-eye"></i>view
                      </button>
                    </Link>

                    <button
                      onClick={() => {
                        setProdBuyModal(true);
                        takeProductItem(item);
                      }}
                    >
                      <i class="fas fa-money-check-alt"></i>
                      Buy Now
                    </button>
                    <Modal isOpen={prodBuyModal} style={customStyles}>
                      <div className="buy-modal-conatiner">
                        <div className="buy-modal-cancel">
                          <button onClick={() => setProdBuyModal(false)}>
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="buy-modal-body">
                          <p>
                            Are you sure <br />
                            you want to buy now?
                          </p>
                        </div>
                        <div className="buy-modal-btn">
                          <button
                            className="no"
                            onClick={() => setProdBuyModal(false)}
                          >
                            cancel
                          </button>

                          <StripCheckout
                            stripeKey="pk_test_51K9BzESJxF1xgWl3hAPFSmTRUHtri2Vb2QmboXnSvvdcD0XaNuqwiUmdDJIwZ10VYHCdJskzHLJoERsFQS5mmUWD00leevPB9M"
                            token={makePaymentProduct}
                            name="Make Payment"
                            shippingAddress
                            billingAddress
                          >
                            <button
                              class="btn btn-md bg-warning"
                              className="yes"
                              onClick={() => {
                                setProdBuyModal(false);
                                // makePayment();
                              }}
                            >
                              pay ₹{amount}
                            </button>
                          </StripCheckout>
                        </div>
                      </div>
                    </Modal>

                    <button onClick={() => addToCartProd(item)}>
                      <i class="fas fa-shopping-cart"></i>
                      <label>add to cart</label>
                    </button>
                  </div>
                </div>
              );
            })}
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

export default Momandbaby;
