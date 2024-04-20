import React from "react";
import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";
import SecondBanner from "../../components/secondBanner";
import Features from "../../components/features";
import OurClasses from "../../components/ourClasses";

const HomePage = () => {
  return (
    <div>
  <Header/>
  <MainBanner/>
  <Features/>
  <SecondBanner/>
  <OurClasses/>
    </div>

  );
};

export default HomePage;