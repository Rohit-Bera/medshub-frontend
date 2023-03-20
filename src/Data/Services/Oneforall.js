// services for the entire webpage

import axios from "axios";

const host = "https://medshub-backend-server.onrender.com";
// const host = "http://localhost:5500";

// signup service
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

// login service
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

export const searchProductbyCategory = async (category) => {
  const url = `/searchProductbyCategory/${category}`;
  const link = host + url;
  console.log("link: ", link);
  try {
    const receive = await axios.get(link);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const addToCartProduct = async (prod) => {
  console.log("prod: ", prod);
  const { item, token } = prod;
  console.log("token: ", token);
  const url = `/addProdToCart?productId=${item._id}`;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log("headers: ", headers);

  try {
    const link = host + url;
    console.log("link: ", link);

    const response = await axios.post(link, item, headers);

    return response;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const addtoCartMedicine = async (med) => {
  console.log("med: ", med);

  const { item, token } = med;

  const url = `/addMedToCart?medicineId=${item._id}`;

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const link = host + url;
    console.log("link: ", link);

    const response = await axios.post(link, item, headers);

    return response;
  } catch (error) {
    console.log("error: ", error);

    return error;
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

export const addMedicineApi = async (data, headers) => {
  const url = "/addMedicine";
  const link = host + url;
  try {
    const response = await axios.post(link, data, headers);
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const getallMedicineApi = async (headers) => {
  const url = "/getMedicine";
  const link = host + url;
  try {
    const result = await axios.get(link, headers);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const getMedicinesApi = async () => {
  const url = "/getMedicineUser";
  const link = host + url;
  console.log("link: ", link);
  try {
    const receive = await axios.get(link);
    // console.log("receive: ", receive);
    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const deleteMedicineApi = async (headers, _id) => {
  try {
    const url = `/deleteMedicine/${_id}`;
    const link = host + url;
    const response = await axios.delete(link, headers);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const updateMedicineApi = async (_id, data, headers) => {
  try {
    // const host = "http://localhost:5500";
    const url = `/updateMedicine/${_id}`;
    const link = host + url;

    const result = await axios.put(link, data, headers);
    console.log("response: ", result);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const getallProductApi = async (headers) => {
  const url = "/getAllProducts";
  const link = host + url;
  try {
    const result = await axios.get(link, headers);
    return result;
  } catch (error) {
    return error;
  }
};

export const addProductApi = async (data, headers) => {
  const url = "/addProduct";
  // const host = "http://localhost:5500"
  const link = host + url;
  try {
    const response = await axios.post(link, data, headers);
    console.log("response: ", response);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
export const deleteProductApi = async (headers, _id) => {
  try {
    const url = `/deleteProduct/${_id}`;
    const link = host + url;
    const response = await axios.delete(link, headers);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
export const updateProductsApi = async (_id, data, headers) => {
  try {
    const url = `/updateProduct/${_id}`;
    const link = host + url;
    const result = await axios.put(link, data, headers);
    console.log("response: ", result);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const getOrderApi = async (headers) => {
  const url = "/allOrders";
  const link = host + url;
  try {
    const result = await axios.get(link, headers);
    return result;
  } catch (error) {
    return error;
  }
};

export const getPrescriptionApi = async (headers) => {
  const url = "/getAllPrescription";
  const link = host + url;
  try {
    const result = await axios.get(link, headers);
    return result;
  } catch (error) {
    return error;
  }
};
export const updateOrderApi = async (_id, data, headers) => {
  try {
    const url = `/updateOrder/${_id}`;
    const link = host + url;
    const result = await axios.put(link, data, headers);
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
export const updatePrescriptionApi = async (_id, data, headers) => {
  try {
    const url = `/updatePrescription/${_id}`;
    const link = host + url;
    const result = await axios.put(link, data, headers);
    console.log("result: ", result);
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const deletePrescriptionApi = async (id, token) => {
  console.log("token: ", token);
  console.log("_id: ", id);

  try {
    const url = `/deletePrescription/${id}`;
    const link = host + url;

    const headers = { headers: { Authorization: `Bearer ${token}` } };

    const result = await axios.delete(link, headers);

    return { result };
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const postprodWishlistApi = async (_id, item, token) => {
  console.log("token: ", token);
  console.log("_id: ", _id);

  const url = `/addtoWishlistProduct?productId=${_id}`;
  const host = "http://localhost:5500";
  const link = host + url;

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const receive = await axios.post(link, item, headers);
    console.log("receive: ", receive);

    return receive;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const postMedWishlistApi = async (_id, item, token) => {
  console.log("token: ", token);
  console.log("item: ", item);
  console.log("_id: ", _id);

  const url = `/addtoWishlistMedicine?medicineId=${_id}`;
  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const receive = await axios.post(link, item, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const getmyOrderApi = async (token) => {
  console.log("token: ", token);

  const url = "/myOrders";
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

export const deleteOrderApi = async (id, token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const url = `/cancleOrder/${id}`;
  const link = host + url;
  try {
    const receive = await axios.delete(link, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const getmyWishlistApi = async (token) => {
  console.log("token: ", token);

  const url = "/getMyWishlist";
  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.get(link, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const deleteWishlistApi = async (id, token) => {
  const url = `/removeFromWishlist/${id}`;

  const link = host + url;

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.delete(link, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const postWebFeedback = async (data, token) => {
  const url = "/postWebFeedback";
  // const host = "http://localhost:5500";

  const link = host + url;
  console.log("link: ", link);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.post(link, data, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const postProdFeedbackApi = async (data, token) => {
  console.log("token: ", token);
  console.log("data: ", data);

  const url = "/postProductFeedback";
  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.post(link, data, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const postMedFeedbackApi = async (data, token) => {
  console.log("token: ", token);
  console.log("data: ", data);

  const url = "/postMedicineFeedback";
  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.post(link, data, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const postProblemFeedbackApi = async (data, token) => {
  console.log("token: ", token);
  console.log("data: ", data);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const url = "/postOrderProblem";

  const link = host + url;
  try {
    const receive = await axios.post(link, data, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const uploadPrescriptionApi = async (fd, token) => {
  console.log("token: ", token);
  console.log("fd: ", fd);

  const url = "/uploadPrescription";

  const link = host + url;
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const receive = await axios.post(link, fd, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const getSearchProductApi = async (search) => {
  console.log("search: ", search);
  const url = `/getSearchProduct/${search}`;
  const link = host + url;
  try {
    const receive = await axios.get(link);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const getSearchMedicineApi = async (search) => {
  console.log("search: ", search);
  const url = `/getSearchMedicine/${search}`;
  const link = host + url;
  try {
    const receive = await axios.get(link);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

//place order
export const placeOrderProductApi = async (product, token) => {
  console.log("token: ", token);
  console.log("product: ", product);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const url = `/placeOrder?productId=${product._id}`;
    // const host = "http://localhost:5500";
    const link = host + url;

    const receive = await axios.post(link, product, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const placeOrderMedicineApi = async (medicine, token) => {
  console.log("token: ", token);
  console.log("medicine: ", medicine);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  try {
    const url = `/placeOrder?medicineId=${medicine._id}`;

    const link = host + url;

    const receive = await axios.post(link, medicine, headers);

    return receive;
  } catch (error) {
    console.log("error: ", error);

    return error;
  }
};

export const getUserApi = async (headers) => {
  console.log("headers: ", headers);
  // const host = "http://localhost:5500";
  const url = "/getAllUsers";
  const link = host + url;
  try {
    const result = await axios.get(link, headers);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const deleteUserApi = async (headers, _id) => {
  try {
    const url = `/deleteUser/${_id}`;
    const link = host + url;
    const response = await axios.delete(link, headers);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const updateUserApi = async (_id, data, headers) => {
  console.log("data: ", data);
  console.log("_id: ", _id);
  try {
    const url = `/editUser/${_id}`;

    const link = host + url;

    const result = await axios.put(link, data, headers);
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};

export const textqueryApi = async (userMessage) => {
  try {
    const url = "/postChatbot";
    // const host = "http://localhost:5500";
    const link = host + url;

    const result = await axios.post(link, { userMessage });
    return { result };
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const introQueryApi = async () => {
  try {
    const url = `/ChatbotEventQuery/Introduce`;
    const link = host + url;

    const result = await axios.post(link);

    return { result };
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const forgotMailApi = async (email) => {
  console.log("email: ", email);
  try {
    const url = "/forgot-password";

    const link = host + url;

    const result = await axios.post(link, { email });

    return result;
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};

export const resetPasswordApi = async (data) => {
  console.log("data: ", data);
  try {
    const url = "/reset-password";

    const link = host + url;

    const result = await axios.put(link, data);

    return result;
  } catch (error) {
    console.log("error: ", error);

    return { error };
  }
};
