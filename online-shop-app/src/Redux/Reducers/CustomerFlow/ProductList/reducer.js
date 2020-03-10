import { ProductListActionTypes } from "../../../Sagas/CustomerFlow/ProductList";

let initialState = [];

export const productListReducer = (state = initialState , action) => {
  switch (action.type) {
    case ProductListActionTypes.FETCH_PRODUCT_LIST:
      return {
        ...action.payload,
      };
    case ProductListActionTypes.FETCH_PRODUCT_SUCCESS:
      return [...action.filteredProducts];
    default:
      return state;
  }
}