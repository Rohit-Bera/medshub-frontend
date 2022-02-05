import React from "react";
import "./style/Order.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useSelector } from "react-redux";
import {getOrderApi,updateOrderApi} from "../Data/Services/Oneforall";
import cx from "classnames";
 




const AdminOrder = ({rounded = false}) =>{
    useEffect(() => {
        getOrder();
      }, []);

    const [ordermodalIsOpen, setOrederModel] = useState(false);
    const [allOrders,setallOrder]=useState([]);
    const[status,setStatus]=useState({
        deliverystatus:false,
        orderId:""
    })
    
    //style
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
    const token =  useSelector((state)=>state.adminReducer).token;

    //get allorder
    const getOrder = async()=>{
        try {
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await getOrderApi(headers);
            console.log('response: ', response);
            console.log('response.data.allOrder: ', response.data.allOrder);
            setallOrder(response.data.allOrder);  
        } catch (error) {
            console.log('error: ', error);    
        }
    };
    //edit order
    const acceptOrder = async(item)=>{
        console.log('item: ', item);
        setStatus({
            ...status,
            "deliverystatus":true,
            "orderId":item._id
        })
        console.log('status: ', status);
    }
    //update
    const updateOrder = async()=>{
        try {
            const{deliverystatus,orderId}=status;
            console.log('status: ', status);
            const _id = orderId;
            
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await updateOrderApi(_id,status,headers)
            console.log('response: ', response);
            getOrder();
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
    const sildercx = cx('span-admin-order',{
        'rounded':rounded
    })
    return <div>
        <Navbar />
       
        <h2 className="h2-order-admin">Order</h2>
        {
           allOrders.map((item)=>{
            //    console.log('item: ', item);
            
               if(item.product && item.deliverystatus===false){
                return(
                   <div>
                       <table>
                       <tr>
                           
                            <td>
                                 <img src={item.product.productImage[0]} alt="noImage"/>
                                 
                            </td>
                            <td>
                                 <p>{item.product.productName}</p> 
                            </td>
                            <td>
                                 <p>{item.product.productPrice}</p> 
                            </td>
                             <td>
                                 <p>{item.owner.name}</p>
                             </td>
                            <td>
                                 <p>{item.owner.email}</p>
                            </td>
                            <td>
                                <p>{item.owner.address}</p>
                            </td>
                            <td>
                                <p>{item.owner.phoneNumber}</p>
                            </td>
                            <td> <label className="switch"><input type="checkbox" name="deliverystatus" className="input-admin-order" onClick={()=>acceptOrder(item)}></input>
                            <span className={sildercx}></span></label></td>
                             <td>
                                <p title="delete"><i class="fas fa-trash-alt"></i></p>
                             </td>
                             <td>
                                     <button className="button-admin-medicine" onClick={()=>updateOrder()}>update</button>
                             </td>
                         </tr>
                       </table>
                    </div>
               )
               }
               else if(item.medicine && item.deliverystatus===false){
                return(
                   <div>
                       <table>
                           
                       <tr>
                            <td>
                                 <img src={item.medicine.medicineImage[0]} alt="noImage"/>
                            </td>
                            <td>
                            <p>{item.medicine.medicineName}</p> 
                            </td>
                             <td>
                                 <p>{item.medicine.medicinePrice}</p>
                             </td>
                          
                            <td>
                                 <p>{item.owner.name}</p>
                             </td>
                            <td>
                                 <p>{item.owner.email}</p>
                            </td>
                            <td>
                                <p>{item.owner.address}</p>
                            </td>
                            <td>
                                <p>{item.owner.phoneNumber}</p>
                            </td>
                            <td>
                            <label className="switch"><input type="checkbox" name="deliverystatus" className="input-admin-order" onClick={()=>acceptOrder(item)}></input>
                            <span className={sildercx}></span></label>
                            </td>
                            <td>
                             <p title="update" onClick={()=>acceptOrder(item)}><i class="fas fa-edit"></i></p>
                            </td>
                             <td>
                                <p title="delete"><i class="fas fa-trash-alt"></i></p>
                             </td>
                             <td>
                             <button className="button-admin-medicine" onClick={()=>updateOrder()}>update</button>

                             </td>
                         </tr>
                       </table>
                    </div>
               )
               }
           })
       }
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
export default AdminOrder;