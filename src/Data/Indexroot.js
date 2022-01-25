import { combineReducers } from "redux";
import userReducer from "./Reducers/userData.reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
