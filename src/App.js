import HeroSection from "./components/HeroSection";
import LineChart from "./components/LineChart";
import ValueChart from "./components/ValueChart";
import { useState, useEffect } from "react";
import {
  getWorldChartData,
  getWorldChartDataRD,
  getWorldValues,
} from "./helper/action";

function App() {
  const [worldChartData, setWorldChartData] = useState({});
  const [worldChartDataRD, setWorldChartDataRD] = useState({});
  const [worldValue, setWorldValues] = useState({});
  useEffect(() => {
    getWorldChartData(setWorldChartData);
    getWorldChartDataRD(setWorldChartDataRD);
    getWorldValues(setWorldValues);
  }, []);
  return (
    <div className="App">
      <HeroSection />
      <div className="line-chart-group">
        <div className="row">
          <LineChart title={"Total Cases"} cases={worldChartData} />
          <LineChart title={"Deaths & Recovered"} cases={worldChartDataRD} />
        </div>
      </div>
      <div className="value-chart-group">
        <div className="row">
          <ValueChart
            title={"Active Cases"}
            heading={"Current Active Cases"}
            subheading1={"Critical Conditions"}
            subheading2={"Mild Conditions"}
            subValue1={"data" in worldValue ? worldValue.data.critical : 120}
            subValue2={
              "data" in worldValue
                ? worldValue.data.active - worldValue.data.critical
                : 120
            }
            headingValue={"data" in worldValue ? worldValue.data.active : 120}
            value1={"data" in worldValue ? worldValue.data.active : 120}
            value2={"data" in worldValue ? worldValue.data.critical : 80}
            labels={["Mild", "Critical"]}
            data={worldValue}
          />

          <ValueChart
            title={"Closed Cases"}
            heading={"Current Closed Cases"}
            subheading1={"Deaths"}
            subheading2={"Recovered"}
            subValue1={"data" in worldValue ? worldValue.data.deaths : 120}
            subValue2={"data" in worldValue ? worldValue.data.recovered : 120}
            headingValue={
              "data" in worldValue
                ? worldValue.data.deaths + worldValue.data.recovered
                : 120
            }
            value1={"data" in worldValue ? worldValue.data.deaths : 120}
            value2={"data" in worldValue ? worldValue.data.recovered : 80}
            labels={["Deaths", "Recover"]}
            data={worldValue}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
