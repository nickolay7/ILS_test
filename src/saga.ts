import { call, takeEvery, takeLatest, put } from "redux-saga/effects";
import {fetchPath} from "shared/api/api";
import {sagaActions} from "sagaActions";
import {fetchData, Order} from "features/ordersMap";
import {PayloadAction} from "@reduxjs/toolkit";

export function* fetchDataSaga({ payload }: PayloadAction<Order>): any {
  try {
    let result = yield call(() => fetchPath(payload));
    yield put(fetchData());
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
