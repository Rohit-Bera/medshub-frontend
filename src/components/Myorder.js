import React from "react";
import Navbar from "./Navbar";
import "../style/Myorder.css";
import YourAccount from "./Youraccount";
import himalya from "../images/himalya.jpg"

const Myorder = ()=>{
    return <div>
            <Navbar/>
            <div style={{display:"flex"}}>
                <div style={{flex:"30%"}}><YourAccount/></div><hr></hr>
                <div className="main-order">
                <h2 style={{marginLeft:"30px",marginTop:"45px"}}>My Order</h2>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div className="order-bg" ><img src={himalya} alt="img" className="size"></img></div>
                        <div className="order-text"><p style={{marginLeft:"25px"}}>Himalya Products</p><p style={{marginLeft:"25px"}}>566/-</p>
                         </div>
                    </div>
                    <br></br>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div className="order-bg" ><img src={himalya} alt="img" className="size"></img></div>
                        <div className="order-text"><p style={{marginLeft:"25px"}}>Himalya Products</p><p style={{marginLeft:"25px"}}>566/-</p>
                         </div>
                    </div>
                    <br></br>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <div className="order-bg" ><img src={himalya} alt="img" className="size"></img></div>
                        <div className="order-text"><p style={{marginLeft:"25px"}}>Himalya Products</p><p style={{marginLeft:"25px"}}>566/-</p>
                         </div>
                    </div>
                </div>
            </div>
    </div>;
}

export default Myorder;