import { React, useState, useEffect } from "react";
import CategoryNav from "./Category.nav";
import "../style/searchprod.css";
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

const Searchproduct = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const [Products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.userReducer).token;

  //
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

  //
  const getProductName = (product) => {
    console.log("product: ", product);

    dispatch(productData({ product }));
  };

  //
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
      <div className="search-prod">
        <CategoryNav />
        <div className="search-container">
          <div className="search-form">
            <form>
              <input type="text" />
              <button>
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="searched">
            <div className="item">
              <div className="item-like">
                <i class="fas fa-heart"></i>
              </div>
              <div className="item-img">
                <img />
              </div>
              <div className="item-disc">
                <p>item name</p>
                <p>item price</p>
              </div>
              <div className="item-btn">
                <section>
                  <i class="far fa-eye"></i>view
                </section>
                <section>
                  <i class="fas fa-money-check-alt"></i>
                  <label>buy now</label>
                </section>
                <section>
                  <i class="fas fa-shopping-cart"></i>
                  <label>add to cart</label>
                </section>
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

export default Searchproduct;
