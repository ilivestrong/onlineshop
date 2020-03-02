import { combineReducers } from "redux";
import { productListReducer } from "./CustomerFlow";

export default combineReducers({
  products: productListReducer,
});