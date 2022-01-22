import React from 'react';
import "../style/youraccount.css";
// import Accountdetails from "./Accountdetails";
// import {Link, Route, Switch} from "react-router-dom";


const Youraccount = () =>{
    return <div style={{display:"flex",backgroundColor:"rgb(227, 230, 227)",height:"617px"}}>
        <div className='left-menu'>
            <p><span className='span'>Your Account</span></p>
            <div className='menu'>
                <div><i class="fas fa-clipboard margin-main-icon"></i>My Order<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>
                <div><i class="fas fa-heart margin-main-icon"></i>My Wishlist<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>
                <div><i class="fas fa-bell margin-main-icon"></i>My Notification<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>
                <div><i class="fas fa-user margin-main-icon"></i>Account details<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>
                <div><i class="far fa-question-circle margin-main-icon"></i>Help?<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>
                <div><i class="fas fa-info-circle margin-main-icon"></i>About<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>
                <div><i class="fas fa-power-off margin-main-icon"></i>Logout<i class="fas fa-chevron-circle-right margin-arrow-icon"></i></div>

            </div>
       </div>
       <hr></hr>
       <div style={{flex:"70%"}}>

       </div>
    {/* <Switch>
    <Route path="/accountDetails" component={Accountdetails}/>
    </Switch> */}
    </div>;

};

export default Youraccount;
