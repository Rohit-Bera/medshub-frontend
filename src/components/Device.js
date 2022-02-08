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
} from "../Data/Services/Oneforall";
import { Triangle, Rings, Oval } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { productData } from "../Data/Reducers/product.reducer";

Modal.setAppElement("#root");

const Device = () => {
  useEffect(() => {
    getProduct();
  }, []);

  // ========================================================states
  const [Products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.userReducer).token;

  const getProduct = async () => {
    try {
      setModalIsOpen(true);
      const category = "devices";
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
    console.log("item id: ", item._id);
    const _id = item._id;

    const response = await postprodWishlistApi(_id, item, token);
  };

  const addToCartProd = async (item) => {
    console.log("product: ", item._id);

    if (token === "") {
      history.push("/signin");
    }

    const prod = { item, token };
    const response = await addToCartProduct(prod);
    console.log("response: ", response);
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
          <p>Health Devices</p>
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
                    <label>{item.productPrice}</label>
                  </div>
                  <div className="item-btn">
                    <Link to="/viewproduct">
                      <button onClick={() => dispatchProd(item)}>
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
                      <button onClick={() => addToCartProd(item)}>
                        <i class="fas fa-shopping-cart"></i>
                        <label>add to cart</label>
                      </button>
                    </Link>
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

export default Device;
