export const FETCH_PRODUCT_LIST = "FETCH_PRODUCT_LIST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

export const fetchProductList = (payload) => ({
  type: FETCH_PRODUCT_LIST,
  payload,
});
