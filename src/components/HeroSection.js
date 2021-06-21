//import react components

import { useState, useEffect } from "react";

// import image-assets

import world from "../assets/world.svg";
import globe from "../assets/globe.svg";
import disease_icon from "../assets/disease.svg";
import corona from "../assets/corona.svg";
import recovered from "../assets/recovered.svg";
import skull from "../assets/skull.svg";

// import components

import DataInfoCard from "./DataInfoCard";

//import helper functions

import { getWorldcovidData } from "../helper/action";

const HeroSection = () => {
  const [worldData, setWorldData] = useState({});
  useEffect(() => {
    getWorldcovidData(setWorldData);
  }, []);
  return (
    <div className="hero-section">
      <div className="hero-section-map">
        <img src={world} alt="world map" />
      </div>
      <div className="hero-section-side-info">
        <div className="country-info">
          <div className="country-flag">
            <img src={globe} alt="icon" />
          </div>
          <div className="country-name">
            <h5>World Wide</h5>
          </div>
        </div>
        <DataInfoCard
          icon={disease_icon}
          title={"Total Cases"}
          value={
            Object.keys(worldData).length > 0
              ? worldData.data.cases
              : "Please reload after few minutes"
          }
        />
        <DataInfoCard
          icon={corona}
          title={"Active Now"}
          value={
            Object.keys(worldData).length > 0
              ? worldData.data.active
              : "Please reload after few minutes"
          }
        />
        <DataInfoCard
          icon={recovered}
          title={"Recovered"}
          value={
            Object.keys(worldData).length > 0
              ? worldData.data.recovered
              : "Please reload after few minutes"
          }
        />
        <DataInfoCard
          icon={skull}
          title={"Deaths"}
          value={
            Object.keys(worldData).length > 0
              ? worldData.data.deaths
              : "Please reload after few minutes"
          }
        />
      </div>
    </div>
  );
};

export default HeroSection;
