import Charts from "react-apexcharts";
import valueChartIcon from "../assets/value-chart-icon.svg";
import Loader from "react-loader-spinner";

const ValueChart = ({
  title,
  value1,
  value2,
  data,
  heading,
  headingValue,
  subheading1,
  subheading2,
  subValue1,
  subValue2,
  labels,
}) => {
  const options = {
    options: {
      chart: {
        type: "donut",
      },
    },
    labels: labels,
  };

  return (
    <div className="value-chart col-lg-5">
      <div className="chart-title">
        <h4>{title}</h4>
        <img src={valueChartIcon} alt="value chart icon" />
      </div>
      <div className="current-active-cases">
        <h2>{headingValue}</h2>
        <h5>{heading}</h5>
      </div>
      <div className="value-chart-donut">
        {"data" in data ? (
          <Charts options={options} series={[value1, value2]} type="donut" />
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
      <div className="value-chart-extra-info">
        <div className="left-info">
          <h4>{subValue1}</h4>
          <h5>{subheading1}</h5>
        </div>
        <div className="left-info">
          <h4>{subValue2}</h4>
          <h5>{subheading2}</h5>
        </div>
      </div>
    </div>
  );
};

export default ValueChart;
