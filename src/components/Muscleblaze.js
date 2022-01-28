import React from "react";
import CategoryNav from "./Category.nav";
import "../style/category.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Muscleblaze = () => {
  return (
    <>
      <Navbar />
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-body">
          <div className="brand-child">
            {/* array of prod */}
            <div className="product">
              <img src="" alt="_img" />
              <div className="prod-details">
                <p>product name -hbfcjdcdcdszbncvsu</p>
                <p>price</p>
                <p>
                  <button>
                    <i class="fas fa-shopping-cart"></i>
                  </button>
                </p>
                <p>
                  <button>
                    <i class="fas fa-heart"></i>
                  </button>
                </p>
              </div>
              <Link to="/viewproduct">
                <button className="view">view</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Muscleblaze;
