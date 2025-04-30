import React from "react";
import Card from "./HomeCard/Card";
import Brand from "./Brand/Brand";
import Days from "./Days/Days";
import BigCard from "./Bigcard/BigCard";
import BrandCard from "./BrandCard/BrandCard";
import FastLaunch from "./FastLaunch/FastLaunch";
// import Posts from "./Posts/Posts";
import ObviCard from "./ObviCard/ObviCard";
// import RiskCard from "./RiskCard/RiskCard";
// import Trends from "./Trends/Trends";

const Home = () => {
  return (
    <>
      <div>
        <Card />
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <Days />
      </div>

      <div>
        <BigCard />
      </div>

      <div>
        <BrandCard />
      </div>

      <div>
        <FastLaunch />
      </div>

      {/* <div>
        <Posts />
      </div> */}

      <div>
        <ObviCard />
      </div>
      {/* 
      <div>
        <RiskCard />
      </div>
      <div>
        <Trends />
      </div> */}
    </>
  );
};

export default Home;
