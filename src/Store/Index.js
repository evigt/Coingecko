import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./Reducer";
import rootSaga from "./Saga";

const sagaMiddleware = createSagaMiddleware();

export const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);
