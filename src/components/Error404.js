import React from "react";
import Navbar from "./Navbar";
import error404 from "../images/404.jpg";
import "../style/routeError.css";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="error-parent">
        <div className="error-child">
          <img src={error404} />
        </div>
      </div>
    </>
  );
};

export default Error404;
