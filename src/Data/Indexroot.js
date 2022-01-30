import { combineReducers } from "redux";
import userReducer from "./Reducers/userData.reducer";
import productReducer from "./Reducers/product.reducer";
import medicineReducer from "./Reducers/medicine.reducer";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  medicineReducer,
});

export default rootReducer;
