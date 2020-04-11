import { chartActionTypes } from "./chart.actionType";

export const setChartData = (data) => ({
  type: chartActionTypes.SET_CHART_DATA,
  payload: data,
});
