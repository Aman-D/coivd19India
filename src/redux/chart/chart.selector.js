import { createSelector } from "reselect";

const chart = (state) => state.chart;

export const selectCategories = createSelector(
  [chart],
  (data) => data.categories
);
export const selectSeries = createSelector([chart], (data) => data.series);
