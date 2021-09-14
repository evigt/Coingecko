export const ActionTypes = {
  FETCH_API_DATA: "FETCH_API_DATA",
  SAVE_API_DATA: "SAVE_API_DATA",
  FAILED_LOADING_DATA: "FAILED_LOADING_DATA",
};

export const fetchApiData = () => ({
  type: ActionTypes.FETCH_API_DATA,
});

export const saveApiData = (data) => ({
  type: ActionTypes.SAVE_API_DATA,
  payload: data,
});

export const failedLoadingData = (error) => ({
  type: ActionTypes.FAILED_LOADING_DATA,
  payload: error,
});
