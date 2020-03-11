import { GET_PRODUCT_DETAIL, getProductDetailSuccess } from "."
import { select, takeEvery, put } from "redux-saga/effects";

function* handleProductDetailSaga(action) {

  const selectedProductID = action.payload.selectedProductID;
  const products = yield select((state) => state.products);
  const productDetail = products.filter(p => p.id === selectedProductID)[0];

  yield put(getProductDetailSuccess({ productDetail }));
}

export default function* productDetailSaga() {
  yield takeEvery(GET_PRODUCT_DETAIL, handleProductDetailSaga);
}