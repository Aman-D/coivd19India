import axios from "axios";

const stateUrl = "https://covid19-data.p.rapidapi.com/india";
const url = "https://covid19-data.p.rapidapi.com/in-dist";
const postmanApi = "https://api.covid19india.org/data.json";
const distUrl = "https://api.covid19india.org/state_district_wise.json";
const headers = {
  "x-rapidapi-host": "covid19-data.p.rapidapi.com",
  "x-rapidapi-key": "b997cfb3c1msh5c16211632a80b0p1e42e5jsn70a395fe74d7",
};
export const fetchStateData = async () => {
  const fetchedData = await axios.get(stateUrl, { headers: headers });

  const stateData = fetchedData.data.map(
    ({ state, confirmed, deaths, recovered, active }) => {
      return {
        state,
        confirmed,
        deaths,
        recovered,
        active,
      };
    }
  );
  return stateData;
};

export const fetchData = async () => {
  const fetchData = await axios.get(url, { headers: headers });
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
  const modifiedData = fetchData.data[0].map(
    ({ state, confirmed, deaths, recovered, active, DistrictReport }) => {
      const data = {
        state,
        confirmed,
        deaths,
        recovered,
        active,
        district: DistrictReport,
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
