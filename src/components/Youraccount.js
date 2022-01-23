import React from 'react';
import "../style/youraccount.css";
import {Link} from "react-router-dom";
// import Navbar from "./Navbar"


const Youraccount = () =>{
    return <div>
        {/* <Navbar /> */}
        <div style={{display:"flex",backgroundColor:"#f5f5f0",height:"1000px"}}>
        <div>
            <p className='.p'><span className='span'>Your Account</span></p>
            <div className='menu'>
                <div><i class="fas fa-clipboard margin-main-icon"></i>My Order
                <Link to="/yourAccount/myOrders">
                    <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
                </div>
                <div><i class="fas fa-heart margin-main-icon"></i>My Wishlist
                <Link to="/yourAccount/MyWishlist">
                    <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
                </div>
                <div><i class="fas fa-bell margin-main-icon"></i>My Notification
                <Link to="/yourAccount/notification">
                <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
                </div>
                <div><i class="fas fa-user margin-main-icon"></i>Account details
                <Link to="/yourAccount/accountDetails">
                    <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
                </div>
                <div><i class="far fa-question-circle margin-main-icon"></i>Help?
                <Link to="/yourAccount/Help">
                    <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
                </div>
                <div><i class="fas fa-info-circle margin-main-icon"></i>About
                <Link to="/yourAccount/About">
                <i class="fas fa-chevron-circle-right margin-arrow-icon link"></i>
                </Link>
                </div>
                <div><i class="fas fa-power-off margin-main-icon"></i>Logout
                <i class="fas fa-chevron-circle-right margin-arrow-icon"></i>
                </div>

            </div>
       </div>
    
    </div>
    </div>;

};

export default Youraccount;
