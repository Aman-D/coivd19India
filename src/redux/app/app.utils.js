export const getState = (data) => {
  const { modified_state } = data;

  const new_data = Object.entries(modified_state).map(
    ([key, { confirmed, state, verified, active, recovered, deaths }]) => ({
      confirmed,
      state,
      verified,
      active,
      recovered,
      deaths,
    })
  );

  return new_data;
};

export const getDistrict = (data) => {
  const { modified_district } = data;
  const new_data = Object.entries(modified_district).map(
    ([key, { state, District }]) => ({
      state,
      District,
    })
  );

  return new_data;
};

export const setCurrentDist = (state, district) => {
  const dist = district.filter((arr) => {
    if (arr.state === state) {
      if (arr.district === undefined) {
        const data = {
          state: arr.state,
          dist: [],
        };
        return data;
      } else {
        const data = {
          state: arr.state,
          dist: arr.district,
        };

        return data;
      }
    }
  });

  return dist;
};

export const filterState = (search, state) => {
  const filteredStates = state.filter((state) =>
    state.state.toLowerCase().includes(search.toLowerCase())
  );
  console.log(search);
  return search ? filteredStates : state;
};
