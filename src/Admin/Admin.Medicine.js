import React from "react";
import "./style/Medicine.css";
import Navbar from "./Navbar";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {addMedicineApi,getallMedicineApi,deleteMedicineApi,updateMedicineApi} from "../Data/Services/Oneforall";
import Aos from "aos";
import "aos/dist/aos.css";



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
      useEffect(()=>{
        Aos.init({duration:1000});
      },[]);
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
            console.log('result: ', result);
            getMedicine();
            setStatus({availableStatus:false});
        setMeds({
            medicineName:"",
            medicinePrice:"",
            manufacturerName:"",
            medicineCategory:"",
        });
          
        } catch (error) {
            console.log('error: ', error.response);
            
        }
        
        
        
        
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
                   <div className="form-main-medicine">
                   <p className="p-medicine-admin">Add Medicine</p><hr style={{color:"black",border:"2px solid"}}></hr>
                    <form className="main-admin-medicine" onSubmit={refresh}>
                        <div  className="form-flex-Medadmin">
                        <div>
                            <p>Medicine Name</p>
                        <input type="text" 
                        placeholder="Enter Medicine Name" 
                        className="input-medicine-admin"
                        name="medicineName"
                        value={meds.medicineName}
                        onChange={inputData}/><br></br>
                        <p>Medicine Price</p>
                        <input type="text" 
                        placeholder="Medicine price" 
                        min="0" 
                        className="input-medicine-admin"
                        name="medicinePrice"
                        value={meds.medicinePrice}
                        onChange={inputData}/><br></br>
                        <p>Manufacturer Name</p>
                        <input type="text" 
                        placeholder="Manufacturer Name"  
                        className="input-medicine-admin"
                        name="manufacturerName"
                        value={meds.manufacturerName}
                        onChange={inputData}/><br></br>
                        <p>Medicine Category</p>
                        <input type="text" 
                        placeholder="Medicine Category"  
                        className="input-medicine-admin"
                        name="medicineCategory"
                        value={meds.medicineCategory}
                        onChange={inputData}/><br></br>
                        </div>
                        <div>
                        <div className="upload-btn-wrapper-medicine">
                            <btn className="btn-admin-medicine"><i class="fas fa-cloud-upload-alt" style={{marginTop:"100px"}}></i></btn>
                        <input type="file"
                        multiple
                        name="medicineImage"
                        onChange={inputImg}/><br></br><br></br>
                        </div><br></br>
                        <div className="upload-image-button-medicine"> 
                                <button className="btn2-admin-medicine">UPLOAD MEDICINE IMAGE</button>
                        </div><br></br>
                        <input type="checkbox"
                        name="availableStatus"
                        checked={status.availableStatus}
                        onChange={inputStatus}
                        className="largeCheckbov-medicine-admin"/>medicine is in stock<br></br><br></br>
                        </div>
                        </div><br></br>
                        <div className="form-flex-Medadmin">
                        <button className="button-admin-medicine" onClick={()=>addMedicine()}>Add medicine</button>
                        <button className="button-admin-medicine" onClick={()=>updateMedicine()}>update</button>
                        </div>

                    </form>
                    </div>   
                        <table cellPadding="20px"  className="table-medicine ">
                        <tr className="border-tr-medicine table-title-medicine" >
                            <td>Medicine Image</td>
                            <td>Medicine Name</td>
                            <td>Medicine Price</td>
                            <td>Manufacturer Name</td>
                            <td>Medicine Category</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                     {allMedicine.map((item) => {
                        //  console.log('item: ', item);
                        //  if(item.availableStatus === true){
                             return(
                                 
                                         <tr className="border-tr-medicine" data-aos="zoom-in-down">
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
                                                    {item.availableStatus ? (
                                                        <p style={{backgroundColor:"green",color:"white",padding:"5px"}}>In Stock</p>
                                                    ):(<p style={{backgroundColor:"red",color:"white",padding:"5px"}}>Out of stock</p>)}
                                                </td>   
                                             <td>
                                             <button title="update" onClick={()=>editMedicine(item)} className="btn-updateDelte-medicine"><i class="fas fa-edit"></i></button>
                                             </td>
                                             <td>
                                                 <button title="delete" onClick={()=>deleteMedicine(item)} className="btn-updateDelte-medicine"><i class="fas fa-trash-alt"></i></button>
                                             </td>
                                         </tr>
                                   
                                 
                             )
                        //  }
                     }
                     )}
                     </table>

                   
    </div>; 

    }

export default Medicine;