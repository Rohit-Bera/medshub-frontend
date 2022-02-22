import React from "react";
import "./style/Order.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";




const AdminOrder = () =>{
    
    return <div>
        <Navbar />
        <div>
            <div className="main-order-flex">
               <Link to="/ADmIn/ProductOrder"> <div className="card-order-main"><h3>Product Order</h3></div></Link>
                <Link to="/ADmIn/medicineOrder"><div className="card-order-main"><h3>Medicine Order</h3></div></Link>
            </div>
        </div>
               
    </div>;
}
export default AdminOrder;