import { call, takeEvery, put } from "redux-saga/effects";
import {fetchPath} from "shared/api/api";
import {fetchSuccess, Order} from "features/ordersMap";
import {PayloadAction} from "@reduxjs/toolkit";

export function* fetchDataSaga(action: PayloadAction<Order>): any {
  const { payload } = action;

  console.log(action, 'action');

  try {
    let result = yield call(() => fetchPath(payload));
    yield put(fetchSuccess(result));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}
export default function* rootSaga() {
  yield takeEvery('@@orderMap/fetchData', fetchDataSaga);
}
