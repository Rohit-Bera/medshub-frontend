import { combineReducers } from "redux";
import userReducer from "./Reducers/userData.reducer";
import productReducer from "./Reducers/product.reducer";
import adminReducer from "./Reducers/adminData.reducer";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  adminReducer
});

export default rootReducer;
