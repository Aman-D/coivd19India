export const getState = (data) => {
  const new_data = data.map(
    ({ confirmed, state, verified, active, recovered, deaths }) => {
      return { confirmed, state, verified, active, recovered, deaths };
    }
  );
  return new_data;
};

export const getDistrict = (data) => {
  const new_data = data.map(({ state, district }) => {
    return { state, district };
  });
  return new_data;
};

export const setCurrentDist = (state, district) => {
  const dist = district.filter((arr) => {
    if (arr.state == state) {
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
