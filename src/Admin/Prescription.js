import React from "react";
import "./style/Prescription.css";
import Navbar from "./Navbar";
import {  useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal/lib/components/Modal";
import {getPrescriptionApi,updatePrescriptionApi} from "../Data/Services/Oneforall";
import cx from "classnames";


const Prescription = ({rounded = false}) =>{
    const [ordermodalIsOpen, setOrederModel] = useState(false);
    const [allPrescription,setAllPrescription]=useState([]);
    const[status,setStatus]=useState({
        prescriptionStatus:false,
        prescriptionId:""
    })
    useEffect(() => {
        getPrescription();
      }, []);
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

    const getPrescription = async()=>{
        try {
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await getPrescriptionApi(headers);
            console.log('response: ', response);
            setAllPrescription(response.data.allPrescription)
            
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
    //edit prescription
    const acceptPrescription = async(item)=>{
        console.log('item: ', item);
        setStatus({
            ...status,
            
            "prescriptionStatus":true,
            "prescriptionId":item._id
        })
        console.log('status: ', status);

    }
    //update Prescription
    const updatePrescription = async()=>{
        try {
            const{prescriptionStatus,prescriptionId}=status;
            console.log('status: ', status);
            const _id = prescriptionId;
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await updatePrescriptionApi(_id,status,headers)
            console.log('response: ', response);
            getPrescription();

        } catch (error) {
            console.log('error: ', error);
            
        }
    }
    const sildercx = cx('span-admin-order',{
        'rounded':rounded
    })
    return <div>
        <Navbar />
        {
           allPrescription.map((item)=>{
               
               
               if(item.prescriptionStatus === false){
                return(
                   <div>
                       <table>
                       <tr>
                            <td>
                                 <img src={item.prescriptionImage} alt="noImage"/>
                                 
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
                            <td> <label className="switch"><input type="checkbox" name="deliverystatus" className="input-admin-order" onClick={()=>acceptPrescription(item)}></input>
                            <span className={sildercx}></span></label></td>
                            <td>
                             <p title="update"><i class="fas fa-edit"></i></p>
                            </td>
                             <td>
                             <button className="button-admin-medicine" onClick={()=>updatePrescription()}>update</button>

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