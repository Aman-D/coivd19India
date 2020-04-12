import { stateActionTypes } from "./app.actionType";

export const setData = (data) => ({
  type: stateActionTypes.SET_DATA,
  payload: data,
});

export const setDistrict = (data) => ({
  type: stateActionTypes.SET_DISTRICT,
  payload: data,
});

export const setCurrentDistrict = (state) => ({
  type: stateActionTypes.SET_CURRENT_DISTRICT,
  payload: state,
});

export const filterState = (search) => ({
  type: stateActionTypes.FILTER_STATE,
  payload: search,
});
