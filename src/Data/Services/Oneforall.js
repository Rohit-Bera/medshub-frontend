// services for the entire webpage

import axios from "axios";

const host = "https://medshub-backend.herokuapp.com";
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

export const addToCartProduct = async (prod) => {
  console.log("prod: ", prod);
  const { item, token } = prod;
  const url = `/addToCart?productId=${item._id}`;
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

  const url = `/addToCart?medicineId=${item._id}`;

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

export const postprodWishlistApi = async (_id, item, token) => {
  console.log("token: ", token);
  console.log("_id: ", _id);

  const url = `/addtoWishlistProduct?productId=${_id}`;
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
