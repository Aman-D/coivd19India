export const getState = (data) => {
  const { modified_state } = data;
  console.log(modified_state);
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
  // const new_data = modified_state.map(
  //   ({ confirmed, state, verified, active, recovered, deaths }) => {
  //     return { confirmed, state, verified, active, recovered, deaths };
  //   }
  // );
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
  // const new_data = data.map(({ state, district }) => {
  //   return { state, district };
  // });
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
