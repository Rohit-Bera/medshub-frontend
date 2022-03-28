import React from "react";
import Navbar from "./Navbar";
import YourAccount from "./Youraccount";
import "../style/About.css";
import { Link } from "react-router-dom";

const AboutViz = () => {
  return (
    <>
      <YourAccount />
      <div className="medshub-body">
        <div className="about-medshub-viz">
          <i class="fas fa-quote-right"></i>
          <h2>About us</h2>
          <p>
            This project is basically based on MERN conept where Reactjs and
            Nodejs with Mongodb came into keyexistence. Where For frontend we
            have used reactjs and for backend we have used nodejs and mongodb
            for backend. for the Deployment we have use Heroku for backend
            hosting and for frontend we have used Netlify. All the hosting are
            done with the " Github " through backend and frontend repositories.
          </p>
          <p>
            This project is an E-pharmacy with daily required health product
            based web-application. You can order products as well as medicines
            through this webapp. You can also upload your precsription and order
            medicines.
          </p>

          <div className="profile-dev">
            <div className="devloper">
              {" "}
              <i class="far fa-user-circle " />
              <h3>Rohit Bera</h3>
            </div>
            <div className="devloper">
              {" "}
              <i class="far fa-user-circle " />
              <h3>Manthan Thakkar</h3>
            </div>
            <div className="devloper">
              {" "}
              <i class="far fa-user-circle " />
              <h3>Reshma Vidhani</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutViz;
