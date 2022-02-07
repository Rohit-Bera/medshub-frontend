import React from "react";
import Navbar from "./Navbar";
import YourAccount from "./Youraccount";
import "../style/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <YourAccount />
      <div className="medshub-body">
        <div className="about-medshub">
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
        </div>
        <div className="account-details-nav">
          <div className="details-nav">
            <Link to="/yourAccount/AccountDetails">
              <section>
                <i class="far fa-user-circle " />
                My Account
              </section>
            </Link>
            <Link to="/yourAccount/MyWishlist">
              <section>
                <i class="fas fa-heart margin-main-icon"></i>My Wishlist
              </section>
            </Link>
            <Link to="/yourAccount/myOrders">
              <section>
                <i class="fas fa-clipboard margin-main-icon"></i>My Orders
              </section>
            </Link>
            <Link to="/yourAccount/notification">
              <section>
                <i class="fas fa-bell margin-main-icon"></i>My Notification
              </section>
            </Link>
            <Link to="/yourAccount/myCart">
              <section>
                <i class="fas fa-shopping-cart"></i>My Cart
              </section>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
