import { createSlice } from "@reduxjs/toolkit";

const medicineSlice = createSlice({
  name: "medicine-sice",
  initialState: {
    _id: "",
    medicineName: "",
    medicineImage: "",
    medicinePrice: "",
    availableStatus: "",
    medicineDescription: "",
    manufacturerName: "",
  },
  reducers: {
    medicineData: (state, action) => {
      console.log("action: ", action);
      const { payload } = action;
      state._id = payload.item._id;
      state.availableStatus = payload.item.availableStatus;
      console.log("state.availableStatus: ", state.availableStatus);
      state.manufacturerName = payload.item.manufacturerName;
      state.medicineImage = payload.item.medicineImage;
      state.medicineName = payload.item.medicineName;
      state.medicineDescription = payload.item.medicineDescription;
      state.medicinePrice = payload.item.medicinePrice;
    },
  },
});

export const { medicineData } = medicineSlice.actions;

export default medicineSlice.reducer;
