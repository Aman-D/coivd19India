export const getCategories = (data) => {
  const arr = data.cases_time_series;
  const labels = arr.map(({ date }) => date);
  return labels.slice(20);
};

export const getSeries = (data) => {
  const arr = data.cases_time_series;
  const totalconfirmed = arr.map(({ totalconfirmed }) => totalconfirmed);
  const totaldeceased = arr.map(({ totaldeceased }) => totaldeceased);
  const totalrecovered = arr.map(({ totalrecovered }) => totalrecovered);

  const series = [
    {
      name: "Total Confirmed",
      data: totalconfirmed.slice(20),
    },
    {
      name: "Total Deceased",
      data: totaldeceased.slice(20),
    },
    {
      name: "Total recovered",
      data: totalrecovered.slice(20),
    },
  ];
  return series;
};
