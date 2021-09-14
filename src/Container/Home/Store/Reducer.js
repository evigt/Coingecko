import { ActionTypes } from "./Action";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const CoingeckoReducer = (state = initialState, action) => {
  console.log('CoingeckoReducer.action', action)
  switch (action.type) {
    case ActionTypes.FETCH_API_DATA:
      return { ...state, loading: true };

    case ActionTypes.SAVE_API_DATA:
      return { ...state, loading: false, data: action.data };

    case ActionTypes.FAILED_LOADING_DATA:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
