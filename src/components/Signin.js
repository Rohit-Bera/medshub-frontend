import React from "react";
// import himalaya from "../images/himalya.jpg";
import "../style/signin.css";
import signin from "../images/signin.png";
import {Link} from "react-router-dom";

const Signin = ()=>{
    return <div style={{display:"flex"}}>
        <div style={{flex:"50%"}}>
            <h2 className="signin-title">Please Enter Your Login Details</h2>
            <hr className="hr-signin"></hr>
            <div style={{textAlign:"center"}}>
                <br></br>
            <p style={{marginRight:"170px",marginBottom:"-1px"}}>Phone No.</p>    
            <input type="text" placeholder="Enter Moblie No.." className="input-signin"></input><br></br><br></br>
            <p style={{marginRight:"180px",marginBottom:"-1px"}}>Password</p>    
            <input type="text" placeholder="Enter Your Password" className="input-signin"></input><br></br><br></br><br></br>
            <button className="button">Log In</button><br></br><br></br>
            <p className="p-signin">You Have No Account? <Link to="/Signup" className="p-signin">Signup</Link></p>
            </div>
        </div><hr className="hr-signin"></hr>
        <div style={{flex:"50%"}}>
            <img src={signin} alt="crashed" style={{height:"700px"}}></img>
        </div>
    </div>;
}

export default Signin;