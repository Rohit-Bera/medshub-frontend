import React from "react";
import { Link } from "react-router-dom";
import "../style/category.css";

const CategoryNav = () => {
  return (
    <>
      <div className="cat-nav">
        <div className="nav-bar">
          <span className="logo1">Medshub </span>
          <span className="logo2">24/7</span>

          <ul type="none">
            <li>
              <Link to="/">
                <i class="fas fa-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/yourAccount/AccountDetails">
                <i class="far fa-user-circle " />
                My Account
              </Link>
            </li>
            <li>
              <Link to="/searchproducts">
                <i class="fas fa-search"></i>Search Product
              </Link>
            </li>
            <li>
              <Link to="/searchmedicines">
                <i class="fas fa-search-plus"></i>Search Medicine
              </Link>
            </li>
            <li>
              <Link to="/medicines">
                <i class="fas fa-pills"></i>Medicines
              </Link>
            </li>
            <li>
              <Link to="/productCategories/covid-essentials">
                <i class="fas fa-head-side-mask"></i>
                Covid Essentials
              </Link>
            </li>
            <li>
              <Link to="/productCategories/devices">
                <i class="fas fa-laptop-medical"></i>Devices
              </Link>
            </li>
            <li>
              <Link to="/productCategories/momandbabies">
                <i class="fas fa-baby"></i>Mom and Babies
              </Link>
            </li>
            <li>
              <Link to="/productCategories/ourBrands">
                <i class="fas fa-boxes"></i>
                Our Brands
              </Link>
            </li>

            <li>
              <Link to="/productCategories/Beautyproducts">
                <i class="fas fa-star"></i>
                Beauty Products
              </Link>
            </li>

            <li>
              <Link to="/productCategories/Men'sgrooming">
                <i class="fas fa-male"></i>Men's Grooming
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
