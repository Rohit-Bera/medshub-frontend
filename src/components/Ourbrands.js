import React from "react";
import dabur from "../images/dabur.jpg";
import dettol from "../images/dettol.jpg";
import garnier from "../images/garnier.jpg";
import himalya from "../images/himalya.jpg";
import mamaearth from "../images/mamaearth.jpg";
import muscleblaze from "../images/muscleblaze.jpg";
import zandu from "../images/zandu.jpg";
// import sanitizer from "../images/sanitizer.png";
// import babies from "../images/babies.png";
// import fitness from "../images/fitness.jpg";
// import devices from "../images/devies.jpg";
// import facialkit from "../images/facial-kit.png";
// import haircare from "../images/haircare.jfif";
// import lipcare from "../images/lipcare.jpg";
// import bodycare from "../images/bodycare.jpg";
// import beardoil from "../images/beardoil.jpg";
// import beardwash from "../images/beardwash.jfif";
// import hairgel from "../images/hairgel.jpg";
// import mendeo from "../images/mendeodrant.jfif";
// componenst
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";

const Ourbrands = () => {
  return (
    <>
      <div className="nav">sample nav</div>
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            <label>
              <span className="font1">Our</span>
              <span className="font2">Brands</span>
            </label>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={dabur} alt="Dabur_img" />
                <p>Dabur</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={dettol} alt="Dettol_img" />
                <p>Dettol</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={garnier} alt="Garnier_img" />
                <p>Garnier</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={himalya} alt="Himalya_img" />
                <p>Himalya</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={mamaearth} alt="Mamaearth_img" />
                <p>Mamaearth</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={muscleblaze} alt="Muscleblaze_img" />
                <p>Muscleblaze</p>
              </Link>
            </div>
            <div className="brand">
              <Link to="/productCategories/Brandproducts">
                <img src={zandu} alt="Zandu_img" />
                <p>Zandu</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </>
  );
};

export default Ourbrands;
