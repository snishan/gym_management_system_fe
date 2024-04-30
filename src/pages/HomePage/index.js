import React from "react";
import Header from "../../components/header";
import MainBanner from "../../components/mainBanner";
import SecondBanner from "../../components/secondBanner";
import Features from "../../components/features";
import OurClasses from "../../components/ourClasses";
import Trainers from "../../components/trainers";
import Footer from "../../components/footer";
import Products from "../../components/products";

const HomePage = () => {
  return (
    <div>
  <Header/>
  <MainBanner/>
  <Features/>
  <SecondBanner/>
  <OurClasses/>
  <Products/>
  <Trainers/>
  <Footer/>
    </div>

  );
};

export default HomePage;