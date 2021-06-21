import Charts from "react-apexcharts";
import lineChartIcon from "../assets/line-chart-icon.svg";
import Loader from "react-loader-spinner";

const LineChart = ({ title, cases }) => {
  console.log("Data", typeof cases);
  return (
    <div className="line-chart col-6">
      <div className="chart-title">
        <h4>{title}</h4>
        <img src={lineChartIcon} alt="line chart icon" />
      </div>
      {"options" in cases ? (
        <Charts options={cases.options} series={cases.series} type="line" />
      ) : (
        <div className="my-loader">
          <Loader
            type="Watch"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
          <h3>LOADING...</h3>
        </div>
      )}
    </div>
  );
};

export default LineChart;
