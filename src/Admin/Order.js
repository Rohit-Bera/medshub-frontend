import React from "react";
import "./style/Order.css";
import Navbar from "./Navbar";
import {  useState } from "react";
import Modal from "react-modal/lib/components/Modal";



const Order = () =>{
    const [ordermodalIsOpen, setOrederModel] = useState(false);

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid black",
      },
    };
    return <div>
        <Navbar />
        <h2 className="h2-order-admin">Order</h2>
    <table className="table-order" cellPadding={"10px"}>
        <thead>
            <tr>
                <th>product Name</th>
                <th>product Image</th>
                <th>product description</th>
                <th>Customer Name</th>
                <th>price</th>
            </tr>
            <tr>
                <td>Abc</td>
                <td>image</td>
                <td>dvhfgdfbvkvckjhvv</td>
                <td>xzy</td>
                <td>405</td>
                <td><input type="checkbox" onClick={() => setOrederModel(true)}></input></td>

            </tr>
            <tr>
                <td>Abc</td>
                <td>image</td>
                <td>dvhfgdfbvkvckjhvv</td>
                <td>xzy</td>
                <td>405</td>
                <td><input type="checkbox" onClick={() => setOrederModel(true)}></input></td>

            </tr>
        </thead>
    </table>
                <Modal
                    isOpen={ordermodalIsOpen}
                    onRequestClose={() => setOrederModel(false)}
                    style={customStyles}
                 >
                        <div className="modalbackground">
                        <div className="modalcontainer">
                            <div className="closebutton">
                            <button className="cancel" onClick={() => setOrederModel(false)}>
                                X
                            </button>
                            </div>
                            <div className="body">
                            Are You Sure <br />
                            You Want to Deliver Order ?
                            </div>
                            <div className="modalbutton">
                            <button className="no" onClick={() => setOrederModel(false)}>
                                Cancel
                            </button>
                            <button className="yes">Continue</button>
                            </div>
                        </div>
                        </div>
                </Modal>
               
    </div>;
}
export default Order;