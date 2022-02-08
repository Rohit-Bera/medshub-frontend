import React from "react";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import facialkit from "../images/facial-kit.png";
import haircare from "../images/haircare.jfif";
import lipcare from "../images/lipcare.jpg";
import bodycare from "../images/bodycare.jpg";

const Beautyprod = () => {
  return (
    <>
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            <label>
              <span className="font2">Beauty Products</span>
            </label>
            <div className="brand">
              <Link to="/productCategories/Beautyproducts/facialkit">
                <img src={facialkit} alt="_img" />
                <p>Facial Kit</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Beautyproducts/haircare">
                <img src={haircare} alt="_img" />
                <p>Hair Care</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Beautyproducts/lipcare">
                <img src={lipcare} alt="_img" />
                <p>Lip Care</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Beautyproducts/bodycare">
                <img src={bodycare} alt="_img" />
                <p>Body Care</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beautyprod;
