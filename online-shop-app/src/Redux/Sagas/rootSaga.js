import { all } from "redux-saga/effects";

import { productListSaga } from "./CustomerFlow/ProductList";


export default function* rootSaga() {
  yield all([
    productListSaga(),
  ]);
}