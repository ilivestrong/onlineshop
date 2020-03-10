import { GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_SUCCESS } from "../../../Sagas/CustomerFlow/ProductDetail";

const productDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      const { selectedProductID } = action.payload;
      return {
        ...state,
        selectedProductID,
      }
    case GET_PRODUCT_DETAIL_SUCCESS:
      return action.payload.productDetail;
    default:
      return state;
  }
}

export { productDetailReducer }