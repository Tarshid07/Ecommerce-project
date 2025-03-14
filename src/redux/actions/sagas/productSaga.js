// src/redux/sagas/productSaga.js
import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as types from '../../../constants/index';
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductSuccess,
  fetchProductFailure,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../productActions';
import {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  fetchProductsByCategory,
} from '../../../api/index';

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* fetchProductSaga(action) {
  try {
    const product = yield call(fetchProductById, action.payload);
    yield put(fetchProductSuccess(product));
  } catch (error) {
    yield put(fetchProductFailure(error.message));
  }
}

function* fetchCategoriesSaga() {
  try {
    const categories = yield call(fetchCategories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

function* filterByCategorySaga(action) {
  try {
    const category = action.payload;
    const products = yield call(fetchProductsByCategory, category);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* watchFetchProducts() {
  yield takeLatest(types.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

function* watchFetchProduct() {
  yield takeLatest(types.FETCH_PRODUCT_REQUEST, fetchProductSaga);
}

function* watchFetchCategories() {
  yield takeLatest(types.FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}

function* watchFilterByCategory() {
  yield takeLatest(types.FILTER_BY_CATEGORY, filterByCategorySaga);
}

export default function* productSaga() {
  yield all([
    watchFetchProducts(),
    watchFetchProduct(),
    watchFetchCategories(),
    watchFilterByCategory(),
  ]);
}