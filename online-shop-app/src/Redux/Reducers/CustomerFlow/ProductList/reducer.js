import { ACTION_TYPE_FETCH_PRODUCT_LIST } from "../../../Sagas/CustomerFlow/ProductList";
import { Products } from "../../../../data";

export const productListReducer = (state = Products, action) => {
  switch (action.type) {
    case ACTION_TYPE_FETCH_PRODUCT_LIST:
      const categorizedProducts = state.filter((p) => p.categoryID === action.payload.categoryId);
      return {
        products: [...categorizedProducts],
      }
    default:
      return {
        products: [...state],
      }
  }
}