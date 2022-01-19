import React from "react";
import { Link } from "react-router-dom";
import "../style/category.css";

const CategoryNav = () => {
  return (
    <>
      <div className="cat-nav">
        <div className="nav-bar">
          <ul type="none">
            <li>
              <Link to="/Medicines">Medicines</Link>
            </li>
            <li>
              <Link to="/productCategories">Our Categories</Link>
            </li>
            <li>
              <Link to="/productCategories/ourBrands">Our Brands</Link>
            </li>
            <ul type="none">
              <li>
                <Link to="/productCategories/Dabur">Dabur</Link>
              </li>
              <li>
                <Link to="/productCategories/Dettol">Dettol</Link>
              </li>
              <li>
                <Link to="/productCategories/Garnier">Garnier</Link>
              </li>
              <li>
                <Link to="/productCategories/Himalya">Himalya</Link>
              </li>
              <li>
                <Link to="/productCategories/Mamaearth">Mama Earth</Link>
              </li>
              <li>
                <Link to="/productCategories/Muscleblaze">Muscle Blaze</Link>
              </li>
              <li>
                <Link to="/productCategories/Zandu">Zandu</Link>
              </li>
            </ul>

            <li>
              <Link to="/productCategories/Beautyproducts">
                Beauty Products
              </Link>
            </li>
            <ul type="none">
              <li>
                <Link to="">Lip Care</Link>
              </li>
              <li>
                <Link to="">Hair Care</Link>
              </li>
              <li>
                <Link to="">Body Care</Link>
              </li>
              <li>
                <Link to="">Facial Care</Link>
              </li>
            </ul>

            <li>
              <Link to="">Men's Grooming</Link>
            </li>
            <ul type="none">
              <li>Beard Oil</li>
              <li>Beard Wash</li>
              <li>Hair Gel</li>
              <li>Men Deodrant</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
