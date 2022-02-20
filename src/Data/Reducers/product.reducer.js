import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product - slice",
  initialState: {
    _id: "",
    productName: "",
    productPrice: "",
    productImage: "",
    productBrand: "",
    productCategory: "",
    availableStatus: "",
    productDescription: "",
  },
  reducers: {
    // actions
    productData: (state, action) => {
      console.log("action: ", action);
      const { payload } = action;
      console.log("payload: ", payload);

      state._id = payload.product._id;
      state.availableStatus = payload.product.availableStatus;
      state.productBrand = payload.product.productBrand;
      state.productCategory = payload.product.productCategory;
      state.productImage = payload.product.productImage;
      state.productName = payload.product.productName;
      state.productPrice = payload.product.productPrice;
      state.productDescription = payload.product.productDescription;
    },
  },
});

export const { productData } = productSlice.actions;
export default productSlice.reducer;
