import { all, fork } from "redux-saga/effects";
import AllSagas from "../Container/Home/Store/Saga";

export default function* rootSaga() {
  yield all([...Object.values(AllSagas)].map(fork));    
}
