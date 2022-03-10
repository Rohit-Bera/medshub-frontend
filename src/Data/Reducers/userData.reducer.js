import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "Userdata-localStorage",
  initialState: {
    _id: "",
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    userType: "user",
    token: "",
  },

  reducers: {
    // actions
    userData: (state, action) => {
      console.log("action: ", action);
      const { payload } = action;
      state.name = payload?.theUser.signupUser.name;
      state.email = payload?.theUser.signupUser.email;
      state.password = payload?.theUser.signupUser.password;
      state.address = payload?.theUser.signupUser.address;
      state.phoneNumber = payload?.theUser.signupUser.phoneNumber;
      state._id = payload?.theUser.signupUser._id;
      state.token = payload?.theUser.token;
    },
  },
});

export const { userData } = userDataSlice.actions;
export default userDataSlice.reducer;
