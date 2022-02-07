import { combineReducers } from "redux";
import userReducer from "./Reducers/userData.reducer";
import productReducer from "./Reducers/product.reducer";

import adminReducer from "./Reducers/adminData.reducer";

import medicineReducer from "./Reducers/medicine.reducer";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  adminReducer,
  medicineReducer,
});

export default rootReducer;
