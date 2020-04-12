import { stateActionTypes } from "./app.actionType";
import {
  getState,
  getDistrict,
  setCurrentDist,
  filterState,
} from "./app.utils";
// import { setCurrentDistrict } from "./app.action";

const INITIAL_STATE = {
  state: [],
  district: [],
  filterStates: [],
  current_district: [
    {
      state: "",
      district: "",
    },
  ],
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case stateActionTypes.GET_STATE_DISTRICTS:
      return {
        ...state,
      };
    case stateActionTypes.SET_DATA:
      return {
        ...state,
        state: getState(action.payload),
        district: getDistrict(action.payload),
      };
    case stateActionTypes.SET_CURRENT_DISTRICT:
      return {
        ...state,
        current_district: setCurrentDist(action.payload, state.district),
      };
    case stateActionTypes.FILTER_STATE:
      return {
        ...state,
        filterStates: filterState(action.payload, state.state),
      };
    default:
      return state;
  }
};
