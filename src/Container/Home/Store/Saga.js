import FetchApi from "../../../Services/CoingeckoApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes, failedLoadingData, saveApiData } from "./Action";

function* getApiData() {
  try {
    const data = yield call(
      FetchApi()
        .then((response) => response)
        .then((data) => data.data)
    );
    yield put(saveApiData(data));
  } catch (error) {
    yield put(failedLoadingData(error));
  }
}

function* AllSagas() {
  yield takeLatest(ActionTypes.FETCH_API_DATA, getApiData);
}

export default AllSagas;
