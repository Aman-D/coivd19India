import axios from "axios";

const postmanApi = "https://api.covid19india.org/data.json";
const distUrl = "https://api.covid19india.org/state_district_wise.json";

export const fetchData = async () => {
  const postManData = await axios.get(postmanApi);
  const postMan_DistrictData = await axios.get(distUrl);

  const modified_district = Object.entries(postMan_DistrictData.data).map(
    ([key, value]) => ({
      state: key,
      District: Object.entries(value.districtData).map(([key, value]) => ({
        District: key,
        confirmed: value.confirmed,
      })),
    })
  );

  const modified_state = postManData.data.statewise.map(
    ({ state, confirmed, deaths, recovered, active }) => {
      const data = {
        state,
        confirmed,
        deaths,
        recovered,
        active,
      };
      return data;
    }
  );

  return { modified_state, modified_district };
};

export const fetchDailyData = async () => {
  const fetchData = await axios.get(postmanApi);
  return fetchData.data;
};
