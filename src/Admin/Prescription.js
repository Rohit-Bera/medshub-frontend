import React from "react";
import "./style/Prescription.css";
import Navbar from "./Navbar";
import {  useState } from "react";
import Modal from "react-modal/lib/components/Modal";


const Prescription = () =>{
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
         <table className="table-prescription" cellPadding={"10px"}>
        <thead>
            <tr>
                <th>prescription image</th>
                <th>Customer Name</th>
               
            </tr>
            <tr>
               
                <td>image</td>
                <td>xzy</td>
                <td><i class="fas fa-check" onClick={() => setOrederModel(true)}></i></td>
                <td><i class="fas fa-times"></i></td>
               
            </tr>
            <tr>
               
                <td>image</td>
                <td>xzy</td>
                <td><i class="fas fa-check"></i></td>
                <td><i class="fas fa-times"></i></td>
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
                            You Want to accept prescription ?
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
export default Prescription;