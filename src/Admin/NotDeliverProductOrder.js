import React from "react";
import "./style/Order.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useSelector } from "react-redux";
import {getOrderApi,updateOrderApi} from "../Data/Services/Oneforall";
import cx from "classnames";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import { Triangle, Rings, Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
Modal.setAppElement("#root");




const AdminOrder = ({rounded = false}) =>{
    useEffect(() => {
        getOrder();
      }, []);
      useEffect(()=>{
        Aos.init({duration:1000});
      },[]);
      const [modalIsOpen, setModalIsOpen] = useState(false);
      const customStyles2 = {
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
    setModalIsOpen(true);
        try {
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await getOrderApi(headers);
            console.log('response: ', response);
            if(response){
                setModalIsOpen(false);
            }

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
    setModalIsOpen(true);

        try {
            const{deliverystatus,orderId}=status;
            console.log('status: ', status);
            const _id = orderId;
            
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await updateOrderApi(_id,status,headers)
            console.log('response: ', response);
            if(response){
                setModalIsOpen(false);
            }
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
        <div className="filter-span"><Link to="/ADmIn/medicineOrder"><span>Deliverd</span></Link> 
            <Link to="/ADmIn/medicineOrder/NotDeliverdMed"><span className="filter-span" style={{borderBottom:"2px white solid"}}> Not Deliverd</span></Link></div>
       
        <div>
        <p className="p-order-admin">Product Orders</p>
        <table cellPadding="10px" className="table-prescription ">
            <tr className="border-tr-order table-title-order">
                <td>Product Image</td>
                <td>Product Name</td>
                <td>Product Price</td>
                <td>Owner Name</td>
                <td>Owner Email</td>
                <td>Owner Address</td>
                <td>Owner Phone No.</td>
                <td></td>
                <td></td>
            </tr>
        {
           allOrders.map((item)=>{
            //    console.log('item: ', item);
            
               if(item.product && item.deliverystatus===false){
                return(
                       <tr className="border-tr-order" data-aos="zoom-in-down">
                           
                            <td>
                                 <img src={item.product.productImage[0]} style={{height:"15vh",width:"10vw"}} alt="noImage"/>
                                 
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
                                     <button className="button-admin-order" onClick={()=>updateOrder()}>
                                         Deliver</button>
                             </td>
                         </tr>    
               )
               }
               
           })
       }
       </table>
        </div>
        
        
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
                <Modal
        isOpen={modalIsOpen}
        // onRequestClose={() => setModalIsOpen(false)}
        style={customStyles2}
      >
        <div
          style={{
            width: "7vw",
            height: "13vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Triangle
            color="black"
            height={100}
            width={100}
          />
        </div>
      </Modal>   
               
    </div>;
}
export default AdminOrder;