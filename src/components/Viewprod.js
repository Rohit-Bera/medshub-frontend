import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/viewprod.css";
import Navbar from "./Navbar";
import { postprodWishlistApi } from "../Data/Services/Oneforall";

//for slider
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useSelector } from "react-redux";

const Viewprod = () => {
  const productId = useSelector((state) => state.productReducer)._id;
  const productName = useSelector((state) => state.productReducer).productName;
  const productImage = useSelector(
    (state) => state.productReducer
  ).productImage;
  const productBrand = useSelector(
    (state) => state.productReducer
  ).productBrand;
  const productCategory = useSelector(
    (state) => state.productReducer
  ).productCategory;
  const productPrice = useSelector(
    (state) => state.productReducer
  ).productPrice;
  const productStatus = useSelector(
    (state) => state.productReducer
  ).availableStatus;

  const token = useSelector((state) => state.userReducer).token;

  console.log("productImage: ", productImage);

  console.log("productImage: ", productImage.length);

  const addMedtoWishlist = async () => {
    const item = {
      productId,
      productName,
      productImage,
      productBrand,
      productCategory,
      productPrice,
      productStatus,
    };
    console.log("item :", item);

    const response = await postprodWishlistApi(productId, item, token);

    console.log("response: ", response);
  };

  return (
    <>
      <Navbar />
      <div className="view">
        <div className="view-prod">
          <div className="view-prod-slide">
            <Carousel
              className="slider"
              plugins={[
                "centered",
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  autoplayPlugin,
                  options: {
                    numberOfSlides: 1,
                    interval: 4000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <div className="brand" id="img1">
                <img src={productImage[0]} alt="_img" />
              </div>
              <div className="brand" id="img2">
                <img src={productImage[1]} alt="_img" />
              </div>
              <div className="brand" id="img3">
                <img src={productImage[2]} alt="_img" />
              </div>
              <div className="brand" id="img4">
                <img src={productImage[4]} alt="_img" />
              </div>
              <div className="brand" id="img5">
                <img src={productImage[5]} alt="_img" />
              </div>
            </Carousel>
          </div>
          <div className="prod-detail">
            <section>{productName}</section>
            <section>{productPrice}</section>
            {productStatus ? (
              <p
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                In Stock
              </p>
            ) : (
              <p
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Out of Stock
              </p>
            )}
            <section>{productBrand}</section>
            <section>{productCategory}</section>
            <section className="btn">
              <button onClick={() => addMedtoWishlist()}>
                Add to Wishlist
              </button>
              <button>Buy now</button>
            </section>
          </div>
        </div>
        <div className="view-prod-feedback">
          <p>Feedback of product</p>
          <textarea
            className=""
            placeholder="write a review"
            rows="10"
            cols="40"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Viewprod;
