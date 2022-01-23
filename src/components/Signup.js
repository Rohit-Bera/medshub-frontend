import React from "react";
import {Link} from "react-router-dom";
import signup from "../images/signup.png";
import "../style/signup.css";


const Signup = ()=>{
    return <div style={{display:"flex"}}>
        <div style={{flex:"50%"}}>
        <img src={signup} alt="crashed" style={{height:"700px"}}></img>
    </div><hr className="hr-signup"></hr>
    <div style={{flex:"50%"}}>
        <h2 className="signup-title">Create New Account</h2>
        <hr className="hr-signup"></hr>
        <div style={{textAlign:"center"}}>
            <br></br>
        <p style={{marginRight:"90px",marginBottom:"-1px"}}>Please enter your name</p>    
        <input type="text" placeholder="eg:- james martin" className="input-signup"></input><br></br>
        <p style={{marginRight:"90px",marginBottom:"-1px"}}>Please enter your email</p>    
        <input type="text" placeholder="eg:- james@gmail.com" className="input-signup"></input><br></br>
        <p style={{marginRight:"180px",marginBottom:"-1px"}}>Phone No.</p>    
        <input type="text" placeholder="eg:- 9898989898" className="input-signup"></input><br></br>
        <p style={{marginRight:"95px",marginBottom:"-1px"}}>Please enter Password</p>    
        <input type="text" placeholder="*************" className="input-signup"></input><br></br>
        <p style={{marginRight:"80px",marginBottom:"-1px"}}>Please confirm Password</p>    
        <input type="text" placeholder="*************" className="input-signup"></input><br></br><br></br>
        <button className="button-signup">Sign up</button><br></br><br></br>
        <p className="p-signup">Already Registered? <Link to="/signin" className="p-signup">Signin</Link></p>
        </div>
    </div>
    
</div>
    ;
}

export default Signup;