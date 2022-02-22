import React from "react";
import "../style/Accountdetails.css";
import YourAccount from "./Youraccount";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Accountdetails = () => {
  const history = useHistory();
  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
  const phone = useSelector((state) => state.userReducer).phoneNumber;
  const token = useSelector((state) => state.userReducer).token;

  if (
    name === "" ||
    email === "" ||
    address === "" ||
    phone === "" ||
    token === ""
  ) {
    history.push("/signin");
    toast.info("please login first! ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <>
      <YourAccount />
      <div className="account-details">
        <div className="account-profile">
          <div className="profile-details">
            <i class="far fa-user-circle " />
            <section>
              <i class="fas fa-quote-right"></i>Account Details
              <i class="fas fa-quote-left"></i>
            </section>
            <section>{name}</section>
            <section>{address} </section>
            <section>{phone} </section>
            <section>{email}</section>
          </div>
         <Link to="/updateProfile"> <div className="account-update">
            <section>Update profile</section>
          </div></Link>
        </div>
        <div className="profile-card">
          <Link to="/yourAccount/AccountDetails">
            <section className="card">
              <i class="far fa-user-circle " />
              My Account
            </section>
          </Link>
          <Link to="/yourAccount/MyWishlist">
            <section className="card">
              <i class="fas fa-heart margin-main-icon"></i>My Wishlist
            </section>
          </Link>
          <Link to="/yourAccount/myOrders">
            <section className="card">
              <i class="fas fa-clipboard margin-main-icon"></i>My Orders
            </section>
          </Link>
          <Link to="/yourAccount/notification">
            <section className="card">
              <i class="fas fa-bell margin-main-icon"></i>My Notification
            </section>
          </Link>
          <Link to="/uploadprescription">
            <section className="card">
              <i class="fas fa-notes-medical"></i>Upload Prescription
            </section>
          </Link>
          <Link to="/yourAccount/myCart">
            <section className="card">
              <i class="fas fa-shopping-cart"></i>My Cart
            </section>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Accountdetails;
