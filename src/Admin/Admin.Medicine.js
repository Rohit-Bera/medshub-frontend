import React from "react";
import "./style/Medicine.css";
import Navbar from "./Navbar";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {addMedicineApi,getallMedicineApi,deleteMedicineApi,updateMedicineApi} from "../Data/Services/Oneforall";



const Medicine = () =>{
  //add medicine  state
    const[meds,setMeds] = useState({
        medicineName:"",
        medicinePrice:null , 
        manufacturerName:"",
        medicineCategory:"",
        medicineId:"",
    });
   //add image state
    const[Img,setImg] = useState({
        medicineImage:[],
    });
    //add status state
    const[status,setStatus]=useState({
        availableStatus:"",
    });
    
    //effect
    useEffect(() => {
        getMedicine();
      }, []);

    //getallmedicine state
    const [allMedicine,setAllMedicine]= useState([]);
    //token
    const token =  useSelector((state)=>state.adminReducer).token;
    //add data
    const inputData=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setMeds({...meds,[name]:value})
        
    };
    //add img
    const inputImg=(e)=>{
        setImg({medicineImage:e.target.files});
    };
    //aadd availableStatus
    const inputStatus=(e)=>{
        setStatus({availableStatus:e.target.checked});
    };
    //refresh
    const refresh=(e)=>{
        e.preventDefault();
    };
    //get all medicine
   const getMedicine = async ()=>{
    try {
        // const url = "https://medshub-backend.herokuapp.com/getMedicine";
        const headers = {headers:{Authorization: `Bearer ${token}` }}

        const response = await getallMedicineApi(headers);
        console.log('response: ', response);
        setAllMedicine(response.data.medicines);

    } catch (error) {
        console.log('error: ', error);
        
    }
    };
    //add medicine api
    const addMedicine = async()=>{
      
        try {
            const {medicineName,medicinePrice,manufacturerName,medicineCategory}=meds;
            // console.log('meds: ', meds);
            const {medicineImage}=Img;
            // console.log('Img: ', Img);
            const {availableStatus}= status;
            // console.log('status: ', status);

            const data= {
                medicineName,
                medicinePrice,
                manufacturerName,
                medicineImage,
                availableStatus,
                medicineCategory
            };
            console.log('data: ', data);

            const fd = new FormData();
            fd.append("medicineName",medicineName);
            fd.append("medicinePrice",medicinePrice);
            fd.append("manufacturerName",manufacturerName);
            fd.append("availableStatus",availableStatus);
            fd.append("medicineCategory",medicineCategory);
            
            for(const key of Object.keys(medicineImage)){
                fd.append("medicineImage",medicineImage[key]);
            }
            // const url = "https://localhost:5500/addMedicine";
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const result = await addMedicineApi(fd,headers);
            return result;
          
        } catch (error) {
            console.log('error: ', error.response);
            
        }
        getMedicine()
        setStatus({availableStatus:false});
        setMeds({
            medicineName:"",
            medicinePrice:"",
            manufacturerName:"",
            medicineCategory:"",
        });
        
        
    };
    //delete medicine api
    const deleteMedicine = async(item)=>{
        try{
            const {_id} = item;
            const headers = {headers:{Authorization: `Bearer ${token}` }}

            const response = await deleteMedicineApi(headers,_id);
            console.log('response: ', response);       
            
                getMedicine()
            
        }
        catch(error)
        {console.log('error: ', error);}
    }
    //edit medicine data 
    const editMedicine = async(item)=>{
        setMeds({
            ...meds,
         
            "medicineName":item.medicineName,
            "medicinePrice":item.medicinePrice , 
            "manufacturerName":item.manufacturerName,
            "medicineCategory":item.medicineCategory,
            "medicineId":item._id,
        });
        setStatus({
            ...status,
            
            "availableStatus":item.availableStatus,
        })
        setImg({
            ...Img,
            
            "medicineImage":item.medicineImage,
        })
        
        
    }
    const updateMedicine = async()=>{
        console.log('meds: ', meds);
        console.log('status: ', status);
        console.log('Img: ', Img);
        // console.log(medsId);
        try {
            const {
                medicineName,
                medicinePrice,
                manufacturerName,                
                medicineCategory,
  
            } = meds
            const {availableStatus} = status;
            const {medicineImage} = Img
            const _id = meds.medicineId
            const fd = new FormData();
            fd.append("medicineName",medicineName);
            fd.append("medicinePrice",medicinePrice);
            fd.append("manufacturerName",manufacturerName);
            fd.append("availableStatus",availableStatus);
            fd.append("medicineCategory",medicineCategory);
            
            for(const key of Object.keys(medicineImage)){
                fd.append("medicineImage",medicineImage[key]);
            }
            const headers = {headers:{Authorization: `Bearer ${token}` }}
            const response = await updateMedicineApi(_id,fd,headers)
            console.log('response: ', response);
            getMedicine()
            
            
        } catch (error) {
            console.log('error: ', error);
        }
     
    }

    return <div>
                    <Navbar/>
                    <h2 className="h2-medicine-admin">Medicine</h2>
                    <form className="main-admin-medicine" onSubmit={refresh}>
                        <input type="text" 
                        placeholder="Enter Medicine Name" 
                        className="input-medicine-admin"
                        name="medicineName"
                        value={meds.medicineName}
                        onChange={inputData}/><br></br><br></br>
                        <input type="text" 
                        placeholder="Medicine price" 
                        min="0" 
                        className="input-medicine-admin"
                        name="medicinePrice"
                        value={meds.medicinePrice}
                        onChange={inputData}/><br></br><br></br>
                        <input type="text" 
                        placeholder="Manufacturer Name"  
                        className="input-medicine-admin"
                        name="manufacturerName"
                        value={meds.manufacturerName}
                        onChange={inputData}/><br></br><br></br>
                        <input type="text" 
                        placeholder="medicine Category"  
                        className="input-medicine-admin"
                        name="medicineCategory"
                        value={meds.medicineCategory}
                        onChange={inputData}/><br></br><br></br>
                        <input type="file"
                        multiple
                        name="medicineImage"
                        onChange={inputImg}/><br></br><br></br>
                        <input type="checkbox"
                        name="availableStatus"
                        checked={status.availableStatus}
                        onChange={inputStatus}/>medicine is in stock<br></br><br></br>
                        <button className="button-admin-medicine" onClick={()=>addMedicine()}>Add medicine</button>
                        <button className="button-admin-medicine" onClick={()=>updateMedicine()}>update</button>

                    </form>
                    
                     {allMedicine.map((item) => {
                        //  console.log('item: ', item);
                        //  if(item.availableStatus === true){
                             return(
                                 <div>
                                     <table>
                                         <tr>
                                             <td>
                                                 <img src={item.medicineImage[0]} alt="noImage"/>
                                             </td>
                                             <td>
                                                 <p>{item.medicineName}</p>
                                             </td>
                                             <td>
                                                 <p>{item.medicinePrice}</p>
                                             </td>
                                             <td>
                                                 <p>{item.manufacturerName}</p>
                                             </td>
                                             <td>
                                                 <p>{item.medicineCategory}</p>
                                             </td>
                                             <td>
                                             <p title="update" onClick={()=>editMedicine(item)}><i class="fas fa-edit"></i></p>
                                             </td>
                                             <td>
                                                 <p title="delete" onClick={()=>deleteMedicine(item)}><i class="fas fa-trash-alt"></i></p>
                                             </td>
                                         </tr>
                                     </table>
                                 </div>
                             )
                        //  }
                     })}
                   
    </div>; 

    }

export default Medicine;