import { React, useState, useEffect } from "react";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from "react-modal/lib/components/Modal";
import {
  searchProductbyBrand,
  addToCartProduct,
  postprodWishlistApi,
} from "../Data/Services/Oneforall";
import { Triangle, Rings, Oval } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { productData } from "../Data/Reducers/product.reducer";

Modal.setAppElement("#root");

const Searchmedicine = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const [Products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.userReducer).token;

  const getProduct = async () => {
    try {
      setModalIsOpen(true);
      const brand = "dabur";
      const response = await searchProductbyBrand(brand);
      console.log("response: ", response);
      if (response) {
        setModalIsOpen(false);
      }
      setProducts(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getProductName = (product) => {
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

    if (!token) {
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
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            {/* array of prod */}
            {Products.map((item) => {
              return (
                <div className="product">
                  <img src={item.productImage[0]} alt="_img" />
                  <div className="prod-details">
                    <p>{item.productName}</p>

                    <p>{item.productPrice}</p>
                    <p>
                      <button onClick={() => addToCartProd(item)}>
                        <i class="fas fa-shopping-cart"></i>
                      </button>
                    </p>
                    <p>
                      <button onClick={() => addToWishlist(item)}>
                        <i class="fas fa-heart"></i>
                      </button>
                    </p>
                  </div>
                  <Link to="/viewproduct">
                    <button
                      className="view"
                      onClick={() => getProductName(item)}
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
