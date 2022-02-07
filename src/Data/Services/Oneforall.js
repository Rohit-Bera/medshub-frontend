// services for the entire webpage

import axios from "axios";

const host = "https://medshub-backend.herokuapp.com";
// const host = "http://localhost:5500";
export const postUserService = async (data) => {
  console.log("data: ", data);
  const url = "/signUp";

  try {
    const link = host + url;

    const receive = await axios.post(link, data);

    return { receive };
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const loginUserService = async (data) => {
  console.log("data: ", data);
  const url = "/logIn";
  try {
    const link = host + url;
    const receive = await axios.post(link, data);

    return { receive };
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const searchProductbyBrand = async (brand) => {
  const url = `/getSearchProductbyBrand/${brand}`;
  const link = host + url;
  console.log("link: ", link);
  try {
    const receive = await axios.get(link);
    const data = receive.data.found.searchpro;

    return { data };
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const getMyCart = async (token) => {
  const url = "/myCart";
  const link = host + url;

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.get(link, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};
export const deleteFromCart = async (_id, token) => {
  console.log("token: ", token);
  console.log("_id: ", _id);

  const url = `/deleteFromCart/${_id}`;

  const link = host + url;
  console.log("link: ", link);

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const receive = await axios.delete(link, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const addMedicineApi = async(data,headers)=>{
  
  const url = "/addMedicine"
  const link = host+url;
  try{
    const response = await axios.post(link,data,headers);
    console.log('response: ', response);
    return response;
  }
  catch(error){
    console.log('error: ', error);
    return error; 
  }
};


export const getallMedicineApi = async(headers)=>{
  const url= "/getMedicine";
  const link = host+url;
  try {
      const result = await axios.get(link,headers);
      return result;
  } catch (error) {
    return error;
  }
};

export const deleteMedicineApi = async(headers,_id)=>{
 try {
  const url = `/deleteMedicine/${_id}`;
  const link = host+url;
  const response = await axios.delete(link,headers);
  return response;
 } catch (error) {
   console.log('error: ', error); 
   return error; 

 }
}

export const updateMedicineApi = async(_id,data,headers)=>{
  try {
    const url=`/updateMedicine/${_id}`;
    const link = host+url;
    
    const result = await axios.put(link,data,headers);
    console.log('response: ', result);
    return result;
  } catch (error) {
    console.log('error: ', error);
   return error; 
  }
}

export const getallProductApi = async(headers)=>{
  const url= "/getAllProducts";
  const link = host+url;
  try {
      const result = await axios.get(link,headers);
      return result;
  } catch (error) {
    return error;
  }
}
export const addProductApi = async(data,headers)=>{
  const url = "/addProduct"
  const link = host+url;
  try {
    const response = await axios.post(link,data,headers);
    console.log('response: ', response);
    return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
    
  }
} ;
export const deleteProductApi = async(headers,_id)=>{
  try {
    const url = `/deleteProduct/${_id}`;
  const link = host+url;
  const response = await axios.delete(link,headers);
return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
    
  }
};
export const updateProductsApi = async(_id,data,headers)=>{
  try {
    const url = `/updateProduct/${_id}`;
    const link = host+url;
    const result = await axios.put(link,data,headers);
    console.log('response: ', result);
    return result;
  } catch (error) {
    console.log('error: ', error);
    return error;
    
  }
}

export const getOrderApi = async(headers)=>{
  const url= "/allOrders";
  const link = host+url;
  try {
    const result = await axios.get(link,headers);
    return result;
  } catch (error) {
    return error;
  }
}

export const getPrescriptionApi = async(headers)=>{
  const url = "/getAllPrescription";
  const link = host+url;
  try {
    const result = await axios.get(link,headers);
    return result;
  } catch (error) {
    return error;
  }

}
export const updateOrderApi = async(_id,data,headers)=>{
  try {
    const url = `/updateOrder/${_id}`;
  const link = host+url;
  const result = await axios.put(link,data,headers);
  console.log('result: ', result);
  return result;
  } catch (error) {
    console.log('error: ', error);
    return error;
    
  }
}
export const updatePrescriptionApi = async(_id,data,headers)=>{
  try {
    const url = `/updatePrescription/${_id}`;
  const link = host+url;
  const result = await axios.put(link,data,headers);
  console.log('result: ', result);
  } catch (error) {
    console.log('error: ', error);
    return error;
    
  }
}