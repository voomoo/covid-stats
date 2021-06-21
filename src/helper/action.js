import axios from "axios";

export const getWorldcovidData = async (setter) => {
  try {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    setter(res);
  } catch (error) {
    console.log("Error", error);
    setter(false);
  }
};

export const getWorldChartData = async (setter) => {
  try {
    const res = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const options = {
      chart: {
        id: "active-cases",
      },
      xaxis: {
        categories: Object.keys(res.data.cases),
        tickAmount: 5,
        labels: {
          trim: false,
        },
      },
    };
    const series = [
      {
        name: "Active Cases",
        data: Object.values(res.data.cases),
      },
    ];
    setter({ options, series });
  } catch (error) {
    console.log("Error", error);
    setter(false);
  }
};

export const getWorldChartDataRD = async (setter) => {
  try {
    const res = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const options = {
      chart: {
        id: "active-cases",
      },
      xaxis: {
        categories: Object.keys(res.data.cases),
        tickAmount: 5,
        labels: {
          trim: false,
        },
      },
    };
    const series = [
      {
        name: "Deaths",
        data: Object.values(res.data.deaths),
      },
      {
        name: "Recovered",
        data: Object.values(res.data.recovered),
      },
    ];
    setter({ options, series });
  } catch (error) {
    console.log("Error", error);
    setter(false);
  }
};

export const getWorldValues = async (setter) => {
  try {
    const res = await axios.get("https://disease.sh/v3/covid-19/all");
    console.log("value", res);
    setter(res);
  } catch (error) {
    setter(false);
    console.log("Error", error);
  }
};
