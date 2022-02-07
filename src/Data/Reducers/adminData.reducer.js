import { createSlice } from "@reduxjs/toolkit";

const adminDataSlice = createSlice({
  name: "Admindata-localStorage",
  initialState: {
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    userType: "admin",
    token: "",
  },

  reducers: {
    // actions
    adminData: (state, action) => {
      console.log("action: ", action);
      const { payload } = action;
      state.name = payload.theUser.signupUser.name;
      state.email = payload.theUser.signupUser.email;
      state.password = payload.theUser.signupUser.password;
      state.address = payload.theUser.signupUser.address;
      state.phoneNumber = payload.theUser.signupUser.phoneNumber;
      state.token = payload.theUser.token;
    },
  },
});

export const { adminData } = adminDataSlice.actions;
export default adminDataSlice.reducer;
