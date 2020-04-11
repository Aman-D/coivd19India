import { chartActionTypes } from "./chart.actionType";
import { getCategories, getSeries } from "./chart.util";

const INITIAL_STATE = {
  categories: [],
  series: [{}],
};

export const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chartActionTypes.SET_CHART_DATA:
      return {
        ...state,
        categories: getCategories(action.payload),
        series: getSeries(action.payload),
      };
    default:
      return state;
  }
};
