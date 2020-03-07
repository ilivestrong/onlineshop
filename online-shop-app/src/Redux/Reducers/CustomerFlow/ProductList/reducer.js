import { ProductListActionTypes } from "../../../Sagas/CustomerFlow/ProductList";
import { Products } from "../../../../data";

export const productListReducer = (state = Products, action) => {
  switch (action.type) {
    case ProductListActionTypes.FETCH_PRODUCT_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case ProductListActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        data: action.filteredProducts,
      }
    default:
      return [...state]
  }
}