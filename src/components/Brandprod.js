import React from "react";

import CategoryNav from "./Category.nav";
import "../style/category.css";
// import { Link } from "react-router-dom";

const Brandprod = () => {
  return (
    <>
      <div className="nav">sample nav</div>
      <div className="our-brands">
        <CategoryNav />
        <div className="brand-prod-body">
          <div className="brand-prod-child">
            <div className="dabur">
              <label>
                <span className="font1">Da</span>
                <span className="font2">bur</span>
              </label>
              <div className="brand">
                <img src="" alt="_img" />
                <p>dabur</p>
              </div>
              <div className="brand">
                <img src="" alt="_img" />
                <p>dabur</p>
              </div>
            </div>
            <div className="dettol">
              <label>
                <span className="font1">De</span>
                <span className="font2">ttol</span>
              </label>
              {/* <div className="brand">
                <img src="" alt="_img" />
                <p>dabur</p>
              </div>
              <div className="brand">
                <img src="" alt="_img" />
                <p>dabur</p>
              </div> */}
            </div>
            <div className="garnier">
              <label>
                <span className="font1">Gar</span>
                <span className="font2">nier</span>
              </label>
              {/* <div className="brand">
                <img src="" alt="_img" />
                <p>Garnier</p>
              </div> */}
            </div>
            <div className="himalya">
              <label>
                <span className="font1">Him</span>
                <span className="font2">alya</span>
              </label>
              {/* <div className="brand">
                <img src="" alt="_img" />
                <p>Himalya</p>
              </div> */}
            </div>
            <div className="mamaearth">
              <label>
                <span className="font1">Mama</span>
                <span className="font2">Earth</span>
              </label>
              {/* <div className="brand">
                <img src="" alt="_img" />
                <p>Mamaearth</p>
              </div> */}
            </div>
            <div className="muscleblaze">
              <label>
                <span className="font1">Muscle</span>
                <span className="font2">blaze</span>
              </label>
              {/* <div className="brand">
                <img src="" alt="_img" />
                <p>Muscleblaze</p>
              </div> */}
            </div>
            <div className="zandu">
              <label>
                <span className="font1">Za</span>
                <span className="font2">ndu</span>
              </label>
              {/* <div className="brand">
                <img src="" alt="_img" />
                <p>Zandu</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </>
  );
};

export default Brandprod;
