import React from "react";
import Navbar from "./Navbar";
import YourAccount from "./Youraccount";
import "../style/About.css";


const About = ()=>{
        return <div>
                <Navbar/>
                <div style={{display:"flex"}}>
                    <div style={{flex:"30%"}}><YourAccount/></div><hr></hr>
                    <div className="About-main">
                        <div style={{marginLeft:"50px"}}>
                        <h3 style={{fontSize:"30px"}}>About</h3>
                        <p>Terms & conditions</p>
                        <p>Welcome to www.medshub24/7("Medshub24/7.com","Medshub24/7","Website","Pharmacy",or "we").</p>
                        <br></br>
                        <p>By using the Platform, you expressly agree to be bound by the Terms. 
                            If you do not agree with any of the Terms, please do not use the Platform. 
                            If you have any questions about the terms, please contact cs@medshub 24/7.com
                             Please note that your access to the Services, other Platforms or utilisation of 
                             Products (defined below), offers or promotions in relation to the Products and 
                             services as may be provided by us or our affiliates, may be governed by other 
                             terms and conditions, policies or guidelines ("Additional Terms") along with these Terms. 
                             If these Terms are inconsistent with any Additional Terms, the Additional Terms 
                             will control to the extent of such inconsistency with respect to the applicable 
                             Service or utilisation of the Product. 
                             These Terms govern your use of the Platform and transaction or dealings thereon.</p>
                        </div>
                    </div>
                </div>
            </div>
        ;
}

export default About