import { combineReducers } from "redux";
import { productListReducer, productDetailReducer } from "./CustomerFlow";

export default combineReducers({
  products: productListReducer,
  productDetail: productDetailReducer,
});