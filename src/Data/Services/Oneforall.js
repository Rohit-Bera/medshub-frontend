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

export const searchProductbyBrand = async () => {
  const url = "/getSearchProductbyBrand/dabur";
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
