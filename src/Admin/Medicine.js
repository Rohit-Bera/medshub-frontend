import React from "react";
import "./style/Medicine.css";
import Navbar from "./Navbar";

const Medicine = () =>{
    return <div>
        <Navbar/>
        <h2 className="h2-medicine-admin">Medicine</h2>
        <form className="main-admin-medicine">
            <input type="text" placeholder="Enter Medicine Name" className="input-medicine-admin"></input><br></br><br></br>
            <input type="number" placeholder="Medicine price" min="0" className="input-medicine-admin"></input><br></br><br></br>
            <input type="text" placeholder="Manufacturer Name" min="0" className="input-medicine-admin"></input><br></br><br></br>
            <input type="file"></input><br></br><br></br>
            <input type="checkbox"></input>medicine is in stock<br></br><br></br>
            <button className="button-admin-medicine">Add medicine</button>
        </form>
        <table cellPadding={"10px"} className="table-medicine">
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
export default Medicine;