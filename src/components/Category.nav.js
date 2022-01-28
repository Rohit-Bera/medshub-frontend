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
              <Link to="/medicines">Medicines</Link>
            </li>
            <li>
              <Link to="/productCategories/covid-essentials">
                Covid Essentials
              </Link>
            </li>
            <li>
              <Link to="/productCategories/devices">Devices</Link>
            </li>
            <li>
              <Link to="/productCategories/momandbabies">Mom and Babies</Link>
            </li>
            <li>
              <Link to="/productCategories/ourBrands">Our Brands</Link>
            </li>
            <ul type="none">
              <li>
                <Link to="/productCategories/Brandproducts/dabur">Dabur</Link>
              </li>
              <li>
                <Link to="/productCategories/Brandproducts/dettol">Dettol</Link>
              </li>
              <li>
                <Link to="/productCategories/Brandproducts/garnier">
                  Garnier
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Brandproducts/himalya">
                  Himalya
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Brandproducts/mamaearth">
                  Mama Earth
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Brandproducts/muscleblaze">
                  Muscle Blaze
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Brandproducts/zandu">Zandu</Link>
              </li>
            </ul>
            <li>
              <Link to="/productCategories/Beautyproducts">
                Beauty Products
              </Link>
            </li>
            <ul type="none">
              <li>
                <Link to="/productCategories/Beautyproducts/lipcare">
                  Lip Care
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Beautyproducts/haircare">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Beautyproducts/bodycare">
                  Body Care
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Beautyproducts/facialkit">
                  Facial Care
                </Link>
              </li>
            </ul>

            <li>
              <Link to="/productCategories/Men'sgrooming">Men's Grooming</Link>
            </li>
            <ul type="none">
              <li>
                <Link to="/productCategories/Men'sgrooming/beardwash">
                  Beard Wash
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Men'sgrooming/beardoil">
                  Beard Oil
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Men'sgrooming/hairgel">
                  Hair Gel
                </Link>
              </li>
              <li>
                <Link to="/productCategories/Men'sgrooming/mendeo">
                  Men Deodrant
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
