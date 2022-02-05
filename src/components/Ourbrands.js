import React from "react";
import dabur from "../images/dabur.jpg";
import dettol from "../images/dettol.jpg";
import garnier from "../images/garnier.jpg";
import himalya from "../images/himalya.jpg";
import mamaearth from "../images/mamaearth.jpg";
import muscleblaze from "../images/muscleblaze.jpg";
import zandu from "../images/zandu.jpg";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Ourbrands = () => {
  return (
    <>
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            <label>
              <span className="font2">OurBrands</span>
            </label>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/dabur">
                <img src={dabur} alt="Dabur_img" />
                <p>Dabur</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/dettol">
                <img src={dettol} alt="Dettol_img" />
                <p>Dettol</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/garnier">
                <img src={garnier} alt="Garnier_img" />
                <p>Garnier</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/himalya">
                <img src={himalya} alt="Himalya_img" />
                <p>Himalya</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/mamaearth">
                <img src={mamaearth} alt="Mamaearth_img" />
                <p>Mamaearth</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/muscleblaze">
                <img src={muscleblaze} alt="Muscleblaze_img" />
                <p>Muscleblaze</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts/zandu">
                <img src={zandu} alt="Zandu_img" />
                <p>Zandu</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourbrands;
