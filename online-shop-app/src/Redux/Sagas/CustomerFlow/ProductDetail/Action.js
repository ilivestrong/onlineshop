const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
const GET_PRODUCT_DETAIL_SUCCESS = "GET_PRODUCT_DETAIL_SUCCESS";

const getProductDetail = (payload) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload,
  }
}

const getProductDetailSuccess = (payload) => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload,
  }
}

export { GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_SUCCESS, getProductDetail, getProductDetailSuccess }