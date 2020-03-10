import { all } from "redux-saga/effects";

import { productListSaga } from "./CustomerFlow/ProductList";
import { productDetailSaga } from "./CustomerFlow/ProductDetail";


export default function* rootSaga() {
  yield all([
    productListSaga(),
    productDetailSaga(),
  ]);
}