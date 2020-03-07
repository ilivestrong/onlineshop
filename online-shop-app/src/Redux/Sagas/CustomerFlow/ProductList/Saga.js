import { put, takeEvery, select } from "redux-saga/effects";

import { FETCH_PRODUCT_LIST, FETCH_PRODUCT_LIST_BY_NAME, FETCH_PRODUCT_SUCCESS } from "./Action";

import { ProductSearchFilterTypes } from "../../../../common";

function* handleFetchProductList(action) {

  console.log(10000000)
  const searchFilter = action.payload.filter;

  // TODO: Make call() here for the future API to search for products

  // Right now will rely on products in state, got from reducer.
  const allProducts = yield select((state) => state.products);

  let filteredProducts = null;

  if (searchFilter) {
    switch (searchFilter.type) {
      case ProductSearchFilterTypes.ProductName:
        filteredProducts = allProducts && allProducts.filter(p => p.name.includes(searchFilter.value));
        yield put(FETCH_PRODUCT_SUCCESS, filteredProducts);
        break;
      case ProductSearchFilterTypes.CategoryID:
        filteredProducts = allProducts && allProducts.filter(p => p.CategoryID === searchFilter.value);
        yield put(FETCH_PRODUCT_SUCCESS, filteredProducts);
        break;
    }

  } else {
    yield put(FETCH_PRODUCT_SUCCESS, allProducts);
  }
}

export default function* productListSaga() {
  yield takeEvery(FETCH_PRODUCT_LIST, handleFetchProductList);
  yield takeEvery(FETCH_PRODUCT_LIST_BY_NAME, handleFetchProductListByName)
}

