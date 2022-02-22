import React, { useState } from "react";
import { useSelector } from "react-redux";
import {updateUserApi} from "../Data/Services/Oneforall";


const UpdateProfile = () =>{
    const[user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        address:"",
        phoneNumber:""
    })
  const name = useSelector((state) => state.userReducer).name;
  const email = useSelector((state) => state.userReducer).email;
  const address = useSelector((state) => state.userReducer).address;
//   const password = useSelector((state) => state.userReducer).password;
  const phone = useSelector((state) => state.userReducer).phoneNumber;
  const token = useSelector((state) => state.userReducer).token;
//   console.log('token: ', token);
  const _id = useSelector((state) => state.userReducer).id;
  console.log('_id: ', _id);
    
  const updateUser = async()=>{
      try {
        const fd = new FormData();
        fd.append("name",name);
        fd.append("email",email);
        fd.append("address",address);
        fd.append("phone",phone);
        // fd.append("password",password)
        const headers = {headers:{Authorization: `Bearer ${token}` }}
        const response = await updateUserApi(_id,fd,headers)
        console.log('response: ', response);

      } catch (error) {
          console.log('error: ', error);
          
      }
  }
    return (<div>
        <div>
            <form>
                
               name <input type="text" value={name}/><br></br>
                email<input type="text" value={email}/><br></br>
                number<input type="text" value={phone}/><br></br>
                address<input type="text" value={address}/><br></br>
               {/* password <input type="password" value={password} /> */}
               <button className="button-admin-medicine" onClick={()=>updateUser()}>update</button>

            </form>
            
        </div>
    </div>);
}
export default UpdateProfile;