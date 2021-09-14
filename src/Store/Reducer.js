import { combineReducers } from "redux";
import { CoingeckoReducer } from "../Container/Home/Store/Reducer";

const rootReducer = combineReducers({
  CoingeckoReducer,
});

export default rootReducer;
