import { put, takeEvery, all } from "redux-saga/effects";

import { FETCH_PRODUCT_LIST, FETCH_PRODUCT_SUCCESS } from "./Action";
import { ProductSearchFilterTypes } from "../../../../common";
import { Products } from "../../../../data/dummyProducts";

function* handleFetchProductList(action) {
  const searchFilter = action.payload.filter;

  // TODO: Make call() here for the future API to search for products

  // Right now will rely on products in state, got from reducer.
  const allProducts = Products;
  let filteredProducts = [];

  if (searchFilter) {
    switch (searchFilter.type) {
      case ProductSearchFilterTypes.ProductName:
        filteredProducts = allProducts && allProducts.filter(p => p.name.toLowerCase().includes(searchFilter.value.toLowerCase()));
        yield put({ type: FETCH_PRODUCT_SUCCESS, filteredProducts });
        break;
      case ProductSearchFilterTypes.CategoryID:
        filteredProducts = allProducts && allProducts.filter(p => p.CategoryID === searchFilter.value);
        yield put({ type: FETCH_PRODUCT_SUCCESS, filteredProducts });
        break;
    }
  } else {
    filteredProducts = allProducts;
    yield put({type: FETCH_PRODUCT_SUCCESS, filteredProducts});
  }
}

export default function* productListSaga() {
  yield takeEvery(FETCH_PRODUCT_LIST, handleFetchProductList);
}

