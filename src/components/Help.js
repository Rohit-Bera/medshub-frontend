import React from "react";
import Navbar from "./Navbar";
import YourAccount from "./Youraccount";
import "../style/help.css";

const Help = ()=>{
    return <div>
        <Navbar/>
    <div style={{display:"flex"}}>
    <div style={{flex:"30%"}}><YourAccount/></div><hr></hr>
    <div className="main-help">
        <h2 style={{marginLeft:"30px",marginTop:"45px"}}>Help?</h2>
        <div className="help-box">
            <div>How do i cancel my order? &nbsp;&nbsp;
                <i class="fas fa-chevron-circle-down"></i>
                </div>
                <hr className="hr"></hr>
            <div>I want to modify my order? &nbsp;&nbsp;
                <i class="fas fa-chevron-circle-down"></i>
                </div>
                <hr className="hr"></hr>
            <div>How do i get an invoice from order? &nbsp;&nbsp;
                <i class="fas fa-chevron-circle-down"></i>
                </div>
                <hr className="hr"></hr>
            <div>I have recrvied damaged products? &nbsp;&nbsp;
                <i class="fas fa-chevron-circle-down"></i>
                </div>
                <hr className="hr"></hr>
            <div>Item are differnt from what i ordered? &nbsp;&nbsp;
                <i class="fas fa-chevron-circle-down"></i>
                </div>
                <hr className="hr"></hr>
            <div>How can i track my order? &nbsp;&nbsp;
                <i class="fas fa-chevron-circle-down"></i>
                </div>



        </div>
    </div>
    </div>
    </div>;
}

export default Help;