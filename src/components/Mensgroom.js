import React from "react";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import beardoil from "../images/beardoil.jpg";
import beardwash from "../images/beardwash.jfif";
import hairgel from "../images/hairgel.jpg";
import mendeo from "../images/mendeodrant.jfif";

const Mensgroom = () => {
  return (
    <>
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            <label>
              <span className="font2">Men's Grooming Products</span>
            </label>
            <div className="brand">
              <Link to="/productCategories/Men'sgrooming/beardoil">
                <img src={beardoil} alt="_img" />
                <p>Beard Oil</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Men'sgrooming/beardwash">
                <img src={beardwash} alt="_img" />
                <p>Beard Wash</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Men'sgrooming/hairgel">
                <img src={hairgel} alt="_img" />
                <p>Hair Gel</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Men'sgrooming/mendeo">
                <img src={mendeo} alt="_img" />
                <p>Men Deodrant</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mensgroom;
