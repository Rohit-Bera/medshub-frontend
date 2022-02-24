import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {updateUserApi} from "../Data/Services/Oneforall";
import { userData } from "../Data/Reducers/userData.reducer";
import { Link } from "react-router-dom";
import Modal from "react-modal/lib/components/Modal";
import { Triangle } from "react-loader-spinner";
import { toast } from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
Modal.setAppElement("#root");

const UpdateProfile = () =>{
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
  const phone = useSelector((state) => state.userReducer).phoneNumber;
  const token = useSelector((state) => state.userReducer).token;
  const _id = useSelector((state) => state.userReducer)._id;
  
  const dispatch = useDispatch();
    const[user,setUser] = useState({
        name:name,
        email:email,
        address:address,
        phoneNumber:phone,
        
    })
    
  const takeInput= (e)=>{
    const name = e.target.name
    const value =e.target.value
    setUser({...user,[name]:value})
  }
  const refresh = (e) => {
    e.preventDefault();
  };

    
  const updateUser = async()=>{
    setModalIsOpen(true);
      try {

       
        const headers = {headers:{Authorization: `Bearer ${token}` }}
        const response = await updateUserApi(_id,user,headers)
        console.log('response: ', response);
        if(response){
          setModalIsOpen(false);
          }
        const {name,email,phoneNumber,address} = user
        const signupUser = {
          name,email,phoneNumber,address
        }
        const theUser = {
          signupUser
        }
        dispatch(userData({ theUser }));
        
        if(response.status === 200){
          toast.success("update succesfully!");
        }
        else{
          toast.error("something went wrong!");
        }
      } catch (error) {
          console.log('error: ', error);
          
      }
  }
    return (<div>
        <div>
            <form onSubmit={(e)=>refresh(e)}>
                
               name <input type="text" value={user.name} name="name" onChange={takeInput}/><br></br>
                email<input type="text" value={user.email} name="email" onChange={takeInput}/><br></br>
                number<input type="text" value={user.phoneNumber} name="phoneNumber" onChange={takeInput}/><br></br>
                address<input type="text" value={user.address} name="address" onChange={takeInput}/><br></br>
               
               <Link to="/yourAccount/AccountDetails"><button className="button-admin-medicine" onClick={()=>updateUser()}>update</button></Link>

            </form>
            
        </div>
        <Modal
        isOpen={modalIsOpen}
        // onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
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
    </div>);
}
export default UpdateProfile;