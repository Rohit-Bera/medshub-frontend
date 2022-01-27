import React from "react";
import "./style/Product.css";
import Navbar from "./Navbar";
import "./style/Product.css";

const Product = () =>{
    return <div>
        <Navbar/>
        <h2 className="h2-product-admin">Product</h2>
        <form className="main-admin-product">
            <input type="text" placeholder="Enter Product Name" className="input-product-admin"></input><br></br><br></br>
            <input type="number" placeholder=" Product price" min="0" className="input-product-admin"></input><br></br><br></br>
            <input type="file"></input><br></br><br></br>
            <input type="checkbox"></input>product is in stock<br></br><br></br>
            <button className="button-admin-product">Add product</button>
        </form>

        <table cellPadding={"10px"} className="table-product">
            <thead>
                <tr>
                    <th>Medicine Name</th>
                    <th>Medicine price</th>
                    <th>Medicine image</th>
                    <th>Manufacturer Name</th>
                </tr>
                <tr>
                    <td>abc</td>
                    <td>45</td>
                    <td>image</td>
                    <td>xyz</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="fas fa-trash-alt"></i></td>
                </tr>
            </thead>
        </table>
    </div>;
}
export default Product;