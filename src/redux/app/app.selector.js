import { createSelector } from "reselect";

const States = (state) => state.app;

export const selectStates = createSelector([States], (data) => data.state);
export const selectCurrentDistricts = createSelector(
  [States],
  (data) => data.current_district
);

export const selectFilteredState = createSelector(
  [States],
  (data) => data.filterStates
);
