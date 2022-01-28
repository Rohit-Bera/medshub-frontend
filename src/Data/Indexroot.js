import { combineReducers } from "redux";
import userReducer from "./Reducers/userData.reducer";
import productReducer from "./Reducers/product.reducer";

const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

export default rootReducer;
